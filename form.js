var formValue = ''
function formSubmit(){

    let fName = document.getElementById('fName').value;
    let lName = document.getElementById('lName').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;

    let fullName = fName + " " + lName;

    formValue = {
        "fullName": fullName,
        "phone": phone,
        "address": address
    }

    let result = document.getElementById('result');

    result.innerHTML = `
        Full Name: ${formValue.fullName}<br/>
        Phone: ${formValue.phone}<br/>
        address: ${formValue.address}

    `
   
}
