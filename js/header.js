/**
 * load file html và gán vào element có id tương ứng
 * @param {*} elementId
 * @param {*} filePath
 */
async function loadComponent(elementId, filePath) {
	const response = await fetch(filePath);
	const html = await response.text();
	document.getElementById(elementId).innerHTML = html;
}

// load header, footer
document.addEventListener("DOMContentLoaded", async () => {
	await loadComponent("header", "./header.html");
	await loadComponent("footer", "./footer.html");

	// do position sticky khiến overlay nổi lên trên modal => khi mở modal cần chuyển position của header về mặc định
	// cần gọi sự kiện ở đây vì lúc này thì content của header đã được load xong
	document.querySelector("#loginModal").addEventListener("show.bs.modal", function () {
		const headerElement = document.getElementById("header");
		headerElement.style.position = "static";
	});

	// khi đóng modal thì trả position của header về sticky như cũ
	document.querySelector("#loginModal").addEventListener("hide.bs.modal", function () {
		const headerElement = document.getElementById("header");
		headerElement.style.position = "sticky";
	});
});
	// create account

	document.addEventListener("DOMContentLoaded", async () => {
	await loadComponent("header", "./header.html");
	await loadComponent("footer", "./footer.html");

	dcument.querySelector("#registrationModal").addEventListener("show.bs.modal", function (){
		const headerElement = document.getElementById("header");
		headerElement.style.position = "static";
	});
	document.querySelector("#registrationModal"). addEventListener("hide.bs.modal", function (){
		const headerElement = document.getElementById("header");
		headerElement.style.position = "sticky";
	});
	});

	// take password
	document.addEventListener("DOMContentLoaded", async () => {
	await loadComponent("header", "./header.html");
	await loadComponent("footer", "./footer.html");

		dcument.querySelector("#forgetPasswordModal").addEventListener("show.bs.modal", function (){
		const headerElement = document.getElementById("header");
		headerElement.style.position = "static";
	});
	document.querySelector("#forgetPasswordModal"). addEventListener("hide.bs.modal", function (){
		const headerElement = document.getElementById("header");
		headerElement.style.position = "sticky";
	});
});



// js login

function validateInput(inputEl) {
	const value = inputEl.value;
	// nếu giá trị ô input rỗng thì hiển thị lỗi: hiện thông báo lỗi + bôi đỏ input
	if (value === null || value === undefined || value === "" || value.length === 0 || value.trim().length === 0) {
		//hiển thị thông báo lỗi
		inputEl.parentElement.querySelector(".error-message").classList.add("active");
		//bôi đỏ ô input
		inputEl.parentElement.classList.add("error");
		return false;
	}
	//ngược lại nếu ô input có giá trị hợp lệ
	else {
		inputEl.parentElement.querySelector(".error-message").classList.remove("active");
		inputEl.parentElement.classList.remove("error");
		return true;
	}
}
function validateOnInput(e) {
	validateInput(e.target);
}
//Xử lý khi bấm nút Đăng nhập
//lấy thông tin từ thẻ form
const handleLoginForm = document.getElementById("loginModal");
//khi bam submit
// Lắng nghe sự kiện submit form
if (handleLoginForm) {
	handleLoginForm.addEventListener("submit", function (event) {
		// Ngăn chặn hành vi submit mặc định của form
		event.preventDefault();

		//lay ra cac input tu loginForm
		const usernameInput = handleLoginForm.querySelector('input[name="phone"]');
		const passwordInput = loginhandleLoginFormForm.querySelector('input[name="password"]');
		const inputs = [usernameInput, passwordInput];

		let isFormValid = true;

		//tien hanh lap qua tung input va kiem tra
		inputs.forEach((input) => {
			//goi gia tri tu validateInput de kiem tra
			const isValid = validateInput(input);
			isFormValid = isFormValid && isValid;
		});
		//kiem tra va tra ket qua voi cau lenh if - else
		if (isFormValid) {
			alert("Đăng nhập thành công!");
		} else {
			alert("Vui lòng kiểm tra lại");
		}
	});
}
