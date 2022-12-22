using Application.Queries.Orders;
using Domain.Entities;
using Domain.RepositoryPatterns;
using Infrastructure.Data;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.QueryHandlers.Orders
{
    public class GetOrderQueryHandler : IRequestHandler<GetOrderQuery, Order>
    {

        private readonly IOrderRepository _orderRepo;

        public GetOrderQueryHandler(IOrderRepository orderRepo)
        {
            _orderRepo = orderRepo;
        }

        public async Task<Order> Handle(GetOrderQuery request, CancellationToken cancellationToken)
        {
            var customer = new Order
            {
                Id = Guid.NewGuid(),
            };

            var result = await _orderRepo.GetOrder(request.Id);
            return await Task.FromResult(result);
        }
    }
}
