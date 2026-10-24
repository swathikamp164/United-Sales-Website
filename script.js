const menuBtn = document.getElementById("menuBtn");
const navigation = document.getElementById("navigation");

menuBtn.addEventListener("click", function () {
    navigation.classList.toggle("open");
});

navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navigation.classList.remove("open");
    });
});

document.getElementById("year").textContent =
    new Date().getFullYear();

document.getElementById("enquiryForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const response = document.getElementById("response");

    response.textContent =
        "Thank you, " + name +
        "! Your demo enquiry is complete. No information was sent or stored.";

    response.style.color = "#168c7c";

    this.reset();
});