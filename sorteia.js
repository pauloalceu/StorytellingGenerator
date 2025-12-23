function sorteia(item){
	var nomes =  ["Qrutrix","Oruxeor","Ushan","Ugovras","Igoxium","Ataz","Ilrolius","Azadium","Oharad","Olozor","Qruprix","Qraqium","Oligron","Ophior","Equam","Grijahr","Aharis","Olzoxon","Aqinn","Aharise","Anydae","Atosh","Neharise","Estrea","Arexone","Nubis","Ulobelle","Rephaen","Udephyx","Ewaelle","Nughis","Chodeis","Asizith","Zivia","Phazohra","Nivile","Omiharise","Uzogaell","The Magnificent","The Crow","The Dread","The Dire One","The Venom Tongue","Raveneye","Proudstrike","Hell Grim","Fuse Hand","Bonebane","The Cursed","The Wild","The Delirious","The Marked One","The Legionnaire","Skullblood","Greatpelt","Thunderscar","Shieldbolt","Shadowblood","Conrad del Río","Davie","Moyse","Garner","Dandi","Willelm","Ivon","Bartholomew","Valter","Gregory","Tybalt","Auguinare","Dickory","Steuan","Harry","Gualtie","Tibbott","Geoff","Amaury","Jervis","Svenhylde","Hrigjold","Agagrdrifa","Hrurior","Skaldr","Svepul","Skaronul","Geimadra","Frileif","Regigabi","Hivif","Sanrun","Hjogjold","Hervif","Goronul","Gerun","Mipul","Rogjold","Ald","Skondul","Regirja","Thrugin","Sind","Satha","Svarja","Sannhildr","Santa","Hladmadra","Vala","Skolmold","Neldor","Beistina","Mitalar","Leokalyn","Alabyran","Herra","Thallan","Venwarin","Thuridan","Wysaro","Gaelin","Wysanorin","Aimon","Wysamoira","Akkar","Zyllana","Pirphal","Caiwarin","Beldroth","Triszumin","Folre","Lusandoral","Iefyr","Quinorin","Luirlan","Trisro","Kieran","Balrieth","Gaeleath","Traphine","Thuridan","Caiqirelle","Aolis","Olamaris","Elkhazel","Theris","Delmuth","Phifir","Travaran","Iangolor","Saria","Carlynn","Annallee","Dorsys","Tiriana","Qirel","Itylara","Farna","Ildilyntra","Raloydark","Ilsevel","Aralar","Daethie","Trisxina","Immianthe","Gilbanise","Daethie","Sylbalar","Lensa","Kylantha","Farric","Merlara","Genlar","Yathanae","Yelbella","Nushala","Elgella","Ratha","Venthana","Nalaea","Luharice","Ashera","Valxina","Faylen","Envalur","Tarasynora","Glynxisys","Alyndra","Valwraek","Gardrotir","Blazingmaul","Araborlug","Kragflayer","Bandraed","Hillbane","Elkdraic","Bonearm","Kuvreal","Goldriver","Orirerlun","Dragonshield","Bebaic","Cavethane","Grotmec","Bottleblade","Lorgruth","Cragthane","Grournirlun","Silverthane","Runmin","Blazingguard","Duldrur","Beastbasher","Glammag","Lightbrow","Adduk","Blackgrip","Dhummorli","Keghand","Umizzumri","Flatshoulder","Reinmeac","Redfury","Dosonlir","Brickshoulder","Hakkouth","Ashmail","Lokdrel","Blessedbender","Thargreasli","Oakenmace","Befaetalin","Strongbreaker","Bubrawynn","Merryriver","Brutatrud","Bloodhelm","Dhuznaegar","Greyarm","Groubaelynn","Axefury","Arakhusli","Darkbuster","Koleagith","Frostshield","Brubrure","Orcspine","Thumwuhulda","Heavybuster","Aradmogith","Merrymaul","Nazmaginn","Blazingrock","Ruldrutalyn","Orehide","Khourgatalyn","Warmrock","Karfisli","Orcmace","Ufrubo","Snowguard","Kandritelyn","Treasurebranch","Brolmeatelin","Warmdelver","Douraela","Wraithheart","Asseagit","Wyvernbeard","Gelippe","Drylameia","Kroutrera","Creope","Preoxdice","Scandrithippe","Klorpiybe","Clichilene","Vendruope","Ophiameia","Gledyestra","Driodcabe","Kluycleia","Iodhaedra","Coexpesia","Dulcaonache","Glidothye","Ebroecyra","Aopheoyche","Kalounestra","Pagone","Ykdora","Kreihaedra","Nudice","Bicyone","Pamecleia","Chriomnedora","Kloendrucyra","Breppioope","Kreontuope","Yiliope","Gurymeia","Voegea","Clurecyra","Kosypadia","Smouptioanta","Soucloeliope","Eiphnuyne","Iodmetane","Cryclodora","Xudreto","Drumusose","Gieyope","Chriises","Psokyrbe","Cintinara","Fophnice","Chrephnacyone","Oxoepeia","Psokupyle","Nohyia","Edupesia","Chreiphale","Preyyrbe","Rhypesia","Prechoenice","Chriosoeippe","Thubreothoe","Krirgimache","Chrelcophale"];

//raça: Humano / Mostro / 
// name: String
// sexo: M/F/ND
// idade: int
// tipocorporal: fraco/ medio / forte
// altura: float
// peso: float
// pele: negra / branca / parda / escamoso

let personagens = [
  { "id": 1, "raca": "Humano", "name": "Pedro","sexo": "M","idade": "17","tipocorporal": "17","altura": "17","peso": "17","pele": "17","cabelo": "17","olhos": "17","intelectual": "17","profissao": "estudante","hobbie": "colecionar","medo": "aranhas","sexualidade": "heterosexual",
    "equipamentos": [  
      { "id": 1, "arma": "Espada Simples" },
      { "id": 2, "escudo": "Escudo Simples" }
    ]
  },
  { "id": 2, "raca": "Humano", "name": "Kayla","sexo": "F","idade": "16","tipocorporal": "17","altura": "17","peso": "17","pele": "17","cabelo": "17","olhos": "17","intelectual": "17","profissao": "estudante","hobbie": "colecionar","medo": "aranhas","sexualidade": "heterosexual",
    "equipamentos": [
      { "id": 1, "arma": "Espada Simples" },
      { "id": 2, "escudo": "Escudo Simples" }
    ]
  },
  { "id": 3, "raca": "Humano", "name": "Aidan","sexo": "M","idade": "16","tipocorporal": "17","altura": "17","peso": "17","pele": "17","cabelo": "17","olhos": "17","intelectual": "17","profissao": "estudante","hobbie": "colecionar","medo": "aranhas","sexualidade": "heterosexual",
    "equipamentos": [
      { "id": 1, "arma": "Espada Simples" },
      { "id": 2, "escudo": "Escudo Simples" }
    ]
  },
  { "id": 4, "raca": "Humano", "name": "Kim","sexo": "F","idade": "18","tipocorporal": "17","altura": "17","peso": "17","pele": "17","cabelo": "17","olhos": "17","intelectual": "17","profissao": "estudante","hobbie": "colecionar","medo": "aranhas","sexualidade": "heterosexual",
    "equipamentos": [
      { "id": 1, "arma": "Espada Simples" },
      { "id": 2, "escudo": "Escudo Simples" }
    ]
  },
    { "id": 5, "raca": "Humano", "name": "Kim","sexo": "M","idade": "17","tipocorporal": "17","altura": "17","peso": "17","pele": "17","cabelo": "17","olhos": "17","intelectual": "17","profissao": "estudante","hobbie": "colecionar","medo": "aranhas","sexualidade": "heterosexual",
    "equipamentos": [
      { "id": 1, "arma": "Espada Simples" },
      { "id": 2, "escudo": "Escudo Simples" }
    ]
  },
    { "id": 6, "raca": "Humano", "name": "Thion","sexo": "M","idade": "19","tipocorporal": "17","altura": "17","peso": "17","pele": "17","cabelo": "17","olhos": "17","intelectual": "17","profissao": "estudante","hobbie": "colecionar","medo": "aranhas","sexualidade": "heterosexual",
    "equipamentos": [
      { "id": 1, "arma": "Espada Simples" },
      { "id": 2, "escudo": "Escudo Simples" }
    ]
  },
    { "id": 7, "raca": "Humano", "name": "If","sexo": "M","idade": "27","tipocorporal": "17","altura": "17","peso": "17","pele": "17","cabelo": "17","olhos": "17","intelectual": "17","profissao": "estudante","hobbie": "colecionar","medo": "aranhas","sexualidade": "heterosexual",
    "equipamentos": [
      { "id": 1, "arma": "Espada Simples" },
      { "id": 2, "escudo": "Escudo Simples" }
    ]
  },
    { "id": 8, "raca": "Humano", "name": "Tyunn","sexo": "F","idade": "37","tipocorporal": "17","altura": "17","peso": "17","pele": "17","cabelo": "17","olhos": "17","intelectual": "17","profissao": "estudante","hobbie": "colecionar","medo": "aranhas","sexualidade": "heterosexual",
    "equipamentos": [
      { "id": 1, "arma": "Espada Simples" },
      { "id": 2, "escudo": "Escudo Simples" }
    ]
  },
    { "id": 9, "raca": "Humano", "name": "Aun","sexo": "M","idade": "25","tipocorporal": "17","altura": "17","peso": "17","pele": "17","cabelo": "17","olhos": "17","intelectual": "17","profissao": "estudante","hobbie": "colecionar","medo": "aranhas","sexualidade": "heterosexual",
    "equipamentos": [
      { "id": 1, "arma": "Espada Simples" },
      { "id": 2, "escudo": "Escudo Simples" }
    ]
  },
    { "id": 10, "raca": "Humano", "name": "Tyorgrirn","sexo": "M","idade": "17","tipocorporal": "17","altura": "17","peso": "17","pele": "17","cabelo": "17","olhos": "17","intelectual": "17","profissao": "estudante","hobbie": "colecionar","medo": "aranhas","sexualidade": "heterosexual",
    "equipamentos": [
      { "id": 1, "arma": "Espada Simples" },
      { "id": 2, "escudo": "Escudo Simples" }
    ]
  },
    { "id": 11, "raca": "Humano", "name": "Vorrus","sexo": "M","idade": "19","tipocorporal": "17","altura": "17","peso": "17","pele": "17","cabelo": "17","olhos": "17","intelectual": "17","profissao": "estudante","hobbie": "colecionar","medo": "aranhas","sexualidade": "heterosexual",
    "equipamentos": [
      { "id": 1, "arma": "Espada Simples" },
      { "id": 2, "escudo": "Escudo Simples" }
    ]
  },
    { "id": 12, "raca": "Humano", "name": "Grafralf","sexo": "M","idade": "49","tipocorporal": "17","altura": "17","peso": "17","pele": "17","cabelo": "17","olhos": "17","intelectual": "17","profissao": "estudante","hobbie": "colecionar","medo": "aranhas","sexualidade": "heterosexual",
    "equipamentos": [
      { "id": 1, "arma": "Espada Simples" },
      { "id": 2, "escudo": "Escudo Simples" }
    ]
  },
    { "id": 13, "raca": "Humano", "name": "Raslerd","sexo": "M","idade": "33","tipocorporal": "17","altura": "17","peso": "17","pele": "17","cabelo": "17","olhos": "17","intelectual": "17","profissao": "estudante","hobbie": "colecionar","medo": "aranhas","sexualidade": "heterosexual",
    "equipamentos": [
      { "id": 1, "arma": "Espada Simples" },
      { "id": 2, "escudo": "Escudo Simples" }
    ]
  },
    { "id": 14, "raca": "Humano", "name": "Thrunskulr","sexo": "M","idade": "49","tipocorporal": "forte","altura": "17","peso": "17","pele": "17","cabelo": "17","olhos": "17","intelectual": "17","profissao": "estudante","hobbie": "colecionar","medo": "aranhas","sexualidade": "heterosexual",
    "equipamentos": [
      { "id": 1, "arma": "Espada Simples" },
      { "id": 2, "escudo": "Escudo Simples" }
    ]
  },
    { "id": 15, "raca": "Humano", "name": "Urhan","sexo": "M","idade": "49","tipocorporal": "normal","altura": "17","peso": "17","pele": "17","cabelo": "17","olhos": "17","intelectual": "17","profissao": "estudante","hobbie": "colecionar","medo": "aranhas","sexualidade": "heterosexual",
    "equipamentos": [
      { "id": 1, "arma": "Espada Simples" },
      { "id": 2, "escudo": "Escudo Simples" }
    ]
  },
    { "id": 16, "raca": "Humano", "name": "Ejamar","sexo": "M","idade": "49","tipocorporal": "normal","altura": "17","peso": "17","pele": "17","cabelo": "17","olhos": "17","intelectual": "17","profissao": "estudante","hobbie": "colecionar","medo": "aranhas","sexualidade": "heterosexual",
    "equipamentos": [
      { "id": 1, "arma": "Espada Simples" },
      { "id": 2, "escudo": "Escudo Simples" }
    ]
  }
];	
	
	
	var verbo = ["salvar", "destruir", "procurar", "sequestrar", "fugir de", "fugir de", "atacar","Decifrar um enigma relacionado a"];
	var obj = ["seu filho", "sua mãe", "seus tios", "uns monstros", "uma magia", "um anel",  "um talismã", "um tesouro", "um navio", "um item mágico", "seu pai", "seu mundo", "seus amigos", "seus inimigos"];
	var comum = ["sua pequena fazenda","na sua grande fazenda","na sua grande casa","no seu trailer","seu minusculo apartamento","na sua grande Cobertura","numa Vila","no Condado","sua casa","seu pequeno planeta natal","seu pequena Cidade","nos fundos de um Bar","na Floresta","no Deserto","seu pequeno esconderijo","seu pequeno apartamento","na sua pequena Vila","seu pequeno apartamento"];
	var chamado = ["recebe uma mensagem de socorro","herda um item amaldiçoado","recebe uma mensagem em seu computador","recebe uma mensagem","recebe uma carta convite","é convocado para uma aventura"];
    var configuracao = ["vai comprar algumas coisas","participa da festa ","participa da festa de aniversário","vai trabalhar em um dia comum","fica em casa","cuida do seu jardim","brinca com seus cachorros","brinca com seu gato","alimenta seus peixeis no seu aquario","lê um livro","assiste um filme","limpa a casa","limpa seu carro","vai a um supermercado","briga com sua família","almoça com sua família","leva seu filho para a escola","vai para a escola","vai para o trabalho","brincam ao ar livre","joga uma partidade de futebol","vai a um fiplerama","navega na internet"]
    var incercia = ["porque tem que trabalhar","porque é muito novo ","porque tem medo","porque tem que trabalhar com sua familia","porque tem filhos","porque oferece a tarefa ao seu mentor","porque fala que não é problema dele","porque redicularisa tudo aqui pois acha que é mentira","porque é contra sua religião","porque alega que é contra a lei de seu povo","porque fala que tem medo"]
    var encontro = ["que o salva de inimigos","que o instrui a encontra-lo em um determinado lugar","o dá opção de escolha, abanonar o encarar a aventura","revela para ele que ele é especial", "faz um ritual de passagem para convence-lo", "manda olhar para seu reflexo e perceber que cresceu","manda a pensar sobre sua vida e questiona o seu futuro"]
    var titulo1 = ["O Senhor","O Estudante","Caçadores","O Campeão","Gigantes","O Poeta","Os Piratas","O Homem","Fugindo","Guerra","A Mulher","O Rei","A fuga","A Sociedade","Uma bela","A Camuna","O Coração","O Presidente", "O Corajoso","O Jogo","O Código","O Assassino","O Amigo","Embalos","O Malvado", "O Boneco","A Dança","A Procura"]
    var titulo2 = ["dos Aneis","nas Estrelas","de Paris","de Emoção","dos Campeões","de Ferro","de Aço","de Gelo","do Caribe","do Brasil","de Todos","de Nova York","Mulher", "Leão", "dos Mortos","do Ladrão", "do Assacino","do Rei","do Presitente","do Cantor","das Moscas", "das Espadas", "das Facas","da Terra", "do meu Cachorro", "Favorito", "das Galinhas", "Doente","das Moedas","no Computador","em Outra Dimenção","de sabado a Noite","na Noite","do Castelo","dos Reinos","do Filho"]
    //descobre que...
	var gatilho = ["seus tios estão mortos","seus pais estão mortos","seu lar pode estar ameaçado por ele está alí","está ameaçado pelo inimigo e tem um sonho ruim com ele","é especial, um efeito mágico acontece em sua frente","tem uma grande esperança em sua missão ao saber uma notícia","é especial, tem uma visão de seus antepassados e retoma sua coragem","toda sua família é morta","queimaram sua casa","especial pois leva um tombo e tem uma visão","especial, assim sonha com uma visão","especial, e ao toma drogas tem uma visão","especial ao fumar ervas e ali tem uma visão","recebeu uma carta, ao le-la muda suas idéias","é especial"]
    var tema = ["Planos foram roubados, seu mentor emplica sua origem","Tem monstros atraz de você, voce deve fugir","Você é perseguido, seu mentor explica o que você é","Um novo mundo é revelado para você","Você conta que está atraz do seu filho","você encontra amigos que te ajudam a sobrevirer"]
	
	if (item == 0){
	    valor = Math.floor(Math.random()*personagens.length);
	    
		peg("HEROI").value = personagens[valor].name; 
	    peg("genero_heroi").value = personagens[valor].sexo; 
		
		peg("MENTOR").value = personagens[valor].name; 
		peg("genero_mentor").value = personagens[valor].sexo; 
		
		peg("PARCEIRO").value = rand_item(nomes);
		peg("VILAO").value = rand_item(nomes);
		peg("AUXVILAO").value = rand_item(nomes);
		peg("INDECISO").value = rand_item(nomes);
		peg("COMICO").value = rand_item(nomes);	
		peg("DONZELA").value = rand_item(nomes);	

		peg("COAJUVANTES1").value = personagens[valor].name; 
		//peg("COAJUVANTES1SEXO").value = personagens[valor].sexo; 		
		
		
		peg("COAJUVANTES2").value = personagens[valor].name; 
		//peg("COAJUVANTES2SEXO").value = personagens[valor].sexo; 	
		
		
		peg("COAJUVANTES3").value = personagens[valor].name; 
		//peg("COAJUVANTES3SEXO").value = personagens[valor].sexo; 	
		
		
		peg("COMUM").value = rand_item(comum);
		peg("ACAO").value = rand_item(verbo) + " " + rand_item(obj);
		peg("CHAMADO").value = rand_item(chamado);	
		peg("CONFIGURACAO").value = rand_item(configuracao);
		peg("INERCIA").value = rand_item(incercia);
		peg("ENCONTRO").value = rand_item(encontro);
		
		peg("TITULO1").value = rand_item(titulo1);
		peg("TITULO2").value = rand_item(titulo2);
		peg("GATILHO").value = rand_item(gatilho);
		peg("TEMA").value = rand_item(tema);
		
		
	}else if (item == 1){
		peg("ACAO").value = rand_item(verbo) + " " + rand_item(obj);
	}else if (item == 2){
	    valor = Math.floor(Math.random()*personagens.length);
	    peg("HEROI").value = personagens[valor].name; 
	    peg("genero_heroi").value = personagens[valor].sexo;  
	}else if (item == 3){
		valor = Math.floor(Math.random()*personagens.length);
		peg("MENTOR").value = personagens[valor].name; 
		peg("genero_mentor").value = personagens[valor].sexo; 
	}else if (item == 4){
		peg("PARCEIRO").value = rand_item(nomes);
	}else if (item == 5){
		peg("VILAO").value = rand_item(nomes);
	}else if (item == 6){
		peg("AUXVILAO").value = rand_item(nomes);
	}else if (item == 7){
		peg("INDECISO").value = rand_item(nomes);
	}else if (item == 8){
		peg("COMICO").value = rand_item(nomes);
	}else if (item == 9){
		valor = Math.floor(Math.random()*personagens.length);
		peg("COAJUVANTES1").value = personagens[valor].name; 
		//peg("COAJUVANTES1SEXO").value = personagens[valor].sexo; 
	}else if (item == 10){
		valor = Math.floor(Math.random()*personagens.length);
		peg("COAJUVANTES2").value = personagens[valor].name; 
		//peg("COAJUVANTES2SEXO").value = personagens[valor].sexo; 
	}else if (item == 11){
		valor = Math.floor(Math.random()*personagens.length);
		peg("COAJUVANTES3").value = personagens[valor].name; 
		//peg("COAJUVANTES3SEXO").value = personagens[valor].sexo; 	
	}else if (item == 12){
		peg("COMUM").value = rand_item(comum);
	}else if (item == 13){
		peg("CHAMADO").value = rand_item(chamado);
	}else if (item == 20){
		peg("CONFIGURACAO").value = rand_item(configuracao);
	}else if (item == 16){
		peg("ENCONTRO").value = rand_item(encontro);	
	}else if (item == 21){
		peg("TITULO1").value = rand_item(titulo1);
	}else if (item == 22){
		peg("TITULO2").value = rand_item(titulo2);		
	}else if (item == 23){
		peg("GATILHO").value = rand_item(gatilho);		
	}else if (item == 24){
		peg("TEMA").value = rand_item(tema);
		
		
		
	}else if (item == 15){
		peg("INERCIA").value = rand_item(incercia);
	}
	
	
	sorteia_combo(peg("raca"));
	sorteia_combo(peg("classe"));
	sorteia_combo(peg("relacao"));
	
	
}


