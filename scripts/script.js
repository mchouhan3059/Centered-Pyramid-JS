 // for (var j = 1; j >= 5; j--) {
    //     for (var i = j; i <= 5; i--) {
    //         // document.write("*")
    //         console.log("*")
    //     }
    //    console.log("<br>")
    // }

    // for (i=1; i<=5; i++){
    //     for(j=1; j<=i;j++){
    //         document.write(i)
    //     }
    //     document.write("<br>")
    // }

    // for (i=1; i<=10; i+=2){
    //     for(j=1; j<=i;j++){
    //         document.write(i)
    //     }
    //     document.write("<br>")
    // }

    // for (var i = 5; i >= 1; i--) {
    //     for (var j = i; j >= 1; j--) {
    //         document.write(i);
    //     }
    //     document.write("<br>")
    // }

    // 1
    // 2  3
    // 4  5  6
    // 7  8  9 10
    // 11 12 13 14 15

    // var z =1;
    // for (var i = 1; i <= 5; i++) {
    //     for(var j = 1; j <= i; j++){
    //         document.write(z)
    //         z++;
    //     }
    //     document.write("<br>")
    // }

    //     *
    //    **
    //   ***
    //  ****
    // *****

    // for (var i = 1; i <= 5; i++) {
    //     for (var j = i; j < 5; j++) {
    //         document.write('&nbsp;&nbsp;')
    //     }
    //     for (var z = 1; z <= i; z++) {
    //         document.write(' * ');
    //     }
    //     document.write('<br>')
    // }
    // for(var a=1;a<=5;a++){
    //     document.write('&nbsp;&nbsp;&nbsp;')
    // }


    // () Angular Brackets
    
    // for (var i = 1; i <= 5; i++) {
    //     // if(i==5){
    //     //     document.write('******')
    //     // }
    //     for (var j = i; j < 5; j++) {
    //         document.write('&nbsp;&nbsp;&nbsp;&nbsp;')
    //     }
    //     for (var z = 1; z <= i; z++) {
    //         document.write('&nbsp;',' * ','&nbsp;&nbsp;&nbsp;');
    //     }
    //     document.write('<br>')
    // }
    // for (var i = 2; i <= 5; i++) {
    //     for (var j = 1; j <= i-1; j++) {
    //         document.write('&nbsp;&nbsp&nbsp;&nbsp;')
    //     }
    //     for (var z = 5; z >= i; z--) {
    //         document.write('&nbsp;',' * ','&nbsp;&nbsp;&nbsp;');
    //     }
    //     document.write('<br>')
    // }


    // palindrome pyramid


    for(var i=1; i<=5; i++){
        for(var s=4; s>=i; s--){
            document.write('&nbsp;&nbsp;')
        }
        for(var t=1; t<=i; t++){
            document.write(t);
        }
        for(var z=i-1; z>=1; z--){
            document.write(z)
        }
        document.write('<br>')
    }