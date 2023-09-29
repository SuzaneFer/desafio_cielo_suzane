import Header from "../../modules/header/header";

const PublicPage = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default PublicPage;
