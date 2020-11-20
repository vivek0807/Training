using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyDataSource
{
   public class User
    {
        int userID;
        string userName;
        string password;

        public int UserID { get => userID; set => userID = value; }
        public string UserName { get => userName; set => userName = value; }
        public string Password { get => password; set => password = value; }
        public string Address { get; set; }

        public int Age { get; set; }
        public string UserType { get; set; }
    }
}
