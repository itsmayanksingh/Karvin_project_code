// const form = document.getElementById('form-2');
// const result = document.getElementById('result');

// form.addEventListener('submit', function(e) {
//     const formData = new FormData(form);
//     e.preventDefault();

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     result.innerHTML = "Please wait..."

//     fetch('https://api.web3forms.com/submit', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             body: json
//         })
//         .then(async(response) => {
//             let json = await response.json();
//             if (response.status == 200) {
//                 result.innerHTML = json.message;
//             } else {
//                 console.log(response);
//                 result.innerHTML = json.message;
//             }
//         })
//         .catch(error => {
//             console.log(error);
//             result.innerHTML = "Something went wrong!";
//         })
//         .then(function() {
//             form.reset();
//             setTimeout(() => {
//                 result.style.display = "none";
//             }, 3000);
//         });
// });

function sendEmail() {
    Email.send({
        HOST: "https://api.web3forms.com/submit",
        Username: "user5@gmail.com",
        Password: "password",
        To: "sales@karvinpower.com",
        From: document.getElementById("email").value,
        Subject: "New contact enquiry",
        Body: "firstName:" + document.getElementById("fname").value +
            "<br> lastName:" + document.getElementById("lname").value +
            "<br> Email:" + document.getElementById("email").value +
            "<br> Phone no:" + document.getElementById("mobile").value +
            "<br> Message:" + document.getElementById("message").value
    }).then(
        message => alert("message sent successfully")
    );
}