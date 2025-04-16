const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;

// Cargar los libros desde el archivo JSON
const booksPath = path.join(__dirname, "data", "books.json");
let books = [];

try {
  const booksData = fs.readFileSync(booksPath, "utf8");
  books = JSON.parse(booksData);
} catch (err) {
  console.error("Error al leer el archivo books.json:", err);
}

// Ejemplo de ruta para obtener los libros
app.get("/books/all", (req, res) => {
  res.json(books);
});

app.get("/books/first", (req, res) => {
  res.json(books[0]);
});

app.get("/books/last", (req, res) => {
  res.json(books[books.length - 1]);
});

app.get("/books/middle", (req, res) => {
  res.json(books[books.length / 2]);
});

app.get("/books/author/dante-alighieri", (req, res) => {
  const author = "Dante Alighieri";

  if (author) {
    const book = books.find((book) => book.author == author);
    if (book) {
      // si el libro existe
      res.status(200).json(book.title); // devuelve el libro con el título Harry Potter
    } else {
      // si el libro no existe
      res.status(404).json({ msj: "Libro no encontrado" }); // devuelve un mensaje de error
    }
  } else {
    // devolver todos los libros
    res.status(200).json(books); // devuelve todos los libros
  }
});

app.get("/books/country/charles-dickens", (req, res) => {
  const author = "Charles Dickens";

  if (author) {
    const book = books.find((book) => book.author == author);
    if (book) {
      // si el libro existe
      res.status(200).json(book.country); // devuelve el libro con el título Harry Potter
    } else {
      // si el libro no existe
      res.status(404).json({ msj: "Libro no encontrado" }); // devuelve un mensaje de error
    }
  } else {
    // devolver todos los libros
    res.status(200).json(books); // devuelve todos los libros
  }
});

app.get("/books/year&pages/cervantes", (req, res) => {
  const author = "Miguel de Cervantes";

  if (author) {
    const book = books.find((book) => book.author == author);
    if (book) {
      // si el libro existe
      res.status(200).json({ pages: book.pages, year: book.year }); // devuelve el libro con el título Harry Potter
    } else {
      // si el libro no existe
      res.status(404).json({ msj: "Libro no encontrado" }); // devuelve un mensaje de error
    }
  } else {
    // devolver todos los libros
    res.status(200).json(books); // devuelve todos los libros
  }
});

app.get("/books/country/count/spain", (req, res) => {
  const country = "Spain";

  let contadorPais = 0;
  if (country) {
    const book = books.find((book) =>
      book.country == country ? contadorPais++ : ""
    );
    if (book) {
      // si el libro existe
      res.status(200).json(contadorPais); // devuelve el libro con el título Harry Potter
    } else {
      // si el libro no existe
      res.status(404).json({ msj: "Libro no encontrado" }); // devuelve un mensaje de error
    }
  } else {
    // devolver todos los libros
    res.status(200).json(books); // devuelve todos los libros
  }
});

app.get("/books/country/at-least/germany", (req, res) => {
  const country = "Germany";

  let boolPais = false;
  if (country) {
    const book = books.find((book) =>
      book.country == country ? (boolPais = true) : (boolPais = false)
    );
    if (book) {
      // si el libro existe
      res.status(200).json(boolPais); // devuelve el libro con el título Harry Potter
    } else {
      // si el libro no existe
      res.status(404).json({ msj: "Libro no encontrado" }); // devuelve un mensaje de error
    }
  } else {
    // devolver todos los libros
    res.status(200).json(books); // devuelve todos los libros
  }
});

app.get("/books/pages/all-greater/200", (req, res) => {
  const pages = 200;

  let boolPaginas = true;
  if (pages) {
    const book = books.find((book) =>
      book.pages < pages ? (boolPaginas = false) : (boolPaginas = true)
    );
    if (book) {
      // si el libro existe
      res.status(200).json(boolPaginas); // devuelve el libro con el título Harry Potter
    } else {
      // si el libro no existe
      res.status(404).json({ msj: "Libro no encontrado" }); // devuelve un mensaje de error
    }
  } else {
    // devolver todos los libros
    res.status(200).json(books); // devuelve todos los libros
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
