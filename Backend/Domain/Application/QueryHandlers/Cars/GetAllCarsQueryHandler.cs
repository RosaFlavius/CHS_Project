using Application.Queries.Cars;
using Domain.Entities;
using Domain.RepositoryPatterns;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.QueryHandlers.Cars
{
    public class GetAllCarsQueryHandler : IRequestHandler<GetAllCarsQuery, IEnumerable<Car>>
    {
        private readonly ICarRepository _carRepo;

        public GetAllCarsQueryHandler(ICarRepository carRepo)
        {
            _carRepo = carRepo;
        }

        public async Task<IEnumerable<Car>> Handle(GetAllCarsQuery request, CancellationToken cancellationToken)
        {
            var result = await _carRepo.GetAllCars();
            return await Task.FromResult(result);
        }
    }
}
