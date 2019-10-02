'use strict'

// THANK YOU TREVOR FOR THE CODE REVIEW! My function had similar objects and properties, but placed in incorrect parameters. Def need to work on my arrays though.

var Seattle = {
    location: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookies: 6.3,
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
    }
  }
  

var Tokyo = {
    min: 3,
    max: 25,
    avg: 1.2
}

var Dubai = {
    min: 11,
    max: 38,
    avg: 3.7
}

var Paris = {
    min: 20,
    max: 38,
    avg: 2.3,
}

var Lima = {
    min: 2,
    max: 16,
    avg: 4.6
}


// function randomCust(min, max) {
//     return (Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
//   }
  
//   console.log(randomCust(23, 65));