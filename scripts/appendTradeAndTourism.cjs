const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/contentData.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const provinces = [
  "An Giang (An Giang)",
  "Bà Rịa - Vũng Tàu (TP. Hồ Chí Minh)",
  "Bắc Giang (Bắc Ninh)",
  "Bắc Kạn (Thái Nguyên)",
  "Bạc Liêu (Cà Mau)",
  "Bắc Ninh (Bắc Giang)",
  "Bến Tre (Vĩnh Long)",
  "Bình Định (Gia Lai)",
  "Bình Dương (TP. Hồ Chí Minh)",
  "Bình Phước (Đồng Nai)",
  "Bình Thuận (Lâm Đồng)",
  "Cà Mau (Cà Mau)",
  "Cao Bằng (Cao Bằng)",
  "Cần Thơ (TP. Cần Thơ)",
  "Đà Nẵng (TP. Đà Nẵng)",
  "Đắk Lắk (Đắk Lắk)",
  "Đắk Nông (Lâm Đồng)",
  "Điện Biên (Điện Biên)",
  "Đồng Nai (Đồng Nai)",
  "Đồng Tháp (Đồng Tháp)",
  "Gia Lai (Gia Lai)",
  "Hà Giang (Tuyên Quang)",
  "Hà Nam (Ninh Bình)",
  "Hà Nội (TP. Hà Nội)",
  "Hà Tĩnh (Hà Tĩnh)",
  "Hải Dương (TP. Hải Phòng)",
  "Hải Phòng (TP. Hải Phòng)",
  "Hậu Giang (TP. Cần Thơ)",
  "Hòa Bình (Phú Thọ)",
  "Hưng Yên (Hưng Yên)",
  "Khánh Hòa (Khánh Hòa)",
  "Kiên Giang (An Giang)",
  "Kon Tum (Quảng Ngãi)",
  "Lai Châu (Lai Châu)",
  "Lâm Đồng (Lâm Đồng)",
  "Lạng Sơn (Lạng Sơn)",
  "Lào Cai (Lào Cai)",
  "Long An (Tây Ninh)",
  "Nam Định (Ninh Bình)",
  "Nghệ An (Nghệ An)",
  "Ninh Bình (Ninh Bình)",
  "Ninh Thuận (Khánh Hòa)",
  "Phú Thọ (Phú Thọ)",
  "Phú Yên (Đắk Lắk)",
  "Quảng Bình (Quảng Trị)",
  "Quảng Nam (TP. Đà Nẵng)",
  "Quảng Ngãi (Quảng Ngãi)",
  "Quảng Ninh (Quảng Ninh)",
  "Quảng Trị (Quảng Trị)",
  "Sóc Trăng (TP. Cần Thơ)",
  "Sơn La (Sơn La)",
  "Tây Ninh (Tây Ninh)",
  "Thái Bình (Hưng Yên)",
  "Thái Nguyên (Thái Nguyên)",
  "Thanh Hóa (Thanh Hóa)",
  "TP. Hồ Chí Minh (TP. Hồ Chí Minh)",
  "TP. Huế (TP. Huế)",
  "Tiền Giang (Đồng Tháp)",
  "Trà Vinh (Vĩnh Long)",
  "Tuyên Quang (Tuyên Quang)",
  "Vĩnh Long (Vĩnh Long)",
  "Vĩnh Phúc (Phú Thọ)",
  "Yên Bái (Lào Cai)"
];

const industries = [
  "Ăn uống",
  "Bán lẻ - Thương mại",
  "Điện tử - Điện máy - Viễn thông",
  "Dược phẩm, Mỹ phẩm, Dụng cụ y tế",
  "Nhà hàng - Khách sạn",
  "Nhà thuốc",
  "Nội thất - Vật liệu xây dựng",
  "Nông – Lâm – Thủy sản",
  "Ô tô - Xe máy",
  "Tạp hóa",
  "Thiết bị thể thao",
  "Thời trang",
  "Xăng dầu"
];

