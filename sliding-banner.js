// khai báo biến toàn cục để theo dõi banner hiện tại
let currentSlideIndex = 0 ; //bắt đầu từ mảng 0 vì sloganEls là 0-based 

//khởi tạo dots: tạo ra các thẻ html là các dots 
const dotContainer = document.querySelector('.sliding-dots');
const slidingsloganEls = document.querySelector('.sliding-slogan');
const sloganEls = slidingsloganEls.querySelectorAll('.slogan');
const sloganCount = sloganEls.length; 
// let dotE1s = []; // Mảng để lưu trữ các dot HTML elements

// Khai báo thêm biến nút mũi tên trái/phải
const prevArrow = document.querySelector('.carousel-arrow.left');
const nextArrow = document.querySelector('.carousel-arrow.right');


// 2. KHỞI TẠO DOTS VÀ GÁN SỰ KIỆN CLICK CHO DOTS
//gán sự kiện vào từng dots
//sử dụng vòng lặp for để quay vòng các slogan

for (let i = 0; i < sloganCount ; i++) {
        //tạo 1 thẻ div có class là dot
    const dotE1 = document.createElement('div');
    dotE1.classList.add('dot')
    //gán class active cho dot có index = 0
    if (i === 0) {
        dotE1.classList.add('active')
    }
    //gán sự kiện click vào dot
    dotE1.addEventListener('click', function(event){
        //xử lý sự kiện click vào dot ở đây, đi đến slide (ảnh) dựa vào index của dot được click
        goToSlide(i);
    });
    //đặt dot vào bên trong của container (.dot)
    dotContainer.appendChild(dotE1);
}
/**
 * đi đến slide nào đó 
 * @param {*} index index của slide
 * 
 */
function goToSlide(index) {
    // Tạm dừng và Khởi động lại Auto-Slide sau mỗi tương tác
    // stopAutoSlide();
    // CẬP NHẬT BIẾN TRẠNG THÁI TOÀN CỤC
    currentSlideIndex = index;
    //bỏ hết class active của các image-item (slide)
    sloganEls.forEach(function (sloganEl) {
        sloganEl.classList.remove ('active')
    });
    //bỏ hết class active của dot 
    const dotE1s = document.querySelectorAll ('.sliding-dots .dot');

    for (let i = 0; i < dotE1s.length; i++) {
        const dotE1 = dotE1s[i];
        dotE1.classList.remove('active');
    };
    //add class active cho image-item mà index của nó = `index`
    for (let i = 0; i < sloganEls.length; i++) {
        // const imageWrapperE1 =. imageWrapperE1s[i];
        // if (i===index) {
        //     imageWrapperE1.classlist.add('active');
        // }

        if ( i === index) {
            sloganEls[i].classList.add('active');
        }
    };
    //add class active cho dot mà index của nó = `index`
    for (let i = 0 ; i < dotE1s.length; i++) {
        const dotE1 = dotE1s[i]
        if (i === index) {
            dotE1.classList.add('active');
        }
    };

}

// 3. HÀM XỬ LÝ CLICK MŨI TÊN
function nextSlide() {
    let newIndex = currentSlideIndex + 1;
    //xử lý vòng lặp: nêu vượt quá slide cuối cùng (sloganCount) thì sẽ quay lại slide đầu tiên (0)
    if (newIndex >= sloganCount) {
        newIndex = 0 ;
    }
    //gọi hàng chuyển slide đã có 
    goToSlide(newIndex);
}

function prevSlide() {
    let newIndex = currentSlideIndex - 1;
    if (newIndex < 0) {
        newIndex = sloganCount - 1;
    }
    goToSlide(newIndex);
}

// 4. GÁN SỰ KIỆN CLICK MŨI TÊN
// Gán sự kiện click cho các nút mũi tên
prevArrow.addEventListener('click', prevSlide);
nextArrow.addEventListener('click', nextSlide);

//5. SET AUTOSLIDE - TỰ ĐỘNG CHẠY 
// Thời gian chuyển slide tự động (ví dụ: 3000ms = 3 giây)
const SLIDE_DURATION = 0.15;
let autoSlideInterval;
function startAutoSlide () {
    //xoá bộ đếm thời gian cũ (nếu có) để tránh chạy song song 
    clearInterval(autoSlideInterval);
    // thiết lập bộ đếm thời gian mới : gọi nextSlide sau mỗi Slide-duration
    autoSlideInterval = setInterval (nextSlide, 2000)
}

function autoStopSlide () {
    clearInterval(autoSlideInterval);
}

// Bắt đầu tự động chạy ngay sau khi tất cả được thiết lập
startAutoSlide();




