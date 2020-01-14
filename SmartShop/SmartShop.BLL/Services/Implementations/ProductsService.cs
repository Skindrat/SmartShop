using SmartShop.BLL.Services.Abstractions;
using SmartShop.DAL.Abstraction.UnitOfWork;
using SmartShop.DAL.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SmartShop.BLL.Services.Implementations
{
    public class ProductsService : IProductsService
    {
        private IUnitOfWork _unitOfWork;

        public ProductsService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task AddProducts(Product product)
        {
            await _unitOfWork.ProductRepository.Add(product);
        }

        public async Task DeleteProduct(int productId)
        {
            await _unitOfWork.ProductRepository.Delete(x => x.Id == productId);
        }

        public async Task<IEnumerable<Product>> GetAllProducts()
        {
            //return await _unitOfWork.ProductRepository.GetAll();
            return await Task.FromResult(new List<Product>()
            {
                new Product()
                {
                    Name = "Product1 Name",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    IsCounted = false,
                    IsFeatured = false,
                    Price = 200.50m,
                    Quantity = 100
                },
                  new Product()
                {
                    Name = "Product2 Name",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    IsCounted = false,
                    IsFeatured = false,
                    Price = 250m,
                    Quantity = 200
                },
                    new Product()
                {
                    Name = "Product3 Name",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    IsCounted = true,
                    IsFeatured = false,
                    Price = 1200m,
                    Quantity = 500
                }
            });
        }
    }
}
