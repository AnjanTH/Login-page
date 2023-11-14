//   let refresh=document.querySelector("#refresh");
//  refresh.addEventListener("click",(e)=>{
//    e.preventDefault();

//        });
// localStorage.clear()

let userdata = JSON.parse(localStorage.getItem('data'));
let passworduser = JSON.parse(localStorage.getItem('password'));
// localStorage.setItem('data', JSON.stringify(userdata));
// localStorage.setItem('password', JSON.stringify(passworduser));




let username1 = document.querySelector("#loginuser");
let userpassword1 = document.querySelector("#loginpassword");
let submit1 = document.querySelector("#submit1");



submit1.onclick = () => {

    let user = username1.value;
    let pass = userpassword1.value;
   

    for (let i = 0; i < userdata.length; i++) {
        let user1 = userdata[i];
        let pass1 = passworduser[i]

        if (user1 === user) {
            if (pass1 === pass) {
            
                alert("You are logged in Successfully");
                return 1;
                   
                
               
            }
            else {
                alert("Invalid Username or Password");
                if (submit1) {
                    submit1.href = '';
                }
                return 1;

            }
        }
    }
    alert("Invalid username");
    if (submit1) {
         submit1.href = '';
     }


}




