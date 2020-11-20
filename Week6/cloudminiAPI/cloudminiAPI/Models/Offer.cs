using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Web;

namespace cloudminiAPI.Models
{
    public class Offer
    {
        public string offername { get; set; }

        
        public string discount { get; set; }

        public string city { get; set; }

        public string rating { get; set; }

        public Offer(string o, string d,string c,string r)
        {
            offername = o;
            discount = d;
            city = c;
            rating = r;
        }
        
    }
    
}