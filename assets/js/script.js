$(function () {

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
    //$("#item-list").html(perguntas.toString() + "&nbsp;<span style='color:red'>(Ainda não disponível para dispositivos móveis)</span>");


    function onEnterPress() {

        if (perguntas.includes(aux3)) {
            if (aux3 == "bulbasaur"){
                //$("#container").append("<div class='resposta' id='apice-" + aux2 + "'>IA: Bulbasaur</div>")
                $("#container2").append("<div><div>" +
                    data.name +
                    "</div><div>test" + "<img src=" + data.sprites.front_default + "></img>" + "</div><div>" +
                    data.abilities[i].ability.name + "</div><div>" +
                    data.types[i].type.name + "</div><div>" +
                    data.weight + "</div></div>")

                    
                        $.ajax({
                          url: 'https://pokeapi.co/api/v2/pokemon/bulbasaur/',
                          dataType: 'json',
                          success: function (data) {
                            console.log(data.results)
                            
                              $("#container2").append("<tr><td>" +
                                data.name +
                                "</td><td>" + "<img src=" + data.sprites.front_default + "></img>" + "</td><td>" +
                                data.abilities[i].ability.name + "</td><td>" +
                                data.types[i].type.name + "</td><td>" +
                                data.weight + "</td></tr>")
                            
                          }
                      
                        })
                      

            }

            


            if (aux3 == "ivysaur")
                $("#container").append("<div class='resposta' id='apice-" + aux2 + "'>IA: Ivysaur</div>")
            if (aux3 == "venusaur")
                $("#container").append("<div class='resposta' id='apice-" + aux2 + "'>IA: Venusaur</div>")
            if (aux3 == "charmander")
                $("#container").append("<div class='resposta' id='apice-" + aux2 + "'>IA: Charmander</div>")
            if (aux3 == "charmeleon")
                $("#container").append("<div class='resposta' id='apice-" + aux2 + "'>IA: Charmeleon</div>")

        }

        return
    }

    $("#setter").keydown(function (e) {
        if (e.keyCode === 13) {
            if (aux5 < 14) {
                switch (aux) {
                    case 0: // primeira mensagem
                        $("#container").append(
                            "<div id='flex'>" +
                            "<div>Você:&nbsp;</div>" +
                            "<div class='pergunta' id='apice-" + aux + "'></div>" +
                            "</div>"
                        )
                        $("#apice-" + aux).text($(this).val())
                        $("#setter").val("")
                        aux3 = $("#apice-" + aux).text()
                        onEnterPress()
                        aux += 2
                        aux2 += 2
                        aux5 += 2
                        break;

                    case 2: // segunda mensagem
                        $("#container").append(
                            "<div id='flex'>" +
                            "<div>Você:&nbsp;</div>" +
                            "<div class='pergunta' id='apice-" + aux + "'></div>" +
                            "</div>"
                        )
                        $("#apice-" + aux).text($(this).val())
                        $("#setter").val("")
                        aux3 = $("#apice-" + aux).text()
                        onEnterPress()
                        aux += 2
                        aux2 += 2
                        aux5 += 2
                        break;

                    case 4: // terceira mensagem
                        $("#container").append(
                            "<div id='flex'>" +
                            "<div>Você:&nbsp;</div>" +
                            "<div class='pergunta' id='apice-" + aux + "'></div>" +
                            "</div>"
                        )
                        $("#apice-" + aux).text($(this).val())
                        $("#setter").val("")
                        aux3 = $("#apice-" + aux).text()
                        onEnterPress()
                        aux += 2
                        aux2 += 2
                        aux5 += 2
                        break;

                    case 6: // quarta mensagem
                        $("#container").append(
                            "<div id='flex'>" +
                            "<div>Você:&nbsp;</div>" +
                            "<div class='pergunta' id='apice-" + aux + "'></div>" +
                            "</div>"
                        )
                        $("#apice-" + aux).text($(this).val())
                        $("#setter").val("")
                        aux3 = $("#apice-" + aux).text()
                        onEnterPress()
                        aux += 2
                        aux2 += 2
                        aux5 += 2
                        break;

                    case 8: // quinta mensagem
                        $("#container").append(
                            "<div id='flex'>" +
                            "<div>Você:&nbsp;</div>" +
                            "<div class='pergunta' id='apice-" + aux + "'></div>" +
                            "</div>"
                        )
                        $("#apice-" + aux).text($(this).val())
                        $("#setter").val("")
                        aux3 = $("#apice-" + aux).text()
                        onEnterPress()
                        aux += 2
                        aux2 += 2
                        aux5 += 2
                        break;

                    case 10: // sexta mensagem
                        $("#container").append(
                            "<div id='flex'>" +
                            "<div>Você:&nbsp;</div>" +
                            "<div class='pergunta' id='apice-" + aux + "'></div>" +
                            "</div>"
                        )
                        $("#apice-" + aux).text($(this).val())
                        $("#setter").val("")
                        aux3 = $("#apice-" + aux).text()
                        onEnterPress()
                        aux += 2
                        aux2 += 2
                        aux5 += 2
                        break;

                    case 12: // setima mensagem
                        $("#container").append(
                            "<div id='flex'>" +
                            "<div>Você:&nbsp;</div>" +
                            "<div class='pergunta' id='apice-" + aux + "'></div>" +
                            "</div>"
                        )
                        $("#apice-" + aux).text($(this).val())
                        $("#setter").val("")
                        aux3 = $("#apice-" + aux).text()
                        onEnterPress()
                        aux += 2
                        aux2 += 2
                        aux5 += 2
                        break;



                }

            }
            else {

                $("#apice-" + aux4).remove()
                aux4 += 1
                $("#apice-" + aux4).remove()
                aux4 += 1
                $("#flex").remove()
                $("#container").append(
                    "<div id='flex'>" +
                    "<div>Você:&nbsp;</div>" +
                    "<div class='pergunta' id='apice-" + aux + "'></div>" +
                    "</div>"
                )
                $("#apice-" + aux).text($(this).val())
                $("#setter").val("")
                aux3 = $("#apice-" + aux).text()
                onEnterPress()
                aux += 2
                aux2 += 2
            }
        }
    })
})