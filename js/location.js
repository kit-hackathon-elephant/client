var onSuccess = function(position) {
    console.log('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n'// +
          // 'Altitude: '          + position.coords.altitude          + '\n' +
          // 'Accuracy: '          + position.coords.accuracy          + '\n' +
          // 'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          // 'Heading: '           + position.coords.heading           + '\n' +
          // 'Speed: '             + position.coords.speed             + '\n' +
          // 'Timestamp: '         + position.timestamp                + '\n'
        );
};

// onError 時のコールバックは、PositionError オブジェクトを受け取ります。
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}