function Contact() {
    async function sendData(firstName: string, lastName: string, email: string, phone: string, message: string) {
        const apiURL = import.meta.env.VITE_API_URL;

        await fetch(apiURL, {
            method: 'POST',
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                message: message
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    function letters(input: string) {
        const inputValidation = /^[A-Za-z\s]*$/;
            if((inputValidation.test(input))){
                return true;
    }
    else {
        return false;
    }
}

    function noString(input: string) {
        const inputValidation = '';
        if(inputValidation == input) {
            return true;
        }
        else {
            return false;
        }
    }

    function emailInput(input: string) {
        const inputValidation = /^$|(?=.*@)(?=.*\.)/;
        if(inputValidation.test(input)) {
            return true;
        }
        else {
            return false;
        }
    }

    function phoneInput(input: string) {
        const inputValidation = /^$|^(?=[0-9-]*$)(?=(?:[^-]*-){2}[^-]*$)/;
        if(inputValidation.test(input)) {
            return true;
        }
        else {
            return false;
        }
    }


    return <div className='contactContainer'>
           <h2>Contact</h2>
           <div className='contact'>
            <form className='contactForm'>
                <div className='nameInput'>
                <label id='nameLabel'>Name*</label>
                <div className='names'>
                <input type='text' id='first' placeholder='First Name'></input>
                <input type='text' id='last' placeholder='Last Name'></input>
                </div>
                </div>
                <div className='email'>
                <label id='emailLabel'>Email Address*</label>
                <input type='email' id='email' placeholder='Email'></input>
                </div>
                <div className='phone'>
                <label id='phoneLabel'>Phone Number</label>
                <input type='tel' id='phone' placeholder='Phone Number'></input>
                </div>
                <div className='message'>
                <label id='messageLabel'>Message*</label>
                <textarea rows = {5} id='message' placeholder='Message'></textarea>
                </div>
                <div className='submit'>
                <button id='submitButton' onClick={(e) => {
            e.preventDefault();
            const firstName = (document.getElementById('first') as HTMLInputElement)?.value || '';
            const lastName = (document.getElementById('last') as HTMLInputElement)?.value || '';
            const email = (document.getElementById('email') as HTMLInputElement)?.value || '';
            const phone = (document.getElementById('phone') as HTMLInputElement)?.value || '';
            const message = (document.getElementById('message') as HTMLInputElement)?.value || '';
            const lettersOnly = letters(firstName) && letters(lastName);
            const emptyString = noString(firstName) || noString(lastName) || noString(email) || noString(message);
            const emailValidate = emailInput(email);
            const phoneValidate = phoneInput(phone);
            const errors = [];
            if (!lettersOnly) {
                errors.push('Please only enter letters in the name fields.');
            }
            if (emptyString) {
                errors.push('Please do not leave required fields empty.');
            }
            if (!(emailValidate)) {
                errors.push('Please enter the email address correctly.');
            }
            if (!(phoneValidate)) {
                errors.push('Please enter the phone number correctly.');
            }
            if (errors.length > 0) {
                alert(errors.join('\n'));
                return;
            }
            sendData(firstName, lastName, email, phone, message);
        }}>Submit</button>
                </div>
            </form>
           </div>
           </div>

}
export default Contact