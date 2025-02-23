function changeTshirtImage(thumbnail, description, size, price) {
  document.getElementById("main-img").src = thumbnail.src;
  document.getElementById("description").textContent = description;
  document.getElementById("size").textContent = "Size: " + size;
  document.getElementById("price").textContent = "Price: €" + price;
}

function changeHoodieImage(thumbnail, description, size, price) {
  document.getElementById("hoodie-main-img").src = thumbnail.src;
  document.getElementById("hoodie-description").textContent = description;
  document.getElementById("hoodie-size").textContent = "Size: " + size;
  document.getElementById("hoodie-price").textContent = "Price: €" + price;
}

document.getElementById("description").style.fontSize = "x-large";
document.getElementById("size").style.fontSize = "medium";
document.getElementById("price").style.fontSize = "medium";

document.getElementById("hoodie-description").style.fontSize = "x-large";
document.getElementById("hoodie-size").style.fontSize = "medium";
document.getElementById("hoodie-price").style.fontSize = "medium";

document.getElementById("description").style.fontWeight = "bold";
document.getElementById("size").style.fontWeight = "normal";
document.getElementById("price").style.fontWeight = "normal";

document.getElementById("hoodie-description").style.fontWeight = "bold";
document.getElementById("hoodie-size").style.fontWeight = "normal";
document.getElementById("hoodie-price").style.fontWeight = "nromal";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let formMessage = document.getElementById("form-message");

    if (name === "" || email === "" || message === "") {
      formMessage.style.color = "red";
      formMessage.textContent = "Please fill in all fields!";
    } else {
      formMessage.style.color = "green";
      formMessage.textContent = "Message sent successfully!";

      // Simulate form reset
      setTimeout(() => {
        document.getElementById("contactForm").reset();
        formMessage.textContent = "";
      }, 3000);
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".collapse");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
