const sidebar=document.getElementById("Sidebar");
const iconbar=document.getElementById("IconBar");
const icons=document.querySelector(".sideicon");
iconbar.addEventListener('click',()=>{
    if(sidebar.style.display==='none')
    {
        sidebar.style.display='block';
    }
    else
    {
        sidebar.style.display='none';
    }
});