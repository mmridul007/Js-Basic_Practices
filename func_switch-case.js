function traffic(signal){
    switch(signal){
        case 'red':
            console.log("It's Red It's Danger");
            break;
        case 'yellow':
            console.log("It's Yellow You Should Stop");
            break;
        case 'green':
            console.log("It's Green You Should Cross the Road");
            break;
    }

}

traffic('red');