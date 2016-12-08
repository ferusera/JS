var imported = document.createElement('script');
imported.src = 'vikings.js';
document.head.appendChild(imported);


var pepe = new Viking ("Pepe");
var antonio = new ("Antonio");

var fight = new Fight (pepe, antonio);
fight.wrestle();