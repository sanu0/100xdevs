
function show(){
    console.clear();
    const date = new Date();
    console.log(date.getHours() + ":" + date.getMinutes()+":"+date.getSeconds());
}
setInterval(show,1000);