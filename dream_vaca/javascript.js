// var collectionElem = document.getElementById("collection");
// var listElem = document.getElementById("list");

// collectionElem.onclick = function() {
//   	listElem.style.display = 'none';
// }

// listElem .onclick = function() {
//    collectionElem.style.display = 'none';
// }

$("#collection").click(function(){
    $("list").hide();
});

$("#collection").click(function(){
    $("p").show();
});