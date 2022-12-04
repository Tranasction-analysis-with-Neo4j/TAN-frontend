import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecoComponent } from './reco/reco.component';
import { TargetUserComponent } from './target-user/target-user.component';
import { TrxnComponent } from './trxn/trxn.component';

const routes: Routes = [{
  path:'',
  redirectTo:'/trxn',
  pathMatch:'full'
},
{
  path:'trxn',
  component: TrxnComponent
},
{
  path:'rec',
  component: RecoComponent
},
{
  path:'target-user',
  component: TargetUserComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
