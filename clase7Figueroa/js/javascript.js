let arr_albums = [];
let new_cancion;
let lista_albums = [];
let lista_temas = [];
let opcion; 
let mensaje;
let l_count;
let l_album;
let l_cancion; 
let new_arr = [];
let puntuados = [];


class Album{
    constructor(id_album, nombre, temas){
        this.id_album = id_album;
        this.nombre = nombre;
        this.temas = temas;
    }
}

class Tema{
    constructor(id_cancion, nombre, puntaje){
        this.id_cancion = id_cancion;
        this.nombre = nombre;
        this.puntaje = puntaje;
    }
    set_puntaje(nro){
        this.puntaje = nro;
    }
    /*mostrar_puntaje(){
        if (this.puntaje != 0){
            console.log("Cancion: "+this.nombre+" / Puntaje: "+this.puntaje);
        }
    }*/
    vista_xpuntaje(nro){
        if (this.puntaje == nro){
            console.log("Cancion: "+this.nombre+" / Puntaje: "+this.puntaje);
        }
    }
}

function mostrar_puntaje(x){
    return x.puntaje != 0;
}

function fnorden (a,b){
    if (a.puntaje < b.puntaje ){
        return -1;
    }
    else{
        return 1;
    }
}

arr_albums = [[1, "Taylor Swift (Debut)", ["Picture to Burn", "Our Song", "Invisible"]], 
              [2, "Fearles", ["Fearless", "White Horse", "Untouchable"]],
              [3, "Speak Now", ["Dear John", "Mean", "Enchanted"]], 
              [4, "Red", ["Red", "Girl At Home", "All Too Well"]], 
              [5, "1989",["Style", "Wildest Dreams", "This Love"]], 
              [6, "Reputation", ["Delicate", "Getaway Car", "Call It What You Want"]], 
              [7, "Lover", ["The Man", "Paper Rings", "Cornelia Street"]], 
              [8, "folklore", ["the 1", "seven", "august"]], 
              [9, "evermore", ["willow", "gold rush", "coney island"]]]; 


for (let i = 0; i < arr_albums.length ; i++){
    lista_temas = [];
    for (let x = 0; x < arr_albums[i][2].length ; x++){
        new_cancion = new Tema((x+1), (arr_albums[i][2][x]), 0);
        lista_temas.push(new_cancion);
    }
    let new_album = new Album((i+1), (arr_albums[i][1]), lista_temas);
    lista_albums.push(new_album);
}

let elige_album = "";
let elige_tema = "";
for (let z = 0; z < lista_albums.length; z++) {
    if (z < (lista_albums.length - 1)){
        elige_album = elige_album+lista_albums[z].id_album+": "+lista_albums[z].nombre+" / "; 
    }
    else{
        elige_album = elige_album+lista_albums[z].id_album+": "+lista_albums[z].nombre+"."; 
    }
}


nombre = prompt("Ingrese su nombre.");
alert("Bienvenido "+nombre+".. A continuación, puede calificar algunos temas de Taylor Swift, o agregar temas que no se encuentran en nuestro listado para calificarlos");

