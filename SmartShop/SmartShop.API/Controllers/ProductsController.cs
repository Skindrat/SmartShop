using Microsoft.AspNetCore.Mvc;
using SmartShop.BLL.Services.Abstractions;
using SmartShop.DAL.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SmartShop.API.Controllers
{
    public class ProductsController : Controller
    {
        private IProductsService _productsService;

        public ProductsController(IProductsService productsService)
        {
            _productsService = productsService;
        }

        [Route("api/products")]
        [HttpGet]
        public async Task<IEnumerable<Product>> GetProducts()
        {
            return await _productsService.GetAllProducts();
        }
    }
}