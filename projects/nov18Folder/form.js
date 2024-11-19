document.getElementById('myForm').addEventListener('submit' , function (event){
    event.preventDefault();
    
    const first = document.getElementById('fname').value;
    const last = document.getElementById('lname').value;

    const gender = document.getElementsByName('class');
    var selectgen = null;
    for (var i = 0; i < gender.length; i++){
        if(gender[i].checked){
            selectgen = gender[i].value;
            break
        }
    }

    const password = document.getElementById('pass').value;
    const email = document.getElementById('mail').value;
    const phone = document.getElementById('Phone').value;
    const address = document.getElementById('add').value;
    const date = document.getElementById('date').value;
    const comm = document.getElementById('comment').value;
    const gear = document.getElementById('DT').value;
    const item = document.getElementById('DT').value;

    const acquire = document.getElementsByName('mode');
    var parcel = null;
    for (var i = 0; i < acquire.length; i++){
        if(acquire[i].checked){
            parcel = acquire[i].value;
            break
        }
    }

    const updates = document.getElementById('uptodate').checked;
    const TAC = document.getElementById('cheker').checked;

    var sent = true;
    if(first ==""){
        alert("Please input your the right details")
        sent = false; 
    }
    if(last ==""){
        alert("Please input your the right details")
        sent = false; 
    }
    if(password ==""){
        alert("Please put a password")
        sent = false; 
    }
    if(password.length < 10){
        alert("Password is too short")
        sent = false;
    }
    
    if (sent){
        const formdata = {
            firstname: first,
            lastname: last,
            sex: selectgen,
            security: password,
            gmail: email,
            number: phone,
            location: address,
            clock: date,
            words: comm,
            drive: gear,
            part: item,
            fed: parcel,
            ups: updates,
            terms:TAC,
        }

        console.log(formdata);

        const xhr = new XMLHttpRequest();
        xhr.open ("GET", "submit.json", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200){
                const response = JSON.parse(xhr.response);
                document .getElementById('message').innerHTML = response.message;
                document.getElementById('myForm') .innerHTML = "";
            }   else if (xhr.readyState === 4) { 
                alert ('Error submitting form.');
            }
        }
        xhr.send(JSON.stringify(formdata));

    }
    
});