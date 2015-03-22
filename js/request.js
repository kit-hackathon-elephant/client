function getData(uri) {
    var result;
    $.ajax({
       type: "GET",
       url: host + uri + getUuid(),
       dataType: "json",
       async: false,
       success: function(data) {
           // console.log(data);
           result = data;
       },
       error: function(data) {
           console.log(data);
           result = null;
       }
    });
    return result;
}

function postData(uri, json) {
    $.ajax({
        type: "POST",
        url: host + uri + getUuid(),
        dataType: "JSON",
        data: JSON.stringify(json),
        success: function(data) {
            result = data;
            //console.log(data);
            // return data;
        },
        error: function(data) {
            console.log(data);
            result = null;
        }
    });
    return result;
}