    let price = 5000; 
    let range = "week";

    let trans; 

    switch (range){
    case "month":
        trans = "Месяц";
    break; 

    case "day": 
        trans = "день";
    break;

    case "week":
        trans = "неделю";
    break;

    default: 
        trans = "неизвестно";
    }

    let result = price+" р"+" " + "в"+" "+trans;
    console.log(result);