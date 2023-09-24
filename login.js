const signUpSwitch = document.getElementById('signup-switch');
const loginSwitch  = document.getElementById('login-switch');
const signUp       = document.querySelector('.form-parent');
const login        = document.querySelector('.form-parent-login')
const anchorSignUp = document.getElementById('signUp-a');
const anchorLogin  = document.getElementById('login-a');

let signUpValue=1,loginValue=0;

function switchTo(target){
    if(target==='signup'){
        if(signUpValue===1) return;
        login.classList.toggle('display-none');
        signUp.classList.toggle('display-none');
        signUpSwitch.classList.toggle('opacity');
        loginSwitch.classList.toggle('opacity');
        signUpValue=1;
        loginValue=0;
    }else if(target==='login'){
        if(loginValue===1) return;
        signUp.classList.toggle('display-none');
        login.classList.toggle('display-none')
        signUpSwitch.classList.toggle('opacity');
        loginSwitch.classList.toggle('opacity');
        signUpValue=0;
        loginValue=1;
    }
}

signUpSwitch.addEventListener('click', (e)=>{
    switchTo('signup');
});
loginSwitch.addEventListener('click',(e)=>{
    switchTo('login');
});
anchorLogin.addEventListener('click',(e)=>{
    switchTo('login');
});
anchorSignUp.addEventListener('click',(e)=>{
    switchTo('signup');
})