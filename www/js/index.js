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

var DMS_LAT_DEG_MAX = 90;
var DMS_LAT_DEG_MIN = -90;
var DMS_LON_DEG_MAX = 180;
var DMS_LON_DEG_MIN = -180;

var DMS_MIN_SEC_MIN = 0;
var DMS_MIN_SEC_MAX = 60;

var DEC_LAT_MIN = DMS_LAT_DEG_MIN;
var DEC_LAT_MAX = DMS_LAT_DEG_MAX;
var DEC_LON_MIN = DMS_LON_DEG_MIN;
var DEC_LON_MAX = DMS_LON_DEG_MAX;

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

function isRightDmsLatDeg(inDmsLatDeg) {
    //  Проверяем входное значение градуса широты ГМС
    if(DMS_LAT_DEG_MIN <= inDmsLatDeg && inDmsLatDeg <=DMS_LAT_DEG_MAX) {
        return true;
    } else {
        return false;
    }


}

function isRightDmsLonDeg(inDmsLonDeg) {

    if(DMS_LON_DEG_MIN <= inDmsLonDeg && inDmsLonDeg <= DMS_LON_DEG_MAX) {
        return true;
    } else {
        return false;
    }


}

function isRightDmsMinuteSecond(inDmsMinuteSecond) {
    if(DMS_MIN_SEC_MIN <= inDmsMinuteSecond && inDmsMinuteSecond <= DMS_MIN_SEC_MAX) {
        return true;
    } else {
        return false;
    }
}

function isRightDecLat(inDecLat) {
    if(DEC_LAT_MIN <= inDecLat && inDecLat<=DEC_LAT_MAX) {
        return true;
    } else {
        return false;
    }
}

function isRightDecLon(inDecLon) {
    if(DEC_LON_MIN <= inDecLon && inDecLon <= DEC_LON_MAX) {
        return true;
    } else {
        return false;
    }
}

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