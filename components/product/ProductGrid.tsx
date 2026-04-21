import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
