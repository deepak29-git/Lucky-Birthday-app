const luckyNo=document.querySelector("#lucky-no");
const checkBtn=document.querySelector("#check-btn");
const birthDay=document.querySelector("#birthday");
const outputMsg=document.querySelector('#output-msg')
const luckyImage=document.querySelector("#image")

checkBtn.addEventListener('click', showData);



function showData(){
    const birthDate=birthDay.value;
    const luckyNumber=luckyNo.value        
        const sum=calculateSum(birthDate);
        if(sum=="" || birthDate==""){
            outputMsg.innerText="Please fill both the input fields"
        }else{
            compareValues(sum,luckyNumber)
        }
    
}

function compareValues(sum,luckyNumber){
    if(sum%luckyNumber===0){
        outputMsg.innerText="🙂Yay , You are lucky";
    }else{
        outputMsg.innerText="☹️Sorry, You are not lucky";
    }
}

function calculateSum(birthDate){
    birthDate=birthDate.replaceAll("-","");
    let sum=0;
    for(i=0;i<birthDate.length;i++){
        sum=sum+Number(birthDate.charAt(i))
    }
    return sum ;
}