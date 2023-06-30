import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      '1',
      'A test recipe',
      'this is a test recipe',
      'https://www.simplyrecipes.com/thmb/CWzxvl8dpC_zkjjRqEE6fBCS6DQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      '2',
      'A test recipe 2',
      'this is a test recipe',
      'https://www.simplyrecipes.com/thmb/CWzxvl8dpC_zkjjRqEE6fBCS6DQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Beef', 1)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(id: string): Recipe {
    let recipeReturn: Recipe = new Recipe(' ', '', '', '', []);
    this.recipes.forEach((recipe) => {
      if (recipe.id === id) {
        recipeReturn = recipe;
      }
    });
    return recipeReturn;
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
