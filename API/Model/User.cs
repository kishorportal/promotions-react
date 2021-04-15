
using Microsoft.EntityFrameworkCore;
using System;
using promotion.Model;

namespace promotion.Model{
    public class User{
        public Guid Id { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedUser { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string ModifiedUser { get; set; }
        public bool IsActive  { get; set; }
        public  string FirstName { get; set; }
         public  string LastName { get; set; }
         public  string Email { get; set; }
         public  string Phonenumber { get; set; }

         public  byte[] Password { get; set; }
         public string PasswordResetCode { get; set; }
         public DateTime? PasswordResetTime { get; set; }

    }
}
