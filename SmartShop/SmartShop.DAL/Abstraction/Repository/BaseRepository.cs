﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace SmartShop.DAL.Abstraction.Repository
{
    public abstract class BaseRepository<T> : IRepository<T> where T : class
    {
        private DbContext _ctx;

        public BaseRepository(DbContext context)
        {
            _ctx = context;
        }

        public virtual async Task<bool> Add(T entity)
        {
            try
            {
                await _ctx.Set<T>().AddAsync(entity);
                return true;
            }
            catch (Exception)
            {
                return await Task.FromResult(false);
            }
        }

        public async Task<bool> AddRange(IEnumerable<T> entities)
        {
            try
            {
                await _ctx.Set<T>().AddRangeAsync(entities);
                return true;
            }
            catch (Exception)
            {
                return await Task.FromResult(false);
            }
        }

        public virtual async Task<List<T>> GetAll()
        {
            var res = _ctx.Set<T>().ToList();
            return await Task.FromResult(res);
        }

        public virtual async Task<List<T>> GetAll(params Expression<Func<T, object>>[] includes)
        {
            var result = _ctx.Set<T>().Where(i => true);

            foreach (var includeExpression in includes)
                result = result.Include(includeExpression);

            return await result.ToListAsync();
        }


        public virtual async Task<List<T>> SearchBy(Expression<Func<T, bool>> searchBy, params Expression<Func<T, object>>[] includes)
        {
            var result = _ctx.Set<T>().Where(searchBy);

            foreach (var includeExpression in includes)
                result = result.Include(includeExpression);

            return await result.ToListAsync();
        }

        public virtual async Task<T> FindBy(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[] includes)
        {
            var result = _ctx.Set<T>().Where(predicate);

            foreach (var includeExpression in includes)
                result = result.Include(includeExpression);

            return await result.FirstOrDefaultAsync();
        }

        public virtual async Task<bool> Update(T entity)
        {
            try
            {
                _ctx.Set<T>().Attach(entity);
                _ctx.Entry(entity).State = EntityState.Modified;

                return await Task.FromResult(true);
            }
            catch (Exception)
            {
                return await Task.FromResult(false);
            }
        }

        public virtual async Task<bool> Delete(Expression<Func<T, bool>> identity, params Expression<Func<T, object>>[] includes)
        {
            var results = _ctx.Set<T>().Where(identity);

            foreach (var includeExpression in includes)
                results = results.Include(includeExpression);
            try
            {
                _ctx.Set<T>().RemoveRange(results);
                return await Task.FromResult(true);
            }
            catch (Exception)
            {
                return await Task.FromResult(false);
            }
        }

        public virtual async Task<bool> Delete(T entity)
        {
            _ctx.Set<T>().Remove(entity);
            return await Task.FromResult(true);
        }
    }
}
