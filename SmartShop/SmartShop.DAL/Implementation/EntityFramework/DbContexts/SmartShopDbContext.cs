using Microsoft.EntityFrameworkCore;
using SmartShop.DAL.Models;

namespace SmartShop.DAL.Implementation.EntityFramework.DbContexts
{
    public class SmartShopDbContext : DbContext
    {
        public DbSet<Product> Products { get; set; }

        public SmartShopDbContext(DbContextOptions<SmartShopDbContext> options) 
            : base(options)
        {
            Database.EnsureCreated();
        }
    }
}
