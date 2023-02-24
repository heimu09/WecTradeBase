let find = response.result.find(x => x.PROPERTY_800[Object.keys(x.PROPERTY_800)[0]] === all_data.Data[0].Variable)

if (find == undefined) return work_deadline = 0
let time = find.PROPERTY_804[Object.keys(find.PROPERTY_804)[0]]
let arr = time.split(".").toString().replace(/,/gi, "/").replace(/ /gi, "/").replace(/:/gi, "/").split("/")
let date = new Date(arr[2], arr[1], arr[0], arr[3], arr[4], arr[5])

let hours = new Date(date.setHours(date.getHours() + 3))
work_deadline = new Date(hours.setMonth(hours.getMonth() - 1))
array = arr