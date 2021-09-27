//DESAFIO 2 - DRIVER LICENSE
let nombre = prompt("Cual es tu nombre?");
let edad = parseInt(prompt("Cual es tu edad?")) ;

if (edad >= 18 && edad <=79){
    console.log("Podes sacar tu licencia de conducir");
}
else if(edad >=80){
    console.log("Tal vez estas un poquito mayor para manejar");
}else{
   alert("Ve a spotify y escucha Drivers License hasta que puedas conseguir la tuya")
}




//-----------------------------------------------------------------
//Numero - mayor a 1000 alert
/*
let numero=prompt("Ingrese un numero");

if( numero > 1000) {
    alert("El numero ingresado es mayor de 1000" );

} else{
    console.log ("El numero es menor de 1000");
}

//texto - Hola alert - aalert por consola


let texto=prompt("Ingrese Hola");

if( texto ==  'Hola') {
    console.log("Ingresaste 'Hola'" );

} else{
    console.log ("Ingresaste "+texto+" y no es lo que se pidio ");
}

//Numero - si esta entre 10 y 50 mostrar un alert

let numero2=parseInt( prompt("Ingrese su numero favorito",0));
let numero3=parseInt( prompt("Ingrese su dia de nacimiento",0));

if( numero2 >= 10 && numero3 <= 50) {
    alert("Los numeros ingresados estan entre 10 y 50 : "+numero2+" y " +numero3);

} else{
    console.log ("No ingresaste numeros entre 10 y 50 : "+numero2+" y " +numero3);
}*/