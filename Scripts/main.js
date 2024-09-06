document.addEventListener('DOMContentLoaded', function () {
const darkButton = document.getElementById("dark-bright-mode-button")
const body = document.querySelector('body')
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
const currentTheme = localStorage.getItem("theme")

if(prefersDarkScheme === 'dark'){
    body.classList.add('dark')
    if (darkButton) {
        darkButton.classList.add("dark-mode-button--active"); 
    }
}
const removeActiveClass = () =>{
    if(!body.classList.contains('dark')){
        darkButton.classList.add("dark-mode-button--active");
        body.classList.add('dark')
        localStorage.setItem('theme','dark')
    }else{
        darkButton.classList.remove("dark-mode-button--active")
        body.classList.remove('dark')
        localStorage.setItem('theme','light')
    }
    
   
} 


darkButton.addEventListener('click', removeActiveClass)
});
