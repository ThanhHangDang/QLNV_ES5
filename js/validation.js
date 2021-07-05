function Validation(){
    this.ktraRong = function(input, divId, mess){
        if(input.trim()===""){
            getEle(divId).innerHTML=mess;
            getEle(divId).className="alert alert-danger";
            return false;
        }
        else{
            getEle(divId).innerHTML="";
            getEle(divId).className="";
            return true;
        }
    }

    this.ktraDoDaiKyTu = function(input, divId, mess, min, max){
        if(input.length>=min && input.length<=max){
            getEle(divId).innerHTML="";
            getEle(divId).className="";
            return true;
        }
        getEle(divId).innerHTML=mess+ "(phải từ "+min+" đến "+max+" kí tự)";
        getEle(divId).className="alert alert-danger";
        return false;
    }

    this.ktraTienLuong = function(input, divId, mess){
        if(input.length>=7){
            getEle(divId).innerHTML="";
            getEle(divId).className="";
            return true;
        }
        getEle(divId).innerHTML=mess;
        getEle(divId).className="alert alert-danger";
        return false;
    }

    this.KtraKiTuChuoi = function (input, divId, mess) {
        var letter =
            "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
            "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
            "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if (input.match(letter)) {
            getEle(divId).innerHTML = "";
            getEle(divId).className = "";
            return true;
        }

        getEle(divId).innerHTML = mess;
        getEle(divId).className = "alert alert-danger";
        return false;
    };

    this.ktraEmail = function(input, divId, mess){
        var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(input.match(letter)){
            getEle(divId).innerHTML="";
            getEle(divId).className="";
            return true;
        }
        getEle(divId).innerHTML=mess;
        getEle(divId).className="alert alert-danger";
        return false;
    }

    this.ktraPassword = function(input, divId, mess){
        var letter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
        if(input.match(letter)){
            getEle(divId).innerHTML="";
            getEle(divId).className="";
            return true;
        }
        getEle(divId).innerHTML=mess;
        getEle(divId).className="alert alert-danger";
        return false;
    }

    this.ktraNgayLam = function(input, divId, mess){
        var letter = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
        if(input.match(letter)){
            getEle(divId).innerHTML="";
            getEle(divId).className="";
            return true;
        }
        getEle(divId).innerHTML=mess;
        getEle(divId).className="alert alert-danger";
        return false;
    }

    this.ktraChucVu = function (idSelect, divId, mess) {
        if (getEle(idSelect).selectedIndex != 0) {
            getEle(divId).innerHTML = "";
            getEle(divId).className = "";
            return true;
        }

        getEle(divId).innerHTML = mess;
        getEle(divId).className = "alert alert-danger";
        return false;
    };

    this.kiemTraSo = function (input, divId, mess) {
        var letter = /^[0-9]+$/;
        if (input.match(letter)) {
            getEle(divId).innerHTML = "";
            getEle(divId).className = "";
            return true;
        }

        getEle(divId).innerHTML = mess;
        getEle(divId).className = "alert alert-danger";
        return false;
    };

    this.ktraTrungNhau = function(input, divId, mess, arr){
        /**
         * 1. Duyệt mảng arr
         * 2. Nếu như item.msNV trùng với input => trùng mã => false
         * 3. Ngược lại là ko trùng => true
         */
       
        var status =true;
        for (var i=0;i<arr.length;i++){
            if(arr[i].tkNV===input){
                status = false;
                break;
            }
        }

        if(status){
            getEle(divId).innerHTML="";
            getEle(divId).className="";
            return true;
        }
        getEle(divId).innerHTML=mess;
        getEle(divId).className="alert alert-danger";
        return false;
    }
}