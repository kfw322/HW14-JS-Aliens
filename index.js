var $tbody = document.querySelector("tbody");
var $datetimeinput = document.querySelector("#datetime");
var $cityinput = document.querySelector("#city");
var $stateinput = document.querySelector("#state");
var $countryinput = document.querySelector("#country");
var $shapeinput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
$searchBtn.addEventListener("click", clicked);

var filtered = partDataSet;
renderTable();

function clicked() {
  filtered = partDataSet;
  renderTable();
  if ($datetimeinput.value.trim()){ //DATETIME
    var filtervalue = $datetimeinput.value.trim();
    filtered = filtered.filter(function(entry) {
      return entry.datetime.trim() == filtervalue;
    });
  renderTable();
  }
 if ($cityinput.value.trim()){ //CITY
   var filtervalue = $cityinput.value.trim();
   filtered = filtered.filter(function(entry) {
     return entry.city.trim() == filtervalue;
    });
  renderTable();
  }
  if ($stateinput.value.trim()){ //STATE
    var filtervalue = $stateinput.value.trim();
    filtered = filtered.filter(function(entry) {
      return entry.state.trim() == filtervalue;
    });
  renderTable();
  }
  if ($countryinput.value.trim()){ //COUNTRY
    var filtervalue = $countryinput.value.trim();
    filtered = filtered.filter(function(entry) {
      return entry.country.trim() == filtervalue;
    });
  renderTable();
  }
  if ($shapeinput.value.trim()){ //SHAPE
    var filtervalue = $shapeinput.value.trim();
    filtered = filtered.filter(function(entry) {
      return entry.shape.trim() == filtervalue;
    });
  renderTable();
  }
}
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filtered.length; i++) {
    var entry = filtered[i];
    var fields = Object.keys(entry);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = entry[field];
    }
  }
}