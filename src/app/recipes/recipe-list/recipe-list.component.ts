import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { Recipe } from '../model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected= new EventEmitter<Recipe>();
  recipes:Recipe[] ;
  
  constructor(private recipeService:RecipeService,
    private router:Router,
    private route:ActivatedRoute){
  }
  ngOnInit() {
    this.recipes=this.recipeService.getRecipes()
  }
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route});

  }
  
//   onRecipeSelected(recipe:Recipe){
// this.recipeWasSelected.emit(recipe);
//   }

}
