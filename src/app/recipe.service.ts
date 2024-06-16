import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipes/recipe.model';
import { Ingredient } from './shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  // recipeSelected = new Subject<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('1. A Test Recipe',
      '1. This is simply a Test',
      './assets/dark-shelf-of-books-xatscfgvyvz4zqiy.jpg',
      [new Ingredient('meat', 1),
      new Ingredient('french fries', 20)
      ]),
    new Recipe('2. A Test Recipe',
      '2. This is simply a Test',
      './assets/dark-shelf-of-books-xatscfgvyvz4zqiy.jpg', [
      new Ingredient('buns', 2),
      new Ingredient('french fries', 20)
    ])
  ];

  constructor(private slService:ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index:number){
    return this.recipes[index]
  }

  addIngredientToShoppingList(ingredients:Ingredient[]){
     this.slService.addIngredients(ingredients);
  }

  
}
