const express = require("express");
const router = express.Router();
const Post = require("../models/Post");


// GETS ALL THE POSTS
router.get("/", async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts)
    }catch(err){
        res.json({message: err})
    }
    
});

//SUBMIT A POST
router.post("/", async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    try {
        const savedPost = await post.save();
        res.status(200).json(savedPost)
    }catch(err){
        res.json({message: err})
    }

})

//SPECIFIC POST
router.get("/:postId", async (req, res) => {
    try{
        const post = await Post.findById(req.params.postId);
         res.json(post)
    }catch(err){
        res.json({message: err})
    }
})

//UPDATE POST
router.patch("/:postId", async (req, res) => {
    try{
    const updatedPost = await Post.updateOne({_id: req.params.postId},
        {$set: {
            title: req.body.title
        }})
        res.json(updatedPost)
    }catch(err){
        res.json({message: err})
    }
})


module.exports = router;