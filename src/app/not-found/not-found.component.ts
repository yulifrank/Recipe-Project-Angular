import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    CommonModule
  ],
  styleUrl: 'not-found.component.css',


  templateUrl: './not-found.component.html',


})
export class NotFoundComponent {
   HEROES = [

    {id: 1, name:'Superman'},

    {id: 2, name:'Batman'},

    {id: 5, name:'BatGirl'},

    {id: 3, name:'Robin'},

    {id: 4, name:'Flash'}

];
}
