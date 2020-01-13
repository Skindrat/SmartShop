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

        public async Task<IEnumerable<Product>> GetAllProducts()
        {
            return await _unitOfWork.ProductRepository.GetAll();
        }
    }
}
