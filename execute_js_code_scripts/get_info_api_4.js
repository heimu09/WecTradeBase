let contact_info = {
    'id': data[len-1]['id'],
    'Телефон': null,
    'Адрес доставки': null,
    'Город': null,
    'Примечание': null,
    'Примечание по доставке': null,
    'Компания': null,
    'Теги': [],
    'Дата доставки': null,
    'Категория лида': null,
    'Номер заказа в 1С': null,
    'Товары': null,
    'Дата реализации': null
    };

contact = JSON.parse(contact);

for (let i = 0; i < data[len-1]['_embedded']['tags'].length; i++){
    contact_info['Теги'].push(data[len-1]['_embedded']['tags'][i]['name']);
}

for (let i = 0; i < contact['custom_fields_values'].length; i++){
    if(contact['custom_fields_values'][i]['field_name'] === "Телефон"){
        contact_info['Телефон'] = contact['custom_fields_values'][i]['values'][0]['value'];
    }else{
        if(contact['custom_fields_values'][i]['field_name'] === "Адрес доставки"){
            contact_info['Адрес доставки'] = contact['custom_fields_values'][i]['values'][0]['value'];
        }else{
            if(contact['custom_fields_values'][i]['field_name'] === "Город"){
                if(contact['custom_fields_values'][i]['values'][0]['value'] === "Астана"){
                    contact_info['Город'] = "Нур-Султан";
                }else{
                    if(contact['custom_fields_values'][i]['values'][0]['value'] === "Алматы"){
                        contact_info['Город'] = "Алмата"
                    }
                    else{
                        if(contact['custom_fields_values'][i]['values'][0]['value'] === "Караганда"){
                            for(let i = 0; i < contact_info['Теги'].length; i++){
                                if (contact_info['Теги'][i] == "караганда2смена"){
                                    contact_info['Город'] = "Караганда 2";
                                    break;
                                }
                                else{
                                    contact_info['Город'] = "Караганда 1";
                                    break;
                                }
                            }
                            if(contact_info['Теги'].length == 0){
                                contact_info['Город'] = "Караганда 1";
                            }
                        }
                        else{
                            contact_info['Город'] = contact['custom_fields_values'][i]['values'][0]['value'];
                        }
                    }
                }
            }else{
                if(contact['custom_fields_values'][i]['field_name'] === "Примечание"){
                    contact_info['Примечание'] = contact['custom_fields_values'][i]['values'][0]['value'];
                }
            }
        }
    }
}

for (let i = 0; i < data[len-1]['custom_fields_values'].length; i++){
    if(data[len-1]['custom_fields_values'][i]['field_name'] === "Дата доставки"){
            let unix_timestamp = data[len-1]['custom_fields_values'][i]['values'][0]['value'];
            let date = new Date(unix_timestamp * 1000);
            let today = new Date()

            if (date > today){
                contact_info['Дата реализации'] = today.toLocaleDateString();
            }else{
                contact_info['Дата реализации'] = date.toLocaleDateString();
            }

            contact_info['Дата доставки'] = date.toLocaleDateString();
        }else{
            if(data[len-1]['custom_fields_values'][i]['field_name'] === "Категория лида"){
                contact_info['Категория лида'] = data[len-1]['custom_fields_values'][i]['values'][0]['value'];
            }else{
                if (data[len-1]['custom_fields_values'][i]['field_name'] === "Номер заказа в 1c"){
                    contact_info['Номер заказа в 1С'] = data[len-1]['custom_fields_values'][i]['values'][0]['value'];
                }else{
                    if(data[len-1]['custom_fields_values'][i]['field_name'] === "Примечание по доставке"){
                        contact_info['Примечание по доставке'] = data[len-1]['custom_fields_values'][i]['values'][0]['value'];
                    }
                }
            }
        }
}

if (companies !== false){
    companies = JSON.parse(companies)
    contact_info["Компания"] = companies["name"]
}

if(products.length == 0){}
else{
    contact_info["Товары"] = products

    result.push(contact_info)}
