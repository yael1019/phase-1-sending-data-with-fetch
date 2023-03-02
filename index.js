// Add your code here
const submitData = (userName, userEmail) => {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
        .then(resp => resp.json())
        .then(obj => { //console.log(obj.id)
            const body = document.getElementById('body');
            const p = document.createElement('p');
            body.append(p);
            p.textContent = obj.id;
        })
        .catch(obj => {
            const body = document.getElementById('body');
            const p = document.createElement('p');
            body.append(p);
            p.textContent = obj.message;
        })
}

