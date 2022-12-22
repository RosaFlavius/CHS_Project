using Application.Commands.Orders;
using Domain.Entities;
using Domain.RepositoryPatterns;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.CommandHandlers.Orders
{
    public class AddOrderCommandHandler : IRequestHandler<AddOrderCommand, Order>
    {
        private readonly IOrderRepository _orderRepo;

        public AddOrderCommandHandler(IOrderRepository orderRepo)
        {
            _orderRepo = orderRepo;
        }

        public async Task<Order> Handle(AddOrderCommand request, CancellationToken cancellationToken)
        {
            var order = new Order
            {
                TotalPrice = request.TotalPrice,
            };

            _orderRepo.AddOrder(order);
            await _orderRepo.SaveChangesAsync();
            return order;
        }


    }
}
