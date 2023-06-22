// navbar all work start
// agent work

const AgentDetailsiinfo=document.querySelector("#AgentDetailsiinfo");
document.querySelector("#AgentDetails").addEventListener("click",AgentDetails);
function AgentDetails(){
    AgentDetailsiinfo.classList.toggle("download");
}
const FristDetailsinfo=document.querySelector("#FristDetailsinfo");
document.querySelector("#FristDetails").addEventListener("click",FristDetails);
function FristDetails(){
    FristDetailsinfo.classList.toggle("download");
}
const SecontDetailsinfo=document.querySelector("#SecontDetailsinfo");
document.querySelector("#SecontDetails").addEventListener("click",SecontDetails);
function SecontDetails(){
    SecontDetailsinfo.classList.toggle("download");
  
}

// navbar all work end

// agent work start
const agentImputNumber=document.querySelector("#agentImputNumber");
const agentImputAmount=document.querySelector("#agentImputAmount");
const agentMassage=document.querySelector("#agentMassage");
const agentbalanceDisplay=document.querySelector("#agentbalanceDisplay");
const balance=[0];
agentbalanceDisplay.innerHTML=balance+"Tk";
const agentNumber='01711111111';

// first parson work start
const firstNumber=document.querySelector("#firstNumber");
const firstMoney=document.querySelector("#firstMoney");
const FirstPersonbalanceDisplay=document.querySelector("#FirstPersonbalanceDisplay");
const firstPersonNumber='01711111112';
const firstPersonbalance=[0];
FirstPersonbalanceDisplay.innerHTML=firstPersonbalance+"Tk";
const firstMassage=document.querySelector("#firstMassage");
// first parson work end

// first parson work start
const secNumber=document.querySelector("#secNumber");
const secMoney=document.querySelector("#secMoney");
const SecondPersonbalanceDisplay=document.querySelector("#SecondPersonbalanceDisplay");
const secondPersonNumber='01711111113';
const secondPersonbalance=[0];
SecondPersonbalanceDisplay.innerHTML=secondPersonbalance+"Tk";
const secMassage=document.querySelector("#secMassage");
// second parson work end

// first person validation work start =================================================================
function validateFirstForm(){
    var fn = document.forms["firstfrom"]["fNumber"].value;
    var fm = document.forms["firstfrom"]["fMoney"].value;
    if (fn == "" || fn == null ||fm == "" || fm == null) {
      alert("Number or Amount must be filled out");
      return false;
    }else{
        if (isNaN(firstNumber.value) || isNaN(firstMoney.value)){  
        firstMassage.innerHTML="Enter Numeric value only";  
        }else{ 
            firstcheckBox();
        }
    }

}
// chackbox check 
function firstcheckBox(){
    var a = document.forms["firstfrom"]["checkbox"].value;
    if (a == "" || a == null) {
        alert("Pleace Select Agent or Personal");
        return false;
      }else if(a == "Agent"){
        agentNumberfind();
      }else if(a == "Personal"){
        personalNumberfind();
    }
}


// here amount with vat 2% extra charg

// console.log(fmb)
const aaa=[5000];
const firstMainBalance=aaa/100*2
const fmb=firstMainBalance+aaa[0 ];
console.log(fmb)

// agent number justify 
function agentNumberfind(){
    if(agentNumber===firstNumber.value){
        if(firstMoney.value>=0){
            if(firstPersonbalance[0]<firstMoney.value){
                alert("you haven't insufficient balance");
                return false;
            }else{
                if(firstMoney.value>=1){
                    firstpersonPasswordwork();    
                }else{
                    alert('Your send money to low pleace check thank you');
                }
                    
            }
        }else{
            alert('Enter your amount is not valid');
        }   
        }else{
        alert("Your number is not a Agent Number Pleace Check");
    }
}
function personalNumberfind(){
    if(secondPersonNumber===firstNumber.value){
        if(firstMoney.value>=0){
            if(firstPersonbalance[0]<firstMoney.value){
                alert("you haven't insufficient balance");
                return false;
            }else{
                if(firstMoney.value>=1){
                    firstpersonPasswordwork();
                }else{
                    alert('Your send money to low pleace check thank you');
                }
                    
            }
        }else{
            alert('Enter your amount is not valid');
        }   
        }else{
        alert("Your number is not a personal Number Pleace Check");
    }
}
// fastperson password box show work start
const fristpasswordinput=document.querySelector("#fristpasswordinput");
const fristpassCover=document.querySelector('#fristpassCover');
const fastpersonpassword="456123";
const fristpasswordwrongshowdisplay=document.querySelector("#fristpasswordwrongshowdisplay");

