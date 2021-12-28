import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styles: [
    `
    .lead{
      justify-content: space-between;
    }
    .red:hover{
      background-color: red;
      color: white;
    }
    .green:hover{
      background-color: green;
      color: white;
    }
    .skyblue:hover{
      background-color: skyblue;
      color: white;
    }
    .blue:hover{
      background-color: blue;
      color: white;
    }
    `
  ]
})
export class ProductlistComponent {
  products: any[];
  constructor(private router: Router) {
    if (localStorage.getItem('products')) {
      this.products = JSON.parse(localStorage.getItem('products'));
    }
  }

  delete(i) {
    this.products.splice(i, 1);
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  edit(i) {
    this.router.navigate(["/editlist/" + i])
  }
}
