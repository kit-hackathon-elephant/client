// アプリの認証IDを取得
function init() {
    $.ajax({
        type: "GET",
        url: host + "/users/signup",
        dataType: "json",
        success: function(data) {
            //alert("success");
            var uuid = data.body.uuid;
            // console.log(uuid);
            // window.localStorage.clear();
            
            // ローカルストレージに取得したuuidを保存
            var value = window.localStorage.getItem("key");
            if (value == null) {
                window.localStorage.setItem("key", uuid);
                value = window.localStorage.getItem("key");
            }
            // console.log(value);
        },
        error: function() {
            alert("error");
        }
    });
}

// uuidを呼び出す関数
function getUuid() {
    return window.localStorage.getItem("key");
}element.innerHTML = 'X 軸における加速度: ' + Math.round(acceleration.x) + '<br />' +
                        'Y 軸における加速度: ' + Math.round(acceleration.y) + '<br />' +
                        'Z 軸における加速度: ' + Math.round(acceleration.z) + '<br />' +
                        'タイムスタンプ: '     + acceleration.timestamp + '<br />';
    var xArray = [];
    xArray.push(dataX);
}

// onError: 加速度情報の取得に失敗
//
function onError() {
    alert('エラーが発生しました。');
}