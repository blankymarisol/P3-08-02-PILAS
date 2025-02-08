class pila{
    constructor(){
        this.items = [];
    }

    //agregar un elemento a la pila
    push(elemento){
        this.items.push(elemento);
    }

    //eliminar un elemento de la pila
    pop(){
        if (this.items.length === 0){ //=== evalua si es el mismo dato y tipo de dato
            return "La pila esta vacia";
        }
        return this.items.pop();
    }

    //retona la cima 
    peek(){
        return this.items[this.items.length - 1];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    mostrar(){
        console.log(this.items);
    }
}

let miPila = new pila();
miPila.push("A");
miPila.push("B");
miPila.push("C");
miPila.mostrar();   
console.log("Eliminar elemento: ", miPila.pop());
miPila.mostrar();
console.log("cima: ", miPila.peek());
console.log("Esta vacia? ", miPila.isEmpty());
miPila.pop();
miPila.pop();
miPila.mostrar();
console.log("Esta vacia? ", miPila.isEmpty());