var btn = document.getElementById("btn")

fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify({
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    

btn.addEventListener("click", () => {

    //Linha 1
    var descricao_1 = document.getElementById("descricao1").textContent
    var horario_1 = document.getElementById("horario1").textContent
    var bloqueio_1 = document.getElementById("bloqueio1").textContent
    
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

    //var linha1 = [descricao_1, horario_1, bloqueio_1, premio1_10, premio1_5, premio1_7, ckbox_seg1,
    //     ckbox_ter1, ckbox_qua1,ckbox_qui1,ckbox_sex1,ckbox_sab1, ckbox_dom1]

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
      console.log(JSON.stringify(linha1))

    
    if(premio1 !== undefined || ckbox_seg1 !== undefined || ckbox_ter1 !== undefined || ckbox_qua1 !== undefined ||
        ckbox_qui1 !== undefined || ckbox_sex1 !== undefined || ckbox_sab1 !== undefined || ckbox_dom1){
            console.log(JSON.stringify(linha1))
        
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
    var horario_2 = document.getElementById("horario2").textContent
    var bloqueio_2 = document.getElementById("bloqueio2").textContent

    if(document.getElementById("premio2_10").checked == true){
    var premio2_10 = document.getElementById("premio2_10").value
    }
    if(document.getElementById("premio2_7").checked == true){
    var premio2_7 = document.getElementById("premio2_7").value
    }
    if(document.getElementById("premio2_5").checked == true){
    var premio2_5 = document.getElementById("premio2_5").value
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

    var linha2 = [descricao_2, horario_2, bloqueio_2, premio2_10, premio2_5, premio2_7, ckbox_seg2, ckbox_ter2, ckbox_qua2, ckbox_qui2, ckbox_sex2, ckbox_sab2, ckbox_dom2]


        if(premio2_10 !== undefined || premio2_5 !== undefined || premio2_7 !== undefined || ckbox_seg2 !== undefined 
        || ckbox_ter2 !== undefined || ckbox_qua2 !== undefined || ckbox_qui2 !== undefined || ckbox_sex2 !== undefined || 
        ckbox_sab2 !== undefined || ckbox_dom2){

        console.log(linha2)

        }
        })

