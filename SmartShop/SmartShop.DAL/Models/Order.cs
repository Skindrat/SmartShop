using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SmartShop.DAL.Models
{
    public class Order
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public double TotalPrice { get; set; }

        public List<Product> Products { get; set; }

        [Required]
        public float Quantity { get; set; }
    }
}
