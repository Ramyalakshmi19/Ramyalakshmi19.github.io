
const bttn=document.getElementById("submit_btn");
function validate()
{
    const bill_amount=document.getElementById("amount");
    const numOfPeople=document.getElementById("numberOfPeople");
    var tip=document.getElementsByName("tip_percent");
    var tip_percentage,flag=0;
    var tip_pp,total_pp;
    for(var i=0;i<tip.length;i++)
    {
        if(tip[i].checked)
        {
            flag+=1;
            tip_percentage=tip[i].value;
        }
    }
    console.log(tip_percentage);
    if(isNaN(bill_amount.value)||bill_amount.value<=0)
    {
        document.getElementById("bill_box").style.border="1.5px solid red";
    }
    else if (isNaN(numOfPeople.value)||numOfPeople.value==0)
    {
        document.getElementById("people_box").style.border="1.5px solid red";
    }
    tip_pp=(tip_percentage*bill_amount.value)/numOfPeople.value;
    total_pp=(bill_amount.value/numOfPeople.value)+tip_pp;
    document.getElementById("tipPerPerson").innerHTML=tip_pp.toFixed(2);
    document.getElementById("TotalPerPerson").innerHTML=total_pp.toFixed(2);
    console.log(tip_pp);
    console.log(total_pp);
    
}
bttn.addEventListener('click',validate);
