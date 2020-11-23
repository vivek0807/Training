using System;

namespace codesBasics
{
    class Program

    {
        static void runself()
        {
            Console.WriteLine("running without call");
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
