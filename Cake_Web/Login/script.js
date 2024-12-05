// Khai báo biến
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const loginForm = document.getElementById('loginForm');
const signUpForm = document.getElementById('signUpForm'); // Form đăng ký
const usernameInput = document.getElementById('usernameInput'); // Đăng nhập
const passwordInput = document.getElementById('passwordInput'); // Đăng nhập
const errorElement = document.getElementById('error');

// Chuyển đổi giữa form Đăng Nhập và Đăng Ký
signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

// Xử lý form Đăng ký
signUpForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Ngăn không cho reload trang

    const email = document.getElementById('signupEmail').value.trim(); // Lấy email từ form Đăng ký
    const password = document.getElementById('signupPassword').value.trim(); // Lấy mật khẩu từ form Đăng ký

    if (email && password) {
        // Lưu tài khoản vào localStorage
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);

        alert('Đăng ký thành công! Hãy đăng nhập.');
        container.classList.remove('right-panel-active'); // Chuyển về giao diện đăng nhập
    } else {
        alert('Vui lòng nhập đầy đủ thông tin!');
    }
});

// Xử lý form Đăng nhập
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Ngăn không cho reload trang

    const username = usernameInput.value.trim(); // Lấy email từ form Đăng nhập
    const password = passwordInput.value.trim(); // Lấy mật khẩu từ form Đăng nhập

    // Lấy thông tin từ localStorage
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (username === storedEmail && password === storedPassword) {
        alert('Đăng nhập thành công!');
        // localStorage.setItem("isLoggedIn", "true");
        window.location.href = '../index.html'; // Chuyển đến trang chính
    } else {
        errorElement.textContent = "Email hoặc mật khẩu không chính xác!";
    }
});
