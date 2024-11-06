async function loadHeader() {
    const response = await fetch('header.html');
    const headerHTML = await response.text();
    document.getElementById('header-container').innerHTML = headerHTML;
}
loadHeader();



document.getElementById("videoWrapper").addEventListener("click", function() {
    const video = document.getElementById("myVideo");
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { // Firefox
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE/Edge
        video.msRequestFullscreen();
    }
});

// Function to open modal and display clicked image
function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImg.src = img.src;
}

// Close the modal when the "x" is clicked
document.querySelector(".close").onclick = function() {
    document.getElementById("imageModal").style.display = "none";
};

// Close the modal when clicking outside the image
document.getElementById("imageModal").onclick = function(event) {
    if (event.target == document.getElementById("imageModal")) {
        document.getElementById("imageModal").style.display = "none";
    }
};
