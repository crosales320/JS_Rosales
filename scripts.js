/*Ingrese la tabla de miltiplicar que desea saber*/

    let valor = parseInt(prompt("Ingrese la tabla de multipilcar que desea saber: "));
    
    while (valor > 0){
        
        for (let i=1; i <= 10; i++){
            console.log (valor + "x" +i + "=" + valor*i);
        }
        alert ("Ingrese otra tabla que quiera saber, o 0 para finalizar");
        valor = parseInt(prompt(" "));
    }
