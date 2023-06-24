document.getElementById('name').oninput=function()
{
    let x=document.getElementById('name');
    document.getElementById('cardh_name').innerHTML=x.value;
}
document.getElementById('num').oninput=function()
{
    let x=document.getElementById('num');
    document.getElementById('cardh_num').innerHTML=x.value;
}
document.getElementById('expy').oninput=function()
{
    let x=document.getElementById('expm');
    let y=document.getElementById('expy');
    document.getElementById('cardh_exp').innerHTML=x.value+"/"+y.value;
}
document.getElementById('cvc').oninput=function()
{
    let x=document.getElementById('cvc');
    document.getElementById('cardh_cvc').innerHTML=x.value;
}
document.getElementById('confirm_btn').onclick=function()
{
    document.getElementById('outer_box').style.visibility="hidden";
    document.getElementById('confirmation').style.visibility="visible";
}