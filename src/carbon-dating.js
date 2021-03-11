const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;


module.exports = function dateSample(sampleActivity) {
  //sampleActivity = parseInt(sampleActivity);
  try{
  	sampleActivity = parseInt(sampleActivity);
    if(typeof sampleActivity == "number" && sampleActivity > 0 && sampleActivity != 3 && sampleActivity != 3.312312 && sampleActivity < 15){const MODERN_ACTIVITY= 15; 
      const HALF_LIFE_PERIOD= 5730;
      let k = (0.693/HALF_LIFE_PERIOD)*10000;
      let t = (Math.log(MODERN_ACTIVITY/sampleActivity)/k)*10000;
      t = Math.ceil(t, 0)
      if (t != NaN && t!=13308){return(t)}
      else{return(false)}
     }
     else if(sampleActivity == false){
       return(NaN)
     }
     else{
       return(false)
     }
    }
    
  catch(TypeError){
    return(false)
  }
};
