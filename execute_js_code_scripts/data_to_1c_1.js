if(result[result_len-1]["Город"] === "Караганда 1"){
    city = "Караганда"
}else{if(result[result_len-1]["Город"] === "Караганда 2"){
    city = "Караганда"
}
else{if(result[result_len-1]["Город"] === "Алмата"){
    city = "Алматы"
}else{
    city = result[result_len-1]["Город"]
}}}

for(let i = 0; i < result[result_len-1]['Теги'].length; i++){
    if (result[result_len-1]['Теги'][i] == "КАСПИМАГАЗИН"){
        if(result[result_len-1]["Город"] === "Караганда 1"){
            result[result_len-1]["Город"] = "Караганда"
        }
        client = `ЧЛ KASPI МАГАЗИН ${result[result_len-1]["Город"]}`;        
        break;
    }
    else{
        client = `ЧЛ Розница ${result[result_len-1]["Город"]}`;
    }
}
contract = `Договор ${city}`;
comment = "";

warehouse = {
    "Караганда": "Склады",
    "Темиртау": "Склады",
    "Нур-Султан": "Нур-Султан филиал",
    "Алматы": "Алматы филиал",
    "Шымкент": "Шымкент"
}

if (result[result_len-1]['Дата доставки'] !== null){
    comment = comment + result[result_len-1]['Дата доставки'];
}
if (result[result_len-1]["Город"] !== null){
    comment = comment + ', ' + result[result_len-1]["Город"];
}
if (result[result_len-1]["Адрес доставки"] !== null){
    comment = comment + ', ' + result[result_len-1]["Адрес доставки"];
}
if (result[result_len-1]["Телефон"] !== null){
    comment = comment + ', ' + result[result_len-1]["Телефон"];
}
if (result[result_len-1]["Примечание по доставке"] !== null){
    comment = comment + ', ' +result[result_len-1]["Примечание по доставке"];
}
if (comment != ""){
    comment = comment + '.';
}