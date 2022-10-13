function jogadas(){
  
  //jogador 1 ganhou
  
  if((j1=="pedra" && j2=="tesoura") ||
       (j1=="tesoura" && j2=="papel") || 
       (j1=="papel" && j2=="pedra")){
    
      console.log("Jogador 1 venceu!")
      console.log("Placar:"+placar[0]+" | "+placar[1])
      placar[0]++; //pontuação para o jogador 1
      tela = 10; //abre tela 10
      
    }
  
  else{
    
    //jogador 2 ganha
    if((j1=="tesoura" && j2=="pedra") ||
       (j1=="papel" && j2=="tesoura") || 
       (j1=="pedra" && j2=="papel")){
      
      console.log("Jogador 2 venceu!")
      console.log("Placar:"+placar[0]+" | "+placar[1])
      placar[1]++ ; // pontuação para o jogador 2
      tela = 11; //abre tela 11
    
    }
    
    //jogada deu emparte
    else{
     
      console.log("Empate!")
      console.log("Placar:"+placar[0]+" | "+placar[1])
      placar[0]++;
      placar[1]++;
      tela = 12; //abre tela 12
    }
    
  }
  
}


function printPontos(){
  push();
        textSize(50); //tamanho do texto
        fill(255,0,100);//cor do placar
        text(placar[0],130,200) //pontos do jogador 1
        text(placar[1],330,200) //pontos do jogador 2
  pop();
}