import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor( private _router: Router ) { }

  ngOnInit(): void {
  }

  onRecipeCreate()
  {
    this._router.navigate(['/recipe/create']);
  }

}
