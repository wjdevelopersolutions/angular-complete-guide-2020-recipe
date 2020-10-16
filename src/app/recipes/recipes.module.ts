import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * Modules
 */
import { ComponentsModule } from '../components/components.module';

/**
 * Recipes components
 */
import { RecipesComponent } from './recipes.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeAlertComponent } from './recipe/recipe-alert/recipe-alert.component';

/**
 * Directives
 */
import { CardHeaderDirective } from '../directives/card-header.directive';

const RECIPES_COMPONENTS = [
    RecipesComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeAlertComponent,
    CardHeaderDirective
];

@NgModule({
    declarations: RECIPES_COMPONENTS,
    imports: [
        CommonModule,
        RouterModule,
        ComponentsModule
    ],
    providers: [],
    exports: RECIPES_COMPONENTS
})
export class RecipesModule
{}