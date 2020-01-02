using Microsoft.EntityFrameworkCore;
using SmartShop.DAL.Abstraction.Repository;
using SmartShop.DAL.Models;

namespace SmartShop.DAL.Implementation.EntityFramework
{
    public class ProductRepository : BaseRepository<Product>, IProductRepository
    {
        public ProductRepository(DbContext dataContext) : base(dataContext)
        {
        }
    }
}
