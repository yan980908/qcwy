// / 获取验证码

function fn() {
    min = --min;
    if (min > 0) {
        regist.innerHTML = ('(' + min + '秒）重发');
    }
    if (min < 58) {
        min = 60;
        regist.innerHTML = ('发送验证码')
    }

    if (min == 58) {
        code_ = creatCode();
        creatCode();
        clearInterval(time)
    }
}
function creatCode() {
    var tableclass = document.getElementById('regist');
    var chars = ['A', 'B', 'C', 'D', 'a', 'b', 'c', 'd', '0', '1', '2', '3']; //用数组chars保存验证码里出现的字符
    var randCode = ""; //定义一个初始值为空的字符串变量为最终产生的随机验证码
    for (var i = 0; i < 4; i++) {
        //0-1的随机小数 -->  0~数组长度-1的范围   取整
        var randPosition = Math.floor(Math.random() * (chars.length - 1)); //每次生成一个随机数的位置
        randCode += chars[randPosition]; //带有随机位置作为下标，指示到当前随机产生的某个字符上，将其连接到随机验证码的后面
    }
    //循环四次后即可显示出验证码
    tableclass.innerHTML = randCode;
    return code_ = randCode;
    // var a= tableclass.value
    // console.log(a);
    // console.log(randCode);
}
// 获取倒计时
var min = 60;
var time;
var regist = document.getElementById('regist');
regist.onclick = function () {
    clearInterval(time)
    time = setInterval(fn, 1000)
}


// 判断手机号
var phone = document.getElementsByClassName('iPhone')[0];
var reg = document.getElementById('reg');
var pas1 = document.getElementById('pas1');
var pas2 = document.getElementById('pas2');
var message = document.getElementsByTagName('i')

phone.onblur = function () {
    var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    if (phone.value == '') {
        // message[0].style.display = 'block';
        message[0].innerHTML = '✖'
        // alert('输入的手机号不能位空')
        return flase;
    }
    if (!reg.test(phone.value)) {
        // message[0].style.display = 'block';
        message[0].innerHTML = '✖';
        // alert('输入的手机号为11位')
        return flase;

    }
    else {
        // message[0].style.display = 'block';
        message[0].innerHTML = '✔';
        // alert('输入的手机号正确')

        return true;
    }

}

// 验证码
reg.onblur = function () {
    if (reg.value == '') {
        message[1].innerHTML = '✖'

        return flase;
    }
    if (reg.value != regist.value) {
        message[1].innerHTML = '✖'

        return flase;

    }
    else {
        message[1].innerHTML = '✔'
        return true;

    }
}
pas1.onblur = function () {
    var reg1 = /^\d{1,6}$/;
    if (pas1.value == '') {
        message[2].innerHTML = '✖'

        return flase;
    }
    if (!reg.test(pas1.value)) {
        message[2].innerHTML = '✖'

        return flase;

    }
    else {
        // alert('验证码正确')
        message[2].innerHTML = '✔'
        return true;

    }

}
pas2.onblur = function () {
    if (pas2.value == '') {
        // alert('密码不能为空')
        message[3].innerHTML = '✖'
        return flase;
    }
    if (pas1.value != pas2.value) {
        // alert('密码格式有误')
        message[3].innerHTML = '✖'
        return flase;

    }
    else {
        // alert('验证码正确')
        message[3].innerHTML = '✔'
        return true;

    }

}


