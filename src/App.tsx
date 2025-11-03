import {useState} from "react";
import "./App.css";
import ProductForm from "./components/ProductForm";
import ProductList, {SanPham} from "./components/ProductList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductDetail from "./components/ProductDetail";

function App() {
  const [danhSachSanPham, setDanhSachSanPham] = useState<SanPham[]>([
    {
    id: "sp001",
    ten: "Tai nghe Bluetooth Sony WH-CH510",
    danhMuc: "Điện tử",
    gia: 790000,
    soLuong: 25,
    moTa: "Tai nghe không dây, pin 35 giờ, âm thanh rõ nét"
  },
  {
    id: "sp002",
    ten: "Áo khoác gió nam Adidas",
    danhMuc: "Quần áo",
    gia: 1290000,
    soLuong: 15,
    moTa: "Áo khoác chống nước, thiết kế thể thao"
  },
  {
    id: "sp003",
    ten: "Bánh quy Oreo vị vani",
    danhMuc: "Đồ ăn",
    gia: 28000,
    soLuong: 100,
    moTa: "Bánh quy giòn, nhân kem vani, gói 133g"
  },
  {
    id: "sp004",
    ten: "Sách “Đắc Nhân Tâm”",
    danhMuc: "Sách",
    gia: 89000,
    soLuong: 40,
    moTa: "Cuốn sách kinh điển về nghệ thuật giao tiếp"
  },
  {
    id: "sp005",
    ten: "Bình giữ nhiệt Lock&Lock 500ml",
    danhMuc: "Khác",
    gia: 215000,
    soLuong: 30,
    moTa: "Giữ nóng/lạnh đến 8 giờ, thiết kế nhỏ gọn"
  },
  {
    id: "sp006",
    ten: "Điện thoại Samsung Galaxy A15",
    danhMuc: "Điện tử",
    gia: 3990000,
    soLuong: 10,
    moTa: "Màn hình AMOLED, pin 5000mAh, camera 50MP"
  },
  {
    id: "sp007",
    ten: "Quần jeans nữ Levi’s 711",
    danhMuc: "Quần áo",
    gia: 899000,
    soLuong: 20,
    moTa: "Form ôm, chất liệu denim cao cấp"
  },
  {
    id: "sp008",
    ten: "Mì ly Hảo Hảo tôm chua cay",
    danhMuc: "Đồ ăn",
    gia: 6500,
    soLuong: 200,
    moTa: "Mì ăn liền, hương vị đậm đà, tiện lợi"
  },
  {
    id: "sp009",
    ten: "Sách “Nhà giả kim”",
    danhMuc: "Sách",
    gia: 99000,
    soLuong: 35,
    moTa: "Tác phẩm nổi tiếng của Paulo Coelho"
  },
  {
    id: "sp010",
    ten: "Balo laptop chống nước 15.6 inch",
    danhMuc: "Khác",
    gia: 320000,
    soLuong: 18,
    moTa: "Thiết kế thời trang, nhiều ngăn tiện dụng"
  }
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              danhSachSanPham={danhSachSanPham}
              setDanhSachSanPham={setDanhSachSanPham}
            />
          }
        />
        <Route
          path="/add"
          element={
            <ProductForm
              danhSachSanPham={danhSachSanPham}
              setDanhSachSanPham={setDanhSachSanPham}
            />
          }
        />
        <Route
          path="/products/:id"
          element={
            <ProductDetail
              danhSachSanPham={danhSachSanPham}
              setDanhSachSanPham={setDanhSachSanPham}
            />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <ProductDetail
              danhSachSanPham={danhSachSanPham}
              setDanhSachSanPham={setDanhSachSanPham}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
