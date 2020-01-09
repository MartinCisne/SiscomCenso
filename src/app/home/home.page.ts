import { Component, ViewChild, ElementRef } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult , NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';

import { File } from '@ionic-native/file/ngx';
import { PhotoService } from '../services/photo.service';

declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('map',{static:true}) mapElement: ElementRef;
  map: any;
  address:string;
  capturedSnapURL:string;

  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private camera: Camera,
    public photoService: PhotoService,
    private storage: Storage,
    private file: File) {
  }

  cameraOptions: CameraOptions = {
    quality: 20,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.CAMERA
  }

  ngOnInit() {
    this.loadMap();
    this.loadSaved();
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.map.addListener('tilesloaded', () => {
        console.log('accuracy',this.map);
        this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
      });

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getAddressFromCoords(lattitude, longitude) {
    console.log("getAddressFromCoords "+lattitude+" "+longitude);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        this.address = "";
        let responseAddress = [];
        for (let [key, value] of Object.entries(result[0])) {
          if(value.length>0)
          responseAddress.push(value);

        }
        responseAddress.reverse();
        for (let value of responseAddress) {
          this.address += value+", ";
        }
        this.address = this.address.slice(0, -2);
      })
      .catch((error: any) =>{ 
        this.address = "Address Not Available!";
      });

  }

  takePhoto(){
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
      // Add new photo to gallery
      this.photoService.photos.unshift({
          data: 'data:image/jpeg;base64,' + imageData
      }); 
    
      this.storage.set('photos', this.photoService.photos);
    }, (err) => {
      // Handle error
      console.log("Camera issue: " + err);
  });
  }

  loadSaved() {
    this.storage.get('photos').then((photos) => {
      this.photoService.photos = photos || [];
    });
  }

  takeSnap() {
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
      
      //this.camera.DestinationType.FILE_URI //gives file URI saved in local
      //this.camera.DestinationType.DATA_URL //gives base64 URI
      
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.writeFile(base64Image, "Pictures", "sample.jpeg"); 
      this.capturedSnapURL = base64Image;
      this.storage.set('photos', this.photoService.photos)
    }, (err) => {
      
      console.log(err);
      // Handle error
    });
  }

  writeFile(base64Data: any, folderName: string, fileName: any) {  
    let contentType = this.getContentType(base64Data);  
    let DataBlob = this.base64toBlob(base64Data, contentType);  
    // here iam mentioned this line this.file.externalRootDirectory is a native pre-defined file path storage. You can change a file path whatever pre-defined method.  
    let filePath = this.file.externalRootDirectory + folderName;  
    this.file.writeFile(filePath, fileName, DataBlob, contentType).then((success) => {  
        console.log("File Writed Successfully", success);  
    }).catch((err) => {  
        console.log("Error Occured While Writing File", err);  
    })  
} 

getContentType(base64Data: any) {  
  let block = base64Data.split(";");  
  let contentType = block[0].split(":")[1];  
  return contentType;  
}  

base64toBlob(b64Data, contentType) {  
  contentType = contentType || '';  
  let sliceSize = 512;  
  let byteCharacters = atob(b64Data);  
  let byteArrays = [];  
  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {  
      let slice = byteCharacters.slice(offset, offset + sliceSize);  
      let byteNumbers = new Array(slice.length);  
      for (let i = 0; i < slice.length; i++) {  
          byteNumbers[i] = slice.charCodeAt(i);  
      }  
      var byteArray = new Uint8Array(byteNumbers);  
      byteArrays.push(byteArray);  
  }  
  let blob = new Blob(byteArrays, {  
      type: contentType  
  });  
  return blob;  
}  
}
