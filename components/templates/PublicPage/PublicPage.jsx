import Footer from "../../modules/footer/footer";
import Header from "../../modules/header/header";

const PublicPage = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default PublicPage;
