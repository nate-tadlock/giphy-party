console.log("Let's get this party started!");

let $gifs = $("#gifs");

$("form").on("submit", async function(event) {
    event.preventDefault();
    let searchTerm = $("#input").val();
    $("#input").val("");
    let response =  await axios.get("https://api.giphy.com/v1/gifs/search", {params: {q: `${searchTerm}`, api_key: "8GvwCeVbPAedXxIrRY7ITuLB7HNK71tI"}})
    addGif(response.data.data);
});

function addGif(response) {
    let resultsIdx = response.length;
    let randomIndex = Math.floor(Math.random() * resultsIdx);
    let $newDiv = $("<div>");
    let $newGif = $("<img>", {
        src: response[randomIndex].images.original.url,
        id: "gifTile"
    });
    $newDiv.append($newGif);
    $gifs.append($newDiv);
    }

$("#remove").on("click", function(){
    $gifs.empty();
});



// API Key = 8GvwCeVbPAedXxIrRY7ITuLB7HNK71tI