function firstpersonPasswordwork(){
    fristpassCover.style.display="block";
   const fristnumberoramountshowdisplay=document.querySelector("#fristnumberoramountshowdisplay");
   fristnumberoramountshowdisplay.innerHTML='('+' '+firstNumber.value+' '+')'+'or'+'('+' '+firstMoney.value+' '+')'+'-Tk';
}

document.querySelector("#fristpasswordcrocebtn").addEventListener("click",fastcrosbtn);

function fastcrosbtn(){
    fristpassCover.style.display="none";
}

document.querySelector("#fristpasswordbtn").addEventListener("click",fristpasswordbtn);

function fristpasswordbtn(){   
    if (fristpasswordinput.value == "" || fristpasswordinput.value == null) {
        fristpasswordwrongshowdisplay.innerHTML="Pleace Enter your password";
      return false;
    }else{
        if (isNaN(fristpasswordinput.value)){  
            fristpasswordwrongshowdisplay.innerHTML="Password for only number accept "; 
            }else{ if(fristpasswordinput.value===fastpersonpassword){

                if(agentNumber===firstNumber.value){

                    const vfmb=parseInt(firstMoney.value);
                    const firstMainBalance=vfmb/100*2
                    const fmb=firstMainBalance+vfmb;

                    if(firstPersonbalance[0]<fmb){
                        alert('Pleace check balance + 2% vat includ')
                     }else{
                       firstcalbal(agentcalfuncion()) ;
                    }

                    
                    fristpasswordinput.value='';  
                    fristpasswordwrongshowdisplay.innerHTML='';             
                }else if(secondPersonNumber===firstNumber.value){

                    const fvfmb=parseInt(firstMoney.value);
                    const ffirstMainBalance=fvfmb+5;
                
                    console.log(ffirstMainBalance)
                    if(firstPersonbalance[0]<ffirstMainBalance){
                        alert('Pleace check balance + 5tk includ send cost')
                     }else{
                        firstcalbalone(firstinsecondparsoncal());
                    }
                    
                    
                     
                    fristpasswordinput.value='';  
                    fristpasswordwrongshowdisplay.innerHTML='';   
                }else{
                   alert("Invalid Number Pleace Enter Valid number")
                   fristpasswordinput.value='';  
                   fristpasswordwrongshowdisplay.innerHTML='';   
                   fristpassCover.style.display="none";
                }

            }else{
                fristpasswordwrongshowdisplay.innerHTML="Your password is Wrong"; 
            }
        }
    } 
}

document.querySelector("#fristypasswordclearbtn").addEventListener('click',fristypasswordclearbtn);
function fristypasswordclearbtn(){
    fristpasswordinput.value='';
}

// second person validation work start ==================================================================

function validatesecForm(){
    var sn = document.forms["secFrom"]["secNumber"].value;
    var sm = document.forms["secFrom"]["secMoney"].value;
    if (sn == "" || sn == null ||sm == "" || sm == null) {
      alert("Number or Amount must be filled out");
      return false;
    }else{
        if (isNaN(secNumber.value) || isNaN(secMoney.value)){  
            secMassage.innerHTML="Enter Numeric value only";  
        }else{ 
            secondcheckBox();
        }
    }

}
function secondcheckBox(){
    var b = document.forms["secFrom"]["checkbox"].value;
    if (b == "" || b == null) {
        alert("Pleace Select Agent or Personal");
        return false;
      }else if(b == "Agent"){
        secagentNumberfind();
      }else if(b == "Personal"){
        secpersonalNumberfind();
      }
}
// number justify 
function secagentNumberfind(){
    if(agentNumber===secNumber.value){
        if(secMoney.value>=0){
            if(secondPersonbalance[0]<secMoney.value){
                alert("you haven't insufficient balance");
                return false;
            }else{
                if(secMoney.value>=1){
                    secpersonPasswordwork();
                }else{
                    alert('Your send money to low pleace check thank you');
                }  
            }
        }else{
            alert('Enter your amount is not valid');
        }   
        }else{
        alert("Your number is not a Agent Number Pleace Check");
    }
}
function secpersonalNumberfind(){
    if(firstPersonNumber===secNumber.value){
        if(secMoney.value>=0){
            if(secondPersonbalance[0]<secMoney.value){
                alert("you haven't insufficient balance");
                return false;
            }else{
                if(secMoney.value>=1){
                    secpersonPasswordwork(); 
                }else{
                    alert('Your send money to low pleace check thank you');
                }  
            }
        }else{
            alert('Enter your amount is not valid');
        }   
        }else{
        alert("Your number is not a personal Number Pleace Check");
    }
}

// secperson password box show work start
const secpasswordinput=document.querySelector("#secpasswordinput");
const secpassCover=document.querySelector('#secpassCover');
const secpersonpassword="123456";
const secpasswordwrongshowdisplay=document.querySelector("#secpasswordwrongshowdisplay");

