var btn = document.getElementById("btn")

//Função de cadastro
btn.addEventListener("click", () => {

    //Linha 1
    var descricao_1 = document.getElementById("descricao1").textContent
    var horario_1 = document.getElementById("horario1").textContent + ":00"
    var bloqueio_1 = document.getElementById("bloqueio1").textContent + ":00"
    
    if(document.getElementById("premio1_10").checked == true){
        var premio1 = document.getElementById("premio1_10").value
    }
    if(document.getElementById("premio1_7").checked == true){
        var premio1 = document.getElementById("premio1_7").value
    }
    if(document.getElementById("premio1_5").checked == true){
        var premio1 = document.getElementById("premio1_5").value
    }

    if(document.getElementById("segunda1").checked == true){
        var ckbox_seg1 = "on";
    }
    if(document.getElementById("terca1").checked == true){
        var ckbox_ter1 = "on";
    }
    if(document.getElementById("quarta1").checked == true){
        var ckbox_qua1 = "on";
    }
    if(document.getElementById("quinta1").checked == true){
        var ckbox_qui1 = "on";
    }
    if(document.getElementById("sexta1").checked == true){
        var ckbox_sex1 = "on";
    }
    if(document.getElementById("sabado1").checked == true){
        var ckbox_sab1 = "on";
    }
    if(document.getElementById("domingo1").checked == true){
        var ckbox_dom1 = "on";
    }

   
    var linha1 ={
        "descricao": descricao_1,
        "horario": horario_1,
        "bloqueio": bloqueio_1,
        "premiacao": parseInt(premio1),
        "segunda": ckbox_seg1,
        "terca": ckbox_ter1,
        "quarta": ckbox_qua1,
        "quinta": ckbox_qui1,
        "sexta": ckbox_sex1,
        "sabado": ckbox_sab1,
        "domingo": ckbox_dom1
      }
    
    if(premio1 !== undefined || ckbox_seg1 !== undefined || ckbox_ter1 !== undefined || ckbox_qua1 !== undefined ||
        ckbox_qui1 !== undefined || ckbox_sex1 !== undefined || ckbox_sab1 !== undefined || ckbox_dom1){
        
            fetch("http://localhost:8080/cadastrar", {
                method: "POST",
                body: JSON.stringify(linha1),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
              })
            .then((response) => response.json())
            .then((json) => console.log(json));
        
        }

    //Linha 2

    var descricao_2 = document.getElementById("descricao2").textContent
    var horario_2 = document.getElementById("horario2").textContent+ ":00"
    var bloqueio_2 = document.getElementById("bloqueio2").textContent+ ":00"

    if(document.getElementById("premio2_10").checked == true){
    var premio2 = document.getElementById("premio2_10").value
    }
    if(document.getElementById("premio2_7").checked == true){
    var premio2 = document.getElementById("premio2_7").value
    }
    if(document.getElementById("premio2_5").checked == true){
    var premio2 = document.getElementById("premio2_5").value
    }


    if(document.getElementById("segunda2").checked == true){
        var ckbox_seg2 = "on";
    }
    if(document.getElementById("terca2").checked == true){
        var ckbox_ter2 = "on";
    }
    if(document.getElementById("quarta2").checked == true){
        var ckbox_qua2 = "on";
    }
    if(document.getElementById("quinta2").checked == true){
        var ckbox_qui2 = "on";
    }
    if(document.getElementById("sexta2").checked == true){
        var ckbox_sex2 = "on";
    }
    if(document.getElementById("sabado2").checked == true){
        var ckbox_sab2 = "on";
    }
    if(document.getElementById("domingo2").checked == true){
        var ckbox_dom2 = "on";
    }

    var linha2 = {
        "descricao": descricao_2,
        "horario": horario_2,
        "bloqueio": bloqueio_2,
        "premiacao": parseInt(premio2),
        "segunda": ckbox_seg2,
        "terca": ckbox_ter2,
        "quarta": ckbox_qua2,
        "quinta": ckbox_qui2,
        "sexta": ckbox_sex2,
        "sabado": ckbox_sab2,
        "domingo": ckbox_dom2
      }


        if(premio2 !== undefined || ckbox_seg2 !== undefined || ckbox_ter2 !== undefined || ckbox_qua2 !== undefined ||
        ckbox_qui2 !== undefined || ckbox_sex2 !== undefined || ckbox_sab2 !== undefined || ckbox_dom2){

        fetch("http://localhost:8080/cadastrar", {
            method: "POST",
            body: JSON.stringify(linha2),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
        .then((response) => response.json())
        .then((json) => console.log(json));
        }

        //Linha 3
        
        var descricao_3 = document.getElementById("descricao3").textContent;
        var horario_3 = document.getElementById("horario3").textContent + ":00";
        var bloqueio_3 = document.getElementById("bloqueio3").textContent + ":00";
        
        if (document.getElementById("premio3_10").checked == true) {
            var premio3 = document.getElementById("premio3_10").value;
        }
        if (document.getElementById("premio3_7").checked == true) {
            var premio3 = document.getElementById("premio3_7").value;
        }
        if (document.getElementById("premio3_5").checked == true) {
            var premio3 = document.getElementById("premio3_5").value;
        }
        
        if (document.getElementById("segunda3").checked == true) {
            var ckbox_seg3 = "on";
        }
        if (document.getElementById("terca3").checked == true) {
            var ckbox_ter3 = "on";
        }
        if (document.getElementById("quarta3").checked == true) {
            var ckbox_qua3 = "on";
        }
        if (document.getElementById("quinta3").checked == true) {
            var ckbox_qui3 = "on";
        }
        if (document.getElementById("sexta3").checked == true) {
            var ckbox_sex3 = "on";
        }
        if (document.getElementById("sabado3").checked == true) {
            var ckbox_sab3 = "on";
        }
        if (document.getElementById("domingo3").checked == true) {
            var ckbox_dom3 = "on";
        }
        
        var linha3 = {
            "descricao": descricao_3,
            "horario": horario_3,
            "bloqueio": bloqueio_3,
            "premiacao": parseInt(premio3),
            "segunda": ckbox_seg3,
            "terca": ckbox_ter3,
            "quarta": ckbox_qua3,
            "quinta": ckbox_qui3,
            "sexta": ckbox_sex3,
            "sabado": ckbox_sab3,
            "domingo": ckbox_dom3
        };
        
        if (premio3 !== undefined || ckbox_seg3 !== undefined || ckbox_ter3 !== undefined || ckbox_qua3 !== undefined ||
            ckbox_qui3 !== undefined || ckbox_sex3 !== undefined || ckbox_sab3 !== undefined || ckbox_dom3 !== undefined) {
        
            fetch("http://localhost:8080/cadastrar", {
                method: "POST",
                body: JSON.stringify(linha3),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
        }

        //Linha 4
var descricao_4 = document.getElementById("descricao4").textContent;
var horario_4 = document.getElementById("horario4").textContent + ":00";
var bloqueio_4 = document.getElementById("bloqueio4").textContent + ":00";

if (document.getElementById("premio4_10").checked == true) {
    var premio4 = document.getElementById("premio4_10").value;
}
if (document.getElementById("premio4_7").checked == true) {
    var premio4 = document.getElementById("premio4_7").value;
}
if (document.getElementById("premio4_5").checked == true) {
    var premio4 = document.getElementById("premio4_5").value;
}

if (document.getElementById("segunda4").checked == true) {
    var ckbox_seg4 = "on";
}
if (document.getElementById("terca4").checked == true) {
    var ckbox_ter4 = "on";
}
if (document.getElementById("quarta4").checked == true) {
    var ckbox_qua4 = "on";
}
if (document.getElementById("quinta4").checked == true) {
    var ckbox_qui4 = "on";
}
if (document.getElementById("sexta4").checked == true) {
    var ckbox_sex4 = "on";
}
if (document.getElementById("sabado4").checked == true) {
    var ckbox_sab4 = "on";
}
if (document.getElementById("domingo4").checked == true) {
    var ckbox_dom4 = "on";
}

var linha4 = {
    "descricao": descricao_4,
    "horario": horario_4,
    "bloqueio": bloqueio_4,
    "premiacao": parseInt(premio4),
    "segunda": ckbox_seg4,
    "terca": ckbox_ter4,
    "quarta": ckbox_qua4,
    "quinta": ckbox_qui4,
    "sexta": ckbox_sex4,
    "sabado": ckbox_sab4,
    "domingo": ckbox_dom4
};

if (premio4 !== undefined || ckbox_seg4 !== undefined || ckbox_ter4 !== undefined || ckbox_qua4 !== undefined ||
    ckbox_qui4 !== undefined || ckbox_sex4 !== undefined || ckbox_sab4 !== undefined || ckbox_dom4 !== undefined) {

    fetch("http://localhost:8080/cadastrar", {
        method: "POST",
        body: JSON.stringify(linha4),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

//Linha 5
var descricao_5 = document.getElementById("descricao5").textContent;
var horario_5 = document.getElementById("horario5").textContent + ":00";
var bloqueio_5 = document.getElementById("bloqueio5").textContent + ":00";

if (document.getElementById("premio5_10").checked == true) {
    var premio5 = document.getElementById("premio5_10").value;
}
if (document.getElementById("premio5_7").checked == true) {
    var premio5 = document.getElementById("premio5_7").value;
}
if (document.getElementById("premio5_5").checked == true) {
    var premio5 = document.getElementById("premio5_5").value;
}

if (document.getElementById("segunda5").checked == true) {
    var ckbox_seg5 = "on";
}
if (document.getElementById("terca5").checked == true) {
    var ckbox_ter5 = "on";
}
if (document.getElementById("quarta5").checked == true) {
    var ckbox_qua5 = "on";
}
if (document.getElementById("quinta5").checked == true) {
    var ckbox_qui5 = "on";
}
if (document.getElementById("sexta5").checked == true) {
    var ckbox_sex5 = "on";
}
if (document.getElementById("sabado5").checked == true) {
    var ckbox_sab5 = "on";
}
if (document.getElementById("domingo5").checked == true) {
    var ckbox_dom5 = "on";
}

var linha5 = {
    "descricao": descricao_5,
    "horario": horario_5,
    "bloqueio": bloqueio_5,
    "premiacao": parseInt(premio5),
    "segunda": ckbox_seg5,
    "terca": ckbox_ter5,
    "quarta": ckbox_qua5,
    "quinta": ckbox_qui5,
    "sexta": ckbox_sex5,
    "sabado": ckbox_sab5,
    "domingo": ckbox_dom5
};

if (premio5 !== undefined || ckbox_seg5 !== undefined || ckbox_ter5 !== undefined || ckbox_qua5 !== undefined ||
    ckbox_qui5 !== undefined || ckbox_sex5 !== undefined || ckbox_sab5 !== undefined || ckbox_dom5 !== undefined) {

    fetch("http://localhost:8080/cadastrar", {
        method: "POST",
        body: JSON.stringify(linha5),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

//Linha 6
var descricao_6 = document.getElementById("descricao6").textContent;
var horario_6 = document.getElementById("horario6").textContent + ":00";
var bloqueio_6 = document.getElementById("bloqueio6").textContent + ":00";

if (document.getElementById("premio6_10").checked == true) {
    var premio6 = document.getElementById("premio6_10").value;
}
if (document.getElementById("premio6_7").checked == true) {
    var premio6 = document.getElementById("premio6_7").value;
}
if (document.getElementById("premio6_5").checked == true) {
    var premio6 = document.getElementById("premio6_5").value;
}

if (document.getElementById("segunda6").checked == true) {
    var ckbox_seg6 = "on";
}
if (document.getElementById("terca6").checked == true) {
    var ckbox_ter6 = "on";
}
if (document.getElementById("quarta6").checked == true) {
    var ckbox_qua6 = "on";
}
if (document.getElementById("quinta6").checked == true) {
    var ckbox_qui6 = "on";
}
if (document.getElementById("sexta6").checked == true) {
    var ckbox_sex6 = "on";
}
if (document.getElementById("sabado6").checked == true) {
    var ckbox_sab6 = "on";
}
if (document.getElementById("domingo6").checked == true) {
    var ckbox_dom6 = "on";
}

var linha6 = {
    "descricao": descricao_6,
    "horario": horario_6,
    "bloqueio": bloqueio_6,
    "premiacao": parseInt(premio6),
    "segunda": ckbox_seg6,
    "terca": ckbox_ter6,
    "quarta": ckbox_qua6,
    "quinta": ckbox_qui6,
    "sexta": ckbox_sex6,
    "sabado": ckbox_sab6,
    "domingo": ckbox_dom6
};

if (premio6 !== undefined || ckbox_seg6 !== undefined || ckbox_ter6 !== undefined || ckbox_qua6 !== undefined ||
    ckbox_qui6 !== undefined || ckbox_sex6 !== undefined || ckbox_sab6 !== undefined || ckbox_dom6 !== undefined) {

    fetch("http://localhost:8080/cadastrar", {
        method: "POST",
        body: JSON.stringify(linha6),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

//Linha 7
var descricao_7 = document.getElementById("descricao7").textContent;
var horario_7 = document.getElementById("horario7").textContent + ":00";
var bloqueio_7 = document.getElementById("bloqueio7").textContent + ":00";

if (document.getElementById("premio7_10").checked == true) {
    var premio7 = document.getElementById("premio7_10").value;
}
if (document.getElementById("premio7_7").checked == true) {
    var premio7 = document.getElementById("premio7_7").value;
}
if (document.getElementById("premio7_5").checked == true) {
    var premio7 = document.getElementById("premio7_5").value;
}

if (document.getElementById("segunda7").checked == true) {
    var ckbox_seg7 = "on";
}
if (document.getElementById("terca7").checked == true) {
    var ckbox_ter7 = "on";
}
if (document.getElementById("quarta7").checked == true) {
    var ckbox_qua7 = "on";
}
if (document.getElementById("quinta7").checked == true) {
    var ckbox_qui7 = "on";
}
if (document.getElementById("sexta7").checked == true) {
    var ckbox_sex7 = "on";
}
if (document.getElementById("sabado7").checked == true) {
    var ckbox_sab7 = "on";
}
if (document.getElementById("domingo7").checked == true) {
    var ckbox_dom7 = "on";
}

var linha7 = {
    "descricao": descricao_7,
    "horario": horario_7,
    "bloqueio": bloqueio_7,
    "premiacao": parseInt(premio7),
    "segunda": ckbox_seg7,
    "terca": ckbox_ter7,
    "quarta": ckbox_qua7,
    "quinta": ckbox_qui7,
    "sexta": ckbox_sex7,
    "sabado": ckbox_sab7,
    "domingo": ckbox_dom7
};

if (premio7 !== undefined || ckbox_seg7 !== undefined || ckbox_ter7 !== undefined || ckbox_qua7 !== undefined ||
    ckbox_qui7 !== undefined || ckbox_sex7 !== undefined || ckbox_sab7 !== undefined || ckbox_dom7 !== undefined) {

    fetch("http://localhost:8080/cadastrar", {
        method: "POST",
        body: JSON.stringify(linha7),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

//Linha 8
var descricao_8 = document.getElementById("descricao8").textContent;
var horario_8 = document.getElementById("horario8").textContent + ":00";
var bloqueio_8 = document.getElementById("bloqueio8").textContent + ":00";

if (document.getElementById("premio8_10").checked == true) {
    var premio8 = document.getElementById("premio8_10").value;
}
if (document.getElementById("premio8_7").checked == true) {
    var premio8 = document.getElementById("premio8_7").value;
}
if (document.getElementById("premio8_5").checked == true) {
    var premio8 = document.getElementById("premio8_5").value;
}

if (document.getElementById("segunda8").checked == true) {
    var ckbox_seg8 = "on";
}
if (document.getElementById("terca8").checked == true) {
    var ckbox_ter8 = "on";
}
if (document.getElementById("quarta8").checked == true) {
    var ckbox_qua8 = "on";
}
if (document.getElementById("quinta8").checked == true) {
    var ckbox_qui8 = "on";
}
if (document.getElementById("sexta8").checked == true) {
    var ckbox_sex8 = "on";
}
if (document.getElementById("sabado8").checked == true) {
    var ckbox_sab8 = "on";
}
if (document.getElementById("domingo8").checked == true) {
    var ckbox_dom8 = "on";
}

var linha8 = {
    "descricao": descricao_8,
    "horario": horario_8,
    "bloqueio": bloqueio_8,
    "premiacao": parseInt(premio8),
    "segunda": ckbox_seg8,
    "terca": ckbox_ter8,
    "quarta": ckbox_qua8,
    "quinta": ckbox_qui8,
    "sexta": ckbox_sex8,
    "sabado": ckbox_sab8,
    "domingo": ckbox_dom8
};

if (premio8 !== undefined || ckbox_seg8 !== undefined || ckbox_ter8 !== undefined || ckbox_qua8 !== undefined ||
    ckbox_qui8 !== undefined || ckbox_sex8 !== undefined || ckbox_sab8 !== undefined || ckbox_dom8 !== undefined) {

    fetch("http://localhost:8080/cadastrar", {
        method: "POST",
        body: JSON.stringify(linha8),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

//Linha 9
var descricao_9 = document.getElementById("descricao9").textContent;
var horario_9 = document.getElementById("horario9").textContent + ":00";
var bloqueio_9 = document.getElementById("bloqueio9").textContent + ":00";

if (document.getElementById("premio9_10").checked == true) {
    var premio9 = document.getElementById("premio9_10").value;
}
if (document.getElementById("premio9_7").checked == true) {
    var premio9 = document.getElementById("premio9_7").value;
}
if (document.getElementById("premio9_5").checked == true) {
    var premio9 = document.getElementById("premio9_5").value;
}

if (document.getElementById("segunda9").checked == true) {
    var ckbox_seg9 = "on";
}
if (document.getElementById("terca9").checked == true) {
    var ckbox_ter9 = "on";
}
if (document.getElementById("quarta9").checked == true) {
    var ckbox_qua9 = "on";
}
if (document.getElementById("quinta9").checked == true) {
    var ckbox_qui9 = "on";
}
if (document.getElementById("sexta9").checked == true) {
    var ckbox_sex9 = "on";
}
if (document.getElementById("sabado9").checked == true) {
    var ckbox_sab9 = "on";
}
if (document.getElementById("domingo9").checked == true) {
    var ckbox_dom9 = "on";
}

var linha9 = {
    "descricao": descricao_9,
    "horario": horario_9,
    "bloqueio": bloqueio_9,
    "premiacao": parseInt(premio9),
    "segunda": ckbox_seg9,
    "terca": ckbox_ter9,
    "quarta": ckbox_qua9,
    "quinta": ckbox_qui9,
    "sexta": ckbox_sex9,
    "sabado": ckbox_sab9,
    "domingo": ckbox_dom9
};

if (premio9 !== undefined || ckbox_seg9 !== undefined || ckbox_ter9 !== undefined || ckbox_qua9 !== undefined ||
    ckbox_qui9 !== undefined || ckbox_sex9 !== undefined || ckbox_sab9 !== undefined || ckbox_dom9 !== undefined) {

    fetch("http://localhost:8080/cadastrar", {
        method: "POST",
        body: JSON.stringify(linha9),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

//Linha 10
var descricao_10 = document.getElementById("descricao10").textContent;
var horario_10 = document.getElementById("horario10").textContent + ":00";
var bloqueio_10 = document.getElementById("bloqueio10").textContent + ":00";

if (document.getElementById("premio10_10").checked == true) {
    var premio10 = document.getElementById("premio10_10").value;
}
if (document.getElementById("premio10_7").checked == true) {
    var premio10 = document.getElementById("premio10_7").value;
}
if (document.getElementById("premio10_5").checked == true) {
    var premio10 = document.getElementById("premio10_5").value;
}

if (document.getElementById("segunda10").checked == true) {
    var ckbox_seg10 = "on";
}
if (document.getElementById("terca10").checked == true) {
    var ckbox_ter10 = "on";
}
if (document.getElementById("quarta10").checked == true) {
    var ckbox_qua10 = "on";
}
if (document.getElementById("quinta10").checked == true) {
    var ckbox_qui10 = "on";
}
if (document.getElementById("sexta10").checked == true) {
    var ckbox_sex10 = "on";
}
if (document.getElementById("sabado10").checked == true) {
    var ckbox_sab10 = "on";
}
if (document.getElementById("domingo10").checked == true) {
    var ckbox_dom10 = "on";
}

var linha10 = {
    "descricao": descricao_10,
    "horario": horario_10,
    "bloqueio": bloqueio_10,
    "premiacao": parseInt(premio10),
    "segunda": ckbox_seg10,
    "terca": ckbox_ter10,
    "quarta": ckbox_qua10,
    "quinta": ckbox_qui10,
    "sexta": ckbox_sex10,
    "sabado": ckbox_sab10,
    "domingo": ckbox_dom10
};

if (premio10 !== undefined || ckbox_seg10 !== undefined || ckbox_ter10 !== undefined || ckbox_qua10 !== undefined ||
    ckbox_qui10 !== undefined || ckbox_sex10 !== undefined || ckbox_sab10 !== undefined || ckbox_dom10 !== undefined) {

    fetch("http://localhost:8080/cadastrar", {
        method: "POST",
        body: JSON.stringify(linha10),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

//Linha 11
var descricao_11 = document.getElementById("descricao11").textContent;
var horario_11 = document.getElementById("horario11").textContent + ":00";
var bloqueio_11 = document.getElementById("bloqueio11").textContent + ":00";

if (document.getElementById("premio11_10").checked == true) {
    var premio11 = document.getElementById("premio11_10").value;
}
if (document.getElementById("premio11_7").checked == true) {
    var premio11 = document.getElementById("premio11_7").value;
}
if (document.getElementById("premio11_5").checked == true) {
    var premio11 = document.getElementById("premio11_5").value;
}

if (document.getElementById("segunda11").checked == true) {
    var ckbox_seg11 = "on";
}
if (document.getElementById("terca11").checked == true) {
    var ckbox_ter11 = "on";
}
if (document.getElementById("quarta11").checked == true) {
    var ckbox_qua11 = "on";
}
if (document.getElementById("quinta11").checked == true) {
    var ckbox_qui11 = "on";
}
if (document.getElementById("sexta11").checked == true) {
    var ckbox_sex11 = "on";
}
if (document.getElementById("sabado11").checked == true) {
    var ckbox_sab11 = "on";
}
if (document.getElementById("domingo11").checked == true) {
    var ckbox_dom11 = "on";
}

var linha11 = {
    "descricao": descricao_11,
    "horario": horario_11,
    "bloqueio": bloqueio_11,
    "premiacao": parseInt(premio11),
    "segunda": ckbox_seg11,
    "terca": ckbox_ter11,
    "quarta": ckbox_qua11,
    "quinta": ckbox_qui11,
    "sexta": ckbox_sex11,
    "sabado": ckbox_sab11,
    "domingo": ckbox_dom11
};

if (premio11 !== undefined || ckbox_seg11 !== undefined || ckbox_ter11 !== undefined || ckbox_qua11 !== undefined ||
    ckbox_qui11 !== undefined || ckbox_sex11 !== undefined || ckbox_sab11 !== undefined || ckbox_dom11 !== undefined) {

    fetch("http://localhost:8080/cadastrar", {
        method: "POST",
        body: JSON.stringify(linha11),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
   
//Linha 12
var descricao_12 = document.getElementById("descricao12").textContent;
var horario_12 = document.getElementById("horario12").textContent + ":00";
var bloqueio_12 = document.getElementById("bloqueio12").textContent + ":00";

if (document.getElementById("premio12_10").checked == true) {
    var premio12 = document.getElementById("premio12_10").value;
}
if (document.getElementById("premio12_7").checked == true) {
    var premio12 = document.getElementById("premio12_7").value;
}
if (document.getElementById("premio12_5").checked == true) {
    var premio12 = document.getElementById("premio12_5").value;
}

if (document.getElementById("segunda12").checked == true) {
    var ckbox_seg12 = "on";
}
if (document.getElementById("terca12").checked == true) {
    var ckbox_ter12 = "on";
}
if (document.getElementById("quarta12").checked == true) {
    var ckbox_qua12 = "on";
}
if (document.getElementById("quinta12").checked == true) {
    var ckbox_qui12 = "on";
}
if (document.getElementById("sexta12").checked == true) {
    var ckbox_sex12 = "on";
}
if (document.getElementById("sabado12").checked == true) {
    var ckbox_sab12 = "on";
}
if (document.getElementById("domingo12").checked == true) {
    var ckbox_dom12 = "on";
}

var linha12 = {
    "descricao": descricao_12,
    "horario": horario_12,
    "bloqueio": bloqueio_12,
    "premiacao": parseInt(premio12),
    "segunda": ckbox_seg12,
    "terca": ckbox_ter12,
    "quarta": ckbox_qua12,
    "quinta": ckbox_qui12,
    "sexta": ckbox_sex12,
    "sabado": ckbox_sab12,
    "domingo": ckbox_dom12
};

if (premio12 !== undefined || ckbox_seg12 !== undefined || ckbox_ter12 !== undefined || ckbox_qua12 !== undefined ||
    ckbox_qui12 !== undefined || ckbox_sex12 !== undefined || ckbox_sab12 !== undefined || ckbox_dom12 !== undefined) {

    fetch("http://localhost:8080/cadastrar", {
        method: "POST",
        body: JSON.stringify(linha12),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

//Linha 13
var descricao_13 = document.getElementById("descricao13").textContent;
var horario_13 = document.getElementById("horario13").textContent + ":00";
var bloqueio_13 = document.getElementById("bloqueio13").textContent + ":00";

if (document.getElementById("premio13_10").checked == true) {
    var premio13 = document.getElementById("premio13_10").value;
}
if (document.getElementById("premio13_7").checked == true) {
    var premio13 = document.getElementById("premio13_7").value;
}
if (document.getElementById("premio13_5").checked == true) {
    var premio13 = document.getElementById("premio13_5").value;
}

if (document.getElementById("segunda13").checked == true) {
    var ckbox_seg13 = "on";
}
if (document.getElementById("terca13").checked == true) {
    var ckbox_ter13 = "on";
}
if (document.getElementById("quarta13").checked == true) {
    var ckbox_qua13 = "on";
}
if (document.getElementById("quinta13").checked == true) {
    var ckbox_qui13 = "on";
}
if (document.getElementById("sexta13").checked == true) {
    var ckbox_sex13 = "on";
}
if (document.getElementById("sabado13").checked == true) {
    var ckbox_sab13 = "on";
}
if (document.getElementById("domingo13").checked == true) {
    var ckbox_dom13 = "on";
}

var linha13 = {
    "descricao": descricao_13,
    "horario": horario_13,
    "bloqueio": bloqueio_13,
    "premiacao": parseInt(premio13),
    "segunda": ckbox_seg13,
    "terca": ckbox_ter13,
    "quarta": ckbox_qua13,
    "quinta": ckbox_qui13,
    "sexta": ckbox_sex13,
    "sabado": ckbox_sab13,
    "domingo": ckbox_dom13
};

if (premio13 !== undefined || ckbox_seg13 !== undefined || ckbox_ter13 !== undefined || ckbox_qua13 !== undefined ||
    ckbox_qui13 !== undefined || ckbox_sex13 !== undefined || ckbox_sab13 !== undefined || ckbox_dom13 !== undefined) {

    fetch("http://localhost:8080/cadastrar", {
        method: "POST",
        body: JSON.stringify(linha13),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

//Linha 14
var descricao_14 = document.getElementById("descricao14").textContent;
var horario_14 = document.getElementById("horario14").textContent + ":00";
var bloqueio_14 = document.getElementById("bloqueio14").textContent + ":00";

if (document.getElementById("premio14_10").checked == true) {
    var premio14 = document.getElementById("premio14_10").value;
}
if (document.getElementById("premio14_7").checked == true) {
    var premio14 = document.getElementById("premio14_7").value;
}
if (document.getElementById("premio14_5").checked == true) {
    var premio14 = document.getElementById("premio14_5").value;
}

if (document.getElementById("segunda14").checked == true) {
    var ckbox_seg14 = "on";
}
if (document.getElementById("terca14").checked == true) {
    var ckbox_ter14 = "on";
}
if (document.getElementById("quarta14").checked == true) {
    var ckbox_qua14 = "on";
}
if (document.getElementById("quinta14").checked == true) {
    var ckbox_qui14 = "on";
}
if (document.getElementById("sexta14").checked == true) {
    var ckbox_sex14 = "on";
}
if (document.getElementById("sabado14").checked == true) {
    var ckbox_sab14 = "on";
}
if (document.getElementById("domingo14").checked == true) {
    var ckbox_dom14 = "on";
}

var linha14 = {
    "descricao": descricao_14,
    "horario": horario_14,
    "bloqueio": bloqueio_14,
    "premiacao": parseInt(premio14),
    "segunda": ckbox_seg14,
    "terca": ckbox_ter14,
    "quarta": ckbox_qua14,
    "quinta": ckbox_qui14,
    "sexta": ckbox_sex14,
    "sabado": ckbox_sab14,
    "domingo": ckbox_dom14
};

if (premio14 !== undefined || ckbox_seg14 !== undefined || ckbox_ter14 !== undefined || ckbox_qua14 !== undefined ||
    ckbox_qui14 !== undefined || ckbox_sex14 !== undefined || ckbox_sab14 !== undefined || ckbox_dom14 !== undefined) {

    fetch("http://localhost:8080/cadastrar", {
        method: "POST",
        body: JSON.stringify(linha14),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

        
    })