while (opcion != "X"){
    opcion = prompt("Ingrese A para puntuar la lista actual de temas disponibles.\nIngrese B para agregar temas a la lista.\nIngrese X para salir.");
    mensaje = "";

    if (opcion == "A"){

            while (mensaje != "X"){
                elige_tema = "";
                mensaje = prompt("Ingrese el nro de álbum donde se encuentra el tema que quiere calificar, siendo ellos:  "+elige_album+"\nIngrese X para salir.");
                if (mensaje == "X"){
                    break
                }else{
                    if (parseInt(mensaje) < 1 || parseInt(mensaje) > lista_albums.length){
                        alert("No es una opcion válida");
                        continue;
                    }
                }

                l_album = parseInt(mensaje) - 1; 
                l_count = lista_albums[l_album].temas.length;

                for (let z = 0; z < l_count; z++) {
                    if (z < (l_count - 1)){
                        elige_tema = elige_tema+lista_albums[l_album].temas[z].id_cancion+": "+lista_albums[l_album].temas[z].nombre+" / "; 
                    }
                    else{
                        elige_tema = elige_tema+lista_albums[l_album].temas[z].id_cancion+": "+lista_albums[l_album].temas[z].nombre+"."; 
                    }
                }
                mensaje = prompt("Ingrese el nro de tema que quiere calificar, siendo ellos:  "+elige_tema+"\nIngrese X para salir.");
                if (mensaje == "X"){
                    break
                }else{
                    if (parseInt(mensaje) < 1 || parseInt(mensaje) > l_count){
                        alert("No es una opcion válida");
                        continue;
                    }
                }

                l_cancion = parseInt(mensaje) - 1;
                mensaje = prompt("Ingrese su Puntaje del 1 al 10 para "+lista_albums[l_album].temas[l_cancion].nombre);
                
                if (mensaje == "X"){
                    break
                }else{
                    if (parseInt(mensaje) < 1){
                        alert("El puntaje no puede ser menor a 1");
                        continue;
                        }
                    else if (parseInt(mensaje) > 10){
                        alert("El puntaje no puede ser mayor a 10");
                        continue;
                    }
                }

                l_puntaje = parseInt(mensaje);
                lista_albums[l_album].temas[l_cancion].set_puntaje(l_puntaje);
                alert("¡Puntaje guardado!");
            }
    }
    else if (opcion == "B"){

            while (mensaje != "X"){
                
                mensaje = prompt("Ingrese el nro de álbum donde se encuentra el tema que quiere agregar, siendo ellos:  "+elige_album+"\nIngrese X para salir.");
                if (mensaje == "X"){
                    break
                }else{
                    if (parseInt(mensaje) < 1 || parseInt(mensaje) > lista_albums.length){
                        alert("No es una opcion válida");
                        continue;
                    }
                }

                l_album = parseInt(mensaje) - 1;
                l_count = lista_albums[l_album].temas.length;

                mensaje = prompt("Ingrese el nombre de la canción que quiere agregar. \nIngrese X para salir.");
                l_cancion = mensaje;

                mensaje = prompt("Ingrese su Puntaje del 1 al 10 para "+l_cancion);
                
                if (mensaje == "X"){
                    break
                }else{
                    if (parseInt(mensaje) < 1){
                        alert("El puntaje no puede ser menor a 1");
                        continue;
                        }
                    else if (parseInt(mensaje) > 10){
                        alert("El puntaje no puede ser mayor a 10");
                        continue;
                    }
                }

                l_puntaje = parseInt(mensaje);

                new_cancion = new Tema((l_count+1), l_cancion, l_puntaje);
                lista_albums[l_album].temas.push(new_cancion);
                alert("Cancion agregada!");
                }
    }
    else if (opcion == "X"){break}

}

opcion = "";

alert("¡Pss!.. A continuación, podes consultar tus temas puntuados!");

while (opcion != "X"){
    opcion = prompt("Ingrese A si desea ver todas las canciones y sus puntajes.\nIngrese B para ver canciones con un puntaje.\nIngrese X para salir.");
    mensaje = "";

    if (opcion == "A"){
        puntuados = [];
        for (let i = 0; i < lista_albums.length ; i++){
            new_arr = lista_albums[i].temas.filter(mostrar_puntaje);
            if (new_arr.length > 0){
                puntuados = puntuados.concat(new_arr);
                console.log("Cancion: "+new_arr[0].nombre+" / Puntaje: "+new_arr[0].puntaje)
            }   
        }
        /* 
        Reemplazo la función dentro de la clase por un FILTER

        for (let i = 0; i < lista_albums.length ; i++){
            for (let x = 0; x < lista_albums[i].temas.length ; x++){
                lista_albums[i].temas[x].mostrar_puntaje();
            }
        }*/
        alert("Consulte la Consola!");
        
        let puntuados_orden = puntuados;
        puntuados_orden = puntuados_orden.sort(fnorden);
        alert("Puede ver los temas ordenados por puntaje.");
        console.log(puntuados_orden);
        
    }
    else if (opcion == "B"){
        
        while (mensaje != "X"){
            mensaje = prompt("Del 1 al 10, ¿Qué puntaje desea consultar?\nIngrese X para salir.");
            if (mensaje == "X"){
                break
            }else{
                if (parseInt(mensaje) < 1){
                    alert("El puntaje no puede ser menor a 1");
                    continue;
                    }
                else if (parseInt(mensaje) > 10){
                    alert("El puntaje no puede ser mayor a 10");
                    continue;
                }

                for (let i = 0; i < lista_albums.length ; i++){
                    for (let x = 0; x < lista_albums[i].temas.length ; x++){
                        lista_albums[i].temas[x].vista_xpuntaje(parseInt(mensaje));
                    }
                }
                alert("Consulte la Consola!");
            }
        }
    }
    else{
        alert("¡Adios!");
    }
}
