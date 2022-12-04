import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NeoServiceService } from '../service/neo-service.service';
import {FormBuilder, Validators} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-trxn',
  templateUrl: './trxn.component.html',
  styleUrls: ['./trxn.component.scss']
})
export class TrxnComponent implements OnInit {
  @ViewChild('stepper') stepper: any;
  products = [
    {value: 'topup', viewValue: 'Mobile Topup'},
    {value: 'airTicketing', viewValue: 'Air Ticketing'},
    {value: 'fundTransfer', viewValue: 'Fund Transfer'},
    {value: 'electricity', viewValue: 'electricity'},
    {value: 'noc', viewValue: 'noc'},
    {value: 'loadWallet', viewValue: 'Load Wallet'},
    {value: 'internet', viewValue: 'Internet Payment'}
  ]
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ["topup", Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  recommendedProducts = [];

  constructor(private _formBuilder: FormBuilder, private neoService:NeoServiceService) {}
  ngOnInit(): void {
    this.fetchProduct();
  }

  fetchProduct(){
    let user = localStorage.getItem('user') || 'Candice';
    if(user){
      this.neoService.getProductRecommend().subscribe((data:any)=>{
        console.log(data.recommend)
        this.recommendedProducts = data.recommend
      })
    }
  }

  initPayment(){
    let product = this.firstFormGroup.value.firstCtrl;
    if(product){
      this.neoService.initTransaction(product).subscribe(data=>{
        console.log(data)
      });
      this.stepper.next()
    }
    
  }

  verifyPayment(){
    let product = this.firstFormGroup.value.firstCtrl;
    if(product){
      this.neoService.verifyTransaction(product).subscribe(data=>{
        console.log(data)
      });
      this.stepper.next()
    }
  }

  confirmPayment(){
    let product = this.firstFormGroup.value.firstCtrl;
    if(product){
      this.neoService.confirmTransaction(product).subscribe(data=>{
        console.log(data)
      });
      this.stepper.next()
    }
  }
  public get product(){
    return this.firstFormGroup.value.firstCtrl;
  }
  getProduct(product:any){
    let productValue = this.products.find((element:any)=> element.value == product)
    return productValue?.viewValue
  }
  public get pin(){
    return this.secondFormGroup.value.secondCtrl;
  }

  refreshProduct(){
    this.fetchProduct();
  }
}
