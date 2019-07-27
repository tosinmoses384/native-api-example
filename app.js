//fetchAPI
//forEach
//templateLiterals
//arrow functions

const apiKey = "b1a08983" // http://www.omdbapi.com/

    type: 'GET',
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=batman&page=2`)
    .then(response => response.json())
    .then(response=> {
        if(!response.Response){
            console.error("You are on your own");
        }else{
            let albums = response.Search;
            console.table(albums);
            albums.forEach((album, $index) => {
                displayAlbums(album, $index);
            });
        }
        })
    
    .catch(error => console.error(error));
 
function displayAlbums(albums, $index) {
    document.querySelector("tbody").append(createAlbumHTML(albums, $index));
}
function createAlbumHTML(album, $index) {
    console.log(album.Title)
    let albumRow = document.createElement('tr');
    let serialNOData = document.createElement("td");
    serialNOData.innerHTML = $index + 1;
    let albumTitleData = document.createElement("td");
    albumTitleData.innerHTML = album.Title;
    let albumYearData = document.createElement("td");
    albumYearData.innerHTML = album.Year;
    let albumPosterData = document.createElement("td");
    const posterImage = document.createElement("img");
    posterImage.src = album.Poster;
    posterImage.classList.add("image", "lazy", "is-128x128");  //lazy is a syntax for another library

    albumPosterData.appendChild(posterImage);
    albumRow.appendChild(serialNOData);
    albumRow.appendChild(albumTitleData);
    albumRow.appendChild(albumYearData);
    albumRow.appendChild(albumPosterData);
    return albumRow;
}