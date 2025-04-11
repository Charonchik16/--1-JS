let a = 6; 
let b = 2; 
let sign = "/";
let result;

switch (sign){
    case "*":
        result = a*b;
    break;

    case "+": 
        result = a+b;  
    break; 

    case "-":
        result= a-b; 
    break;

    case "/":
        if ( b == 0){
            result = "На ноль делить нельзя";
        } else {
            result = a/b; 
        }
    break;

    default:
        result = "Недопустимый знак!" 
}

console.log(result); 