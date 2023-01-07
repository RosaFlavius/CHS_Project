using Application.Commands;
using Application.Queries;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using WebAPI.DTOs;
using Application.Queries.Cars;
using Application.Commands.Cars;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class CarController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly IMapper _mapper;
        public CarController(IMediator mediator, IMapper mapper)
        {
            _mediator = mediator;
            _mapper = mapper;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCar(Guid id)
        {
            var query = new GetCarQuery
            {
                Id = id
            };

            var result = await _mediator.Send(query);
            var dtoResult = _mapper.Map<CarGetDTO>(result);
            return Ok(dtoResult);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCars()
        {
            var query = new GetAllCarsQuery();

            var result = await _mediator.Send(query);
            var dtoResult = _mapper.Map<List<CarGetAllDTO>>(result);
            return Ok(dtoResult);
        }

        [HttpPost]
        public async Task<IActionResult> AddCar(NewCarDTO car)
        {
            var commandCar = new AddCarCommand
            {
                Make = car.Make,
                Model = car.Model,
                Year = car.Year,
                Mileage = car.Mileage,
                Fuel = car.Fuel,
                Price = car.Price,
                Image = car.Image,
                Engine = car.Engine,
                AirConditions = car.AirConditions,
                NrOfDoors = car.NrOfDoors,
                Consumption = car.Consumption,
                Availability = car.Availability,
                Location = car.Location,


            };

            await _mediator.Send(commandCar);

            return Ok(car);
        }

        [HttpDelete("{carId}")]
        public async Task<IActionResult> DeleteCar(Guid carId)
        {

            var command = new DeleteCarCommand
            {
                Id = carId
            };

            await _mediator.Send(command);
            return Ok(carId);
        }

        [HttpPut("{carId}")]
        public async Task<IActionResult> UpdateCar(NewCarDTO car, Guid carId)
        {

            var command = new UpdateCarCommand
            {
                Id = carId,
                Make = car.Make,
                Model = car.Model,
                Year = car.Year,
                Mileage = car.Mileage,
                Fuel = car.Fuel,
                Price = car.Price,
                Image = car.Image,
                Engine = car.Engine,
                AirConditions = car.AirConditions,
                NrOfDoors = car.NrOfDoors,
                Consumption = car.Consumption,
                Availability = car.Availability,
                Location = car.Location
            };
            await _mediator.Send(command);

            return Ok(carId);
        }

    }
}
