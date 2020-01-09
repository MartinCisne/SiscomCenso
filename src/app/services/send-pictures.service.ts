import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { AuthenticationService } from './authentication.service';
import { EndpointService } from './endpoint.service'

@Injectable({
  providedIn: 'root'
})
export class SendPicturesService {

  constructor(
    private http: HttpClient,
    protected localStorage: LocalStorage,
    private authenticationService: AuthenticationService,
    public endpoints: EndpointService,
  ) { }
}
