let result = []
amo_response = JSON.parse(data)
data = JSON.parse(data)['_embedded']['leads'];

for (let i = 0; i < data.length; i++){
    if(data[i]["status_id"] === 50548993){
        result.push(data[i]);
    }
}

data = result