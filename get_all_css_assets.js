let table = document.querySelector('table.list');
let trs = table.querySelectorAll('tr');

for (let i=1; i<trs.length; i++) {
    if (trs[i].querySelectorAll('td')[2].innerText.length < 2) {
        trs[i].remove()
    }
}