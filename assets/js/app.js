let cantidadPacientes =parseInt(prompt("Ingrese la cantidad de pacientes"));

let matriz = [];

for (let i = 0; i < cantidadPacientes; i++){

   let  paciente={};
   let  cantidad = i+1;
    
 window.alert("paciente" + cantidad);

   let nombre = prompt("ingrese el nombre del paciente: ");
  let edad = parseInt(prompt("ingrese edad del paciente"));
 let peso = parseInt(prompt("ingrese el peso en Kg : "));
 let sexo = prompt("ingrese sexo (H O M) del paciente:  ");

 paciente["nombre"]=nombre; 
 paciente["edad"]=edad; 
 paciente["peso"]=peso;
 paciente["sexo"]=sexo;

 matriz.push(paciente); 
}


function calcularPromedioPeso (lista){ 

let suma = 0 
for (const elemento of lista){
    suma+=elemento["peso"];

}
 
 return suma / lista.length
}


let promedioPacientes = calcularPromedioPeso(matriz);

console.log(" el promedio de los %d pacientes, es el %i kilogramos", cantidadPacientes, promedioPacientes);

console.log ("estructura de pacientes: " , matriz);


let peso = matriz.map (paciente => paciente.peso);

console.log("detalle de pesos: ", peso);


let resultadoDiv = document.getElementById("resultado");
resultadoDiv.innerHTML = `promedio : ${promedioPacientes.toFixed(2)} kg `; 


resultadoDiv.innerHTML = `
   <p> cantidad de pacientes: ${cantidadPacientes}</p>
   <p> promedio de peso: ${promedioPacientes.toFixed(2)} kg </p>
   <p> peso: [${matriz.map( p => p.peso).join(",")}]</p>`;


   resultadoDiv.innerHTML += `<h3>pacientes</h3>`;


  for(let i=0; i <matriz.length; i++ ){
    resultadoDiv.innerHTML +=`
    <p> 
    
      ${i +1}.${matriz[i].nombre} - 
      ${matriz[i].edad} años -
      ${matriz[i].peso} kg -
      ${matriz[i].sexo} 
      </p>
      
      `;
  } 