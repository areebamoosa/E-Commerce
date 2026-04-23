import ProductDetail from "../../../../components/product/ProductDetail"
import { fragranceProducts } from "../../../../data/products/fragrance"


export default async function Page({ params }) {

    const { id } = await params;

    const product = fragranceProducts.find(
        (p) => p.id === Number(id)
    );

    if (!product) return <div>Not found</div>;

    return <ProductDetail product={product} />;
}
