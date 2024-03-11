
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserServiceService } from '../../../user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../../../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm!: FormGroup;
  userExists = false;
showRotatingIcon=false

  constructor(private route: Router,private fb: FormBuilder, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      "username": new FormControl("", [Validators.required]),
      "password": new FormControl("", [Validators.required]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
  
      this.userService.getAllUsers().subscribe(
        (users: User[]) => {
          console.log("users",users)
          console.log("this: ",username)
          this.userExists = users.some(user => user.name === username);
          if (this.userExists) {
            if (users.some(user => user.name === username && user.password === password)) {
              // שמירת פרטי הגולש ב-SessionStorage
              sessionStorage.setItem('username', username);
              sessionStorage.setItem('password', password);
              sessionStorage.setItem('userCode', JSON.stringify(users.find(user => user.name === username && user.password === password).code));
            
              Swal.fire({
                icon: 'success',
                title: 'User Exists!',
                text: 'User was found in the system.'
              });
              this.route.navigate(['/recipe/recipes-list']);
  
            }
            else{
              Swal.fire({
                icon: 'error',
                title: ' Not correct password!',
                text: 'User does not exist in the system.'
              });
            }
          } else {
            this.showRotatingIcon = true; // הצגת האייקון המסתובב

            setTimeout(() => {
              this.route.navigate(['/user/register'], { queryParams: { name: username } });

            }, 2000); //
          }
        },
        (error) => {
          console.log('Error occurred while fetching users:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'An error occurred while fetching users.'
          });
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
  

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }
}
