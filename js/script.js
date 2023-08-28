window.onload = function(){

    //Ao carregar a tela, adiciona o atributo "checked" ao elemento ".moeda"
    document.querySelector('.moeda').setAttribute('checked', 'checked');

    // Atualiza os dados do Array 'moedas' com as informações da API
    fetch('https://open.er-api.com/v6/latest').then((data) => {

        return data.json();

    })

    .then((data) => {

        //  Cria um array com as informações provenientes da API
        let result = data.rates;

        for (let index = 0; index < moedas.length; index++) {
            
            switch (moedas[index].name) {
                case "USD":

                moedas[index].value = result.USD;

                    break;
            
                case "CAD":

                moedas[index].value = result.CAD;

                    break;
                case "EUR":

                moedas[index].value = result.EUR;
                    
                    break;

                case "AOA":

                moedas[index].value = result.AOA;
                        
                    break;
                
                case "BRL":
    
                moedas[index].value = result.BRL;
    
                    break;
                case "ARS":
    
                    moedas[index].value = result.ARS;
 
                    break;
                case "UYU":
    
                moedas[index].value = result.UYU;
                        
                    break;
            }

        }

    })

    .catch(() => {

        //  Caso um erro ocorra, chama a função errorMessage(), que limpa a tela e exibe uma mensagem;
        errorMessage();

    });

    loadOptions();
}

function loadOptions(){

    //Carrega todas as options do select com as informações do array "moedas" 

    document.querySelectorAll('.options').forEach((item) => {

        for (let index = 0; index < moedas.length; index++) {


        let option = document.createElement('option');

        option.setAttribute('data-nome', moedas[index].name);
        option.setAttribute('value', moedas[index].value);
        option.innerHTML = moedas[index].name;

        item.appendChild(option)

        }

    })

    console.log(moedas)
}

function errorMessage(){

    alert('Algo deu errado')

}


