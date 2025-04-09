

function submitForm(event){
    event.preventDefault();
  
    const data = new FormData(event.target);
    
    const formJSON = Object.fromEntries(data.entries());
  
    // for multi-selects, we need special handling
    formJSON.snacks = data.getAll('snacks');
    window.alert(formJSON)

}

const formdados = document.getElementById("formbutton")
//formdados.addEventListener('submit',submitForm)
formdados.
