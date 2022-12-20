using Domain.Entities;
using Domain.RepositoryPatterns;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Application.Repositories
    {
        public class CarRepository : ICarRepository
        {
            private readonly DataDbContext _dbContext;

            public CarRepository(DataDbContext dbContext)
            {
                _dbContext = dbContext;
            }

            public void AddCar(Car car)
            {
                _dbContext.Cars.Add(car);

            }

            public bool DeleteCar(Guid id)
            {
                var car = _dbContext.Cars.FirstOrDefault(item => item.Id == id);
                if (car != null)
                {
                    _dbContext.Remove(car);
                    return true;
                }
                return false;
            }

            public Car UpdateCar(Car item)
            {
                var car = _dbContext.Cars.FirstOrDefault(i => i.Id == item.Id);
                car = item;
                return car;


            }

            public async Task<Car> GetCar(Guid id)
            {
                var car = await _dbContext.Cars.FirstOrDefaultAsync(item => item.Id == id);

                if (car != null)
                {
                    return car;
                }
                throw new ApplicationException($"Car with id: {id} does not exist");

            }

            public async Task<IEnumerable<Car>> GetAllCars()
            {
                return _dbContext.Cars;
            }

            public async Task<int> SaveChangesAsync()
            {

                return await _dbContext.SaveChangesAsync();
            }
        }
    }

