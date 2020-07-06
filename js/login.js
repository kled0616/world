var send = document.querySelector('.send');
var Sign_Up = document.querySelector('.Sign_Up_botton');


send.addEventListener('click', singnUp, false);

Sign_Up.addEventListener('click', member_Sign_Up, false)


function singnUp(e) {
    var emailstr = document.querySelector('.account').value;
    var passwordstr = document.querySelector('.password').value;

    var account = {};
    account.email = emailstr; //帳號裡面附於一個屬性的值mail
    account.password = passwordstr;

    var xhr = new XMLHttpRequest();
    xhr.open('post', ' https://hexschool-tutorial.herokuapp.com/api/signup', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    var data = JSON.stringify(account);
    xhr.send(data);
    xhr.onload = function () {
        console.log(xhr);
        var callbackdata = JSON.parse(xhr.responseText);
        console.log(callbackdata);

        var veriStr = callbackdata.message;

        var callBackUserResult = callbackdata.success;
        if (veriStr == '帳號註冊成功') {
            alert('帳號註冊成功');
        } else if (veriStr == '此帳號已被使用') {
            alert('此帳號已被使用');
        } else {
            alert('帳號註冊失敗:C');
        }
    }
}
function member_Sign_Up(e) {
    var emailstr = document.querySelector('.Sign_Up_account').value;
    var passwordstr = document.querySelector('.Sign_Up_password').value;
    var account = {};
    account.email = emailstr; //帳號裡面附於一個屬性的值mail
    account.password = passwordstr;

    var xhr = new XMLHttpRequest();
    xhr.open('post', ' https://hexschool-tutorial.herokuapp.com/api/signin', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    var data = JSON.stringify(account);
    xhr.send(data);
    xhr.onload = function () {
        console.log(xhr);
        var callbackdata = JSON.parse(xhr.responseText);
        var callBackUserResult = callbackdata.success;
        if (callBackUserResult == true) {
            alert('登入成功');

        } else {
            alert('登入失敗');
        }
    }

}



