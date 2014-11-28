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

tvDmsLatDeg.on('input', null, {'min':DMS_LAT_DEG_MIN, 'max': DMS_LAT_DEG_MAX}, highlightWrongCoord

);


function highlightWrongCoord(event) {

      //Подсвечиваем красным неверные значения координат
    var coord = $(this).val();
    var borderVals = event.data;
    if(!isRightCoord(coord, borderVals.min, borderVals.max)) {
        //  Подсвечиваем красным
        $(this).css('color', 'red');
    } else {
        //  Убираем красный
        $(this).css('color', 'black');
    }
}

function isRightCoord(inCoord, inMinVal, inMaxVal) {
    if(inMinVal <= inCoord && inCoord <= inMaxVal) {
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