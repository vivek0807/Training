using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication6.Controllers
{
    
    public class EmployeeController : Controller
    {
      [OutputCache(Duration =50)]
        public ActionResult AddEmployee()
        {
           
            return View();
        }
        
        public ActionResult EmpHome()
        {
            return View();
        }

       
    }
}