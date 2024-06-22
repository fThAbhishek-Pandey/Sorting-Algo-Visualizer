class sortAlgorithms{
    constructor (time){
        this.list = document.querySelectorAll(".cell");
        console.log("I am constructer of Algorithm : ",this.list," ",this.list.length," ",time);
        this.size = this.list.length;
        this.time= time;
        this.help = new Helper(this.time,this.list);
    }
    BubbleSort =async ()=>{
        for (let i=0;i<this.size -1;i++){
            for(let j=0;j<this.size-1-i;j++){
                await this.help.mark1(j);
                await this.help.mark2(j+1);
                if(await this.help.compare(j,j+1)){
                    await this.help.swap(j,j+1);
                }
                await this.help.unmark(j);
                await this.help.unmark(j+1);
            }
            this.list[this.size-1-i].setAttribute("class","cell done");
            this.list[this.size-1-i].setAttribute("class","cell placed");

        }
        this.list[0].setAttribute("class","cell done");
    }
    InsertionSort = async ()=>{
        for (let i=0;i<this.size -1;i++){
            let j=i;
            while (j>=0 && await this.help.compare(j,j+1)){
                await this.help.mark1(j);
                await this.help.mark2(j+1);
                await this.help.swap(j,j+1);
                await this.help.unmark(j);
                await this.help.unmark(j+1);
                j-=1;
            }
            await this.help.markspl(i);
        }
        for (let counter =0;counter<this.size;counter){
            this.list[counter].setAttribute("class","cell done");
        }
    }
    SelectionSort = async ()=>{
        for(let i=0;i<this.size;i++){
            let minINdex =i;
            await this.help.mark2(i);
            for(let j=i+1;j<this.size ;j++){
                // await this.help.markspl(minINdex);
                await this.help.mark1(j);
                if(await this.help.compare(minINdex,j)){
                    // await this.help.unmark(minINdex);
                    minINdex =j;
                }
                await this.help.unmark(j);
                await this.help.markspl(minINdex);
            }
            await this.help.markspl(minINdex);
            // await this.help.mark1(i);
            await this.help.unmark(i);
            await this.help.pause();
            await this.help.swap(minINdex,i);
            await this.help.unmark(minINdex);
            await this.help.placed(i);
            this.list[i].setAttribute("class","cell done");
            this.list[i].setAttribute("class","cell placed");

        }
    }
    MergeSort = async()=>{
        await this.MergeDivider(0,this.size-1);
        for (let counter =0;counter<this.size;counter++){
            this.list[counter].setAttribute("class","cell done");
        }
    }
    MergeDivider = async (start,end) =>{
        if(start<end){
            let mid= start + Math.floor((end-start)/2);
            await this.MergeDivider(start,mid);
            await this.MergeDivider(mid+1,end);
            await this.Merge (start,mid,end);
        }
    }
    Merge= async (start,mid,end)=>{
            let newList = new Array();
            let frontcounter = start;
            let midCounter =mid +1;
            while (frontcounter<=mid && midCounter <=end){
                let fvalue= Number(this.list[frontcounter].getAttribute("value"));
                let svalue = Number (this.list[midCounter].getAttribute("value"));
                if(fvalue>=svalue){
                    newList.push(svalue);
                    ++midCounter;
                }
                else {
                    newList.push(fvalue);
                    frontcounter++;
                }
            }
            while (frontcounter<=mid){
                newList.push(Number(this.list[frontcounter].getAttribute("value")));
                frontcounter++;
            }
            while(midCounter<=end){
                newList.push(Number(this.list[midCounter].getAttribute("value")))
                midCounter++;
            }
            for(let c= start ;c<=end;c++){
                this.list[c].setAttribute("class","cell current");

            }
            for(let c= start,point=0;c<=end&&point<newList.length; c++,point++){
                await this.help.pause();
                this.list[c].setAttribute('value',newList[point]);
                this.list[c].computedStyleMap.height= `${3.5*newList[point]}px`;
            }
            for(let c= start;c<=end;c++){
                this.list[c].setAttribute("class","cell");
            }
    }
}