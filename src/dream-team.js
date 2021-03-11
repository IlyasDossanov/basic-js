const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	try{
	  let shortArr = [];
	  let teamName ='';
	  for(let i = 0; i<members.length; i++){
	    if(typeof members[i] == "string"){
	    	for(let k = 0; k<members[i].length; k++){
	    		if (members[i].charAt(k) != ' ') {
	    			shortArr.push(members[i].charAt(k).toUpperCase());
	    			break;
	    		}
	    	}
	    }
	  }
    shortArr.sort()
	  for(j = 0; j<shortArr.length; j++){
	  	teamName += shortArr[j];
	  }
	  return(teamName);
	}
	catch(TypeError){
	return(false);
}
};
