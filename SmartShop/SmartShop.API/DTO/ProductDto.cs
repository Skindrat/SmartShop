namespace SmartShop.API.DTO
{
    public class ProductDto
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public decimal Price { get; set; }

        public float Quantity { get; set; }

        public bool IsCounted { get; set; }

        public bool? IsFeatured { get; set; }

    }
}
