import BannerHome from "../../components/BannerHome"
import Coupon from "../../components/Coupon"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import ProductList from "../../components/ProductList"

const Home = () => {

    return (
        <div>
            <Header />
            <Coupon />
            <BannerHome />
            <ProductList cardCount={8} />
            <Footer />
        </div>
    )
}

export default Home