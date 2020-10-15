import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules 
import { RecipesModule } from './recipes/recipes.module';
import { ComponentsModule } from './components/components.module';

// Service
import { SRecipeService } from './services/recipe.service';

// Routes
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './recipes/shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecipesModule,
    ComponentsModule
  ],
  providers: [SRecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
