const pinNumber=['1234'];
const email=['nhanikk@email.com'];
const phonNumber=['01700000000'];
const passWord=['789456'];


const emailInput=document.querySelector("#email");
const passwordInput=document.querySelector("#password");

document.querySelector("#loginbtn").addEventListener("click",loginbtn);

function loginbtn(){
    if(emailInput.value==""||emailInput.value==null||passwordInput.value==""||passwordInput.value==null){
        alert("Pleace Enter your user Email or Password")
        return false;
    }else{
        const gcheeck=emailInput.value;
       if(gcheeck.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        if(email[0]==emailInput.value){
            if (isNaN(passwordInput.value)){ 
                alert("Password for only number accept");
            }else{
                if(passWord[0]===passwordInput.value){
                    window.location.href='amarcash.html';
                    emailInput.value='';
                    passwordInput.value='';
                }else{
                    alert("Password is Wrong");
                }
            }
        }else{
            alert("Invalid Email Pleace Enter Valid Email")
        }
       }else{
        alert("do not valid Emali, Enter your proper Email")
       }

    }
}

document.querySelector("#clearbtn").addEventListener("click",clearbtn);
function clearbtn(){
    emailInput.value="";
    passwordInput.value="";
}

// create accoute box show in login box
document.querySelector("#createaccountShow").addEventListener("click",createaccountShow);
function createaccountShow(){
    createsignupbox.style.display="block";
}
//forget accoute box show in login box
document.querySelector("#forgetaccountShow").addEventListener("click",forgetaccountShow);
function forgetaccountShow(){
    forgetemail.value='';
    forgetpassbox.style.display="block";
}

// create a account work start==============================================================
const createemail=document.querySelector("#createemail");
const createphonenumber=document.querySelector("#createphonenumber");
const createpassword=document.querySelector("#createpassword");
const createsignupbox=document.querySelector("#createsignupbox");

document.querySelector("#createSignUpBtn").addEventListener("click",createSignUpBtn);
function createSignUpBtn(){
   if(createemail.value==''||createemail.value==null||createphonenumber.value==''||createphonenumber.value==null||createpassword.value==''||createpassword.value==null){
    alert("Pleace fillup all fillde")
    return false;
   }else{
    const creategmail=createemail.value;
    if(creategmail.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        if(email[0]===createemail.value){
            alert("This Email alrady account")
        }else{
            const pnumber=createphonenumber.value;
            if(pnumber.length===11){
                if (isNaN(createpassword.value)){
                    alert("Sorry, password can use only Number");
                }else{
                    const cpassword=createpassword.value;
                    if(cpassword.length==6){
                        // newcreateaaccount();
                        cpub();
                    }else{
                        alert("Enter your password 6 digite ")
                    }
                }
            }else{
                alert("Enter your proper Phon Number 11 digite")
            }
        }
       }else{
        alert("Enter your proper Email")
       }
    }
}
const createpopupbox=document.querySelector("#createpopupbox");
const createpopupboxinput=document.querySelector("#createpopupboxinput");

document.querySelector("#createpopupboxokbtn").addEventListener("click",createpopupboxokbtn);
function createpopupboxokbtn(){
    if(createpopupboxinput.value==''||createpopupboxinput.value==null){
        alert("Pleace Enter your Pin Number")
   }else{
       let pinfourinc=createpopupboxinput.value;
       if(pinfourinc.length==4){
           if(pinNumber[0]==createpopupboxinput.value){
            newcreateaaccount();
           }else{
               alert('Wrong your pin number');
           }
       }else{
           alert("Wrong, Your Pin Is 4 Digite")
       }       
   }
}

document.querySelector("#createpopupboxClearlbtn").addEventListener("click",createpopupboxClearlbtn);
function createpopupboxClearlbtn(){
    createpopupboxinput.value='';
}

document.querySelector("#createpopupboxCancellbtn").addEventListener("click",createpopupboxCancellbtn);
function createpopupboxCancellbtn(){
    createpopupbox.style.display="none";
}

function cpub(){
    createpopupbox.style.display="block";
}

