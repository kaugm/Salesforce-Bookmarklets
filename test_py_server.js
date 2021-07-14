

function sendData(address,payload) {
    fetch(`http://localhost:5000${address}`, {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }, 
        mode: 'no-cors',
        method: 'POST',
        body: JSON.stringify({
            'payload':payload
        })
    }).then((response) => {
        console.log('Response from server')
        // Browser is blocked from reading response due to no-cors
    });
}

let URL = '/asdf';
data = "email1; email2; email3;"
console.log(data)
sendData(URL,data);



// PYTHON CODE BELOW FOR RECEIVING DATA
@app.route('/asdf', methods=['GET', 'POST'])
def asdf():
        if request.method == 'POST':
                data = request.get_json(force=True)
                ORGIDS = data['payload']
                print(ORGIDS)
        return 'blah'