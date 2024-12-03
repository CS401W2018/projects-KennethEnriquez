document.getElementById('MTB').addEventListener('submit' , function (event){
    event.preventDefault();

    const Mtb = document.getElementsByName('class');
    var selectbike = null;
    for (var i = 0; i < Mtb.length; i++){
        if(Mtb[i].checked){
            selectbike = Mtb[i].value;
            break
        }
    }

    const Size = document.getElementsByName('class1');
    var selectsize = null;
    for (var i = 0; i < Size.length; i++){
        if(Size[i].checked){
            selectsize = Size[i].value;
            break
        }
    }

    const first = document.getElementById('fname').value;
    const last = document.getElementById('lname').value;
    const email = document.getElementById('mail').value;
    const phone = document.getElementById('Phone').value;
    const address = document.getElementById('add1').value;
    const address2 = document.getElementById('add2').value;
    const City = document.getElementById('twn').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;


    const payment = document.getElementsByName('class2');
    var selectpay = null;
    for (var i = 0; i < payment.length; i++){
        if(Size[i].checked){
            selectpay = Size[i].value;
            break
        }
    }

    const cnum = document.getElementById('cnum').value;
    const cvv = document.getElementById('secur').value;
    const expire = document.getElementById('date').value;






    

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
    
    if (sent){
        const formdata = {
            firstname: first,
            lastname: last,
            sex: selectgen,
            security: password,
            gmail: email,
            number: phone,
            location: address,
            location2: address2,
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