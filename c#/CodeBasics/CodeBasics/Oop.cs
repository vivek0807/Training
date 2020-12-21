using System;
using System.Collections.Generic;
using System.Text;

namespace ObjectOriented
{
    interface implementer
    {
       void  nameme();
        void youNameMe(string getname);
    }
    class Game:implementer
    {
        private string name;
        private int maxNumPlayers;


        public string Name { get => name; set => name = value; }
        public int MaxNumPlayers { get => maxNumPlayers; set => maxNumPlayers = value; }

        public override string ToString()
        {
            return Name+" has max players -->"+MaxNumPlayers.ToString();
        }
       public void nameme()
        {
            Name = "Set the name";
        }
       public void youNameMe(string name)
        {
            Name = name;
        }
    }
    class main
    {
        static void Main()
        {
           Game game = new Game();
           game.Name = "Cricket";
            game.MaxNumPlayers = 11;
             Console.WriteLine(game);
            
        }
    }
}


namespace insaurance
{
    class Insaurance
    {
        private int ino;
        private string iname;
        private double amtcovered;

        public int Ino { get => ino; set => ino = value; }
        public string Iname { get => iname; set => iname = value; }
        public double Amtcovered { get => amtcovered; set => amtcovered = value; }

    }

    class Motorinsaurance:Insaurance
    {
        private double idv;
        private float depPercent;

        public double Idv { get => idv; set => idv = value; }
        public float DepPercent { get => depPercent; set => depPercent = value; }

        public double calculatePreminum()
        {
            return Amtcovered - ((Amtcovered * DepPercent) / 100);
        }
    }

    class LifeInsaurance:Insaurance
    { }
}