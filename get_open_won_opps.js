let table = document.querySelector('table.list');
let trs = table.querySelectorAll('tr');

for (let i=1; i<trs.length; i++) {
    if (trs[i].querySelectorAll('td')[1].innerText == "Inactive/Duplicate" || trs[i].querySelectorAll('td')[1].innerText == "Closed - Lost") {
        trs[i].remove()
    }
}