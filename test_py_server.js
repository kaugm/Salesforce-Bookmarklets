

function sendData(address,payload) {
    fetch(address, {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }, 
        method: 'POST',
        body: JSON.stringify({
            'payload':payload
        })
    }).then((response) => {
        if (response.ok) {
            console.log('ORG IDs sent correctly')
        } else {
            throw new Error('Error sending ORG IDs')
        }
    });
}

let URL = '/asdf';
    sendData(URL,"test payload");