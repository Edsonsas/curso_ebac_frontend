const form = document.getElementById ('form-valid');
const valorA = document.getElementById ("valor-a");
const valorB = document.getElementById ('valor-b') ;

function validaValor (vA,vB){
    if (vB > vA ){
        return true;
    }
    else {
        return false;
    }
    
}

form.addEventListener('submit',function (e) {
    e.preventDefault();

    const valorA = document.getElementById ("valor-a");
    const valorB = document.getElementById ('valor-b') ;
    if (validaValor(valorA.value,valorB.value) === true){
        alert('formulario  validado');
    }
    else{
        alert('formulario nao validado');
    }

});



