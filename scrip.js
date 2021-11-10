
const cantidad = document.getElementById('cantidadEntrada')
const categoria = document.getElementById('Categoria')



function totalApagar(){
    
    let resultado = 0;
        if (categoria.value === '1') {
            resultado = (cantidad.value *200) * 0.2;
        }
        else if (categoria.value ==='2'){
            resultado = (cantidad.value * 200) * 0.5;
        }
        else {
            resultado = (cantidad.value * 200) * 0.85;
        }
        document.getElementById("total").innerHTML="Total a Pagar: $"+resultado;
}

function restTotal() {
    document.getElementById("total").innerHTML = "Total a pagar:  $ ";  
  }
  