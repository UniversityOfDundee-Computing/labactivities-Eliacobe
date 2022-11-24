
document.getElementById("submit").addEventListener("click", start);

document.getElementById("more").addEventListener("click", newpage);
var images = '';
function start()
{
  let SearchedName = document.getElementById("Title").value;

  const url = "http://www.omdbapi.com/?t=" + SearchedName + "&apikey=64448c60";

  fetch(url)
  .then((resp) => resp.json())
  //creates json object from fetch
  .then(function(data)
  {
    console.log(data);

    function myfunc(data)
    {
      console.log(data.Title);
    }
    movie(data)
    function movie(data)
    {
      images += '<img src="' + data['Poster'] + data['image_nm'] + '" />';
      document.getElementById("CardTitle").innerHTML = data.Title;
      document.getElementById("Para").innerHTML = data.Plot;
      document.getElementById("img").innerHTML = images;
    }
  })

}

function newpage()
{
  let SearchedName = document.getElementById("Title").value;

  const url = "http://www.omdbapi.com/?t=" + SearchedName + "&apikey=64448c60";

  fetch(url)
  .then((resp) => resp.json())
  //creates json object from fetch
  .then(function(data)
  {
    console.log(data);

    function myfunc(data)
    {
      console.log(data.Title);
    }
    // movie(data)
    // function movie(data)
    // {
    //   images += '<img src="' + data['Poster'] + data['image_nm'] + '" />';
    //   document.getElementById("CardTitle").innerHTML = data.Title;
    //   document.getElementById("Para").innerHTML = data.Plot;
    //   document.getElementById("img").innerHTML = images;
    // }
  })
}
