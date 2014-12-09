/**
 * Created by IRAM on 29.11.2014.
 */
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

function dmsToDec() {
    //  Читаем данные из модели
    var dmsLatDeg = coordModel.dmsLatDeg();
    var dmsLatMin = coordModel.dmsLatMin();
    var dmsLatSec = coordModel.dmsLatSec();
    var dmsLonDeg = coordModel.dmsLonDeg();
    var dmsLonMin = coordModel.dmsLonMin();
    var dmsLonSec = coordModel.dmsLonSec();

    var latChar = $.trim(btnLat.html());
    var lonChar = $.trim(btnLon.html());

    //  Формируем строку нужного формата для преобразования
    var sDmsLat = dmsLatDeg + "° " + dmsLatMin + "' " + dmsLatSec + '" ' + latChar;
    var sDmsLon = dmsLonDeg + "° " + dmsLonMin + "' " + dmsLonSec + '" ' + lonChar;

    //  Преобразуем
    var decLat = geolib.sexagesimal2decimal(sDmsLat);
    var decLon = geolib.sexagesimal2decimal(sDmsLon);

    //  Обновляем модель
    coordModel.decLat(decLat);
    coordModel.decLon(decLon);

}

function decToDms() {
    //  Читаем данные из модели
    var decLat = coordModel.decLat();
    var decLon = coordModel.decLon();

    //  Преобразуем
    var sDmsLat = geolib.decimal2sexagesimal(decLat);
    var sDmsLon = geolib.decimal2sexagesimal(decLon);

    var dmsLat = parseDmsString(sDmsLat);
    var dmsLon = parseDmsString(sDmsLon);

    //  Заполняем модель значениями
    coordModel.dmsLatDeg(dmsLat.deg);
    coordModel.dmsLatMin(dmsLat.min);
    coordModel.dmsLatSec(dmsLat.sec);
    coordModel.dmsLonDeg(dmsLon.deg);
    coordModel.dmsLonMin(dmsLon.min);
    coordModel.dmsLonSec(dmsLon.sec);

    //  Получаем символьное обозначение (N, S, W, E)
    var cLat, cLon;
    decLat > 0 ? cLat = "N" : cLat = "S";
    decLon > 0 ? cLon = "E" : cLon = "W";
    btnLat.html(cLat);
    btnLon.html(cLon);
}

function parseDmsString(inDmsString) {
    //  Разбираем строку вида 12° 15' 36"
    var dmsArray = inDmsString.split((/[°'"]/));
    var dms = {};
    dms.deg = dmsArray[0].indexOf('NaN') == -1 ? dmsArray[0] : 0;
    dms.min = dmsArray[1].indexOf('NaN') == -1 ? dmsArray[1] : 0;
    dms.sec = dmsArray[2].indexOf('NaN') == -1 ? dmsArray[2] : 0;
    return dms;
}