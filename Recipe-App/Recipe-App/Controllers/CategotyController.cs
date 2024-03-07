using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Recipe_App.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class CategoryController : ControllerBase
  {
    // רשימת נתונים דמו למחלקת Category
    private static List<Category> categories = new List<Category>
        {
            new Category { Code = 1, Name = "Category 1", IconRoute = "icon1.png" },
            new Category { Code = 2, Name = "Category 2", IconRoute = "icon2.png" }
        };

    // GET: api/<CategoryController>
    [HttpGet]
    public ActionResult<IEnumerable<Category>> Get()
    {
      return Ok(categories);
    }

    // GET api/<CategoryController>/5
    [HttpGet("{id}")]
    public ActionResult<Category> Get(int id)
    {
      var category = categories.Find(c => c.Code == id);
      if (category == null)
      {
        return NotFound();
      }
      return Ok(category);
    }

    // POST api/<CategoryController>
    [HttpPost]
    public ActionResult<Category> Post([FromBody] Category category)
    {
      categories.Add(category);
      return CreatedAtAction(nameof(Get), new { id = category.Code }, category);
    }

    // PUT api/<CategoryController>/5
    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody] Category category)
    {
      var existingCategory = categories.Find(c => c.Code == id);
      if (existingCategory == null)
      {
        return NotFound();
      }
      existingCategory.Name = category.Name;
      existingCategory.IconRoute = category.IconRoute;
      return NoContent();
    }

    // DELETE api/<CategoryController>/5
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      var categoryToRemove = categories.Find(c => c.Code == id);
      if (categoryToRemove == null)
      {
        return NotFound();
      }
      categories.Remove(categoryToRemove);
      return NoContent();
    }
  }

}
