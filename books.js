const renderBooks = (filter) => {
  const booksWrapper = document.querySelector(".books");

  const books = getBooks();

  if (filter === "LOW_TO_HIGH") {
    books.sort((a, b) => {
      return a.originalPrice - b.originalPrice;
    });
  } else if (filter === "HIGH_TO_LOW") {
    books.sort((a, b) => {
      return b.originalPrice - a.originalPrice;
    });
  } else if (filter === "RATING") {
    books.sort((a, b) => {
      return a.rating - b.rating;
    });
  }

  const booksHtml = books
    .map((book) => {
      let star = "";
      if (book.rating == 4.5) {
        star = "-half-alt"
      }
      return `<div class="book">
    <figure class="book__img--wrapper">
      <img
        src="${book.url}"
        alt=""
        class="book__img"
      />
    </figure>
    <div class="book__title">Cracking the Coding Interview</div>
    <div class="book__ratings">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star${star}"></i>
    </div>
    <div class="book__price">
      <span class="">$${book.originalPrice}</span>
    </div>
  </div>`;
    })
    .join("");

  booksWrapper.innerHTML = booksHtml;
};

setTimeout(() => {
  renderBooks();
});

const filterBooks = (event) => {
  renderBooks(event.target.value);
};

// FAKE DATA
function getBooks() {
  return [
    {
      id: 1,
      title: "Crack the Coding Interview",
      url: "assets/crack the coding interview.png",
      originalPrice: 59.99,
      salePrice: 14.99,
      rating: 5,
    },
    {
      id: 2,
      title: "Atomic Habits",
      url: "assets/atomic habits.jpg",
      originalPrice: 47.99,
      salePrice: 12.99,
      rating: 4.5,
    },
    {
      id: 3,
      title: "Deep Work",
      url: "assets/deep work.jpeg",
      originalPrice: 39.99,
      salePrice: 9.99,
      rating: 4.5,
    },
    {
      id: 4,
      title: "The 10X Rule",
      url: "assets/book-1.jpeg",
      originalPrice: 44.99,
      salePrice: null,
      rating: 4.5,
    },
    {
      id: 5,
      title: "Be Obsessed Or Be Average",
      url: "assets/book-2.jpeg",
      originalPrice: 24.99,
      salePrice: null,
      rating: 4.5,
    },
    {
      id: 6,
      title: "Rich Dad Poor Dad",
      url: "assets/book-3.jpeg",
      originalPrice: 59.99,
      salePrice: null,
      rating: 5,
    },
    {
      id: 7,
      title: "Cashflow Quadrant",
      url: "assets/book-4.jpeg",
      originalPrice: 59.99,
      salePrice: null,
      rating: 5,
    },
    {
      id: 8,
      title: "48 Laws of Power",
      url: "assets/book-5.jpeg",
      originalPrice: 47.99,
      salePrice: null,
      rating: 5,
    },
    {
      id: 9,
      title: "The 5 Second Rule",
      url: "assets/book-6.jpeg",
      originalPrice: 29.99,
      salePrice: null,
      rating: 5,
    },
    {
      id: 10,
      title: "Your Next Five Moves",
      url: "assets/book-7.jpg",
      originalPrice: 49.99,
      salePrice: null,
      rating: 4.5,
    },
    {
      id: 11,
      title: "Mastery",
      url: "assets/book-8.jpeg",
      originalPrice: 39.99,
      salePrice: null,
      rating: 4.5,
    },
  ];
}
