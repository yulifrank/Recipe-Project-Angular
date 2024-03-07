import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';


  export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./home-page/home-page.component').then(c => c.HomePageComponent) },
    { path: 'login', loadComponent: () => import('./login/login.component').then(c => c.LoginComponent) },
    { path: 'logout', loadComponent: () => import('./logout/logout.component').then(c => c.LogoutComponent) },
    { path: 'register', loadComponent: () => import('./register/register.component').then(c => c.RegisterComponent) },

    { path: 'recipe', loadChildren: () => import('./recipe/recipe.module').then(c => c.RecipeModule) },



    { path: '**', component: NotFoundComponent }];
