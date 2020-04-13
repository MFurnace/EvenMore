//Write a function that concatenates two //lists. [a,b,c], [1,2,3] → [a,b,c,1,2,3]
// let Lakers1 = ["Kareem", "Magic", "Worthy"];
// let Lakers2 = ["Kobe", "Shaq"];
// console.log(merge(Lakers1, Lakers2));


function merge_array(lakers1, laker2) {
    var result_array = [];
    var arr = lakers1.concat(lakers2);
    var len = arr.length;
    var assoc = {};

    while(len--) {
        var item = arr[len];

        if(!assoc[item]) 
        { 
            result_array.unshift(item);
            assoc[item] = true;
        }
    }

    return result_array;
}


var lakers1 = ["Kareem", "Magic", "Worthy"];

var lakers2 = ["Kobe", "Shaq"];

console.log(merge_array(lakers1, lakers2));