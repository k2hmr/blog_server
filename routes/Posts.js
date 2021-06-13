const express = require("express");
const router = express.Router();
const { Posts } = require("../models");

router.get("/", async (req, res) => {
  const listOfPosts = await Posts.findAll();
  res.json(listOfPosts);
});

router.post("/", async (req, res) => {
  const post = req.body;
  // post.username = req.user.username;
  // //post.UserId = req.user.id;
  // post.title = req.body.title;
  // post.text = req.body.postText;

  //console.log(post.username + post.title + post.text);
  await Posts.create(post);
  res.json(post);
});

module.exports = router;