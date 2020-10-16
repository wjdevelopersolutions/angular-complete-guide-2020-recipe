import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Params,
  Router
} from '@angular/router';

import {
  IRecipe
} from 'src/app/interface/recipe.interface';
import {
  SRecipeService
} from 'src/app/services/recipe.service';
import {
  Subscription
} from 'rxjs';

// 3er Party Package
import Swal from 'sweetalert2'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  recipe: IRecipe;
  index: number;
  subscription: Subscription;

  constructor(
    private _router: Router,
    private _srecipeService: SRecipeService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.index = Number(this._route.snapshot.params.id);
    this.recipe = this._srecipeService.getRecipes()[this.index];
    this.subscription = this._route.params
      .subscribe((params: Params) => {
        this.index = Number(params.id);
        this.recipe = this._srecipeService.getRecipes()[this.index];
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onRecipeEdit(event: Event) {
    event.preventDefault();
    this._router.navigate(['edit'], {
      preserveFragment: true,
      relativeTo: this._route,
      queryParams: {
        editing: true
      }
    });
  }

  onRecipeDelete(event: Event) {
    event.preventDefault();
    Swal.fire({
      title: 'Eliminar receta?',
      text: `${this.recipe.title}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#007bff',
      cancelButtonColor: '#dc3545',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Receta eliminanda!',
          `Se ha eliminado la receta: ${this.recipe.title}`,
          'success'
        )
      }
    })

  }

}
