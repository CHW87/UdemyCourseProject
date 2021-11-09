import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit, OnDestroy {

  // @ts-ignore
  ingredients: Ingredient[];
  // @ts-ignore
  private subscription: Subscription;
  // = [
  //   new Ingredient('Apples',5),
  //   new Ingredient('Tomatoes',10)
  // ];

  constructor(private slService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) =>{
          this.ingredients = ingredients;
        })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onEditItem(index: number) {
this.slService.startedEditing.next(index);
  }
}
