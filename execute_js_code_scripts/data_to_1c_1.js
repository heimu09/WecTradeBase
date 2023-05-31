if(result["Город"] === "Караганда 1"){
    city = "Караганда"
}else{if(result["Город"] === "Караганда 2"){
    city = "Караганда"
}
else{if(result["Город"] === "Алмата"){
    city = "Алматы"
}else{
    city = result["Город"]
}}}

for(let i = 0; i < result['Теги'].length; i++){
    if (result['Теги'][i] == "КАСПИМАГАЗИН"){
        if(result["Город"] === "Караганда 1"){
            result["Город"] = "Караганда"
        }
        if(result["Город"] === "Караганда 2"){
            result["Город"] = "Караганда"
        }
        client = `ЧЛ KASPI МАГАЗИН ${result["Город"]}`;        
        break;
    }
    else{
        client = `ЧЛ Розница ${result["Город"]}`;
    }
}

if(result['Теги'].length == 0){
    client = `ЧЛ Розница ${result["Город"]}`;
}

contract = `Договор ${city}`;
comment = "";

warehouse = {
    "Караганда": "Склады",
    "Темиртау": "Склады",
    "Нур-Султан": "Нур-Султан филиал",
    "Алматы": "Алматы филиал",
    "Шымкент": "Шымкент",
    "Усть-Каменогорск": "Усть-Каменогорск",
}

if (result['Дата доставки'] !== null){
    comment = comment + result['Дата доставки'];
}
if (result["Город"] !== null){
    comment = comment + ', ' + result["Город"];
}
if (result["Адрес доставки"] !== null){
    comment = comment + ', ' + result["Адрес доставки"];
}
if (result["Телефон"] !== null){
    comment = comment + ', ' + result["Телефон"];
}
if (result["Примечание по доставке"] !== null){
    comment = comment + ', ' +result["Примечание по доставке"];
}
if (comment != ""){
    comment = comment + '.';
}