// watch ID が現在の `watchAcceleration` を参照
var watchID = null;

// Cordova の読み込み完了まで待機
//
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova 準備完了
//
function onDeviceReady() {
    startWatch();
}

// 加速度情報の監視を開始
//
function startWatch() {

    // 加速度情報を1秒ごとに更新
    var options = { frequency: 1000 };

    watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

// 加速度情報の監視を停止
//
function stopWatch() {
    if (watchID) {
        navigator.accelerometer.clearWatch(watchID);
        watchID = null;
    }
}

// onSuccess: 現在の加速度情報を取得
//
function onSuccess(acceleration) {
    var element = document.getElementById('accelerometer');
    //element.innerHTML = '計測を開始しました。';
    element.innerHTML = '<li class="list__header" style="margin:2px; padding:10px"><img src="image/Circ.gif" width="15px" height="15px" /> 移動を開始すると近くのユーザーを探します</li>'
    // element.innerHTML = 'X 軸における加速度: ' + acceleration.x + '<br />' +
    //                     'Y 軸における加速度: ' + acceleration.y + '<br />' +
    //                     'Z 軸における加速度: ' + acceleration.z + '<br />' +
    //                     'タイムスタンプ: '     + acceleration.timestamp + '<br />';
    if (Math.round(acceleration.z) < -4 || Matu.round(acceleration.z > 4)) {
        // オプション : 10 秒ごとに更新結果を取得できない場合、エラーを投げます。
        navigator.geolocation.getCurrentPosition(geoOnSuccess, geoOnError);
    }
}

// onError: 加速度情報の取得に失敗
//
function onError() {
    alert('エラーが発生しました。');
}


var geoOnSuccess = function(position) {
    var data = {};
    data["longitude"] = position.coords.longitude;
    data["latitude"] = position.coords.latitude;
    postData("locations/recode/", data);
    console.log('Latitude: ' + position.coords.latitude  + '\n' + 'Longitude: ' + position.coords.longitude + '\n');
};

function geoOnError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}
