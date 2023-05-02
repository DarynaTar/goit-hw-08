import throttle from "lodash.throttle"
const form = document.querySelector('.feedback-form')

form.addEventListener('input', throttle(handleInput, 500))

function handleInput(event){

    const feedbackForm = {
        email: form.elements.email.value,
        message: form.elements.message.value
    }

localStorage.setItem('feedback-form-state', JSON.stringify(feedbackForm))

const savedFeedback = JSON.parse(localStorage.getItem('feedbackForm'))
if(savedFeedback) {
email.value = savedFeedback.email
message.value = savedFeedback.message
}
}


form.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const {elements: {email, message}} = event.currentTarget
    if(email.value && message.value) {
        console.log(`Email: ${email.value}, message: ${message.value}`)  
    } else {
        alert("Fill in the fields")
    }

    localStorage.removeItem('feedback-form-state')
    // event.currentTarget.reset()
    email.value = '';
    message.value = '';
}