function newcreateaaccount(){
    email.pop()
    phonNumber.pop()
    passWord.pop()
    email.push(createemail.value)
    phonNumber.push(createphonenumber.value)
    passWord.push(createpassword.value)
    
    congratulation.style.display="block";

    ue.innerHTML=email[0];
    upn.innerHTML=phonNumber[0];
    up.innerHTML=passWord[0];

    createsignupbox.style.display="none";
    createpopupbox.style.display="none";
    createemail.value='';
    createphonenumber.value='';
    createpassword.value='';
    createpopupboxinput.value='';
}

document.querySelector("#createClearBtn").addEventListener("click",createClearBtn);
function createClearBtn(){
    createemail.value="";
    createphonenumber.value="";
    createpassword.value="";
}

document.querySelector("#createbackBtn").addEventListener("click",createbackBtn);
function createbackBtn(){
    forgetemail.value='';
    createsignupbox.style.display="none";
}

// congratulation work start
const congratulation=document.querySelector("#congratulation");

document.querySelector("#congratulationCancellbtn").addEventListener("click",congratulationCancellbtn);
function congratulationCancellbtn(){
    congratulation.style.display="none";
}

// forget password work start==============================================================
const forgetemail=document.querySelector("#forgetemail");
const forgetpassbox=document.querySelector("#forgetpassbox");

document.querySelector("#forgetpasssubmitbtn").addEventListener("click",forgetpasssubmitbtn);
function forgetpasssubmitbtn(){
    if(forgetemail.value==""||forgetemail.value==null){
        alert("Pleace Enter your user Email")
        return false;
    }else{
        const fgmail=forgetemail.value;
        if(fgmail.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            if(email[0]==forgetemail.value){
                forgetpopupbox.style.display="block";
            }else{
                alert("Your Email is not available")
            }
            }else{
            alert("Enter your proper Email")
        } 
    }
}

document.querySelector("#forgetpassclearbtn").addEventListener("click",forgetpassclearbtn);
function forgetpassclearbtn(){
    forgetemail.value='';
}

document.querySelector("#forgetbackBtn").addEventListener("click",forgetbackBtn);
function forgetbackBtn(){
    forgetpassbox.style.display="none";
}

// forget popup box small ============================================
const forgetpopupboxinput=document.querySelector("#forgetpopupboxinput");
const forgetpopupbox=document.querySelector("#forgetpopupbox");

document.querySelector("#forgetpopupboxokbtn").addEventListener("click",forgetpopupboxokbtn);
function forgetpopupboxokbtn(){
    if(forgetpopupboxinput.value==''||forgetpopupboxinput.value==null){
         alert("Pleace Enter your Pin Number")
    }else{
        let pinfourin=forgetpopupboxinput.value;
        if(pinfourin.length==4){
            if(pinNumber[0]==forgetpopupboxinput.value){
                forgetpopupbox.style.display="none";
                popuprecovarypassword()
            }else{
                alert('Wrong your pin number');
            }
        }else{
            alert("wrong Pin Is 4 Digite Only")
        }       
    }
}

document.querySelector("#forgetpopupboxClearlbtn").addEventListener("click",forgetpopupboxClearlbtn);
function forgetpopupboxClearlbtn(){
    forgetpopupboxinput.value='';
}

document.querySelector("#forgetpopupboxCancellbtn").addEventListener("click",forgetpopupboxCancellbtn);
function forgetpopupboxCancellbtn(){
    forgetpopupbox.style.display="none";
}

// forget pasword 2 fild check samll============================
function popuprecovarypassword(){
    ppforgetpopupbox.style.display="block";
}

const ppforgetpopupbox=document.querySelector("#ppforgetpopupbox");
const oneforgetpopupboxinput=document.querySelector("#oneforgetpopupboxinput");
const twoforgetpopupboxinput=document.querySelector("#twoforgetpopupboxinput");

document.querySelector("#ppforgetpopupboxokbtn").addEventListener("click",ppforgetpopupboxokbtn);
function ppforgetpopupboxokbtn(){
  if(oneforgetpopupboxinput.value==''||oneforgetpopupboxinput.value==null||twoforgetpopupboxinput.value==''||twoforgetpopupboxinput.value==null){
    alert("pleace enter your new paaaword or confirm passsword");
  }else{
    if (isNaN(oneforgetpopupboxinput.value) || isNaN(twoforgetpopupboxinput.value)){
        alert("Sorry you can use only Number");
    }else{
        if(oneforgetpopupboxinput.value==twoforgetpopupboxinput.value){
            let sixpass=oneforgetpopupboxinput.value;
              if(sixpass.length==6){
                passwordUpdateOnly();
              }else{
                alert("Password only 6 digite entry")
              }
        }else{
            alert("your password don`t matching")
        }
    }
  }
   
}

