import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NeoServiceService } from './service/neo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navLinks = [
    { location: '/rec', label: 'Recommendation', icon: 'query_stats' },
    { location: '/trxn', label: 'Transaction', icon: 'attach_money' },
    { location: '/target-user', label: 'Target User', icon:'face'}
  ];

  toppings = new FormControl('');
  toppingList: any;

  title = 'Simple Analysis System.';
  constructor(private neoService: NeoServiceService){
    const currentUser = localStorage.getItem('user');
    this.toppings.setValue(currentUser)
    this.neoService.getUser().subscribe((data:any)=>{
      this.toppingList = data.message;
    })
  }

  changeUser(value:string){
    localStorage.setItem('user',value)
  }
}
