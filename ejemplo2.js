function checkInPass(name, passengerList){

  var passengerCheck;

  for (i=0; i <= passengerList.length; i++){
    if (passengerList[i] === name){
      return passengerCheck = function(){
        console.log("Hola " + name + ", eres el pasajero número " + (i+1));
      }
    }
    return function(){
      console.log(name + " no estás entre los pasajeros.")
    }
  }

}

passengerList = ["Juan", "Pepe", "Ana", "María"];
var checkJuan = checkInPass("Juan", passengerList)();
debugger;
var checkAna = checkInPass("Ana", passengerList)();