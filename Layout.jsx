import Footer from "./src/components/Footer"
import Header from "./src/components/Header"

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
export default Layout