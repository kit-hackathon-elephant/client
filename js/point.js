function getPoint() {
    var data = getData("points/info/");
    // console.log(data);
    $("#point").append(data.body.Point.value);
}