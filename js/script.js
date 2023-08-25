window.onload = function(){

    //Ao carregar a tela, adiciona o atributo "checked" ao elemento ".moeda"

    document.querySelector('.moeda').setAttribute('checked', 'checked');

    loadOptions();

}

function loadOptions(){

    //Carrega as opções do checkbox

    //Busca se algum checkbox possui o atributo "checked"
    document.querySelectorAll('.input').forEach((item) => {

        if(item.hasAttribute('checked')){



        }

    })

}