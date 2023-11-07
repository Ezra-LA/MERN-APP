import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import prodcompare from "../images/images/prodcompare.svg";
import wish from "../images/images/wish.svg";
import tab from "../images/images/tab.jpg";
import tab1 from "../images/images/tab1.jpg";
import addcart from "../images/images/add-cart.svg";
import view from "../images/images/view.svg";

const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();

    return (
        <>
            <div className={` ${location.pathname === "/product" ? `gr-${grid}` : "col-3" } `}>
                <Link
                 to={`${
                    location.pathname == "/"
                     ? 'product/:id'
                     : location.pathname == "/product/:id"
                     ? "/product/:id" : ":id"}`} 
                 className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className="border-0 bg-transparent">
                            <img src={wish} alt="wishlist" />
                        </button>
                    </div>
                    <div className="product-image">
                        <img src={tab1} className="img-fluid" alt="Product Name" />
                        <img src={tab} className="img-fluid" alt="Product Name" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                            Kids headphones bulk 10 multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`} >
                            Hello, this is a very amazing product that you can buy for yourself, your friends, or even family. I recommend you check the different sizes and colors of the product that we have to offer.
                        </p>
                        <p className="price">Ksh 15000.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <button className="border-0 bg-transparent">
                                <img src={prodcompare} alt="compare" />
                            </button>
                            <button className="border-0 bg-transparent">
                                <img src={view} alt="view" />
                            </button>
                            <button className="border-0 bg-transparent">
                                <img src={addcart} alt="addcart" />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};

ProductCard.propTypes = {
    grid: PropTypes.number,
};

export default ProductCard;
