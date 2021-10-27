const empty = "",
      uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lCase = "abcdefghijklmnopqrstuvwxyz",
      number = "0123456789",
      symbol = "!@#$%^&*=-_";

const pLength = document.querySelector('#p-length'),
      upperCase = document.querySelector('#p-uppercase')
      lowerCase = document.querySelector('#p-lowercase')
      pNumber = document.querySelector('#p-number')
      pSymbol = document.querySelector('#p-symbol')
      submit = document.querySelector('#submit')
      password = document.querySelector('#password');
      copy = document.querySelector('#copy');

submit.addEventListener('click', function() {
    let initialPassword = empty

    //add char to initial pass based on user choices(if option is checked)
    upperCase.checked ? (initialPassword += uCase) : ''
    lowerCase.checked ? (initialPassword += lCase) : ''
    pNumber.checked ? (initialPassword += number) : ''
    pSymbol.checked ? (initialPassword += symbol) : ''

    password.value = generatePassword(pLength.value, initialPassword)
})

function generatePassword(l, initialPassword) {
    let pass = ''
    for (let i=0; i < l; i++) {
        pass +=initialPassword.charAt(
            Math.floor(Math.random() * initialPassword.length)
        )
    }
    return pass
}

copy.addEventListener('click', function() {
    if (password.value == '') {
        alert('Please generate a password')
    } else {
        password.select()
        document.execCommand('copy')
        alert('Password has been copied to clipboard')
    }
})

