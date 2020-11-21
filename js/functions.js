var carrinho = document.querySelector("#carrinhoIndex");
var botao = document.querySelector("#comp");

carrinho.innerHTML = 0;


var count = 0;

botao.addEventListener("click", function acrescentar(){
count++;
carrinho.innerHTML = count;
});

var avaliacao = document.querySelector("#avalie");
var autor = document.querySelector("#autor");
var comentario = document.querySelector("#comentario");

avaliacao.addEventListener("click", function novaAvaliacao(){

comentario.innerHTML = '"Produto confortável e foi entregue antes da data"';
autor.innerHTML = " - Regina Souza"
});




var desc = document.querySelector(".desc-produto");
var item = document.querySelector(".itens");
var garantia = document.querySelector(".garantia");

var bt1 = document.querySelector(".btn-1");
var bt2 = document.querySelector(".btn-2");
var bt3 = document.querySelector(".btn-3");




bt1.addEventListener("click", function verDescricao(){

desc.style.display='block';
item.style.display='none';
garantia.style.display='none';
bt1.style.background='black';
bt1.style.color='white';
bt3.style.background='#EEEEEE';
bt3.style.color='#898989';
bt2.style.background='#EEEEEE';
bt2.style.color = '#898989';
});


bt2.addEventListener("click", function verItens(){

desc.style.display='none';
item.style.display='block';
garantia.style.display='none';
bt2.style.background='black';
bt2.style.color='white';
bt3.style.background='#EEEEEE';
bt3.style.color='#898989';
bt1.style.background='#EEEEEE';
bt1.style.color = '#898989';
});



bt3.addEventListener("click", function verGarantia(){

desc.style.display='none';
item.style.display='none';
garantia.style.display='block';
bt3.style.background='black';
bt3.style.color='white';
bt2.style.background='#EEEEEE';
bt2.style.color='#898989';
bt1.style.background='#EEEEEE';
bt1.style.color = '#898989';
});



