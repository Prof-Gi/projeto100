var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var Content;


function start()
{
     
    recognition.start();
} 

recognition.onresult = function(event) 
{
    console.log(event); 

    var Content = event.results[0][0].transcript; 

     console.log(Content);
      if(Content =="selfie") 
      {
        console.log("selfie --- ");

        speak(); 
      }
}

function speak()
{    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    setTimeout(function() 
    { 
        imgId = "selfie1";
        takeSelfie(); 
        speakData = "Tirando sua selfie em 5 segundos";
        var utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);
    }, 5000); 

    setTimeout(function() 
    { 
        imgId = "selfie2";
        takeSelfie(); 
        speakData = "Tirando sua selfie em 5 segundos";
        var utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis); 
    }, 10000); 

    setTimeout(function() 
    { 
        imgId = "selfie3";
        takeSelfie(); 
        speakData = "Tirando sua selfie em 5 segundos";
        var utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis); 
    }, 15000); 

}

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});

function takeSelfie()
{
    console.log(imgId);

    Webcam.snap(function(data_uri) 
    {
        if(imgId == "selfie1")
        {
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        }

        if(imgId == "selfie2")
        {
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
        }

        if(imgId == "selfie3")
        {
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
        }
    });
}
