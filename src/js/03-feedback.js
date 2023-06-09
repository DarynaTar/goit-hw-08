import throttle from "lodash.throttle"

const form = document.querySelector('.feedback-form')

form.addEventListener('input', throttle(handleInput, 500))

function handleInput(event){
    const feedbackForm = {
        email: form.elements.email.value,
        message: form.elements.message.value
    }

    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackForm))
}

function restoreFormState(){
    const savedFeedback = JSON.parse(localStorage.getItem('feedback-form-state'))

    if(savedFeedback) {
        form.elements.email.value = savedFeedback.email
        form.elements.message.value = savedFeedback.message
    }
}

form.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const {elements: {email, message}} = event.currentTarget

    if(email.value && message.value) {
        const feedback = {
            email: email.value,
            message: message.value
        }
        console.log(feedback);
        // console.table(feedback);
        localStorage.removeItem('feedback-form-state')
        email.value = '';
        message.value = '';
    } else {
        handleInput()
        alert("Fill in the fields")
    }
}

restoreFormState();
