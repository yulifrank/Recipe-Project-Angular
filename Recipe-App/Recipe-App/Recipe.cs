namespace Recipe_App
{
  public class Recipe
  {
    public int RecipeCode { get; set; }
    public string RecipeName { get; set; }
    public int CategoryCode { get; set; }
    public int PreparationTimeInMinutes { get; set; }
    public int DifficultyLevel { get; set; }
    public DateTime DateAdded { get; set; }
    public List<string> Ingredients { get; set; }
    public List<string> PreparationSteps { get; set; }
    public int UserCode { get; set; }
    public string ImageRoute { get; set; }
  }
}
