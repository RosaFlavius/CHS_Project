using Application.Commands;
using Application.Commands.Cars;
using Domain.Entities;
using Domain.RepositoryPattern;
using Domain.RepositoryPatterns;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.CommandHandlers.Cars
{
    public class AddCarCommandHandler : IRequestHandler<AddCarCommand, Car>
    {
        private readonly ICarRepository _carRepo;
        public AddCarCommandHandler(ICarRepository carRepo)
        {
            _carRepo = carRepo;
        }

        public async Task<Car> Handle(AddCarCommand request, CancellationToken cancellationToken)
        {
            var car = new Car(
                request.Make,
                request.Model,
                request.Year,
                request.Mileage,
                request.Fuel,
                request.Price,
                request.Image,
                request.Engine,
                request.AirConditions,
                request.NrOfDoors,
                request.Consumption,
                request.Availability,
                request.Location

                );

            _carRepo.AddCar(car);
            await _carRepo.SaveChangesAsync();
            return car;
        }
    }
}
