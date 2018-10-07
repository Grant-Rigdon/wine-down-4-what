$(document).ready(function(){
//     // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyAKu6rLptpGpYc9SsdP4lUx46Q6-HtpZSQ",
//     authDomain: "rps-game-fe6a1.firebaseapp.com",
//     databaseURL: "https://rps-game-fe6a1.firebaseio.com",
//     projectId: "rps-game-fe6a1",
//     storageBucket: "rps-game-fe6a1.appspot.com",
//     messagingSenderId: "1089353703122"
//   };
//   firebase.initializeApp(config);
    // create wine list

    var wineList = [lightWhite = {cat:0 ,0:"Pinot Grigio", 1:"Savingion Blac"}, sweetWhite = {cat:1,0:"Moscato",1:"Riesling"}, richWhite = {cat:2,0:"Chardonnay",1:"Viognier"}, sparkling = {cat:3,0:"Champagne",1:"Prosecco"},rose = {cat:4,0:"Sweet Rose",1:"Dry Rose"},lightRed = {cat:5,0:"Pinot Noir",1:"Grenache/Garnacha"}, mediumRed={cat:6,0:"Merlot",1:"Zinfandel"}, boldRed = {cat:7,0:"Malbec",1:"Cabernet Sauvignon"}];
    // food options
     var foodList = [lightWhite = {0:"tuna",1:"trout",2:"kale",3:"chickpea"},sweetWhite = {0:"proscuitto",1:"habanero",2:"strawberry",3:"sweet+potato"}, richWhite = {0:"duck", 1:"lobster",2:"mushroom",3:"anise"},sparkling = {0:"oyster",1:"mussel",2:"clam",3:"pecorino"},rose={0:"turnip",1:"butternut",2:"pumpkin",3:"salami"},lightRed = {0:"chicken",1:"mushroom",2:"duck",3:"bacon"},mediumRed = {0:"pork",1:"gorgonzola",2:"eggplant",3:"tomato"},boldRed = {0:"beef",1:"lamb",2:"steak",3:"cheddar+cheese"}
    ];
    var type = ""
    var ingredient = ""
    var foodUrl = "http://www.recipepuppy.com/api/?i="+ingredient

    // populate the dropdown menu
    for (i=0;i<wineList.length;i++){
        for (j=0;j<2;j++){
            $(".dropdown-menu").append("<button id='"+wineList[i].cat+"' class='dropdown-item' type='button' value='"+wineList[i][j]+"'>"+wineList[i][j]+"</button>")
        }        
    };
    console.log(foodList)
    // when the button is clicked
    $(".dropdown-item").on("click",function(event){
        event.preventDefault();
        type = this.id
        console.log(type)
        $(".dropdown-toggle").text(this.value);
        
    });
    $("#search").on("click",function(){
            // $("#start").hide();
            for (i=0;i<4;i++){
                ingredient = foodList[type][i];
                console.log(ingredient); 
            }

        })
    


    var type = ""
    var ingedient = ""
    var foodUrl = "http://www.recipepuppy.com/api/?i="+ingredient

    
   

    $.ajax({
        url: foodUrl,
        method: "GET"
    }).then(function(){

    });
    
});