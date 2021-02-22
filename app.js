document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){

  const number = document.getElementById('number').value;

  // const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);


  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);//JSON.parse will format the JSON file response into an object

      let output = '';

      if(response.type === 'success') {
        //we use repsonse.value.forEach rather than response.forEach beacse we want to loop through the value. THe object itself has a type AND a value. We just want the type
        response.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`
          //response has multiple attributes, id and jokes. We want to get the joke by setting .joke
        })

        // document.querySelector('.jokes').innerHTML = output;
    
        // console.log(response);

      } else {
        output += '<li>SOmething went wrong</li>'
      }

      document.querySelector('.jokes').innerHTML = output;
    
      console.log(response);
    }
  }

  xhr.send();

  e.preventDefault();
}