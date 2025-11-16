document.querySelectorAll('.toggle-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    btn.nextElementSibling.style.display =
      btn.nextElementSibling.style.display === 'block' ? 'none' : 'block';
  });
document.querySelectorAll("[data-date]").forEach(el => {
    const today = new Date();
    el.textContent = today.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
});

let loginBtn = document.getElementById("loginBtn");
let signupBtn = document.getElementById("signupBtn");

let loginForm = document.getElementById("loginForm");
let signupForm = document.getElementById("signupForm");

let goSignup = document.getElementById("goSignup");
let goLogin = document.getElementById("goLogin");

// Switch to Signup
signupBtn.onclick = () => {
    signupBtn.classList.add("active");
    loginBtn.classList.remove("active");

    signupForm.classList.add("show");
    loginForm.classList.remove("show");
};

// Switch to Login
loginBtn.onclick = () => {
    loginBtn.classList.add("active");
    signupBtn.classList.remove("active");

    loginForm.classList.add("show");
    signupForm.classList.remove("show");
};

goSignup.onclick = () => signupBtn.click();
goLogin.onclick = () => loginBtn.click();

// Toggle Password Visibility
function togglePass(id) {
    let input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
}
<script>
function toggleMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.style.display =
        mobileMenu.style.display === "flex" ? "none" : "flex";
}
</script>
