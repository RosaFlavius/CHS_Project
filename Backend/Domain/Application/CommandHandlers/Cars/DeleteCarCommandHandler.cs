using Application.Commands;
using Application.Commands.Cars;
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
    public class DeleteCarCommandHandler : IRequestHandler<DeleteCarCommand, bool>
    {
        private readonly ICarRepository _carRepo;

        public DeleteCarCommandHandler(ICarRepository carRepo)
        {
            _carRepo = carRepo;
        }

        public async Task<bool> Handle(DeleteCarCommand request, CancellationToken cancellationToken)
        {
            var car = await _carRepo.GetCar(request.Id);
            bool result = _carRepo.DeleteCar(request.Id);
            await _carRepo.SaveChangesAsync();
            return await Task.FromResult(result);
        }
    }
}
