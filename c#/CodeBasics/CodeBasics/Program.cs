using System;
using System.Text;

namespace CodeBasics
{
    class M
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Console.ReadKey();
        }
    }

    class N
    {
        static void Main(string[] args)
        {
            Console.WriteLine("fvcxcxvcx");
        }
    }

    class main
    {
        static void Main(string[] args) {
            Console.WriteLine("Enter a numeric string");
            string s = Console.ReadLine();
            char[] n = s.ToCharArray();
            for(int i = 0; i < s.Length; i++)
            {
                Console.Write(Convert.ToInt32(n[i].ToString())+ " ");
            }
         
        }
    }
}


