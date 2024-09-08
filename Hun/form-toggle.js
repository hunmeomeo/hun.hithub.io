document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.wrapper');
    const registerForm = document.getElementById('register');
    const forgotPasswordForm = document.getElementById('forgot-password');
    const backButtons = document.querySelectorAll('.back-btn');

    // Chuyển đến form Đăng ký
    document.querySelector('a[href="#register"]').addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    });

    // Chuyển đến form Quên mật khẩu
    document.querySelector('a[href="#forgot-password"]').addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.add('hidden');
        forgotPasswordForm.classList.remove('hidden');
    });

    // Quay lại form đăng nhập
    backButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            registerForm.classList.add('hidden');
            forgotPasswordForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
        });
    });
});
