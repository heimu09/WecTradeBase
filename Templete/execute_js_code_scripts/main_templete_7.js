

let result = {
	IBLOCK_TYPE_ID: "lists",
	IBLOCK_ID: 114,
    ELEMENT_CODE: genElement(),
    FIELDS: {
        NAME: "Robot",
        PROPERTY_808: robot_name,
        PROPERTY_810: all_data.Data[0].Login,
        PROPERTY_812: date_to_server,
        PROPERTY_814: http_response.client_ip
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

logs_post = result