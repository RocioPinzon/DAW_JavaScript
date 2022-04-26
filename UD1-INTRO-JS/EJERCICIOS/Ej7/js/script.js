const MONEDAS = [200,100,50,20,10,5,2,1];

var finalizar  = false;

while(!finalizar){ // repetir la pregunta hasta escribir fin.
    var num = comprobarNumeroReal();
    if(num !=="FIN" && num!=="fin"){
        var cambio= pasoAMonedas(num);
        //console.log("cambio" + cambio);
        mostrarAmigable(num,cambio);
    }else{
        finalizar=true;    
        console.warn("Script finalizado");
    }
}

function comprobarNumeroReal(){ // funcion para comprobar que un numero es real.
    var correcto=false;
    while(!correcto){
    var numero = prompt("¿Qué cantidad desea convertir?");

        if(isNaN(numero) && numero !=="FIN" && numero!=="fin" && numero==null){  //Si es entero y es positivo – sustituir por código
            console.log("FORMATO NO VÁLIDO. No has introducido un número. Repite de nuevo");
        }else{
            correcto=true;
        }

        return numero;
    }
}

function mostrarAmigable(num,arrayCambio){// funcion para visualizar las monedas de forma amigable para el usuario
    var mensaje = num + " euros son";
        for(var i=0; i<arrayCambio.length; i++){
                
            if(cambio[i]!=0){
                mensaje+="\n"+arrayCambio[i]+ " x " + MONEDAS[i]+ " centimos";
            }
            
        }
    console.log(mensaje);
}


function pasoAMonedas(cantidad){// funcion para calcular la cantidad de monedas de cada tipo
    var arrayCambio = new Array();
    let cantidadCentimosTotales = cantidad*100;
    console.log("Cantidad de centimos " + cantidadCentimosTotales);


    //console.log("Estoy en la funcion monedasEquivalencia");
    for(i=0; i<MONEDAS.length;i++){
        
        arrayCambio[i] = parseInt(cantidadCentimosTotales/MONEDAS[i]);
        cantidadCentimosTotales = cantidadCentimosTotales%MONEDAS[i];
        //console.log("totalMonedas"+MONEDAS[i]+":"+ arrayCambio[i]);
    }

    console.log("-----------" + arrayCambio);

    return arrayCambio;
    
}