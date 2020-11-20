using System;
using System.Collections.Generic;
using System.Text;
using System.Runtime.Serialization.Json;
using System.Xml.Serialization;
using System.IO;

namespace ConsoleApp3
{
    public class Employee
    {
      public int EmployeeId { get; set; }  
      public string EmployeeName { get; set; }

      public string[] skills { get; set; }
    }
}
