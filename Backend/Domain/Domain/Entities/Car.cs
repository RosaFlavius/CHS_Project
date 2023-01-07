using Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Car
    {
        public Car(string make, string model, int year, int mileage, FuelType fuel, float price, string image, int engine, bool airConditions, int nrOfDoors, ConsumptionType consumption, bool availability, string location)
        {
            Make = make;
            Model = model;
            Year = year;
            Mileage = mileage;
            Fuel = fuel;
            Price = price;
            Image = image;
            Engine = engine;
            AirConditions = airConditions;
            NrOfDoors = nrOfDoors;
            Consumption = consumption;
            Availability = availability;
            Location = location;
            


            /*           if (string.IsNullOrEmpty(make))
                            throw new ArgumentNullException("Null_make");
                        if (string.IsNullOrEmpty(model))
                            throw new ArgumentNullException("Null_model");
                        if (year < 1800)
                            throw new ArgumentOutOfRangeException("Wrong_Year_Range");
                        if (mileage < 0)
                            throw new ArgumentOutOfRangeException("Wrong_Mileage_Range");
                        if (string.IsNullOrEmpty(image))
                            throw new ArgumentNullException("Null_image");
                        if (price <= 0)
                            throw new ArgumentOutOfRangeException("Wrong_Price_Range");*/
        }
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Make { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public int Mileage { get; set; }
        public FuelType Fuel { get; set; }
        public string Image { get; set; }
        public float Price { get; set; }
        public int Engine { get; set; }
        public bool AirConditions { get; set; }
        public int NrOfDoors { get; set; }
        public ConsumptionType Consumption { get; set; }
        public bool Availability { get; set; }
        public string Location { get; set; }




}
}
