'use strict';
const tbody = document.getElementById('users');
const list = document.createDocumentFragment();
const api = 'https://jsonplaceholder.typicode.com/users?id=';
const post_id = document.getElementById('post_id');
let prev_id = 0;

function searching(){

if(post_id.value != '' && Number(post_id.value) > 0 && prev_id != Number(post_id.value)){
  
  while(tbody.rows.length > 0){
    tbody.deleteRow(0);
  }

  prev_id = Number(document.getElementById('post_id').value);
  let id = Number(document.getElementById('post_id').value);
  const url = api+id;
  //console.log('New id:', Number(post_id.value));
  //console.log('Prev id:', prev_id);
  fetch(url)
  .then((response) => { return response.json(); })
  .then((json) => {
    json.map(function(i){
      let tr = document.createElement('tr');
      let id = document.createElement('td');
      let name = document.createElement('td');
      let email = document.createElement('td');

      id.innerHTML = `${i.id}`;
      name.innerHTML = `${i.name}`;
      email.innerHTML = `${i.email}`;

      tr.appendChild(id);
      tr.appendChild(name);
      tr.appendChild(email);
      list.appendChild(tr);
      tbody.appendChild(list);
    });
  })
  .catch(function(error){
    console.log('Error:', error);
  });

} else {
  while(tbody.rows.length > 0){
    tbody.deleteRow(0);
  }
  prev_id = 0;
}
}