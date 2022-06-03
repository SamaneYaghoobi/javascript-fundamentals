// document.querySelector(".message").textContent = "I changed it";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".guess").value = 15;

// const inputValue = document.querySelector(".guess").value;
// console.log("inputValue:", inputValue);

const myAge = 26;

document.querySelector(".check").addEventListener("click", function () {
  const guessedNumber = Number(document.querySelector(".guess").value);

  if (!guessedNumber) {
    document.querySelector(".message").textContent = "No number!";
  } else if (guessedNumber < myAge) {
    document.querySelector(".message").textContent =
      "You guess less than my age";
  } else if (guessedNumber > myAge) {
    document.querySelector(".message").textContent =
      "You guess more than my age";
  } else if (guessedNumber === myAge) {
    document.querySelector(".message").textContent = "You win!";
    document.querySelector("body").style.backgroundColor = "#60b347";
  }
});
