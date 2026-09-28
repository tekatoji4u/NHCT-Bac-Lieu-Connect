const fs = require('fs');
const path = require('path');

const baseData = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/contentData.json'), 'utf8'));

// 1. Featured Products (Sản phẩm dịch vụ nổi bật)
const featuredProducts = {
  household: [
    {
      id: "hkd-1",
      title: "Cho vay vốn lưu động",
      imageUrl: "https://raw.githubusercontent.com/vuabanhmy55-droid/sondt1/main/IMG_4348.jpeg",
      youtubeUrl: ""
    },
    {
      id: "hkd-2",
      title: "Cho vay kinh doanh nhỏ lẻ",
      imageUrl: "https://raw.githubusercontent.com/vuabanhmy55-droid/sondt1/main/IMG_4349.jpeg",
      youtubeUrl: ""
    }
  ],
  individual: [
    {
      id: "cn-1",
      title: "VietinBank iPay",
      imageUrl: "https://raw.githubusercontent.com/vuabanhmy55-droid/sondt1/main/Ipay.jpg",
      youtubeUrl: "https://youtube.com/playlist?list=PLRnY4e_qN4q7MALpObJtLHEUa2d4dmrMv&si=v8OonrjuwzzhUbrb"
    },
    {
      id: "cn-2",
      title: "Mở tài khoản cá nhân",
      imageUrl: "https://raw.githubusercontent.com/vuabanhmy55-droid/sondt1/main/IMG_4334.jpeg",
      youtubeUrl: ""
    },
    {
      id: "cn-3",
      title: "Cho vay mua xe",
      imageUrl: "https://raw.githubusercontent.com/vuabanhmy55-droid/sondt1/main/IMG_4347.jpeg",
      youtubeUrl: ""
    },
    {
      id: "cn-4",
      title: "Cho vay vốn lưu động",
      imageUrl: "https://raw.githubusercontent.com/vuabanhmy55-droid/sondt1/main/IMG_4348.jpeg",
      youtubeUrl: ""
    },
    {
      id: "cn-5",
      title: "Cho vay kinh doanh nhỏ lẻ",
      imageUrl: "https://raw.githubusercontent.com/vuabanhmy55-droid/sondt1/main/IMG_4349.jpeg",
      youtubeUrl: ""
    },
    {
      id: "cn-6",
      title: "Cho vay mua nhà",
      imageUrl: "https://raw.githubusercontent.com/vuabanhmy55-droid/sondt1/main/IMG_4350.jpeg",
      youtubeUrl: ""
    }
  ],
  enterprise: [
    {
      id: "dn-1",
      title: "Chiết khấu, thương lượng thanh toán BCT xuất khẩu",
      imageUrl: "https://raw.githubusercontent.com/vuabanhmy55-droid/sondt1/main/CK%20thuong%20luong%20TT.jpg",
      youtubeUrl: ""
    },
    {
      id: "dn-2",
      title: "L/C nhập khẩu",
      imageUrl: "https://raw.githubusercontent.com/vuabanhmy55-droid/sondt1/main/Lc%20nhap%20khau.jpg",
      youtubeUrl: ""
    },
    {
      id: "dn-3",
      title: "L/C xuất khẩu",
      imageUrl: "https://raw.githubusercontent.com/vuabanhmy55-droid/sondt1/main/Lc%20xuat%20khau.jpg",
      youtubeUrl: ""
    },
    {
      id: "dn-4",
      title: "Bảo lãnh trong nước",
      imageUrl: "https://raw.githubusercontent.com/vuabanhmy55-droid/sondt1/main/IMG_4341.jpeg",
      youtubeUrl: ""
    },
    {
      id: "dn-5",
      title: "Hoán đổi lãi suất tiền tệ",
      imageUrl: "https://raw.githubusercontent.com/vuabanhmy55-droid/sondt1/main/Hoan%20doi%20lai%20suat.jpg",
      youtubeUrl: ""
    },
    {
      id: "dn-6",
      title: "Mua bán ngoại tệ",
      imageUrl: "https://raw.githubusercontent.com/vuabanhmy55-droid/sondt1/main/MBNT.jpg",
      youtubeUrl: ""
    },
    {
      id: "dn-7",
      title: "Chuyển tiền ngoại tệ",
      imageUrl: "https://raw.githubusercontent.com/vuabanhmy55-droid/sondt1/main/IMG_4352.jpeg",
      youtubeUrl: "https://youtu.be/xRYh1FXNlEU?si=qMMnNAqbLdhWAdST"
    },
    {
      id: "dn-8",
      title: "Quản lý dòng tiền tập trung",
      imageUrl: "https://raw.githubusercontent.com/vuabanhmy55-droid/sondt1/main/Quan%20ly%20dong%20tien%20tap%20trung.png",
      youtubeUrl: ""
    },
    {
      id: "dn-9",
      title: "Thu hộ",
      imageUrl: "https://raw.githubusercontent.com/vuabanhmy55-droid/sondt1/main/Thu%20ho%20quan%20ly%20dong%20tien.png",
      youtubeUrl: ""
    },
    {
      id: "dn-10",
      title: "Vay vốn lưu động",
      imageUrl: "https://raw.githubusercontent.com/vuabanhmy55-droid/sondt1/main/Vay%20von%20luu%20dong.jpg",
      youtubeUrl: ""
    },
    {
      id: "dn-11",
      title: "Vay đầu tư dự án",
      imageUrl: "https://raw.githubusercontent.com/vuabanhmy55-droid/sondt1/main/Vay%20dau%20tu%20du%20an.jpg",
      youtubeUrl: ""
    },
    {
      id: "dn-12",
      title: "VietinBank POS",
      imageUrl: "https://raw.githubusercontent.com/vuabanhmy55-droid/sondt1/main/Pos.jpg",
      youtubeUrl: "https://youtu.be/hMYSeYQgkls?si=HvEHQWXHK_6zg99m"
    },
    {
      id: "dn-13",
      title: "VietinBank eFast",
      imageUrl: "https://raw.githubusercontent.com/vuabanhmy55-droid/sondt1/main/Efast.jpg",
      youtubeUrl: "https://youtube.com/playlist?list=PLRnY4e_qN4q7TMmHWCbhFY-hzXhnY9lqF&si=-ns4EqPkWkYfii8j"
    },
    {
      id: "dn-14",
      title: "Mở tài khoản doanh nghiệp",
      imageUrl: "https://raw.githubusercontent.com/vuabanhmy55-droid/sondt1/main/IMG_4335.jpeg",
      youtubeUrl: ""
    }
  ]
};

