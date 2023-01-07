using Domain.Enums;

namespace WebAPI.DTOs
{
    public class CarGetAllDTO
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Make { get; set; }
        public string Model { get; set; }
        public string Image { get; set; }
        public float Price { get; set; }
        public bool Availability { get; set; }
        public string Location { get; set; }
    }
}
