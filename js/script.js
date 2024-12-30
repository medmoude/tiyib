//the Date 
let theDate = new Date();

let currentYear = theDate.getFullYear();
const launchYear = 2024;
const videos = document.querySelectorAll('video');

document.getElementById("current-year").textContent = currentYear;
document.getElementById('launch-year').textContent = launchYear;


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


//stop the page from going back to top after reload
window.addEventListener('beforeunload', function () {
    localStorage.setItem('scrollPosition', window.scrollY);
});
  
window.addEventListener('load', function () {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, scrollPosition);
    
    }
});


//loop through the videos in the page 
videos.forEach(video => {
    video.addEventListener('click', function() {
        
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { // Firefox
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { // Chrome, Safari
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { // IE/Edge
            video.msRequestFullscreen();
        }
    });
});
  