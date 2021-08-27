var aux = 0
var aux2 = 1
var aux3 = "n"
var aux4 = 0
var aux5 = 0
var perguntas = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartotle", "blastoise", "caterpie",
  "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate",
  "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "sandshrew", "sandslash", "nidoran", "nidorina",
  "nidoqueen", "nidoran", "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales", "jigglypuff", "wigglytuff",
  "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth", "diglett",
  "dugtrio", "meowth", "persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag",
  "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp", "bellsprout", "weepinbell",
  "victreebell", "tentacool", "tentacruel", "geodude", "graveler", "golem", "ponyta", "rapidash", "slowpoke", "slowbro",
  "magnemite", "magneton", "farfetchd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "shellder",
  "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno", "krabby", "kingler", "voltorb",
  "electrode", "exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing",
  "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu",
  "starmie", "mr-mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados",
  "lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte", "omastar", "kabuto",
  "kabutops", "aerodactyl", "snorlax", "articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo"];

function onEnterPress() {

  if (perguntas.includes(aux3)) {
    if (aux3 == "bulbasaur"){

      $("#table1").append("<tr><td>" +
          data.name +
          "</td><td>" + "<img src=" + data.sprites.front_default + "></img>" + "</td><td>" +
          data.abilities[i].ability.name + "</td><td>" +
          data.types[i].type.name + "</td><td>" +
          data.weight + "</td></tr>")

    }


      
    if (aux3 == "I'm fine thanks" || aux3 == "fine" || aux3 == "fine thanks")
      $("#table1").append("<div class='resposta' id='apice-" + aux2 + "'>IA: That's great news!</div>")
    if (aux3 == "bye" || aux3 == "bye bye" || aux3 == "cya" || aux3 == "later")
      $("#table1").append("<div class='resposta' id='apice-" + aux2 + "'>IA: I'll see you later!</div>")
    if (aux3 == "age")
      $("#table1").append("<div class='resposta' id='apice-" + aux2 + "'>IA: I was born on June the 22th of 2021.</div>")
    if (aux3 == "name")
      $("#table1").append("<div class='resposta' id='apice-" + aux2 + "'>IA: I have no name yet.</div>")

  }

  return
}


$("#setter").keydown(function (e) {
  if (e.keyCode === 13) {
    
  }
})


$(document).ready(function () {
  $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon/ditto',
    dataType: 'json',
    success: function (data) {
      console.log(data.results)
      for (var i = 0; i < 10; i++) {
        $("#table1").append("<tr><td>" +
          data.name +
          "</td><td>" + "<img src=" + data.sprites.front_default + "></img>" + "</td><td>" +
          data.abilities[i].ability.name + "</td><td>" +
          data.types[i].type.name + "</td><td>" +
          data.weight + "</td></tr>")
      }
    }

  })
})