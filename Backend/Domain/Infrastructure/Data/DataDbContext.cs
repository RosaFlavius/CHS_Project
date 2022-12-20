using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class DataDbContext : DbContext
    {
        public DataDbContext()
        {
        }
        public DataDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Car> Cars { get; set; }

        /*  protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
          {
              optionsBuilder.UseSqlServer("Server=DESKTOP-465R8PC\\SQLEXPRESS;Database=CHSProject;Trusted_Connection=true");
          }
  */
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            if (!options.IsConfigured)
            {
                options.UseSqlServer("Server=DESKTOP-465R8PC\\SQLEXPRESS;Database=CHSProject;Trusted_Connection=True;TrustServerCertificate=True;") ;
            }
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
        }
    }
   
}
