using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MyDataSource;

namespace WebApplication6.Controllers
{
    public class UserController : Controller
    {
        Repository repo = new Repository();
       [HttpGet]
        public ActionResult Login()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Login(FormCollection form)
        {
            string username = form["txtUserName"];
            string password = form["txtPassword"];
           bool result= repo.Login(username, password);
            if(result)
            {
                return RedirectToAction("Emphome", "Employee");
            }
            else
            {
                ViewBag.msg = "Login Failed. Please try again!";
                return View();
            }
        }
        public PartialViewResult GreetUser()
        {
            //adsfafas
            //adfafsa
            return PartialView("GreetUser");
        }
        [HttpGet]
        public ActionResult Register()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Register(Models.User mvcObj)
        {
            User dalObj = new User();
            dalObj.UserID = mvcObj.UserID;
            dalObj.UserName = mvcObj.UserName;
            dalObj.Password = mvcObj.Password;
            dalObj.Address = mvcObj.Address;
            dalObj.Age = mvcObj.Age;
            dalObj.UserType = mvcObj.UserType;

            bool res = repo.Register(dalObj);
            if (res)
            {
                return RedirectToAction("Login");
            }
            else
            {
                ViewBag.Error = "Registration Failed!";
                return View();
            }
        }
    }
}