using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyDataSource
{
    public class Repository
    {
        static List<User> userDB = new List<User>();

        public Repository()
        {
            User u1 = new User { UserName = "admin", Password = "Test1234" };
            User u2 = new User { UserName = "user123", Password = "abcd1234" };
            userDB.Add(u1);
        }

        public bool Login(string uname,string pass)
        {
            bool result = false;
            //User u=userDB.Find(i=>i.UserName==uname&&i.Password==pass);


            foreach (User i in userDB)
            {
                if (i.UserName == uname && i.Password == pass)
                {
                    result = true;
                    break;
                }
            }
            return result;
        }

        public bool Register(User user)
        {
            bool result;
            try
            {
                userDB.Add(user);

                result = true;
            }
            catch(Exception)
            {
                result = false;
            }
            return result;

        }
    }
}
