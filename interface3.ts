//data abstraction is acheived
// multiple inheritence acheived

interface Oninit{

    ngOnInInit()
}

interface OnChanges{
    ngOnChange()
}

class MyComponent implements Oninit,OnChanges{
    ngOnInInit() {
        console.log("on init");
        
    }
    ngOnChange() {
        console.log("on change");
        
    }
}