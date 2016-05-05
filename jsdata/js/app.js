"use strict";

//console.log(leRecords);

var tbody = document.querySelector("tbody");

var thCountry = document.querySelector("#country-header");
var thLE = document.querySelector("#le-header");

function createTableCell(value) {
    var td = document.createElement("TD");
    td.textContent = value;
    return td;
}

function addRow(record) {
    var tr = document.createElement("TR");
    tr.appendChild(createTableCell(record.country));
    tr.appendChild(createTableCell(record.le_2013));
    tbody.appendChild(tr);
}

function populateTable() {
    tbody.innerHTML = "";
    leRecords.forEach(addRow);
}

function compareByLE(r1, r2) {
    return -(r1.le_2013 - r2.le_2013);
}

function compareByCountry(r1, r2) {
    return r1.country.localeCompare(r2.country);
}

leRecords.sort(compareByLE);
populateTable();

thCountry.addEventListener("click", function () {
    leRecords.sort(compareByCountry);
    populateTable();
});

thLE.addEventListener("click", function () {
    leRecords.sort(compareByLE);
    populateTable();
});

// leRecords.sort(function(r1, r2){
//     return -(r1.le_2013 - r2.le_2013);
// })


/////////////////////////////////////////////////////////////////////////////////

var distinctIGs = {};

leRecords.forEach(function (record) {
    // console.log(record.income_group);
    var stats = distinctIGs[record.income_group];
    if (undefined == stats){
        stats = {sum: 0, count: 0};
        distinctIGs[record.income_group] = stats;
    } 
    stats.sum += record.le_2013;
    stats.count++;
});

console.log(distinctIGs);

var keys = Object.keys(distinctIGs);
keys.forEach(function (key) {
   var stats = distinctIGs[key];
   var avg = stats.sum / stats.count;
   console.log("%s = %d", key, avg);
});
        