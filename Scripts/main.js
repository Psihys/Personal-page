document.addEventListener('DOMContentLoaded', function () {
const darkButton = document.getElementById("dark-bright-mode-button")
const body = document.querySelector('body')




const applyTheme = (theme) =>{
    if(theme === 'dark'){
        body.classList.add('dark')
        if (darkButton) {
            darkButton.classList.add("dark-mode-button--active"); 
        }
    }else {
        body.classList.remove('dark');
        if (darkButton) {
            darkButton.classList.remove("dark-mode-button--active");
        }
    }
    localStorage.setItem('theme', theme);
}

const currentTheme = localStorage.getItem("theme")
if(currentTheme){
    applyTheme(currentTheme)
} else{
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDarkScheme ? 'dark' : 'light');
}



const activeClass = () =>{
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


darkButton.addEventListener('click', activeClass)
});
