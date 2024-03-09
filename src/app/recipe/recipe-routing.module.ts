import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { RecipeCardComponent } from './component/recipe-card/recipe-card.component';
import { RecipesListComponent } from './component/recipes-list/recipes-list.component';
import { RecipeAllDetailsComponent } from './component/recipe-all-details/recipe-all-details.component';
import { AddRecipeComponent } from './component/add-recipe/add-recipe.component';
import { EditRecipeComponent } from './component/edit-recipe/edit-recipe.component';


const RECIPE_ROUTES: Route[] = [
  { path: '', redirectTo: 'recipes-list', pathMatch: 'full' },
  { path: 'add', component:AddRecipeComponent },
  { path: 'recipes-list', component: RecipesListComponent },
  { path: 'recipes-list/:id/edit', component: EditRecipeComponent,  canActivate: [
  ] },
  { path: 'recipes-list/:id', component: RecipeAllDetailsComponent, canActivate: [
  ] },
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(RECIPE_ROUTES)
  ],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }