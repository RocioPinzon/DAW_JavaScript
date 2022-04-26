    
    
function principal(){


    var separadorTipo = " ";
    
    while(pedirFrase!="ESC".toLowerCase()){
        
        var pedirFrase = prompt("Introduzca una frase");

        console.log("La frase introducida es: " + pedirFrase);
        var palabras = separarPalabras(pedirFrase,separadorTipo);


        for(let i=0; i<palabras.length;i++){
            
            palabras[i]=giraPalabra(palabras[i]);
          
        }
        console.log(palabras.toString());
       
        function separarPalabras(frasePedida,separadorTipo){
            
            var fraseSeparada = (frasePedida.split(separadorTipo));
            // console.log(fraseSeparada);
            return fraseSeparada;
        }

        function giraPalabra(pedirFrase){
            /*
            let fraseInvertida = new Array(pedirFrase);
            /// let fraseInvertida;
            
            for (let i=0;i<fraseInvertida.length; i++){
                fraseInvertida[i]=pedirFrase.split("").reverse().join("");
            }
            */

            var respuesta = pedirFrase.split("").reverse().join("");
            // console.log(respuesta);
            return respuesta;   
        }
        
        document.getElementById("contenido").innerHTML = "<div>"
        + palabras + "</div>";
    }   
}
    window.onload = principal;
   

    // document.getElementById("divReloj").innerHTML = "<div>" + hora + ":" + minutos + ":" + segundos + "</div>";


   

