export default function testReducer(state = "", action){
    switch(action.type){
        case 'CREATE_STRING':
            return state.concat(action.string);
        case 'UPDATE_STRING':
            return state.concat(action.string);
        default:
            return "Hello World";
    }
}