function muda_movies(valor){
	habilita("botoes_randomicos",true);
		peg("TITULO1").value = "";
		peg("TITULO2").value = "";	
		peg("HEROI").value = "";
		peg("genero_heroi").value = "x";
		peg("MENTOR").value = "";
		peg("genero_mentor").value = "x";
		peg("PARCEIRO").value = "";
		peg("VILAO").value = "";
		peg("AUXVILAO").value = "";
		peg("INDECISO").value = "";
		peg("COMICO").value = "";
		peg("DONZELA").value = "";
		peg("ACAO").value = "";
		peg("COMUM").value = "";
		peg("EPIFANIA").value = "";
		peg("ACAO").value = "";
		peg("GATILHO").value = "";
		peg("INERCIA").value = "";	
		peg("ENCONTRO").value = "";
		peg("CHAMADO").value = "";	
		peg("CAVERNA").value = "";	
		peg("PREMIO").value = "";	
		peg("RETORNO").value = "";	
		peg("CONFIGURACAO").value = "";	
		peg("TEMA").value = "";	
		habilita("botoes_randomicos",false);
	
	if (valor == 2){  //STARWARS
	    seta("PLOTS1");
		peg("TITULO1").value = "Guerra";
		peg("TITULO2").value = "nas Estrelas";	
		peg("HEROI").value = "Luke";
		peg("genero_heroi").value = "M";
		peg("MENTOR").value = "Obi Wan Kenobi";
		peg("genero_mentor").value = "M";
		peg("PARCEIRO").value = "Han Solo";
		peg("VILAO").value = "Darth Vader";
		peg("AUXVILAO").value = "Grand Moff";
		peg("INDECISO").value = "Han Solo";
		peg("COMICO").value = "C3PO";
		peg("DONZELA").value = "Leia";
		peg("COMUM").value = "em seu pequeno planeta natal";
		peg("ACAO").value = "salvar a princesa Leia e destruir a estrela da morte";
		peg("EPIFANIA").value = "pode usar a força";
		peg("INERCIA").value = "alegando que tem que ajudar seus tios na lavoura";	
	    peg("ENCONTRO").value = "que o salva do povo da areia";	
		peg("CHAMADO").value = "recebe um robô com uma mensagem de ajuda de Leia";	
		peg("CAVERNA").value = "a estrela da morte";			
		peg("GATILHO").value = "seus tios são mortos pelo império";
		peg("TEMA").value = "Planos foram roubados da estrela da morte, Obi emplica sua origem";	
		peg("PREMIO").value = "recebem medalhas";
		peg("RETORNO").value = "e todos sorriem um para o outro";
		peg("CONFIGURACAO").value = "vai comprar uns robôs com seu tio";	
		peg("TRAVESSIA").value = "vão para um cidade porto";
		peg("PROVA").value = "Luke de desentende no bar com um estranho";	
	}
	else if (valor == 3){  //LORD OF RINGS
	    
		peg("TITULO1").value = "O Senhor";
		peg("TITULO2").value = "dos Anéis";	
		peg("HEROI").value = "Frodo";
		peg("genero_heroi").value = "M";
		peg("MENTOR").value = "Gandalf";
		peg("genero_mentor").value = "M";
		peg("PARCEIRO").value = "Sam";
		peg("VILAO").value = "Sauron";
		peg("AUXVILAO").value = "Saruman";
		peg("INDECISO").value = "Boromir";
		peg("COMICO").value = "Merry e Pippin";
		peg("DONZELA").value = "Arwen";
		peg("COMUM").value = "no Condado";
		peg("ACAO").value = "Salvar o seu mundo e destruir o anel";
		peg("EPIFANIA").value = "que é resistente ao anel";	
		peg("INERCIA").value = "e tenta entregar o anel para Gandalf, que recusa";	
		peg("ENCONTRO").value = "que o instrui a levar o anel ao Ponei Saltitante";	
		peg("CHAMADO").value = "herda de seu tio um anel";	
		peg("CAVERNA").value = "vão até o vulcão de Mordor";					
		peg("GATILHO").value = "percebe que o condado pode estar ameaçado pelo anel";
		peg("TEMA").value = "Tem monstros atraz do anel, tio do frodo tá com o anel e gandalpf fala que tem q levar para longe";	
		peg("PREMIO").value = "homenagem de todos os povos da terra média";
		peg("RETORNO").value = "voltam para o condado e riem todos juntos";		
		peg("CONFIGURACAO").value = "participa da festa no condado do aniversário de Bilbo e os mostros vindo";	
		peg("TRAVESSIA").value = "vão para o ponei saltitante";
		peg("PROVA").value = "No Ponei Saltitante todos percebem que Frodo está com o Anel";	
	}	
	else if (valor == 4){  //MATRIX
		seta("PLOTS2");
		peg("TITULO1").value = "Matrix";
		peg("TITULO2").value = "";		
		peg("HEROI").value = "Neo";
		peg("genero_heroi").value = "M";
		peg("MENTOR").value = "Morpheus";
		peg("genero_mentor").value = "M";
		peg("PARCEIRO").value = "Trinity";
		peg("VILAO").value = "Smith";
		peg("AUXVILAO").value = "Oraculo";
		peg("INDECISO").value = "Cypher";
		peg("COMICO").value = "Mouse";
		peg("DONZELA").value = "Trinity";
		peg("COMUM").value = "em seu pequeno apartamento";
		peg("ACAO").value = "Salvar o seu mundo e destruir a Matrix";
		peg("EPIFANIA").value = "que pode controlar tudo na Matrix";		
		peg("INERCIA").value = "não pulando no parapeito ao fugir de Smith";	
	    peg("ENCONTRO").value = "que o da a oportunidade de tomar a pirula azul ou vermelha";			
		peg("CHAMADO").value = "Recebe uma mensagem em seu computador";		
		peg("CAVERNA").value = "Matrix";					
		peg("GATILHO").value = "realmente Smith coloca um localizador em sua barriga";
		peg("TEMA").value = "Neo é perseguido, Morpheu explica o que é a matrix (pilha)";	
		peg("PREMIO").value = "ganham sua liberdade dos agentes na Matrix";
		peg("RETORNO").value = "volta a andar na rua na Matrix como um super heroi";	
		peg("CONFIGURACAO").value = "é um programador em uma empresa, Smith um agente federal tentando prender Trinity";	
		peg("TRAVESSIA").value = "sai da Matrix";
		peg("PROVA").value = "Neo é preso e acorda assustado";
	}	
	else if (valor == 5){ //HARRYPOTTER
		peg("TITULO1").value = "Harry";
		peg("TITULO2").value = "Potter";		
		peg("HEROI").value = "Harry";
		peg("genero_heroi").value = "M";
		peg("MENTOR").value = "Dumbledore/Hagrid";
		peg("genero_mentor").value = "M";
		peg("PARCEIRO").value = "Hermione Granger";
		peg("VILAO").value = "Voldemort";
		peg("AUXVILAO").value = "Quitinus";
		peg("INDECISO").value = "Snape";
		peg("COMICO").value = "Ron Weasley";
		peg("DONZELA").value = "Hermione Granger";
		peg("COMUM").value = "debaixo de uma escada de favor com seus tios";
		peg("ACAO").value = "salvar o mundo e destruir Voldemort";
		peg("EPIFANIA").value = "Que Voldemort existe mesmo";
		peg("INERCIA").value = "alegando que é apenas o Harry...";	
		peg("ENCONTRO").value = "o convence que é um Mago";	
		peg("CHAMADO").value = "recebe uma carta para ir para Hogwarts";		
		peg("CAVERNA").value = "Hogwarts";			
		peg("GATILHO").value = "vê a Magica de cartas voando";	
		peg("TEMA").value = "Hagrid conta sobre o mundo de bruxaria";	
		peg("PREMIO").value = "expanta Voldemort por um tempo";
		peg("RETORNO").value = "volta para a casa dos seus tios";		
	    peg("CONFIGURACAO").value = "é um orfao, ele é humilhado pela sua família";		
	    peg("TRAVESSIA").value = "vão para Hogwarts";		
		peg("PROVA").value = "Jogo de Quadribol";
	}	
	else if (valor == 6){ //NEMO
		peg("TITULO1").value = "Procurando";
		peg("TITULO2").value = "Nemo";		
		peg("HEROI").value = "Marlin";
		peg("genero_heroi").value = "M";
		peg("MENTOR").value = "Crush/Dory";
		peg("genero_mentor").value = "M";
		peg("PARCEIRO").value = "Dory";
		peg("VILAO").value = "Darla";
		peg("AUXVILAO").value = "Dentista";
		peg("INDECISO").value = "Gill";
		peg("COMICO").value = "Dory";	
		peg("DONZELA").value = "Dory";
		peg("COMUM").value = "em sua anemona";		
		peg("ACAO").value = "encontrar Nemo";
		peg("EPIFANIA").value = "que deve ir para Sidney";
		peg("INERCIA").value = "acha que nemo está morto";	
		peg("ENCONTRO").value = "faz um ritual de passagem";	
		peg("CHAMADO").value = "ve Nemo sendo sequestrado";				
		peg("CAVERNA").value = "Aquario";			
		peg("GATILHO").value = "Nemo está vivo";	
		peg("TEMA").value = "Marlin conta para Dory de seu filho";	
		peg("PREMIO").value = "encontra Nemo";
		peg("RETORNO").value = "volta para a casa com seu filho";
		peg("CONFIGURACAO").value = "leva seu filho Nemo para a escola";	
		peg("TRAVESSIA").value = "vão em busca do Nemo";	
		peg("PROVA").value = "São presos com Tubaroes";
	}	
	else if (valor == 7){ //LIONKING
		seta("PLOTS1");
		peg("TITULO1").value = "O Rei";
		peg("TITULO2").value = "Leão";		
		peg("HEROI").value = "Simba";
		peg("genero_heroi").value = "M";
		peg("MENTOR").value = "Rafiki";
		peg("genero_mentor").value = "M";
		peg("PARCEIRO").value = "Nala";
		peg("VILAO").value = "Scart";
		peg("AUXVILAO").value = "Shenzi, Banzai e Ed";
		peg("INDECISO").value = "Timão";
		peg("COMICO").value = "Pumba";	
		peg("DONZELA").value = "Nala";		
		peg("COMUM").value = "com sua família";	
		peg("ACAO").value = "Salvar o seu mundo";
		peg("EPIFANIA").value = "que não foi responsavel pela morte do seu pai";
		peg("INERCIA").value = "alega que é um assassino, e que matou seu pai";		
        peg("ENCONTRO").value = "manda olhar na agua e ver seu reflexo";		
		peg("CHAMADO").value = "Percebe que seu pai esta em perigo";	
		peg("CAVERNA").value = "Savana";			
		peg("GATILHO").value = "não esta sozinho, vê seu pai nas nuvens e se vê como ele";	
		peg("TEMA").value = "Simba passa fome";	
		peg("PREMIO").value = "enfrenta Scart e se torna rei";
		peg("RETORNO").value = "volta para a savana e tem um filho";	
		peg("CONFIGURACAO").value = "e Nala brincam na savana";		
		peg("TRAVESSIA").value = "foge da Savana";	
		peg("PROVA").value = "Simba encontra Pumba e Timão, Hacuna Batata";	
	}	
	else if (valor == 8){ //OVER THE TOP
		seta("PLOTS2");
		peg("TITULO1").value = "FALCAO, ";
		peg("TITULO2").value = "O CAMPEAO DOS CAMPEOES";
	}
	else if (valor == 9){ //REAL STEEL
		seta("PLOTS2");
		peg("TITULO1").value = "GIGANTES  ";
		peg("TITULO2").value = "DE AÇO";
	}	
	else if (valor == 10){ //POINT BREAK
		peg("TITULO1").value = "CAÇADORES ";
		peg("TITULO2").value = "DE EMOÇÃO";
	}	
	else if (valor == 11){ //FAST AND FURIOUS 1
		peg("TITULO1").value = "VELOZES ";
		peg("TITULO2").value = "E FURIOSOS 1";
	}		
	else if (valor == 12){ //PINOCCHIO
		peg("TITULO1").value = "PINOCCHIO";
		peg("TITULO2").value = " ";
	}		
	else if (valor == 13){ //AS VIAGENS DE GULLIVERS
		peg("TITULO1").value = "AS VIAGENS ";
		peg("TITULO2").value = "DE GULLIVERS";
	}	
	else if (valor == 14){ //ALADDIM
		seta("PLOTS2");
		peg("TITULO1").value = "ALADDIM ";
		peg("TITULO2").value = " ";
	}		
	else if (valor == 15){ //THE WIZARD OF OZ
		peg("TITULO1").value = "O Mágico ";
		peg("TITULO2").value = "de OZ";
	}	
	else if (valor == 16){ //DRACULA
		seta("PLOTS1");
		peg("TITULO1").value = "DRACULA ";
		peg("TITULO2").value = " ";
	}	
	else if (valor == 17){ //SUPERMAN
		seta("PLOTS2");
		peg("TITULO1").value = "SUPERMAN ";
		peg("TITULO2").value = " ";
	}	
	else if (valor == 18){ //KINGKONG
		seta("PLOTS1");
		peg("TITULO1").value = "KINGKONG ";
		peg("TITULO2").value = " ";
	}		
	else if (valor == 19){ //THE UNGLY DUCKLING
		seta("PLOTS2");
		peg("TITULO1").value = "THE UNGLY DUCKLING ";
		peg("TITULO2").value = " ";
	}	
	
	
}