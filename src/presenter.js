class Presenter {

    displayResult(result, formatter){
        result.forEach((result) =>{
            console.log(formatter.formatResult(result));
            console.log();
        })
    }  
}
    
module.exports.Presenter = Presenter;
