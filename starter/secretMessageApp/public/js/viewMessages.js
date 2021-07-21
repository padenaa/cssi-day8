const getMessages = () => {
    const messageRef = firebase.database().ref();
    messageRef.on('value', (snapshot)=>{
        const data = snapshot.val();
        console.log(data);
        for (let key in data){
            const message = data[key];
            console.log(message);
            if(myPass == message.passcode){
                renderMessage(message);
            }
        }
    });
}

const findMessage = (myPass) => {
    const messageRef = firebase.database().ref();
    messageRef.on('value', (snapshot)=>{
        const data = snapshot.val();
    });
    console.log(data);
    for (let key in data){
        const message = data[key];
        console.log(message);
        if(myPass == message.passcode){
            renderMessage(message);
        }
    }
}

document.querySelector("#viewMsg").addEventListener('click', ()=> {
    const passcode = document.querySelector('#passcode').nodeValue;
    findMessage(passcode);
});
