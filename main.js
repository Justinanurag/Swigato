/*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById('sign-up'), signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')


signUp.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    // Add classes
    loginIn.classList.toggle('none')
    loginUp.classList.toggle('block')
})

signIn.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    // Add classes
    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
})


// function signin(){

// document.getElementById('loginForm').addEventListener('submit', function(event) {
//         event.preventDefault();
      
//         var username = document.getElementById('username').value;
//         var password = document.getElementById('password').value;
//         var message = document.getElementById("message")
      
//         if (username === "kundansingzrajput@gmail.com" && password === "9122182799") {
//           alert('Login successful!');
//           // Redirect or perform any other actions upon successful login
//         } 
//         else {
//             message.innerText = "Invalid username or password";
//       }
//     });

    function signin(){
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let username1 = document.getElementById('password1');

        if(username == "kundansingzrajput@gmail.com"){
            document.getElementById("username1").innerHTML = "correct";

        }
    }
