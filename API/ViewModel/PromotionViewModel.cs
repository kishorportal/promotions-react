
using Microsoft.EntityFrameworkCore;
using System;
using promotion.Model;

namespace promotion.Model{
    public class PromotionViewModel{
       
        public Guid Id { get; set; }
        public DateTime? CreatedDate { get; set; }
          public  string CreatedUser { get; set; }
         public DateTime? ModifiedDate { get; set; }
         public string ModifiedUser { get; set; }
         public string PromoCode { get; set; }
         public string Name { get; set; }
         public string Description { get; set; }
          public bool IsBonusActive  { get; set; }


    }
}
