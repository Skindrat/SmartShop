using Microsoft.EntityFrameworkCore;
using SmartShop.DAL.Abstraction.Repository;
using SmartShop.DAL.Implementation.EntityFramework;
using System;
using System.Threading.Tasks;

namespace SmartShop.DAL.Abstraction.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private IProductRepository _productRepository;

        public UnitOfWork(DbContext databaseContext)
        {
            DatabaseContext = databaseContext;
        }

        public DbContext DatabaseContext { get; private set; }

        public async Task<bool> Save()
        {
            try
            {
                int _save = await DatabaseContext.SaveChangesAsync();
                return await Task.FromResult(true);
            }
            catch (Exception)
            {
                return await Task.FromResult(false);
            }
        }

        Task<bool> IUnitOfWork.Save()
        {
            throw new NotImplementedException();
        }

        public void Dispose()
        {
            DatabaseContext?.Dispose();
        }

        DbContext IUnitOfWork.DatabaseContext { get; }

        public IProductRepository ProductRepository => _productRepository ?? (_productRepository = new ProductRepository(DatabaseContext));
    }
}
