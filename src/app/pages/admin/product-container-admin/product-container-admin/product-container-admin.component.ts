import { ProductService } from './../../../../../services/product.service';
import { HttpClient } from '@angular/common/http';
import { ProductList } from 'src/app/model/productList';
import { Iproduct } from './../../../../model/iproduct';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-container-admin',
  templateUrl: './product-container-admin.component.html',
  styleUrls: ['./product-container-admin.component.css']
})
export class ProductContainerAdminComponent implements OnInit {
  products: any;




  constructor(private productServies: ProductService) {


  }
  ngOnInit(): void {

    this.productServies.getAllProduct().subscribe((response) => {
      console.log(response);
      this.products = response;
    })
  }



}
