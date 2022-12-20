using Domain.Enums;

namespace WebAPI.DTOs
{
    public class CarDTO
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Make { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public int Mileage { get; set; }
        public FuelType Fuel { get; set; }
        public string Image { get; set; }
        public float Price { get; set; }
    }
}
