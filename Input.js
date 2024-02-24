// la variable que utilizo para gestionar los espacios disponibles 
var espa_;
//--------------//--------------
//creación de un objeto para la creación del personaje 
class Espacios {
    constructor(hair,body,legs,shoes) {
      this.hair = hair
      this.body = body
      this.legs = legs
      this.shoes = shoes
    }
     prueba() {
       console.log('prueba')
     }
     colorDePelo(color) {
       this.hair.style.backgroundColor = color;
     }
     colorDeCuerpo(color){
       this.body.style.backgroundColor = color;
     }
     colorDePiernas(color){
       this.legs.style.backgroundColor = color;
     }
     colorDePies(color){
       this.shoes.style.backgroundColor = color;
     }
}
//--------------//--------------
//esto es de prueba 
// Crear una instancia del objeto
const objetoPrueba = new Espacios('valor1', 'valor2', 'valor3', 'valor4');

// Llamar al métodoo
objetoPrueba.prueba();
//--------------//--------------

//---------------//-----------
function envio() {
  event.preventDefault();
  let uno = document.getElementById('unoo').value;
  let dos = document.getElementById('doss').value;
  let tres = document.getElementById('tress').value;
  let cuatro = document.getElementById('cuatroo').value;
//--------------//--------------
  //esto lo hize para unas pruebas 
//let unoo = document.querySelector('.form_1')
//  let doss = document.querySelector('.form_2')
//  let tress = document.querySelector('.form_3')
//  let cuatroo = document.querySelector('.form_4')
//  unoo.style.backgroundColor = uno;
//  doss.style.backgroundColor = dos;
//  tress.style.backgroundColor = tres;
//  cuatroo.style.backgroundColor = cuatro;
  // ----------//--------------
  // gestión de espacios y creación de una instancia del objeto y su ejecucion
  const confirmacion = document.getElementById('confirmacion')
  const rechazo = document.getElementById('rechazo')
  switch (espa_) {
    case undefined:
      console.log('1')
      espa_ = '2'
      const caja = document.getElementById('1')
      caja_1 = new Espacios(
        caja.children[1],
        caja.children[2],
        caja.children[3],
        caja.children[4]
        )
      caja_1.colorDePelo(uno)
      caja_1.colorDeCuerpo(dos)
      caja_1.colorDePiernas(tres)
      caja_1.colorDePies(cuatro)
      
      var se = caja.querySelectorAll('.cu')
      se.forEach(elemento => elemento.removeAttribute('hidden'));
      confirmacion.removeAttribute('hidden')
      var p = caja.querySelector('p')
      p.setAttribute('hidden','0')
      break;

    case '2':
      console.log('2')
      espa_ = '3'
      const caja11 = document.getElementById('2')
      caja_1 = new Espacios(
        caja11.children[1],
        caja11.children[2],
        caja11.children[3],
        caja11.children[4]
        )
      caja_1.colorDePelo(uno)
      caja_1.colorDeCuerpo(dos)
      caja_1.colorDePiernas(tres)
      caja_1.colorDePies(cuatro)
      
      var se = caja11.querySelectorAll('.cu')
      se.forEach(elemento => elemento.removeAttribute('hidden'));
      var p = caja11.querySelector('p')
      p.setAttribute('hidden','0')
      break;

    case '3':
      console.log('3')
      espa_ = '4'
      
      const caja1 = document.getElementById('3')
      caja_1 = new Espacios(
        caja1.children[1],
        caja1.children[2],
        caja1.children[3],
        caja1.children[4]
      )
      caja_1.colorDePelo(uno)
      caja_1.colorDeCuerpo(dos)
      caja_1.colorDePiernas(tres)
      caja_1.colorDePies(cuatro)
      
      var se = caja1.querySelectorAll('.cu')
      se.forEach(elemento => elemento.removeAttribute('hidden'));
      var p = caja1.querySelector('p')
      p.setAttribute('hidden', '0')
      break;
    case '4':
      rechazo.removeAttribute('hidden')
      confirmacion.setAttribute('hidden', '0')
      console.log('no hay mas espacio')
      break;
    default:
      console.error('algo paso')
  }
  // ---------------//-------------
  console.log('aparentemente sin error')
}
function reseteo() {
  let _1 = document.getElementById('1');
  let _2 = document.getElementById('2');
  let _3 = document.getElementById('3');
  let se1 = _1.querySelectorAll('.cu')
  se1.forEach(elemento => elemento.setAttribute('hidden','0'));
  let se2 = _2.querySelectorAll('.cu')
  se2.forEach(elemento => elemento.setAttribute('hidden','0'));
  let se3 = _3.querySelectorAll('.cu')
  se3.forEach(elemento => elemento.setAttribute('hidden','0'));
  rechazo.setAttribute('hidden','0')
  confirmacion.setAttribute('hidden','0')
  function remo(id) {
    let co = document.getElementById(id)
    let child = co.children[0]
    child.removeAttribute("hidden")
  }
    for (var i = 1; i < 4; i++) {
      parseInt(i)
      remo(i)
    }
  espa_ = undefined
  console.log('reinicio')
} 