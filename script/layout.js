// Donnot change or delete this file
document.addEventListener("DOMContentLoaded", function () {
  fetch("includes/layout.html")
    .then(response => response.text())
    .then(data => {
      // Insert the base content at the beginning of the body
      document.body.insertAdjacentHTML('afterbegin', data);
      document.head.innerHTML = document.querySelector('#head').innerHTML;
      let headElement = document.querySelector('#head');
      if (headElement) {
        headElement.parentNode.removeChild(headElement);
      }
      // Fetch the header.html content
      fetch("includes/header.html")
        .then(response => response.text())
        .then(data => {
          // Inject the header content into the header-container element
          document.getElementById("header-container").innerHTML = data;
        })
        .catch(error => console.error("Error fetching header.html:", error));

      // Fetch the footer.html content
      fetch("includes/footer.html")
        .then(response => response.text())
        .then(data => {
          // Inject the footer content into the footer-container element
          document.body.insertAdjacentHTML('beforeend', data);
        })
        .catch(error => console.error("Error fetching footer.html:", error));
      document.body.classList.add('application-wrap');
    })
    .catch(error => console.error("Error fetching base.html:", error));
});
