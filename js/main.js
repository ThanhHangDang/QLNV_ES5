//Tạo đối tượng dsnv từ lớp đối tượng DanhSachNhanVien
var dsnv= new DanhSachNhanVien();
var validation = new Validation();

function addUser(){
    console.log("Đây là addUser đã làm xong của hang1");
}

function getEle(id){
    return document.getElementById(id);
}

/**
 * lấy data từ localStorage để show ra ngoài table
 */
getLocalStogare();


/**
 * Thêm người dùng
 */
/** getEle("btnThemNV").onclick = function(){
    console.log(123);
}
*/

function layDuLieuDauVao(isAdd){
    var _tkNV=getEle("tknv").value;
    var _hoTen=getEle("name").value;
    var _email=getEle("email").value;
    var _password=getEle("password").value;
    var _ngayLam=getEle("datepicker").value;
    var _luongCB=getEle("luongCB").value;
    var _chucVu=getEle("chucvu").value;
    var _gioLam=getEle("gioLam").value;

    //isValid là true thì cho phép thêm sinh viên vào bảng
    var isValid=true;
    if(isAdd){
        isValid&=validation.ktraRong(_tkNV, "divErrTKNV","(*) Mã nhân viên không được rỗng") && validation.ktraDoDaiKyTu(_tkNV, "divErrTKNV","(*) Mã nhân viên không đúng ",4,6) && validation.ktraTrungNhau(_tkNV, "divErrTKNV","(*) Mã nhân viên đã tồn tại",dsnv.list);
    }
    
    isValid&=validation.ktraRong(_hoTen, "divErrHoTen","(*) Tên nhân viên không được rỗng") && validation.KtraKiTuChuoi(_hoTen, "divErrHoTen","(*) Tên nhân viên phải là chữ");
    isValid&=validation.ktraRong(_email, "divErrEmail","(*) Email nhân viên không được rỗng") && validation.ktraEmail(_email, "divErrEmail","(*) Email không đúng");
    isValid&=validation.ktraRong(_password, "divErrPassword","(*) Mật khẩu nhân viên không được rỗng") && validation.ktraDoDaiKyTu(_password, "divErrPassword","(*) Mật khẩu nhân viên không đúng ",6,10) && validation.ktraPassword(_password, "divErrPassword","(*) Mật khẩu phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt");
    isValid&=validation.ktraRong(_luongCB, "divErrLuongCB","(*) Lương cơ bản không được rỗng") && validation.kiemTraSo(_luongCB, "divErrLuongCB","(*) Lương cơ bản phải là số") && validation.ktraTienLuong(_luongCB, "divErrLuongCB","(*) Lương cơ bản phải lớn hơn 1 triệu");
    isValid&=validation.ktraRong(_gioLam, "divErrGioLam","(*) Giờ làm không được rỗng");
    isValid&=validation.ktraRong(_ngayLam, "divErrNgayLam","(*) Ngày làm không được rỗng") && validation.ktraNgayLam(_ngayLam, "divErrNgayLam","(*) Ngày làm không đúng dịnh dạng");
    isValid&=validation.ktraChucVu("chucvu","divErrChucVu","(*) Chọn chức vụ");
     
    //tạo đối tượng nhanVien từ lớp đới tượng NhanVien
    //từ khoá new: tạo đối tượng từ lớp đối tượng
    if(isValid){
        var nhanVien = new NhanVien(_tkNV, _hoTen, _email, _password, _ngayLam, _luongCB, _chucVu, _gioLam);
        return nhanVien;
    }
    return null;
}

/**callback function: tham số của 1 hàm, là 1 hàm khác */
getEle("btnThemNV").addEventListener("click",function(){
    var nhanVien = layDuLieuDauVao(true);
    
    //chặn trang web bị load lại trong form
    //Event.preventDefault();

    //Kiểm tra => nếu như thông tin hợp lệ => add sinh viên
    if(nhanVien){
        nhanVien.tinhTongluong();
        nhanVien.danhGia();
        dsnv.themNhanVien(nhanVien);
        taoBang(dsnv.list);

        //lưu mảng list xuống LocalStorage
        setLocalStorage();
    }
    
});

