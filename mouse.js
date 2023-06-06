var d1,d2,d3;
//função detecta clique do mouse

function mouseClicked() {
  
  //controle da tela 1
  if(tela==1){
    
    //verifica se o mouse esta na area do botão play
    if(mouseX>=73 && mouseX<=262 && 
       mouseY>=344 && mouseY<=413){
      tela=2; //abre tela 2
    }
    
    if(dist(mouseX,mouseY,438,66)<=40){
      tela=13;
    }
    
  }
  
  //controle da tela 2
  else if(tela==2){
     d1 = dist(mouseX,mouseY,162,244); //calcula distacia do mouse em relação a teroura
     d2 = dist(mouseX,mouseY,211,393);  //calcula distacia do mouse em relação ao papel
     d3 = dist(mouseX,mouseY,354,279);  //calcula distancia do mouse em relação a pedra
    
    //considerando distancia de 75px
    if(d1<=75){
      tela=6;//abre tela 6
    }
    else if(d2<=75){
      tela=8;//abre tela 8
    }
    else if(d3<=75){
      tela=4;//abre tela 4
    }
  }
  
  //controle da tela 3
  else if(tela==3){
     d1 = dist(mouseX,mouseY,162,244); //calcula distacia do mouse em relação a teroura
     d2 = dist(mouseX,mouseY,211,393);  //calcula distacia do mouse em relação ao papel
     d3 = dist(mouseX,mouseY,354,279); //calcula distancia do mouse em relação a pedra
    
    //considerando distancia de 75px
    if(d1<=75){
      tela=7;//abre tela 6
    }
    if(d2<=75){
      tela=9;//abre tela 8
    }
    if(d3<=75){
      tela=5;//abre tela 4
    }
  }
  
  //controle tela 4 ou 6 ou 8
  else if(tela==4 || tela==6 || tela==8){
    if(mouseX>=333 && mouseX<=451 &&
      mouseY>=382 && mouseY<=452){
      
      
      
      switch (tela) {
        case 4: //tela 4 - jogador 1 escolhe pedra
          j1 = "pedra";
          break;
        case 6:
          j1 = "tesoura";
          break;
        case 8:
          j1 = "papel";
          break;
      }
     
      console.log("Jogador 1 escolheu : "+j1); //mostra escolha do jogador 1
      tela = 3; //abre tela 3
    }
  }
  
  //controle tela 5 ou 7 ou 9
  else if(tela==5 || tela==7 || tela==9){
    if(mouseX>=333 && mouseX<=451 &&
      mouseY>=382 && mouseY<=452){
      
       
      //jogadas
      switch (tela) {
        case 5://tela 5 - jogador 2 escolhe pedra
          j2 = "pedra";
          break;
        case 7:
          j2 = "tesoura";
          break;
        case 9:
          j2 = "papel";
          break;
      }
      
      console.log("Jogador 2 escolheu : "+j2); //mostra escolha do jogador 1
      
      jogadas(); //verifica jogada
      
    }
   }
  
  //controle das telas 10 e 11
  else if(tela==10 || tela==11){
    if(mouseX>=333 && mouseX<=451 &&
      mouseY>=382 && mouseY<=452){
      placar[0]=0;
      placar[1]=0;
      tela=1; //abre tela 1
      
    }
    
  }
  
  //controle da tela 12
  else if(tela==12){
    if(mouseX>=333 && mouseX<=451 &&
      mouseY>=382 && mouseY<=452){
      
      tela = 2; //abre tela 2
      
    }
    
  }else if(tela==13){
    if(mouseX>=18 && mouseX<=136 &&
      mouseY>=404 && mouseY<=473){
      tela=1;
    }
    
  }
  
  
}