function secpersonPasswordwork(){
    secpassCover.style.display="block";
   const secnumberoramountshowdisplay=document.querySelector("#secnumberoramountshowdisplay");
   secnumberoramountshowdisplay.innerHTML='('+' '+secNumber.value+' '+')'+'or'+'('+' '+secMoney.value+' '+')'+'-Tk';
}

document.querySelector("#secpasswordcrocebtn").addEventListener("click",secpasswordcrocebtn);

function secpasswordcrocebtn(){
    secpassCover.style.display="none";
}

document.querySelector("#secpasswordbtn").addEventListener("click",secpasswordbtn);

function secpasswordbtn(){   
    if (secpasswordinput.value == "" || secpasswordinput.value == null) {
        secpasswordwrongshowdisplay.innerHTML="Pleace Enter your password";
      return false;
    }else{
        if (isNaN(secpasswordinput.value)){  
            secpasswordwrongshowdisplay.innerHTML="Password for only number accept "; 
            }else{ 
                if(secpasswordinput.value===secpersonpassword){

                if(agentNumber===secNumber.value){

                    const svfmb=parseInt(secMoney.value);
                    const sfirstMainBalance=svfmb/100*2
                    const sfmb=sfirstMainBalance+svfmb;

                    if(secondPersonbalance[0]<sfmb){
                        alert('Pleace check balance + 2% vat includ')
                     }else{
                        seccalbal(secagentcalfuncion()); 
                    }


                    
                    secpasswordinput.value='';  
                    secpasswordwrongshowdisplay.innerHTML='';           
                }else if(firstPersonNumber===secNumber.value){

                    const ssvfmb=parseInt(secMoney.value);
                    const ssfirstMainBalance=ssvfmb+5;
                    
                    console.log(ssfirstMainBalance)
                    if(secondPersonbalance[0]<ssfirstMainBalance){
                        alert('Pleace check balance + 5tk includ send cost')
                     }else{
                        seccalbalone(secfirstinsecondparsoncal());
                    }
                    


                    
                    secpasswordinput.value='';  
                    secpasswordwrongshowdisplay.innerHTML=''; 
                }else{
                   alert("Invalid Number Pleace Enter Valid number")
                   secpasswordinput.value='';  
                   secpasswordwrongshowdisplay.innerHTML=''; 
                   secpassCover.style.display="none";
                }

            }else{
                secpasswordwrongshowdisplay.innerHTML="Your password is Wrong"; 
            }
        }
    } 
}

document.querySelector("#secpasswordclearbtn").addEventListener('click',secpasswordclearbtn);

function secpasswordclearbtn(){
    secpasswordinput.value='';
}

// agent work start==============================================================================
function validateForm() {
    var x = document.forms["agent"]["agentINV"].value;
    var y = document.forms["agent"]["agentINVone"].value;
    if (x == "" || x == null ||y == "" || y == null) {
      alert("Number or Amount must be filled out");
      return false;
    }else{
        validate()
    }
}

function validate(){    
    if (isNaN(agentImputNumber.value) || isNaN(agentImputAmount.value)){  
        agentMassage.innerHTML="Enter Numeric value only";  
      }else{  
        if(balance[0]<agentImputAmount.value){
            alert("you haven't insufficient balance");
            return false;
        }else{
           if(agentImputAmount.value>=0){
            if(agentImputAmount.value>=1){
                agentPasswordwork(); 
            }else{
                alert('Your send money to low pleace check thank you');
            }
            
           }else{
            alert('Enter your amount is not valid');
           }
        }
    }     
} 

// agent password box show work start
const agentpasswordinput=document.querySelector("#agentpasswordinput");
const agentpasswordshow=document.querySelector('#agentpassCover');
const agentpassword="789456";
const passwordwrongshowdisplay=document.querySelector("#passwordwrongshowdisplay");

function agentPasswordwork(){
   agentpasswordshow.style.display="block";
   const numberoramountshowdisplay=document.querySelector("#numberoramountshowdisplay");
   numberoramountshowdisplay.innerHTML='('+' '+agentImputNumber.value+' '+')'+'or'+'('+' '+agentImputAmount.value+' '+')'+'-Tk';
}

document.querySelector("#agentpasswordcrocebtn").addEventListener("click",psxbtn);

function psxbtn(){
    agentpasswordshow.style.display="none";
}

document.querySelector("#agentpasswordbtn").addEventListener("click",agentpasswordbtn);

