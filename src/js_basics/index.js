
export const isNumberEven = (i) => {
    if(i % 2 === 0){
        return true
    }else{
        return false
    }

};

export const getFileExtension = (str) => {
    if(str.includes('.')){
        return str.split('.').pop()
    }else{
        return false
    }
};

export const longestString = (arr) => {
    let res =''
    for(let str of arr){
        if(typeof(str)=='string'){
            if(str.length > res.length){
                res = str;
            }
        }
    }
    return res;
};

export const reverseString = (str) => {
    return str.split('').reverse().join('');
};

export const isPalindrome = (str) => {
    str = str.toLowerCase()
    if (reverseString(str) === str){
        return true;
    }
    return false;
};

export const nestedSum = (arr) => {
    let sum = 0
    for(let a of arr){
        if(typeof a ==='array'){
            sum += nestedSum(a);
        }else{
            sum += a.value
        }
    }
    return sum;
};
