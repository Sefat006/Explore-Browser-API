console.log('i am khan');
// alert('ki khobor dosto');
const showAlert = ()=> {
    const num = Math.random()*10;
    console.log(num);
    if(num < 5){
        alert('number is less than 5');
    }
    
}

const askSomething =()=>{
    const decision = confirm('Are you coming Picnic');
    if(decision === true){
        alert('bkash 500 tk');
    }
    else{
        console.log('DGM!!');
    }
}

const getUserInfo = () => {
    const name = prompt('Tell uss your name');
    console.log(name);
    if(!!name){
        console.log('welcome here', name); 
    }
}