import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h2>Privacy Policy</h2>
          <p>
            At Book Bazaar, we value your privacy and are committed to protecting
            your personal information. This Privacy Policy outlines how we collect,
            use, and safeguard the information you provide to us when using our
            website.
          </p>
          <p>
            <strong>Data Collection:</strong> We may collect personal information,
            such as your name, email address, and browsing activity when you
            interact with our website.
          </p>
          <p>
            <strong>Data Usage:</strong> The information we collect is used to
            improve our website, provide personalized experiences, respond to your
            inquiries, and deliver relevant content and promotions.
          </p>
          {/* <p>
            <strong>Data Sharing:</strong> We do not share your personal
            information with third parties unless required by law or with your
            explicit consent.
          </p>
          <p>
            <strong>Data Security:</strong> We implement various security measures
            to protect your information from unauthorized access, misuse, or
            disclosure.
          </p>
          <p>
            For more detailed information, please review our full Privacy Policy
            document.
          </p> */}
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
