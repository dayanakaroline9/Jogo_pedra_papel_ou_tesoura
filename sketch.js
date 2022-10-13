var fundo=[]; //vetor para imagens de fundo
var img;
var tela =1; //tela inicia em 1

var vence = []; //vetor para as imagens de venceu

//variaveis
var j1 = "";
var j2 = "";
var placar = [0,0];



function preload(){
  
  //carregando as imagens de fundo
  for(i =0; i<9; i++){
    fundo[i]=loadImage("Imagens/fundo"+(i+1)+".png");
  }
  
  //carregando imagens de venceu
  for(j=0;j<3;j++){
    vence[j]=loadImage("Imagens/vence"+(j+1)+".gif");
  }
  
  
}

function setup() {
  //criando area de desenho
  createCanvas(500,500);
  
}

function draw() {
  
  switch (tela) {
    case 1:
      background(fundo[0]);
      break;
      
    case 2:
      background(fundo[1]);
      break;
      
    case 3:
      background(fundo[2]);
      break;
      
    case 4:
      background(fundo[3]);
      break;
      
    case 5:
      background(fundo[4]);
      break;
      
    case 6:
      background(fundo[5]);
      break;
      
    case 7:
      background(fundo[6]);
      break;
      
    case 8:
      background(fundo[7]);
      break;
      
    case 9:
      background(fundo[8]);
      break;
    
    case 10: //codigo da tela 10
      background(vence[0]);
      printPontos();
      break;

    case 11:
      background(vence[1]);
      printPontos();
      break;

    case 12:
      background(vence[2]);
      printPontos();
      break;

  }


  text("X:"+mouseX+"\nY:"+mouseY,20,20);

  /*
   circle(162,244,150); //area da teroura
   circle(211,393,150);  //area do papel
   circle(354,279,150); //area da pedra
  */
}