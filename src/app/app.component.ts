import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./user/component/login/login.component";
import { TopBarComponent } from "./top-bar/top-bar.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule,RouterOutlet, TopBarComponent,RouterModule]
})
export class AppComponent {
  title = 'RecipeProject';
}
