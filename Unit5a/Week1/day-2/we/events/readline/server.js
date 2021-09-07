const readline = require("readline");

const readline1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline1.question("WHo is your best friend \n", (name)=> {
  if (name === "Shubham") {
    console.log("ThankYou");
  } else {
    console.log("Hate you ");
  }
  readline1.close();
});

readline1.on("close", () => {
  console.log("Bye Bye");
});
