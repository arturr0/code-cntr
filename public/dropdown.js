$(document).ready(function () {
  const elementToHide = document.querySelector(".dropdown-content");
  const services = document.querySelector(".services");
  const service = document.querySelector(".service");
  const dropdownContent = document.querySelector(".dropdown-content");
  let viewed = false;
  let chosen = false;
  dropdownContent.classList.add("hidden");
  $(".dropdown-content").css("display", "block");
  //elementToHide.classList.add("hidden");
  // Add an event listener for the 'transitionend' event
  dropdownContent.addEventListener("transitionend", (event) => {
    const computedStyle = window.getComputedStyle(dropdownContent);
    const maxHeight = computedStyle.getPropertyValue("max-height");

    if (event.propertyName === "max-height" && maxHeight !== "0px") {
      viewed = true;
      console.log("Dropdown content is viewed");
    } else {
      viewed = false;
      console.log("Dropdown content is hidden");
    }
  });

  let isDropdownVisible = false;

  // Event listener for clicking the "Services" link
  
services.addEventListener("touchstart", function (event) {
    event.stopPropagation(); // Prevent this click event from propagating to the document
    services.style.backgroundColor = "#555";
    if (isDropdownVisible) {
      // Hide the dropdown
      dropdownContent.classList.add("hidden");
      services.style.backgroundColor = "#333";
      //$(".dropdown-content").css("display", "none");
      isDropdownVisible = false;
      console.log(isDropdownVisible);
    } else {
      //$(".dropdown-content").css("display", "block");
      dropdownContent.classList.remove("hidden");
      isDropdownVisible = true;
      console.log(isDropdownVisible);
    }
  });
   const serviceElements = document.querySelectorAll(".service");

  // Add event listeners to all "service" elements
  serviceElements.forEach(function (service) {
    service.addEventListener("touchstart", function (event) {
      service.style.backgroundColor = "#555";
    });
  });
  // Event listener to hide the dropdown when clicking anywhere on the document
  document.addEventListener("touchstart", function () {
    if (isDropdownVisible) {
      dropdownContent.classList.add("hidden");
      services.style.backgroundColor = "#333";
      isDropdownVisible = false;
      console.log(isDropdownVisible);
    }
  });
  $.get('/visitCount', function (data) {
    $('#visitCount').text(`Number of visits: ${data.visitCount}`);
});
});
function hidemenu() {
  $(".dropdown-content").css("display", "none");
}
window.onpopstate = function (event) {
  // Check if the dropdown should be hidden based on your logic
  console.log("pop");
};
