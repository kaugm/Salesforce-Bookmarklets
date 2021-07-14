let contactsList = [];
let table = document.querySelectorAll('table.list')[1];
let trs = table.querySelectorAll('tr');
// GET ALL CONTACTS
function removeDuplicates(value, index, self) {
    return self.indexOf(value) === index;
}

for (let i=1; i<trs.length; i++) {
    if (trs[i].querySelectorAll('td')[1].innerText == "Current") {
        contactsList.push(trs[i].querySelectorAll('td')[4].innerText + '; ')
    }
}
contactsList = contactsList.filter(removeDuplicates);
// CLEANUP AND OUTPUT
const uniqueContacts = contactsList.join('');
console.log(uniqueContacts);
copy(uniqueContacts);