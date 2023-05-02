let tableau=[];
let table
API.queryPasswords();


API.onReplyPasswords((data)=>{
//TODO placer les data dans un tableau
tableau.push(data)
  table = Object.values(data)
afficherTable(table)

});
console.log(tableau)

////////////////////////////////////Tableau/////////////////////////////////////////

function afficherTable(table) {
let maTable = document.createElement('table');
maTable.classList.add('container')
let tableauhisto = document.querySelector('.tableauhisto')
tableauhisto.appendChild(maTable);
let thead = document.createElement('thead')
maTable.appendChild(thead)
let tbody = document.createElement('tbody')
 maTable.appendChild(tbody)
 thead.innerHTML = "<tr><td>ID</td><td>Mot de passe </td><td> Action </td></tr>"
for (const key in table) {
let tr = document.createElement('tr');
tr.appendChild(document.createElement('td'))
tr.appendChild(document.createElement('td'))
tr.appendChild(document.createElement('td'))
tr.childNodes[0].innerHTML = key
tr.childNodes[1].innerHTML = table[key]
tr.childNodes[2].innerHTML =  "  <button>Supprimer</button>"
tbody.appendChild(tr)
}
}











