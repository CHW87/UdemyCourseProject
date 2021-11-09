import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit, OnDestroy {
  // @ts-ignore
  subscription: Subscription;
  editMode = false;
  // @ts-ignore
  editedItemIndex: number;

  constructor(private slService: ShoppingListService) {
  }

  ngOnInit() {
this.subscription = this.slService.startedEditing
  .subscribe(
    (index: number) => {
      this.editedItemIndex = index;
      this.editMode = true
    }
  )
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.slService.addIngredient(newIngredient);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
