/**
 * Created by IRAM on 29.11.2014.
 */

"use strict";
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
var btnDmsToDec = $('#dmsToDec');
var btnDecToDms = $('#decToDms');

var NORTH_LAT = 'N';
var SOUTH_LAT = 'S';
var WEST_LON = 'W';
var EAST_LON = 'E';

var coordModel;

function createModel() {
    coordModel = {
        dmsLatDeg: ko.observable(),
        dmsLatMin: ko.observable(),
        dmsLatSec: ko.observable(),
        dmsLonDeg: ko.observable(),
        dmsLonMin: ko.observable(),
        dmsLonSec: ko.observable(),
        decLat: ko.observable(),
        decLon: ko.observable()
    };

    ko.applyBindings(coordModel);
}



function prepareGui() {
    btnClear.click(clearFields);
    btnLat.click(toggleLat);
    btnLon.click(toggleLon);

    // $(document).ready(function() {
    //     tvDmsLatDeg.keydown(function (e) {
    //         // Allow: backspace, delete, tab, escape, enter and .
    //         if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
    //              // Allow: Ctrl+A
    //             (e.keyCode == 65 && e.ctrlKey === true) || 
    //              // Allow: home, end, left, right, down, up
    //             (e.keyCode >= 35 && e.keyCode <= 40)) {
    //                  // let it happen, don't do anything
    //                  return;
    //         }
    //         // Ensure that it is a number and stop the keypress
    //         if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
    //             e.preventDefault();
    //         }
    //     });
    // });

    // tvDmsLatDeg.keydown(function(e){
    //    allowOnlyNumberInput(e); 
    // });

    // tvDmsLatMin.keydown(function(e){
    //    allowOnlyNumberInput(e); 
    // });

    // tvDmslatSec.keydown(function(e){
    //    allowOnlyNumberInput(e); 
    // });

    // tvDmsLonDeg.keydown(function(e){
    //    allowOnlyNumberInput(e); 
    // });

    // tvDmsLonMin.keydown(function(e){
    //    allowOnlyNumberInput(e); 
    // });

    // tvDmsLonSec.keydown(function(e){
    //    allowOnlyNumberInput(e); 
    // });

    // tvDecLat.keydown(function(e){
    //    allowOnlyNumberInput(e); 
    // });

    // tvDecLon.keydown(function(e){
    //    allowOnlyNumberInput(e); 
    // });

    tvDmsLatDeg.on('input', {'min':DMS_LAT_DEG_MIN, 'max': DMS_LAT_DEG_MAX}, highlightWrongCoord);
    tvDmsLatMin.on('input',{'min':DMS_MIN_SEC_MIN, 'max':DMS_MIN_SEC_MAX }, highlightWrongCoord);
    tvDmslatSec.on('input',{'min':DMS_MIN_SEC_MIN, 'max':DMS_MIN_SEC_MAX }, highlightWrongCoord);
    tvDmsLonDeg.on('input',{'min':DMS_LON_DEG_MIN, 'max': DMS_LON_DEG_MAX}, highlightWrongCoord);
    tvDmsLonMin.on('input',{'min':DMS_MIN_SEC_MIN, 'max':DMS_MIN_SEC_MAX }, highlightWrongCoord);
    tvDmsLonSec.on('input',{'min':DMS_MIN_SEC_MIN, 'max':DMS_MIN_SEC_MAX }, highlightWrongCoord);
    tvDecLat.on('input',{'min':DEC_LAT_MIN, 'max':DEC_LAT_MAX }, highlightWrongCoord);
    tvDecLon.on('input',{'min':DEC_LON_MIN, 'max':DEC_LON_MAX }, highlightWrongCoord);


    btnDmsToDec.click(dmsToDec);
    btnDecToDms.click(decToDms);

}

// function allowOnlyNumberInput(keydownEvent) {
//     //  Плагин джейкуэри нюмерик глючит на 4.1
//     //  Поле ввода намбер глючит тоже
//     //  Поэтому пилим свою функцию для проверки ввода

//     // Allow: backspace, delete, tab, escape, enter and .
//     if ($.inArray(keydownEvent.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
//          // Allow: Ctrl+A
//         (keydownEvent.keyCode == 65 && keydownEvent.ctrlKey === true) || 
//          // Allow: home, end, left, right, down, up
//         (keydownEvent.keyCode >= 35 && keydownEvent.keyCode <= 40)) {
//              // let it happen, don't do anything
//              return;
//     }
//     // Ensure that it is a number and stop the keypress
//     if ((keydownEvent.shiftKey || (keydownEvent.keyCode < 48 || 
//         keydownEvent.keyCode > 57)) && (keydownEvent.keyCode < 96 || keydownEvent.keyCode > 105)) {
//         keydownEvent.preventDefault();
//     }
// }

function highlightWrongCoord(event) {

      //Подсвечиваем красным неверные значения координат
    var coord = $(this).val();
    if(coord != '-') {  //  Один минус подсвечивать не надо
        var borderVals = event.data;
        if(!isRightCoord(coord, borderVals.min, borderVals.max)) {
            //  Подсвечиваем красным
            $(this).css('color', 'red');
        } else {
            //  Убираем красный
            $(this).css('color', 'black');
        }
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