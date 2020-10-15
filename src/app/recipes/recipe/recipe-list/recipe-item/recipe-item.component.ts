import { Component, Input, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';

import { IRecipe } from 'src/app/interface/recipe.interface';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: IRecipe;
  @Input() index: number;

  constructor( 
    // private _router: Router,
    // private _route: ActivatedRoute 
  ) { }

  ngOnInit(): void {
  }

  // onRecipeSelection()
  // {
  //   this._router.navigate([`${this.index}`], { relativeTo: this._route });
  // }

}
