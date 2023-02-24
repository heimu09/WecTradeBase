function genElement() {
    let charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%^&()"
    let randomString = ""
    for (var i = 0; i < 15; i++) {
        randomPoz = Math.floor(Math.random() * charSet.length)
        randomString += charSet.substring(randomPoz, randomPoz + 1)
    }
    return randomString
}
chek_password = genElement()