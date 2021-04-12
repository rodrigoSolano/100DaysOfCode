const button = document.querySelector("#check");
const pattern = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

button.addEventListener("click", (e) => {
      e.preventDefault();
      const email = document.querySelector(".email").value;
      const valid = document.querySelector(".valid");
      const invalid  = document.querySelector(".invalid")
      if(   pattern.test(email)  ){
            valid.classList.remove("hide")
            invalid.classList.add("hide")
      }else{
            valid.classList.add("hide");
            invalid.classList.remove("hide")
      }
});
