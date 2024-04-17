import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us"}>
      <div className="row mt-2 contactus">
        <div className="col-md-6">
          <img
            src="/images/about.jpg"
            alt="contactus"
            style={{ maxWidth: "80%"}}
          />
        </div>
        <div className="col-md-5">
          <p className="text-justify mt-2">
            Welcome to our online store! At our ecommerce app, we are committed to offering you a seamless shopping experience. Our mission is to provide you with high-quality products that enhance your lifestyle, coupled with exceptional customer service.
            <br />
            <br />
            We understand the importance of dependability and strive to bring you reliable products that you can trust. Whether you're looking for everyday essentials or unique finds, we've got you covered.
            <br />
            <br />
            Our team works tirelessly to curate a selection of products that cater to your needs and preferences. We value your satisfaction above all else and are here to assist you every step of the way.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;