import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL = "http://localhost:3005/Product";
  constructor(
    private client: HttpClient
  ) { }

  getAllProduct() {
    return this.client.get(this.URL);
  }
  getProductById(idProduct: any) {
    return this.client.get(`${this.URL}/${idProduct}`);
  }

  addProduct(product: any) {
    return this.client.post(this.URL, product);
  }
  editProduct(idProduct: number, product: any) {
    return this.client.put(`${this.URL}/${idProduct}`, product);
  }
  deleteProduct(idProduct: Number) {
    return this.client.delete(`${this.URL}/${idProduct}`)
  }
}
