let array = []
response.result.map((x) => {
	if (x.PROPERTY_800 && x.PROPERTY_800[Object.keys(x.PROPERTY_800)[0]]) {
		array.push({
            login: x.PROPERTY_800[Object.keys(x.PROPERTY_800)[0]], 
            name: x.PROPERTY_806[Object.keys(x.PROPERTY_806)[0]],
        })
	}
})

result = array