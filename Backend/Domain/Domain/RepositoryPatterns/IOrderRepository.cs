using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.RepositoryPatterns
{
    public interface IOrderRepository
    {
        public void AddOrder(Order order);
        public bool DeleteOrder(Guid orderId);
        public Order UpdateOrder(Order Order);
        public Task<Order> GetOrder(Guid orderId);
        public Task<IEnumerable<Order>> GetAllOrders();
        public Task<int> SaveChangesAsync();
    }
}
