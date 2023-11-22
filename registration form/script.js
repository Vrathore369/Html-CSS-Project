const wrapper = document.querySelector(".wrapper");
singupHeader =document.querySelector(".sinup header");
loginHeader =document.querySelector(".login header");

loginHeader.addEventListener("click", () => {
    wrapper.classList.add("active");
  });
  signupHeader.addEventListener("click", () => {
    wrapper.classList.remove("active");
  });