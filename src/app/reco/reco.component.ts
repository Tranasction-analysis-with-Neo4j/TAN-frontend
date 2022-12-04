import { Component, OnInit } from '@angular/core';
import { NeoServiceService } from '../service/neo-service.service';
import {concatMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-reco',
  templateUrl: './reco.component.html',
  styleUrls: ['./reco.component.scss']
})
export class RecoComponent implements OnInit {

  menus:any;

  menuWithFeatures:any = [
    {
      menuName:'Transfer',
      features:['Fonepay Direct','GIBL Fund Transfer','IBFT'],
    },
    {
      menuName:'A/C Statements',
      features:['Bank Statement','Statement Request','Statement Request History'],
    },
    {
      menuName:'Load To Wallet',
      features:['Load To Imepay','Load To Esewa','Load To Khalti'],
    },
    {
      menuName:'Payment',
      features:['Government Payment', 'Merchant Payment','Mobile Topup','Tv payment']
    }
  ]


  constructor(private neoService: NeoServiceService) { 
    this.neoService.getMenu().subscribe((data:any)=>{
      this.menus = data.message
    })
  }
  ngOnInit(): void {
  }
  featureUsed(feature:any){
    this.neoService.transaction(feature).pipe(
      concatMap(res=> this.neoService.getMenu())
    ).subscribe((data:any)=>console.log(
      this.menus = data.message
      ))
  }
}
