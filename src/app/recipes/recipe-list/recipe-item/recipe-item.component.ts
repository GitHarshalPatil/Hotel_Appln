import { Component, Input ,OnInit,Output,EventEmitter} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input()  recipe:Recipe;
  @Input() index:number
  // @Output() recipeSelected=new EventEmitter<void>();
// recipes: any;
  // constructor(private recipeService:RecipeService){}
  ngOnInit() {
  }
  // onSelected(){
  //   // this.recipeSelected.emit();
  //   this.recipeService.recipeSelected.emit(this.recipe)
  // }
}
