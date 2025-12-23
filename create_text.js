
function gerar(){
	var texto = "";
	var heroi = "".
	heroi = peg("HEROI").value;
	comum = peg("COMUM").value;
	vilao = peg("VILAO").value;
	mentor = peg("MENTOR").value;
	
	
	texto += "VERSÃO RESUMIDA\n";
	texto += "\n";	
	texto += "TITULO: " + peg("TITULO1").value + " " + peg("TITULO2").value + "       \n";
	texto += "TIPOS DE ENREDO: \n";
	texto += "\n";
	//RESUMO
	if(peg("genero_heroi").value=="M"){
    texto += "   O nosso " + palavra(["corajoso ","valente ", "notável ","audaz ", "ousado ", "audacioso ", "destemido ", "arrojado ", "intrépido "]) + palavra(["heroi", "campeão", "paladino", "protetor", "defensor"]) + " é o jovem " + heroi + "\n";
	}else{
	texto += "   A nossa heróina é a jovem " + heroi + "\n";
	}
	texto += "   " + heroi + palavra([" vive "," mora "]) + comum + "\n";
	texto += "   "  + heroi + " " + peg("CONFIGURACAO").value+ "\n";
	texto += "   Até que " + heroi + " " + peg("CHAMADO").value+ "\n";
	texto += "   " + heroi + " " + palavra(["percebe", "descobre", "entende"]) +  " que tem que " + peg("ACAO").value + "\n";		
	texto += "   " + heroi + " " + palavra(["recusa", "nega", "não aceita"]) +  " o chamado " + peg("INERCIA").value + "\n";	
	texto += "   " + heroi + " encontra com " + mentor + ", seu " + palavra(["Guia", "Mentor", "Amigo", "Amigo de Confiança", "Amigo e Mentor", "Guia", "Guia e Amigo"]) + " . \n";
	texto += "   " + mentor + " ao encontrar " + heroi + ", " + peg("ENCONTRO").value + " \n";
	texto += "   " + heroi + " é " + palavra(["orientado", "influenciado","esclarecido","aconselhado", "direcionado","norteado", "guiado"]) +  " por " + mentor + " a encarar o desafio. \n";
	texto += "   Aí " + heroi + " descobre que " + peg("GATILHO").value+"\n";
	texto += "   " + peg("TEMA").value+"\n\n";	
	
	texto += "   Nosso vilão é "+  vilao + " que é ajudado por " + peg("AUXVILAO").value + "\n\n";
	//RESUMO
	
	texto += "VERSÃO DETALHADA\n";
	texto += "\n";	
	texto += "TITULO: " + peg("TITULO1").value + " " + peg("TITULO2").value + "       \n\n";
	
	texto += "ATO 1\n";
	texto += "---\n\n";

	texto += "1 O mundo comum	\n";
	
	
	if(peg("genero_heroi").value=="M"){
    texto += "   O nosso " + palavra(["corajoso ","valente ", "notável ","audaz ", "ousado ", "audacioso ", "destemido ", "arrojado ", "intrépido "]) + palavra(["heroi", "campeão", "paladino", "protetor", "defensor"]) + " é o jovem " + heroi + "\n";
	}else{
	texto += "   A nossa heróina é a jovem " + heroi + "\n";
	}
	
	texto += "   " + heroi + palavra([" vive "," mora "]) + comum + "\n";
	texto += "\n";
	
	texto += "   @Apresente o Local\n";
	texto += "   @Apresente o heroi Fisicamente, geralmente é jovem\n";
	texto += "   @Apresente o mentor Fisicamente ou não, mas deixe claro que foi enviada uma mensagem\n";
	texto += "\n";
	
	//---------------------
	texto += "2 Configuração\n";
	texto += "   "  + heroi + " " + peg("CONFIGURACAO").value+ "\n\n";
 	texto += "   @Apresenta Personagem 1 Psicologicamente\n";
	texto += "   @O que está em Jogo\n";
	texto += "   @Mostre o Mundo\n\n";
	
	//---------------------

	texto += "3 Chamado.\n";
	
	texto += "   Até que " + heroi + " " + peg("CHAMADO").value+ "\n";
	texto += "   " + heroi + " " + palavra(["percebe", "descobre", "entende"]) +  " que tem que " + peg("ACAO").value + "\n\n";	
	
	//---------------------

	texto += "4 Inércia.\n";
	texto += "   " + heroi + " " + palavra(["recusa", "nega", "não aceita"]) +  " o chamado " + peg("INERCIA").value + "\n\n";	
	
	
	//---------------------	
	
	texto += "5  Mentor.\n";
	
	texto += "   " + heroi + " encontra com " + mentor + ", seu " + palavra(["Guia", "Mentor", "Amigo", "Amigo de Confiança", "Amigo e Mentor", "Guia", "Guia e Amigo"]) + " . \n";
	texto += "   " + mentor + " ao encontrar " + heroi + ", " + peg("ENCONTRO").value + " \n";
	texto += "   " + heroi + " é " + palavra(["orientado", "influenciado","esclarecido","aconselhado", "direcionado","norteado", "guiado"]) +  " por " + mentor + " a encarar o desafio. \n\n";
	
	texto += "   @Pode acontecer: Situação de perigo e o mentor salva o heroi\n";
	texto += "   @Apresente o Mentor\n\n";

	

	//---------------------

	texto += "6 Gatilho.\n";
	texto += "   Acontece que " + heroi + " descobre que "+ peg("GATILHO").value +"\n\n";
	
	
	//---------------------
	
	texto += "7 Debate e Decisão.\n";
	
	texto += "   " + peg("TEMA").value+"\n\n";	


	//---------------------
	texto += "ATO 2\n";
	texto += "---\n\n";
	texto += "   @O Mentor tira o heroi do mundo comum\n\n";



	texto += "   Nosso vilão é "+  vilao + " que é ajudado por " + peg("AUXVILAO").value + "\n";




	texto += "8 JDE - Aproximação da caverna secreta .\n";
	texto += "9 JDE - A provação .\n";
	texto += "10 JDE - A recompensa .\n";
	texto += "11 JDE - O caminho de volta .\n";
	//Gollum ataca Frodo na beira do vulcão, quando o anel estava prestes a ser destruído.


	
	texto += "12 JDE - A ressurreição .\n";
	texto += "13 JDE - O retorno com o elixir .\n\n";
	
	
	
	
	texto += "   " + heroi + " vai para " + peg("CAVERNA").value + "\n";
	
	texto += "   " + heroi + " percebe " + peg("EPIFANIA").value + "\n";
	
	
	texto += "   O nosso herói, " + heroi + ", derrota " + vilao + "\n";
	texto += "   " + heroi + " finalmente consegue " + peg("ACAO").value + "\n";
	
	texto += "   " + heroi +  " e sua equipe " + peg("PREMIO").value + "\n";
	texto += "   " + heroi +  " está com sua equipe, " + peg("RETORNO").value + "\n";
	
	texto += "   FIM\n";
	
	peg("story").value = texto;

} 