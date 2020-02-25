class Simbolo {//creacion de la clase simbolo 
    constructor(forma = []) {//array forma para  agregar lo que es el simbolo de cada carta
        this.forma = forma
        console.log(this.forma);//se imprime por consola
    }
}
class Baraja {//creacion de la clase baraja
    constructor(valor = [2, 3, 4, 5, 6, 7, 8, 9, 10,], valor_doble = [1], valorA=[11], valor_mayor = [10]) {//crea el valor de las cartas y las que tiene j,q,k
        this.valor = valor;
        this.valor_doble = valor_doble;
        this.valorA = valorA;
        this.valor_mayor = valor_mayor;
    }
}
class Carta {//creacion de la clase carta
    constructor(carta=[]) {// array para la creacion de la carta
        this.carta=carta
    }
}

class Letra_V {//creacion de la clase letra y el valor
    constructor(letra_v = ['2', '3', '4', '5', '6', '7', '8', '9', '10'], letra_dobleV = ['1A'], letra_A=['11A'], letras_es = ['10J','10Q', '10K']) {//se asigna el valor y la letra la cual se usan en la barajas
        this.l_v = letra_v//llama al array de letra_v
        this.letra_dobleV = letra_dobleV//llama al array de letra_dobleV
        this.letra_A = letra_A
        this.v_repetido = letras_es// lllama el array de letras_es
    }
}

class Fabrica {//clase fabrica--- clase la cual nos va a mandar toda la baraja echa
    palos = [Palo.forma.push('♠'), Palo.forma.push('♦'), Palo.forma.push('♣'), Palo.forma.push('♥')];
    deck = [];//arrary de todas las cartas
    carta1;//primera carta
    carta2;//segunda carta
    nueva_carta;//nueva carta

    new() {


        for (let c = 0; c < 9; c++) {//para el valor de las cartas
            for (let l = 0; l < 4; l++) {//el signo que va a tener
                let insertar = Letras.l_v[c].concat(Palo.forma[l]).concat(Valor.valor[c])//concatena lo que es el valor y el signo de la letra
                let carta=new Carta(insertar)//crea la carta
                this.deck.push(carta)
            }
        }
        
        for (let u = 0; u < 4; u++) {//for para el AS y para su simbolo
            let unica = Letras.letra_dobleV[0].concat(Palo.forma[u].concat(Valor.valor_doble))//ingresa el calor y signo de la carta
            let carta=new Carta(unica)//crea el as
            this.deck.push(carta)
      }
      ///////el otro valor de AS
        for (let un = 0; un < 4; un++) {//for para el AS y para su simbolo
            let uni = Letras.letra_A[0].concat(Palo.forma[un].concat(Valor.valorA))//ingresa el calor y signo de la carta
            let carta=new Carta(uni)//crea el as
            this.deck.push(carta)
      }
      //////////
    
        for (let v = 0; v < 3; v++) {//for para las letras jqk
            for (let vs = 0; vs < 4; vs++) {
                let mayores = Letras.v_repetido[v].concat(Palo.forma[vs]).concat(Valor.valor_mayor[0])//ingresa el calor y signo de la carta
                let carta=new Carta(mayores)//crea las cartas jqk
                this.deck.push(carta)
            }
        }
        console.log(this.deck)
    }

////////////////////////FUNCIONES PARA EL JUEGO///////////////////////////////////////////


    shuffle() {//funcion la cual mezcla las cartas de forma aleatorea
        const primera_carta = Math.floor(Math.random() * this.deck.length)//forma aletorea la primera carta
        const segunda_carta = Math.floor(Math.random() * this.deck.length)//forma aletorea la segunda carta

        this.carta1 = this.deck[primera_carta]['carta']
        this.carta2 = this.deck[segunda_carta]['carta']

        let c1 = document.getElementById('c1')//lanza la primera carta
        let c2 = document.getElementById('c2')//lanza la segunda carta

        c1.innerHTML = this.carta1
        c2.innerHTML = this.carta2
        console.log(this.carta1)
        console.log(this.carta2)


    }

    pedido() {//funcion para pedir una nueva carta
       let PedirC = document.getElementById('ask')
        const c3 = Math.floor(Math.random() * this.deck.length)
        this.ask = this.deck[c3]['carta']
        PedirC.innerHTML = this.ask
        console.log(this.ask)
    }


    valor() {
        let d = parseInt(this.carta1)
        let b = parseInt(this.carta2)
        let f= parseInt(this.ask)
   
        let w = parseInt(d)+parseInt(b)
        console.log(w)
        let e=parseInt(d)+parseInt(b)+parseInt(f)
        console.log(e)

            if (w < 21) {
                alert("no gana valor bajo")
            }
            if (w === 21) {
                alert("gana")
            }
            if (w > 21) {
                alert("no gana valor alto")
            }
            
            if (e < 21) {
                alert("no gana valor bajo")
            }
            if (e === 21) {
                alert("gana")
            }
            if (e > 21) {
                alert("no gana valor alto")
            }
            
          
    }
}




let Palo = new Simbolo()
let Letras = new Letra_V()
let Valor = new Baraja()
let fabrica = new Fabrica()
fabrica.new()