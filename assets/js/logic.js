$(document).ready(function(){
    layerJS.init();
    // // Initialize Firebase
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
    
    var wineList = [lightWhite = {cat:0 ,0:"Pinot Grigio", 1:"Sauvignon Blanc"}, sweetWhite = {cat:1,0:"Moscato",1:"Riesling"}, richWhite = {cat:2,0:"Chardonnay",1:"Viognier"}, sparkling = {cat:3,0:"Champagne",1:"Prosecco"},rose = {cat:4,0:"Sweet Rose",1:"Dry Rose"},lightRed = {cat:5,0:"Pinot Noir",1:"Grenache/Garnacha"}, mediumRed={cat:6,0:"Merlot",1:"Zinfandel"}, boldRed = {cat:7,0:"Malbec",1:"Cabernet Sauvignon"}];
    // food options
    var foodList = [lightWhite = {0:"tuna",1:"trout",2:"kale",3:"chickpea"},sweetWhite = {0:"proscuitto",1:"habanero",2:"strawberry",3:"sweet+potato"}, richWhite = {0:"duck", 1:"lobster",2:"mushroom",3:"curry"},sparkling = {0:"oysters",1:"mussels",2:"clams",3:"pecorino"},rose={0:"turnip",1:"butternut",2:"pumpkin",3:"salami"},lightRed = {0:"chicken",1:"mushroom",2:"duck",3:"bacon"},mediumRed = {0:"pork",1:"gorgonzola",2:"eggplant",3:"tomato"},boldRed = {0:"beef",1:"lamb",2:"steak",3:"cheddar+cheese"}
    ];
    var type = "";
    var ingredient = "";
    var wineType = "";
    var num = "";
    var savedWine = "";
    var savedRecipe = "";    
    
    // populate the dropdown menu
    for (i=0;i<wineList.length;i++){
        for (j=0;j<2;j++){
            
            $(".w3-dropdown-content").append("<a id='"+wineList[i].cat+"' class='w3-bar-item w3-button wines' type='"+wineList[i][j]+"'>"+wineList[i][j]+"</a>")
        };       
    };
    
    $("#zoomin").hide();
    
    // when the button is clicked
    $(".wines").on("click",function(event){
        event.preventDefault();
        num = Math.floor(Math.random()*10);
        savedWine = this.type;
        type = this.id;
        wineType = (this.type).toLowerCase().replace(/ /g, '+');
        console.log(wineType)
        $("#selectwine").text(this.type);
        
        $("#searchbutton").on("click",function(){
            event.preventDefault();
            $("#zoomin").show()
            
            ingredient = foodList[type];
                
            $.ajax({
                url:"http://api.yummly.com/v1/api/recipes?_app_id=9792bb20&_app_key=962cc18c6f5e5a0a818851759adaabf3&allowedIngredient[]="+ingredient[0],
                dataType: 'json',
                method: "GET"
            }).then(function(response){
                $("#f0").attr("src","https://www.yummly.com/recipe/"+response.matches[num].id)
                console.log(response.matches[num].id)
                
            }); 
            $.ajax({
                url:"http://api.yummly.com/v1/api/recipes?_app_id=9792bb20&_app_key=962cc18c6f5e5a0a818851759adaabf3&allowedIngredient[]="+ingredient[1],
                dataType: 'json',
                method: "GET"
            }).then(function(response){
                $("#f1").attr("src","https://www.yummly.com/recipe/"+response.matches[num].id)
                console.log(response.matches[num].id)
                
            }); 
            $.ajax({
                url:"http://api.yummly.com/v1/api/recipes?_app_id=9792bb20&_app_key=962cc18c6f5e5a0a818851759adaabf3&allowedIngredient[]="+ingredient[2],
                dataType: 'json',
                method: "GET"
            }).then(function(response){
                $("#f2").attr("src","https://www.yummly.com/recipe/"+response.matches[num].id)
                console.log(response.matches[num].id)
                
            }); 
            $.ajax({
                url:"http://api.yummly.com/v1/api/recipes?_app_id=9792bb20&_app_key=962cc18c6f5e5a0a818851759adaabf3&allowedIngredient[]="+ingredient[3],
                dataType: 'json',
                method: "GET"
            }).then(function(response){
                $("#f3").attr("src","https://www.yummly.com/recipe/"+response.matches[num].id)
                console.log(response.matches[num].id)
                
            }); 
            
            $.ajax({
                url: "http://api.snooth.com/wines/?akey=k53smv0z7gy01bnritao0gd790090xjeum6xllqjsm8bu8yd&q="+wineType+"&s=sr&xp=40",
                dataType: 'json',
                method: "GET"
            }).then(function(response){
                $("tbody").empty();
                $("tbody").append("<tr><th>Label</th><th>Wine</th><th>Vintage</th><th>Price (USD)</th><th>Snooth.com Page</th></tr>");
                for (i=0;i<4;i++){
                    console.log(response.wines[i].name);                       
                    $("tbody").append("<tr><td><img id='tbl-img' src='"+response.wines[i].image+"'></td><td>"+response.wines[i].name+"</td><td>"+response.wines[i].vintage+"</td><td>"+response.wines[i].price+"</td><td><a href='"+response.wines[i].link+"'>Link</a></td></tr>");
                  
                };
            });

        });
    });
    $(".recipe").on("click",function(){
        console.log("on click worked")
        savedRecipe = this;
        console.log(savedRecipe);
    
    })
 

        
});