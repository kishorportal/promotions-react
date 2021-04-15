using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using promotion.Model;

namespace promotion.Controllers
{
     [Route("api/[controller]")]
    public class UserController : Controller
    {
        readonly DatabaseContext _dbcontext;
        public IConfiguration _config { get; set; }
        public UserController(DatabaseContext databaseContext,IConfiguration config)
        {
            _config = config;
            _dbcontext = databaseContext;
        }
        [HttpPost]
        public IActionResult Post([FromBody] UserViewModel person)
        {
            try{
            var user = _dbcontext.User_tlb.Where(x => x.Email == person.Email.Trim()).Count();
            if(user>0){
				if(person.Id != null) {
					var usrCheck = _dbcontext.User_tlb.Where(x => x.Id == Guid.Parse(person.Id)).Count();

				
				}
                return Ok("Email already exist");
            }

            byte[] hashedPassword = EncryptPassword(person.Password);
            var personInfo = new User{
                FirstName = person.FirstName,
                LastName = person.LastName,
                Email = person.Email,
                Phonenumber = person.Phonenumber,
                Password = hashedPassword,
                CreatedDate = DateTime.Now, 
				CreatedUser = person.FirstName,
			    IsActive = true
			   

            }; 
            _dbcontext.Add(personInfo);
            _dbcontext.SaveChanges();
            return Ok(personInfo.Id);
            }catch(Exception ex){
                return BadRequest(ex.Message);

            }

        }
        [HttpPost]
		[Route("Login")]
		public IActionResult PostUserLogin([FromBody] UserViewModel value)
		{

			try
			{
				byte[] hashedPassword = EncryptPassword(value.Password);
				var user = _dbcontext.User_tlb.Where(x => x.Email == value.Email && x.IsActive == true).FirstOrDefault();
				
				if (user == null)
				{
					return NotFound("User not found");
				}

				bool passwordsMatch = CompareBytes(user.Password, hashedPassword);
				if(passwordsMatch == false) {
					return NotFound("Incorrect Password");
				}
				
				var claims = new[]
				{
							new Claim(ClaimTypes.Name, user.Email),
							new Claim(ClaimTypes.Email, user.Email)
							 };


				var token = new JwtSecurityToken(

				expires: DateTime.Now.AddMonths(6));
				user.Password = null;
                user.PasswordResetCode = null;
                user.PasswordResetTime = null;

				return Ok(new
				{
					user,
					token = new JwtSecurityTokenHandler().WriteToken(token),
				});

			}
			catch (Exception ex)
			{
				Console.WriteLine(ex.Message);
				return BadRequest("Username and Password Not found, Please sign-up first");
			}

		 }
         byte[] EncryptPassword(string password)
		{
			byte[] data = System.Text.Encoding.ASCII.GetBytes(password);
			MD5 md5 = MD5.Create();
			byte[] hash = md5.ComputeHash(data);
			return hash;
		}
        		bool CompareBytes(byte[] databasePassword, byte[] userPassword)
		{
			bool bEqual = false;
			if (userPassword.Length == databasePassword.Length)
			{
				int i = 0;
				while ((i < userPassword.Length) && (userPassword[i] == databasePassword[i]))
				{
					i += 1;
				}
				if (i == userPassword.Length)
				{
					bEqual = true;
				}
			}
			return bEqual;
		}
        
        
    }
}
