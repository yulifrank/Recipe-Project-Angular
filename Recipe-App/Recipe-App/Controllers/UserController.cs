using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Net;
using System.Xml.Linq;

namespace Recipe_App.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UserController : ControllerBase
  {
    private static List<User> users = new List<User>
        {
            new User
            {
                Code = 0,
                Name = "נעמה פרנק",
                Address = "רחוב בעל התניא",
                Email = "s@gmail.com.com",
                Password = "123456"
            },
            new User
            {
                Code = 1,
                Name = "יעל פרנק",
                Address = "שטרסר 2 בני ברק",
                Email = "yaelf2278@gmail.com",
                Password = "123456"
            },
              new User
            {
                Code = 2,
                Name = "עדי בר",
                Address = "רחוב אבא הילל 5",
                Email = "yyy@gmail.com",
                Password = "adi"
            },  new User
            {
                Code = 3,
                Name = "שירה לב",
                Address = "רמת גן",
                Email = "shira@gmail.com",
                Password = "shira"
         },
      new User{
                Code = 4,
                Name = " כהן דן",
                Address = "רמת גן",
                Email = "dan@gmail.com",
                Password = "shira"
            }
        };

    // GET: api/<UserController>
    [HttpGet]
    public IEnumerable<User> Get()
    {
      return users;
    }

    // GET api/<UserController>/5
    [HttpGet("{id}")]
    public ActionResult<User> Get(int id)
    {
      var user = users.Find(u => u.Code == id);
      if (user == null)
      {
        return NotFound();
      }
      return user;
    }

    // POST api/<UserController>
    [HttpPost]
    public void Post([FromBody] User user)
    {
      user.Code = users[users.Count() - 1].Code + 1;
      users.Add(user);
    }

    // PUT api/<UserController>/5
    [HttpPut("{id}")]
    public IActionResult Put(int id, [FromBody] User updatedUser)
    {
      var user = users.Find(u => u.Code == id);
      if (user == null)
      {
        return NotFound();
      }
      user.Name = updatedUser.Name;
      user.Address = updatedUser.Address;
      user.Email = updatedUser.Email;
      user.Password = updatedUser.Password;
      return NoContent();
    }

    // DELETE api/<UserController>/5
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
      var user = users.Find(u => u.Code == id);
      if (user == null)
      {
        return NotFound();
      }
      users.Remove(user);
      return NoContent();
    }
  }

 
}
