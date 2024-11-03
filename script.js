// script.js

// Add mousemove event for interactive background effect
document.body.addEventListener('mousemove', (e) => {
    const x = e.pageX;
    const y = e.pageY;
    document.body.style.background = `radial-gradient(circle at ${x}px ${y}px, #e66465, #9198e5)`;
});

function generateCard() {
    const name = document.getElementById("name").value || "Friend";
    const bgColor = document.getElementById("bgColor").value;
    const occasion = document.getElementById("occasion").value;
    const customMessage = document.getElementById("customMessage");

    // Update card content
    document.getElementById("recipientName").textContent = `To: ${name}`;
    document.getElementById("greetingText").textContent = occasion;
    customMessage.textContent = "Wishing you all the best on this special day!";

    // Update card text area background color
    document.getElementById("greetingCard").style.backgroundColor = bgColor;

    // Handle uploaded background image
    const bgImageInput = document.getElementById("bgImage");
    const cardImage = document.getElementById("cardImage");

    if (bgImageInput.files && bgImageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            cardImage.style.backgroundImage = `url(${e.target.result})`;
        };
        reader.readAsDataURL(bgImageInput.files[0]);
    }
}

// Function to download the card as an image
function downloadCard() {
    const card = document.getElementById("greetingCard");
    html2canvas(card).then(canvas => {
        const link = document.createElement("a");
        link.download = "greeting-card.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}
