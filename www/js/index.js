// Wait for device API libraries to load
//
var btnClear = $('#btnClear');
var tvGeoLatDeg = $('#geoLatDeg');
var tvGeoLatMin = $('#geoLatMin');
var tvGeolatSec = $('#geoLatSec');
var tvGeoLonDeg = $('#geoLonDeg');
var tvGeoLonMin = $('#geoLonMin');
var tvGeoLonSec = $('#geoLonSec');
var tvDecLat = $('#decLat');
var tvDecLon = $('#decLon');

function onLoad() {
    btnClear.click(clearFields);
    document.addEventListener("deviceready", onDeviceReady, false);
}

// device APIs are available
//
function onDeviceReady() {

    //alert('ready');
}

function clearFields() {
    //  Сбрасываем все поля
    tvGeoLatDeg.val('');
    tvGeoLatMin.val('');
    tvGeolatSec.val('');
    tvGeoLonDeg.val('');
    tvGeoLonMin.val('');
    tvGeoLonSec.val('');
    tvDecLat.val('');
    tvDecLon.val('');
}