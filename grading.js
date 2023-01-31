let marks=[82,75,62,78,33,28];
for (let i=0; i<marks.length; i++){
    if(marks[i]<=100 && marks[i]>=80){
        console.log('A+');
    }
    else if(marks[i]<80 && marks[i]>=70){
        console.log('A');
    }
    else if(marks[i]<70 && marks[i]>=60){
        console.log('A-');
    }
    else if(marks[i]<60 && marks[i]>=50){
        console.log('B');
    }
    else if(marks[i]<50 && marks[i]>=33){
        console.log('B');
    }
    else{
        console.log('Fail');
    }
}