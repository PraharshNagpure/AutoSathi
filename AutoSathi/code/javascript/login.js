// Toggle between login and registration
const section = document.getElementById("section");
const heading = document.getElementById("heading");
const message = document.getElementById("message");
const btn = document.getElementById("toggleBtn");

if (btn) {
    btn.addEventListener("click", () => {
        section.classList.toggle("active");

        if (section.classList.contains("active")) {
            heading.textContent = "Hello, Friend!";
            message.textContent = "Register with your personal details to use all site features";
            btn.textContent = "Sign Up";
        } else {
            heading.textContent = "Welcome Back!";
            message.textContent = "Enter your personal details to access all site features";
            btn.textContent = "Sign In";

        }
    });
}

// Login Function
function login() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    // Retrieve user data from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user exists
    let user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("currentUser", JSON.stringify(user)); // Save user session
        window.location.href = "index.html"; // Redirect to home page
    } else {
        alert("Invalid credentials. Try again.");
    }
}

function register(event) {
    event.preventDefault(); // Prevent form from refreshing page

    let name = document.getElementById("reg-name").value.trim();
    let email = document.getElementById("reg-email").value.trim();
    let password = document.getElementById("reg-password").value.trim();

    if (!name || !email || !password) {
        alert("All fields are required.");
        return;
    }

    // Get existing users
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email is already registered
    if (users.some(user => user.email === email)) {
        alert("Email already registered. Please log in.");
        return;
    }

    // Save new user
    let newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! Please log in.");
    window.location.href = "login.html"; // Ensure this file exists
}


document.addEventListener("DOMContentLoaded", function () {
    let signupButton = document.getElementById("signup-button");

    if (signupButton) {
        signupButton.onclick = register;
    } else {
        console.error("Signup button not found!");
    }
});
