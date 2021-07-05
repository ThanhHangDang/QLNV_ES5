//tạo lớp đối tượng nhân viên
function NhanVien(_tkNV, _hoTen, _email, _password, _ngayLam, _luongCB, _chucVu, _gioLam){
    //hàm khởi tạo những thuôc tính và phương thức
    this.tkNV = _tkNV;
    this.hoTen = _hoTen;
    this.email = _email;
    this.password = _password;
    this.ngayLam = _ngayLam;
    this.luongCB = _luongCB;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;
    this.tongLuong = 0;
    this.xepLoai = "";

    this.tinhTongluong = function(){
        if(getEle("chucvu").selectedIndex==1){
            this.tongLuong=(parseFloat(this.luongCB))*3;
        }
        else if(getEle("chucvu").selectedIndex==2){
            this.tongLuong=(parseFloat(this.luongCB))*2;
        }else if(getEle("chucvu").selectedIndex==3){
            this.tongLuong=(parseFloat(this.luongCB));
        }
        return this.tongLuong;
    };

    this.danhGia = function(){
        if(parseFloat(this.gioLam)>=192){
            this.xepLoai="Nhân viên xuất sắc";
        }else if(parseFloat(this.gioLam)>=176){
            this.xepLoai="Nhân viên giỏi";
        }else if(parseFloat(this.gioLam)>=160){
            this.xepLoai="Nhân viên khá";
        }else{
            this.xepLoai="Nhân viên trung bình";
        }
        return this.xepLoai;
    };
}
