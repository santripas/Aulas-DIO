function combinandoNomesPokemons(palavra) {
    // Crie uma variável chamada "palavraPokemon" que é formada pela concatenação da "palavra" com a string "saur":
    var palavraPokemon = palavra + "saur";
  
    // Retorne a palavra pokemon:
    return palavraPokemon;
  }
  
  // Entrada da palavra usando o gets():
  var nomeEntrada = 'bulba';
  
  // Chamando a função "combinandoNomesPokemons" com o nome pokemon informado e armazenando o resultado na variável "palavraGerada":
  var palavraGerada = combinandoNomesPokemons(nomeEntrada);
  
  // Exibindo a palavra gerada:
  console.log(palavraGerada);