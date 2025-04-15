var video = document.getElementById('player1');
var slider = document.getElementById('slider');
var button_mute = document.getElementById('mute');

window.addEventListener("load",
    function () {
        console.log("Good job opening the window")
        video.setAttribute("autoplay", "false");
        video.setAttribute("looping", "false");
        video.muted = false;
    }
);

// 播放按钮
document.querySelector("#play").addEventListener("click", function () {
    video.play();

});

// 暂停按钮
document.querySelector("#pause").addEventListener("click", function () {
    video.pause();
});

// 减速按钮
document.querySelector("#slower").addEventListener("click", function () {
    var currentRate = video.playbackRate; //当前视频的播放速度
    var newRate = currentRate * 0.9
    video.playbackRate = newRate;
    console.log(newRate)
});

// 加速按钮
document.querySelector("#faster").addEventListener("click", function () {
    var currentRate = video.playbackRate;
    var newRate = currentRate / 0.9
    video.playbackRate = newRate;
    console.log(newRate)
});

// 增加10秒
document.querySelector("#skip").addEventListener("click", function () {
    var total_time = video.duration;
    var current_time = video.currentTime;

    if (current_time + 10 > total_time) {
        video.currentTime = 0;
        video.play();
    } else {
        video.currentTime = current_time + 10;
    }

    console.log(video.currentTime)
});

// 静音按钮
document.querySelector("#mute").addEventListener("click", function () {
    // video.muted = true;
    // this.textContent = "Unmute";
    // slider.value=0

    if (video.muted == true) {
         video.muted=false;
         this.textContent = "Mute";
     } else {
         video.muted = true;
         this.textContent = "Unmute";
     }

});

// 音量滑块
document.querySelector("#slider").addEventListener("change", function () {
    //if (this.value > 0) {
        //video.muted = false;   //取消静音状态
        //button_mute.textContent = "Mute"
    //}
    video.volume = this.value / 100;
    // video.volume = slider.value / 100;
    console.log(video.volume)
    document.getElementById("volume").textContent = this.value + "%";
});

// 复古和原始样式
document.querySelector("#vintage").addEventListener("click", function () {
    video.classList.add("oldSchool");

});

document.querySelector("#orig").addEventListener("click", function () {
    video.classList.remove("oldSchool");
    console.log("Play Video");
});


