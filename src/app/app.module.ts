import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeDetailsComponent } from './views/recipe/recipe-details/recipe-details.component';
import { RecipeListComponent } from './views/recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './views/recipe/recipe-item/recipe-item.component';

import { ShoppingListComponent } from './views/shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './views/shopping/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './views/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeDetailsComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
