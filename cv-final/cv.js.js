
//nombre completo

let ncompleto= "💬 Christian Abel Montenegro";

let nom = document.querySelector(".nombre");
nom.onclick = function(){
    nom.innerHTML= ncompleto;
    nom.style.background= "lightcoral";
    nom.style.fontSize= "24px";
    nom.style.fontStyle="oblique";
    nom.style.border= "5px solid pink";

   
}


 
//numeros de telefonos
let cas= "\n 📠TEL. DE LINEA: 02320-334455 "
let cel= "📱CELULAR PERSONAL: 1122334455 "

let tel = document.querySelector(".telefono");
tel.onclick = function(){
    tel.innerHTML= cel + " o " + cas;
    tel.style.background= `lightcoral`;
   tel.style.fontStyle= "oblique";
    tel.style.border= "5px solid pink";



    //edad
}

let fecha= " 📅FECHA DE NACIMIENTO: 17/07/1993 \n"
let anio= " \n  🎊 29 años"
let edad = document.querySelector(".edad");
edad.onclick = function(){
    edad.innerHTML= fecha + "-" + anio;
    edad.style.background= `lightcoral`;
    edad.style.fontStyle= "oblique";
     edad.style.border= "5px solid pink";


}
 //mail
let correo= "📬E-MAIL: \N abelm@gmail.com"
let email= document.querySelector(".mail");
 email.onclick= function(){
    email.innerHTML= correo;
    email.style.fontStyle= "oblique"
    email.style.border= "5px solid pink";
    email.style.background= "lightcoral";
    email.style.fontSize="20px";

 }

 //direccion//

let direc=" 🏡CALLE: falsa falsa  \n NUMERO: 4555 \n PROVINCIA: Buenos aires \n LOCALIDAD: Jose.c.paz";
let direccion = document.querySelector(".direccion");
direccion.onclick= function(){
    direccion.innerHTML= direc;
    direccion.style.color ="black";
    direccion.style.background= `lightcoral`;
    direccion.style.fontStyle= "oblique";
    direccion.style.border= "5px solid pink";

}

let imag = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPzNxcLt0qk2LKS6phEsd2MsZ0zhmHb1vnGq0A_c3S2fCOQAlgLGwvVyNdDNVKk3PrIbk&usqp=CAU"> ';



let botonio = document.querySelector(".botonio");

let est = document.querySelector(".est");

botonio.onclick =function (aa){
    est.innerHTML = imag;
   
}

