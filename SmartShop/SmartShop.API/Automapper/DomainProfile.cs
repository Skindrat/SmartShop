using AutoMapper;
using SmartShop.API.DTO;
using SmartShop.DAL.Models;

namespace SmartShop.API.Automapper
{
    public class DomainProfile : Profile
    {
        public DomainProfile()
        {
            CreateMap<Product, ProductDto>();
        }
    }
}
