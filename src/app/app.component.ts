import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TopBarComponent } from "./top-bar/top-bar.component";
import {FooterComponent}from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule,RouterOutlet, TopBarComponent,RouterModule,FooterComponent]
})
export class AppComponent {
  title = 'RecipeProject';
}
