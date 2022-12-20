using Application.Commands;
using Application.Repositories;
using Domain.RepositoryPattern;
using Infrastructure.Data;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Presentation
{
    public class Program
    {
        private static IMediator _mediator;
        private static ServiceProvider _diContainer;

        private static async Task Main(string[] args)
        {
            ConfigureMediator();
        }

        private static void ConfigureMediator()
        {
            _diContainer = new ServiceCollection()
                .AddMediatR(typeof(AddUserCommand))
                .AddScoped<IUserRepository, UserRepository>()
                //.AddDbContext<DataDbContext>(options => options.UseSqlServer("Server=DESKTOP-465R8PC\\SQLEXPRESS;Database=CHSProject;Trusted_Connection=true"))
                .BuildServiceProvider();
            _mediator = _diContainer.GetRequiredService<IMediator>();
        }
    }
}