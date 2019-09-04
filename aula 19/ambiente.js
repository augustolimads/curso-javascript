var num = [05,06,03,07,08,01]
num[3] = 10
num.push(02)
num.sort()
for (var c= 0; c < num.length; c++){
    console.log(num[c])
}
//console.log(`${num} e ${num.length}`)

for(var pos in num){
    console.log(pos, num[pos])
}
 