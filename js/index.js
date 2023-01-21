// Bài tập 1
/*
  Input: Số ngày làm
  Thuật toán xử lý:
    B1: Tạo biến cho số ngày làm (soNgayLam) và tiền lương (luong)
    B2: Nhập giá trị cho soNgayLam
    B3: Sử dụng công thức: số ngày làm * lương 1 ngày (100,000)
    B4: Gán giá trị cho luong
    B5: In kết quả ra màn hình
  Output: Tiền lương       
*/ 
function tinhTienLuong() {
    var soNgayLam = document.getElementById('soNgayLam').value;
    var luong = soNgayLam*100000;
    document.getElementById('tienLuong').innerHTML = luong.toLocaleString();
}

// Bài tập 2
/*
  Input:5 số thực
  Thuật toán xử lý:
    B1: Tạo biến cho 5 số thực, tổng 5 số thực và giá trị trung bình
    B2: Nhập giá trị cho 5 số thực 
    B3: Tính tổng và gán giá trị cho tong
    B4: Sử dụng công thức: tổng của 5 số thực / 5
    B5: Gán giá trị cho giaTriTrungBinh
    B6: In giá trị ra màn hình  
  Output: Giá trị trung bình của 5 số thực
*/ 
function tinhDiemTrungBinh() {
    var soThuNhat = document.getElementById('soThuNhat').value;
    var soThuHai = document.getElementById('soThuHai').value;
    var soThuBa = document.getElementById('soThuBa').value;
    var soThuTu = document.getElementById('soThuTu').value;
    var soThuNam = document.getElementById('soThuNam').value;
    var tong = Number(soThuNhat) + Number(soThuHai) + Number(soThuBa) + Number(soThuTu) + Number(soThuNam);
    var giaTriTrungBinh = tong/5;
    document.getElementById('trungBinh').innerHTML = giaTriTrungBinh.toLocaleString();
}

// Bài tập 3
/*
  Input: Số tiền USD cần quy đổi
  Thuật toán xử lý:
    B1: Tạo biến cho số USD và số VND quy đổi
    B2: Nhập giá trị cho số USD
    B3: Sử dụng công thức: Số USD * 23500
    B4: Gán giá trị cho số VND quy đổi 
    B5: In giá trị ra màn hình
  Output: Số VND quy đổi  
*/ 
function quyDoiTien() {
    var soUsd = document.getElementById('soUsd').value;
    var quyDoi = soUsd * 23500;
    document.getElementById('soVnd').innerHTML = quyDoi.toLocaleString();
}

// Bài tập 4
/*
  Input: Chiều dài, chiều rộng
  Thuật toán xử lý:
    B1: Tạo biến cho chiều dài, chiều rộng, diện tích, chu vi
    B2: Nhập giá trị cho chiều dài và chiều rộng
    B3: Sử dụng công thức tính:
         Diện tích HCN: chiều dài * chiều rộng
         Chu vi HCN: (chiều dài + chiều rộng) * 2
    B4: Gán giá trị cho diện tích, chu vi
    B5: In kết quả ra màn hình
  Output: diện tích, chu vi       
*/
function tinhDienTich() {
    var chieuDai = document.getElementById('chieuDai').value;
    var chieuRong = document.getElementById('chieuRong').value;
    var dienTich = Number(chieuDai) * Number(chieuRong);
    document.getElementById('dienTich').innerHTML = dienTich.toLocaleString();
}
function tinhChuVi() {
    var chieuDai = document.getElementById('chieuDai').value;
    var chieuRong = document.getElementById('chieuRong').value;
    var chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;
    document.getElementById('chuVi').innerHTML = chuVi.toLocaleString();
}
// Bài tập 5
/*
  Input: Số có 2 chữ số
  Thuật toán xử lý:
    B1: Tạo biến cho số có 2 chữ số, số hàng chục, số hàng đơn vị và tổng ký số
    B2: Nhập số có 2 chữ số
    B3: Sử dụng công thức:
       Math.floor(số 2 chữ số / 10) để lấy số hàng chục
       số 2 chữ số % 10 để lấy số hàng đơn vị
    B4: Tính tổng 2 ký số và gán gia trị cho tổng 2 ký số
    B5: In giá trị ra màn hình
  Output: Tổng 2 ký số     
*/ 
function tinhTongKySo() {
    var soHaiChuSo = document.getElementById('nhapSo').value;
    var soHangChuc = Math.floor(soHaiChuSo / 10);
    var soHangDonVi = soHaiChuSo % 10;
    var tongKySo = soHangChuc + soHangDonVi;
    document.getElementById('tongKySo').innerHTML = tongKySo;
}