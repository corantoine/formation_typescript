const increment = (i:number) => ++i
let count = increment(5)


const narrowing = (value : string | number) => {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
        
    }
}