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
		
		peg("COMUM").value = "";
		peg("CONFIGURACAO").value = "";
		peg("CHAMADO").value = "";
		peg("INERCIA").value = "";
		peg("ENCONTRO").value = "";
		peg("GATILHO").value = "";
		peg("TEMA").value = "";
		peg("TRAVESSIA").value = "";
		peg("PROVA").value = "";
		peg("JOGOS").value = "";
		peg("MEIO").value = "";
		peg("CAVERNA").value = "";
		peg("TUDO").value = "";
		peg("DESOLACAO").value = "";
		peg("EPIFANIA").value = "";
		peg("PREMIO").value = "";
		peg("CAMINHO").value = "";
		peg("RESSURREICAO").value = "";
		peg("RETORNO").value = "";
		peg("ACAO").value = "";
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
		
		peg("COMUM").value = "Tatooine: Luke Skywalker vive uma vida simples como fazendeiro, sonhando com algo além do deserto.";
		peg("CONFIGURACAO").value = "O Império domina a galáxia; a Princesa Leia carrega os planos da Estrela da Morte; conhecemos Luke, Owen, Beru, droids e o clima opressivo.";
		peg("CHAMADO").value = "Mensagem de Leia em R2-D2 pedindo ajuda a Obi-Wan Kenobi.";	
		peg("INERCIA").value = "Luke recusa partir: sente-se preso às responsabilidades com os tios.";
		peg("ENCONTRO").value = "Obi-Wan revela a verdade sobre o pai de Luke, a Força e os Jedi, oferecendo o sabre de luz.";	
		peg("GATILHO").value = "O Império mata Owen e Beru; não há mais volta para Luke.";
		peg("TEMA").value = "Luke decide ir com Obi-Wan, aceita aprender sobre a Força e deixa Tatooine.";
		peg("TRAVESSIA").value = "Luke parte com Han Solo e Chewbacca na Millennium Falcon rumo a Alderaan.";
		peg("PROVA").value = "Treinamento inicial com a Força; conflitos com Han; encontro com a Estrela da Morte.";	
		peg("JOGOS").value = "Resgate de Leia, combates, humor, ação e aventura — a promessa da premissa se cumpre.";	
		peg("MEIO").value = "Obi-Wan enfrenta Darth Vader e se sacrifica; Luke perde o mentor, mas ganha propósito..";	
		peg("CAVERNA").value = "Fuga da Estrela da Morte enquanto o Império rastreia a base rebelde.";	
		peg("TUDO").value = "A Estrela da Morte se aproxima de Yavin; a Aliança parece condenada.";	
		peg("DESOLACAO").value = "Os ataques iniciais falham; muitos pilotos morrem; tudo parece perdido..";	
		peg("EPIFANIA").value = "Luke confia na Força, desliga o computador de mira e ataca guiado pela intuição.";
		peg("PREMIO").value = "A Estrela da Morte é destruída; vitória da Aliança Rebelde.";
		peg("CAMINHO").value = "Luke retorna como herói à base rebelde.";
		peg("RESSURREICAO").value = "Luke desperta como um verdadeiro iniciado na Força; não é mais o fazendeiro ingênuo..";
		peg("RETORNO").value = "Cerimônia de medalhas; esperança restaurada à galáxia — e abertura clara para continuações..";
		peg("ACAO").value = "salvar a princesa Leia e destruir a estrela da morte";
		
		
	}
	else if (valor == 3){  //LORD OF RINGS
	    seta("PLOTS3");
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

		peg("COMUM").value = "Condado: Frodo Bolseiro vive uma vida pacata entre hobbits, alheio aos grandes conflitos do mundo.";
		peg("CONFIGURACAO").value = "A Terra-média é apresentada; Bilbo deixa o Um Anel para Frodo; Sauron cresce em poder e os Nazgûl entram em cena.";
		peg("CHAMADO").value = "Gandalf revela a Frodo a verdadeira natureza do Um Anel e o perigo que ele representa.";
		peg("INERCIA").value = "Frodo hesita em partir, temendo abandonar o Condado e colocar seus amigos em risco.";
		peg("ENCONTRO").value = "Gandalf assume o papel de mentor, orientando Frodo sobre a missão e o caminho a seguir.";
		peg("GATILHO").value = "Os Nazgûl chegam ao Condado; Frodo é forçado a fugir imediatamente.";
		peg("TEMA").value = "Frodo aceita a responsabilidade de levar o Anel, mesmo sabendo do sacrifício envolvido.";
		peg("TRAVESSIA").value = "Frodo deixa o Condado e segue rumo a Valfenda, cruzando o primeiro limiar da aventura.";
		peg("PROVA").value = "Encontros com Aragorn, ataques dos Nazgûl, ferimento no Topo do Vento e alianças formadas.";
		peg("JOGOS").value = "A Sociedade do Anel é formada; diversidade de raças, conflitos internos e cooperação.";
		peg("MEIO").value = "Travessia de Moria e queda de Gandalf enfrentando o Balrog.";
		peg("CAVERNA").value = "A sombra de Sauron cresce; Boromir é tentado pelo Anel e a Sociedade se fragiliza.";
		peg("TUDO").value = "Boromir sucumbe à tentação; a Sociedade se rompe; tudo parece perdido.";
		peg("DESOLACAO").value = "Morte de Boromir; Frodo percebe que não pode confiar plenamente em ninguém.";
		peg("EPIFANIA").value = "Frodo decide seguir sozinho para Mordor, aceitando o peso total da missão.";
		peg("PREMIO").value = "Sam prova sua lealdade absoluta ao não abandonar Frodo.";
		peg("CAMINHO").value = "Frodo e Sam partem rumo a Mordor, deixando o restante da Sociedade para trás.";
		peg("RESSURREICAO").value = "Frodo deixa de ser apenas um hobbit comum e assume o papel de portador do destino do mundo.";
		peg("RETORNO").value = "A jornada continua além do filme, com a esperança frágil de que o Anel possa ser destruído.";
		peg("ACAO").value = "destruir o Um Anel e derrotar Sauron";


	
	}	
	else if (valor == 4){  //MATRIX
		seta("PLOTS1");
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
		

		peg("COMUM").value = "Thomas Anderson leva uma vida dupla: programador de dia e hacker à noite, sentindo que há algo errado com o mundo.";
		peg("CONFIGURACAO").value = "Um futuro dominado por máquinas; a humanidade está presa na Matrix; surgem Morpheus, Trinity e os Agentes.";
		peg("CHAMADO").value = "Morpheus oferece a Neo a escolha entre a pílula azul e a pílula vermelha.";
		peg("INERCIA").value = "Neo hesita, sente medo, desconfiança e tenta manter sua vida normal.";
		peg("ENCONTRO").value = "Morpheus revela a verdade sobre a Matrix e treina Neo como mentor e guia.";
		peg("GATILHO").value = "Neo acorda no mundo real e descobre que a humanidade é escravizada pelas máquinas.";
		peg("TEMA").value = "Neo decide acreditar que pode ser O Escolhido e enfrentar a Matrix.";
		peg("TRAVESSIA").value = "Neo entra conscientemente na Matrix como parte da tripulação da Nebuchadnezzar.";
		peg("PROVA").value = "Treinamentos simulados, confrontos com Agentes, resgates e testes de fé.";
		peg("JOGOS").value = "Ação estilizada, artes marciais, tiroteios e exploração das regras da Matrix.";
		peg("MEIO").value = "Traição de Cypher e captura de Morpheus pelos Agentes.";
		peg("CAVERNA").value = "Neo enfrenta os Agentes para resgatar Morpheus, desafiando as regras do sistema.";
		peg("TUDO").value = "Neo é baleado e aparentemente morto pelo Agente Smith.";
		peg("DESOLACAO").value = "Tudo parece perdido; a profecia falha; Morpheus e a equipe perdem a esperança.";
		peg("EPIFANIA").value = "Neo desperta como O Escolhido, enxerga o código da Matrix e vence Smith.";
		peg("PREMIO").value = "Morpheus é salvo; os Agentes são derrotados; Neo domina a Matrix.";
		peg("CAMINHO").value = "Neo retorna à Matrix com plena consciência de seu poder.";
		peg("RESSURREICAO").value = "Neo renasce como O Escolhido, livre das limitações impostas pelo sistema.";
		peg("RETORNO").value = "Neo promete libertar a humanidade e desafiar o domínio das máquinas.";
		peg("ACAO").value = "libertar a humanidade e destruir o controle das máquinas sobre a Matrix";


	}	
	else if (valor == 5){ //HARRYPOTTER
		seta("PLOTS3");
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
		

		peg("COMUM").value = "Harry Potter vive uma vida miserável com os Dursley, sem saber a verdade sobre sua origem.";
		peg("CONFIGURACAO").value = "O mundo bruxo é revelado; Voldemort é temido; conhecemos Hogwarts, Hagrid, Ron, Hermione e as Casas.";
		peg("CHAMADO").value = "Harry recebe a carta de Hogwarts convidando-o a estudar magia.";
		peg("INERCIA").value = "Os Dursley tentam impedir Harry; ele não compreende nem acredita totalmente em seu destino.";
		peg("ENCONTRO").value = "Hagrid apresenta Harry ao mundo mágico e Dumbledore surge como mentor maior.";
		peg("GATILHO").value = "Harry descobre que é famoso no mundo bruxo e que seus pais foram mortos por Voldemort.";
		peg("TEMA").value = "Harry aceita ser bruxo e decide enfrentar seu passado e seu futuro em Hogwarts.";
		peg("TRAVESSIA").value = "Harry atravessa a Plataforma 9¾ e inicia sua jornada em Hogwarts.";
		peg("PROVA").value = "Aulas de magia, amizades, rivalidade com Draco e primeiros confrontos com perigos ocultos.";
		peg("JOGOS").value = "Descoberta do Quadribol, desafios mágicos e encantamento do mundo bruxo.";
		peg("MEIO").value = "Harry suspeita que a Pedra Filosofal está em perigo e que Voldemort pode retornar.";
		peg("CAVERNA").value = "Harry, Ron e Hermione enfrentam as proteções da Pedra Filosofal.";
		peg("TUDO").value = "Harry encontra Quirrell e Voldemort; parece impossível vencê-lo.";
		peg("DESOLACAO").value = "Harry fica à beira da morte ao confrontar Voldemort sozinho.";
		peg("EPIFANIA").value = "Harry percebe que o amor de sua mãe o protege e enfrenta Voldemort.";
		peg("PREMIO").value = "A Pedra Filosofal é protegida e Voldemort é novamente derrotado.";
		peg("CAMINHO").value = "Harry retorna ao convívio em Hogwarts como herói.";
		peg("RESSURREICAO").value = "Harry amadurece e entende melhor seu papel no mundo bruxo.";
		peg("RETORNO").value = "Harry volta para os Dursley, agora consciente de quem é e do que enfrentará no futuro.";
		peg("ACAO").value = "proteger a Pedra Filosofal e impedir o retorno de Voldemort";


	}	
	else if (valor == 6){ //NEMO
		seta("PLOTS3");
		peg("TITULO1").value = "Procurando";
		peg("TITULO2").value = "Nemo";

		peg("HEROI").value = "Marlin";
		peg("genero_heroi").value = "M";

		peg("MENTOR").value = "Dory";
		peg("genero_mentor").value = "F";

		peg("PARCEIRO").value = "Dory";

		peg("VILAO").value = "O oceano / o aquário humano";
		peg("AUXVILAO").value = "Dentista";
		peg("INDECISO").value = "Gill";
		peg("COMICO").value = "Dory";
		peg("DONZELA").value = "Nemo";


		peg("COMUM").value = "Marlin vive uma vida superprotetora no recife, cuidando de Nemo após perder sua companheira e quase todos os filhotes.";
		peg("CONFIGURACAO").value = "O oceano é apresentado como belo e perigoso; conhecemos Nemo, a escola de peixes e o medo constante de Marlin.";
		peg("CHAMADO").value = "Nemo deseja provar que é capaz e vai até o barco humano para desafiar o pai.";
		peg("INERCIA").value = "Marlin tenta impedir Nemo, dominado pelo medo de perdê-lo.";
		peg("ENCONTRO").value = "Marlin conhece Dory, que se torna sua parceira inesperada na jornada.";
		peg("GATILHO").value = "Nemo é capturado por um mergulhador e levado para um aquário em Sydney.";
		peg("TEMA").value = "Marlin decide enfrentar seus medos e atravessar o oceano para salvar o filho.";
		peg("TRAVESSIA").value = "Marlin deixa o recife e parte pelo oceano aberto com Dory.";
		peg("PROVA").value = "Encontro com tubarões, águas-vivas, baleia e perigos constantes do mar.";
		peg("JOGOS").value = "Aventuras divertidas e situações cômicas que exploram o mundo submarino.";
		peg("MEIO").value = "Marlin quase perde Dory e acredita que Nemo morreu.";
		peg("CAVERNA").value = "Nemo tenta escapar do aquário enquanto Marlin se aproxima de Sydney.";
		peg("TUDO").value = "Marlin reencontra Nemo, mas acredita que ele está morto.";
		peg("DESOLACAO").value = "Marlin perde a esperança e sente que falhou como pai.";
		peg("EPIFANIA").value = "Nemo prova sua coragem; Marlin aprende a confiar no filho.";
		peg("PREMIO").value = "Pai e filho se reencontram e escapam juntos.";
		peg("CAMINHO").value = "Marlin e Nemo retornam ao recife.";
		peg("RESSURREICAO").value = "Marlin supera o medo e se torna um pai mais confiante e equilibrado.";
		peg("RETORNO").value = "Nemo vai para a escola com autonomia, e a vida no recife é renovada.";
		peg("ACAO").value = "encontrar Nemo e aprender a confiar no crescimento do filho";


	}	
	else if (valor == 7){ //LIONKING
		seta("PLOTS7");

		peg("TITULO1").value = "O";
		peg("TITULO2").value = "Rei Leão";

		peg("HEROI").value = "Simba";
		peg("genero_heroi").value = "M";

		peg("MENTOR").value = "Mufasa / Rafiki";
		peg("genero_mentor").value = "M";

		peg("PARCEIRO").value = "Nala";

		peg("VILAO").value = "Scar";
		peg("AUXVILAO").value = "Hienas";
		peg("INDECISO").value = "Sarabi";
		peg("COMICO").value = "Timão e Pumba";
		peg("DONZELA").value = "Nala";


		peg("COMUM").value = "Simba vive protegido no Reino das Terras do Orgulho, sem compreender plenamente o peso de seu destino.";
		peg("CONFIGURACAO").value = "O ciclo da vida é apresentado; Mufasa reina; Scar inveja o trono; as hienas aguardam sua chance.";
		peg("CHAMADO").value = "Simba é apresentado como futuro rei e convidado a assumir responsabilidades.";
		peg("INERCIA").value = "Simba age com imaturidade e curiosidade, sem entender as consequências de seus atos.";
		peg("ENCONTRO").value = "Mufasa ensina Simba sobre o ciclo da vida e o papel de um rei.";
		peg("GATILHO").value = "Scar provoca a morte de Mufasa e convence Simba de que ele é o culpado.";
		peg("TEMA").value = "Simba foge, acreditando que não merece o trono nem o passado que carrega.";
		peg("TRAVESSIA").value = "Simba deixa as Terras do Orgulho e chega ao oásis onde conhece Timão e Pumba.";
		peg("PROVA").value = "Simba cresce no exílio, vivendo sem responsabilidades enquanto o reino definha.";
		peg("JOGOS").value = "Vida despreocupada com Timão e Pumba sob a filosofia do Hakuna Matata.";
		peg("MEIO").value = "Nala encontra Simba e revela a destruição causada pelo reinado de Scar.";
		peg("CAVERNA").value = "Simba enfrenta seu passado ao encontrar Rafiki e a visão espiritual de Mufasa.";
		peg("TUDO").value = "Simba retorna ao reino e é confrontado por Scar diante de todos.";
		peg("DESOLACAO").value = "Scar acusa Simba publicamente, quase destruindo sua confiança.";
		peg("EPIFANIA").value = "Simba aceita sua identidade e decide assumir seu lugar como rei.";
		peg("PREMIO").value = "Scar é derrotado e o ciclo da vida é restaurado.";
		peg("CAMINHO").value = "Simba assume o trono das Terras do Orgulho.";
		peg("RESSURREICAO").value = "Simba renasce como um rei justo e consciente de seu papel.";
		peg("RETORNO").value = "O reino floresce novamente sob o novo reinado de Simba.";
		peg("ACAO").value = "retomar o trono e restaurar o equilíbrio do ciclo da vida";


	}	
	else if (valor == 8){ //OVER THE TOP
		seta("PLOTS2");
		peg("TITULO1").value = "Over";
		peg("TITULO2").value = "The Top";

		peg("HEROI").value = "Lincoln Hawk";
		peg("genero_heroi").value = "M";

		peg("MENTOR").value = "Autoaprendizado / Experiência de vida";
		peg("genero_mentor").value = "M";

		peg("PARCEIRO").value = "Michael Hawk";

		peg("VILAO").value = "Jason Cutler";
		peg("AUXVILAO").value = "Abuso de poder e preconceito";
		peg("INDECISO").value = "Michael Hawk";
		peg("COMICO").value = "Colegas caminhoneiros";
		peg("DONZELA").value = "Christina Hawk";


		peg("COMUM").value = "Lincoln Hawk vive como caminhoneiro solitário, afastado do filho e tentando sobreviver com dignidade.";
		peg("CONFIGURACAO").value = "A relação rompida com o filho; o sogro rico e autoritário; o universo das competições de queda de braço.";
		peg("CHAMADO").value = "Hawk recebe a chance de viajar com o filho e se reconectar com ele.";
		peg("INERCIA").value = "Michael rejeita o pai, influenciado pelo avô e pela distância emocional.";
		peg("ENCONTRO").value = "Hawk tenta ensinar valores de força, perseverança e caráter ao filho.";
		peg("GATILHO").value = "A morte da mãe de Michael e a tentativa do avô de afastar Hawk definitivamente.";
		peg("TEMA").value = "Hawk decide lutar não só nos torneios, mas pelo direito de ser pai.";
		peg("TRAVESSIA").value = "Pai e filho iniciam a viagem pelas estradas rumo ao campeonato.";
		peg("PROVA").value = "Conflitos emocionais, derrotas, preconceito social e desafios físicos.";
		peg("JOGOS").value = "Competições de queda de braço, treinos improvisados e rivalidades intensas.";
		peg("MEIO").value = "Hawk sofre derrotas importantes e quase perde a guarda do filho.";
		peg("CAVERNA").value = "Hawk entra no campeonato mundial como azarão absoluto.";
		peg("TUDO").value = "Hawk enfrenta os melhores competidores, arriscando perder tudo.";
		peg("DESOLACAO").value = "Derrota iminente e ameaça definitiva de separação do filho.";
		peg("EPIFANIA").value = "Hawk lembra sua promessa ao filho e transforma fraqueza em força.";
		peg("PREMIO").value = "Hawk vence o campeonato e conquista o respeito de todos.";
		peg("CAMINHO").value = "Pai e filho se reconciliam plenamente.";
		peg("RESSURREICAO").value = "Hawk renasce como pai presente e vencedor.";
		peg("RETORNO").value = "Pai e filho seguem juntos, agora como uma verdadeira família.";
		peg("ACAO").value = "vencer o campeonato de queda de braço e reconquistar o amor do filho";


	}
	else if (valor == 9){ //REAL STEEL
		seta("PLOTS1");
		peg("TITULO1").value = "Real";
		peg("TITULO2").value = "Steel";

		peg("HEROI").value = "Charlie Kenton";
		peg("genero_heroi").value = "M";

		peg("MENTOR").value = "Experiência / Max Kenton";
		peg("genero_mentor").value = "M";

		peg("PARCEIRO").value = "Max Kenton";

		peg("VILAO").value = "Zeus";
		peg("AUXVILAO").value = "Farra Lemkova / sistema corporativo";
		peg("INDECISO").value = "Charlie Kenton";
		peg("COMICO").value = "Max Kenton";
		peg("DONZELA").value = "Bailey Tallet";


		peg("COMUM").value = "Charlie Kenton é um ex-boxeador falido que sobrevive promovendo lutas de robôs em arenas menores.";
		peg("CONFIGURACAO").value = "Num futuro próximo, humanos são substituídos por robôs no boxe; Charlie reencontra o filho Max.";
		peg("CHAMADO").value = "Charlie assume temporariamente a guarda de Max após a morte da mãe do garoto.";
		peg("INERCIA").value = "Charlie evita a paternidade e vê o filho apenas como um fardo financeiro.";
		peg("ENCONTRO").value = "Charlie e Max encontram Atom, um robô descartado com grande potencial.";
		peg("GATILHO").value = "Max descobre que Atom pode aprender movimentos humanos e insiste em treiná-lo.";
		peg("TEMA").value = "Charlie decide apostar tudo em Atom e se reconectar com o filho.";
		peg("TRAVESSIA").value = "Pai e filho entram oficialmente no circuito competitivo de lutas de robôs.";
		peg("PROVA").value = "Vitórias inesperadas, derrotas, ajustes técnicos e fortalecimento do vínculo entre pai e filho.";
		peg("JOGOS").value = "Lutas empolgantes, evolução de Atom e crescimento da parceria entre Charlie e Max.";
		peg("MEIO").value = "Atom se torna um fenômeno popular e chama a atenção da liga principal.";
		peg("CAVERNA").value = "Desafio contra Zeus, o robô campeão invencível.";
		peg("TUDO").value = "Atom é duramente castigado e parece incapaz de vencer Zeus.";
		peg("DESOLACAO").value = "Charlie percebe que não pode ganhar pela força, apenas pela coragem e conexão.";
		peg("EPIFANIA").value = "Charlie usa o modo sombra e luta junto com Atom, assumindo seu papel de pai e treinador.";
		peg("PREMIO").value = "Atom perde por pontos, mas conquista o respeito do público e do mundo do boxe.";
		peg("CAMINHO").value = "Charlie escolhe ficar com Max e abandona a vida errante.";
		peg("RESSURREICAO").value = "Charlie renasce como pai responsável e homem reconciliado com seu passado.";
		peg("RETORNO").value = "Pai e filho seguem juntos, prontos para um novo começo.";
		peg("ACAO").value = "construir um campeão improvável e restaurar o vínculo entre pai e filho";

	}	
	else if (valor == 10){ //POINT BREAK
		seta("PLOTS1");
		peg("TITULO1").value = "Point";
		peg("TITULO2").value = "Break";

		peg("HEROI").value = "Johnny Utah";
		peg("genero_heroi").value = "M";

		peg("MENTOR").value = "Angelo Pappas";
		peg("genero_mentor").value = "M";

		peg("PARCEIRO").value = "Tyler Ann Endicott";

		peg("VILAO").value = "Bodhi";
		peg("AUXVILAO").value = "Gangue dos Ex-Presidentes";
		peg("INDECISO").value = "Johnny Utah";
		peg("COMICO").value = "Angelo Pappas";
		peg("DONZELA").value = "Tyler Ann Endicott";

		peg("COMUM").value = "Johnny Utah inicia sua carreira como agente do FBI, tentando provar seu valor após deixar o futebol americano.";
		peg("CONFIGURACAO").value = "Uma série de assaltos a bancos cometidos por surfistas; a cultura do surfe e da adrenalina é apresentada.";
		peg("CHAMADO").value = "Utah recebe a missão de se infiltrar entre surfistas para identificar os assaltantes.";
		peg("INERCIA").value = "Johnny se sente deslocado e despreparado para o mundo do surfe.";
		peg("ENCONTRO").value = "Pappas orienta Johnny na investigação e o introduz à cultura do surfe.";
		peg("GATILHO").value = "Johnny conhece Bodhi, líder carismático que vive pela liberdade e pelo risco.";
		peg("TEMA").value = "Johnny passa a questionar os limites entre dever, identidade e liberdade.";
		peg("TRAVESSIA").value = "Johnny se integra ao grupo de Bodhi e adota o estilo de vida extremo.";
		peg("PROVA").value = "Ondas gigantes, esportes radicais e crimes cada vez mais perigosos.";
		peg("JOGOS").value = "Ação intensa, perseguições, saltos de paraquedas e experiências extremas.";
		peg("MEIO").value = "Johnny descobre que Bodhi é o líder dos assaltos.";
		peg("CAVERNA").value = "O grupo executa o último grande assalto durante uma operação arriscada.";
		peg("TUDO").value = "A identidade de Johnny é revelada e tudo sai do controle.";
		peg("DESOLACAO").value = "Pappas é morto; Johnny perde o mentor e a fé na missão.";
		peg("EPIFANIA").value = "Johnny escolhe seguir Bodhi até o fim, mesmo contra as regras.";
		peg("PREMIO").value = "Bodhi alcança sua onda final e paga por suas escolhas.";
		peg("CAMINHO").value = "Johnny abandona o distintivo do FBI.";
		peg("RESSURREICAO").value = "Johnny renasce como alguém que entende o custo da liberdade absoluta.";
		peg("RETORNO").value = "Johnny observa o oceano, livre do sistema, mas marcado pelas escolhas feitas.";
		peg("ACAO").value = "capturar Bodhi e decidir entre dever e liberdade";

	}	
	else if (valor == 11){ //FAST AND FURIOUS 1
		seta("PLOTS1");
		peg("TITULO1").value = "Fast";
		peg("TITULO2").value = "and Furious";

		peg("HEROI").value = "Brian O'Conner";
		peg("genero_heroi").value = "M";

		peg("MENTOR").value = "Dominic Toretto";
		peg("genero_mentor").value = "M";

		peg("PARCEIRO").value = "Mia Toretto";

		peg("VILAO").value = "Dominic Toretto";
		peg("AUXVILAO").value = "Vince / gangues rivais";
		peg("INDECISO").value = "Brian O'Conner";
		peg("COMICO").value = "Tej Parker";
		peg("DONZELA").value = "Mia Toretto";


		peg("COMUM").value = "Brian O'Conner inicia sua vida em Los Angeles como policial infiltrado no submundo das corridas de rua.";
		peg("CONFIGURACAO").value = "Rachas ilegais, roubos de caminhões e a família Toretto dominam o cenário underground.";
		peg("CHAMADO").value = "Brian recebe a missão de se infiltrar no mundo das corridas para capturar os ladrões.";
		peg("INERCIA").value = "Brian hesita entre cumprir a lei e se integrar ao grupo de Dominic.";
		peg("ENCONTRO").value = "Brian conhece Dominic Toretto, líder carismático e figura paterna do grupo.";
		peg("GATILHO").value = "Brian se apaixona por Mia e ganha a confiança da família Toretto.";
		peg("TEMA").value = "Brian passa a questionar a linha entre justiça, lealdade e família.";
		peg("TRAVESSIA").value = "Brian se torna parte do círculo íntimo das corridas de rua.";
		peg("PROVA").value = "Rachas perigosos, perseguições policiais e testes de lealdade.";
		peg("JOGOS").value = "Corridas intensas, cultura automotiva e rivalidades explosivas.";
		peg("MEIO").value = "Brian descobre que Dom está envolvido nos roubos de caminhões.";
		peg("CAVERNA").value = "O grupo realiza o último roubo, colocando todos em risco.";
		peg("TUDO").value = "Jesse é morto e a família é destruída.";
		peg("DESOLACAO").value = "Brian revela ser policial e rompe com Dom.";
		peg("EPIFANIA").value = "Brian escolhe a lealdade a Dom acima da lei.";
		peg("PREMIO").value = "Brian entrega seu carro a Dom para que ele escape.";
		peg("CAMINHO").value = "Dom foge, e Brian fica para enfrentar as consequências.";
		peg("RESSURREICAO").value = "Brian abandona sua identidade policial e renasce como membro da família.";
		peg("RETORNO").value = "Brian segue um novo caminho, agora guiado por lealdade e escolha própria.";
		peg("ACAO").value = "infiltrar-se nas corridas de rua e decidir entre a lei e a família";

	}		
	else if (valor == 12){ //PINOCCHIO
		seta("PLOTS2");
		peg("TITULO1").value = "Pinóquio";
		peg("TITULO2").value = "";

		peg("HEROI").value = "Pinóquio";
		peg("genero_heroi").value = "M";

		peg("MENTOR").value = "Grilo Falante / Gepeto";
		peg("genero_mentor").value = "M";

		peg("PARCEIRO").value = "Grilo Falante";

		peg("VILAO").value = "Coachman";
		peg("AUXVILAO").value = "João Honesto e Gideão";
		peg("INDECISO").value = "Pinóquio";
		peg("COMICO").value = "Grilo Falante";
		peg("DONZELA").value = "Fada Azul";


		peg("COMUM").value = "Pinóquio vive como um boneco de madeira recém-criado, curioso e ingênuo, desejando ser um menino de verdade.";
		peg("CONFIGURACAO").value = "Gepeto cria Pinóquio; a Fada Azul lhe dá vida; o mundo se mostra cheio de tentações e perigos.";
		peg("CHAMADO").value = "A Fada Azul diz a Pinóquio que ele pode se tornar um menino de verdade se for honesto, corajoso e altruísta.";
		peg("INERCIA").value = "Pinóquio se deixa levar pela curiosidade e pela influência de estranhos, ignorando os conselhos.";
		peg("ENCONTRO").value = "O Grilo Falante assume o papel de consciência e guia moral de Pinóquio.";
		peg("GATILHO").value = "Pinóquio é enganado por João Honesto e Gideão e se afasta do caminho correto.";
		peg("TEMA").value = "Pinóquio precisa aprender responsabilidade e verdade para merecer ser humano.";
		peg("TRAVESSIA").value = "Pinóquio deixa a segurança do lar e entra no mundo real.";
		peg("PROVA").value = "Mentiras, transformação em burro, prisão e exploração.";
		peg("JOGOS").value = "Aventuras fantásticas e lições morais em cenários mágicos.";
		peg("MEIO").value = "Pinóquio se transforma em burro na Ilha dos Prazeres.";
		peg("CAVERNA").value = "Pinóquio enfrenta Monstro no fundo do mar para salvar Gepeto.";
		peg("TUDO").value = "Pinóquio se sacrifica para salvar o pai, aparentemente morrendo.";
		peg("DESOLACAO").value = "Gepeto acredita ter perdido Pinóquio para sempre.";
		peg("EPIFANIA").value = "O sacrifício prova que Pinóquio se tornou verdadeiramente humano.";
		peg("PREMIO").value = "A Fada Azul transforma Pinóquio em um menino de verdade.";
		peg("CAMINHO").value = "Pinóquio retorna ao lar ao lado de Gepeto.";
		peg("RESSURREICAO").value = "Pinóquio renasce como humano, com consciência e responsabilidade.";
		peg("RETORNO").value = "Pai e filho vivem juntos, agora como uma família completa.";
		peg("ACAO").value = "tornar-se um menino de verdade por meio da verdade, coragem e sacrifício";

	}		
	else if (valor == 13){ //AS VIAGENS DE GULLIVERS
		seta("PLOTS3");
		peg("TITULO1").value = "As Viagens";
		peg("TITULO2").value = "de Gulliver";

		peg("HEROI").value = "Lemuel Gulliver";
		peg("genero_heroi").value = "M";

		peg("MENTOR").value = "Experiência / Povos visitados";
		peg("genero_mentor").value = "M";

		peg("PARCEIRO").value = "Habitantes de Lilliput / Brobdingnag";

		peg("VILAO").value = "Orgulho humano";
		peg("AUXVILAO").value = "Conflitos políticos e sociais";
		peg("INDECISO").value = "Lemuel Gulliver";
		peg("COMICO").value = "Lilliputianos";
		peg("DONZELA").value = "Humanidade (simbólica)";

		peg("COMUM").value = "Gulliver vive como médico e marinheiro inglês, levando uma vida comum antes das grandes viagens.";
		peg("CONFIGURACAO").value = "O mundo é apresentado sob diferentes escalas; sociedades exóticas revelam falhas humanas.";
		peg("CHAMADO").value = "Gulliver parte em viagens marítimas em busca de trabalho e aventura.";
		peg("INERCIA").value = "Gulliver acredita na superioridade moral e racional de sua própria sociedade.";
		peg("ENCONTRO").value = "Gulliver aprende com os povos que encontra, ainda que resista às lições.";
		peg("GATILHO").value = "Naufrágios sucessivos levam Gulliver a terras desconhecidas.";
		peg("TEMA").value = "Cada viagem confronta o orgulho e a hipocrisia humana.";
		peg("TRAVESSIA").value = "Gulliver chega a Lilliput e se vê como um gigante entre os pequenos.";
		peg("PROVA").value = "Conflitos políticos absurdos, guerras banais e costumes extremos.";
		peg("JOGOS").value = "Situações satíricas, humor crítico e inversões de perspectiva.";
		peg("MEIO").value = "Gulliver visita Brobdingnag e passa a ser o pequeno em um mundo de gigantes.";
		peg("CAVERNA").value = "Em Laputa e Balnibarbi, Gulliver observa a alienação da razão sem humanidade.";
		peg("TUDO").value = "Em Houyhnhnms, Gulliver confronta a ideia de que humanos são inferiores aos animais racionais.";
		peg("DESOLACAO").value = "Gulliver passa a rejeitar a própria humanidade.";
		peg("EPIFANIA").value = "Gulliver compreende, ainda que de forma amarga, os limites e vícios humanos.";
		peg("PREMIO").value = "Gulliver retorna com conhecimento profundo e crítico sobre o mundo.";
		peg("CAMINHO").value = "Retorno à Inglaterra e à convivência humana.";
		peg("RESSURREICAO").value = "Gulliver renasce como observador crítico, transformado pelas viagens.";
		peg("RETORNO").value = "Vive isolado, incapaz de se reconectar plenamente à sociedade.";
		peg("ACAO").value = "explorar o mundo e confrontar a natureza e o orgulho humanos";

	}	
	else if (valor == 14){ //ALADDIM
		seta("PLOTS2");

		peg("TITULO1").value = "Aladdin";
		peg("TITULO2").value = "";

		peg("HEROI").value = "Aladdin";
		peg("genero_heroi").value = "M";

		peg("MENTOR").value = "Gênio / Sultan (indireto)";
		peg("genero_mentor").value = "M";

		peg("PARCEIRO").value = "Abu";

		peg("VILAO").value = "Jafar";
		peg("AUXVILAO").value = "Iago";
		peg("INDECISO").value = "Aladdin";
		peg("COMICO").value = "Gênio";
		peg("DONZELA").value = "Jasmine";


		peg("COMUM").value = "Aladdin vive como um ladrão de bom coração nas ruas de Agrabah, sonhando com uma vida melhor.";
		peg("CONFIGURACAO").value = "Agrabah é apresentada; Jasmine deseja liberdade; Jafar conspira pelo poder.";
		peg("CHAMADO").value = "Aladdin é recrutado por Jafar para entrar na Caverna das Maravilhas.";
		peg("INERCIA").value = "Aladdin desconfia da proposta, mas vê nela uma chance de mudar de vida.";
		peg("ENCONTRO").value = "Aladdin encontra o Gênio da Lâmpada, que se torna mentor e aliado.";
		peg("GATILHO").value = "Aladdin liberta o Gênio e passa a usar os desejos para se passar por príncipe.";
		peg("TEMA").value = "Aladdin luta entre ser quem realmente é ou fingir ser alguém para ser aceito.";
		peg("TRAVESSIA").value = "Aladdin assume a identidade de Príncipe Ali e entra no palácio.";
		peg("PROVA").value = "Conquista de Jasmine, conflitos com Jafar e uso imprudente dos desejos.";
		peg("JOGOS").value = "Espetáculo, humor, magia e romance — a promessa da fantasia se cumpre.";
		peg("MEIO").value = "Jafar descobre a identidade de Aladdin e rouba a lâmpada.";
		peg("CAVERNA").value = "Aladdin perde tudo e precisa agir sem magia.";
		peg("TUDO").value = "Jafar se torna um gênio todo-poderoso.";
		peg("DESOLACAO").value = "Aladdin parece incapaz de vencer Jafar sem desejos.";
		peg("EPIFANIA").value = "Aladdin engana Jafar usando sua própria ambição.";
		peg("PREMIO").value = "Jafar é derrotado e aprisionado na lâmpada.";
		peg("CAMINHO").value = "Aladdin decide abrir mão da mentira e da falsa identidade.";
		peg("RESSURREICAO").value = "Aladdin renasce sendo fiel a si mesmo.";
		peg("RETORNO").value = "Aladdin liberta o Gênio e inicia uma nova vida ao lado de Jasmine.";
		peg("ACAO").value = "derrotar Jafar e provar que valor não depende de status";


	}		
	else if (valor == 15){ //THE WIZARD OF OZ
		seta("PLOTS4");
		peg("TITULO1").value = "The Wizard";
		peg("TITULO2").value = "of Oz";

		peg("HEROI").value = "Dorothy Gale";
		peg("genero_heroi").value = "F";

		peg("MENTOR").value = "Glinda";
		peg("genero_mentor").value = "F";

		peg("PARCEIRO").value = "Espantalho";

		peg("VILAO").value = "Bruxa Má do Oeste";
		peg("AUXVILAO").value = "Macacos Alados";
		peg("INDECISO").value = "Mágico de Oz";
		peg("COMICO").value = "Leão Covarde";
		peg("DONZELA").value = "Dorothy Gale";


		peg("COMUM").value = "Dorothy vive com seus tios no Kansas, sonhando com um lugar melhor além do arco-íris.";
		peg("CONFIGURACAO").value = "Um tornado leva Dorothy a Oz; as bruxas, a estrada de tijolos amarelos e o mundo mágico são apresentados.";
		peg("CHAMADO").value = "Dorothy é instruída a seguir até a Cidade das Esmeraldas para encontrar o Mágico de Oz.";
		peg("INERCIA").value = "Dorothy sente medo e deseja apenas voltar para casa.";
		peg("ENCONTRO").value = "Dorothy encontra seus companheiros: Espantalho, Homem de Lata e Leão Covarde.";
		peg("GATILHO").value = "A Bruxa Má do Oeste passa a persegui-la por causa dos sapatos mágicos.";
		peg("TEMA").value = "Dorothy aprende que aquilo que busca já existe dentro de si e dos amigos.";
		peg("TRAVESSIA").value = "Dorothy segue pela estrada de tijolos amarelos rumo à Cidade das Esmeraldas.";
		peg("PROVA").value = "Desafios, armadilhas da bruxa e testes de coragem, coração e inteligência.";
		peg("JOGOS").value = "Aventuras fantásticas, músicas e descobertas mágicas.";
		peg("MEIO").value = "O Mágico exige que derrotem a Bruxa Má do Oeste.";
		peg("CAVERNA").value = "Dorothy invade o castelo da bruxa para resgatar seus amigos.";
		peg("TUDO").value = "Dorothy é capturada e tudo parece perdido.";
		peg("DESOLACAO").value = "A contagem regressiva da ampulheta ameaça a vida de Dorothy.";
		peg("EPIFANIA").value = "Dorothy derrota a bruxa ao jogar água nela.";
		peg("PREMIO").value = "Os amigos recebem aquilo que sempre tiveram dentro de si.";
		peg("CAMINHO").value = "Dorothy retorna à Cidade das Esmeraldas.";
		peg("RESSURREICAO").value = "Dorothy compreende o verdadeiro significado de lar.";
		peg("RETORNO").value = "Dorothy volta ao Kansas, transformada pela experiência.";
		peg("ACAO").value = "voltar para casa e descobrir o valor do próprio lar";


	}	
	else if (valor == 16){ //DRACULA
		seta("PLOTS1");

		peg("TITULO1").value = "Dracula";
		peg("TITULO2").value = "";

		peg("HEROI").value = "Jonathan Harker";
		peg("genero_heroi").value = "M";

		peg("MENTOR").value = "Professor Van Helsing";
		peg("genero_mentor").value = "M";

		peg("PARCEIRO").value = "Mina Murray";

		peg("VILAO").value = "Conde Drácula";
		peg("AUXVILAO").value = "As Noivas de Drácula / Renfield";
		peg("INDECISO").value = "Renfield";
		peg("COMICO").value = "Arthur Holmwood";
		peg("DONZELA").value = "Mina Murray";


		peg("COMUM").value = "Jonathan Harker vive uma vida comum como jovem advogado na Inglaterra vitoriana.";
		peg("CONFIGURACAO").value = "Jonathan viaja à Transilvânia; o castelo de Drácula revela um ambiente sombrio e ameaçador.";
		peg("CHAMADO").value = "Jonathan é enviado para auxiliar o Conde Drácula em uma transação imobiliária.";
		peg("INERCIA").value = "Jonathan ignora os avisos e tenta manter uma postura racional diante do estranho.";
		peg("ENCONTRO").value = "Van Helsing surge como mentor ao identificar a natureza vampírica de Drácula.";
		peg("GATILHO").value = "Drácula parte para a Inglaterra espalhando morte e corrupção.";
		peg("TEMA").value = "A luta entre razão e superstição, vida e morte, bem e mal.";
		peg("TRAVESSIA").value = "O grupo decide enfrentar Drácula usando conhecimento e fé.";
		peg("PROVA").value = "Lucy adoece; confrontos com vampiros; descoberta dos caixões de terra.";
		peg("JOGOS").value = "Investigação, terror gótico e suspense psicológico.";
		peg("MEIO").value = "Lucy morre e retorna como vampira, forçando o grupo a agir.";
		peg("CAVERNA").value = "Perseguição final a Drácula de volta à Transilvânia.";
		peg("TUDO").value = "Drácula parece invencível e Mina é parcialmente corrompida.";
		peg("DESOLACAO").value = "O tempo se esgota antes do pôr do sol.";
		peg("EPIFANIA").value = "O grupo une ciência, fé e coragem para derrotar Drácula.";
		peg("PREMIO").value = "Drácula é destruído e o mal é interrompido.";
		peg("CAMINHO").value = "Mina é libertada da influência vampírica.";
		peg("RESSURREICAO").value = "A ordem natural é restaurada.";
		peg("RETORNO").value = "O grupo retorna à Inglaterra com a paz restabelecida.";
		peg("ACAO").value = "destruir Drácula e salvar Mina da escuridão eterna";


	}	
	else if (valor == 17){ //SUPERMAN 1
		seta("PLOTS2");

		peg("TITULO1").value = "Superman";
		peg("TITULO2").value = "O Filme";

		peg("HEROI").value = "Clark Kent / Superman";
		peg("genero_heroi").value = "M";

		peg("MENTOR").value = "Jor-El";
		peg("genero_mentor").value = "M";

		peg("PARCEIRO").value = "Lois Lane";

		peg("VILAO").value = "Lex Luthor";
		peg("AUXVILAO").value = "Otis / Eve Teschmacher";
		peg("INDECISO").value = "Eve Teschmacher";
		peg("COMICO").value = "Otis";
		peg("DONZELA").value = "Lois Lane";

		peg("COMUM").value = "Clark Kent cresce como um jovem simples em Smallville, criado pelos pais adotivos.";
		peg("CONFIGURACAO").value = "A descoberta de seus poderes e da herança kryptoniana muda sua percepção do mundo.";
		peg("CHAMADO").value = "Clark é guiado pela mensagem de Jor-El para assumir seu destino.";
		peg("INERCIA").value = "Ele hesita em revelar quem realmente é e viver abertamente como herói.";
		peg("ENCONTRO").value = "Jor-El, através do cristal, ensina Clark sobre responsabilidade e propósito.";
		peg("GATILHO").value = "Clark decide ir a Metrópolis e usar seus poderes para ajudar a humanidade.";
		peg("TEMA").value = "Responsabilidade, esperança e o uso do poder para o bem.";
		peg("TRAVESSIA").value = "Clark assume a identidade de Superman diante do mundo.";
		peg("PROVA").value = "Salvar vidas, conquistar a confiança da população e enfrentar ameaças humanas.";
		peg("JOGOS").value = "Resgates espetaculares, dilemas morais e adaptação à vida dupla.";
		peg("MEIO").value = "Lex Luthor revela seu plano de destruir a Califórnia com mísseis nucleares.";
		peg("CAVERNA").value = "Superman precisa deter os mísseis e salvar Lois simultaneamente.";
		peg("TUDO").value = "Lois morre e Superman parece ter falhado em sua missão.";
		peg("DESOLACAO").value = "A perda de Lois coloca em xeque seus limites e sua fé.";
		peg("EPIFANIA").value = "Superman desafia o impossível movido pelo amor e pela esperança.";
		peg("PREMIO").value = "Lois é salva e o plano de Luthor é frustrado.";
		peg("CAMINHO").value = "Superman aceita plenamente seu papel como protetor da Terra.";
		peg("RESSURREICAO").value = "O herói reafirma seu compromisso com a humanidade.";
		peg("RETORNO").value = "A paz retorna a Metrópolis sob a vigilância de Superman.";
		peg("ACAO").value = "proteger a humanidade e inspirar esperança como símbolo do bem";


	}	
	else if (valor == 18){ //KINGKONG
		seta("PLOTS1");

		peg("TITULO1").value = "King";
		peg("TITULO2").value = "Kong";

		peg("HEROI").value = "King Kong";
		peg("genero_heroi").value = "M";

		peg("MENTOR").value = "Ann Darrow";
		peg("genero_mentor").value = "F";

		peg("PARCEIRO").value = "Ann Darrow";

		peg("VILAO").value = "Carl Denham";
		peg("AUXVILAO").value = "A Civilização Humana";
		peg("INDECISO").value = "Jack Driscoll";
		peg("COMICO").value = "Carl Denham";
		peg("DONZELA").value = "Ann Darrow";

		peg("COMUM").value = "Ann Darrow vive na miséria durante a Grande Depressão, enquanto Kong reina isolado na Ilha da Caveira.";
		peg("CONFIGURACAO").value = "Uma expedição cinematográfica parte em busca de uma ilha misteriosa e desconhecida.";
		peg("CHAMADO").value = "Ann aceita participar da viagem liderada por Carl Denham.";
		peg("INERCIA").value = "O grupo ignora os alertas sobre os perigos da Ilha da Caveira.";
		peg("ENCONTRO").value = "Ann é capturada pelos nativos e oferecida a Kong.";
		peg("GATILHO").value = "Kong cria um vínculo emocional com Ann ao protegê-la dos perigos da ilha.";
		peg("TEMA").value = "A beleza, a compaixão e o conflito entre natureza e civilização.";
		peg("TRAVESSIA").value = "Kong é capturado e levado para Nova York.";
		peg("PROVA").value = "Kong enfrenta a violência, o medo e a exploração humana.";
		peg("JOGOS").value = "Fuga de Kong pela cidade e sua tentativa de proteger Ann.";
		peg("MEIO").value = "Kong escala o Empire State Building para se defender.";
		peg("CAVERNA").value = "Kong enfrenta aviões militares no topo do edifício.";
		peg("TUDO").value = "Kong é mortalmente ferido enquanto protege Ann.";
		peg("DESOLACAO").value = "A queda de Kong simboliza a derrota da inocência pela ambição humana.";
		peg("EPIFANIA").value = "A humanidade percebe tarde demais o erro cometido.";
		peg("PREMIO").value = "Ann sobrevive e aprende sobre empatia e respeito à vida.";
		peg("CAMINHO").value = "O mundo retorna à normalidade, marcado pela tragédia.";
		peg("RESSURREICAO").value = "Kong se torna um símbolo eterno da beleza trágica.";
		peg("RETORNO").value = "A história de Kong permanece como alerta moral.";
		peg("ACAO").value = "explorar o conflito entre amor, poder e destruição";


	}		
	else if (valor == 19){ //THE UNGLY DUCKLING
		seta("PLOTS2");

		peg("TITULO1").value = "The";
		peg("TITULO2").value = "Ugly Duckling";

		peg("HEROI").value = "Ugly Duckling";
		peg("genero_heroi").value = "M";

		peg("MENTOR").value = "Mother Duck / Nature";
		peg("genero_mentor").value = "F";

		peg("PARCEIRO").value = "The Seasons";

		peg("VILAO").value = "Rejection";
		peg("AUXVILAO").value = "Other Animals";
		peg("INDECISO").value = "The Duckling Himself";
		peg("COMICO").value = "Barnyard Animals";
		peg("DONZELA").value = "Acceptance";

		peg("COMUM").value = "O patinho nasce diferente dos outros e sofre rejeição desde o início.";
		peg("CONFIGURACAO").value = "O ambiente do lago e da fazenda revela padrões rígidos de aparência e pertencimento.";
		peg("CHAMADO").value = "O patinho é forçado a deixar o lar por não ser aceito.";
		peg("INERCIA").value = "Ele tenta se adaptar, mas continua sendo rejeitado em todos os lugares.";
		peg("ENCONTRO").value = "A natureza e o tempo tornam-se seus mestres silenciosos.";
		peg("GATILHO").value = "O patinho sobrevive ao inverno mais rigoroso, apesar da solidão.";
		peg("TEMA").value = "Identidade, aceitação e o valor da transformação interior.";
		peg("TRAVESSIA").value = "A passagem do tempo e das estações transforma o patinho.";
		peg("PROVA").value = "Solidão, frio, fome e exclusão testam sua resistência.";
		peg("JOGOS").value = "Tentativas frustradas de pertencimento e pequenas esperanças.";
		peg("MEIO").value = "O patinho acredita que nunca encontrará seu lugar.";
		peg("CAVERNA").value = "O inverno simboliza o ponto mais baixo de sua existência.";
		peg("TUDO").value = "Ele se vê diante de belos cisnes, esperando ser rejeitado novamente.";
		peg("DESOLACAO").value = "O medo de mais uma humilhação paralisa o patinho.";
		peg("EPIFANIA").value = "Ele percebe que sempre foi um cisne.";
		peg("PREMIO").value = "Aceitação, pertencimento e autoestima.";
		peg("CAMINHO").value = "O cisne passa a viver entre os seus semelhantes.";
		peg("RESSURREICAO").value = "O patinho renasce como um cisne pleno e confiante.";
		peg("RETORNO").value = "Sua história inspira empatia e compreensão.";
		peg("ACAO").value = "descobrir a própria identidade e alcançar a aceitação";


	}	
	else if (valor == 20){ //Alice in Wonderland
		seta("PLOTS2");

		peg("TITULO1").value = "Alice";
		peg("TITULO2").value = "in Wonderland";

		peg("HEROI").value = "Alice";
		peg("genero_heroi").value = "F";

		peg("MENTOR").value = "Lagarta Azul";
		peg("genero_mentor").value = "M";

		peg("PARCEIRO").value = "Chapeleiro Maluco";

		peg("VILAO").value = "Rainha de Copas";
		peg("AUXVILAO").value = "Valete de Copas";
		peg("INDECISO").value = "Gato de Cheshire";
		peg("COMICO").value = "Chapeleiro Maluco";
		peg("DONZELA").value = "A própria Alice";

		peg("COMUM").value = "Alice vive uma vida entediante e previsível no mundo real, regido por regras rígidas.";
		peg("CONFIGURACAO").value = "O País das Maravilhas é apresentado como um mundo caótico, ilógico e surreal.";
		peg("CHAMADO").value = "Alice segue o Coelho Branco e cai na toca.";
		peg("INERCIA").value = "Ela tenta aplicar a lógica do mundo real para entender o novo lugar.";
		peg("ENCONTRO").value = "Alice encontra criaturas excêntricas que questionam sua identidade.";
		peg("GATILHO").value = "As mudanças de tamanho fazem Alice perder o senso de controle.";
		peg("TEMA").value = "Identidade, crescimento e questionamento das regras impostas.";
		peg("TRAVESSIA").value = "Alice aceita a lógica própria do País das Maravilhas.";
		peg("PROVA").value = "Diálogos absurdos, testes de identidade e confrontos verbais.";
		peg("JOGOS").value = "Chá maluco, jogos de croqué e situações paradoxais.";
		peg("MEIO").value = "Alice percebe que o mundo funciona sem sentido fixo.";
		peg("CAVERNA").value = "O julgamento absurdo conduzido pela Rainha de Copas.";
		peg("TUDO").value = "Alice é condenada sem lógica ou justiça.";
		peg("DESOLACAO").value = "Ela se sente pequena e impotente diante da arbitrariedade.";
		peg("EPIFANIA").value = "Alice percebe que o poder da Rainha é ilusório.";
		peg("PREMIO").value = "Autoconfiança e clareza sobre quem ela é.";
		peg("CAMINHO").value = "Alice enfrenta a Rainha sem medo.";
		peg("RESSURREICAO").value = "Alice desperta amadurecida e segura de si.";
		peg("RETORNO").value = "Ela retorna ao mundo real com nova percepção.";
		peg("ACAO").value = "descobrir a própria identidade em um mundo sem lógica";


	}
	else if (valor == 21){ //Le Comte de Monte-Cristo
		seta("PLOTS2");

		peg("TITULO1").value = "Le Comte";
		peg("TITULO2").value = "de Monte-Cristo";

		peg("HEROI").value = "Edmond Dantès";
		peg("genero_heroi").value = "M";

		peg("MENTOR").value = "Abbé Faria";
		peg("genero_mentor").value = "M";

		peg("PARCEIRO").value = "Haydée";

		peg("VILAO").value = "Fernand Mondego";
		peg("AUXVILAO").value = "Danglars / Villefort";
		peg("INDECISO").value = "Mercédès";
		peg("COMICO").value = "Caderousse";
		peg("DONZELA").value = "Mercédès";

		peg("COMUM").value = "Edmond Dantès é um jovem marinheiro honesto e promissor, prestes a se casar.";
		peg("CONFIGURACAO").value = "Intrigas políticas e inveja levam à sua prisão injusta no Castelo de If.";
		peg("CHAMADO").value = "A traição dos que o invejam muda brutalmente seu destino.";
		peg("INERCIA").value = "Edmond perde a esperança após anos de prisão e sofrimento.";
		peg("ENCONTRO").value = "Ele conhece o Abbé Faria, que lhe oferece conhecimento, propósito e um plano.";
		peg("GATILHO").value = "A morte de Faria e a revelação do tesouro de Monte Cristo.";
		peg("TEMA").value = "Justiça, vingança, redenção e os limites da misericórdia.";
		peg("TRAVESSIA").value = "Edmond escapa da prisão e encontra o tesouro.";
		peg("PROVA").value = "Transformar-se no Conde e arquitetar sua vingança.";
		peg("JOGOS").value = "Manipulações sociais, armadilhas morais e quedas calculadas dos inimigos.";
		peg("MEIO").value = "A vingança começa a afetar inocentes.";
		peg("CAVERNA").value = "Edmond confronta o peso moral de seus atos.";
		peg("TUDO").value = "Ele percebe que assumiu o papel da Providência.";
		peg("DESOLACAO").value = "O sofrimento causado revela o preço da vingança.";
		peg("EPIFANIA").value = "Edmond entende que apenas Deus pode julgar plenamente.";
		peg("PREMIO").value = "Liberdade interior e possibilidade de amor verdadeiro.";
		peg("CAMINHO").value = "Ele interrompe o ciclo de ódio.";
		peg("RESSURREICAO").value = "Edmond renasce como homem reconciliado consigo mesmo.";
		peg("RETORNO").value = "Parte com Haydée, deixando o passado para trás.";
		peg("ACAO").value = "buscar justiça sem perder a própria humanidade";

	}
	else if (valor == 22){ //ROMEO AND JULIET
	
		seta("PLOTS6");

		peg("TITULO1").value = "Romeo";
		peg("TITULO2").value = "and Juliet";

		peg("HEROI").value = "Romeo Montague";
		peg("genero_heroi").value = "M";

		peg("MENTOR").value = "Frei Laurence";
		peg("genero_mentor").value = "M";

		peg("PARCEIRO").value = "Juliet Capulet";

		peg("VILAO").value = "Ódio entre as famílias";
		peg("AUXVILAO").value = "Teobaldo / Destino";
		peg("INDECISO").value = "Juliet Capulet";
		peg("COMICO").value = "Mercutio";
		peg("DONZELA").value = "Juliet Capulet";

		peg("COMUM").value = "Romeo vive em Verona em meio à rivalidade histórica entre Montagues e Capulets.";
		peg("CONFIGURACAO").value = "O conflito entre as famílias domina a cidade e alimenta violência constante.";
		peg("CHAMADO").value = "Romeo conhece Juliet em um baile e se apaixona instantaneamente.";
		peg("INERCIA").value = "O amor é impossível devido ao ódio familiar.";
		peg("ENCONTRO").value = "Frei Laurence acredita que a união pode trazer paz entre as famílias.";
		peg("GATILHO").value = "O casamento secreto de Romeo e Juliet.";
		peg("TEMA").value = "Amor, destino, ódio, impulsividade e tragédia.";
		peg("TRAVESSIA").value = "Romeo desafia o conflito familiar para viver o amor proibido.";
		peg("PROVA").value = "Confrontos violentos e decisões precipitadas.";
		peg("JOGOS").value = "Duelo, vingança e erros de comunicação.";
		peg("MEIO").value = "Romeo mata Teobaldo e é banido de Verona.";
		peg("CAVERNA").value = "Juliet enfrenta a perda, a solidão e o desespero.";
		peg("TUDO").value = "O plano do falso veneno para escapar do destino imposto.";
		peg("DESOLACAO").value = "Romeo acredita que Juliet está morta.";
		peg("EPIFANIA").value = "A compreensão do amor absoluto vem tarde demais.";
		peg("PREMIO").value = "A reconciliação das famílias através do sacrifício.";
		peg("CAMINHO").value = "O amor verdadeiro se consuma na morte.";
		peg("RESSURREICAO").value = "Não há renascimento individual, apenas lição coletiva.";
		peg("RETORNO").value = "As famílias encerram o ciclo de ódio.";
		peg("ACAO").value = "amar intensamente, mesmo diante da destruição";
	
	
	}
}