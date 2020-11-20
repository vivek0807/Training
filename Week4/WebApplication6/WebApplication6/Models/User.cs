using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication6.Models
{
    public class User
    {
        public int UserID { get; set; }
        public string UserName { get; set; }
        public string Password { get;set; }

        public string Address { get; set; }

        public int Age { get; set; }
        public string UserType { get; set; }
    }
}