function agentpasswordbtn(){   
    if (agentpasswordinput.value == "" || agentpasswordinput.value == null) {
        passwordwrongshowdisplay.innerHTML="Pleace Enter your password";
      return false;
    }else{
        if (isNaN(agentpasswordinput.value)){  
            passwordwrongshowdisplay.innerHTML="Password for only number accept "; 
            }else{ if(agentpasswordinput.value===agentpassword){
                if(firstPersonNumber===agentImputNumber.value){
                    calbal(firstparsoncal());  
                    agentpasswordinput.value='';  
                    passwordwrongshowdisplay.innerHTML='';              
                }else if(secondPersonNumber===agentImputNumber.value){
                    calbal(secondparsoncal());
                    agentpasswordinput.value=''; 
                    passwordwrongshowdisplay.innerHTML=''; 
                }else{
                   alert("Invalid Number Pleace Enter Valid number")
                    agentpasswordinput.value='';  
                    passwordwrongshowdisplay.innerHTML='';
                    agentpasswordshow.style.display="none";
                }
            }else{
                passwordwrongshowdisplay.innerHTML="Your password is Wrong"; 
            }
        }
    } 
}

document.querySelector("#agentpasswordclearbtn").addEventListener('click',agentpasswordclearbtn);

function agentpasswordclearbtn(){
    agentpasswordinput.value='';
}

// ==============================================================================
function calbal(){
    const clalculetBalance=balance[0]-agentImputAmount.value;
    agentbalanceDisplay.innerHTML=clalculetBalance+"TK";
    alert(agentImputAmount.value+"-"+"Tk send number is Valid");
    balance.pop();
    balance.push(clalculetBalance);
    agentpasswordshow.style.display="none";
    agentImputNumber.value='';
    agentImputAmount.value='';
}


// const vfmb=parseInt(firstMoney.value);
// const firstMainBalance=vfmb/100*2
// const fmb=firstMainBalance+vfmb;



function firstcalbal(){

    const fone=parseInt(firstMoney.value);
    const ftwo=fone/100*2;
    const fthree=fone+ftwo;
    const firstclalculetBalance=firstPersonbalance[0]-fthree;

    FirstPersonbalanceDisplay.innerHTML=firstclalculetBalance+"TK";
    alert(firstMoney.value+"-"+"Tk send number is Valid");
    firstPersonbalance.pop();
    firstPersonbalance.push(firstclalculetBalance);
    fristpassCover.style.display="none";
    firstNumber.value='';
    firstMoney.value='';
}
function firstcalbalone(){

    const ffone=parseInt(firstMoney.value);
    const fftwo=ffone+5;
    const firstclalculetBalance=firstPersonbalance[0]-fftwo;

    FirstPersonbalanceDisplay.innerHTML=firstclalculetBalance+"TK";
    alert(firstMoney.value+"-"+"Tk send number is Valid");
    firstPersonbalance.pop();
    firstPersonbalance.push(firstclalculetBalance);
    fristpassCover.style.display="none";
    firstNumber.value='';
    firstMoney.value='';
}



function seccalbal(){
    const sone=parseInt(secMoney.value);
    const stwo=sone/100*2;
    const sthree=sone+stwo;

    const secclalculetBalance=secondPersonbalance[0]-sthree;
    SecondPersonbalanceDisplay.innerHTML=secclalculetBalance+"TK";
    alert(secMoney.value+"-"+"Tk send number is Valid");
    secondPersonbalance.pop();
    secondPersonbalance.push(secclalculetBalance);
    secpassCover.style.display="none";
    secNumber.value='';
    secMoney.value='';
}

function seccalbalone(){
    const ssone=parseInt(secMoney.value);
    const stwo=ssone+5;


    const secclalculetBalance=secondPersonbalance[0]-stwo;
    SecondPersonbalanceDisplay.innerHTML=secclalculetBalance+"TK";
    alert(secMoney.value+"-"+"Tk send number is Valid");
    secondPersonbalance.pop();
    secondPersonbalance.push(secclalculetBalance);
    secpassCover.style.display="none";
    secNumber.value='';
    secMoney.value='';
}



//agent first person secont person  work start calculet
// TotalProfitBalance work start
// agent use two funcion
function firstparsoncal(){ 
    const agentImputAmountb=parseInt(agentImputAmount.value);
    firstPersonbalance.push(agentImputAmountb);
    const firstPersonbalanced=firstPersonbalance[0]+firstPersonbalance[1];
    firstPersonbalance.pop()
    firstPersonbalance.pop()
    firstPersonbalance.push(firstPersonbalanced);
    FirstPersonbalanceDisplay.innerHTML=firstPersonbalance+"TK";         
}

function secondparsoncal(){
    const agentImputAmountss=parseInt(agentImputAmount.value);
    secondPersonbalance.push(agentImputAmountss);
    const secondPersonbalancedd=secondPersonbalance[0]+secondPersonbalance[1];
    secondPersonbalance.pop()
    secondPersonbalance.pop()
    secondPersonbalance.push(secondPersonbalancedd);
    SecondPersonbalanceDisplay.innerHTML=secondPersonbalance+"TK";  
}


