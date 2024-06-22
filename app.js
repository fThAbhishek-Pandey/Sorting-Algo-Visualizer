const start = async ()=>{ // function to start the programe
        console.log("I am start function");
        let algoValue = Number(document.querySelector(".algo-menu").value);
        let speedValue = Number(document.querySelector(".speed-menu").value);
         console.log("algoValue : ",algoValue,"speedValue : ",speedValue)
        if(speedValue===0){
            speedValue=1;
        }
        if(algoValue===0){
            alert("No Algoritm Selected");
            return;
        }
        let algorithm = new sortAlgorithms(speedValue);
        if (algoValue === 1) await algorithm.BubbleSort();
        if (algoValue === 2) await algorithm.SelectionSort();
        if (algoValue === 3) await algorithm.InsertionSort();
        if (algoValue === 4) await algorithm.MergeSort();
    };

    const RenderScreen = async ()=>{
        console.log("I am rederscreen function");
        let algoValue = Number(document.querySelector(".algo-menu").value);
        console.log("algovalue : ",algoValue)
        await RenderList();
    }
    const RenderList = async ()=>{
        let sizeValue = Number(document.querySelector(".size-menu").value);
        console.log("I am renderList sizeValue : ",sizeValue);
        await clearScreen ();
        let list = await randomList (sizeValue);
        console.log("list : ",list);
        const arrayNode = document.querySelector(".array");
         console.log("arraynode : ",arrayNode);
         console.log("list : ",list);
         for(const element of list){
            const node = document.createElement('div');
            node.className="cell";
            node.setAttribute("value",String(element));
            node.style.height=`${3.8*element}px`;
            arrayNode.appendChild(node);
         }
};


const RenderArray = async (sorted)=>{
    console.log("I am renderArray sorted : ",sorted);
    let sizeValue = Number(document.querySelector(".size-menu").value);
    console.log("sizeValue : ",sizeValue);
    await clearScreen();
    let list = await randomList (sizeValue);
    console.log("random list : ",list);
    if(sorted) list.sort((a,b)=> a-b);
    console.log("list ",list);
    const arrayNode =document.querySelector(".array");
    console.log("arrayNode : ",arrayNode);
    const divnode = document.createElement("div");
    divnode.className = "s-array";
  for( const element of list){
    console.log(element);
    const dnode = document.createElement("div");
    dnode.className ="s-cell";
    dnode.innerText = element;
    divnode.appendChild(dnode);
  }
    arrayNode.appendChild(divnode);
}

const randomList = async (Length) =>{
    let list = new Array();
    let lowerBound =1;
    let upperBound =100;
    for (let counter=0;counter <Length;++counter){
        let randomNumber = Math.floor(Math.random()*(upperBound-lowerBound+1) + lowerBound);
        list.push(parseInt(randomNumber));
    }
    console.log("I am random list function ", list);
    document.querySelector(".generatedArr").innerHTML= list;
    return list;
}



const clearScreen = async ()=>{
    console.log("I am clearscreen ");
    document.querySelector(".array").innerHTML="";
};
const responce =()=>{
    console.log("I am responce function");
    let Navbar = document.querySelector(".navbaar");
    if(Navbar.className ==="navbar"){
        Navbar.className += " responsive";
    }
    else {
        Navbar.className= "navbar";
    }
}
document.querySelector(".icon").addEventListener("click",responce);
document.querySelector(".start").addEventListener("click",start);
document.querySelector(".size-menu").addEventListener("change",RenderScreen);
document.querySelector(".algo-menu").addEventListener("change",RenderScreen);
window.onload=RenderScreen;