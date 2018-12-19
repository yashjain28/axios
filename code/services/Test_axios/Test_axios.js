function Test_axios(req, resp){
    
    if(typeof axios === 'object'){
        if(Object.getOwnPropertyNames(axios).length === 0){
            log("False");
            resp.error("False");
        } else{
            log("True");
            resp.success("True");
        }

    } else if(typeof axios === 'function'){
        var tempPropObj = Object.getOwnPropertyNames(axios);
        if (axios.prototype && typeof axios.prototype.constructor  === 'function'){
            log("True");
            resp.success("True");
        } else {
            log("False");
            resp.error("False");
        }
    }

}
