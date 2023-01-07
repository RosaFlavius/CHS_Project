using AutoMapper;
using Domain.Entities;
using WebAPI.DTOs;

namespace WebAPI.Profiles
{
    public class CarProfile : Profile
    {
        public CarProfile()
        {
            CreateMap<Car, CarGetAllDTO>()
                .ReverseMap();
            CreateMap<Car, CarGetDTO>()
               .ReverseMap();
            CreateMap<Car, NewCarDTO>()
                .ReverseMap();
        }
    }
}
