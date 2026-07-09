import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "book_notes",
  password: "", 
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const sortBy = req.query.sort || "date_read"; 
  
  try {
    const result = await db.query(`SELECT * FROM books ORDER BY ${sortBy} DESC`);
    const books = result.rows;

    res.render("index.ejs", { 
      books: books, 
      currentSort: sortBy 
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred connecting to the database.");
  }
});

app.listen(port, () => {
  console.log(`Server successfully running on http://localhost:${port}`);
});
