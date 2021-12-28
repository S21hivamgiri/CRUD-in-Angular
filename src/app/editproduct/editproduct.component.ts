import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/models/product.model';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html'
})
export class EditproductComponent {
  product: ProductModel;
  products: any[];
  productname: FormControl;
  category: FormControl;
  quantity: FormControl;
  unitprice: FormControl;
  batchno: FormControl;
  mfgdate: FormControl;
  id:number;
  
  constructor(readonly router: Router, private route: ActivatedRoute) {
    if (!localStorage.getItem('products')) {
      this.products = [];
    }
    else {
      this.products = JSON.parse(localStorage.getItem('products'));
    }
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.product = this.products[this.id];
      this.productname = new FormControl(this.product.productname);
      this.category = new FormControl(this.product.category);
      this.quantity = new FormControl(this.product.quantity);
      this.unitprice = new FormControl(this.product.unitprice);
      this.batchno = new FormControl(this.product.batchno);
      this.mfgdate = new FormControl(formatDate(this.product.mfgdate, 'yyyy-MM-dd','en'));
    });
  }

  save() {
    try {
      this.product.productname = this.productname.value;
      this.product.category = this.category.value;
      this.product.quantity = this.quantity.value;
      this.product.unitprice = this.unitprice.value;
      this.product.batchno = this.batchno.value;
      this.product.mfgdate = new Date(this.mfgdate.value);

      this.products.splice(this.id,1,this.product);
      localStorage.setItem('products', JSON.stringify(this.products));
      this.router.navigate(['/productlist'])
    }
    catch (e) {
      console.log(e);
    }
  }

}
