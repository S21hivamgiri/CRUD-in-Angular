import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styles: []
})
export class CreateproductComponent {
  product: ProductModel;
  products: any[];
  productname: FormControl;
  category: FormControl;
  quantity: FormControl;
  unitprice: FormControl;
  batchno: FormControl;
  mfgdate: FormControl;

  constructor(readonly router:Router) { 
    if(!localStorage.getItem('products')){
      this.products = [];
    }
    else{
      this.products = JSON.parse(localStorage.getItem('products'));
    }

    this.product = new ProductModel();
    this.productname = new FormControl('');
    this.category = new FormControl('');
    this.quantity = new FormControl('');
    this.unitprice = new FormControl('');
    this.batchno = new FormControl('');
    this.mfgdate = new FormControl(formatDate(new Date(), 'yyyy-MM-dd', 'en'));
  }

  save(){
    try{
      this.product.productname = this.productname.value;
      this.product.category = this.category.value;
      this.product.quantity = this.quantity.value;
      this.product.unitprice = this.unitprice.value;
      this.product.batchno = this.batchno.value;
      this.product.mfgdate = new Date(this.mfgdate.value);
      this.products.push(this.product);
      
      localStorage.setItem('products', JSON.stringify(this.products));
      this.router.navigate(['/productlist'])
    }
    catch(e){
      console.log(e);
    }
  }

}
