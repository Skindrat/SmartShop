using SmartShop.DAL.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SmartShop.BLL.Services.Abstractions
{
    public interface IProductsService
    {
        Task<IEnumerable<Product>> GetAllProducts();
		Task AddProducts(Product products);
        Task DeleteProduct(int productId);
    }
}
