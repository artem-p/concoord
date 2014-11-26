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
var btnLat = $('#latButton');
var btnLon = $('#lonButton');

var NORTH_LAT = 'N';
var SOUTH_LAT = 'S';
var WEST_LON = 'W';
var EAST_LON = 'E';

function onLoad() {
    btnClear.click(clearFields);
    btnLat.click(toggleLat);
    btnLon.click(toggleLon);

    tvGeoLatDeg.numeric();
    tvGeoLatDeg.numeric();
    tvGeoLatMin.numeric();
    tvGeolatSec.numeric();
    tvGeoLonDeg.numeric();
    tvGeoLonMin.numeric();
    tvGeoLonSec.numeric();
    tvDecLat.numeric();
    tvDecLon.numeric();
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

function toggleLat() {
    //  Переключаем широту с северной на южную и обратно
    if($.trim(btnLat.html()) == NORTH_LAT) {
        btnLat.html(SOUTH_LAT);
    } else {
        btnLat.html(NORTH_LAT);
    }
}

function toggleLon() {
    //  Переключаем долготу с западной на восточную и обратно
    if($.trim(btnLon.html()) == EAST_LON) {
        btnLon.html(WEST_LON);
    } else {
        btnLon.html(EAST_LON);
    }
}