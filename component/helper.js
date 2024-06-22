class Helper {
    constructor (time,list=[]){
        this.time = parseInt(400/time);
        this.list = list ;
    }
    mark1= async(index)=>{
        this.list[index].setAttribute("class" , "cell current1");

    }
    mark2= async(index)=>{
        this.list[index].setAttribute("class" , "cell current2");

    }
    placed= async(index)=>{
        this.list[index].setAttribute("class" , "cell placed");

    }
    markspl= async (index)=>{
        this.list[index].setAttribute("class","cell min");
    }
    unmark= async ()=>{
        return new Promise (resolve =>{
            setTimeout(()=>{
                resolve();
            },this.time);
        });
    }
    pause = async() => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, this.time);
        });
    }

    compare = async (index1, index2)=> {
        await this.pause();
        let value1 = Number(this.list[index1].getAttribute("value"));
        console.log(value1);
        let value2 = Number (this.list[index2].getAttribute("value"));
        console.log(value2);
        if(value1>value2){
            return true;
         }
         return false;
    }
    swap = async (index1, index2)=>{
        await this.pause();
        let value1= this.list[index1].getAttribute("value");
        let value2 = this.list[index2].getAttribute("value");
        this.list[index1].setAttribute("value",value2);
        this.list[index1].style.height= `${3.8*value2}px`;
        this.list[index2].setAttribute("value",value1);
        this.list[index2].style.height=`${3.8*value1}px`
    }
}