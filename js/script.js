//the Date 
let theDate = new Date();
document.getElementById("date").innerHTML = theDate.getFullYear();

//show and hide sideBar
let showSideBar = document.querySelector('.show-side-bar');
let navBar = document.querySelector('.nav-bar ul');
showSideBar.onclick = function(){
    document.querySelector('.side-bar ul').style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
}

let hideSideBar = document.querySelector('.hide-side-bar');
hideSideBar.onclick = function(){
    document.querySelector('.side-bar ul').style.display = 'none';
    document.body.style.overflow = 'visible';
    
}

//Hide on mobiles 
let sideBar = document.querySelector('.side-bar ul');

window.onresize = function(){
    sideBar.style.width = "100%";
        
}

