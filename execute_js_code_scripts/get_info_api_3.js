product_info = JSON.parse(product_info)

let product = {
    "Артикул": null,
    "Название": product_info["name"],
    "Количество": data[len-1]['_embedded']['catalog_elements'][products_len-1]["metadata"]["quantity"],
    "Цена": 0
}

for (let i = 0; i < product_info['custom_fields_values'].length; i++){
    if(product_info['custom_fields_values'][i]['field_name'] === "Артикул"){
        product['Артикул'] = product_info['custom_fields_values'][i]['values'][0]['value'];
    }else{
        if(product_info['custom_fields_values'][i]['field_id'] == data[len-1]['_embedded']['catalog_elements'][products_len-1]["metadata"]['price_id']){
            product['Цена'] = product_info['custom_fields_values'][i]['values'][0]['value'];
        }
    }
}

products.push(product)
