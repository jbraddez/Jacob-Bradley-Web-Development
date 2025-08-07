const alertEl = document.getElementById("alert");
const success = document.getElementById("success");
const submit_btn = document.getElementById("submit-btn");

function sendEmail() {
const user_name = document.getElementById('name').value;
const user_email = document.getElementById('email').value;
const user_message = document.getElementById('message').value;


const lastSentTime = localStorage.getItem('lastSentTime');
const cooldownPeriod = 2 * 60 * 1000; 
const currentTime = new Date().getTime();

if (lastSentTime && currentTime - lastSentTime < cooldownPeriod) {
           alertEl.style.display = "block";
           alertEl.style.opacity = "1";
           alertEl.textContent = `Sorry, you can't send a message for ${cooldownPeriod - (currentTime - lastSentTime)} seconds`;
    return;
}


    try {
        emailjs.send("service_8tu2cni", "template_4mpu6ab", {
            name: user_name,
            email: user_email,
            message: user_message,
        })
        .then(()=>{
           success.style.display = "block";
           success.style.opacity = "1";
           localStorage.setItem('lastSentTime', currentTime);
        })
        .catch(error => {
            console.error("Failed to send email:", error);
           alertEl.style.display = "block";
           alertEl.style.opacity = "1";
           alertEl.textContent = "There was an error sending your message, Please try again later.";
        });
    } catch (error) {
        console.error("Error sending email:", error);
           alertEl.style.display = "block";
           alertEl.style.opacity = "1";
           alertEl.textContent = "There was an error sending your message, Please try again later.";
    }
submit_btn.style.display = 'none';
}
