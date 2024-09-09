$(document).ready(function() {
    $('#calcForm').submit(function(event) {
        event.preventDefault(); // Evita que la página se recargue

        // Obtener los valores de los inputs
        var num1 = parseFloat($('#num1').val());
        var num2 = parseFloat($('#num2').val());
        var operation = $('#operation').val();
        var result;

        // Realizar la operación
        switch(operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                result = num2 !== 0 ? num1 / num2 : 'No se puede dividir entre 0';
                break;
        }

        // Mostrar el resultado
        $('#result').text('Resultado es: ' + result);
    });
});