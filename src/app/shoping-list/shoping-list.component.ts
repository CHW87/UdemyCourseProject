import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";
import {Subscription} from "rxjs";
import {LoggingService} from "../logging.service";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[] | undefined;
  // @ts-ignore
  private subscription: Subscription;
  // = [
  //   new Ingredient('Apples',5),
  //   new Ingredient('Tomatoes',10)
  // ];

  constructor(
    private slService: ShoppingListService,
    private loggingService: LoggingService,
    private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>
  ) {
  }

  ngOnInit() {
    this.store.select('shoppingList')
  //   this.ingredients = this.slService.getIngredients();
  //   this.subscription = this.slService.ingredientsChanged
  //     .subscribe(
  //       (ingredients: Ingredient[]) => {
  //         this.ingredients = ingredients;
  //       });
    this.loggingService.printLog('Hello from ShoppingListComponent ngOnInit')
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  }
}
