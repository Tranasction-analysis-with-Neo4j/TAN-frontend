import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NeoServiceService } from '../service/neo-service.service';

@Component({
  selector: 'app-target-user',
  templateUrl: './target-user.component.html',
  styleUrls: ['./target-user.component.scss']
})
export class TargetUserComponent implements OnInit {

  products = [
    {value: 'topup', viewValue: 'Mobile Topup'},
    {value: 'airTicketing', viewValue: 'Air Ticketing'},
    {value: 'fundTransfer', viewValue: 'Fund Transfer'},
    {value: 'electricity', viewValue: 'electricity'},
    {value: 'noc', viewValue: 'noc'},
    {value: 'loadWallet', viewValue: 'Load Wallet'},
    {value: 'internet', viewValue: 'Internet Payment'}
  ]
  targatedUser = [];

  constructor(private _formBuilder: FormBuilder, private neoService:NeoServiceService) { }
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ["topup", Validators.required],
  });
  ngOnInit(): void {
    // this.fetchProduct();
    this.getUsers();
  }

  getUsers(){
    let transaction = this.firstFormGroup.value.firstCtrl;
    if(transaction){
      this.neoService.getTargetUser(transaction).subscribe((data:any)=>{
        this.targatedUser = data.data;
      })
    }
  }

  fetchTargets(){
    // let user = localStorage.getItem('user') || 'Candice';
    // if(user){
    //   this.neoService.getProductRecommend().subscribe((data:any)=>{
    //     console.log(data.recommend)
    //     this.recommendedProducts = data.recommend
    //   })
    // }
  }

}
