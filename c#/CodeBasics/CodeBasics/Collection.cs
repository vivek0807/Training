using System;
using System.Collections.Generic;
using System.Text;
using System.Collections;
namespace CodeBasics
{
    class Collection
    {
        public static void Main(string[] args)
        {
            ArrayList al = new ArrayList();
            Console.WriteLine("Adding few numbers");
            al.Add("hello");
            al.Add(22);
            al.Add(43);
            al.Add(45);
            al.Add("added all");

            al.Remove(45);
            al.RemoveAt(3);
            foreach(var s in al)
            {
                Console.WriteLine(s);
                Console.WriteLine(s.GetType());
                Console.WriteLine(al.Count);
                
            }
        }
    }
}