function taoBang(arr){
    //reset dữ liệu bảng tbody
    getEle("tableDanhSach").innerHTML="";

    for(var i=0;i<arr.length;i++){
        //Tạo ra dòng (tr)
        var tagTR = document.createElement("tr");

        //tạo cột (td)
        var tagTD_tkNV = document.createElement("td");
        var tagTD_HoTen = document.createElement("td");
        var tagTD_Email = document.createElement("td");
        var tagTD_NgayLam = document.createElement("td");
        var tagTD_ChucVu = document.createElement("td");
        var tagTD_TongLuong = document.createElement("td");
        var tagTD_XepLoai = document.createElement("td");
        var tagTD_Button_Edit = document.createElement("td");
        var tagTD_Button_Delete = document.createElement("td");

        //tạo nội dung cho các cột
        tagTD_tkNV.innerHTML=arr[i].tkNV;
        tagTD_HoTen.innerHTML=arr[i].hoTen;
        tagTD_Email.innerHTML=arr[i].email;
        tagTD_NgayLam.innerHTML=arr[i].ngayLam;
        tagTD_ChucVu.innerHTML=arr[i].chucVu;
        //thực thi phương thức tính tổng lương và xếp loại
        tagTD_TongLuong.innerHTML=arr[i].tongLuong;
        tagTD_XepLoai.innerHTML=arr[i].xepLoai;
        tagTD_Button_Edit.innerHTML= '<button id="a" class="btn btn-info" data-toggle="modal" data-tagert="#myModal" onclick="suaNhanVien(\''+arr[i].tkNV+'\')">Sửa</button>';
        tagTD_Button_Delete.innerHTML = '<button class="btn btn-danger" onclick="xoaNhanVien(\''+arr[i].tkNV+'\')">Xoá</button>';

        //apenChild 6 cột vào dòng
        tagTR.appendChild(tagTD_tkNV);
        tagTR.appendChild(tagTD_HoTen);
        tagTR.appendChild(tagTD_Email);
        tagTR.appendChild(tagTD_NgayLam);
        tagTR.appendChild(tagTD_ChucVu);
        tagTR.appendChild(tagTD_TongLuong);
        tagTR.appendChild(tagTD_XepLoai);
        tagTR.appendChild(tagTD_Button_Edit);
        tagTR.appendChild(tagTD_Button_Delete);

        //appendChild dòng vào tbody
        getEle("tableDanhSach").appendChild(tagTR);
    }
}

//Xoá nhân viên
function xoaNhanVien(tkNV){
    dsnv._xoaNhanVien(tkNV);
    taoBang(dsnv.list);
    setLocalStorage();
}

//Sửa sinh viên
function suaNhanVien(tkNV){
    var nhanVien = dsnv.layThongTinNhanVien(tkNV);

    //mở lại nút cấp nhật
    getEle("btnCapNhat").style.display="inline-block";
    getEle("btnThemNV").style.display="none";
    getEle("btnThem").innerHTML="Sửa nhân viên";
    
   

    // dom tới các thẻ input show ra value
    getEle("tknv").value = nhanVien.tkNV;
    getEle("tknv").disabled = true;
    getEle("name").value = nhanVien.hoTen;
    getEle("email").value = nhanVien.email;
    getEle("password").value = nhanVien.passWord;
    getEle("datepicker").value = nhanVien.ngayLam;
    getEle("luongCB").value = nhanVien.luongCB;
    getEle("chucvu").value = nhanVien.chucVu;
    getEle("gioLam").value = nhanVien.gioLam;
}

//cập nhật nhân viên
getEle("btnCapNhat").addEventListener("click",function(){
    /**
     * lấy thông tin mới nhất từ các thẻ input
     */
    var nhanVien = layDuLieuDauVao(false);
    nhanVien.tinhTongluong();
    nhanVien.danhGia();
    dsnv.capNhatNhanVien(nhanVien);
    taoBang(dsnv.list);
    setLocalStorage();
})

/**
 * Reset Form
 */
getEle("btnReset").addEventListener("click", function(){
    //Dom tới các thẻ input gán value lại là rỗng
    getEle("formNV").reset();
    getEle("btnThem").innerHTML="Thêm nhân viên";
    getEle("btnCapNhat").style.display="none";
    getEle("btnThemNV").style.display="inline-block";
    getEle("tknv").disabled = false;
})

/**
 * tìm kiếm nhân viên
 */
getEle("searchName").addEventListener("keyup", function(){
    var keyWord = getEle("searchName").value;
    var mangTimKiem = dsnv.timKiemNhanVien(keyWord);
    taoBang(mangTimKiem);
})

function setLocalStorage(){
    // chuyển kiểu JSON sang kiểu String (JSON.stringify)
    var arrString = JSON.stringify(dsnv.list);
    localStorage.setItem("DSNV", arrString);
}

function getLocalStogare(){
    if(localStorage.getItem("DSNV")){
        // chuyển từ kiểu string sang kiểu JSON
        var data = localStorage.getItem("DSNV");
        dsnv.list = JSON.parse(data);
        taoBang(dsnv.list);
    }
    
}



