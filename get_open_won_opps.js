let table = document.querySelector('table.list');
let trs = table.querySelectorAll('tr');
let today = Date.parse(new Date());

for (let i=1; i<trs.length; i++) {
    if (trs[i].querySelectorAll('td')[1].innerText == "Inactive/Duplicate" || trs[i].querySelectorAll('td')[1].innerText == "Closed - Lost") {
        trs[i].remove()
    }
    if (Date.parse(trs[i].querySelectorAll('td')[5].innerText) > today) {
        trs[i].style.backgroundColor = "yellow";
    }
    if (Date.parse(trs[i].querySelectorAll('td')[5].innerText) - today < 23673600000 && Date.parse(trs[i].querySelectorAll('td')[5].innerText) > today) {
        trs[i].style.backgroundColor = "red";
    }    
}