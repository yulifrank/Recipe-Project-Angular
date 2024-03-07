import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {


logout() {
    sessionStorage.clear();

  }
}
