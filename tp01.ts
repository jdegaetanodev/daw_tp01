interface Animal{
    nombre: string,
    gritar(): string;
}

class Perro implements Animal{
    
    nombre : string;

    constructor (nombre : string){
        this.nombre = nombre;
        
    }
       gritar() : string {
        return "Guau"
    }
}
class Gato implements Animal{

    nombre : string;

    constructor (nombre : string){
        this.nombre = nombre;
        
    }
       gritar() : string {
        return "Miau"
    }
}
class Vaca implements Animal{

    nombre : string;

    constructor (nombre : string){
        this.nombre = nombre;
        
    }
       gritar() : string {
        return "Muuu"
    }
}