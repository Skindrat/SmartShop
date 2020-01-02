using System.ComponentModel.DataAnnotations;

namespace SmartShop.DAL.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }
        [MaxLength(255)]
        public string Description { get; set; }

        public decimal Price { get; set; }

        public bool? IsFeatured { get; set; }
    }
}
