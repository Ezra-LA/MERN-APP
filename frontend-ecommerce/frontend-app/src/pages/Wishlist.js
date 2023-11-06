import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import cross from "../images/images/cross.svg";
import watch from "../images/images/watch.jpg"

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"}/>
      <BreadCrumb title="Wishlist" />
        <Container class1="wishlist-wrapper home-wrapper-2 py-5">
            <div className="row">
              <div className="col-3">
                <div className="wishlist-card w-100 position-relative">
                  <img
                    src={cross} 
                    alt="Cross" 
                    className="position-absolute cross img-fluid" />
                    <div className="wishlist-card-image">
                        <img
                         src={watch} 
                         alt="WristWatch"
                         className="img-fluid w-100"/>
                    </div>
                    <div className="py-3 px-3">
                    <h5 className="title">
                    Honor T1 2GB RAM 64 GB ROM 10 inch With Wi-Fi+3G Tablet
                    </h5>
                    <h6 className="price">
                        Ksh 15,000
                    </h6>
                    </div>
                </div>
              </div>

              <div className="col-3">
                <div className="wishlist-card w-100 position-relative">
                  <img
                    src={cross} 
                    alt="Cross" 
                    className="position-absolute cross img-fluid" />
                    <div className="wishlist-card-image">
                        <img
                         src={watch} 
                         alt="wristWatch"
                         className="img-fluid w-100"/>
                    </div>
                    <div className="py-3 px-3">
                    <h5 className="title">
                    Honor T1 2GB RAM 64 GB ROM 10 inch With Wi-Fi+3G Tablet
                    </h5>
                    <h6 className="price">
                        Ksh 15,000
                    </h6>
                    </div>
                </div>
              </div>

              <div className="col-3">
                <div className="wishlist-card w-100 position-relative">
                  <img
                    src={cross} 
                    alt="Cross" 
                    className="position-absolute cross img-fluid" />
                    <div className="wishlist-card-image">
                        <img
                         src={watch} 
                         alt="WristWatch"
                         className="img-fluid w-100"/>
                    </div>
                    <div className="py-3 px-3">
                    <h5 className="title">
                    Honor T1 2GB RAM 64 GB ROM 10 inch With Wi-Fi+3G Tablet
                    </h5>
                    <h6 className="price">
                        Ksh 15,000
                    </h6>
                    </div>
                </div>
              </div>
            </div>
        </Container>
    </>
  );
};

export default Wishlist;