function agentcalfuncion(){ 
    const firstImputAmountb=parseInt(firstMoney.value);
    balance.push(firstImputAmountb);
    const agentbalanced=balance[0]+balance[1];
    balance.pop()
    balance.pop()
    balance.push(agentbalanced);
    agentbalanceDisplay.innerHTML=balance+"TK"; 

    const ffsac=firstImputAmountb/100*2;
    TotalProfitBalance.push(ffsac);
    const ffsacc=TotalProfitBalance[0]+TotalProfitBalance[1];
    TotalProfitBalance.pop()    
    TotalProfitBalance.pop()    
    TotalProfitBalance.push(ffsacc);  
    cTotalProfitBalance.innerHTML=TotalProfitBalance+"TK"; 
    totapplusprofit() 
}  

function firstinsecondparsoncal(){
    const firstinsecondImputAmountss=parseInt(firstMoney.value);
    secondPersonbalance.push(firstinsecondImputAmountss);
    const fsecondPersonbalancedd=secondPersonbalance[0]+secondPersonbalance[1];
    secondPersonbalance.pop()
    secondPersonbalance.pop()
    secondPersonbalance.push(fsecondPersonbalancedd);
    SecondPersonbalanceDisplay.innerHTML=secondPersonbalance+"TK"; 
    
    const ffsacs=5;
    TotalProfitBalance.push(ffsacs);
    const ffsaccs=TotalProfitBalance[0]+TotalProfitBalance[1];
    TotalProfitBalance.pop()    
    TotalProfitBalance.pop()    
    TotalProfitBalance.push(ffsaccs);  
    cTotalProfitBalance.innerHTML=TotalProfitBalance+"TK"; 
    totapplusprofit()
   
}
// secont person  use two funcion
function secagentcalfuncion(){ 
    const secontImputAmountb=parseInt(secMoney.value);
    balance.push(secontImputAmountb);
    const secagentbalanced=balance[0]+balance[1];
    balance.pop()
    balance.pop()
    balance.push(secagentbalanced);
    agentbalanceDisplay.innerHTML=balance+"TK"; 

    const sffsac=secontImputAmountb/100*2;
    TotalProfitBalance.push(sffsac);
    const sffsacc=TotalProfitBalance[0]+TotalProfitBalance[1];
    TotalProfitBalance.pop()    
    TotalProfitBalance.pop()    
    TotalProfitBalance.push(sffsacc);  
    cTotalProfitBalance.innerHTML=TotalProfitBalance+"TK"; 
    totapplusprofit() 
         
}

function secfirstinsecondparsoncal(){
    const secfirstinsecondImputAmountss=parseInt(secMoney.value);
    firstPersonbalance.push(secfirstinsecondImputAmountss);
    const secfsecondPersonbalancedd=firstPersonbalance[0]+firstPersonbalance[1];
    firstPersonbalance.pop()
    firstPersonbalance.pop()
    firstPersonbalance.push(secfsecondPersonbalancedd);
    FirstPersonbalanceDisplay.innerHTML=firstPersonbalance+"TK"; 
    
    const ssffsacs=5;
    TotalProfitBalance.push(ssffsacs);
    const ssffsaccs=TotalProfitBalance[0]+TotalProfitBalance[1];
    TotalProfitBalance.pop()    
    TotalProfitBalance.pop()    
    TotalProfitBalance.push(ssffsaccs);  
    cTotalProfitBalance.innerHTML=TotalProfitBalance+"TK"; 
    totapplusprofit()
}
// first person secont person work end calculet


// ====================================================================================================
//agent send button work start
document.querySelector("#agentSend").addEventListener("click",()=>{
    agentMassage.innerHTML='';
    validateForm()
});

//agent cls button work start
document.querySelector("#agentClear").addEventListener("click",()=>{
    agentImputNumber.value='';
    agentImputAmount.value='';
});

//First Person button work start
document.querySelector("#firstSend").addEventListener("click",()=>{
    firstMassage.innerHTML='';
    validateFirstForm()
});

//First Person cls button work start
document.querySelector("#firstClear").addEventListener("click",()=>{
    firstNumber.value='';
    firstMoney.value='';
});

//Second Person button work start
document.querySelector("#secSend").addEventListener("click",()=>{
    secMassage.innerHTML='';
    validatesecForm();
});

//Second Person cls button work start
document.querySelector("#secClear").addEventListener("click",()=>{
    secNumber.value='';
    secMoney.value='';
});

