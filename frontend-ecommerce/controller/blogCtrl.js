const Blog = require("../models/blogModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");
const cloudinaryUploadImg = require("../utils/cloudinary");
const fs = require("fs");


const createBlog = asyncHandler(async (req, res) => {
    try{
        const newBlog = await Blog.create(req.body);
        res.json (newBlog);
    } catch (error) {
        throw new Error(error);
    }
});

const updateBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try{
        const updateBlog = await Blog.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json (updateBlog);
    } catch (error) {
        throw new Error(error);
    }
});

const getBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try{
        const getBlog = await Blog.findById(id)
        .populate("likes")
        .populate("dislikes");
        const updateViews = await Blog.findByIdAndUpdate(
            id,
            {
                $inc:{numViews:1}
            },
                { new: true}
        );
        res.json (getBlog);
    } catch (error) {
        throw new Error(error);
    }
});

const getAllBlogs = asyncHandler(async (req, res) => {
    try{
        const getBlogs = await Blog.find();
        res.json (getBlogs);
    } catch (error) {
        throw new Error(error);
    }
});

const deleteBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try{
        const deletedBlog = await Blog.findByIdAndDelete(id);
        validateMongoDbId(id);
        res.json (deletedBlog);
    } catch (error) {
        throw new Error(error);
    }
});

const likeBlog = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { blogId } = req.body;
    
    // Find the blog which you want to be liked
    const user = await User.findById(_id);

    // Find the login user
    const loginUserId = req?.User?._id;

    //Find if the user has liked the blog
    const isLiked = blog?.isLiked;

    // Find if the user has disliked the blog
    const alreadyDisliked = user.dislikes.find(
        (id) => id.toString() === blogId.toString());
        if(alreadyDisliked) {
            let user = await User.findByIdAndUpdate(_id, {
                $pull: {dislikes: blogId },
                isDisliked:false,
            },
            { new: true}
            );
            res.json(blog);
        }
        if (isLiked) {
            const blog = await Blog.findByIdAndUpdate(blogId, {
                $pull: {likes: loginUserId },
                isLiked:false,
            },
            { new: true}
            );
            res.json(blog);
        }
        else {
            const blog = await Blog.findByIdAndUpdate(blogId, {
                $push: { likes: loginUserId },
                isLiked:true,
            },
            { new: true}
            );
            res.json(blog);
        }
});



const dislikeBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.body;
    validateMongoDbId(blogId);

    // Find the blog which you want to be liked
    const blog = await Blog.findById(blogId);

    // Find the login user
    const loginUserId = req?.User?._id;

    //Find if the user has liked the blog
    const isDisliked = blog?.isDisliked;

    // Find if the user has disliked the blog
    const alreadyLiked = blog?.likes?.find(
        (userId) => userId?.toString() === loginUserId?.toString());
        if(alreadyLiked) {
            const blog = await Blog.findByIdAndUpdate(blogId, {
                $pull: {likes: loginUserId },
                isLiked:false,
            },
            { new: true}
            );
            res.json(blog);
        }
        if (isDisliked) {
            const blog = await Blog.findByIdAndUpdate(blogId, {
                $pull: { dislikes: loginUserId },
                isDisliked:false,
            },
            { new: true}
            );
            res.json(blog);
        }
        else {
            const blog = await Blog.findByIdAndUpdate(blogId, {
                $push: { dislikes: loginUserId },
                isDisliked:true,
            },
            { new: true}
            );
            res.json(blog);
        }
});

const uploadImages = asyncHandler(async(req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const uploader = (path) => cloudinaryUploadImg(path, "images");
        const urls = [];
        const files = req.files;
        for (const file of files) {
            const { path } = file;
            const newpath = await uploader(path);
            console.log(newpath);
            urls.push(newpath);
            fs.unlinkSync(path);
        }
        const findBlog = await Blog.findByIdAndUpdate(id, {
            images: urls.map((file) => {
                return file;
            }),
        },
        {
            new: true,
        }
        );
        res.json(findBlog);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Image upload failed" });
    }
    
});

module.exports = {
     createBlog, 
     updateBlog, 
     getBlog, 
     getAllBlogs, 
     deleteBlog, 
     likeBlog, 
     dislikeBlog,
     uploadImages, 
    };