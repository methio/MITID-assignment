window.addEventListener("DOMContentLoaded", () => {
    const colorsContainer = document.getElementById("colors-container");
    const colors = ['#AB69D5', '#AB69D5', '#3357FF', '#AB69D5', '#AB69D5', '#AB69D5', '#AB69D5', '#AB69D5', '#AB69D5', '#AB69D5'];

    colors.forEach(color => {
        colorsContainer.innerHTML += `<div class="color-box" style="background-color: ${color};"></div>`;
        console.log("added")
    });

});