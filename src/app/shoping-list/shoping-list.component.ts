import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingredients: Ingredient[] = [
  	new Ingredient('Apples', 5),
  	new Ingredient('Tomatoes', 10),
  	new Ingredient('Banana', 15),
  	new Ingredient('Apple',15)
  ];	


  constructor() { }

  ngOnInit() {
  }
}
