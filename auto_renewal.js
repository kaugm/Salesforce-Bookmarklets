// Alerts the user if the customer is enrolled in cloud auto-Renewal

let table = document.querySelectorAll('table.list')[20];
let trs = table.querySelectorAll('tr');
for (let i=1; i<trs.length; i++) {
    if (trs[i].querySelectorAll('th')[0].childNodes[0].innerText == "Cloud Auto-Renewal" && trs[i].querySelectorAll('td')[4].innerText == "Active") {
        alert("Enrolled in Cloud Auto-Renewal");
    }
}