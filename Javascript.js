let pos = 30; // Initial position of the h1 element
let direction = 1; // Moving direction: 1 (right), -1 (left)
let speed = 3 // Speed of movement in pixels

function moveH1() {
    const h1Element = document.querySelector('h1');
    const screenWidth = window.innerWidth;
    const h1Width = h1Element.offsetWidth;

    // Update the position based on the current direction and speed
    pos += direction * speed;

    // If the h1 reaches the right or left edge, reverse the direction
    if (pos + h1Width >= screenWidth || pos <= 0) {
        direction *= -1;
    }

    // Apply the new position to the h1 element
    h1Element.style.left = pos + 'px';

    // Call the function continuously to animate the movement
    requestAnimationFrame(moveH1);
}

// Start the movement when the page loads
window.onload = moveH1;

function validateForm() {
    // Get form elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const interest = document.getElementById('interest');
    const message = document.getElementById('message');

    // Error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const interestError = document.getElementById('interestError');
    const messageError = document.getElementById('messageError');

    let valid = true;

    // Name validation
    if (name.value.trim() === "") {
        nameError.textContent = "Name is required";
        nameError.style.display = "block";
        valid = false;
    } else {
        nameError.style.display = "none";
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Valid email is required";
        emailError.style.display = "block";
        valid = false;
    } else {
        emailError.style.display = "none";
    }

    // Phone validation
    const phonePattern = /^\d{10}$/; // 10-digit phone number
    if (!phonePattern.test(phone.value.trim())) {
        phoneError.textContent = "Valid 10-digit phone number is required";
        phoneError.style.display = "block";
        valid = false;
    } else {
        phoneError.style.display = "none";
    }

    // Category validation
    if (interest.value === "") {
        interestError.textContent = "Please select a interest";
        interestError.style.display = "block";
        valid = false;
    } else {
        interestError.style.display = "none";
    }

    // Additional information validation
    if (message.value.trim() === "") {
        messageError.textContent = "Additional information is required";
        messageError.style.display = "block";
        valid = false;
    } else {
        messageError.style.display = "none";
    }

    // Return whether the form is valid
    return valid;
}

const button = document.querySelectorAll('.button-card button')

const video = document.querySelector('.video-player')
button.forEach((element) => {
    element.addEventListener('click', function (e) {
        const url = e.target.getAttribute('data-url') 
        video.setAttribute('src', url)
        video.play()
    })
})