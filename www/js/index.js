// Wait for device API libraries to load
//
var btnClear = $('#btnClear');
var tvDmsLatDeg = $('#geoLatDeg');
var tvDmsLatMin = $('#geoLatMin');
var tvDmslatSec = $('#geoLatSec');
var tvDmsLonDeg = $('#geoLonDeg');
var tvDmsLonMin = $('#geoLonMin');
var tvDmsLonSec = $('#geoLonSec');
var tvDecLat = $('#decLat');
var tvDecLon = $('#decLon');
var btnLat = $('#latButton');
var btnLon = $('#lonButton');

var NORTH_LAT = 'N';
var SOUTH_LAT = 'S';
var WEST_LON = 'W';
var EAST_LON = 'E';

var coordModel = {
    dmsLatDeg: ko.observable(),
    dmsLatMin: ko.observable(),
    dmsLatSec: ko.observable(),
    dmsLonDeg: ko.observable(),
    dmsLonMin: ko.observable(),
    dmsLonSec: ko.observable(),
    decLat: ko.observable(),
    decLon: ko.observable()
}

ko.applyBindings(coordModel);

function onLoad() {
    btnClear.click(clearFields);
    btnLat.click(toggleLat);
    btnLon.click(toggleLon);

    tvDmsLatDeg.numeric();
    tvDmsLatMin.numeric();
    tvDmslatSec.numeric();
    tvDmsLonDeg.numeric();
    tvDmsLonMin.numeric();
    tvDmsLonSec.numeric();
    tvDecLat.numeric();
    tvDecLon.numeric();
    document.addEventListener("deviceready", onDeviceReady, false);
}

// device APIs are available
//
function onDeviceReady() {

    //alert('ready');
}

tvDmsLatDeg.on('input', function(){
    console.log('input');
});

function clearFields() {
    //  Сбрасываем все поля
    coordModel.dmsLatDeg('');
    coordModel.dmsLatMin('');
    coordModel.dmsLatSec('');
    coordModel.dmsLonDeg('');
    coordModel.dmsLonMin('');
    coordModel.dmsLonSec('');
    coordModel.decLat('');
    coordModel.decLon('');

    //tvGeoLatDeg.val('');
    //tvGeoLatMin.val('');
    //tvGeolatSec.val('');
    //tvGeoLonDeg.val('');
    //tvGeoLonMin.val('');
    //tvGeoLonSec.val('');
    //tvDecLat.val('');
    //tvDecLon.val('');
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