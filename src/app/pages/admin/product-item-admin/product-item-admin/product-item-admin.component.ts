import { ProductService } from './../../../../../services/product.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item-admin',
  templateUrl: './product-item-admin.component.html',
  styleUrls: ['./product-item-admin.component.css']
})
export class ProductItemAdminComponent {

  @Input() product : any;

  constructor(private productService:ProductService){}

  delete(){
    console.log("sss")
    this.productService.deleteProduct(this.product.id).subscribe((response)=>{
      console.log("delete done")
    })

  }
}
