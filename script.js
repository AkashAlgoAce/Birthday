// Array of images
const images = [
    { url: "./images/img 1.jpg", caption: "Chill and Cheerful🌸" },
    { url: "./images/img 2.jpg", caption: "Beautiful ✨" },
    { url: "./images/img 3.jpg", caption: "Keep being you🙌" },
    { url: "./images/img 4.jpg", caption: "Laughter and Joy😊" },
    { url: "./images/img 5.jpg", caption: "You're one of a kind💯" },
    { url: "./images/img 6.jpg", caption: "Always full of life💫" },
    { url: "./images/img 7.jpg", caption: "Good Vibes🔅" },
    { url: "./images/img 8.jpg", caption: "Cherished Moments ❤️" },
];

// Render the images in the grid
function renderImages() {
    const imageGrid = document.getElementById("imageGrid");
    images.forEach((image) => {
        const card = document.createElement("div");
        card.classList.add("image-card");
        card.innerHTML = `
            <img src="${image.url}" alt="${image.caption}">
            <p>${image.caption}</p>
        `;
        imageGrid.appendChild(card);
    });
}

// Show hidden message and confetti on button click
document.getElementById("celebrateBtn").addEventListener("click", () => {
    // Display the hidden message
    document.getElementById("hiddenMessage").style.display = "block";

    // Create confetti effect
    const confettiContainer = document.getElementById("confetti");
    confettiContainer.style.display = "block";

    // Generate random confetti pieces
    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement("div");
        confettiPiece.classList.add("confetti-piece");
        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.animationDelay = `${Math.random() * 2}s`;
        confettiPiece.style.backgroundColor = getRandomColor();
        confettiContainer.appendChild(confettiPiece);
    }

    // Disable the button to prevent multiple celebrations
    const button = document.getElementById("celebrateBtn");
    button.disabled = false;
    button.textContent = "Celebrating... 🎉";
});

// Function to generate random colors for confetti
function getRandomColor() {
    const colors = ["#ff4081", "#f35d53", "#8ac926", "#00bcd4", "#ffc107"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Load images on page load
window.onload = renderImages;
