let MenuBarToggle = document.querySelector('.MenuBar-toggle');
let MenuBarToggleIcon = document.querySelector('.MenuBar-toggle i');
let MenuBar = document.getElementById('MenuBar');

MenuBarToggle.addEventListener('click', e=>{
    MenuBar.classList.toggle('show');

    if(MenuBar.classList.contains('show')){
        MenuBarToggleIcon.setAttribute('class', 'fa fa-times');
    }
    else{
        MenuBarToggleIcon.setAttribute('class', 'fa fa-bars');
    }
});