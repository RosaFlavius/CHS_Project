using Application.Commands;
using Application.Repositories;
using Domain.Entities;
using Domain.RepositoryPattern;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.CommandHandlers
{
    public class AddUserCommandHandler : IRequestHandler<AddUserCommand, User>
    {
        private readonly IUserRepository _userRepo;
        public AddUserCommandHandler(IUserRepository userRepo) 
        {
            _userRepo = userRepo;
        }
        public async Task<User> Handle(AddUserCommand request, CancellationToken cancellationToken)
        {

            var user = new User(
                request.Name,
                request.Email,
                request.Password,
                request.DateOfBirth,
                request.Phone,
                request.Country,
                request.City,
                request.Address,
                request.Picture,
                request.Admin
                );

            _userRepo.AddUser(user);
            await _userRepo.SaveChangesAsync();
            return user;
        }
    }
}
