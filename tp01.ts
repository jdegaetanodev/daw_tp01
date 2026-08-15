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

function describirAnimal(animal: Animal): void {

    console.log(`El animal ${animal.nombre} hace ${animal.gritar()}.`);
}


const perro: Perro = new Perro("Milo");
const vaca: Vaca  = new Vaca("Lola");
const gato: Gato  = new Gato("Miyu");

// Punto 5: Ejecutar describirAnimal para cada constante (3 veces en total)
describirAnimal(perro);
describirAnimal(vaca);
describirAnimal(gato);
 
// Punto 6: Enum con los días de la semana
enum DiasSemana {
    LUNES,
    MARTES,
    MIERCOLES,
    JUEVES,
    VIERNES,
    SABADO,
    DOMINGO
}
