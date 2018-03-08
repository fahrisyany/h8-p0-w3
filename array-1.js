function balikString(name1){

    var space = ' ';
    
    for (var i = name1.length -1 ; i >= 0 ; i --){
       
        space += name1[i]

    }
    return space
}
console.log(balikString('hello world!'))
