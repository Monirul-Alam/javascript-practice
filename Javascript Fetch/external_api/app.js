document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;
  console.log(number);

  const xhr = new XMLHttpRequest;

  xhr.open('GET','https://api.chucknorris.io/jokes/search?query=${number }',true);

  xhr.onLoad =function() {
    if(this.status === 200){
      const respose = this.responseText;
      console.log(respose);
    }
  }


// Not working.............

  xhr.send()
  e.preventDefault();
}