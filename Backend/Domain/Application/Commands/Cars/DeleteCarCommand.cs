using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Commands.Cars
{
    public class DeleteCarCommand : IRequest<bool>
    {
        public Guid Id { get; set; }
    }
}
