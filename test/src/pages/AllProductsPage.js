import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProductCard from '../components/ProductCard';
import ProductFilter from '../components/ProductFilter';

function AllProductsPage() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ category: '', company: '', minRating: 0, priceRange: [0, 1000], availability: 'all' });

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts(filters.category, filters.company, filters.minRating, filters.priceRange, filters.availability);
      setProducts(data);
    }
    loadProducts();
  }, [filters]);

  return (
    <div>
      <ProductFilter filters={filters} setFilters={setFilters} />
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default AllProductsPage;