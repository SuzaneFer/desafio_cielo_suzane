import Header from "../../modules/header/Header";

const PublicPage = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default PublicPage;
