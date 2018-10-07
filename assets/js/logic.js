$(document).ready(function(){
    // initialize firebase
    // var config = {
    //     apiKey: "AIzaSyAPZNj-mcJqhxelQm2pZ1L_HGSmCzvyyqQ",
    //     authDomain: "0down-b4b06.firebaseapp.com",
    //     databaseURL: "https://0down-b4b06.firebaseio.com",
    //     projectId: "0down-b4b06",
    //     storageBucket: "",
    //     messagingSenderId: "936184461214"
    // };
    // firebase.initializeApp(config);

    // var database = firebase.database();
    // create wine list
    
    var wineList = [lightWhite = {cat:"lightWhite",0:"Pinot Grigio", 1:"Savingion Blac"}, sweetWhite = {cat:"sweetWhite",0:"Moscato",1:"Riesling"}, richWhite = {cat:"richWhite",0:"Chardonnay",1:"Viognier"}, sparkling = {cat:"sparkling",0:"Champagne",1:"Prosecco"},rose = {cat:"rose",0:"Sweet Rose",1:"Dry Rose"},lightRed = {cat:"lightRed",0:"Pinot Noir",1:"Grenache/Garnacha"}, mediumRed={cat:"mediumRed",0:"Merlot",1:"Zinfandel"}, boldRed = {cat:"boldRed",0:"Malbec",1:"Cabernet Sauvignon"}];
    // food options
     var foodList = [lightWhite = {0:"tuna",1:"trout",2:"kale",3:"chickpea"},sweetWhite = {0:"proscuitto",1:"habanero",2:"strawberry",3:"sweet+potato"}, richWhite = {0:"duck", 1:"lobster",2:"mushroom",3:"anise"},sparkling = {0:"oyster",1:"mussel",2:"clam",3:"pecorino"},rose={0:"turnip",1:"butternut",2:"pumpkin",3:"salami"},lightRed = {0:"chicken",1:"mushroom",2:"duck",3:"bacon"},mediumRed = {0:"pork",1:"gorgonzola",2:"eggplant",3:"tomato"},boldRed = {0:"beef",1:"lamb",2:"steak",3:"cheddar+cheese"}
    ];


    // populate the dropdown menu
    for (i=0;i<wineList.length;i++){
        for (j=0;j<2;j++){
            $(".dropdown-menu").append("<button id='"+wineList[i].cat+"' class='dropdown-item' type='button' value='"+wineList[i][j]+"'>"+wineList[i][j]+"</button>")
        }        
    };
    // when the button is clicked
    $(".dropdown-item").on("click",function(event){
        event.preventDefault();
        type = this.id
        console.log(type)
        $(".dropdown-toggle").text(this.value);
    });


    var type = ""
    var ingedient = ""
    var foodUrl = "http://www.recipepuppy.com/api/?i="+ingredient
    
   

    $.ajax({
        url: foodUrl,
        method: "GET"
    }).then(function(){

    });
    
});