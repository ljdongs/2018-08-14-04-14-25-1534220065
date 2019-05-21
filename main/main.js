module.exports = function main(num) {
    let strs = num.toString().split("")
    let str = ''
    if (strs.length > 0){
        for(let i = 0; i < strs.length;i++){
           str = str + choseNum(strs[i])
        }
    }
    return str;
};
function choseNum(num) {
   switch (num) {
   case "0":
          return ("._. \n" + 
                  "|.| \n" +
                  "|_| \n")
          break;
   case "1":
          return ("... \n" + 
                  "..| \n" +
                  "..| \n")
          break;
   case "2":
          return ("._. \n" + 
                  "._| \n" +
                  "|_. \n")
          break;
   case "3":
          return ("._. \n" + 
                  "._| \n" +
                  "._| \n")
          break;
   case "4":
          return ("... \n" + 
                  "|_| \n" +
                  "..| \n")
          break;
   case "5":
          return ("._. \n" + 
                  "|_. \n" +
                  "._| \n")
          break;
   case "6":
          return ("._. \n" + 
                  "|_. \n" +
                  "|_| \n")
          break;
   case "7":
          return ("._. \n" + 
                  "..| \n" +
                  "..| \n")
          break;
   case "8":
          return ("._. \n" + 
                  "|_| \n" +
                  "|_| \n")
          break;
   case "9":
          return ("._. \n" + 
                  "|_| \n" +
                  "..| \n")
          break;
   default:
       break;
   }
}