// Merchants extracted verbatim from PDF
const merchants = [
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Ô tô - Xe máy",
    name: "CỬA HÀNG XE GẮN MÁY TƯƠI",
    address: "368 Võ Thị Sáu, Bạc Liêu, Cà Mau, Việt Nam",
    phone: "02913821070",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/Xe%20gan%20may_Tuoi.jpg",
    mapsUrl: "https://maps.app.goo.gl/XpAzqXHGPozabdE89"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Điện tử - Điện máy - Viễn thông",
    name: "HỘ KINH DOANH TÍN NGHĨA STORE",
    address: "Số 211 - đường Trần Phú - Phường 7 - TP. Bạc Liêu - Bạc Liêu",
    phone: "0886204060",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/Mobile_Tin%20nghia%20Store.jpg",
    mapsUrl: "https://maps.app.goo.gl/4BJrE8pxHPwU1yTH8"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Ô tô - Xe máy",
    name: "CÔNG TY TNHH TM DV ĐẠT NGỌC",
    address: "2221 - Hai Bà Trưng - P.3 - TP. Bạc Liêu - Bạc Liêu",
    phone: "02913969988",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/Datngoc.jpg",
    mapsUrl: "https://maps.app.goo.gl/oMMZnnkzpsis4MZP8"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Điện tử - Điện máy - Viễn thông",
    name: "ĐIỆN THOẠI DI ĐỘNG HỒ PHÁT",
    address: "131 Võ Thị Sáu, Khóm 2, Bạc Liêu, Cà Mau, Việt Nam",
    phone: "0777795268",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/Dien%20thoai_Ho%20phat.jpg",
    mapsUrl: "https://maps.app.goo.gl/7HY95w4kCsVNSJFW9"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Thiết bị thể thao",
    name: "CỬA HÀNG KING SPORT BẠC LIÊU",
    address: "Số 266 - 268 - Trần Phú - Phường 7 - TP. Bạc Liêu - Bạc Liêu",
    phone: "02916555755",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/kingsport.jpg",
    mapsUrl: "https://maps.app.goo.gl/8PALCiejT2Jc32ou7"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nội thất - Vật liệu xây dựng",
    name: "CHI NHÁNH CÔNG TY CỔ PHẦN VUA NỆM-TẠI BẠC LIÊU",
    address: "69 - Đường Trần Huỳnh - Khóm 2 - Phường 7 - TP. Bạc Liêu - Bạc Liêu",
    phone: "0394422366",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/vua%20nem.jpg",
    mapsUrl: "https://maps.app.goo.gl/TmLgzNSCQfph7vfA7"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nội thất - Vật liệu xây dựng",
    name: "HỘ KINH DOANH NỘI THẤT THUẬN PHÁT",
    address: "Số 16 B/8 - Trần Phú - Khóm 1, Phường 7 - TP. Bạc Liêu - Bạc Liêu",
    phone: "0947247996",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/noi%20that_ThuanPhat.jpg",
    mapsUrl: "https://maps.app.goo.gl/qQ45kQx3Y6SPBKrSA"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Ô tô - Xe máy",
    name: "CÔNG TY TNHH VĂN TƯƠI BẠC LIÊU",
    address: "Số 103-105 - Võ Thị Sáu, Khóm 2 - Phường 8 - TP. Bạc Liêu - Bạc Liêu",
    phone: "02913888882",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/vantuoi_baclieu.jpg",
    mapsUrl: "https://maps.app.goo.gl/ktKVWmmyBa9AZ2C9A"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Điện tử - Điện máy - Viễn thông",
    name: "SANG TRANG",
    address: "35 Trần Huỳnh, Bạc Liêu, Cà Mau, Việt Nam",
    phone: "0939195500",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/sangtrang.jpg",
    mapsUrl: "https://maps.app.goo.gl/yu3GP9BNMv6Pcrp78"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nội thất - Vật liệu xây dựng",
    name: "TRANG TRÍ NỘI THẤT VIỆT DŨNG 2",
    address: "9A-10A-11A - Trần Phú - Phường 7 - TP. Bạc Liêu - Bạc Liêu",
    phone: "0918627824",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/Noi%20that_VietDung.jpg",
    mapsUrl: "https://maps.app.goo.gl/bMVbKzssXPpF5se48"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Điện tử - Điện máy - Viễn thông",
    name: "KEN TÁO",
    address: "Số 393 - Đ. Trần Phú - Khóm 2 - P. 7 - TP. Bạc Liêu - Bạc Liêu",
    phone: "0886204060",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/Kentao.jpg",
    mapsUrl: "https://maps.app.goo.gl/FHsHToznrYVhTobK6"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Bán lẻ - Thương mại",
    name: "CÔNG TY TNHH TM - DV VIỆT DŨNG",
    address: "297 - 297A - Đường Trần Phú - Phường 7 - TP. Bạc Liêu - Bạc Liêu",
    phone: "02913821444",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/Cty%20TNHH%20VietDung.jpg",
    mapsUrl: "https://maps.app.goo.gl/o3LVkArDynC7qqzLA"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Bán lẻ - Thương mại",
    name: "CÔNG TY TNHH MTV CAO HOÀNG DŨNG",
    address: "130B - ẤP LONG THÀNH, TT PHƯỚC LONG - H. Phước Long - Bạc Liêu",
    phone: "0909580430",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/cao%20hoang%20dung.jpg",
    mapsUrl: "https://maps.app.goo.gl/MVuteFdkBuqhJ7uD7"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nội thất - Vật liệu xây dựng",
    name: "CTY TNHH MTV Minh Tiến Bạc Liêu",
    address: "QL1A, Hòa Bình, Cà Mau, Việt Nam",
    phone: "02913666663",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/HB_MinhTien.jpg",
    mapsUrl: "https://maps.app.goo.gl/yid9gETg2Cbt5S1Y6"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nhà hàng - Khách sạn",
    name: "Khách sạn Sài Gòn Bạc Liêu",
    address: "2-4-6, Hoàng Văn Thụ, Bạc Liêu, Cà Mau, Việt Nam",
    phone: "02913959697",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/KS%20Baclieu.jpg",
    mapsUrl: "https://maps.app.goo.gl/1msJLwo2E2EDbgvN6"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nhà hàng - Khách sạn",
    name: "Khách sạn Trần Vinh",
    address: "85 - 87 Hai Bà Trưng, Bạc Liêu, Cà Mau, Việt Nam",
    phone: "02913777444",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/KS_TranVinh1.jpg",
    mapsUrl: "https://maps.app.goo.gl/8K4qdBGcr9wTXNYD6"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nhà hàng - Khách sạn",
    name: "Khách sạn Trần Vinh 2",
    address: "05-07 đường 30/4, Bạc Liêu, Cà Mau 97106, Việt Nam",
    phone: "0848733831",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/KS_TranVinh2.jpg",
    mapsUrl: "https://maps.app.goo.gl/LxkgrYCWfNb532h18"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nhà hàng - Khách sạn",
    name: "Sunrise Hotel Bạc Liêu",
    address: "Khu Villa Vincom, Căn HG, 37 - 39 Trần Huỳnh, Bạc Liêu, Cà Mau",
    phone: "0828 777 272",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/KS_SunPrice.jpg",
    mapsUrl: "https://maps.app.goo.gl/KdXXrzUCz8MK7pf66"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nhà hàng - Khách sạn",
    name: "Khách sạn Anh Tuấn",
    address: "48 Ninh Bình, Bạc Liêu, Cà Mau, Việt Nam",
    phone: "0977503503",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/KS_AnhTuan.jpg",
    mapsUrl: "https://maps.app.goo.gl/p4U3ePh3FZW7eA6a6"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nhà hàng - Khách sạn",
    name: "Khách sạn New Palace",
    address: "36 Trần Quang Diệu, Khu Địa ốc Bạc Liêu, Bạc Liêu, Cà Mau",
    phone: "02913949888",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/KS_NewPalace.jpg",
    mapsUrl: "https://maps.app.goo.gl/6qj4P5YRV45W37ge9"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nhà hàng - Khách sạn",
    name: "THIÊN ÂN BOUTIQUE HOTEL",
    address: "Khu Villa Vincom Trần Huỳnh, HG01, Trần Huỳnh, Bạc Liêu, Cà Mau",
    phone: "0868303968",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/KS_BOUTIQUE%20HOTEL.jpg",
    mapsUrl: "https://maps.app.goo.gl/dtTzGuS5cWYH5iRj6"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nhà hàng - Khách sạn",
    name: "Cosmo Stars Hotel Bac Lieu",
    address: "31A Trần Phú, Bạc Liêu, Cà Mau, Việt Nam",
    phone: "02913777999",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/KS_Cosmo%20Stars.jpg",
    mapsUrl: "https://maps.app.goo.gl/Ky1ARAPFg16Eecn67"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nhà hàng - Khách sạn",
    name: "Khách sạn Công tử Bạc Liêu",
    address: "139A Hai Bà Trưng, Bạc Liêu, Cà Mau",
    phone: "02917300094",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/KS_CongtuBacLieu.jpg",
    mapsUrl: "https://maps.app.goo.gl/YErzXCaowg5F8vo77"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Ăn uống",
    name: "Sino Coffee",
    address: "Khóm 7, Bạc Liêu, Cà Mau, Việt Nam",
    phone: "0918667272",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/Sino%20coffee.jpg",
    mapsUrl: "https://maps.app.goo.gl/9HK5oTB4X6FgsksaA"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nội thất - Vật liệu xây dựng",
    name: "Trang trí nội thất Chánh Đạt Bạc Liêu",
    address: "155 23 Tháng 8, Bạc Liêu, Cà Mau, Vietnam",
    phone: "0943705599",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/cua-hang-trang-tri-noi-that-chanh-dat-986671.jpg",
    mapsUrl: "https://maps.app.goo.gl/fHvXUcrQHMQ5A1dT8"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Ăn uống",
    name: "Cà phê Gocgo Bạc Liêu",
    address: "220 Nguyễn Thị Minh Khai, Khóm 2, Bạc Liêu, Cà Mau, Vietnam",
    phone: "0918868299",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/Gocgo2.jpg",
    mapsUrl: "https://maps.app.goo.gl/n9K4ScvCm4BNVVKbA?g_st=ic"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Thời trang",
    name: "Kính mắt Quang Minh",
    address: "251 Trần Phú, Khóm 9, Bạc Liêu, Cà Mau, Vietnam",
    phone: "0945363070",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/Mat%20kinh%20Quang%20Minh.jpg",
    mapsUrl: "https://maps.app.goo.gl/gKDzMrYqWxkB57FD9?g_st=ic"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Ăn uống",
    name: "Ốc 35",
    address: "5/142e kênh, Hồ Minh Luông, khóm 4, Bạc Liêu, Cà Mau 84291, Vietnam",
    phone: "0919352535",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/%E1%BB%90c%2035.jpg",
    mapsUrl: "https://maps.app.goo.gl/6HZerZGZtTjU3HRS7?g_st=ic"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nội thất - Vật liệu xây dựng",
    name: "Cửa hàng Văn Phước",
    address: "42 Võ Thị Sáu, Bạc Liêu, Cà Mau, Vietnam",
    phone: "0989008194",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/Nhom%20Van%20Phuoc.jpg",
    mapsUrl: "https://maps.app.goo.gl/XmwSjjPrCMCEDPaf8"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nông – Lâm – Thủy sản",
    name: "Cửa hàng VTNN Chinh Nga",
    address: "CHQ3+PXW, Vĩnh Thanh, Cà Mau, Vietnam",
    phone: "0916909181",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/VTNN%20ChinhNga.jpg",
    mapsUrl: "https://maps.app.goo.gl/izjVW66Z7pR6YXQVA?g_st=ic"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Ăn uống",
    name: "Bánh bao Xương Thạnh",
    address: "274 Hoàng Diệu, Bạc Liêu, Cà Mau, Vietnam",
    phone: "0944399494",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/XuongThanh.jpg",
    mapsUrl: "https://maps.app.goo.gl/jPpRCHpocKGSXbL86"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nhà hàng - Khách sạn",
    name: "Thuyền Trăng",
    address: "128 Võ Thị Sáu, Bạc Liêu, Cà Mau, Vietnam",
    phone: "2913822888",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/ThuyenTrang.jpg",
    mapsUrl: "https://maps.app.goo.gl/YDxDDsyq2pwYfNLR6"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nhà thuốc",
    name: "Nhà thuốc Thuận An",
    address: "400 Võ Thị Sáu, Bạc Liêu, Cà Mau, Vietnam",
    phone: "2913952952",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/Nhathuoc_ThuanAn.jpg",
    mapsUrl: "https://maps.app.goo.gl/edJUD9sswewL7VZc8"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Bán lẻ - Thương mại",
    name: "Shop Giày dép Thúc Trinh",
    address: "65-67 Bà Triệu, Bạc Liêu, Cà Mau, Vietnam",
    phone: "0949114444",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/Giaydep_ThucTrinh.jpg",
    mapsUrl: "https://maps.app.goo.gl/VwAqYX18vVxGE34j9"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nông – Lâm – Thủy sản",
    name: "Cửa hàng thức ăn tôm Trung Vinh 2",
    address: "37 Trần Phú, Bạc Liêu, Cà Mau, Vietnam",
    phone: "02913829735",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/TrungVinh2.jpg",
    mapsUrl: "https://maps.app.goo.gl/ivmRL65LGtR7qYRDA"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nông – Lâm – Thủy sản",
    name: "Đại lý thức ăn thủy sản Phương Hiền",
    address: "01 Ninh Bình, Khóm 3, Bạc Liêu, Cà Mau, Vietnam",
    phone: "0919494550",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/TS_PhuongHien.jpg",
    mapsUrl: "https://maps.app.goo.gl/dDJjJQ7wNTyFX3LD7"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nhà hàng - Khách sạn",
    name: "Khu du lịch điện gió Hòa Bình 1 - Resort",
    address: "Ấp 12, Vĩnh Hậu A, Vĩnh Hậu, Bạc Liêu, Vietnam",
    phone: "02916555552",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/Diengio_HB1.jpg",
    mapsUrl: "https://maps.app.goo.gl/Xph57V6pKx331FiW8"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Dược phẩm, Mỹ phẩm, Dụng cụ y tế",
    name: "Titishop Gành Hào",
    address: "Ấp 2, xã Gành Hào, tỉnh Cà Mau",
    phone: "0939024202",
    imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/IMG_3006.jpeg",
    mapsUrl: "https://maps.app.goo.gl/DtKmD6s8B1fMVSTs9?g_st=ic"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nông – Lâm – Thủy sản",
    name: "Ngọc Út – hải sản Gành Hào",
    address: "Ấp 2, xã Gành Hào, tỉnh Cà Mau",
    phone: "0939024202",
    imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/IMG_3007.jpeg",
    mapsUrl: "https://maps.app.goo.gl/DtKmD6s8B1fMVSTs9?g_st=ic"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nông – Lâm – Thủy sản",
    name: "Công ty TNHH MTV tôm giống Hùng Hên Phương Bình",
    address: "Đường số 1, Ấp 4, Gành Hào, Cà Mau",
    phone: "0919070859",
    imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/CTy%20Hung%20Hen%20Phuong%20Binh.PNG",
    mapsUrl: "https://maps.app.goo.gl/vpHYZUTJLzsKUedq6?g_st=ig"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nông – Lâm – Thủy sản",
    name: "Cửa hàng Giang Diễm",
    address: "A08-09 kdc đường Phan Ngọc Hiển, ấp 3, Gành Hào, Cà Mau",
    phone: "0919000729",
    imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/Cua%20hang%20Giang%20Diem.jpg",
    mapsUrl: "https://maps.app.goo.gl/r2xNj3jutP9uqAG59?g_st=ig"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nông – Lâm – Thủy sản",
    name: "Vựa Tư Hùng (Công ty TNHH MTV thủy sản Thế Vinh)",
    address: "Phan Ngọc Hiển, Gành Hào, Cà Mau, Vietnam",
    phone: "0913193454",
    imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/Vua%20Tu%20Hung.PNG",
    mapsUrl: "https://maps.app.goo.gl/GNY31xchVJrGbwoE7?g_st=ig"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nông – Lâm – Thủy sản",
    name: "Vựa Hoa Tuấn",
    address: "Ấp 4, Ganh Hao, Ca Mau, Vietnam",
    phone: "0918245094",
    imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/Hoa%20Tuan.jpg",
    mapsUrl: "https://maps.app.goo.gl/Z1CYU5bmVhtfyCME8?g_st=ig"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nội thất - Vật liệu xây dựng",
    name: "Cửa hàng TTNT Quốc Linh",
    address: "2CMH+XC2, Đê, Gành Hào, Cà Mau, Vietnam",
    phone: "0947999911",
    imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/CH%20QUoc%20Linh.JPG",
    mapsUrl: "https://maps.app.goo.gl/797riJ2zNLQrNcLU8?g_st=ig"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nông – Lâm – Thủy sản",
    name: "Vựa Hoàng Vinh - Công Ty TNHH MTV Thủy Sản Hoàng Vinh",
    address: "Ấp Ngọc Điền, xã Gành Hào, tỉnh Cà Mau",
    phone: "0913333975",
    imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/Cty%20Hoang%20Vinh.PNG",
    mapsUrl: "https://maps.app.goo.gl/mzUpZRvXY9MccLQv5?g_st=ig"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Bán lẻ - Thương mại",
    name: "Yến Sào Đất Mũi",
    address: "Ấp Ngọc Điền, xã Gành Hào, tỉnh Cà Mau",
    phone: "0913631669",
    imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/Cay%20xang%20Kim%20Tien.PNG",
    mapsUrl: "https://maps.app.goo.gl/nTNwq444dDTLm4y69?g_st=ig"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Xăng dầu",
    name: "Cây xăng Kim Tiến",
    address: "326 Phan Ngọc Hiển, Gành Hào, Cà Mau, Vietnam",
    phone: "0918124040",
    imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/1K3BUUURD_4KMA0J.jpeg",
    mapsUrl: "https://maps.app.goo.gl/8khPZyoZar3TzjNR6"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nông – Lâm – Thủy sản",
    name: "Công ty TNHH MTV giống thủy sản Hoàng Lộc",
    address: "Ấp Ngọc Điền, xã Gành Hào, tỉnh Cà Mau",
    phone: "0918232181",
    imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/1K3BUUURD_4KMA0J.jpeg",
    mapsUrl: "https://maps.app.goo.gl/crjwHmJYGHsiTuqx6"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nội thất - Vật liệu xây dựng",
    name: "CÔNG TY TNHH MTV VLXD HỮU LỘC",
    address: "Giá Rai - Gành Hào, Long Điền, Cà Mau, Vietnam",
    phone: "0913083083",
    imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/Cua%20hang%20Huu%20Loc.PNG",
    mapsUrl: "https://maps.app.goo.gl/xuTfKz2aGY9H59VY8"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nông – Lâm – Thủy sản",
    name: "CÔNG TY TNHH MTV LIÊN VẠN PHÁT",
    address: "Ấp 4, Ganh Hao, Ca Mau, Vietnam",
    phone: "0918327711",
    imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/1K3BT3P63_4KMA0J.jpeg",
    mapsUrl: "https://maps.app.goo.gl/Ths563TUrv6Jw16S9"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nông – Lâm – Thủy sản",
    name: "Cửa hàng Thuận Lợi",
    address: "Ganh Hao, Bac Lieu, Vietnam",
    phone: "0907965060",
    imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/IMG_3004.jpeg",
    mapsUrl: "https://maps.app.goo.gl/YEJkHnTXh9AFNwwR9"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Bán lẻ - Thương mại",
    name: "Cửa hàng Huỳnh Hoa",
    address: "Số 024B, đường Võ Thị Sáu, phường Bạc Liêu, tỉnh Cà Mau",
    phone: "0909812517",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/HuynhHoa.png",
    mapsUrl: "https://maps.app.goo.gl/kxPhLBLbBwmW13Jr7"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Bán lẻ - Thương mại",
    name: "Cửa hàng Lủ Xê",
    address: "Số 53, đường Lê Văn Duyệt, phường Bạc Liêu, tỉnh Cà Mau",
    phone: "0815275777",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/LuXe.png",
    mapsUrl: "https://maps.app.goo.gl/qRaj1kuof3GJsqe26"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Bán lẻ - Thương mại",
    name: "Cửa hàng Vĩnh Phát",
    address: "Số 44 đường Lê Văn Duyệt, khóm 10, phường Bạc Liêu, tỉnh Cà Mau",
    phone: "02913822188",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/VinhPhat.png",
    mapsUrl: "https://maps.app.goo.gl/ghtheptH1PPvCrng8"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Bán lẻ - Thương mại",
    name: "Thắng Quang",
    address: "TTTM Phường Bạc Liêu, Cà Mau",
    phone: "0828411028",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/TTNT%20Ut.png",
    mapsUrl: "https://maps.app.goo.gl/zE86YtoieP9ygKGB9?g_st=work.vn.gapo.app.GapoShareExtension"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Bán lẻ - Thương mại",
    name: "TTNT Út",
    address: "Số 137, đường Hoàng Văn Thụ, phường Bạc Liêu, tỉnh Cà Mau",
    phone: "0918887694",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/TTNT%20Ut.png",
    mapsUrl: "https://maps.app.goo.gl/Da75avfjki2R2yDE7"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Ăn uống",
    name: "Cà Phê Thanh Thư",
    address: "Số 05, hương lộ 6, ấp Sóc Đồn, xã Hưng Hội, tỉnh Cà Mau.",
    phone: "0944334755",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/ThanhThu_Cafe.png",
    mapsUrl: "https://maps.app.goo.gl/sQpE39tDrtFGh478A"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Ăn uống",
    name: "Rose Coffee & Billiards Club",
    address: "26 Lê Duẩn, Bạc Liêu, Cà Mau, Việt Nam",
    phone: "0983162041",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/ThanhThu_Cafe.png",
    mapsUrl: "https://maps.app.goo.gl/ae3fHhUjpVVeXNqz9?g_st=work.vn.gapo.app.GapoShareExtension"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Dược phẩm, Mỹ phẩm, Dụng cụ y tế",
    name: "Nhà thuốc Thanh Vũ",
    address: "Số 183, đường Bà Triệu, phường Bạc Liêu, Cà Mau",
    phone: "0944633118",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/Nha%20Thuoc_Thanh%20Vu.jpg",
    mapsUrl: "https://maps.app.goo.gl/d7U6BwvzViTLxNvVA"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Dược phẩm, Mỹ phẩm, Dụng cụ y tế",
    name: "Quầy thuốc Thanh Sơn",
    address: "Ấp Năm Căn, Xã Hưng Hội, Tỉnh Cà Mau",
    phone: "0918176060",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/Nha%20Thuoc_Thanh%20Vu.jpg",
    mapsUrl: "https://maps.app.goo.gl/XXcJWhAaGmxyoBFs5?g_st=work.vn.gapo.app.GapoShareExtension"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Ô tô - Xe máy",
    name: "MOTO Kiên",
    address: "Số 326, khóm 17, phường Bạc Liêu, tỉnh Cà Mau",
    phone: "0902525464",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/Moto_Kien.png",
    mapsUrl: "https://maps.app.goo.gl/sy9rV3y6xhNNSD2NA"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Điện tử - Điện máy - Viễn thông",
    name: "Điện lạnh Hoàng Thám",
    address: "Số 19, đường Ngô Quang Nhã, phường Bạc Liêu, tỉnh Cà Mau",
    phone: "0988633045",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/Dienlanh_HoangTham.jpg",
    mapsUrl: "https://maps.app.goo.gl/qXDsL5mUSyF4SJSN7"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Tạp hóa",
    name: "Hữu Liêm",
    address: "Khu hành chính, Đường Lương Đình Của, Phường Bạc Liêu, tỉnh Cà Mau",
    phone: "0918232171",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/HuuLiem.png",
    mapsUrl: "https://maps.app.goo.gl/HX5xn3DVhaH5ifAB9"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nhà thuốc",
    name: "Cửa Hàng Thuốc Thú Y Minh Kiều",
    address: "Số 38, đường Cách Mạng, khóm 01, phường Bạc Liêu, tỉnh Cà Mau",
    phone: "0919204936",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/Cuahang_Thu%20y_MinhKieu.jpg",
    mapsUrl: "https://maps.app.goo.gl/Uh2hxkmfNdifQD4L7?g_st=work.vn.gapo.app.GapoShareExtension"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nội thất - Vật liệu xây dựng",
    name: "TTNT Tú Quyên",
    address: "Ấp Tam Hưng, Vĩnh Lợi, tỉnh Cà Mau",
    phone: "0945490581",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/TuQuyen.png",
    mapsUrl: "https://maps.app.goo.gl/n6PxKr2BEWTeNkin9"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Nội thất - Vật liệu xây dựng",
    name: "Cửa hàng Tú Quyên",
    address: "Ấp Tam Hưng, Vĩnh Lợi, tỉnh Cà Mau",
    phone: "0947986350",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/TuQuyen.png",
    mapsUrl: "https://maps.app.goo.gl/n6PxKr2BEWTeNkin9"
  },
  {
    province: "Bạc Liêu (Cà Mau)",
    industry: "Dược phẩm, Mỹ phẩm, Dụng cụ y tế",
    name: "Hiền Hậu Bạc Liêu",
    address: "44-46 Trần Phú, phường Bạc Liêu, tỉnh Cà Mau",
    phone: "0389424262",
    imageUrl: "https://pub-d824ab443c0c4386a4239422684760bb.r2.dev/HieuHau.png",
    mapsUrl: "https://maps.app.goo.gl/DFaDDmAkRpiaYWMb8"
  }
];

