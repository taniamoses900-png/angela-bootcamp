DROP TABLE IF EXISTS books;

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  isbn VARCHAR(20) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  notes TEXT NOT NULL,
  date_read DATE DEFAULT CURRENT_DATE
);

INSERT INTO books (isbn, title, author, rating, notes) VALUES 
('034094501X', 'The Vampire Diaries: The Awakening', 'L.J. Smith', 4, 'Classic vampire drama. Love the Salvatore brothers!'),
('0142410314', 'Charlie and the Chocolate Factory', 'Roald Dahl', 5, 'Willy Wonka is such an eccentric character. Golden tickets, Oompa Loompas, amazing nostalgia.'),
('1127506269', 'Weak Hero (Vol. 1)', 'Seopass & Razen', 5, 'Gray Yeon is brilliant. Amazing action sequences and tactical fight intelligence.');
