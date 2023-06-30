// Controller (ProductController.js)

import Product from '../models/ListProductsModel';
class ProductController {
  static async getProducts() {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();

      // API'den alınan verileri Product modeline dönüştür
      const products = data.products.map(
        item =>
          new Product(
            item.id,
            item.title,
            item.price,
            item.thumbnail,
            item.description,
            item.rating,
            item.brand,
            item.images
          ),
      );

      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }
}
export default ProductController;