//agent one two crosh button add====work start========nev ber show agent frist second=================
// agent
const agc=document.querySelector("#agc");
document.querySelector("#agcros").addEventListener("click",agcros);
function agcros(){
    agc.style.display="none";
}
document.querySelector("#agentshow").addEventListener("click",agentshow);
function agentshow(){
    agc.style.display="block";
}
// first
const fcros=document.querySelector("#fcros");
document.querySelector("#ficros").addEventListener("click",ficros);
function ficros(){
    fcros.style.display="none";
}
document.querySelector("#firstshow").addEventListener("click",firstshow);
function firstshow(){
    fcros.style.display="block";
}
// second
const seccrosh=document.querySelector("#seccrosh");
document.querySelector("#seccros").addEventListener("click",seccros);
function seccros(){
    seccrosh.style.display="none";
}
document.querySelector("#secshow").addEventListener("click",secshow);
function secshow(){
    seccrosh.style.display="block";
}
//agent one two crosh button add====work end===========================

//agent one two notification crosh button add====work start===========================
// company
const cnotification=document.querySelector("#cnotification");
document.querySelector("#comnotification").addEventListener("click",comnotification);
function comnotification(){    
    cnotification.style.display="block";
}
document.querySelector("#ccrosnoti").addEventListener("click",ccrosnoti);
function ccrosnoti(){    
    cnotification.style.display="none";
}
// agent
const anotification=document.querySelector("#anotification");
document.querySelector("#acrosnoti").addEventListener("click",acrosnoti);
function acrosnoti(){    
    anotification.style.display="none";
}
document.querySelector("#agentshownotification").addEventListener("click",agentshownotification);
function agentshownotification(){    
    anotification.style.display="block";
}
// frist
const fnotification=document.querySelector("#fnotification");
document.querySelector("#fcrosnoti").addEventListener("click",fcrosnoti);
function fcrosnoti(){    
    fnotification.style.display="none";
}
document.querySelector("#firstshownotification").addEventListener("click",firstshownotification);
function firstshownotification(){    
    fnotification.style.display="block";
}
// second
const snotification=document.querySelector("#snotification");
document.querySelector("#scrosnoti").addEventListener("click",scrosnoti);
function scrosnoti(){    
    snotification.style.display="none";
}
document.querySelector("#secshownotification").addEventListener("click",secshownotification);
function secshownotification(){    
    snotification.style.display="block";
}

// notification part work start=======================================================
function notificationshowcompany(){
    let div=document.createElement("div");
    div.classList.add("depnotic");

    div.innerHTML=`<div id="noticxx"><a href="#" id="noticx" class="noticx" ><i class="fa-solid fa-xmark"></i></a>
    <p>now your balance is ${NowTotalBalance[0]} send to agent balance is ${companyInput.value} thankyou</p>
    </div>    `
    cnotification.appendChild(div);
}
// notification part work end=======================================================
//agent one two notification crosh button add====work end===========================
// const noticxxnik=document.querySelector("#noticxxnik");
// document.querySelector("#noticxnotic").addEventListener("click",noticxnotic);

// function noticxxnik(){
//     noticxxnik.style.display="none";
// }

// nav bar theke number password show work stat=============================
const nnumberPassword=document.querySelector("#nnumberPassword");
document.querySelector("#phonpasscros").addEventListener("click",phonpasscros);
function phonpasscros(){    
    nnumberPassword.style.display="none";
}
//agent number password show
document.querySelector("#agentphonpassshow").addEventListener("click",agentphonpassshow);
function agentphonpassshow(){    
    nnumberPassword.style.display="block";
}
//first person number password show
document.querySelector("#firstphonpassshow").addEventListener("click",firstphonpassshow);
function firstphonpassshow(){    
    nnumberPassword.style.display="block";
}
//second person number password show
document.querySelector("#secphonpassshow").addEventListener("click",secphonpassshow);
function secphonpassshow(){    
    nnumberPassword.style.display="block";
}
// nav bar theke number password show work end=============================

// main company work start=================================================================================
const CompanyTotalBalance=[5000000];
const NowTotalBalance=[5000000];
const NowCashBalance=[0];
const TotalProfitBalance=[0];
const ProfitwithTotalBalance=[0];
const TotalAgentSendBalance=[0];

const CompanySendAgentProfit=[0];
const CompanyAllSelary=[0];
const CompanyProfit=[0];

const cCompanyTotalBalance=document.querySelector("#cCompanyTotalBalance");
cCompanyTotalBalance.innerHTML=CompanyTotalBalance[0]+"TK";

const cNowTotalBalance=document.querySelector("#cNowTotalBalance");
cNowTotalBalance.innerHTML=NowTotalBalance[0]+"TK";

const cNowCashBalance=document.querySelector("#cNowCashBalance");
cNowCashBalance.innerHTML=NowCashBalance[0]+"TK";

const cTotalProfitBalance=document.querySelector("#cTotalProfitBalance");
cTotalProfitBalance.innerHTML=TotalProfitBalance[0]+"TK";

const cProfitwithTotalBalance=document.querySelector("#cProfitwithTotalBalance");
cProfitwithTotalBalance.innerHTML=ProfitwithTotalBalance[0]+"TK";

