
    function validateInput(inputEl) {
        const value = inputEl.value;
        // nếu giá trị ô input rỗng thì hiển thị lỗi: hiện thông báo lỗi + bôi đỏ input
        if (value ===null || value === undefined || value === '' || value.length === 0 || value.trim().length ===0) {
            //hiển thị thông báo lỗi 
            inputEl.parentElement.querySelector('.error-message').classList.add('active');
            //bôi đỏ ô input
            inputEl.parentElement.classList.add('error');
            return false;
        }
        //ngược lại nếu ô input có giá trị hợp lệ
        else {
            inputEl.parentElement.querySelector('.error-message').classList.remove('active');
            inputEl.parentElement.classList.remove('error');
            return true;
        }
    }
    function validateOnInput(e) {
        validateInput(e.target);

    }
    //Xử lý khi bấm nút Đăng nhập 
    //lấy thông tin từ thẻ form
    const loginForm = document.getElementById('loginModal');
    //khi bam submit 
    // Lắng nghe sự kiện submit form
    if (loginForm){
    loginForm.addEventListener('submit', function (event) {
        // Ngăn chặn hành vi submit mặc định của form
        event.preventDefault();

    //lay ra cac input tu loginForm
            const usernameInput = loginForm.querySelector('input[name="phone"]');
            const passwordInput = loginForm.querySelector('input[name="password"]');
            const inputs = [usernameInput,passwordInput];

        let isFormValid = true ;

    //tien hanh lap qua tung input va kiem tra 
        inputs.forEach(input => {
            //goi gia tri tu validateInput de kiem tra
            const isValid = validateInput(input);
            isFormValid = isFormValid && isValid;
        });
    //kiem tra va tra ket qua voi cau lenh if - else
            if (isFormValid) {
                alert ('Đăng nhập thành công!');
            }
            else {
                alert ('Vui lòng kiểm tra lại');
            }
    })
    };
