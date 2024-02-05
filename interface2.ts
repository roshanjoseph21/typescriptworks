interface car{
    start()
    accelerate()
    stop()
    shiftgear()
}

class baleno implements car{
    start(){
        console.log("baleno strt");
        
    }

    stop(){
        console.log("baleno stop");
        
    }
    accelerate() {
        console.log("baleno accelerate");

        
    }

    shiftgear() {
        console.log("shift gear");
        
    }
}



class swift implements car{
    accelerate(){
        console.log("swift accelerate");
        
    }

    stop(){
        console.log("swift stop");
        
    }
    start() {
        console.log("swift start");
        
    }
    shiftgear() {
        console.log("shift gera");
        
    }
}