// ĐÂY LÀ PRODUCT-LIST CỦA HOMEPAGE - MỤC SẢN PHẨM BÁN CHẠY 

            //tạo mảng product 
            const products = [{
                name: 'Nước dưỡng tóc tinh dầu bưởi 140ml',
                info: 'GIẢM GÃY RỤNG VÀ LÀM MỀM TÓC',
                price: '162.000 đ',
                avatar: 'https://image.cocoonvietnam.com/uploads/Avatar_Website_Nuoc_duong_toc_tinh_dau_buoi_140ml_Cai_tien_moi_240629_7819f9ba98.jpg'
            }, 
            {
                name: 'Tinh chất bí đao 70ml - Tặng dung dịch chấm mụn bí đao 5ml',
                info: 'SẠCH MỤN VÀ MỜ VẾT THÂM',
                price: '295.000 đ',
                avatar: 'https://image.cocoonvietnam.com/uploads/Artboard_26_copy_5_ad72a3b272.png'
            },
            {
                name: 'Mặt nạ nghệ Hưng Yên 100ml',
                info: 'DA RẠNG RỠ VÀ MỊN MÀNG',
                price: '339.000 đ',
                avatar: 'https://image.cocoonvietnam.com/uploads/Artboard_48_eb4d856178.jpg'
            },
            {
                name: 'Nước tẩy trang bí đao 500ml',
                info: 'LÀM SẠCH VÀ GIẢM DẦU',
                price: '290.000 đ',
                avatar: 'https://image.cocoonvietnam.com/uploads/avatar_ntt_EBAW_2025_500ml_Artboard_1_6b5235d968.png'
            },
            {
                name: 'Cà phê Đắk Lắk làm sạch da chết cơ thể 200ml',
                info: 'CHO LÀN DA MỀM MỊN VÀ RẠNG RỠ',
                price: '123.000 đ',
                avatar: 'https://image.cocoonvietnam.com/uploads/z4147355364575_e4b88c65711b8261d9c996e6797b60a1_83f203bec3.jpg'
            }
        ]
        //2. build html dua tren mang product 
        const productGridWrapperE1 = document.querySelector('.product-grid-wrapper');
    // Khởi tạo biến chuỗi HTML
    let productHTML = ''; 

    if (productGridWrapperE1) {
        //lắp qua mảng product: tạo html product-card
        for (let i = 0; i< products.length; i++) {
            const product = products[i];
        //template string: ``
            const item = `
            <div class = "product-wrapper">
                    <div class = "img-wrapper">
                        <a href = "#"><img src= ${ product.avatar } alt = "sản phẩm"/></a>
                    </div>

                    <div class="product-info">
                        <div class = "text">
                            <a href ="#"><div class="name"> ${ product.name }</div></a>
                            <div class="sell-info">
                                <div class="info"> ${ product.info}</div> 
                                <div class="price"> ${ product.price }</div>
                            </div>
                        </div>
                        
                        <div class="icon">
                            <div class="shopping"><i class="fa-solid fa-bag-shopping"></i></div>
                        </div>        
                    </div>        
                </div>`;
        // Nối chuỗi vào biến productHTML
        productHTML += item;
        }
    // CHỈ GÁN 1 LẦN sau khi vòng lặp kết thúc
    productGridWrapperE1.innerHTML = productHTML;
    }

//xu ly an/hien navbar o mobile 
//luu trang thai an/hien  navbar o mobile

function toggleNavbarMenu() {
	// ẩn/hiện navbar theo biến isNavbarOpen
	// dùng class active
	const navbarEl = document.querySelectorAll('.navbar-content .nav-link');
	navbarEl.classList.toggle('active');
} 