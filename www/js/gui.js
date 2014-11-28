/**
 * Created by IRAM on 29.11.2014.
 */
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

function prepareGui() {
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
}

tvDmsLatDeg.on('input', function(){
    var dmsLatDeg = $(this).val();
    if(!isRightDmsLatDeg(dmsLatDeg)) {
        //  Подсвечиваем красным
        $(this).css('color', 'red');
    } else {
        //  Убираем красный
        $(this).css('color', 'black');
    }


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