const cTotalAgentSendBalance=document.querySelector("#cTotalAgentSendBalance");
cTotalAgentSendBalance.innerHTML=TotalAgentSendBalance[0]+"TK";

const cCompanySendAgentProfit=document.querySelector("#cCompanySendAgentProfit");
cCompanySendAgentProfit.innerHTML=CompanySendAgentProfit[0]+"TK";

const cCompanyAllSelary=document.querySelector("#cCompanyAllSelary");
cCompanyAllSelary.innerHTML=CompanyAllSelary[0]+"TK";

const cCompanyProfit=document.querySelector("#cCompanyProfit");
cCompanyProfit.innerHTML=CompanyProfit[0]+"TK";
// tk kom hole signal dibe besi holew signal dibe work start==================================
function comTk(){
    if(NowTotalBalance[0]>5000000){
        cCompanyTotalBalance.style.color='blue';
    }else if(NowTotalBalance[0]<5000000){
        cCompanyTotalBalance.style.color='red';
    }
}

// tk kom hole signal dibe besi holew signal dibe work end==================================

// company all balane clalculat with agent and profit work start-============================
function totapplusprofit(){

    const xxx=TotalProfitBalance[0]/100*45;
    const xxxx=TotalProfitBalance[0]/100*20;
    const xxxxx=TotalProfitBalance[0]/100*35;


    const tpbStap=parseFloat(xxx.toFixed(3)) ;
    const tpbAgent=parseFloat(xxxx.toFixed(3)) ;
    const tpbcompany=parseFloat(xxxxx.toFixed(3)) ;


    CompanyAllSelary.pop();
    CompanyAllSelary.push(tpbStap);
    cCompanyAllSelary.innerHTML=CompanyAllSelary[0]+"TK";

    CompanyProfit.pop();
    CompanyProfit.push(tpbcompany);
    cCompanyProfit.innerHTML=CompanyProfit[0]+"TK";

    CompanySendAgentProfit.pop();
    CompanySendAgentProfit.push(tpbAgent);
    cCompanySendAgentProfit.innerHTML=CompanySendAgentProfit[0]+"TK";

    const nowtotalplusprofit=NowTotalBalance[0]+tpbcompany;
    NowTotalBalance.pop()
    NowTotalBalance.push(nowtotalplusprofit);
    cNowTotalBalance.innerHTML=NowTotalBalance+"TK";

    const tpprofit=CompanyTotalBalance[0]+tpbcompany;
    ProfitwithTotalBalance.pop()
    ProfitwithTotalBalance.push(tpprofit)
    cProfitwithTotalBalance.innerHTML=ProfitwithTotalBalance[0]+"TK";
    comTk();
}

// company all balane clalculat with agent and profit work end============================
// withdrew btn work start============================================================
document.querySelector("#Companywithdrew").addEventListener("click",Companywithdrew);
function Companywithdrew(){
    let btttt=parseInt(prompt("input You withdrew Amount")) 
    if(CompanyProfit[0]<btttt){
        alert("you haven't insufficient balance / Work is running");
        return false;
    }else{
        comwi();
    }
}

function comwi(){
    const coo=NowTotalBalance[0]-CompanyProfit[0];
    NowTotalBalance.pop();
    NowTotalBalance.pop();
    NowTotalBalance.push(coo);
    cNowTotalBalance.innerHTML=NowTotalBalance+"TK";

    const cooo=ProfitwithTotalBalance[0]-CompanyProfit[0]
    ProfitwithTotalBalance.pop();
    ProfitwithTotalBalance.pop();
    ProfitwithTotalBalance.push(cooo);
    cProfitwithTotalBalance.innerHTML=ProfitwithTotalBalance[0]+"TK";

    const coop=TotalProfitBalance[0]-CompanyProfit[0];
    TotalProfitBalance.pop();
    TotalProfitBalance.push(coop);
    cTotalProfitBalance.innerHTML=TotalProfitBalance[0]+"TK";
    
    const minuceee =CompanyProfit[0]-CompanyProfit[0];
    CompanyProfit.pop()
    CompanyProfit.pop()
    CompanyProfit.push(minuceee)
    cCompanyProfit.innerHTML=CompanyProfit+"TK";
    alert('Company withdrew success / Work is running')
}

document.querySelector("#Employeewithdrew").addEventListener("click",Employeewithdrew);
function Employeewithdrew(){

    const bttt=parseInt(prompt("input You withdrew Amount / Work is running")) 
    if(CompanyAllSelary[0]<bttt){
        alert("you haven't insufficient balance");
        return false;
    }else{
        const coopp=TotalProfitBalance[0]-CompanyAllSelary[0];
        TotalProfitBalance.pop()
        TotalProfitBalance.pop()
        TotalProfitBalance.push(coopp)
        cTotalProfitBalance.innerHTML=TotalProfitBalance[0]+"TK";

        const minucee =CompanyAllSelary[0]-CompanyAllSelary[0];
        CompanyAllSelary.pop()
        CompanyAllSelary.pop()
        CompanyAllSelary.push(minucee)
        cCompanyAllSelary.innerHTML=CompanyAllSelary+"TK";
        alert('Employee withdrew success / Work is running')
    }
}

