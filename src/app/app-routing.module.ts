import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { EditproductComponent } from './editproduct/editproduct.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addproduct', component: CreateproductComponent },
  { path: 'productlist', component: ProductlistComponent},
  {path:'editlist/:id', component: EditproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
