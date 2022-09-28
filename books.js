let books

const renderBooks = async (filter) => {
  const booksWrapper = document.querySelector(".books");

  booksWrapper.classList += " .books_loading"

  if (!books) {
    books = await getBooks();
  } 

  booksWrapper.classList.remove("books__loading")

  if (filter === "LOW_TO_HIGH") {
    books.sort((a, b) => {
      let aPrice = 0;
      let bPrice = 0; 

      if (a.salePrice === null) {
        aPrice = a.originalPrice
      } else {
        aPrice = a.salePrice
      }

      if (b.salePrice === null) {
        bPrice = b.originalPrice
      } else {
        bPrice = b.salePrice
      }

      return aPrice - bPrice;
    });
  } else if (filter === "HIGH_TO_LOW") {
    books.sort((a, b) => {
      let aPrice = 0;
      let bPrice = 0; 

      if (a.salePrice === null) {
        aPrice = a.originalPrice
      } else {
        aPrice = a.salePrice
      }

      if (b.salePrice === null) {
        bPrice = b.originalPrice
      } else {
        bPrice = b.salePrice
      }

      return bPrice - aPrice;
    });
  } else if (filter === "RATING") {
    books.sort((a, b) => {
      return a.rating - b.rating;
    });
  }

  const booksHtml = books
    .map((book) => {
      const stars = getStars(book.rating);
      const price = getPrice(book.salePrice, book.originalPrice);

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
      ${stars}
    </div>
    <div class="book__price">
      ${price}
    </div>
  </div>`;
    })
    .join("");

  booksWrapper.innerHTML = booksHtml;
};

const getStars = (rating) => {
  let stars = "";
  for (let i = 0; i < Math.floor(rating); i++) {
    stars += "<i class='fas fa-star'></i>";
  }

  if (!Number.isInteger(rating)) {
    stars += "<i class='fas fa-star-half-alt'></i>";
  }
  return stars;
};

const getPrice = (salePrice, originalPrice) => {
  if (!salePrice) {
    return `<span class="">$${originalPrice}</span>` 
  } 
  return `<span class="book__price--normal">$${originalPrice}</span>
    <span>$${salePrice}</span>`
}

setTimeout(() => {
  renderBooks();
});

const filterBooks = (event) => {
  renderBooks(event.target.value);
};

// FAKE DATA
function getBooks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
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
          title: "Can't Hurt Me",
          url: "assets/david goggins.jpeg",
          originalPrice: 64.99,
          salePrice: 17.99,
          rating: 5,
        },
        {
          id: 5,
          title: "The 10X Rule",
          url: "assets/book-1.jpeg",
          originalPrice: 44.99,
          salePrice: null,
          rating: 4.5,
        },
        {
          id: 6,
          title: "Be Obsessed Or Be Average",
          url: "assets/book-2.jpeg",
          originalPrice: 24.99,
          salePrice: null,
          rating: 4.5,
        },
        {
          id: 7,
          title: "Rich Dad Poor Dad",
          url: "assets/book-3.jpeg",
          originalPrice: 59.99,
          salePrice: null,
          rating: 5,
        },
        {
          id: 8,
          title: "Cashflow Quadrant",
          url: "assets/book-4.jpeg",
          originalPrice: 59.99,
          salePrice: null,
          rating: 5,
        },
        {
          id: 9,
          title: "48 Laws of Power",
          url: "assets/book-5.jpeg",
          originalPrice: 47.99,
          salePrice: null,
          rating: 5,
        },
        {
          id: 10,
          title: "The 5 Second Rule",
          url: "assets/book-6.jpeg",
          originalPrice: 29.99,
          salePrice: null,
          rating: 5,
        },
        {
          id: 11,
          title: "Your Next Five Moves",
          url: "assets/book-7.jpg",
          originalPrice: 49.99,
          salePrice: null,
          rating: 4.5,
        },
        {
          id: 12,
          title: "Mastery",
          url: "assets/book-8.jpeg",
          originalPrice: 39.99,
          salePrice: null,
          rating: 4.5,
        },
      ])
    }, 1000)
  })
}
