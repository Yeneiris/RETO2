let carrito=[];

function mostrarSeccion(id){

let secciones=document.querySelectorAll(".seccion");

secciones.forEach(sec=>{
sec.classList.add("oculto");
});

document.getElementById(id).classList.remove("oculto");

}

function agregar(nombre,precio){

carrito.push({nombre,precio});

alert("Producto agregado");

actualizarCarrito();

}

function actualizarCarrito(){

let lista=document.getElementById("lista");

if(!lista) return;

lista.innerHTML="";

let total=0;

carrito.forEach((p,index)=>{

let div=document.createElement("div");

div.innerHTML=
`${p.nombre} - $${p.precio.toLocaleString("es-CO")}
<button onclick="eliminar(${index})">Eliminar</button>`;

lista.appendChild(div);

total+=p.precio;

});

document.getElementById("total").innerText=
"$"+total.toLocaleString("es-CO");

}

function eliminar(index){

carrito.splice(index,1);

actualizarCarrito();

}