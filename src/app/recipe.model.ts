export class Recipe {
    public recipeCode: number;
    public recipeName: string;
    public categoryCode: number;
    public preparationTimeInMinutes: number;
    public difficultyLevel: number;
    public   dateAdded !: Date;
    public ingredients: string[];
    public preparationSteps: string[];
    public userCode: number;
    public imageRoute: string;
  
    constructor(
      recipeCode: number,
      recipeName: string,
      categoryCode: number,
      preparationTimeInMinutes: number,
      difficultyLevel: number,
      dateAdded: Date,
      ingredients: string[],
      preparationSteps: string[],
      userCode: number,
      imageRoute: string
    ) {
      this.recipeCode = recipeCode;
      this.recipeName = recipeName;
      this.categoryCode = categoryCode;
      this.preparationTimeInMinutes = preparationTimeInMinutes;
      this.difficultyLevel = difficultyLevel;
      this.dateAdded = dateAdded;
      this.ingredients = ingredients;
      this.preparationSteps = preparationSteps;
      this.userCode = userCode;
      this.imageRoute = imageRoute;
    }
  }
  