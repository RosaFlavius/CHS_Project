using AutoMapper;
using Domain.Entities;
using WebAPI.DTOs;

namespace WebAPI.Profiles
{
    public class OrderProfile : Profile
    {
        public OrderProfile()
        {
            CreateMap<Order, OrderDTO>()
                .ReverseMap();
            CreateMap<Order, NewOrderDTO>()
                .ReverseMap();
        }
    }
}
