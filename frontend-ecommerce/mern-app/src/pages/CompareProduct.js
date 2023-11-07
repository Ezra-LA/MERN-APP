import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from "../components/Color";
import Container from "../components/Container";
import tab from "../images/images/tab.jpg";
import cross from "../images/images/cross.svg";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Products"}/>
      <BreadCrumb title="Compare Products"/>
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img
                         src={cross} 
                         alt="Cross" 
                         className="position-absolute cross img-fluid" />
                        <div className="product-card-image">
                            <img
                             src={tab} 
                             alt="Tab" 
                             className="product-card-img" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title">
                                Honor T1 2GB RAM 64 GB ROM 10 inch With Wi-Fi+3G Tablet
                            </h5>
                            <h6 className="price mb-3 mt-3">Ksh 15,000</h6>

                            <div>
                                <div className="product-detail">
                                    <h5>Brand:</h5>
                                    <p>Havels</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Type:</h5>
                                    <p>Tablet</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Availabilty:</h5>
                                    <p>In Stock</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Color:</h5>
                                    <Color />
                                </div>
                                <div className="product-detail">
                                    <h5>Size:</h5>
                                    <div className="d-flex gap-10">
                                      <p>S</p>
                                      <p>M</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img
                         src={cross} 
                         alt="Cross" 
                         className="position-absolute cross img-fluid" />
                        <div className="product-card-image">
                            <img
                             src={tab} 
                             alt="Tab" 
                             className="product-card-img" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title">
                                Honor T1 2GB RAM 64 GB ROM 10 inch With Wi-Fi+3G Tablet
                            </h5>
                            <h6 className="price mb-3 mt-3">Ksh 15,000</h6>

                            <div>
                                <div className="product-detail">
                                    <h5>Brand:</h5>
                                    <p>Havels</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Type:</h5>
                                    <p>Tablet</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Availabilty:</h5>
                                    <p>In Stock</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Color:</h5>
                                    <Color />
                                </div>
                                <div className="product-detail">
                                    <h5>Size:</h5>
                                    <div className="d-flex gap-10">
                                      <p>S</p>
                                      <p>M</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </Container>
    </>
  );
};

export default CompareProduct;