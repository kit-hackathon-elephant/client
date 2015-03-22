function makeJsonProfile() {
    // viewにあるフォームに対応するjson配列Keyを生成
    var key = [
        //"type_id",
        "nickname",
        "birthday",
        "free_writing",
        "facebook",
        "twitter",
        "sex_id"
    ];
    // json配列初期化
    var data = {};
    
    // textareaクラスのmy-inputIDを持つ値を上から取得
    $(".textarea#my-input").each(function(i) {
        data[key[i]] = $(this).val();
    });
    // ラジオボタンのみ別で取得
    data["sex_id"] = $(":radio:checked").val();
    postData("profiles/register/", data);
    // console.log(data);
}

function getProfile() {
    var data = getData("profiles/detail/");
    console.log(data);
    $("#nickname").append(data.body.Profile.nickname);
    $("#facebook").append(data.body.Profile.facebook);
    $("#twitter").append(data.body.Profile.twitter);
    $("#free").append(data.body.Profile.free_writing);
    $("#gender").append(data.body.Sex.name);
    $("#birthday").append(data.body.Profile.birthday);
}