// 2. iPay Guides (Dịch vụ Ngân hàng điện tử iPay)
const ipayGuides = [
  {
    id: "ipay-1",
    title: "Hướng dẫn cài đặt và đăng nhập ứng dụng VietinBank iPay Mobile",
    description: "Các bước tải app trên iOS / Android và thực hiện đăng nhập tài khoản lần đầu",
    youtubeUrl: "https://youtu.be/bzKxHlFYelE?si=aàkbCuUoJwYotWCq",
    steps: [
      {
        step: 1,
        title: "Truy cập kho ứng dụng",
        text: "Truy cập App Store (Hệ điều hành iOS) hoặc CH Play (Hệ điều hành Android)",
        imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/cai%20dat%20va%20dang%20nhap%20ipay.jpg"
      },
      {
        step: 2,
        title: "Tìm kiếm & Tải ứng dụng",
        text: "Tìm kiếm từ khóa 'VietinBank iPay Mobile', chọn ứng dụng chính thức và bấm Cài đặt.",
        imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/cai%20dat%20va%20dang%20nhap%20ipay.jpg"
      },
      {
        step: 3,
        title: "Đăng nhập và đổi mật khẩu",
        text: "Mở ứng dụng, sử dụng tên đăng nhập và mật khẩu do VietinBank cung cấp. Nhập mã OTP SMS và đổi mật khẩu mới trong lần đăng nhập đầu tiên.",
        imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/cai%20dat%20va%20dang%20nhap%20ipay.jpg"
      }
    ]
  },
  {
    id: "ipay-2",
    title: "Hướng dẫn mở tài khoản thanh toán và thẻ bằng CCCD gắn chip",
    description: "Đăng ký mở tài khoản 100% online bằng eKYC và căn cước công dân gắn chip",
    youtubeUrl: "https://youtu.be/GlDbmqzf9mQ?si=DkiXBSE5oCRbbnrg",
    steps: [
      {
        step: 1,
        title: "Khởi động đăng ký",
        text: "Mở iPay Mobile -> Chọn 'Tạo tài khoản ngay' -> 'Quý khách chưa có thông tin tại VietinBank' -> 'Tài khoản cá nhân'",
        imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/mo%20tai%20khoan%20thanh%20toan%20va%20the%20bang%20CCCD%20gan%20Chip.jpg"
      },
      {
        step: 2,
        title: "Xác thực số điện thoại & OTP",
        text: "Nhập số điện thoại của Quý khách và điền mã xác thực OTP gửi về SMS.",
        imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/mo%20tai%20khoan%20thanh%20toan%20va%20the%20bang%20CCCD%20gan%20Chip.jpg"
      },
      {
        step: 3,
        title: "Quét CCCD & eKYC khuôn mặt",
        text: "Quét mã QR trên CCCD gắn chip, chụp ảnh khuôn mặt và quét chip NFC ở mặt lưng điện thoại.",
        imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/mo%20tai%20khoan%20thanh%20toan%20va%20the%20bang%20CCCD%20gan%20Chip.jpg"
      },
      {
        step: 4,
        title: "Xác nhận thông tin & Hoàn tất",
        text: "Kiểm tra thông tin cá nhân, chọn tài khoản số đẹp/chi nhánh quản lý, ký hợp đồng điện tử và nhận mật khẩu qua SMS.",
        imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/mo%20tai%20khoan%20thanh%20toan%20va%20the%20bang%20CCCD%20gan%20Chip.jpg"
      }
    ]
  },
  {
    id: "ipay-3",
    title: "Hướng dẫn thay đổi cập nhật sinh trắc học trên VietinBank iPay Mobile",
    description: "Cập nhật dữ liệu khuôn mặt và chip CCCD theo Quyết định 2345/QĐ-NHNN",
    youtubeUrl: "https://youtu.be/9yYn3SbMT9A?si=wPn_PQTREJqLn3Re",
    steps: [
      {
        step: 1,
        title: "Đăng nhập và vào Cài đặt FacePay",
        text: "Đăng nhập app iPay -> Chọn Avatar / Profile cá nhân -> Chọn 'Cài đặt Facepay'",
        imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/Thay%20doi%20sinh%20trac%20hoc.jpg"
      },
      {
        step: 2,
        title: "Chụp ảnh CCCD & Khuôn mặt",
        text: "Chụp rõ nét mặt trước, mặt sau thẻ CCCD gắn chip và quay quét khuôn mặt theo chuyển động hướng dẫn.",
        imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/Thay%20doi%20sinh%20trac%20hoc.jpg"
      },
      {
        step: 3,
        title: "Đọc chip NFC trên CCCD",
        text: "Áp sát thẻ CCCD vào lưng điện thoại (vùng ăng-ten NFC), giữ yên khi máy rung cho tới khi đọc đủ 100%.",
        imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/Thay%20doi%20sinh%20trac%20hoc.jpg"
      },
      {
        step: 4,
        title: "Lưu thông tin thành công",
        text: "Bấm 'Đăng ký sinh trắc học & cập nhật hồ sơ' để hoàn tất quá trình xác thực.",
        imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/Thay%20doi%20sinh%20trac%20hoc.jpg"
      }
    ]
  },
  {
    id: "ipay-4",
    title: "Hướng dẫn cấp lại mật khẩu đăng nhập trên VietinBank iPay Mobile",
    description: "Chủ động lấy lại mật khẩu nhanh chóng qua nhận diện sinh trắc học hoặc thông tin thẻ",
    youtubeUrl: "https://youtu.be/86r0pxPOzbs?si=lsu9GwtZ2x8-cko2",
    steps: [
      {
        step: 1,
        title: "Yêu cầu quên mật khẩu",
        text: "Tại màn hình đăng nhập iPay, nhấn nút 'Quên mật khẩu'.",
        imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/cap%20lai%20mat%20khau%20dang%20nhap%20ipay.jpg"
      },
      {
        step: 2,
        title: "Nhập thông tin xác thực OTP",
        text: "Điền Tên đăng nhập, Số điện thoại đã đăng ký và nhập mã xác thực OTP gửi về điện thoại.",
        imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/cap%20lai%20mat%20khau%20dang%20nhap%20ipay.jpg"
      },
      {
        step: 3,
        title: "Xác thực danh tính",
        text: "Chọn xác thực bằng Facepay/Sinh trắc học hoặc thông tin 8 số cuối thẻ ngân hàng / chụp CCCD quét chip NFC.",
        imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/cap%20lai%20mat%20khau%20dang%20nhap%20ipay.jpg"
      },
      {
        step: 4,
        title: "Đăng nhập và thiết lập mật khẩu mới",
        text: "Nhận mật khẩu cấp tạm thời qua SMS, đăng nhập lại và thiết lập mật khẩu bảo mật mới.",
        imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/cap%20lai%20mat%20khau%20dang%20nhap%20ipay.jpg"
      }
    ]
  },
  {
    id: "ipay-5",
    title: "Hướng dẫn sử dụng giải pháp quản lý bán hàng iShop Pro trên website",
    description: "Giải pháp quản lý cửa hàng, đơn hàng và xuất hóa đơn điện tử cho hộ kinh doanh",
    youtubeUrl: "https://youtu.be/5ysIB963vTU?si=Lf1lsfMt_OUcCpQa",
    steps: [
      {
        step: 1,
        title: "Tổng quan giải pháp iShop Pro",
        text: "Quản lý chuỗi cửa hàng, quản lý đơn hàng - kho hàng tập trung và kết nối thanh toán VietinBank thuận tiện.",
        imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/ishop%20pro.jpg"
      },
      {
        step: 2,
        title: "Tuân thủ hóa đơn điện tử",
        text: "Hỗ trợ xuất hóa đơn điện tử khởi tạo từ máy tính tiền đúng chuẩn quy định thuế cho hộ kinh doanh.",
        imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/ishop%20pro.jpg"
      }
    ]
  },
  {
    id: "ipay-6",
    title: "Hướng dẫn sử dụng 2 gói tiện ích tài chính V-plus và V-Advance",
    description: "Hệ sinh thái đặc quyền tài chính, ưu đãi hoàn tiền, phòng chờ thương gia sân bay và quà tặng VIP",
    youtubeUrl: "https://youtu.be/S8UgqRucmBw?si=l00Ncb2u81bLK6eé",
    steps: [
      {
        step: 1,
        title: "Gói V-Plus (20.000 VND/tháng)",
        text: "Ưu đãi lãi suất tiết kiệm & đầu tư, hoàn tiền chi tiêu thẻ đến 600.000 VNĐ/tháng, miễn phí thường niên thẻ trọn đời, tặng tài khoản số đẹp 10 triệu đồng.",
        imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/2%20goi%20tai%20chinh.jpg"
      },
      {
        step: 2,
        title: "Gói V-Advance (1.000.000 VND/năm)",
        text: "Đặc quyền phòng chờ sân bay hạng thương gia, Hotline VIP và luồng phục vụ ưu tiên tại quầy, tặng tài khoản số đẹp 50 triệu đồng cùng hệ sinh thái Lifestyle đẳng cấp.",
        imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/2%20goi%20tai%20chinh.jpg"
      }
    ]
  }
];

