// alert("董亚静最棒！！！");

/*
alert("董亚静最棒！！！");
alert("董亚静最棒！！！");
*/

// 全局加载执行 
window.onload = function(){
    // 
    var home = document.getElementById("home");
    home.onclick = function(){
        // alert("董亚静最棒！！！");
        var sum = 0;
        // 在此处进入断点调试模式
        // debugger;
        for(a = 0;a<=100;a++){
            sum+=a;
        }
        alert(sum);
    }
}