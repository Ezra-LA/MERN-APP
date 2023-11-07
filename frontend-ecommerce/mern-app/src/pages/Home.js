import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import banner1 from "../images/images/main-banner-1.jpg";
import catbanner1 from "../images/images/catbanner-01.jpg";
import catbanner2 from "../images/images/catbanner-02.jpg";
import catbanner3 from "../images/images/catbanner-03.jpg";
import catbanner4 from "../images/images/catbanner-04.jpg";
import laptop from "../images/images/laptop.jpg";
import camera from "../images/images/camera.jpg";
import tv from "../images/images/tv.jpg";
import smartwatch from "../images/images/smartwatch.jpg";
import pad from "../images/images/pad.jpg";
import iphone from "../images/images/iphone.jpg";
import headphone from "../images/images/headphone.jpg";
import acc from "../images/images/acc.jpg";
import speakers from "../images/images/speaker.jpg";
import homeapp from "../images/images/homeapp.jpg";
import famous1 from "../images/images/famous-1.webp";
import famous2 from "../images/images/famous-2.webp";
import famous3 from "../images/images/famous-3.webp";
import famous4 from "../images/images/famous-4.webp";
import brand1 from "../images/images/brand-01.png";
import brand2 from "../images/images/brand-02.png";
import brand3 from "../images/images/brand-03.png";
import brand4 from "../images/images/brand-04.png";
import brand5 from "../images/images/brand-05.png";
import brand6 from "../images/images/brand-06.png";
import brand7 from "../images/images/brand-07.png";
import brand8 from "../images/images/brand-08.png";
import service from "../images/images/service.png";
import service2 from "../images/images/service-02.png";
import service3 from "../images/images/service-03.png";
import service4 from "../images/images/service-04.png";
import service5 from "../images/images/service-05.png";



