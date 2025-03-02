fetch('navbar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('navbar-container').innerHTML = data;
});
fetch('footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer-container').innerHTML = data;
});
fetch('main.html')
.then(response => response.text())
.then(data => {
    document.getElementById('main-container').innerHTML = data;
});
fetch('newsletter.html')
.then(response => response.text())
.then(data => {
    document.getElementById('newsletter-container').innerHTML = data;
});


function logout(){
    document.getElementById("logoutbtn").addEventListener("click", function () {
        // Redirect to login page
        window.location.href = "login.html"; 
    });
}

