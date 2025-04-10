var btn = document.getElementById("btn")

btn.addEventListener("click", () => {

    var descricao_1 = document.getElementById("descricao1").textContent
    var horario_1 = document.getElementById("horario1").textContent
    var bloqueio_1 = document.getElementById("bloqueio1").textContent

    var premio_10 = document.getElementById("premio10").value
    var premio_7 = document.getElementById("premio7").value
    var premio_5 = document.getElementById("premio5").value

    if(document.getElementById("premio10").checked == true){
        var premio_10 = document.getElementById("premio10").value
    }
    else if(document.getElementById("premio10").checked == true){
        var premio_7 = document.getElementById("premio7").value
    }
    else if(document.getElementById("premio5").checked == true){
        var premio_5 = document.getElementById("premio5").value
    }



    if(document.getElementById("segunda1").checked == true){
        var ckbox_seg = "on";
    }
    else if(document.getElementById("terca1").checked == true){
        var ckbox_ter = "on";
    }
    else if(document.getElementById("quarta1").checked == true){
        var ckbox_qua = "on";
    }
    else if(document.getElementById("quinta1").checked == true){
        var ckbox_qui = "on";
    }
    else if(document.getElementById("sexta1").checked == true){
        var ckbox_sex = "on";
    }
    else if(document.getElementById("sabado1").checked == true){
        var ckbox_sab = "on";
    }
    else if(document.getElementById("domingo1").checked == true){
        var ckbox_dom = "on";
    }

   })






































/*
function submitForm(event){
    window.alert(document.getElementById("horario_1").textContent )
    //window.alert(event)
    event.preventDefault();
    //window.alert(event.target)
    const data = new FormData(event.target);
    
    const formJSON = Object.fromEntries(data.entries());
  
    // for multi-selects, we need special handling
    formJSON.snacks = data.getAll('snacks');
    

}
*/
//const formdados = document.getElementById("btn")
//formdados.addEventListener('submit',submitForm)
