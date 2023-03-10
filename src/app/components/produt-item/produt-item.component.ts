import { Iproduct } from './../../model/iproduct';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-produt-item',
  templateUrl: './produt-item.component.html',
  styleUrls: ['./produt-item.component.css']
})
export class ProdutItemComponent {

  @Input() product :any;

  addToCar(){
    console.log("sjhjhdjhs");
  }

  constructor(){

  }

}
