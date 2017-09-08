// import React from 'react'
// import ReactDOM from 'react-dom'

// function func1(...args){
 
// 	args.forEach((element, index) => {
// 		console.log(`${index + 1} → ${element / 7}`)
// 		console.log(element)
// 	})

// }
// func1(3, 511, 6, 2, 21)

// ReactDOM.render(
//   <h1>magic!!!</h1>,
//   document.getElementById('root')
// )


function loadJSON(file, callback) {   

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);
 }


loadJSON("./data.json", function(response) {

    var actual_JSON = JSON.parse(response);
    console.log(actual_JSON);
});


// import $ from "jquery"

// $.getJSON("data.json", function( data ) {
//   var items = [];
//   $.each( data, function( key, val ) {
//     items.push( "<li id='" + key + "'>" + val + "</li>" );
//   });
 
//   $( "<ul/>", {
//     "class": "my-new-list",
//     html: items.join( "" )
//   }).appendTo( "body" );
// });
