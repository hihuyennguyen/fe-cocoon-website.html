// ĐÂY LÀ MỤC SẢN PHẨM CỦA ĐƯỜNG LINK PRODUCT-LIST RIÊNG, BAO GỒM TẤT CẢ SẢN PHẨM

// tao 1 bien ten JSON_PATH là thong tin san pham tu file product.json 
const JSON_PATH = './js/product.json'; 

/**
 * Hàm tạo chuỗi HTML cho một thẻ sản phẩm đơn lẻ
 * @param {object} product - Đối tượng sản phẩm từ JSON
 * @returns {string} Chuỗi HTML của thẻ sản phẩm
 */
function createProductCard(product) {
    // Dữ liệu từ JSON bao gom:  name, info, price, avatar
    // tạo 1 class product-card bao gồm các trường thông tin
    return `
        <a href="./product-detail.html" class="product-card">
            <img src="${product.avatar}" alt="${product.name}">

            <div class ="info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-info">${product.info}</p>
                <div class = "price-icon">
                    <p class="product-price">${product.price}</p>
                    <div class = "icon-shopping">
                        <i class="fa-solid fa-bag-shopping"></i>
                    </div>
                </div>
            </div>
        </a>
    `;
}
// product-grid-wrapper = product-grid-wrapper
// product-wrapper = product-card
// product-wrapper img = product-card img
// product-info = product-card info
//name = product-title
//price = product-price
// icon = product-action 


// sử dụng hàm getJSON trong jquery để lấy dữ liệu sản phẩm
$.getJSON(JSON_PATH)
    .done(function(data) {
        // 'data' là đối tượng JSON đã tải về
        
        // Lặp qua TỪNG DANH MỤC sản phẩm trong dữ liệu, hàm .each() là 1 phương thức tĩnh , 
        // được dùng để lặp lại 1 hàm trên mỗi phần tử của mảng
        $.each(data.categories, function(i, category) {
            // data : là đối tượng JSON lấy về phía trên 
            // categories : mảng đã tạo bên product.json, chưa các thông tin của sản phẩm theo từng danh mục

            // khai báo biến mới là được truy cập vào id tronng category
            const categoryId = category.id;
            
            // --- BƯỚC 1: NHẮM MỤC TIÊU CONTAINER CÓ SẴN TRONG HTML ---
            // Tìm div.product-grid-wrapper nằm trong div.product-list có data-category-id tương ứng
            // jQuery Selector: .product-list[data-category-id="best-seller"] .product-grid-wrapper
            const $targetGridWrapper = $(`.product-list[data-category-id="${categoryId}"] .product-grid-wrapper`);
            
            // Kiểm tra xem container có tồn tại không
            if ($targetGridWrapper.length === 0) {
                console.warn(`Không tìm thấy container HTML với data-category-id="${categoryId}". Vui lòng kiểm tra lại HTML.`);
                return true; // Chuyển sang danh mục tiếp theo trong $.each
            }
            // tạo biến rỗng trước khi tạo chuỗi sản phẩm cho vào
            let productHtml = '';
            
            // --- BƯỚC 2: TẠO CHUỖI HTML CHO TỪNG SẢN PHẨM VÀO BIẾN RỖNG ĐÃ TẠO PHIÁ TRÊN ---
            $.each(category.products, function(j, product) {
                productHtml += createProductCard(product);
            });
            
            // --- BƯỚC 3: CHÈN SẢN PHẨM VÀO CONTAINER ĐÃ CÓ SẴN ---
            $targetGridWrapper.html(productHtml);
        });
    })
    // .fail(function(jqxhr, textStatus, error) {
    //     // Xử lý lỗi nếu không tải được file JSON
    //     console.error("Lỗi khi tải dữ liệu sản phẩm:", textStatus, error);
    //     // Thêm thông báo lỗi vào DOM nếu cần
    //     $('main').append('<p style="color: red;">Đã xảy ra lỗi khi tải dữ liệu sản phẩm. Vui lòng kiểm tra file product.json.</p>');
    // });
