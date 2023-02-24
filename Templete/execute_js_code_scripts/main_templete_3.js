let find = response.result.find(x => x.PROPERTY_800[Object.keys(x.PROPERTY_800)[0]] === all_data.Data[0].Variable)

let update_db = {
    IBLOCK_TYPE_ID: "lists",
	IBLOCK_ID: 118,
    ELEMENT_CODE: find.CODE,
    FIELDS: {
        NAME: find.NAME,
        PROPERTY_818: time_left == "" ? null : time_left,
        PROPERTY_800: find.PROPERTY_800,
        PROPERTY_802: find.PROPERTY_802,
        PROPERTY_804: find.PROPERTY_804,
        PROPERTY_806: find.PROPERTY_806
    }
}

let result = {
	IBLOCK_TYPE_ID: "lists",
	IBLOCK_ID: 114,
    ELEMENT_CODE: genElement(),
    FIELDS: {
        NAME: "Robot",
        PROPERTY_808: robot_name,
        PROPERTY_810: all_data.Data[0].Variable,
        PROPERTY_812: date_to_server,
        PROPERTY_814: http_date_response.client_ip,
        PROPERTY_820: time_left == "" ? null : time_left
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
update_post_db = update_db
