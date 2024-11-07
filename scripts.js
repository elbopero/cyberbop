async function loadHeader() {
    const response = await fetch('header.html');
    const headerHTML = await response.text();
    document.getElementById('header-container').innerHTML = headerHTML;
}
loadHeader();


const isHydraPage = document.querySelector("#video-wrapper") ? true:false;

if(isHydraPage) {
    document.getElementById("video-wrapper").addEventListener("click", function() {
        const video = document.getElementById("my-video");
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
}

// Function to open modal and display clicked image
function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImg.src = img.src;
}

const isPictureClosingPage = document.querySelector("#imageModal") ? true:false;

    if (isPictureClosingPage) {
        document.querySelector(".close").onclick = function() {
        document.getElementById("imageModal").style.display = "none";
    };
}
// Close the modal when the "x" is clicked

const isOutsideClickPage = document.getElementById("imageModal") ? true:false;

if (isOutsideClickPage) {
    document.getElementById("imageModal").onclick = function(event) {
        if (event.target == document.getElementById("imageModal")) {
            document.getElementById("imageModal").style.display = "none";
        }
    };
}
// Close the modal when clicking outside the image

