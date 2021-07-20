const customername = document.querySelector('h2.pageDescription').innerText;
const table = document.querySelectorAll('table.detailList');
const orgid = table[0].querySelectorAll('td')[7].innerText;
const fsmlink = table[0].querySelectorAll('td')[17].querySelectorAll('a')[1];
const fsmname = table[0].querySelectorAll('td')[17].querySelectorAll('a')[1].innerText;
let email;
const mouseoverEvent = new Event('mouseover');
function get_email() {
    let fsmtable = document.querySelector('div.userProfileHoverContent');
    let email = fsmtable.querySelectorAll('a')[0].innerText;
    return email
}
function copy(text) {
  let node = document.createElement('textarea');
  let selection = document.getSelection();
  node.textContent = text;
  document.body.appendChild(node);
  selection.removeAllRanges();
  node.select();
  document.execCommand('copy');
  selection.removeAllRanges();
  document.body.removeChild(node);
}

fsmlink.dispatchEvent(mouseoverEvent);
setTimeout(function() {
    let email = get_email();
}, 1500);

alert(`Hey ${fsmname},\n\nI hope you've been doing well. I wanted to reach out about ${customername} ${orgid}. Do you happen to have an established relationship with this customer? I haven't been able to get in touch with them, despite multiple attempts.`);

let message = `Hey ${fsmname},\n\nI hope you've been doing well. I wanted to reach out about ${customername} ${orgid}. Do you happen to have an established relationship with this customer? I haven't been able to get in touch with them, despite multiple attempts.`;

copy(message);