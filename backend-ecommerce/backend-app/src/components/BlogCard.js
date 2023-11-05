import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../images/images/blog-1.jpg";

const BlogCard = () => {
  return (
        <div className="blog-card">
            <div className="card-image">
                <img src={blog1} className="img-fluid w-100" alt="Blog Picture"/>
            </div>
            <div className="blog-content">
                <p className="date">21 October 2023</p>
                <h5 className="title">A beautiful sunday morning experience</h5>
                <p className="desc">You can check our amazing deals and products for free</p>
                <Link to="/blog/:id" className="button">Read More</Link>
          </div>
        </div>
  );
};

export default BlogCard;