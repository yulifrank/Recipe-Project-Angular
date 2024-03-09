using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace Recipe_App.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class RecipeController : ControllerBase
  {
    private static List<Recipe> recipes = new List<Recipe> {
      new Recipe {
        RecipeCode = 0,
        RecipeName = "Chocolate Cake",
        CategoryCode = 1,
        PreparationTimeInMinutes = 45,
        DifficultyLevel = 5,
        DateAdded = DateTime.Now,
        Ingredients = new List<string> { "Flour", "Sugar", "Cocoa Powder", "Eggs", "Milk" },
        PreparationSteps = new List<string> { "Preheat oven to 350°F", "Mix dry ingredients", "Add wet ingredients", "Bake for 30 minutes" },
        UserCode = 2,
        ImageRoute = "../../../../assets/images/recipe-images/Plaisir-12.jpg"
      },
      new Recipe
      {
        RecipeCode = 2,
        RecipeName = "Chocolate Cake",
        CategoryCode = 1,
        PreparationTimeInMinutes = 45,
        DifficultyLevel = 5,
        DateAdded = DateTime.Now,
        Ingredients = new List<string> { "Flour", "Sugar", "Cocoa Powder", "Eggs", "Milk" },
        PreparationSteps = new List<string> { "Preheat oven to 350°F", "Mix dry ingredients", "Add wet ingredients", "Bake for 30 minutes" },
        UserCode = 1,
        ImageRoute = "../../../../assets/images/recipe-images/Mocha-Crembo-7b.jpg"
      },
      new Recipe {
        RecipeCode = 1,
        RecipeName = "Chocolate Cake",
        CategoryCode = 1,
        PreparationTimeInMinutes = 45,
        DifficultyLevel = 1,
        DateAdded = DateTime.Now,
        Ingredients = new List<string> { "Flour", "Sugar", "Cocoa Powder", "Eggs", "Milk" },
        PreparationSteps = new List<string> { "Preheat oven to 350°F", "Mix dry ingredients", "Add wet ingredients", "Bake for 30 minutes" },
        UserCode = 1,
        ImageRoute = "../../../../assets/images/recipe-images/Mousse-9.jpg"

      },
      new Recipe {
        RecipeCode = 3,
        RecipeName = "Vegetable Stir-Fry",
        CategoryCode = 2,
        PreparationTimeInMinutes = 30,
        DifficultyLevel = 5,
        DateAdded = DateTime.Now,
        Ingredients = new List<string> { "Broccoli", "Carrots", "Bell Peppers", "Onions", "Garlic", "Soy Sauce" },
        PreparationSteps = new List<string> { "Chop vegetables", "Stir-fry in hot oil", "Add sauce", "Cook until tender" },
        UserCode = 2,
        ImageRoute = "../../../../assets/images/recipe-images/Coffe-mousse-8-1.jpg"
      },
      new Recipe
      {
        RecipeCode = 4,
        RecipeName = "Spaghetti Carbonara",
        CategoryCode = 3,
        PreparationTimeInMinutes = 25,
        DifficultyLevel = 2,
        DateAdded = DateTime.Now,
        Ingredients = new List<string> { "Spaghetti", "Eggs", "Bacon", "Parmesan Cheese", "Garlic", "Salt", "Pepper" },
        PreparationSteps = new List<string> { "Boil spaghetti", "Cook bacon until crispy", "Mix eggs, cheese, garlic, salt, and pepper", "Toss pasta with egg mixture" },
        UserCode = 1,
        ImageRoute = "../../../../assets/images/recipe-images/Coffe-mousse-9b-1.jpg"
      },
      new Recipe
      {
        RecipeCode = 6,
        RecipeName = "עוגת וניל",
        CategoryCode = 1,
        PreparationTimeInMinutes = 45,
        DifficultyLevel = 2,
        DateAdded = DateTime.Now,
        Ingredients = new List<string>
    {
        "375 גרם קמח",
        "12 גרם אבקת אפייה (1 כף)",
        "½ כפית מלח",
        "110 גרם חמאה רכה (בטמפ' החדר)",
        "105 גרם שמן קנולה",
        "300 גרם סוכר",
        "4 ביצים גדולות (בטמפ' החדר)",
        "1 כף תמצית וניל",
        "280 גרם רוויון (בטמפ' החדר)"
    },
        PreparationSteps = new List<string>
    {
        "חימום תנור ל-175°C",
        "משמנים קלות את שלושת תבניות האפייה ומרפדים את התחתית בנייר אפייה",
        "מערבבים קמח, אבקת אפייה ומלח בקערה בינונית ושומרים בצד",
        "מקציפים חמאה רכה, שמן וסוכר בקערת המיקסר עד לקבלת קרם אחיד",
        "מוסיפים ביצים בהדרגה ומקציפים עד להטמעה",
        "מוסיפים תמצית וניל ומערבבים",
        "מוסיפים שליש מתערובת האבקות לתוך הבלילה ומערבבים בעדינות",
        "מוסיפים חצי מהרוויון ומערבבים, מוסיפים את השליש השני ומערבבים, לבסוף מוסיפים את שאר הרוויון ומערבבים עד שהבלילה אחידה",
        "מחלקים את הבלילה ל-3 קערות ומוסיפים צבעים אחרים לכל קערה",
        "מוזגים כל חלק לתוך תבנית אפייה ואופים כ-17-18 דקות",
        "מצננים ומסירים מהתבנית לפני ההרכבה"
    },
        UserCode = 1,
        ImageRoute = "../../../../assets/images/recipe-images/Bday-macaron-1c-da.jpg"

      },
      new Recipe
      {
        RecipeCode = 8,
        RecipeName = "Chocolate Cake",
        CategoryCode = 1,
        PreparationTimeInMinutes = 45,
        DifficultyLevel = 3,
        DateAdded = DateTime.Now,
        Ingredients = new List<string> { "Flour", "Sugar", "Cocoa Powder", "Eggs", "Milk" },
        PreparationSteps = new List<string> { "Preheat oven to 350°F", "Mix dry ingredients", "Add wet ingredients", "Bake for 30 minutes" },
        UserCode = 2,
        ImageRoute = "../../../../assets/images/recipe-images/Lavender-macaron-7.jpg"
      }
  };

    public RecipeController()
    {
      // Add sample recipes
     
     
   
     
 

    }

    [HttpGet]
    public IEnumerable<Recipe> Get()
    {
      return recipes;
    }

    [HttpGet("{id}")]
    public ActionResult<Recipe> Get(int id)
    {
      if (id >= recipes.Count)
        return NotFound();

      var recipe = recipes[id];
      if (recipe == null)
      {
        return NotFound();
      }
      return recipe;
    }

    [HttpPost]
    public void Post([FromBody] Recipe recipe)
    {
      recipe.RecipeCode = recipes.Count() + 1;
      recipes.Add(recipe);
    }

    [HttpPut("{id}")]
    public void Put(int id, [FromBody] Recipe updatedRecipe)
    {
      var recipe = recipes.Find(r => r.RecipeCode == id);
      if (recipe != null)
      {
        recipe.RecipeName = updatedRecipe.RecipeName;
        recipe.CategoryCode = updatedRecipe.CategoryCode;
        recipe.PreparationTimeInMinutes = updatedRecipe.PreparationTimeInMinutes;
        recipe.DifficultyLevel = updatedRecipe.DifficultyLevel;
        recipe.Ingredients = updatedRecipe.Ingredients;
        recipe.PreparationSteps = updatedRecipe.PreparationSteps;
        recipe.UserCode = updatedRecipe.UserCode;
        recipe.ImageRoute = updatedRecipe.ImageRoute;
      }
    }

    [HttpDelete("{id}")]
    public void Delete(int id)
    {
      var recipe = recipes.Find(r => r.RecipeCode == id);
      if (recipe != null)
      {
        recipes.Remove(recipe);
      }
    }
  }
}
