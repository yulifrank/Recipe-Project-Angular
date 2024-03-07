
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../recipe.model';
import { RecipeServiceService } from '../../../recipe-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-all-details', 
  templateUrl: './recipe-all-details.component.html',
  styleUrls: ['./recipe-all-details.component.css']
})
export class RecipeAllDetailsComponent implements OnInit {
  recipe!: Recipe;
  index!: number| any;
  isLiked: boolean = false;

  constructor(
    private recipeService: RecipeServiceService,
    private route: ActivatedRoute
  ) { }

 
  ngOnInit(): void {
    
    this.index= this.route.snapshot.queryParamMap.get('index');
    console.log("index",this.index)
 this.recipeService.getRecipeById(this.index).subscribe( {
     next:(res)=>{
      this.recipe=res},
      error: (err) => {
        console.log(err);
       
    }})


  }
  getDifficultyIcons(difficultyLevel: number): number[] {
    return Array(difficultyLevel).fill(0);
  }

  toggleLike() {
    this.isLiked = !this.isLiked;
    setTimeout(() => {
      this.isLiked = false;
    }, 1000); // Adjust the timing to your preference
  }

 
}
