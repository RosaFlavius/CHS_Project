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
    public class UpdateCarCommandHandler : IRequestHandler<UpdateCarCommand, Car>
    {
        private readonly ICarRepository _carRepo;

        public UpdateCarCommandHandler(ICarRepository carRepo)
        {
            _carRepo = carRepo;
        }

        public async Task<Car> Handle(UpdateCarCommand request, CancellationToken cancellationToken)
        {
            var car = await _carRepo.GetCar(request.Id);
            car.Make = request.Make;
            car.Model = request.Model;
            car.Year = request.Year;
            car.Mileage = request.Mileage;
            car.Fuel = request.Fuel;
            car.Price = request.Price;
            car.Image = request.Image;
            car.Engine = request.Engine;
            car.AirConditions = request.AirConditions;
            car.NrOfDoors = request.NrOfDoors;
            car.Consumption = request.Consumption;
            car.Availability = request.Availability;
            car.Location = request.Location;
            car.Latitude = request.Latitude;
            car.Longitude = request.Longitude;

            Car result = _carRepo.UpdateCar(car);
            await _carRepo.SaveChangesAsync();
            return await Task.FromResult(result);
        }
    }

}
