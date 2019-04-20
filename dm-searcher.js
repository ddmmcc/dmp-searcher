export class DmSearcher {
    constructor(threshold = 25){
        this.threshold = threshold;
    }


    splitWords (arWords) {
        return arWords.map( (item) => {
            if ( !(item.length > 3) ){
                return item;
            }
        });
    }

    /** 
     * 
     * @param {*} str input text
     * @param {*} txt string where to be finded our text
     * @returns {Object} returns a matching results info in object. Sample object: {find: true/false, rating: 0/100, value: str}
     */
    find(str, txt ){
        var status = {find : false , rating : 0 };
        if ( str === txt ){ 
            return {find : true , rating : 100, value: txt } ;
        }else{
            var i = 0;
            str.split("").forEach(function (item, index) {
    
                var txtLength = txt.length;
                if ( index > txtLength ) { return; }
                for ( i ; i < txtLength ; i++ ){
                    var txtItem = txt[i];
                    if ( item === txtItem ){
                        status.rating += 100 / txtLength;
                        if (status.rating >= this.threshold)  {status.find = true; status.value = txt}
                        i++;
                        break;
                    }
                }
            }.bind(this));
        }
        return status;
    }    
}

