const array = ["Joaquin", 1, ["Hola","Adios"], true]

// 1) Recorrer el array e insertar dichos valores en el localstorage. El key de cada valor corresponderá a variable + i siendo i el indice en el que se encuentra el array.
let i = 0;
let variable = "variable";
for (let elemento of array) {
    localStorage.setItem(variable + i, JSON.stringify(elemento));
    i++;
}

// 2) Recorrer de 0 a la longitud del array y hacer la peticion de variable + i del localstorage
for (i =0; i < array.length; i++) {
    let elemento = localStorage.getItem(variable + i);
    console.log(elemento);
}

// 3) Crear un div por cada variable e insertar el valor de dicha variable en el div
// 4) insertar estos divs en el body del html
for (i=0; i<localStorage.length;i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    value = JSON.parse(value);
    const div= document.createElement("div");
    div.textContent = value;
    document.body.appendChild(div);
}