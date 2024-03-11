import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit  {

  constructor(private router: Router) {}
  ngOnInit(){
    this.logout()
  }
  logout() {
    Swal.fire({
      title: 'האם אתה בטוח שברצונך להתנתק?',
      showCancelButton: true,
      confirmButtonText: 'כן, התנתק',
      cancelButtonText: 'ביטול',
      cancelButtonColor: 'rgb(255, 17, 164)',
      confirmButtonColor: 'rgb(255, 17, 164)',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.clear();
        this.router.navigate(['/']); // ניתוב לדף הבית
      }
      this.router.navigate(['/']); // ניתוב לדף הבית

    });
  }
}
