'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var alkiUL = {
  name: ' Alki ',
  minCustomer: 2,
  maxCustomer: 16,
  avgSales: 4.6,
  randomCustomer: [],
  randomCookies: function () {

      return Math.random(Math.floor() * (this.maxCustomer - this.minCustomer - 1)) + this.avgSales;

    },
 calcRandomCustomer:
    function() {

      for (var i = 0; i < hours.length; i++) {
        this.randomCustomer.push(this.randomCookies());
      }
    },

  render: function(){
    var alkiUL = document.getElementById('alki');
      for (var i = 0; i < hours.length; i++){
    var liEl = document.createElement('li');
     liEl.textContent = hours[i] + ': ' + this.randomCookies();
     alkiUL.appendChild(liEl);
      }
    }
  };
  alkiUL.render();
  alkiUL.calcRandomCustomer();
  console.log(alkiUL.randomCustomer);

// New store in Seatac

  var seatacUL = {
    name: ' SeaTac Airport ',
    minCustomer: 3,
    maxCustomer: 24,
    avgSales: 1.2,
    randomCustomer: [],
    randomCookies: function () {

        return Math.random(Math.floor() * (this.maxCustomer - this.minCustomer - 1)) + this.avgSales;

      },

   calcRandomCustomer:
      function() {

        for (var i = 0; i < hours.length; i++) {
          this.randomCustomer.push(this.randomCookies());


        }
      },
    render: function(){
      var seatacUL = document.getElementById('seatac');
        for (var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
       liEl.textContent = hours[i] + ': ' + this.randomCookies();
       seatacUL.appendChild(liEl);
        }
      }
    };
    seatacUL.render();
    seatacUL.calcRandomCustomer();
    console.log(seatacUL.randomCustomer);

//New store in Seattle Center

var seacenterUL = {
  name: ' Seattle Center ',
  minCustomer: 11,
  maxCustomer: 38,
  avgSales: 3.7,
  randomCustomer: [],
  randomCookies: function () {

      return Math.random(Math.floor() * (this.maxCustomer - this.minCustomer - 1)) + this.avgSales;

    },

 calcRandomCustomer:
    function() {

      for (var i = 0; i < hours.length; i++) {
        this.randomCustomer.push(this.randomCookies());


      }
    },
  render: function(){
    var seacenterUL = document.getElementById('seacenter');
      for (var i = 0; i < hours.length; i++){
    var liEl = document.createElement('li');
     liEl.textContent = hours[i] + ': ' + this.randomCookies();
     seacenterUL.appendChild(liEl);
      }
    }
  };
  seacenterUL.render();
  seacenterUL.calcRandomCustomer();
  console.log(seacenterUL.randomCustomer);

//New store in Capitol Hill

var chUL = {
  name: ' Capitol Hill ',
  minCustomer: 20,
  maxCustomer: 38,
  avgSales: 2.3,
  randomCustomer: [],
  randomCookies: function () {

      return Math.random(Math.floor() * (this.maxCustomer - this.minCustomer - 1)) + this.avgSales;

    },

 calcRandomCustomer:
    function() {

      for (var i = 0; i < hours.length; i++) {
        this.randomCustomer.push(this.randomCookies());


      }
    },
  render: function(){
    var chUL = document.getElementById('ch');
      for (var i = 0; i < hours.length; i++){
    var liEl = document.createElement('li');
     liEl.textContent = hours[i] + ': ' + this.randomCookies();
     chUL.appendChild(liEl);
      }
    }
  };
  chUL.render();
  chUL.calcRandomCustomer();
  console.log(chUL.randomCustomer);

//New store on 1st and Pike

var firstPikeUL = {
  name: ' 1st and Pike ',
  minCustomer: 23,
  maxCustomer: 65,
  avgSales: 6.3,
  randomCustomer: [],
  randomCookies: function () {

      return Math.random(Math.floor() * (this.maxCustomer - this.minCustomer - 1)) + this.avgSales;

    },

 calcRandomCustomer:
    function() {

      for (var i = 0; i < hours.length; i++) {
        this.randomCustomer.push(this.randomCookies());


      }
    },
  render: function(){
    var firstPikeUL = document.getElementById('firstPike');
      for (var i = 0; i < hours.length; i++){
    var liEl = document.createElement('li');
     liEl.textContent = hours[i] + ': ' + this.randomCookies();
     firstPikeUL.appendChild(liEl);
      }
    }
  };
  firstPikeUL.render();
  firstPikeUL.calcRandomCustomer();
  console.log(firstPikeUL.randomCustomer);
