import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {

  // @ts-ignore
  ingredients: Ingredient[];
  // = [
  //   new Ingredient('Apples',5),
  //   new Ingredient('Tomatoes',10)
  // ];

  constructor(private slService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) =>{
          this.ingredients = ingredients;
        })
  }

}
