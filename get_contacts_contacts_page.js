// INIT VARIABLES & FUNCTIONS
let contactsLimit = 10;
let contactsList = [];
let table = document.querySelector('table.list');
let trs = table.querySelectorAll('tr');
function removeDuplicates(value, index, self) {
    return self.indexOf(value) === index;
}
// ITERATING THROUGH CONTACTS IN 3 PASSES
for (let i=1; i<trs.length; i++) {
    if (trs[i].querySelectorAll('td')[1].innerText == "Current" && trs[i].querySelectorAll('td')[6].innerText.length > 1) {
        contactsList.push(trs[i].querySelectorAll('td')[4].innerText + '; ')
    }
}
contactsList = contactsList.filter(removeDuplicates);
if (contactsList.length < contactsLimit) {
    for (let i=1; i<trs.length; i++) {
        if (trs[i].querySelectorAll('td')[1].innerText == "Current" && trs[i].querySelectorAll('td')[3].innerText.length > 1) {
            contactsList.push(trs[i].querySelectorAll('td')[4].innerText + '; ')
        }
    }
    contactsList = contactsList.filter(removeDuplicates);
}
if (contactsList.length < contactsLimit) {
    for (let i=1; i<contactsLimit; i++) {
        if (trs[i].querySelectorAll('td')[1].innerText == "Current") {
            contactsList.push(trs[i].querySelectorAll('td')[4].innerText + '; ')
        }
    }
    contactsList = contactsList.filter(removeDuplicates);
}
// CLEANUP AND OUTPUT
const uniqueContactsArr = contactsList.slice(0, contactsLimit);
uniqueContacts = uniqueContactsArr.join('');
alert(uniqueContacts);


