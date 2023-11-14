// let refresh = document.querySelector(".refresh1");
// refresh.addEventListener("click", (e) => {
//     e.preventDefault();
// });
let userdata = [];
let passworddata = [];
console.log(userdata);
console.log(passworddata);

// localStorage.clear()
let username = document.querySelector("#user");
let password = document.querySelector("#password");
let login = document.querySelector("#login");
let check = document.querySelector("#check")

function addd(user, pass) {


    userdata.push(user);
    passworddata.push(pass)
    localStorage.setItem('data', JSON.stringify(userdata));
    localStorage.setItem('password', JSON.stringify(passworddata));


}


login.onclick = () => {

    let user = username.value;
    let pass = password.value;
    let checkvalue = check.value;




    //    let chars=['@','#','$','%','^','&','*'];
    //    let num=['1','2','3','4','5','6','7','8','9','0']
    //    for (let i = 0; i < pass.length; i++) {
    //         if(pass[i])

    //    };
    if (user == '' && pass == '') {
        alert("Please add your username and password")
        return 1;
    }
    if (pass.length < 5) {
        alert("Password must contain at least 5 charcters")
    }
    else {
        if (checkvalue == pass) {

            addd(user, pass);
            alert("Account created succesfully");
            // refresh.style.display = 'none'
            // let refresh=document.querySelector(".refresh1");
            // refresh.addEventListener("click",(e)=>{
            // e.preventDefault();
            // });


            // if (login) {
            //      window.location.href = 'index.html';
            //  }




        }
        else {
            alert("Password does not match");
        }


    }

    username.value = '';
    password.value = '';
    check.value = '';

}



