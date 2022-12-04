import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NeoServiceService {
  URL = 'xxx.xxx.xxx.xxx'; // change this to backend url.
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {
   }
   getMenu(){
    let fullUrl = this.URL+'recommend/list';
    let user = localStorage.getItem('user') || 'Candice';
    return this.httpClient.post(fullUrl,{
      user:user
   })
   }

   getUser(){
    let fullUrl = this.URL+'recommend/user'
    return this.httpClient.get(fullUrl)
   }

   transaction(feature:any){
    let fullUrl = this.URL+'recommend';
    let user = localStorage.getItem('user') || 'Candice';
    return this.httpClient.post(fullUrl, {user, feature})
   }

   initTransaction(product:any){
    let fullUrl = this.URL+'payment/initiate';
    let user = localStorage.getItem('user') || 'Candice';
    console.log(product, user)
    return this.httpClient.post(fullUrl, {user,product})
   }

   verifyTransaction(product:any){
    let fullUrl = this.URL+'payment/verify';
    let user = localStorage.getItem('user') || 'Candice';
    return this.httpClient.post(fullUrl, {user,product})
   }

   confirmTransaction(product:any){
    let fullUrl = this.URL+'payment/confirm';
    let user = localStorage.getItem('user') || 'Candice';
    return this.httpClient.post(fullUrl, {user,product})
   }

   getProductRecommend(){
    let fullUrl = this.URL+'payment/recommend';
    let user = localStorage.getItem('user') || 'Candice';
    return this.httpClient.post(fullUrl,{user})
   }

   getTargetUser(transaction:any){
    let fullUrl = this.URL+'recommend/target-user';
    return this.httpClient.post(fullUrl, {transaction})
   }
}