// forget password chang update password===========================================================
function passwordUpdateOnly(){
    passWord.pop()
    passWord.push(oneforgetpopupboxinput.value);
    alert("successfuly change Your password Now Can Login")
    up.innerHTML=passWord[0];
    forgetpassbox.style.display="none";
    forgetpopupbox.style.display="none";
    ppforgetpopupbox.style.display="none";
    forgetpopupboxinput.value='';
    oneforgetpopupboxinput.value='';
    twoforgetpopupboxinput.value='';
}

document.querySelector("#ppforgetpopupboxClearlbtn").addEventListener("click",ppforgetpopupboxClearlbtn);
function ppforgetpopupboxClearlbtn(){
    oneforgetpopupboxinput.value='';
    twoforgetpopupboxinput.value='';
}

document.querySelector("#ppforgetpopupboxCancellbtn").addEventListener("click",ppforgetpopupboxCancellbtn);
function ppforgetpopupboxCancellbtn(){
    ppforgetpopupbox.style.display="none";
    forgetpopupbox.style.display="block";
}

// forget password work end

//update display detailes declearation down 
const ue=document.querySelector("#ue"); 
const upn=document.querySelector("#upn");  
const up=document.querySelector("#up"); 

//login sye show hide work start=========================================
const eyeshowhideopen=document.querySelector(".eyeshowhideopen"); 
const eyeshowhideclose=document.querySelector(".eyeshowhideclose"); 
document.querySelector("#openeyelogin").addEventListener("click",openeyelogin); 
document.querySelector("#closeeyelogin").addEventListener("click",closeeyelogin); 

// open eye
function openeyelogin() {
    passwordInput.type="password";
    eyeshowhideopen.style.display="none";
    eyeshowhideclose.style.display="block";
}

// close eye
function closeeyelogin() {
    passwordInput.type="text";
    eyeshowhideclose.style.display="none";
    eyeshowhideopen.style.display="block";
}

//create account sye show hide work start=========================================
const createeyeshowhideopen=document.querySelector(".createeyeshowhideopen"); 
const createeyeshowhideclose=document.querySelector(".createeyeshowhideclose"); 
document.querySelector("#createopeneyelogin").addEventListener("click",createopeneyelogin); 
document.querySelector("#createcloseeyelogin").addEventListener("click",createcloseeyelogin); 

// open eye
function createopeneyelogin() {
    createpassword.type="password";
    createeyeshowhideopen.style.display="none";
    createeyeshowhideclose.style.display="block";
}

// close eye
function createcloseeyelogin() {
    createpassword.type="text";
    createeyeshowhideclose.style.display="none";
    createeyeshowhideopen.style.display="block";
}

//forgot account sye show hide work start=========================================
const forgoteyeshowhideopen=document.querySelector(".forgoteyeshowhideopen"); 
const forgoteyeshowhideclose=document.querySelector(".forgoteyeshowhideclose"); 
document.querySelector("#forgotopeneyelogin").addEventListener("click",forgotopeneyelogin); 
document.querySelector("#forgotcloseeyelogin").addEventListener("click",forgotcloseeyelogin); 

// open eye
function forgotopeneyelogin() {
    oneforgetpopupboxinput.type="password";
    twoforgetpopupboxinput.type="password";
    forgoteyeshowhideopen.style.display="none";
    forgoteyeshowhideclose.style.display="block";
}

// close eye
function forgotcloseeyelogin() {
    oneforgetpopupboxinput.type="text";
    twoforgetpopupboxinput.type="text";
    forgoteyeshowhideclose.style.display="none";
    forgoteyeshowhideopen.style.display="block";
}

// create account theke pin number 
// varivai korte hobe kaj ses then notification er kaj start korte hobe 
// % tence er kaj baki asce oytaw korte hobe  than 
// log out kore dibo


























