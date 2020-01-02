using Microsoft.EntityFrameworkCore;
using SmartShop.DAL.Abstraction.Repository;
using System;
using System.Threading.Tasks;

namespace SmartShop.DAL.Abstraction.UnitOfWork
{
    public interface IUnitOfWork : IDisposable
    {
        DbContext DatabaseContext { get; }
        Task<bool> Save();

        IProductRepository ProductRepository { get; }
    }
}
