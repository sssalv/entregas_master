// Descifra el siguiente secreto:
var secret = "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var plainClean = plain.split('');

var cipherClean = cipher.split('');

for (const letter in cipherClean) {
    
    Object.assign(plainClean,cipherClean)
}
console.log(plainClean)