import Footer from "./src/components/Footer"
import Header from "./src/components/Header"
import { Routes, Route } from 'react-router-dom';
import Home from "./src/pages/Home";
import NewFeatured from "./src/pages/NewFeatured";
import Perfumes from "./src/pages/Perfumes";
import Colognes from "./src/pages/Colognes";
import Sale from "./src/pages/Sale";
import PrivacyPolicy from "./src/pages/Privacy";


const Layout = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new-featured" element={<NewFeatured />} />
                <Route path="/perfumes" element={<Perfumes />} />
                <Route path="/colognes" element={<Colognes />} />
                <Route path="/sale" element={<Sale />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
            <Footer />
        </>
    )
}
export default Layout