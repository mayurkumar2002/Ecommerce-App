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
            Harvest Haven is your premier destination for connecting farmers with consumers seeking high-quality products at reasonable rates. Our ecommerce platform is committed to providing a seamless shopping experience, ensuring you find the products you need to enhance your lifestyle.
            <br />
            <br />
            At Harvest Haven, we prioritize dependability, offering a curated selection of reliable products that you can trust. Whether you're searching for everyday essentials or unique finds, our platform has you covered.
            <br />
            <br />
            Our mission is simple: to empower farmers by providing them with a platform to showcase and sell their products directly to consumers. We understand the importance of supporting local agriculture and are committed to helping farmers reach a wider audience while ensuring fair prices for both producers and consumers.
            <br />
            <br />
            Our team works tirelessly to ensure your satisfaction, providing exceptional customer service every step of the way. Whether you have a question about a product or need assistance with your order, we're here to help.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;