function fetchTextArea(){
    var data = {};
    data.body = document.getElementById("message-body").value;
    data.to_user_id = "2bc0a76f392977f86cc65af41529f89b86afaaaa5808a4fbfc3f8c6a637f405b";
    
    var result = postData("messages/send/", data);
    console.log(result);
    return true;
}
function fetchMessage() {
   
    var data ={};
    
    var message = getData('messages/fetch/');
    console.log(message);
    
    $("#message-list").append(data.body);
    
    
    return true;
}