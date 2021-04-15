
using Microsoft.EntityFrameworkCore;
using promotion.Model;

namespace promotion.Model{
    public class DatabaseContext:DbContext{
        public DatabaseContext(DbContextOptions<DatabaseContext> options): base(options)
        {

        }
        public DbSet<Promotion> Promo_tlb { get; set; }
        public DbSet<User> User_tlb { get; set; }


       






    }
}
