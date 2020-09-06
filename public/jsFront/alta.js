window.onload = function(){
    let data = {
        nombre : '',
        detalle : '',
        
    }
    let form = document.getElementById('altaForm')
    
   
    form.nombre.addEventListener('keyup', function(e){
        data.nombre = e.target.value
        if(data.nombre.length >= 5){
            this.nextElementSibling.classList.replace('show', 'hide')
        }
        else{
            this.nextElementSibling.classList.replace('hide', 'show')
        }
    })
    form.detalle.addEventListener('keyup', function(e){
        data.detalle = e.target.value
        if(data.detalle.length >= 20){
            this.nextElementSibling.classList.replace('show', 'hide')
        }
        else{
            this.nextElementSibling.classList.replace('hide', 'show')
        }
    })
} 
