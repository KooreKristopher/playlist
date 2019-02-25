/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["The Touch","Boulevard of Broken Dreams","What I've Done","Move Along"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var links = ["https://www.youtube.com/watch?v=A52--FKUQgU","https://www.youtube.com/watch?v=r5EXKDlf44M","https://www.youtube.com/watch?v=8sgycukafqQ","https://www.youtube.com/watch?v=bPBKIhm1Gs4"]
var artists = ["Stan Bush","Green Day","Linkin Park","All American Rejects"]
var songlengths = ["235","266","202","242"]
var images_urls = ["https://i.ytimg.com/vi/HSh73d3TZcA/hqdefault.jpg","https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/08/green-day-split-with-manager-920x584.jpg","https://pl.scdn.co/images/pl/default/648a0d8b0c0639f39ef174c747185c0caaa6b9c7","https://i1.wp.com/rhinopress.org/wp-content/uploads/2016/11/reject.png?fit=490%2C429"]

function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(function(song) {
        $("#songs").append("<p>"+song+"</p>");
    });
    links.forEach(function(link) {
        $("#links").append("<a href="+link+">listen</a>");
    });
    artists.forEach(function(artist) {
        $("#artists").append("<p>"+artist+"</p>");
    });
    songlengths.forEach(function(songlength) {
        $("#lengths").append("<p>"+songlength+"</p>");
    });
    images_urls.forEach(function(image) {
        $("#images").append("<img src="+image+"></img>")    
    });
 }

function emptySongInfo(){
    $("#songs").empty();
    $("#links").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#images").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
// BELOW write the code to add new items to each of the arrays.
    var song = $("#song").val();
    songs.push(song);
    var artist = $("#artist").val();
    artists.push(artist);
   var length = $("#length").val();
   songlengths.push(length);
   var link = $("#link").val();
   links.push(link);
   var image = $("#image").val();
   images_urls.push(image);
}
function clearUserInput() {
    
}
$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
