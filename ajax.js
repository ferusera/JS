window.onload= function() {

  var llamada = new XMLHttpRequest();
  llamada.open("GET", "./friends.json",false);

  llamada.onreadystatechange = function(){

      if(llamada.readyState == 4){
          var response = JSON.parse(llamada.response);
          console.log(response);
          alert(response.DataFriends[2].friend)
      }
  }

  console.log("A ver que se ejecuta primero...")
  llamada.send();
  
}