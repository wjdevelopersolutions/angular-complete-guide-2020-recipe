import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeAlertComponent } from './recipes/recipe/recipe-alert/recipe-alert.component';
import { RecipeDetailComponent } from './recipes/recipe/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe/recipe-edit/recipe-edit.component';
import { ShoppingListComponent } from './recipes/shopping-list/shopping-list.component';

const routes: Routes = [
    { path: '', redirectTo: 'recipe', pathMatch: 'full' },
    {
        path: 'recipe', 
        component: RecipesComponent,
        children: [
            { path: '', component: RecipeAlertComponent },
            { path: 'create', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent }
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
