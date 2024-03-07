import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { passwordValidatorFn } from "../password-validator";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { UserServiceService } from '../user-service.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: ​​true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  existingUser: boolean = false;
  name: string | null = null;
  passwordErrors: { [key: string]: boolean } = {
    'required': false,
    'uppercase': false,
    'lowercase': false
  };
  hide: boolean = true;

  nextUserCode: number = 0; // Initialize nextUserCode to 0

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserServiceService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.queryParamMap.get('name');
    
    this.userService.getAllUsers().subscribe(users => {
      this.nextUserCode = users.length; // Set nextUserCode to the size of the array
    });
    
    this.registerForm = this.formBuilder.group({
      Code: [this.nextUserCode + 1], // Initialize Code to the nextUserCode + 1
      Name: [this.name || '', Validators.required],
      Address: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(4), passwordValidatorFn]]
    });
    
    this.registerForm.get('Password')?.valueChanges.subscribe(value => {
      this.checkPasswordErrors();
    });
  }

  checkPasswordErrors() {
    const passwordControl = this.registerForm.get('Password');
    if (!passwordControl) return;
  
    this.passwordErrors = {
      'required': passwordControl.hasError('required'),
      'minlength': passwordControl.hasError('minlength'),
      'uppercase': /[A-Z]/.test(passwordControl.value),
      'lowercase': /[a-z]/.test(passwordControl.value),
      'specialCharacters': /[!@#$%^&*]/.test(passwordControl.value),
      'digits': /\d/.test(passwordControl.value)
    };
  }

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }

  onSubmit() {
    this.userService.getAllUsers().pipe(
      switchMap(users => {
        this.existingUser = users.some(user => user.email === this.registerForm.value.Email);
        if (this.existingUser) {
          alert('User already exists! Please choose a different name.');
          return [];
        } else {
          const username = this.registerForm.get('Name')?.value;
          const password = this.registerForm.get('Password')?.value;
          sessionStorage.setItem('username', username);
          sessionStorage.setItem('password', password);
          sessionStorage.setItem('userCode', JSON.stringify(this.nextUserCode));
          const newUser = { ...this.registerForm.value, Code: this.nextUserCode };
          alert('User created successfully!');
          return this.userService.createUser(newUser);

        }
      })
    ).subscribe(() => {
      if (this.existingUser) {
        // אם המשתמש קיים - ננווט לדף אחר
    } else {
     this.router.navigate(['/recipe/recipes-list']);

    }
    });
  }
}
