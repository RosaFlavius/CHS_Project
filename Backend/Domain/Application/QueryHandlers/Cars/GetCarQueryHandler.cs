using Application.Queries;
using Application.Queries.Cars;
using Domain.Entities;
using Domain.RepositoryPattern;
using Domain.RepositoryPatterns;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.QueryHandlers.Cars
{
    public class GetCarQueryHandler : IRequestHandler<GetCarQuery, Car>
    {

        private readonly ICarRepository _carRepo;

        public GetCarQueryHandler(ICarRepository carRepo)
        {
            _carRepo = carRepo;
        }

        public async Task<Car> Handle(GetCarQuery request, CancellationToken cancellationToken)
        {
            var result = await _carRepo.GetCar(request.Id);
            return await Task.FromResult(result);
        }
    }
}
