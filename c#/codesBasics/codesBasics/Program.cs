using System;
namespace codesBasics
{
    class Program
    { static string runself()
        {
            Console.WriteLine("running without call");
            return "Called the method";
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Console.WriteLine("Give me a number");

            int get = Convert.ToInt32(Console.ReadLine());
            int n = 'a';
            Console.WriteLine(get+"Fifty six");
            runself();
            Console.ReadKey();
            
        }
    }
    
}
