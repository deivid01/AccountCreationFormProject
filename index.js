
let button = document.getElementById('button')

button.addEventListener ('click', (event) => {
    event.preventDefault()

    let username = document.getElementById('username')
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let passwordcheck = document.getElementById('password-check')
    let error = document.getElementById('error')
    let errorpassword = document.getElementById('errorpassword')

        if (username.value === "" ) {
          let usererror = document.getElementById('username').style.borderColor = 'red'
            error.innerHTML = `The username is invalid`
            return usererror
        } else if (email.value === "") {
            let emailerror = document.getElementById('email').style.borderColor = 'red'
            error.innerHTML = `The e-mail is invalid`
            return emailerror
        } else if (password.value === "") {
            let passerror = document.getElementById('password').style.borderColor = 'red'
            error.innerHTML = `The password is invalid`
            return passerror
        } else if (passwordcheck.value === "") {
            let passcerror = document.getElementById('password-check').style.borderColor = 'red'
            error.innerHTML = `The password check is invalid`
            return passcerror
        }
                if ( password.value > "" && passwordcheck.value > "" && password.value !== passwordcheck.value) {
                    let passcerror = document.getElementById('password-check').style.borderColor = 'red'
                    errorpassword.innerHTML = `The password and password check is diferent`
                    return passcerror
                }
                 if (password.value == passwordcheck.value) {
                    let passcerror = document.getElementById('password-check').style.borderColor = 'green'
                    errorpassword.innerHTML = ``
                    return passcerror
                }
                    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
                        let emailerror = document.getElementById('email').style.borderColor = 'red'
                        error.innerHTML = `The e-mail is invalid`
                        return emailerror
                    } else {
                        error.innerHTML = ``
                    }
                        
})
    