// CompanySendAgentProfit.pop();
// console.log(CompanySendAgentProfit[0])

document.querySelector("#Agentwithdrew").addEventListener("click",Agentwithdrew);
function Agentwithdrew(){
    let btt=parseInt(prompt("input You withdrew Amount / Work is running")) 
    if(CompanySendAgentProfit[0]<btt){
        alert("you haven't insufficient balance");
        return false;
    }else{
        const cooppp=TotalProfitBalance[0]-CompanySendAgentProfit[0];
        TotalProfitBalance.pop()
        TotalProfitBalance.push(cooppp)
        cTotalProfitBalance.innerHTML=TotalProfitBalance[0]+"TK";

        const minuce =CompanySendAgentProfit[0]-CompanySendAgentProfit[0];
        CompanySendAgentProfit.pop()
        CompanySendAgentProfit.push(minuce)
        cCompanySendAgentProfit.innerHTML=CompanySendAgentProfit+"TK";
        
        alert('Agent withdrew success / Work is running')
    }
}

// withdrew btn work end============================================================
// company tk send system ===============Work start=====================================
const companyInput= document.querySelector("#companyInput")
const companyInputpn= document.querySelector("#companyInputpn")
const companyInputps= document.querySelector("#companyInputps")
const companydisplay= document.querySelector("#companydisplay")

const compassword="555555";
document.querySelector("#companySend").addEventListener("click",cps);
function cps(){
    var z = document.forms["company"]["companyInput"].value;
    var zz = document.forms["company"]["companyInputpn"].value;
    var zzz = document.forms["company"]["companyInputps"].value;
    if (z == "" || z == null||zz == "" || zz == null||zzz == "" || zzz == null) {
        companydisplay.innerHTML="All field must be fill up";  
      return false;
    }else{
        if (isNaN(companyInput.value)||isNaN(companyInputpn.value)||isNaN(companyInputps.value)){  
            companydisplay.innerHTML="Enter Numeric value only";  
          }else{ 
            if(NowTotalBalance[0]<companyInput.value){
                alert("you haven't insufficient balance");
                return false;
            }else{
                commaincalculation();
            } 
        } 
    }
}

function commaincalculation(){
    var xphon= companyInputpn.value;
    if(xphon.length==11){
        if(agentNumber===companyInputpn.value){
            var xpassw= companyInputps.value;
           if(xpassw.length==6){
              if(companyInputps.value===compassword){
                companymaincalculation();
              }else{
                alert("Your password not match")
              }
           }else{
            alert("pleace enter 6 digite password")
           }
        }else{
         alert("your agent number is not valid")
        }
    }else{
        alert("this is not a bd Phone Number")
    }
}

function companymaincalculation(){
    if(companyInput.value>=0){
        const cinput=parseInt(companyInput.value);
        const p=balance[0]+cinput;
        balance.pop();
        balance.pop();
        balance.push(p);

        const ntb=NowTotalBalance[0]-cinput;
        NowTotalBalance.pop();
        NowTotalBalance.push(ntb);
        cNowTotalBalance.innerHTML=NowTotalBalance+"Tk";
        comTk();
        const extrapain=NowCashBalance[0]+cinput;
        NowCashBalance.pop();
        NowCashBalance.push(extrapain);
        cNowCashBalance.innerHTML=NowCashBalance+"Tk";
        
        const extrapainone=TotalAgentSendBalance[0]+cinput;
        TotalAgentSendBalance.pop();
        TotalAgentSendBalance.push(extrapainone);
        cTotalAgentSendBalance.innerHTML=TotalAgentSendBalance+"Tk";


        notificationshowcompany();


        agentbalanceDisplay.innerHTML=balance+"Tk";
        companyInput.value='';
        companyInputpn.value='';
        companyInputps.value='';
        companydisplay.innerHTML=cinput+'-'+"tk send agent"; 
    }else{
        companydisplay.innerHTML='Enter your amount is not valid';  
    }
}
     
// company tk send system ===============Work end=====================================

document.querySelector("#companyClear").addEventListener("click",cpc);
function cpc(){
    companyInput.value='';
    companyInputpn.value='';
    companyInputps.value='';
    companydisplay.innerHTML='';
}

//  logout sytem work start================================================================
document.querySelector("#LogOut").addEventListener("click",LogOut);
function LogOut(){
    window.location.href='index.html';
}
//  logout sytem work end================================================================

