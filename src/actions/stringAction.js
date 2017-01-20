export function createString(string){
    return {type: 'CREATE_STRING', string};
}

export function updateString(){
    return {type: 'UPDATE_STRING', string: 'YOHOHO'};
}

