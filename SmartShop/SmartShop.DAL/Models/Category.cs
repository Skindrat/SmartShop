using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SmartShop.DAL.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string Description { get; set; }

        public List<Product> Products { get; set; }
    }
}
