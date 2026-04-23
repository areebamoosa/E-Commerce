import ProductDetail from "../../../../components/product/ProductDetail"
import { skinProducts } from "../../../../data/products/skin"

export default async function Page({ params }) {

    const { id } = await params;

    const product = skinProducts.find(
        (p) => p.id === Number(id)
    );

    if (!product) return <div>Not found</div>;

    return <ProductDetail product={product} />;
}
