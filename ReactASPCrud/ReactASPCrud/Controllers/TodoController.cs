using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ReactASPCrud.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TodoController : ControllerBase
    { 
        private readonly ILogger<TodoController> _logger;

        public TodoController(ILogger<TodoController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<TodoList> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new TodoList
            {
                Detail = "Datail"+index,
                Date = DateTime.Now.AddDays(index),
                UserName = "UserName"+index,
            })
            .ToArray();
        }
    }
}
