using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using SmartShop.BLL.Services.Abstractions;
using SmartShop.BLL.Services.Implementations;
using SmartShop.DAL.Abstraction.UnitOfWork;
using SmartShop.DAL.Implementation.EntityFramework.DbContexts;

namespace SmartShop.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            var dbConnection = Configuration.GetConnectionString("DefaultConnection");

            services.AddDbContext<DbContext, SmartShopDbContext>(opt => opt.UseSqlServer(dbConnection));
            services.AddScoped<IUnitOfWork, UnitOfWork>();

            services.AddScoped<IProductsService, ProductsService>();
            services.AddControllers();
        }
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
