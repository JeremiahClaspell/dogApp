function generateDogs (){
    $('form').submit(function(event){
        event.preventDefault(); 
        $('ul').empty(); 
        let count = $('input').val(); 
        fetch(`https://dog.ceo/api/breeds/image/random/${count}`)
        .then(response => response.json())
        .then(responceJson =>{
            for (let i=0; i<count; i++) {
                let imgSrc = responceJson.message[i]
                $('ul').prepend(`<li>
                <img src=${imgSrc} class="dogPic"></li>`
                ); 
                $('section').removeClass('hidden'); 
            }
        })

    })
}

function eventHandler (){
    generateDogs(); 
}

$(eventHandler)