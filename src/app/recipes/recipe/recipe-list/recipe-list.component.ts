import { Component, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/interface/recipe.interface';
import { SRecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: IRecipe[] = [];

  constructor( private _srecipeService: SRecipeService ) 
  {}

  ngOnInit(): void 
  {
    this.recipes = this._srecipeService.getRecipes();
  }

}