// 3. eFast Guides (Dành cho KHDN)
const efastGuides = [
  {
    id: "efast-1",
    title: "Hướng dẫn Mở tài khoản thanh toán dành cho KHDN mới",
    description: "Quy trình 22 bước mở tài khoản thanh toán Doanh nghiệp Online trên eFAST One",
    youtubeUrl: "https://youtu.be/e3xdHy-8e8k",
    steps: [
      {
        step: 0,
        text: "Bước 0: Hồ sơ cần chuẩn bị & Điều kiện mở Tài khoản thanh toán Doanh nghiệp",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/1.0.jpg"
      },
      {
        step: 1,
        text: "Bước 1: Tải ứng dụng VietinBank eFAST trên App Store/CH Play hoặc quét QR tại địa chỉ efast@vietinbank.vn để cài app.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/1.1.jpg"
      },
      {
        step: 2,
        text: "Bước 2: Tại màn hình nhập, chọn 'Mở TKTT Online', sau đó nhập mã số doanh nghiệp, số điện thoại và email của người khai báo.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/1.2.jpg"
      },
      {
        step: 3,
        text: "Bước 3: Xác thực ĐKKD - Chụp hoặc upload giấy ĐKKD bằng camera, file PDF, hoặc chọn ảnh sẵn có.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/1.3.jpg"
      },
      {
        step: 4,
        text: "Bước 4: Xác nhận thông tin OCR từ ĐKKD, kiểm tra và bổ sung doanh thu thuần, mã ngành, mã số thuế.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/1.4.jpg"
      },
      {
        step: 5,
        text: "Bước 5: Upload file điều lệ công ty định dạng PDF tối đa 5MB (DNTN không bắt buộc).",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/1.5.jpg"
      },
      {
        step: 6,
        text: "Bước 6: Khai báo thông tin KTT/người phụ trách kế toán (chọn có hoặc không có KTT).",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/1.6.jpg"
      },
      {
        step: 7,
        text: "Bước 7: Trường hợp có KTT, chọn chụp CCCD quét NFC hoặc nhập thông tin người dùng.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/1.7.jpg"
      },
      {
        step: 8,
        text: "Bước 8: Upload quyết định bổ nhiệm KTT và nhập đầy đủ thông tin trên màn hình.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/1.8.jpg"
      },
      {
        step: 9,
        text: "Bước 9: Chụp 2 mặt CCCD, xác nhận ảnh hợp lệ và thực hiện quét NFC.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/1.9.jpg"
      },
      {
        step: 10,
        text: "Bước 10: Xác thực thông tin KTT, upload giấy bổ nhiệm bản gốc và bổ sung số quyết định, ngày bổ nhiệm.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/1.10.jpg"
      },
      {
        step: 11,
        text: "Bước 11: Chọn tài khoản thường hoặc tài khoản số đẹp theo danh sách đề xuất.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/1.11.jpg"
      },
      {
        step: 12,
        text: "Bước 12: Khai báo thông tin tài khoản, mục đích mở TKTT, mã cán bộ và chi nhánh mở tài khoản.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/1.12.jpg"
      },
      {
        step: 13,
        text: "Bước 13: Lựa chọn hình thức nhận thông báo biến động số dư qua OTT hoặc SMS.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/1.13.jpg"
      },
      {
        step: 14,
        text: "Bước 14: Cài đặt số điện thoại nhận SMS biến động số dư.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/1.14.jpg"
      },
      {
        step: 15,
        text: "Bước 15: Chọn mô hình duyệt Internet Banking (1 tạo điện - 1 duyệt hoặc 1 tạo - 1 kiểm soát - 1 duyệt).",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/1.15.jpg"
      },
      {
        step: 16,
        text: "Bước 16: Rà soát hợp đồng điện tử và xác nhận thông tin chính xác.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/1.16.jpg"
      },
      {
        step: 17,
        text: "Bước 17: Chọn xác thực ngay hoặc xác thực sau đối với người đại diện theo pháp luật.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/1.17.jpg"
      },
      {
        step: 18,
        text: "Bước 18: Đại diện pháp luật chụp CCCD gắn chip, quét NFC và xác thực khuôn mặt sinh trắc học.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/1.18.jpg"
      },
      {
        step: 19,
        text: "Bước 19: Ký số hợp đồng mở tài khoản qua chứng thư số công cộng FPT-CA.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/1.19.jpg"
      },
      {
        step: 20,
        text: "Bước 20: Nhập OTP ký số và hoàn thành, tài khoản kích hoạt trong 2 ngày làm việc.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/1.20.jpg"
      },
      {
        step: 21,
        text: "Bước 21: Hướng dẫn quét QR xác thực bổ sung qua email đối với người đại diện pháp luật.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/1.21.jpg"
      },
      {
        step: 22,
        text: "Bước 22: Hướng dẫn xác thực bổ sung đối với Kế toán trưởng qua mã QR email.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/1.22.jpg"
      }
    ]
  },
  {
    id: "efast-2",
    title: "Đăng nhập ứng dụng eFAST One",
    description: "Các bước đăng nhập lần đầu, xác thực 2FA, chuyển đổi doanh nghiệp và FaceID",
    youtubeUrl: "https://youtu.be/3SvObqAz9pM",
    steps: [
      {
        step: 1,
        text: "Bước 1: Mở ứng dụng eFAST One trên thiết bị di động.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/2.1.jpg"
      },
      {
        step: 2,
        text: "Bước 2: Nhập Tên đăng nhập và mật khẩu được cấp.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/2.2.jpg"
      },
      {
        step: 3,
        text: "Bước 3: Đăng nhập lần đầu: Nhập mật khẩu tạm thời từ Email/SMS và đổi mật khẩu mới.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/2.3.jpg"
      },
      {
        step: 4,
        text: "Bước 4: Nếu quản lý nhiều công ty, chọn đúng doanh nghiệp cần giao dịch.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/2.4.jpg"
      },
      {
        step: 5,
        text: "Bước 5: Xác thực hai yếu tố 2FA qua mã bảo mật SMS hoặc Email.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/2.5.jpg"
      },
      {
        step: 6,
        text: "Bước 6: Thiết lập FaceID / Vân tay để đăng nhập nhanh chóng cho các lần sau.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/2.6.jpg"
      },
      {
        step: 7,
        text: "Bước 7: Thao tác chuyển đổi nhanh giữa các tài khoản doanh nghiệp trực thuộc.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/2.7.jpg"
      }
    ]
  },
  {
    id: "efast-3",
    title: "Cài đặt Thu thập sinh trắc học",
    description: "Đồng bộ hoặc thu thập mới CCCD gắn chip và dữ liệu sinh trắc học cho đại diện doanh nghiệp",
    youtubeUrl: "https://youtu.be/fXL2Vpkq6mY?si=sVKzcM7RnAB2L8YA",
    steps: [
      {
        step: 1,
        text: "Bước 1-5: Đồng bộ thông tin sinh trắc học đã có từ tài khoản cá nhân VietinBank sang eFAST.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/3.1.jpg"
      },
      {
        step: 2,
        text: "Xác thực OTP và kiểm tra dữ liệu giấy tờ tùy thân.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/3.2.jpg"
      },
      {
        step: 3,
        text: "Rà soát thông tin GTTT và sinh trắc học để liên kết hệ thống.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/3.3.jpg"
      },
      {
        step: 4,
        text: "Xác thực giao dịch đồng bộ trên ứng dụng.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/3.4.jpg"
      },
      {
        step: 5,
        text: "Thông báo cập nhật thành công.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/3.5.jpg"
      },
      {
        step: 6,
        text: "Bước 6-12: Trường hợp chưa có thông tin - Chụp CCCD 2 mặt và quét chip NFC trực tiếp.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/3.6.jpg"
      },
      {
        step: 7,
        text: "Chụp ảnh rõ nét CCCD gắn chip mặt trước và mặt sau.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/3.7.jpg"
      },
      {
        step: 8,
        text: "Quét chip NFC bằng mặt lưng điện thoại thông minh.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/3.8.jpg"
      },
      {
        step: 9,
        text: "Xác nhận quét NFC hoàn tất hợp lệ.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/3.9.jpg"
      },
      {
        step: 10,
        text: "Nhận diện khuôn mặt động và rà soát hồ sơ.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/3.10.jpg"
      },
      {
        step: 11,
        text: "Xác thực mã giao dịch bảo mật.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/3.11.jpg"
      },
      {
        step: 12,
        text: "Hoàn tất đăng ký sinh trắc học cho đại diện doanh nghiệp.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/3.12.jpg"
      }
    ]
  },
  {
    id: "efast-4",
    title: "Cấp lại mật khẩu & Mở khóa người dùng",
    description: "Thủ tục mở khóa tài khoản và khôi phục mật khẩu eFAST cho Admin và User",
    youtubeUrl: "https://www.youtube.com/watch?si=U3Kt0_qDjAlExeKz&v=ysg5AZBCkvA&feature=youtu.be",
    steps: [
      {
        step: 1,
        text: "Bước 1: Chọn 'Cấp lại mật khẩu / Mở khóa người dùng' tại màn hình đăng nhập.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/4.1.jpg"
      },
      {
        step: 2,
        text: "Bước 2: Nhập thông tin xác thực tài khoản và mã doanh nghiệp.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/4.2.jpg"
      },
      {
        step: 3,
        text: "Bước 3: Chọn phương thức cấp lại mật khẩu và gửi phê duyệt tới User Admin.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/4.3.jpg"
      },
      {
        step: 4,
        text: "Bước 4: Đối với User Admin đã đăng ký sinh trắc học, chọn mở khóa trực tiếp bằng khuôn mặt.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/4.4.jpg"
      },
      {
        step: 5,
        text: "Bước 5: Xác thực sinh trắc học nhận diện khuôn mặt tức thì.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/4.5.jpg"
      },
      {
        step: 6,
        text: "Bước 6: Nhận mật khẩu khôi phục gửi qua SMS/Email đã đăng ký an toàn.",
        imageUrl: "https://raw.githubusercontent.com/anphanguyen191-cell/AnhEfast/main/4.6.jpg"
      }
    ]
  }
];

