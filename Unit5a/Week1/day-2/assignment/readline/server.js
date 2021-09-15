const readline = require("readline");

const booksQues = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const books = [
  {
    id: 1,
    name: "React",
  },
  {
    id: 2,
    name: "Node",
  },
  {
    id: 3,
    name: "Redux",
  },
  {
    id: 4,
    name: "Html",
  },
  {
    id: 5,
    name: "Css",
  },
  {
    id: 6,
    name: "Express",
  },
];
const booksFun = () => {
  booksQues.question(
    "Press 1 - Show all books \n Press 2 - Add a new book \n Press 3 - Quit \n",
    (ans) => {
      if (ans == 1) {
        console.log("Selected 1");
        books.map((el) => {
          console.log(`${el.id}.${el.name}`);
        });
      
        booksFun();
      }
      else if (ans == 2) {
        console.log("selected 2");
        booksQues.question("Please Enter Book Name?\n", (ans) => {
          const payload = {
            id: books.length + 1,
            name: ans,
          };

          books.push(payload);
          console.log("Book added succesfully");
          booksFun();
        });

        booksFun();
      }
      else if (ans == 3) {
        booksQues.question("Are you sure you want to quit ? Y/N \n", (ans) => {
          if (ans.toUpperCase() === "Y") {
            booksQues.close();
          } else {
            booksFun();
          }
        });
      }
      else {
        console.log(
          "You have selected an invalid entry so please press 1, 2 or 3"
        );

        booksFun();
      }
    }
  );
};
booksQues.on("close", () => {
  console.log("Bye Bye");
});
booksFun();
