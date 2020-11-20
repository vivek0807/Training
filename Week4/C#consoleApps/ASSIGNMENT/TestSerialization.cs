using System;
using System.IO;
using System.Linq.Expressions;
using System.Runtime.Serialization.Json;
using System.Xml.Serialization;

namespace ConsoleApp3
{
    class TestSerialization
    {
        static void Main(string[] args)
        {
            Console.WriteLine("1. SERIALIZE USING JSON");
            Console.WriteLine("2. SERIALIZE USING XML");
            Console.WriteLine("3. DESERIALIZE USING JSON");
            Console.WriteLine("4. DESERIALIZE USING XML");
            Console.WriteLine("ENTER YOUR CHOICE");
            int ch = Convert.ToInt32(Console.ReadLine());
            switch (ch)
            {
                case 1: 
                    Employee emp = new Employee
                    {
                        EmployeeId = 121,
                        EmployeeName = "Kaleen Bhaiya",
                        skills = new string[] { "C#", "SQL", "LINQ" }
                    };
                    DataContractJsonSerializer serializer = new DataContractJsonSerializer(typeof(Employee));
                    using (FileStream file = new FileStream("results.txt", FileMode.OpenOrCreate, FileAccess.Write))
                    {
                        serializer.WriteObject(file, emp);
                    }
                    break;
                case 2:
                    Employee emp2 = new Employee
                    {
                        EmployeeId = 121,
                        EmployeeName = "Kaleen Bhaiya",
                        skills = new string[] { "C#", "SQL", "LINQ" }
                    };
                    XmlSerializer serializer1 = new XmlSerializer(typeof(Employee));
                    using (FileStream file2 = new FileStream("results.txt", FileMode.OpenOrCreate, FileAccess.Write))
                    {
                        serializer1.Serialize(file2, emp2);
                    }
                        break;
                case 3:
                    Employee emp3 = new Employee
                    {
                        EmployeeId = 121,
                        EmployeeName = "Kaleen Bhaiya",
                        skills = new string[] { "C#", "SQL", "LINQ" }
                    };
                    DataContractJsonSerializer serializer2 = new DataContractJsonSerializer(typeof(Employee));
                    using (FileStream stream = new FileStream("results.txt", FileMode.Open, FileAccess.Read))
                    {
                        Employee emp4 = (Employee)serializer2.ReadObject(stream);
                        Console.WriteLine("{0} {1}", emp4.EmployeeId, emp4.EmployeeName);
                        foreach (string skill in emp4.skills)
                        {
                            Console.WriteLine(skill);
                        }                    
                    }
                    break;
                case 4:
                    Employee emp5 = new Employee
                    {
                        EmployeeId = 121,
                        EmployeeName = "Kaleen Bhaiya",
                        skills = new string[] { "C#", "SQL", "LINQ" }
                    };
                    XmlSerializer serializer3 = new XmlSerializer(typeof(Employee));
                    using (FileStream stream2 = new FileStream("results.txt", FileMode.Open, FileAccess.Read))
                    {
                        Employee emp6 = (Employee)serializer3.Deserialize(stream2);
                        Console.WriteLine("{0} {1}", emp6.EmployeeId, emp6.EmployeeName);
                        foreach (string skill in emp6.skills)
                        {
                            Console.WriteLine(skill);
                        }
                    }
                    break;
            }
        }
    }
}
