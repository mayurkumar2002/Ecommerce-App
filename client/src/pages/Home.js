import React from 'react'
import Layout from '../components/Layout/Layout'
import Carousel from '../components/Layout/Carousel'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product/`);
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Layout title={'Harvest Haven - Shop now'}>
      <Carousel />
       <h3 className="text-center mt-2">Top Products🔥</h3>
      <div className="my-4">
        <Slider {...settings} className="mx-auto">
          {products.map((p) => (
            <div className="col" key={p._id}>
              {/* Product Card */}
              {/* <Link to={`/product/${p.slug}`} style={{ textDecoration: 'none' }}> */}
                <div className="card custom-card mb-3" style={{ width: '350px', height: '400px' }}>
                  <img src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} style={{ width: '100%', height: '70%' }} />
                  <div className="card-body" style={{ height: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      {/* <h5 className="card-title" style={{ color: 'black' }}>{p.name}</h5> */}
                        <div style={{display: 'flex', flexDirection: 'row',justifyContent: 'space-between'}}>
                            <h5 className="card-title">{p.name}</h5>
                            <h5 className="card-title card-price" style={{color: 'green',fontWeight: 'bold'}}>
                                ₹ {p.price}.00
                            </h5>
                        </div>
                      <p className="card-text" style={{ color: 'black' }}>{p.description.substring(0, 80)}...</p>
                      {/* <p className="card-text" style={{ color: 'black' }}> ₹ {p.price}</p> */}
                    </div>
                    {/* <button className="btn btn-sm btn-secondary" style={{ width: '100%', transition: 'transform 0.3s', transform: 'scale(1)' }} onClick={() => addtocart(p)}>
                                <span role="img" aria-label="cart">🛒</span> Add to Cart
                            </button> */}
                  </div>
                </div>
              {/* </Link> */}
            </div>
          ))}
        </Slider>
      </div>
    </Layout>
  )
}

export default Home