const Home = () => {
  return (
    <>
      {/* main banner */}
      <Container class1="home-wrapper-1 py-5">
      <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img 
                  src={banner1} 
                  className="img-fluid rounded-3" 
                  alt="main banner" />
                  <div className="main-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad Air</h5>
                    <p>From Ksh 67,500.00 or Ksh 4,500/mo.</p>
                  <Link className="button">BUY NOW</Link>
                </div> 
              </div>
            </div>  
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img 
                  src={catbanner1} 
                  className="img-fluid rounded-3" 
                  alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SALE.</h4>
                    <h5>Laptops Max</h5>
                    <p>From Ksh 135,500.00 or <br /> Ksh 27,500/mo.</p>
                </div> 
              </div>
              <div className="small-banner position-relative">
                <img 
                  src={catbanner2} 
                  className="img-fluid rounded-3" 
                  alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>15% OFF</h4>
                    <h5>Apple Watch</h5>
                    <p>Shop the latest band <br /> styles and colors.</p>
                </div> 
              </div>
              <div className="small-banner position-relative">
                <img 
                  src={catbanner3} 
                  className="img-fluid rounded-3" 
                  alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy IPad Air</h5>
                    <p>From Ksh 67,500.00 or <br /> Ksh 4,500/mo.</p>
                </div> 
              </div>
              <div className="small-banner position-relative">
                <img 
                  src={catbanner4} 
                  className="img-fluid rounded-3" 
                  alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>FREE ENGRAVING</h4>
                    <h5>Airpods Max</h5>
                    <p>High-fidelity playback & <br /> ultra-low distortion</p>
                </div> 
              </div>
              </div>
            </div>
          </div>
      </Container>
      
      {/* services */}
      <Container class1="home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div>
                  <img src={service} alt="Free Shipping"/>
                  <h6>Free Shipping</h6>
                  <p>From all orders over Ksh 10,000</p>
                </div>
                <div>
                  <img src={service2} alt="Daily Surprise Offers"/>
                  <h6>Daily Surprise Offers</h6>
                  <p>Save up to 25% off</p>
                </div>
                <div>
                  <img src={service3} alt="Support 24/7"/>
                  <h6>Support 24/7</h6>
                  <p>Shop with an expert</p>
                </div>
                <div>
                  <img src={service4} alt="v"/>
                  <h6>Affordable prices</h6>
                  <p>Get factory direct price</p>
                </div>
                <div>
                  <img src={service5} alt="Service"/>
                  <h6>Secure payments</h6>
                  <p>100% protected payments</p>
                </div>
              </div>
            </div>
          </div>
      </Container>

      {/* categories */}          
      <Container class1="home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                {/* 1 */}
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Computer & Laptops</h6>
                    <p>16 items</p>
                  </div>
                  <img src={laptop} alt="Laptop"></img>
                </div>
                {/* 2 */}
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Camera</h6>
                    <p>10 items</p>
                  </div>
                  <img src={camera} alt="Camera"></img>
                </div>
                {/* 3 */}
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>12 items</p>
                  </div>
                  <img src={tv} alt="TV"></img>
                </div>
                {/* 4 */}
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smartwatches</h6>
                    <p>13 items</p>
                  </div>
                  <img src={smartwatch} alt="SmartWatch"></img>
                </div>
                {/* 5 */}
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>5 items</p>
                  </div>
                  <img src={pad} alt="Pad"></img>
                </div>

                {/* 6 */}
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Mobiles & Tablets</h6>
                    <p>5 items</p>
                  </div>
                  <img src={iphone} alt="Phone"></img>
                </div>
                {/* 7 */}
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Headphones</h6>
                    <p>10 items</p>
                  </div>
                  <img src={headphone} alt="Headphone"></img>
                </div>
                {/* 8 */}
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Accesories</h6>
                    <p>12 items</p>
                  </div>
                  <img src={acc} alt="Accesories"></img>
                </div>
                {/* 9 */}
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Portable Speakers</h6>
                    <p>13 items</p>
                  </div>
                  <img src={speakers} alt="Speakers"></img>
                </div>
                {/* 10 */}
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Home appliances</h6>
                    <p>5 items</p>
                  </div>
                  <img src={homeapp} alt="Home Appliances"></img>
                </div>
              </div>
            </div>
          </div>
      </Container>

      {/* Featured Collection */}          
      <Container class1="featured-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
      </Container>

      {/* Famous Wrapper */}
      <Container class1="famous-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                 src={famous1}
                 className="img-fluid" 
                 alt="Famous" />
                <div className="famous-content position-absolute">
                  <h5>BIG SCREEN</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From Ksh 60,000.*</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                 src={famous2}
                 className="img-fluid" 
                 alt="Famous" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">STUDIO DISPLAY</h5>
                  <h6 className="text-dark">600 nits of brightness.</h6>
                  <p className="text-dark">27-inch 5K Retina Display</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                 src={famous3}
                 className="img-fluid" 
                 alt="Famous" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">SMARTPHONES</h5>
                  <h6 className="text-dark">Smartphone 13 Pro.</h6>
                  <p className="text-dark">Now in Green. From Ksh 150,000. Footnote*</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                 src={famous4}
                 className="img-fluid" 
                 alt="Famous" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">HOME SPEAKERS</h5>
                  <h6 className="text-dark">Room-filling sound.</h6>
                  <p className="text-dark">From Ksh 105,000.*</p>
                </div>
              </div>
            </div>
          </div>
      </Container>

      
      {/* Special products */}
      <Container class1="special-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
      </Container>


      {/* Popular products */}
      <Container class1="popular-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
      </Container>            


      {/* marquee wrapper */}
      <Container class1="marquee-wrapper py-5">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src={brand1} alt="brand-1"/>
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand2} alt="brand-2"/>
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand3} alt="brand-3"/>
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand4} alt="brand-4"/>
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand5} alt="brand-5"/>
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand6} alt="brand-6"/>
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand7} alt="brand-7"/>
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand8} alt="brand-8"/>
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
      </Container>              
    </>
  );
};

export default Home;