// Tourism data for Bac Lieu (from PDF)
const bacLieuTourism = {
  dining: [
    {
      name: "Bánh xèo A Mật",
      address: "182/2 Đường số 31, Ấp Giồng Nhãn, Phường Hiệp Thành, tỉnh Cà Mau",
      imageUrl: "https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Du-lich-Bac-Lieu/An/Banh-xeo-a-mat.jpg",
      mapsUrl: "https://maps.app.goo.gl/bkyfzmG21VHfpQ7s6"
    },
    {
      name: "Bún nước lèo Năm Hớn",
      address: "Số 649, Đường Trần Phú, Phường Bạc Liêu, tỉnh Cà Mau",
      imageUrl: "https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Du-lich-Bac-Lieu/An/Bun-nuoc-leo-Nam-Hon.jpg",
      mapsUrl: "https://maps.app.goo.gl/MJHRpsLtDJAeJDxf7"
    },
    {
      name: "Bún bò cay Ánh Nguyệt",
      address: "119 Cao Văn Lầu, Phường Vĩnh Trạch, tỉnh Cà Mau",
      imageUrl: "https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Du-lich-Bac-Lieu/An/Bun-bo-cay.jpg",
      mapsUrl: "https://maps.app.goo.gl/B3vUx5WRzHatY43p8"
    },
    {
      name: "Lẩu mắm Hồng Gấm",
      address: "3/225B Đường Tỉnh lộ 38, Phường Vĩnh Trạch, tỉnh Cà Mau",
      imageUrl: "https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Du-lich-Bac-Lieu/An/Lau-mam-Hong-gam.jpg",
      mapsUrl: "https://maps.app.goo.gl/YJtLaXQGMHxtU9NP8"
    },
    {
      name: "Bún xào nem nướng Băng Tâm",
      address: "516 Võ Thị Sáu, Phường Bạc Liêu, tỉnh Cà Mau",
      imageUrl: "https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Du-lich-Bac-Lieu/An/Bun-xao.jpg",
      mapsUrl: "https://maps.app.goo.gl/SisS1r6QV94zfNdM8"
    },
    {
      name: "Vựa khô Nguyên Thủy",
      address: "Ấp 2, Xã Phong Thạnh, Tỉnh Cà Mau",
      imageUrl: "https://raw.githubusercontent.com/maduylinh6683-netizen/anh-baclieu/main/1.jpg",
      mapsUrl: "https://maps.app.goo.gl/27wQFbwDodWATfjq7?g_st=ic"
    },
    {
      name: "Quán cơm Mỹ Ngân",
      address: "164 Quốc Lộ 1A, Phường Giá Rai, Tỉnh Cà Mau",
      imageUrl: "https://raw.githubusercontent.com/maduylinh6683-netizen/anh-baclieu/main/2.jpg",
      mapsUrl: "https://maps.app.goo.gl/27wQFbwDodWATfjq7?g_st=ic"
    },
    {
      name: "Thái Bình 3",
      address: "49 Quốc Lộ 1A, Xã Phong Thạnh, Tỉnh Cà Mau",
      imageUrl: "https://raw.githubusercontent.com/maduylinh6683-netizen/anh-baclieu/main/3.jpg",
      mapsUrl: "https://maps.app.goo.gl/vRr14WBzQUS8wGbJ7?g_st=ic"
    }
  ],
  hotels: [
    {
      name: "Khách sạn Sài Gòn Bạc Liêu",
      address: "2-4-6, Hoàng Văn Thụ, Bạc Liêu, Cà Mau",
      imageUrl: "https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Du-lich-Bac-Lieu/Nghi/sai-gon-bac-lieu-hotel.jpg",
      mapsUrl: "https://maps.app.goo.gl/ZimD5E8iVLYDmGz17"
    },
    {
      name: "Khách sạn Công tử Bạc Liêu",
      address: "139A Hai Bà Trưng, Bạc Liêu, Cà Mau",
      imageUrl: "https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Du-lich-Bac-Lieu/Nghi/KS-Congtubaclieu.jpg",
      mapsUrl: "https://maps.app.goo.gl/V4uG3stUiKFPFeRE9"
    },
    {
      name: "Khách sạn Trần Vinh",
      address: "85-87 Hai Bà Trưng, Phường Bạc Liêu, Tỉnh Cà Mau",
      imageUrl: "https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Du-lich-Bac-Lieu/Nghi/KS-TranVinh.jpg",
      mapsUrl: "https://maps.app.goo.gl/BVCsMDcyFHGc3NKF6"
    },
    {
      name: "Khách sạn Sơn Lâm",
      address: "69FX+3WR Quốc Lộ 1A, Xã Phong Thạnh, Tỉnh Cà Mau",
      imageUrl: "https://raw.githubusercontent.com/maduylinh6683-netizen/anh-baclieu/main/4.jpg",
      mapsUrl: "https://maps.app.goo.gl/8wFbVHuzwyR4aewN6?g_st=ic"
    },
    {
      name: "Khách sạn Đức Vương",
      address: "Ấp 2, Xã Phong Thạnh, Tỉnh Cà Mau",
      imageUrl: "https://raw.githubusercontent.com/maduylinh6683-netizen/anh-baclieu/main/7.jpg",
      mapsUrl: "https://maps.app.goo.gl/dWxgHeGjXJ7syNrC9?g_st=ic"
    }
  ],
  attractions: [
    {
      name: "Dinh thự Công tử Bạc Liêu",
      address: "13 Điện Biên Phủ, phường Bạc Liêu, tỉnh Cà Mau",
      imageUrl: "https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Du-lich-Bac-Lieu/Choi/Cong-tu-Bac-Lieu.jfif",
      mapsUrl: "https://maps.app.goo.gl/tSes8wWTrLsJxv7n7"
    },
    {
      name: "Cánh đồng điện gió Bạc Liêu",
      address: "Khóm Biển Đông A, phường Hiệp Thành, tỉnh Cà Mau",
      imageUrl: "https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Du-lich-Bac-Lieu/Choi/CanhdonggioBaclieu.jpg",
      mapsUrl: "https://maps.app.goo.gl/F1fhFJjudgbQEMNj9"
    },
    {
      name: "Chùa Xiêm Cán",
      address: "Khóm Biển Đông B, phường Hiệp Thành, tỉnh Cà Mau",
      imageUrl: "https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Du-lich-Bac-Lieu/Choi/chua-xiem-can.jpg",
      mapsUrl: "https://maps.app.goo.gl/kZEvK5JvjZwXWkN7A"
    },
    {
      name: "Quan âm Phật Đài (Mẹ Nam Hải)",
      address: "Đường Trường Sa, khu vực khóm Nhà Mát, phường Hiệp Thành, tỉnh Cà Mau",
      imageUrl: "https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Du-lich-Bac-Lieu/Choi/phat-ba-nam-hai.jpg",
      mapsUrl: "https://maps.app.goo.gl/iWWb7yM7ajC4nZEc7"
    },
    {
      name: "Khu lưu niệm Nhạc sĩ Cao Văn Lầu",
      address: "Đường Ninh Bình, phường Bạc Liêu, tỉnh Cà Mau",
      imageUrl: "https://pub-8db548912e6649bbabeb3b571024571e.r2.dev/Du-lich-Bac-Lieu/Choi/Cao-Van-Lau-Tuong.jpg",
      mapsUrl: "https://maps.app.goo.gl/pAAy6dtmdWKRMkkEA"
    },
    {
      name: "Nhà thờ Tắc Sậy",
      address: "Ấp 2A, Xã Phong Thạnh, Tỉnh Cà Mau",
      imageUrl: "https://raw.githubusercontent.com/maduylinh6683-netizen/anh-baclieu/main/5.jpg",
      mapsUrl: "https://maps.app.goo.gl/Rstd9BQNkRZ6NtmC7?g_st=ic"
    },
    {
      name: "Chùa Thiên Trúc",
      address: "6967+464 Ấp Khúc Tréo B, Xã Phong Thạnh, Tỉnh Cà Mau",
      imageUrl: "https://raw.githubusercontent.com/maduylinh6683-netizen/anh-baclieu/main/6.jpg",
      mapsUrl: "https://maps.app.goo.gl/BZPQvjup7fyDEnEx8?g_st=ic"
    }
  ]
};

