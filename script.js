let nav = document.getElementById("nav");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 0.1 * window.innerHeight) {
    nav.style.backgroundColor = "rgb(45, 45, 45)";
  } else if (window.scrollY <= 100) {
    nav.style.backgroundColor = "black";
    document.querySelectorAll("#black, #products-link, #prices-link, #supports-link, #resources-link").forEach(element => {
      element.style.color = "white";
    });
  }
});

  
  
const passwordInput = document.getElementById("logpassword");
const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");

function PasswordVisibility(ev) {
    ev.preventDefault()
    passwordInput.type = "text";
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
}
function textVisibility(ev) {
    ev.preventDefault()
    passwordInput.type = "password";
    closeBtn.style.display = "block";
    openBtn.style.display = "none";
}

const hidepass = document.querySelector(".hide");
const showpass = document.querySelector(".show");
const signpass = document.getElementById("password");
function sectextVisibility(ev) {
    ev.preventDefault()
    signpass.type = "text";
    document.getElementById("eyeslahs").style.display = "none"
    document.getElementById("eyes").style.display = "block"
}
 
function secPasswordVisibility(ev) {
    ev.preventDefault()
    signpass.type = "Password";
    document.getElementById("eyes").style.display = "none"
    document.getElementById("eyeslahs").style.display = "block"
    
}
function signup() {
    document.getElementById("modal").style.display = "block"
}
document.getElementById("siguser").addEventListener("click", function(){
    document.getElementById("modal").style.display = "block" 
})
function cancelmodal() {
    document.getElementById("modal").style.display = "none"
}
function loginimd(ev) {
    ev.preventDefault();
    document.getElementById("modal").style.display = "none"
    document.getElementById("modal2").style.display = "block" 
}
function loguser() {
    document.getElementById("modal2").style.display = "block"
}
function cancelmodal2() {
    document.getElementById("modal2").style.display = "none"
}

const secnav = document.getElementById("nav2");

window.addEventListener("scroll", function () {
  if (window.scrollY > 600) {
    secnav.style.visibility = "visible";
  } else {
    secnav.style.visibility = "hidden";
  }
});


const firebaseConfig = {
    apiKey: "AIzaSyAxGLPD1egTzA5lxtXyQ1NAj_dJlCYHNDk",
    authDomain: "my-first-project-672b2.firebaseapp.com",
    projectId: "my-first-project-672b2",
    storageBucket: "my-first-project-672b2.appspot.com",
    messagingSenderId: "839261620607",
    appId: "1:839261620607:web:8b8757d2ee67d81f06324a",
    measurementId: "G-XVNTZ32JSN"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
var provider = new firebase.auth.GoogleAuthProvider();

let email = document.getElementById("email");
let password = document.getElementById("password")



function signuser(ev) {
    ev.preventDefault()
    if (email.value == "" || password.value == "") {
        alert("input your details as listed below")
        return
    }else if(!email.value.includes ("@gmail.com")){
           alert("input a valid email address")
           return;
    }
    else{
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("user signed up succesasful")
            console.log(user);
            document.getElementById("modal").style.display = "none"
        setTimeout(() => {
            document.getElementById("modal2").style.display = "block" 
        }, 2000);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("an error occured")
            alert(error);
            return;
            // ..
        });
         
    }
}
let usernamearray = []
let username = document.getElementById("username")
let logemail = document.getElementById("logemail")
let logapss = document.getElementById("logpassword")
// let loguser = logemail.value
let logpasscode = logapss.value
function login(ev) {
    ev.preventDefault();
     if (!loguser || logpasscode) {
        alert("input fields can not be emty")
     }else{
        firebase.auth().signInWithEmailAndPassword(logemail.value, document.getElementById("logpassword").value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            usernamearray.push(user)
            console.log(usernamearray);
            // localStorage.setItem("username", JSON.stringify(user))
            alert("User logged in successfully.");
            window.location.href = "showpost.html"
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("User not found");
            console.log(error);
            // ..
        });
     }  
}
// function login(ev) {
//     ev.preventDefault()
//     firebase.auth().createUserWithEmailAndPassword(logemail.value, document.getElementById("logpassword").value)
//         .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             alert("uer signed in succesasful")
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             alert("an error occured")
//             console.log(error);
//             // ..
//         });
// }
