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
        RecipeName = "פטיפור וניל",
        CategoryCode = 1,
        PreparationTimeInMinutes = 45,
        DifficultyLevel = 5,
        DateAdded = DateTime.Now,
        Ingredients = new List<string> { "Flour", "Sugar", "Cocoa Powder", "Eggs", "Milk" },
        PreparationSteps = new List<string> { "Preheat oven to 350°F", "Mix dry ingredients", "Add wet ingredients", "Bake for 30 minutes" },
        UserCode = 3,
        ImageRoute = "../../../../assets/images/recipe-images/29.jpg"
      },
     new Recipe
      {
        RecipeCode = 2,
        RecipeName = "לבבות נוגט ואגוזי לוז",
        CategoryCode = 4,
        PreparationTimeInMinutes = 45,
        DifficultyLevel = 5,
        DateAdded = DateTime.Now,
         Ingredients = new List<string> { "קמח", "סוכר", "אבקת קקאו", "ביצים", "חלב" },
        PreparationSteps = new List<string> { "חמם את התנור ל-350 מעלות פרנהייט", "ערבב את המרכיבים היבשים", "הוסף את המרכיבים הרטובים", "אפה למשך 30 דקות" },

        UserCode = 2,
        ImageRoute = "../../../../assets/images/recipe-images/12.jpg"
      },
     new Recipe {
        RecipeCode = 1,
        RecipeName = "מקרונים",
        CategoryCode = 4,
        PreparationTimeInMinutes = 45,
        DifficultyLevel = 1,
        DateAdded = DateTime.Now,
        Ingredients = new List<string> { "Flour", "Sugar", "Cocoa Powder", "Eggs", "Milk" },
        PreparationSteps = new List<string> { "Preheat oven to 350°F", "Mix dry ingredients", "Add wet ingredients", "Bake for 30 minutes" },
        UserCode = 1,
        ImageRoute = "../../../../assets/images/recipe-images/28.jpg"

      },
     new Recipe {
        RecipeCode = 3,
        RecipeName = "עוגת פיסטוק",
        CategoryCode = 1,
        PreparationTimeInMinutes = 30,
        DifficultyLevel = 5,
        DateAdded = DateTime.Now,
        Ingredients = new List<string> { "קמח", "סוכר", "אבקת קקאו", "ביצים", "חלב" },
PreparationSteps = new List<string> { "חמם את התנור ל-350 מעלות פרנהייט", "ערבב את המרכיבים היבשים", "הוסף את המרכיבים הרטובים", "אפה למשך 30 דקות" },

        UserCode = 2,
        ImageRoute = "../../../../assets/images/recipe-images/1.jpg"
      },
     new Recipe
      {
        RecipeCode = 4,
        RecipeName = "פופקיקס",
        CategoryCode = 3,
        PreparationTimeInMinutes = 25,
        DifficultyLevel = 2,
        DateAdded = DateTime.Now,
        Ingredients = new List<string> { "Spaghetti", "Eggs", "Bacon", "Parmesan Cheese", "Garlic", "Salt", "Pepper" },
        PreparationSteps = new List<string> { "Boil spaghetti", "Cook bacon until crispy", "Mix eggs, cheese, garlic, salt, and pepper", "Toss pasta with egg mixture" },
        UserCode = 1,
        ImageRoute = "../../../../assets/images/recipe-images/2.jpg"
      },
     new Recipe
      {
        RecipeCode = 6,
        RecipeName = "עוגת קומות וניל",
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
        "ביצים גדולות (בטמפ' החדר)",
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
        UserCode = 2,
        ImageRoute = "../../../../assets/images/recipe-images/9.jpg"

      },
     new Recipe
{
    RecipeCode = 7,
    RecipeName = "עוגת יומהולדת חגיגית",
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
        "ביצים גדולות (בטמפ' החדר)",
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
    UserCode = 2,
    ImageRoute = "../../../../assets/images/recipe-images/9.jpg"
},
     new Recipe
{
    RecipeCode = 9,
    RecipeName = "עוגת שוקולד ופיסטוק",
    CategoryCode = 1,
    PreparationTimeInMinutes = 15,
    DifficultyLevel = 5,
    DateAdded = DateTime.Now,
    Ingredients = new List<string> { "קמח", "סוכר", "אבקת קקאו", "ביצים", "חלב" },
    PreparationSteps = new List<string> { "חמם את התנור ל-350 מעלות פרנהייט", "ערבב את המרכיבים היבשים", "הוסף את המרכיבים הרטובים", "אפה למשך 30 דקות" },
    UserCode = 1,
    ImageRoute = "../../../../assets/images/recipe-images/5.jpg"
},
     new Recipe
{
    RecipeCode = 10,
    RecipeName = "עוגת גבינה עם פרות",
    CategoryCode = 1,
    PreparationTimeInMinutes = 100,
    DifficultyLevel = 4,
    DateAdded = DateTime.Now,
    Ingredients = new List<string> { "קמח", "סוכר", "אבקת קקאו", "ביצים", "חלב" },
    PreparationSteps = new List<string> { "חמם את התנור ל-350 מעלות פרנהייט", "ערבב את המרכיבים היבשים", "הוסף את המרכיבים הרטובים", "אפה למשך 30 דקות" },
    UserCode = 1,
    ImageRoute = "../../../../assets/images/recipe-images/6.jpg"
},
     new Recipe
{
    RecipeCode = 11,
    RecipeName = "מאפה שוקולד",
    CategoryCode = 3,
    PreparationTimeInMinutes = 20,
    DifficultyLevel = 5,
    DateAdded = DateTime.Now,
    Ingredients = new List<string> { "קמח", "סוכר", "אבקת קקאו", "ביצים", "חלב" },
    PreparationSteps = new List<string> { "חמם את התנור ל-350 מעלות פרנהייט", "ערבב את המרכיבים היבשים", "הוסף את המרכיבים הרטובים", "אפה למשך 30 דקות" },
    UserCode = 5,
    ImageRoute = "../../../../assets/images/recipe-images/7.jpg"
},
     new Recipe
      {
        RecipeCode = 12,
        RecipeName = "Chocolate Cake",
        CategoryCode = 2,
        PreparationTimeInMinutes = 15,
        DifficultyLevel = 5,
        DateAdded = DateTime.Now,
        Ingredients = new List<string> { "Flour", "Sugar", "Cocoa Powder", "Eggs", "Milk" },
        PreparationSteps = new List<string> { "Preheat oven to 350°F", "Mix dry ingredients", "Add wet ingredients", "Bake for 30 minutes" },
        UserCode = 1,
        ImageRoute = "../../../../assets/images/recipe-images/8.jpg"
      },
     new Recipe
{
    RecipeCode = 13,
    RecipeName = "עוגת שוקולד",
    CategoryCode = 2,
    PreparationTimeInMinutes = 45,
    DifficultyLevel = 3,
    DateAdded = DateTime.Now,
    Ingredients = new List<string> { "קמח", "סוכר", "אבקת קקאו", "ביצים", "חלב" },
    PreparationSteps = new List<string> { "לחמם את התנור ל-350 מעלות פרנהייט", "לערבב את המרכיבים היבשים", "להוסיף את המרכיבים הרטובים", "לאפות בתנור למשך 30 דקות" },
    UserCode = 1,
    ImageRoute = "../../../../assets/images/recipe-images/9.jpg"
},
     new Recipe
{
    RecipeCode = 14,
    RecipeName = "עוגת קפה",
    CategoryCode = 2,
    PreparationTimeInMinutes = 45,
    DifficultyLevel = 5,
    DateAdded = DateTime.Now,
    Ingredients = new List<string> { "קמח", "סוכר", "אבקת קקאו", "ביצים", "חלב" },
    PreparationSteps = new List<string> { "לחמם את התנור ל-350 מעלות פרנהייט", "לערבב את המרכיבים היבשים", "להוסיף את המרכיבים הרטובים", "לאפות בתנור למשך 30 דקות" },
    UserCode = 1,
    ImageRoute = "../../../../assets/images/recipe-images/10.jpg"
},
     new Recipe
{
    RecipeCode = 15,
    RecipeName = "עוגת שוקולד",
    CategoryCode = 1,
    PreparationTimeInMinutes = 65,
    DifficultyLevel = 2,
    DateAdded = DateTime.Now,
    Ingredients = new List<string> { "קמח", "סוכר", "אבקת קקאו", "ביצים", "חלב" },
    PreparationSteps = new List<string> { "לחמם את התנור ל-350 מעלות פרנהייט", "לערבב את המרכיבים היבשים", "להוסיף את המרכיבים הרטובים", "לאפות בתנור למשך 30 דקות" },
    UserCode = 1,
    ImageRoute = "../../../../assets/images/recipe-images/11.jpg"
},
 

  };

    [HttpGet]
    public IEnumerable<Recipe> Get()
    {
      return recipes;
    }

    [HttpGet("{id}")]
    public ActionResult<Recipe> Get(int id)
    {


      var recipe = recipes.Find(x => x.RecipeCode == id);
      if (recipe == null)
      {
        return NotFound();
      }
      return recipe;
    }

    [HttpPost]
    public void Post([FromBody] Recipe recipe)
    {
      recipe.RecipeCode =recipes[ recipes.Count()-1].RecipeCode + 1; 
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
