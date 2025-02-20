function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}
function checkPasswordStrength() {
    const password = document.getElementById("password").value;
    const resultDiv = document.getElementById("result");
    const resultImage = document.getElementById("result-image");

    let message = "";
    let strength = "";
    let emoji = "";
    let bgColor = "";
    let imgSrc = "";

    if (password.length < 6) {
        strength = "Weak";
        message = "Your password is too short. Try adding more characters and symbols.";
        emoji = " ❎";
        bgColor = "#FF4C4C"; 
        imgSrc = "weak.png"; 
    } else if (/^[a-zA-Z]+$/.test(password)) {
        strength = "Weak";
        message = "Consider adding numbers and special characters.";
        emoji = "⚠️";
        bgColor = "#FF4C4C";
        imgSrc = "wk.png";
    } else if (/^[a-zA-Z0-9]+$/.test(password)) {
        strength = "Moderate";
        message = "Adding special characters will make it stronger.";
        emoji = "✅";
        bgColor = "#FFD700"; // Yellow for moderate password
        imgSrc = "med.png";
    } else {
        strength = "Strong";
        message = "Great job! Your password is strong and secure.";
        emoji = "💪";
        bgColor = "#4CAF50"; // Green for strong password
        imgSrc = "strong.png";
    }

    resultDiv.innerHTML = `<h2>${emoji} ${strength} Password</h2><p>${message}</p>`;
    resultDiv.style.display = "block";
    resultDiv.style.backgroundColor = bgColor;

    // Set the image
    resultImage.src = imgSrc;
    resultImage.style.display = "block"; // Ensure image is visible
}



