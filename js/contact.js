const alertEl = document.getElementById("alert");
const success = document.getElementById("success");
const submit_btn = document.getElementById("submit-btn");

const alertQuoteEl = document.getElementById("alert-quote");
const successQuote = document.getElementById("success-quote");
const submitQuoteBtn = document.getElementById("submit-btn-quote");

function sendEmail() {
  const user_name = document.getElementById('name').value;
  const user_email = document.getElementById('email').value;
  const user_message = document.getElementById('message').value;

  const lastSentTime = localStorage.getItem('lastSentTimeEmail');
  const cooldownPeriod = 2 * 60 * 1000;
  const currentTime = new Date().getTime();

  if (lastSentTime && currentTime - lastSentTime < cooldownPeriod) {
    alertEl.style.display = "block";
    alertEl.style.opacity = "1";
    alertEl.textContent = `Sorry, you can't send a message for ${Math.ceil((cooldownPeriod - (currentTime - lastSentTime)) / 1000)} seconds`;
    return;
  }

  try {
    emailjs.send("service_8tu2cni", "template_4mpu6ab", {
      name: user_name,
      email: user_email,
      message: user_message,
    })
    .then(() => {
      success.style.display = "block";
      success.style.opacity = "1";
      localStorage.setItem('lastSentTimeEmail', currentTime);
      submit_btn.style.display = 'none';
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
}

function sendQuote() {
  const user_nameQuote = document.getElementById('name-quote').value;
  const user_emailQuote = document.getElementById('email-quote').value;
  const user_businessQuote = document.getElementById('business-quote').value;
  const user_projectSizeQuote = document.getElementById('project-size-quote').value;
  const user_messageQuote = document.getElementById('message-quote').value;

  const lastSentTimeQuote = localStorage.getItem('lastSentTimeQuote');
  const cooldownPeriod = 2 * 60 * 1000;
  const currentTime = new Date().getTime();

  if (lastSentTimeQuote && currentTime - lastSentTimeQuote < cooldownPeriod) {
    alertQuoteEl.style.display = "block";
    alertQuoteEl.style.opacity = "1";
    alertQuoteEl.textContent = `Sorry, you can't send a quote request for ${Math.ceil((cooldownPeriod - (currentTime - lastSentTimeQuote)) / 1000)} seconds`;
    return;
  }

  try {
    emailjs.send("service_8tu2cni", "template_avwbky8", {
      name: user_nameQuote,
      email: user_emailQuote,
      business: user_businessQuote,
      projectSize: user_projectSizeQuote,
      message: user_messageQuote,
    })
    .then(() => {
      successQuote.style.display = "block";
      successQuote.style.opacity = "1";
      localStorage.setItem('lastSentTimeQuote', currentTime);
      submitQuoteBtn.style.display = 'none';
    })
    .catch(error => {
      console.error("Failed to send quote:", error);
      alertQuoteEl.style.display = "block";
      alertQuoteEl.style.opacity = "1";
      alertQuoteEl.textContent = "There was an error sending your quote request, Please try again later.";
    });
  } catch (error) {
    console.error("Error sending quote:", error);
    alertQuoteEl.style.display = "block";
    alertQuoteEl.style.opacity = "1";
    alertQuoteEl.textContent = "There was an error sending your quote request, Please try again later.";
  }
}
