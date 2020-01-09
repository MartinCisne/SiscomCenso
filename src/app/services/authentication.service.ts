import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { EndpointService } from './endpoint.service';


@Injectable()
export class AuthenticationService {
  
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  tokenTrue: any;
  currentUserSubscription: Subscription;

  constructor(
    private http: HttpClient,
    public endpoints:EndpointService,
  ) {
      this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    

  public get currentUserValue(): any {
      return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    let body = JSON.stringify({ 'username': username, 'password': password });
    let head = new HttpHeaders({ 'Content-Type': 'application/json' , 'Accept': 'application/json' });

      return this.http.post<any>(this.endpoints.login_post, body,{
        headers: head
      })
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

      return user;
          }));
  }

  logout() {
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }

}
