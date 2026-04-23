import ProductDetail from "../../../../components/product/ProductDetail"
import { cosmeticsProducts } from "../../../../data//products/cosmetics"

export default async function Page({ params }) {

    const { id } = await params;

    const product = cosmeticsProducts.find(
        (p) => p.id === Number(id)
    );

    if (!product) return <div>Not found</div>;

    return <ProductDetail product={product} />;
}
