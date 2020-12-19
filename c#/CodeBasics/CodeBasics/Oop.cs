using System;
using System.Collections.Generic;
using System.Text;

namespace ObjectOriented
{
    class A
    {
        private int productid;
        private string productName;
        private float price;
        public float Price { get => price; set => price = value; }
        public string ProductName { get => productName; set => productName = value; }
        public int Productid { get => productid; set => productid = value; }

        public void display(int n)
        {
            Console.WriteLine(ProductName + " " + Price);
        }

    }
    class B:A  
    {
        private string productname = "Charger";
       new  public void  display()
        {
            base.display(5);
           // Console.WriteLine(productname);
        }
    }
    class Oop
    {
        public static void Main()
        {
            B a = new B();
            a.Price = 50f;
            a.display();
           
        }
    }
}
