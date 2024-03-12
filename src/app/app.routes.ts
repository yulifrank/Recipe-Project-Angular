import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';


  export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./home-page/home-page.component').then(c => c.HomePageComponent) },
    { path: 'recipe', loadChildren: () => import('./recipe/recipe.module').then(c => c.RecipeModule) },
    { path: 'user', loadChildren: () => import('./user/user.module').then(c => c.UserModule) },
    { path: '**', component: NotFoundComponent }];
