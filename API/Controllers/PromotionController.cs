using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using promotion.Model;

namespace promotion.Controllers
{
     [Route("api/[controller]")]
    public class PromotionController : Controller
    {
        readonly DatabaseContext _dbcontext;
        public IConfiguration _config { get; set; }
        public PromotionController(DatabaseContext databaseContext,IConfiguration config)
        {
            _config = config;
            _dbcontext = databaseContext;
        }
        [HttpGet]
        [Route("Search/{name}")]
        public IActionResult GetCategory(string name)
        {
            SqlParameter para = new SqlParameter("@name", "%" + name + "%");
            var data = _dbcontext.Promo_tlb.FromSql($"select * from dbo.Promo_tlb where name LIKE @name", para).ToList();
            PromotionViewModel view = null;
            List<PromotionViewModel> listViews = new List<PromotionViewModel>();
            foreach (var item in data)
            {
                view = new PromotionViewModel
                {
                    Id = item.Id,
                    Description = item.Description,
                    CreatedDate = DateTime.Now,
                    CreatedUser = "Kishor",
                    ModifiedDate = DateTime.Now,
                    ModifiedUser = "Kishor",
                    Name = item.Name,
                    PromoCode = item.PromoCode

                };
                listViews.Add(view);

            }
            return Ok(listViews);
        }
        [HttpGet]
        [Route("list")]
        public IActionResult GetAll(string name)
        {
            SqlParameter para = new SqlParameter("@name", "%" + name + "%");
            var data = _dbcontext.Promo_tlb.FromSql($"select * from dbo.Promo_tlb", para).ToList();
            PromotionViewModel view = null;
            List<PromotionViewModel> listViews = new List<PromotionViewModel>();
            foreach (var item in data)
            {
                view = new PromotionViewModel
                {
                    Id = item.Id,
                    Description = item.Description,
                    CreatedDate = DateTime.Now,
                    CreatedUser = "Kishor",
                    ModifiedDate = DateTime.Now,
                    ModifiedUser = "Kishor",
                    Name = item.Name,
                    PromoCode = item.PromoCode

                };
                listViews.Add(view);

            }
            return Ok(listViews);
        }
        [HttpGet]
        [Route("ActivateBonus/{name}")]
        public IActionResult Activate(string name)
        {
            var activate = _dbcontext.Promo_tlb.Where(x => x.Name == name).FirstOrDefault();

			activate.IsBonusActive = true;
 
		   _dbcontext.Entry(activate).State = EntityState.Modified;
		   _dbcontext.SaveChanges();
		   return Ok(activate);
        }
        
    }
}
