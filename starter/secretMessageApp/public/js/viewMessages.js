let tries = 0;
var startTime = 0;
document.querySelector("#viewMsg").addEventListener('click', (e) => {
    const userPasscodeGuess = document.querySelector("#passcode").value;
    const messagesRef = firebase.database().ref();
    messagesRef.on("value", (snapshot) => {
        const data = snapshot.val();
        let found = false;
        for (let key in data){
            if (data[key].passcode == userPasscodeGuess){
                found = true;
                console.log(data[key].message);
                display(data[key].message);
            }
        } if (!found){
            alert("passcode doesn't match any messages");
            tries++;
        } if (tries == 5){
            document.querySelector("#viewMsg").disabled = true;
            alert("too many incorrect tries, try again in 10 second");
            startTime = new Date().getTime();
            let interval = 0;
            console.log(interval);
            while (interval < 10000){
                let endTime = new Date().getTime();
                interval = endTime - startTime;
            }
            document.querySelector("#viewMsg").disabled = false;
            console.log('can type now');
            tries = 0;
        }
    });
});

function display (displayMessage) {
    displayText = document.querySelector("#message");
    displayText.innerHTML = displayMessage;
    console.log(displayMessage);
};
