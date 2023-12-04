import Coupon from "../../components/Coupon"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import ProductInfos from "../../components/ProductInfos";
import ProductPage from "../../components/ProductPage"
import "./Product.sass";


const Product = () => {
    const produto = {
        title: 'Nome do Produto',
        code: 'XYZ123',
        price: 99.99,
    };

    return (
        <div>
            <Header />
            <Coupon />
            <div className="box-img">
                <ProductPage mainImage="https://picsum.photos/200" smallImages={["https://picsum.photos/200", "https://picsum.photos/200", "https://picsum.photos/200"]} />
                <ProductInfos {...produto} />
            </div>

            <Footer />
        </div>
    )
}

export default Product