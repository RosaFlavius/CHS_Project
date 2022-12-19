using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.RepositoryPatterns
{
    public interface ICarRepository
    {
        public void AddCar(Car car);
        public bool DeleteCar(Guid carId);
        public Car UpdateCar(Car car);
        public Task<Car> GetCar(Guid carId);
        public Task<IEnumerable<Car>> GetAllCars();
        public Task<int> SaveChangesAsync();
    }
}
