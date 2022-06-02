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


