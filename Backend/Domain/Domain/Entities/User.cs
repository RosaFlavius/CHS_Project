using System;
using System.Collections.Generic;
using System.Diagnostics.Metrics;
using System.Linq;
using System.Net;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class User
    {
        public User(string name, string email, string password, string dateOfBirth, string phone, string country, string city, string address, string picture, bool admin)
        {
            Name = name;
            Email = email;
            Password = password;
            DateOfBirth = dateOfBirth;
            Phone = phone;
            Country = country;
            City = city;
            Address = address;
            Picture = picture;
            Admin = admin;
        }

        public Guid Id { get; set; } = Guid.NewGuid();
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string DateOfBirth { get; set; }
        public string Phone { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
        public string Picture { get; set; }
        public bool Admin { get; set; }

    }
}