// 4. Loan Documents (Danh mục hồ sơ vay)
const loanDocuments = [
  {
    id: "loan-doc-1",
    group: "Dành cho khách hàng cá nhân, hộ kinh doanh",
    title: "VAY SẢN XUẤT KINH DOANH NGẮN HẠN",
    imageUrl: "https://raw.githubusercontent.com/sheratonbl6868/SXKD/main/danh%20muc%20vay%20sxkd.png"
  },
  {
    id: "loan-doc-2",
    group: "Dành cho khách hàng cá nhân",
    title: "VAY MUA Ô TÔ",
    imageUrl: "https://raw.githubusercontent.com/sheratonbl6868/SXKD/main/danh%20muc%20vay%20oto.png"
  },
  {
    id: "loan-doc-3",
    group: "Dành cho khách hàng cá nhân",
    title: "VAY BẤT ĐỘNG SẢN",
    imageUrl: "https://raw.githubusercontent.com/sheratonbl6868/SXKD/main/danh%20muc%20vay%20BDS.png"
  },
  {
    id: "loan-doc-4",
    group: "Dành cho khách hàng doanh nghiệp",
    title: "CẤP TÍN DỤNG CHO KHÁCH HÀNG DOANH NGHIỆP",
    imageUrl: "https://raw.githubusercontent.com/sheratonbl6868/SXKD/main/danh%20muc%20KHDN.png"
  }
];

