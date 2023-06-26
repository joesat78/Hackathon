
const utterThis = new SpeechSynthesisUtterance()
const synth = window.speechSynthesis
let ourText = ""

const checkBrowserCompatibility = () => {
  "speechSynthesis" in window
    ? console.log("Web Speech API supported!")
    : console.log("Web Speech API not supported :-(")
}

checkBrowserCompatibility()
function btnSpeak(lang)
{
    if(lang=="Mex")
    {
        utterThis.lang = 'es';
        utterThis.text = "Bienvenido a nuestro continente";
    }
    else if(lang=="Ind")
    {
        utterThis.lang="hi-IN";
        utterThis.text = "हमारे महाद्वीप में आपका स्वागत है";
    }
    else if(lang=="Eng")
    {
        utterThis.lang="en-US";
        utterThis.text = "Welcome to our Continent";
    }
    else if(lang=="Fra")
    {
        utterThis.lang="fr-FR";
        utterThis.text = "Bienvenue sur notre continent";
    }
    else if(lang=="Aus")
    {
        utterThis.lang="en-GB";
        utterThis.text = "Welcome to our Continent";
    }
    else if(lang=="Afr")
    {
        utterThis.lang="ko-KR";
        utterThis.text = "Karibu katika bara letu";
    }
  synth.speak(utterThis);
}



