const registerButton = document.querySelector('#register-button');
const inputsArray = document.querySelectorAll('.input-block input, textarea, select');
const popUp = document.querySelector('.pop-up');
const popUpContent = document.querySelector('.pop-up, p');
const table = document.getElementById('works-table');



function getInputRed(input){
    return input.style.backgroundColor = "rgb(236, 167, 167)";
}

function showPopUp(content, color = "red"){
    popUpContent.style.color = color
    popUp.classList.add('active')
    popUpContent.innerHTML = content
}

registerButton.addEventListener('click', (e)=>{

    const [name, author, year, period, kind, detailment] = 
    [inputsArray[0].value, inputsArray[1].value, inputsArray[2].value, inputsArray[3].value,
    inputsArray[4].value, inputsArray[5].value ];


    inputsArray.forEach(inputArray=> inputArray.style.backgroundColor = "white");

    if( name.length < 6){
        getInputRed(inputsArray[0]);
        return showPopUp('O nome da obra deve ter no mínimo 6 caractéres');      
    }
    
    else if(author.length < 10){
        getInputRed(inputsArray[1]);
        return showPopUp('O nome do autor deve ter no mínimo 10 letras');
    }

    else if( year > new Date().getFullYear() || year =="" 
    || year < 0 || isNaN(year) ){
        getInputRed(inputsArray[2]);
        return showPopUp('Ano inválido...');
    }

    else if(period == ""){
        getInputRed(inputsArray[3]);
        return showPopUp('Selecione um período');
    }

    else if(kind == ""){
        getInputRed(inputsArray[4]);
        return showPopUp('Informe o tipo da Obra');
    }
    showPopUp("Obra registrada ✔️", "green");

    let row = table.insertRow();
    row.insertCell().innerHTML = name;
    row.insertCell().innerHTML = author;
    row.insertCell().innerHTML = year;
    row.insertCell().innerHTML = period;
    row.insertCell().innerHTML = kind;
    
    row.addEventListener('click', ()=>{
        if(detailment!==" ") showPopUp(("Detalhamento: "+ detailment), ' rgb(59, 33, 33)')
        
    });
    
    button = row.insertCell()
    button.innerHTML = `<button">Apagar</button>`
            
    for(var i = 1; i < table.rows.length; i++)
    {
        table.rows[i].cells[5].onclick = function()
        {
            if(confirm("Você realmente quer deletar essa obra??")) table.deleteRow(this.parentElement.rowIndex);        
        };               
    }
});

popUp.addEventListener('animationend', ()=>{
    popUp.classList.remove('active');
});


