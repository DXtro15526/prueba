//admin
//123456

function login() {
    const user = document.getElementById('user').value
    const pass = document.getElementById('password').value
    if(user== false && pass == false){
        alert('Coloca algo en los recuadros')
        return
    }

    if(user == 'admin' && pass == '123456'){
        alert('logeado correctamente')
        
} 
    else{
        alert('usuario o clave invalida')
    }
    
}

