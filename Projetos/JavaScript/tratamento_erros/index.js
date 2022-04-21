function verificaPalindromo(string){
    if(!string) return "String inválida";
    return string === string.split('').reverse().join('');
}

console.log(verificaPalindromo('cat'));

console.log(verificaPalindromo('ana'));

//tratando erro
function testarPalindromo(string){
    if(!string) throw "String inválida";
    return string === string.split('').reverse().join('');
}
function tryCatchExemplo(a){
    try{
        testarPalindromo(a);
    }
    catch(e) {
        console.log(e);
    }
    finally{
        console.log("Execução concluida!");
    }
}

console.log(tryCatchExemplo('ana'));

//console.log(tryCatchExemplo(12));


function validaArray(arr, tamanho) {
    try {
      if (!arr.length || arr.length !== tamanho) throw new RangeError("O tamanho do array é inválido");
  
      return arr;
    } catch(e) {
      if (e instanceof RangeError) {
        return console.log(e.message);
      } else {
        return e;
      }
    }
  } 
  
 console.log(validaArray());