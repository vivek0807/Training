using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Mvc;
using cloudminiAPI.Models;
using Microsoft.Ajax.Utilities;

namespace cloudminiAPI.Controllers
{
    public class OffersController : ApiController
    {
        public JsonResult<List<Offer>> GetOffers(string getcity)
        {
            var activeOffers = new List<Offer>();
            var matchcity=new List<Offer>();

            //get below data from sql server in real time proj
            activeOffers.Add(new Offer ("Diwali Dhamaka", "Extreme","Bengaluru","Best"));
            activeOffers.Add(new Offer ("new year", "Usual","Ahmedabad","business"));
            activeOffers.Add(new Offer ("Durga Puja", "Extreme","Kolkata","Festive"));


            foreach (var temp in activeOffers)
            {
                if (temp.city.Equals(getcity))
                {
                    matchcity.Add(temp);
                }
            }
           
            return Json(matchcity);
        }
    }
}
