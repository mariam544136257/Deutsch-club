  function send(){
    let age =$("#age").val()
    let email =$("#mail").val()
    let prenom =$("#firstName").val()
    let nom =$("#lastName").val()
    let filiere =$("#filière").val()
    firebase.database().ref("formulaire/"+nom).set({
        age:age,
        email:email,
        prenom:prenom,  
        nom:nom,
        filiere:filiere
    })
    
    }
    //e.preventDefault() in this case will stop the form from submitting & therefore refreshing.
    $("#myForm").submit(function(e){
        e.preventDefault()
        send()
    })
    