'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allStores = [];
var storeTable = document.getElementById('store');
var cookieTable = document.getElementById('table')
var form = document.getElementById('new location')
var cookiesPerHour = [];

//constructor function
function Store(name, minCustomer, maxCustomer, avgSales){

  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgSales = avgSales;
  this.customerPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookiesPerDay = 0;
  this.randomCustomer = function () {
    for (var i = 0; i < hours.length; i++) {
      var tempCustomer = Math.ceil(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
      this.customerPerHour.push(tempCustomer);
    }
  };
  this.generatesCookiesPerHour = function () {
    this.randomCustomer();
    for (var i = 0; i < this.customerPerHour.length; i++) {
      var tempCookies = Math.ceil(this.customerPerHour[i] * this.avgSales);
      this.cookiesPerHour.push(tempCookies);
      this.totalCookiesPerDay += tempCookies;
    }


  };
  this.render = function() {
    this.generatesCookiesPerHour();

    var trEl = document.createElement('tr');


    var tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);

    for (var i = 0; i< hours.length; i++) {
      var tdEl = document.createElement('td');
      tdEl.textContent = this.cookiesPerHour[i];
      trEl.appendChild(tdEl);
    }

    var tdElement = document.createElement('td');
    tdElement.textContent = this.totalCookiesPerDay;
    trEl.appendChild(tdElement);

    storeTable.appendChild(trEl);

  };
  allStores.push(this);
}
//randomCookies: function () {
new Store('alki', 12, 23, 6.2);
new Store('seatac', 3, 24, 1.2);
new Store('seacenter', 11, 38, 3.7);
new Store('capitol hill', 20, 38, 2.3);
new Store('first and pike', 23, 65, 6.3);


function processForm(e) {
    if (e.preventDefault) e.preventDefault();

    /* create a new Store based on form data */
    var name = document.getElementById("name").value;
    var cookiesSold = document.getElementById("cookiesSold").value;
    var minCustomersPerHour = document.getElementById("minCustomersPerHour").value;
    var maxCustomersPerHour = document.getElementById("maxCustomersPerHour").value;


    var newStore = new Store(name,
      parseInt(minCustomersPerHour),
      parseInt(maxCustomersPerHour),
      parseFloat(cookiesSold)
    );
    newStore.render();

    return false;
}

var form = document.getElementById('newLocation');
form.addEventListener("submit", processForm);


function tableHeader() {
  var trEl = document.createElement('tr')

  var thEl = document.createElement('th');
  thEl.textContent = '';
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++) {
    var thElementHours = document.createElement('th');
    thElementHours.textContent = hours[i];
    trEl.appendChild(thElementHours);

  }
storeTable.appendChild(trEl);
}

function allRows() {
  for (var i = 0; i< allStores.length; i++) {
    allStores[i].render();
  }
}
tableHeader();
//allStores
allRows();
