// const title = document.getElementById("title");
// const subTitle = document.getElementsByClassName("sub-title");
// const para = document.getElementsByTagName("p");
// const para = document.querySelectorAll("p");
// const para = document.querySelector("#title");
// const para = document.querySelectorAll(".sub-title");
// console.log(para);
// const title = document.querySelector("#title");
// title.style.backgroundColor = "red";
// title.style.fontSize = "200px";
// title.style.fontWeight = "900";
const img = document.querySelector("img");
img.src =
  "https://images.pexels.com/photos/28948751/pexels-photo-28948751/free-photo-of-close-up-of-stunning-orange-jellyfish-in-motion.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load";
// const para = document.querySelector("p");
// para.textContent = "jhbhjbj";
// para.innerText = "opiuyhjbmn,";
// para.textContent = "<div>876545678</div>";
const btn = document.querySelector("button");
const img = document.querySelector("img");
btn.addEventListener("click", () => {
  img.src =
    "https://images.pexels.com/photos/28948751/pexels-photo-28948751/free-photo-of-close-up-of-stunning-orange-jellyfish-in-motion.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load";
});