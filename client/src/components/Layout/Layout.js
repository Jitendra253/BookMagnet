import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords, author }) => {
  const layoutStyles = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  };


  const mainStyles = {
    flex: 1,
    minHeight: "70vh",
    paddingBlock: "2px", // giving the padding inside components of the layout 
    paddingBottom: "2px",// Adjust the value to accommodate the footer height
  };
  const footerStyles = {
    marginTop: "auto",
  };
  return (
    <div style={layoutStyles}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={mainStyles}>
        <Toaster />
        {children}
      </main>
      <Footer style={footerStyles} />
    </div>
  );
};

Layout.defaultProps = {
  title: "Ecommerce app - Book Bazaar",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "JitendraMahali",
};

export default Layout;
