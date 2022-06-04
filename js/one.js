// 查找显示隐藏对应的div
var color = document.getElementsByClassName('second');
// 1.找到点击的a  给每一个a加一个下标
var a = document.getElementsByClassName('span_');

for (var i = 0; i < a.length; i++) {
    // 此时 每一个a 标签 对应有一个下标 0 1
    a[i].setAttribute('index', i);

    // 当前a被点击时
    a[i].onclick = function () {
        //拿到被点击a的index 值 0  或者1 
        var index = this.getAttribute('index');
        console.log(index);
        // 使用排他法  选中的内容 添加一个active属性 未选中的去除class属性
        for (var j = 0; j < a.length; j++) {
            a[j].id = '';

            a[index].id = 'active';
        }

        // 再次使用排他法  把对应a 对应的html进行显示隐藏
        for (var k = 0; k < color.length; k++) {
            color[k].style.display = 'none';
            color[index].style.display = 'block';
        }
    }
}