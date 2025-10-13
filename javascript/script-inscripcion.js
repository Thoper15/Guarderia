function validarForm() {
    let numeroTutor = document.getElementById('celular').value;
    let numeroEmergencia = document.getElementById('celuEmergencia').value;
    let genero = document.querySelector('input[name="genero"]:checked');

    
    if (numeroTutor.length != 8) {
        alert('Verifique el numero del Tutor');
        document.getElementById('celular').innerHTML = "";
    }
    if (numeroEmergencia != 8) {
        alert('Verifique el numero de Emergencia');
    }


}