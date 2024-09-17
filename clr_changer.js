//selecting all button class elements
const buttons = document.querySelectorAll(".button");
// console.log(buttons);

//selecting body attribute
const body = document.querySelector("body");
// console.log(body);

//looping the htmlcollection by for each loop
buttons.forEach((button) => {
  //   console.log(button);

  //add events listners to the loops
  button.addEventListener("click", (e) => {
    // console.log(e);
    // console.log(e.target);
    //implementing conditions
    if (e.target.id === "Gray") {
      body.style.backgroundColor = "gray";
    } else if (e.target.id === "Yellow") {
      body.style.backgroundColor = "yellow";
    } else if (e.target.id === "Pink") {
      body.style.backgroundColor = "pink";
    } else if (e.target.id === "Red") {
      body.style.backgroundColor = "red";
    }
  });
});
