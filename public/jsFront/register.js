
window.onload = function(){
    let data = {
        user : '',
        email : '',
        password : ''
    }
    let form = document.getElementById('registerForm')
    
    form.email.addEventListener('keyup', function(e){
        data.email = e.target.value
        if(validator.isEmail(data.email)){
            this.nextElementSibling.classList.replace('show', 'hide')
        }
        else{
            this.nextElementSibling.classList.replace('hide', 'show')
        }
    })
    form.user.addEventListener('keyup', function(e){
        data.user = e.target.value
        if(data.user.length > 2){
            this.nextElementSibling.classList.replace('show', 'hide')
        }
        else{
            this.nextElementSibling.classList.replace('hide', 'show')
        }
    })
    form.password.addEventListener('keyup', function(e){
        data.password = e.target.value
        if(data.password.length > 8){
            this.nextElementSibling.classList.replace('show', 'hide')
        }
        else{
            this.nextElementSibling.classList.replace('hide', 'show')
        }
    })
} 
