/**
 * Created by shaunflagg on 10/24/16.
 */

var numStreet =  [1374, 21, 270, 4, 20, 116];
var streetName = ['Winthrop St', 'Whitney St', 'Oldfield Rd', 'Maple Ave', 'Union Bridge Rd'];
var cityName = ['Boston', 'Decatur', 'Woburn', 'Duxbury', 'Winthrop' ];
var stateName = ['MA', 'GA', 'FL', "NJ", "ME" ];
var zip = ['02152', '02115', '33417', '30030', '90210' ];


var randomNumStreet = numStreet[Math.floor(numStreet.length * Math.random())];
var randomStreetName = streetName[Math.floor(streetName.length * Math.random())];
var randomCityName = cityName[Math.floor(cityName.length * Math.random())];
var randomStateName = stateName[Math.floor(stateName.length * Math.random())];
var randomZip = zip[Math.floor(zip.length * Math.random())];

console.log(randomNumStreet + " " + randomStreetName + "\n" + randomCityName + ", " + randomStateName + " " + randomZip);



