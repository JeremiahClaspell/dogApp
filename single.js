function generateDogs (){
    $('form').submit(function(event){
        event.preventDefault();  
        $('ul').empty(); 
        let breed = $('select').val(); 
        fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => response.json())
        .then(responceJson =>{
            if(responceJson.status ==="error"){
                alert(responceJson.message); 
            } else {
            $('ul').append(`<li><img src="${responceJson.message}"
            ></li>`); 
            $('section').removeClass('hidden');  
            }
        })
        .catch(error => alert("something went wrong"));

    })
}

function eventHandler (){
    generateDogs(); 
}

$(eventHandler)