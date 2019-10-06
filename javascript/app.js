'use strict';



var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    
var storeHourlySales = []
var storeInfo = [
  ['Seattle', 23, 65, 6.3, [], 0],
  ['Tokyo', 3, 24, 1.2, [], 0],
  ['Dubai', 11, 38, 3.7, [], 0],
  ['Lima', 2, 16, 4.6, [],0]
]; 

var store = function store(city, minCust, maxCust, aveCookiesHour, ttlCookiesDay) {
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveCookiesHour = aveCookiesHour;
  this.ttlCookiesDay = ttlCookiesDay;
 };
    


randomNumCustomer: function() {
        return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    },
    cookiesPurchased: function () {
        var result = [];
        for (var i = 0; i < this.storeHours.length; i++) {
          result.push(Math.floor(this.randomNumCustomer() * this.aveCookies));
        }
        return result;
    },
    totalSum: function () {
        var cookieSum = 0;
        for (var i = 0; i <= this.storeHours.length; i++) {
          cookieSum += this.cookiesPurchased()[0];
        }
        return cookieSum.toLocaleString();
    },
    render: function() {
        var section = document.getElementById('container');
        var ul = document.createElement('ul');
        ul.className = 'cookies';
        ui.innerHTML = `<h2>${this.location}</h2>`;  //will need to be changed. Check around 40min mark
        section.appendChild(ul);
        
        for (var i = 0; i <= this.storeHours.length -1; i++) {
            console.log('hours', this.storeHours[i]);
            var li = document.createElement('li');
            li.textContent = `
            ${this.storeHours[i]}: $(this.cookiesPurchased()[i]) cookies
            `;
        ul.appendChild(li);
    }
    li.textContent = `Total: ${this.totalSum()} cookies`;
    ul.appendChild(li);
    }
};

var Tokyo = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 25,
  avgCookies: 1.2,
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  
  randomNumCustomer: function() {
      return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  cookiesPurchased: function () {
      var result = [];
      for (var i = 0; i < this.storeHours.length; i++) {
        result.push(Math.floor(this.randomNumCustomer() * this.aveCookies));
      }
      return result;
  },
  totalSum: function () {
      var cookieSum = 0;
      for (var i = 0; i <= this.storeHours.length; i++) {
        cookieSum += this.cookiesPurchased()[0];
      }
      return cookieSum.toLocaleString();
  },
  render: function() {
      var section = document.getElementById('container');
      var ul = document.createElement('ul');
      ul.className = 'cookies';
      ui.innerHTML = `<h2>${this.location}</h2>`;  //will need to be changed. Check around 40min mark
      section.appendChild(ul);
      
      for (var i = 0; i <= this.storeHours.length -1; i++) {
          console.log('hours', this.storeHours[i]);
          var li = document.createElement('li');
          li.textContent = `
          ${this.storeHours[i]}: $(this.cookiesPurchased()[i]) cookies
          `;
      ul.appendChild(li);
  }
  li.textContent = `Total: ${this.totalSum()} cookies`;
  ul.appendChild(li);
  }
};


var Dubai = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  
  randomNumCustomer: function() {
      return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  cookiesPurchased: function () {
      var result = [];
      for (var i = 0; i < this.storeHours.length; i++) {
        result.push(Math.floor(this.randomNumCustomer() * this.aveCookies));
      }
      return result;
  },
  totalSum: function () {
      var cookieSum = 0;
      for (var i = 0; i <= this.storeHours.length; i++) {
        cookieSum += this.cookiesPurchased()[0];
      }
      return cookieSum.toLocaleString();
  },
  render: function() {
      var section = document.getElementById('container');
      var ul = document.createElement('ul');
      ul.className = 'cookies';
      ui.innerHTML = `<h2>${this.location}</h2>`;  //will need to be changed. Check around 40min mark
      section.appendChild(ul);
      
      for (var i = 0; i <= this.storeHours.length -1; i++) {
          console.log('hours', this.storeHours[i]);
          var li = document.createElement('li');
          li.textContent = `
          ${this.storeHours[i]}: $(this.cookiesPurchased()[i]) cookies
          `;
      ul.appendChild(li);
  }
  li.textContent = `Total: ${this.totalSum()} cookies`;
  ul.appendChild(li);
  }
};
  

var Paris = {
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  
  randomNumCustomer: function() {
      return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  cookiesPurchased: function () {
      var result = [];
      for (var i = 0; i < this.storeHours.length; i++) {
        result.push(Math.floor(this.randomNumCustomer() * this.aveCookies));
      }
      return result;
  },
  totalSum: function () {
      var cookieSum = 0;
      for (var i = 0; i <= this.storeHours.length; i++) {
        cookieSum += this.cookiesPurchased()[0];
      }
      return cookieSum.toLocaleString();
  },
  render: function() {
      var section = document.getElementById('container');
      var ul = document.createElement('ul');
      ul.className = 'cookies';
      ui.innerHTML = `<h2>${this.location}</h2>`;  //will need to be changed. Check around 40min mark
      section.appendChild(ul);
      
      for (var i = 0; i <= this.storeHours.length -1; i++) {
          console.log('hours', this.storeHours[i]);
          var li = document.createElement('li');
          li.textContent = `
          ${this.storeHours[i]}: $(this.cookiesPurchased()[i]) cookies
          `;
      ul.appendChild(li);
  }
  li.textContent = `Total: ${this.totalSum()} cookies`;
  ul.appendChild(li);
  }
};


var Lima = {
  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  
  randomNumCustomer: function() {
      return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  cookiesPurchased: function () {
      var result = [];
      for (var i = 0; i < this.storeHours.length; i++) {
        result.push(Math.floor(this.randomNumCustomer() * this.aveCookies));
      }
      return result;
  },
  totalSum: function () {
      var cookieSum = 0;
      for (var i = 0; i <= this.storeHours.length; i++) {
        cookieSum += this.cookiesPurchased()[0];
      }
      return cookieSum.toLocaleString();
  },
  render: function() {
      var section = document.getElementById('container');
      var ul = document.createElement('ul');
      ul.className = 'cookies';
      ui.innerHTML = `<h2>${this.location}</h2>`;  //will need to be changed. Check around 40min mark
      section.appendChild(ul);
      
      for (var i = 0; i <= this.storeHours.length -1; i++) {
          console.log('hours', this.storeHours[i]);
          var li = document.createElement('li');
          li.textContent = `
          ${this.storeHours[i]}: $(this.cookiesPurchased()[i]) cookies
          `;
      ul.appendChild(li);
  }
  li.textContent = `Total: ${this.totalSum()} cookies`;
  ul.appendChild(li);
  }
};


var storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],

var 








// create table footer

// var createTablefooter = function() {
//     var tableFooter = document.createElement('tfoot');
//     var row = document.createElement('tr');
//     var table = document.getElementById('table');
//     var td = document.createElement('td');
//     table.appendChild(tableFooter);
// }

}


public class MyClass {
  public static void main(String[] args) {
    int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7} };
   
    for (int i = 0; i < myNumbers.length; ++i) {
      for(int j = 0; j < myNumbers[i].length; ++j) {
        System.out.println(myNumbers[i][j]);
      }
    }
  }
}



var totalPerHour = 0
  for (i=0; i<)