// 5. Vietin TV
const vietinTv = {
  products: [
    {
      id: "tv-1",
      title: "Hướng dẫn mở tài khoản thanh toán và thẻ bằng CCCD gắn chip",
      youtubeUrl: "https://youtu.be/v77pPUGDx1E?si=Y-XW20RSlTZU9mR1",
      thumbnail: "https://raw.githubusercontent.com/thanhvo14021994-lab/Thanh-1/main/1.1.jpg",
      steps: [
        "Bước 1: Tại trang chủ iPay, chọn Tạo tài khoản ngay → Chưa có thông tin → Tài khoản cá nhân",
        "Bước 2: Nhập số điện thoại → Nhập mã OTP xác nhận",
        "Bước 3: Chọn mã QR CCCD còn hiệu lực → Chụp ảnh khuôn mặt → Quét chip trên CCCD",
        "Bước 4: Kiểm tra thông tin, bổ sung email/địa chỉ và chọn gói dịch vụ/chi nhánh",
        "Bước 5: Xác nhận hợp đồng điện tử và nhận thông tin tài khoản đăng nhập"
      ]
    },
    {
      id: "tv-2",
      title: "Hướng dẫn mở tài khoản VietinBank qua VNeID",
      youtubeUrl: "https://youtu.be/JbNd7NcEQig?si=dgE8YavyowkrKUYm",
      thumbnail: "https://raw.githubusercontent.com/thanhvo14021994-lab/Thanh-2/main/2.1.jpg",
      steps: [
        "Bước 1: Đăng nhập app VNeID → Dịch vụ khác → Dịch vụ ngân hàng → Nhập Passcode",
        "Bước 2: Chọn Tài khoản thanh toán ngân hàng → Đăng ký tài khoản → Chọn VietinBank",
        "Bước 3: Xác nhận chia sẻ dữ liệu định danh điện tử",
        "Bước 4: Chuyển tiếp tự động sang ứng dụng VietinBank iPay Mobile",
        "Bước 5: Kích hoạt và nhận ngay số tài khoản thanh toán"
      ]
    },
    {
      id: "tv-3",
      title: "Hướng dẫn đăng ký gói V-Plus và gói V-Advance trên VietinBank iPay Mobile",
      youtubeUrl: "https://youtu.be/ReZzNKvFr98?si=0eOX3fLtjp0AI5Ce",
      thumbnail: "https://raw.githubusercontent.com/thanhvo14021994-lab/Thanh-3/main/3.1.jpg",
      steps: [
        "Bước 1: Đăng nhập iPay → Chọn biểu tượng Khách hàng thân thiết / Hệ sinh thái chủ động",
        "Bước 2: Nhấn nút Đăng ký gói ưu đãi",
        "Bước 3: Lựa chọn gói V-Plus hoặc V-Advance phù hợp nhu cầu",
        "Bước 4: Xác nhận thanh toán phí dịch vụ",
        "Bước 5: Kích hoạt đặc quyền phòng chờ sân bay, hoàn tiền và tài khoản VIP"
      ]
    },
    {
      id: "tv-4",
      title: "Hướng dẫn ký số giấy nhận nợ trên VietinBank eFAST",
      youtubeUrl: "https://youtu.be/wayuJvpnebE?si=3KTP2x546VgOHc5V",
      thumbnail: "https://raw.githubusercontent.com/thanhvo14021994-lab/Thanh-4/main/4.1.jpg",
      steps: [
        "Bước 1: User tạo điện kiểm tra thông tin trên giấy nhận nợ do VietinBank gửi",
        "Bước 2: User phê duyệt đăng nhập eFAST, kiểm tra chứng thư số và thực hiện ký số",
        "Bước 3: Phê duyệt điện tử bảo mật bằng Soft OTP"
      ]
    },
    {
      id: "tv-5",
      title: "Hướng dẫn đăng ký sử dụng chữ ký số trên VietinBank eFAST",
      youtubeUrl: "https://youtu.be/dLcT_5QWYJM?si=SCEvYr5_cNIis8oZ",
      thumbnail: "https://raw.githubusercontent.com/thanhvo14021994-lab/Thanh-5/main/5.1.jpg",
      steps: [
        "Bước 1: Quản trị viên đăng nhập eFAST",
        "Bước 2: Cắm USB Token chữ ký số và cài đặt VNPT Plugin",
        "Bước 3: Vào Quản trị viên → Đăng ký chữ ký số",
        "Bước 4: Chọn chứng thư số và gửi chi nhánh xử lý phê duyệt"
      ]
    }
  ],
  entertainment: [
    {
      id: "ent-1",
      title: "HÃY YÊU VÀ TẬN HƯỞNG NHỮNG CHUYẾN ĐI VỚI VIETINBANK IPAY MOBILE",
      youtubeUrl: "https://youtu.be/-AImWhH46XQ"
    },
    {
      id: "ent-2",
      title: "VIETINBANK IPAY MOBILE 6.0 - TẬN HƯỞNG NHỊP SỐNG SỐ",
      youtubeUrl: "https://youtu.be/TvcRHJpgSDM"
    },
    {
      id: "ent-3",
      title: "VIETINBANK PREMIUM - SỐNG TRỌN TINH HOA",
      youtubeUrl: "https://youtu.be/MgInI47h1d8"
    },
    {
      id: "ent-4",
      title: "VUI ĐÓN TRUNG THU - ÂN TÌNH GẮN KẾT CÙNG VIETINBANK",
      youtubeUrl: "https://youtu.be/3P0XJr0EWt8"
    }
  ]
};

