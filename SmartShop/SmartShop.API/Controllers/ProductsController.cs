
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SmartShop.API.DTO;
using SmartShop.BLL.Services.Abstractions;
using SmartShop.DAL.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SmartShop.API.Controllers
{
    public class ProductsController : Controller
    {
        private IProductsService _productsService;
        private IMapper _mapper;

        public ProductsController(IProductsService productsService, IMapper mapper)
        {
            _productsService = productsService;
            _mapper = mapper;
        }

        [Route("api/Products")]
        [HttpGet]
        public async Task<IEnumerable<ProductDto>> GetProducts()
        {
            return _mapper.Map<IEnumerable <ProductDto>>( await _productsService.GetAllProducts());
        }

        [Route("api/AddProduct")]
        [HttpPost]
        public async Task PostProducts(ProductDto product)
        {
            await _productsService.AddProducts(_mapper.Map<Product>(product));
        }

        [Route("api/DeleteProduct")]
        [HttpPost]
        public async Task PostProducts(int productId)
        {
            await _productsService.DeleteProduct(productId);
        }
    }
}