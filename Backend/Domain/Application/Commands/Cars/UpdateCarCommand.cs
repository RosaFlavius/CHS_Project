using Domain.Entities;
using Domain.Enums;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Commands.Cars
{
    public class UpdateCarCommand : IRequest<Car>
    {
        public Guid Id { get; set; }
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
        public float Latitude { get; set; }
        public float Longitude { get; set; }
    }
}
