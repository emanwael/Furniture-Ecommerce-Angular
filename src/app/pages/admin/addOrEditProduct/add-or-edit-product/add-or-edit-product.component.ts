import { ProductService } from './../../../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-or-edit-product',
  templateUrl: './add-or-edit-product.component.html',
  styleUrls: ['./add-or-edit-product.component.css']
})
export class AddOrEditProductComponent implements OnInit {

  id: any;
  productDetials: any;


  constructor(private router: Router, private productService: ProductService, private activateRote: ActivatedRoute) {

    this.id = this.activateRote.snapshot.params['id'];
  }
  ngOnInit(): void {
    if (this.id) {
      this.productService.getProductById(this.id).subscribe((response) => {
        this.productDetials = response;
        this.form.setValue({
          name: this.productDetials.name,
          img: this.productDetials.img,
          price: this.productDetials.price,
          qauntity: this.productDetials.qauntity,
          desc: this.productDetials.desc,
        });

      });
    }
  }

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    img: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    qauntity: new FormControl('', [Validators.required]),
    desc: new FormControl('', [Validators.required]),

  })

  get getName() {
    return this.form.controls['name'];
  }
  get getSrcImg() {
    return this.form.controls['img'];
  }
  get getPrice() {
    return this.form.controls['price'];
  }
  get getQauntitiy() {
    return this.form.controls['qauntity'];
  }
  get getDescription() {
    return this.form.controls['desc'];
  }
  submit = () => {
    console.log(this.form.status);
    if (this.form.status == 'VALID') {
      console.log(this.form.value);
      if (this.id) {
        this.productService.editProduct(this.id, this.form.value).subscribe((response) => {
          console.log(response);
        })
      }
      else {
        this.productService.addProduct(this.form.value).subscribe((response) => {
          console.log(response);
        })

      }
      this.router.navigate(['/admin/home']);
    }

  }

}
