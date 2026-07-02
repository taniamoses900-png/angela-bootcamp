import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


let posts = [
  {
    id: "1",
    title: "Welcome to My Blog!",
    content: "This is a live placeholder post showing your database array and EJS engine loop work perfectly."
  }
];


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.render("index.ejs", { posts: posts });
});


app.get("/create", (req, res) => {
  res.render("create.ejs");
});


app.post("/create", (req, res) => {
  const newPost = {
    id: Date.now().toString(),
    title: req.body.title,
    content: req.body.content
  };
  posts.push(newPost);
  res.redirect("/");
});


app.get("/edit/:id", (req, res) => {
  const foundPost = posts.find(post => post.id === req.params.id);
  if (foundPost) {
    res.render("edit.ejs", { post: foundPost });
  } else {
    res.status(404).send("Post not found");
  }
});


app.post("/edit/:id", (req, res) => {
  const foundPost = posts.find(post => post.id === req.params.id);
  if (foundPost) {
    foundPost.title = req.body.title;
    foundPost.content = req.body.content;
    res.redirect("/");
  } else {
    res.status(404).send("Post not found");
  }
});


app.post("/delete/:id", (req, res) => {
  posts = posts.filter(post => post.id !== req.params.id);
  res.redirect("/");
});


app.listen(port, () => {
  console.log(`Blog server is up and listening live on port ${port}`);
});
