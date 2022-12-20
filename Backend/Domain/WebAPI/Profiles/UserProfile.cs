using AutoMapper;
using Domain.Entities;
using WebAPI.DTOs;

namespace WebAPI.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<User, UserDTO>()
                .ReverseMap();
        }
    }
}
