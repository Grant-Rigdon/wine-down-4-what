$(document).ready(function(){
    var config = {
        apiKey: "AIzaSyAPZNj-mcJqhxelQm2pZ1L_HGSmCzvyyqQ",
        authDomain: "winedown-b4b06.firebaseapp.com",
        databaseURL: "https://winedown-b4b06.firebaseio.com",
        projectId: "winedown-b4b06",
        storageBucket: "",
        messagingSenderId: "936184461214"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

    layerJS.init();

    var wineList = [lightWhtie = {name:"Pinot Grigio", name:"Savingion Blac", name:"Albariño"}, sweetWhite = {name:"Moscato",name:"Riesling"}, richWhite = {name:"Chardonnay",name:"Viognier"}, sparkling = {name:"Champagne",name:"Prosecco",name:"Cava"},rose = {name:"Rose"},lightRed = {name:"Pinot Noir",name:"Grenache/Garnacha"}, mediumRed={name:"Merlot",name:"Zinfandel",name:"Tempranillo"}, boldRed = {name:"Malbec",name:"Syrah/Shiraz", name:"Cabernet Sauvignon"}]

    
    var ingedients = ""
    var foodUrl = "http://www.recipepuppy.com/api/?i="+ingredients
    var pairings = [lightWhtie = {name:"tuna",name:"trout",name:"kale",name:"chickpea"},sweetWhite = {name:"proscuitto",name:"habanero",name:"strawberry",name:"sweet+potato"},]

    $.ajax({
        url: foodUrl,
        method: "GET"
    }).then(function(){

    });
    
});