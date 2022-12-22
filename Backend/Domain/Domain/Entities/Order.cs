using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Order
    {
        public Order()
        {

        }
        public Guid Id { get; set; } = Guid.NewGuid();
        public double TotalPrice { get; set; }
    }
}
