const btns = document.getElementsByTagName("button");
const value = document.getElementById("value");
let count = 0;
// console.log(btns);
for (let i = 0; i < btns.length; i++) {
  //   console.log(btns[i]);
  btns[i].addEventListener("click", () => {
    if (btns[i].classList.contains("add")) {
      count++;
      value.textContent = count;
    } else if (btns[i].classList.contains("reset")) {
      count = 0;
      value.textContent = count;
    } else if (btns[i].classList.contains("subtract")) {
      count--;
      value.textContent = count;
    }
  });
}