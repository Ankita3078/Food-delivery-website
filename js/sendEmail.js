//Send Form Details To Email
function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "ankitasaha3078999@gmail.com",
        Password : "3FB19D0AD8C772DD07E224244FAFE4888228",
        To: 'ankitasaha3078999@gmail.com',
        From: document.getElementById("email").value,
        Subject: "Query From Customer's",
        Body: "First Name: " + document.getElementById("firstName").value +
            "<br> Last Name: " + document.getElementById("lastName").value +
            "<br> Mobile Number: " + document.getElementById("number").value +
            "<br Email: >" + document.getElementById("email").value +
            "<br> Message: " + document.getElementById("message").value
    }).then(
        alert("Your Query Submitted Successfully"),
    )
    .catch(error)
        alert(error => alert(error))
}