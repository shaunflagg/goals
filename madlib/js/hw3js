var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));

document.getElementById('create').onclick = createStartUp;
document.getElementById('save').onclick = saveFavorites;
document.getElementById('print').onclick = printFavorites;

var saying;

function createStartUp () {
    random1 = Math.floor((Math.random() * startupX.length));
    random2 = Math.floor((Math.random() * startupY.length));

    saying = 'A startup that is ' + startupX[random1] + ', but for ' + startupY[random2];
    document.getElementById("xForY").innerHTML = saying;
}

console.log('A startup that is ' + startupX[random1] + ', but for ' + startupY[random2]);

var favoritesArray = [];

function saveFavorites () {

    favoritesArray.push(saying);

}

var print;

function printFavorites (){
    print = favoritesArray.toString();

    document.getElementById("favorites").innerHTML = print;
}




