var input3 = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/11/1989", "Membaca"];
var month = input3[3].split("/")

 function dataHandling2(input3){
    
    input3.splice(1,2)
    input3.splice ( 1,0, "Roman Alamsyah Elsharawy")
    input3.splice(2,0, "Provinsi Bandar Lampung")
    input3.splice ( 6, 0, "Pria")
    input3.splice ( 7, 0,"SMA Internasional Metro")
    console.log(input3);
    var bulan = month[1]
    switch(bulan) {
        case "01" : bulan ='Januari';break;
        case "02" : bulan ='Februari';break;
        case "03" : bulan ='Maret';break;
        case "04" : bulan ='April';break;
        case "05" : bulan ='Mei';break;
        case "06" : bulan ='Juni';break;
        case "07" : bulan ='Juli'; break;
        case "08" : bulan ='Agustus';break;
        case "09" : bulan ='September';break;
        case "10": bulan ='Oktober';break;
        case "11": bulan ='November';break;
        case "12": bulan ='Desember';break;
      }
      
    console.log(bulan)
    month.sort(function(a , b ){ return  b - a});
    console.log(month);
    console.log(month.join("-")); 
    var name = input3[1]
     var name = name.slice(0, 15)
     console.log(name)



 }


    console.log(dataHandling2(input3))
