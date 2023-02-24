

let result = {
	IBLOCK_TYPE_ID: "lists",
	IBLOCK_ID: 118,
    ELEMENT_CODE: genElement(),
    FIELDS: {
        NAME: genElement(),
        PROPERTY_800: user_input,
        PROPERTY_802: date_to_server,
        PROPERTY_804: work_deadline_to_server,
        PROPERTY_806: robot_name
    }
}

function genElement() {
    let charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%^&()"
    let randomString = ""
    for (var i = 0; i < 15; i++) {
        randomPoz = Math.floor(Math.random() * charSet.length)
        randomString += charSet.substring(randomPoz, randomPoz + 1)
    }
    return randomString
}

post = result