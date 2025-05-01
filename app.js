let data = prompt("Enter the date YYYY.MM.DD");
let parts = data.split(".");
let year = parts[0];
let month = parts[1];
let day = parts[2];
let month_name = "";
let last_number = year[year.length - 1];
let article = "";
let last_day = "";

switch(month) {
    case "01": month_name = "Yanvar"; last_day = "31"; break;
    case "02": month_name = "Fevral"; last_day = "28"; break;
    case "03": month_name = "Mart"; last_day = "31"; break;
    case "04": month_name = "Aprel"; last_day = "30"; break;
    case "05": month_name = "May"; last_day = "31"; break;
    case "06": month_name = "İyun"; last_day = "30"; break;
    case "07": month_name = "İyul"; last_day = "31"; break;
    case "08": month_name = "Avqust"; last_day = "31"; break;
    case "09": month_name = "Sentyabr"; last_day = "30"; break;
    case "10": month_name = "Oktyabr"; last_day = "31"; break;
    case "11": month_name = "Noyabr"; last_day = "30"; break;
    case "12": month_name = "Dekabr"; last_day = "31"; break;
    default: month_name = "Naməlum ay";
}

 switch(last_number){
    case "1":
    case "5":
    case "7":
    case "8":
    article = "ci";
    break;
    case "3":
    case "4":
    article = "cü";
    break;
    case "6":
    case "0":
    article = "cı";
    case "9":
    article = "cu";
    break;
    default:
        article = "";
 }



   if(month < 1 || month > 12){
    console.log(`Yanlış ay daxil etdiniz!`)

 } else if(day < 1 || day > 31){
    console.log(`Yanlış tarix daxil etdiniz! ${month_name} ayı ${last_day} gündən çox olmamalıdır `);

 }else if (isNaN(day)) {
    console.log("Tam ədəd daxil edin!");

 }else{
    console.log(`${day} ${month_name} ${year} - ${article} il`);
 }


