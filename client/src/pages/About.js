import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Book Bazaar"}>
      <div className="row contactus " >
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1>About Us</h1>
          <p>
            Welcome to our Book Bazaar website! We are passionate about books and
            strive to provide a wide selection of books for all reading enthusiasts.
          </p>
          <p>
            Our mission is to promote literacy and a love for reading by offering a
            diverse range of genres, from fiction to non-fiction, from classics to
            contemporary bestsellers.
          </p>
          <p>
            Feel free to explore our website, browse through our collection, and
            find your next favorite book. Happy reading!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
