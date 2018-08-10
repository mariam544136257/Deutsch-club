/*fire base*/
var config = {
    apiKey: "AIzaSyDnsGHOmuWDYRWLqntGJSF8tBERTWg2saM",
    authDomain: "deutschclub-eba8d.firebaseapp.com",
    databaseURL: "https://deutschclub-eba8d.firebaseio.com",
    projectId: "deutschclub-eba8d",
    storageBucket: "",
    messagingSenderId: "923232952603"
  };
  firebase.initializeApp(config);
  function enregistrer(){
    let nom =$("#name").val()
    let mail =$("#email").val()
    let telephone =$("#phone").val()
    let message1 =$("#message").val()
    firebase.database().ref("Deutschclub/"+nom).set({
        nom:nom,
        email:mail,
        phonenumber:telephone,  
        message:message1
    })
    document.querySelector('.alert').style.display = 'block';
    }
    //e.preventDefault() in this case will stop the form from submitting & therefore refreshing.
    $("#contactForm").submit(function(e){
        e.preventDefault()
        enregistrer()
    })
    document.querySelector('.alert').style.display = 'none';