// FAQs for Counter (Tính năng 1: Giải đáp thắc mắc khách hàng)
const faqs = [
  {
    id: "faq-1",
    category: "Tài khoản & iPay",
    question: "Làm sao để đăng ký hoặc kích hoạt lại FacePay / Sinh trắc học?",
    answer: "Quý khách mở ứng dụng VietinBank iPay Mobile -> Chọn Avatar (Profile) góc trên trái -> Chọn 'Cài đặt Facepay' -> Quét mặt trước, mặt sau CCCD gắn chip -> Áp CCCD vào mặt lưng điện thoại để quét NFC -> Chụp khuôn mặt để hoàn tất. Nếu điện thoại không hỗ trợ NFC, Quý khách hãy liên hệ nhân viên tại quầy VietinBank để được quét hỗ trợ nhanh nhất."
  },
  {
    id: "faq-2",
    category: "Tiền gửi tiết kiệm",
    question: "Gửi tiết kiệm tại quầy có những kỳ hạn nào và có thể rút trước hạn không?",
    answer: "VietinBank Bạc Liêu cung cấp các kỳ hạn linh hoạt từ 1, 2, 3, 6, 9, 12, 18, 24 đến 36 tháng. Quý khách có thể rút trước hạn toàn bộ hoặc một phần theo quy định của NHNN (hưởng lãi suất không kỳ hạn tại thời điểm rút)."
  },
  {
    id: "faq-3",
    category: "Vay vốn",
    question: "Điều kiện và thủ tục vay mua nhà hoặc sản xuất kinh doanh tại Bạc Liêu?",
    answer: "Quý khách là công dân Việt Nam từ 18 tuổi trở lên, có thu nhập ổn định và phương án sử dụng vốn khả thi, có tài sản bảo đảm hợp pháp (bất động sản, phương tiện vận tải, sổ tiết kiệm...). Chi tiết danh mục hồ sơ xem tại mục 'Danh mục hồ sơ vay'."
  },
  {
    id: "faq-4",
    category: "Thẻ ngân hàng",
    question: "Bị nuốt thẻ tại cây ATM hoặc quên mã PIN thì làm như thế nào?",
    answer: "Quý khách có thể khóa thẻ tạm thời ngay trên ứng dụng iPay Mobile để đảm bảo an toàn, sau đó yêu cầu cấp lại mã PIN trực tiếp trên app mà không cần ra quầy. Nếu thẻ bị nuốt tại ATM VietinBank Bạc Liêu, vui lòng thông báo cho nhân viên quầy giao dịch hoặc gọi Hotline 1900 558 868."
  },
  {
    id: "faq-5",
    category: "Dành cho Doanh nghiệp",
    question: "Doanh nghiệp mở tài khoản eFAST cần giấy tờ gì?",
    answer: "Doanh nghiệp cần chuẩn bị: Giấy chứng nhận ĐKKD, Quyết định bổ nhiệm/CCCD người đại diện pháp luật, Quyết định bổ nhiệm Kế toán trưởng và điều lệ công ty (nếu có). Quý khách có thể mở online 100% qua app eFAST One với 22 bước cực kỳ tiện lợi."
  }
];

// Deposit Rates for counter calculator
const depositRates = [
  { term: "Không kỳ hạn", rate: 0.1, months: 0 },
  { term: "1 tháng", rate: 2.0, months: 1 },
  { term: "3 tháng", rate: 2.3, months: 3 },
  { term: "6 tháng", rate: 3.3, months: 6 },
  { term: "9 tháng", rate: 3.3, months: 9 },
  { term: "12 tháng", rate: 4.7, months: 12 },
  { term: "18 tháng", rate: 4.7, months: 18 },
  { term: "24 tháng", rate: 5.0, months: 24 },
  { term: "36 tháng", rate: 5.0, months: 36 }
];

data.provinces = provinces;
data.industries = industries;
data.merchants = merchants;
data.localTourism = {
  defaultProvince: "Bạc Liêu (Cà Mau)",
  places: {
    "Bạc Liêu (Cà Mau)": bacLieuTourism
  }
};
data.faqs = faqs;
data.depositRates = depositRates;

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log('Trade map & tourism appended successfully to contentData.json!');
