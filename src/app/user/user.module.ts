import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { LogoutComponent } from './component/logout/logout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { UserRoutingModule } from './user-routing.module';





@NgModule({
  declarations:[LoginComponent,RegisterComponent,LogoutComponent],
  imports:     [CommonModule,UserRoutingModule, ReactiveFormsModule,HttpClientModule, MatFormFieldModule,MatIcon, MatInputModule, MatButtonModule, MatIconModule, MatCardModule],
  exports: [CommonModule,UserRoutingModule]
})
export class UserModule { }
