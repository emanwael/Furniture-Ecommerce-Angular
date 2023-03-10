import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../../services/product.service';
import { ProductList } from 'src/app/model/productList';
import { Iproduct } from './../../model/iproduct';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent implements OnInit {

  products: any;

  params: any;

  goToAllProdicts() {
    console.log("jjjjj");
  }

  constructor(private productServies: ProductService, private activeroute: ActivatedRoute) {
    this.params = this.activeroute.snapshot.params;
    console.log("params", this.params);

  }
  ngOnInit(): void {
    this.productServies.getAllProduct().subscribe((response) => {
      console.log(response);
      this.products = response;
    })
  }



}
