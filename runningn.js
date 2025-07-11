
const runNTimes=(func,n,delay=0)=>{
    for(let i=0; i <n;i++){
        setTimeout(()=>func(),delay)
    }
}

runNTimes(()=>console.log("Running"),5,4000)