// 6. Lookups
const lookups = {
  address2026: {
    title: "Hướng dẫn truy vấn tên khóm/ấp mới từ tháng 7/2026 trên địa bàn Bạc Liêu (cũ)",
    description: "Công cụ số tra cứu tên khóm, ấp, phường xã sau sắp xếp đơn vị hành chính tỉnh Bạc Liêu",
    url: "https://tekatoji4u.github.io/2026-Hamlet-Neighborhood-Lookup-Tool/?zarsrc=30&utm_source=zalo&utm_medium=zalo&utm_campaign=zalo"
  },
  national2025: {
    title: "Hướng dẫn truy vấn địa danh toàn quốc sau sáp nhập từ tháng 07/2025",
    description: "Tra cứu danh mục các đơn vị hành chính 63 tỉnh/thành phố trên cả nước sau sáp nhập",
    url: "https://tra-dia-chi-moi-toan-quoc-10.vercel.app",
    imageUrl: "https://raw.githubusercontent.com/tekatoji4u/Anh-BacLieu/refs/heads/main/1K39V7FNK_31QMG3.jpeg"
  }
};

const fullData = {
  ...baseData,
  featuredProducts,
  ipayGuides,
  efastGuides,
  loanDocuments,
  vietinTv,
  lookups
};

fs.writeFileSync(path.join(__dirname, '../src/data/contentData.json'), JSON.stringify(fullData, null, 2), 'utf8');
console.log('contentData.json updated successfully!');
