function DanhSachNhanVien(){
    this.list=[];

    this.themNhanVien = function(nv){
        this.list.push(nv);
    }

    //Tìm vị trí
    this._timViTri = function(tkNV){
        /**
         * Tìm vị trí mã nhân viên muốn xoá thông qua mảng list
         * 0. var index = -1
         * 1. Duyệt mảng this.list
         * 2. Nếu item.tkNV == tkNV => lấy index (i)
         * 3. splice(index, 1);
         */
         var index = -1;
         for(i=0;i<this.list.length;i++){
             if (this.list[i].tkNV==tkNV){
                 index = i;
                 break;
             }
         }
        return index;
    }

    this._xoaNhanVien = function(tkNV){
        //Xoá nhan viên
        index = this._timViTri(tkNV);
        if(index !== -1){
            this.list.splice(index, 1);
        }
    }

    this.layThongTinNhanVien = function (tkNV){
        index = this._timViTri(tkNV);
        if(index!==-1){
            return this.list[index];
        }
    }

    this.capNhatNhanVien = function(nhanVien){
        var index = this._timViTri(nhanVien.tkNV);
        if(index !== -1){
            this.list[index] = nhanVien;
        }
    }

    //this.timKiemNhanVien = function(keyWord){

    //}
}

DanhSachNhanVien.prototype.timKiemNhanVien = function(keyword){
    /**
     * 0. Tạo ra mảng tìm kiếm mangTimKiem = [];
     * 1. Duyệt mảng list
     * 2 Nếu như keyword trùng với nhanVien.tkNV
     *   => tìm thấy: thêm sinhVien vào mangTimKiem
     * 3. Trả về mangTimKiem
     */
    var mangTimKiem = [];
    for (var i=0;i<this.list.length;i++){
        if(this.list[i].tkNV.toLowerCase().indexOf(keyword.toLowerCase()) !==-1){
            mangTimKiem.push(this.list[i]);
        }
    }
    return mangTimKiem;
}


