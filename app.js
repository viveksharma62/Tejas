const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning vivek sir...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon vivek sir...");
    } else {
        speak("Good Evening vivek Sir...");
    }
}

window.addEventListener('load', () => {
    speak("Initializing Tejas...");
    wishMe();
});
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('hey tejas') ||message.includes('hi tejas')  || message.includes('hello tejas') || message.includes('hay tejas') ) {
        speak("Hello Sir,  I am Tejas assistance  How May I Help You?");
    }else if(message.includes('how are you tejas') || message.includes('how are you vivek') || message.includes('how are you')) {
        speak("I am fine  and You?");
    }else if(message.includes('who developed you') || message.includes('father of tejas')) {
        speak("We have been developed by Vivek Sharma. ");
    }else if(message.includes('I love you tejas') || message.includes('i love you')) {
        speak("I love you to. But I am an assistant so I can only reply and cannot feel your feeling. ");
    } else if(message.includes('i am fine') || message.includes('fine')) {
        speak("it's good everyone should be good");
    }else if(message.includes('Who are you') || message.includes('tume kisane banaya') || message.includes('hu r u')) {
        speak("i am robot assistance. I have been developed by Vivek Sharma. I am an assistant created to answer your questions. Can I help you ?");
    }else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    }  else if (message.includes("open instagram")) {
        window.open("https://www.instagram.com/vivek_sharma62", "_blank");
        speak("Opening instagram...");
    }else if (message.includes("open linkdin")) {
        window.open("https://www.linkedin.com/in/vivek-kumar-35637b26a/", "_blank");
        speak("Opening Linkdin...");
    }    else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes('open wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } else if (message.includes('open calculator')) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
    } else if (message.includes('open camera')) {
        window.open('Camera:///');
        const finalText = "Opening Camera   ";
        speak(finalText);
    }else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
}