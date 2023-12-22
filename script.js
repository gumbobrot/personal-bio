let data = ["hello, world!", "i love skidding", "i love boobs"];
let len = 0;
let speed=150;
for (let i = 0; i < data.length; ++i) len += 2*data[i].length;
len += 4*data.length;
function type() {
    let p=0;
    for (let i = 0; i < data.length; ++i) {
        let x = 0;
        while (x <= data[i].length) {
            let y=x;
            setTimeout(()=>{
                document.getElementById('typewriter').innerHTML=`${data[i].substr(0,y)}`
            },p*speed)
            ++x,++p;
        }
        --x,p+=2;
        while (x >= 0) {
            let y=x;
            setTimeout(()=>{
                document.getElementById('typewriter').innerHTML=`${data[i].substr(0,y)}`
            },p*speed)
            --x,++p;
        }
    }
    setTimeout(() => {
        type();
    }, len * speed);
}

function blinkingPointer(){
    setTimeout(()=>{
        document.getElementById('title').style.borderRightColor=`red`;
    },500)  
    setTimeout(()=>{
        document.getElementById('title').style.borderRightColor='transparent'
    },1000)
    setTimeout(()=>{
        blinkingPointer();
    },1000)

}

blinkingPointer();
type();

var bitcoinDiv = document.getElementById('bitcoinDiv');
var tooltip = document.getElementById('tooltip');
var bitcoinAddress = bitcoinDiv.getAttribute('data-address');
var isCopying = false;

bitcoinDiv.addEventListener('click', function() {
  if (!isCopying) {
    isCopying = true;
    
    var copyText = document.createElement('textarea');
    copyText.value = bitcoinAddress;
    document.body.appendChild(copyText);
    copyText.select();
    document.execCommand('copy');
    document.body.removeChild(copyText);

    // Ändere den Text zu "Copied!" nach dem Kopieren
    tooltip.innerHTML = 'Copied!';
    tooltip.style.display = 'inline-block';

    // Entferne die Klasse 'clicked' und setze den Text zurück nach einigen Sekunden
    setTimeout(function() {
      tooltip.style.display = 'none';
      tooltip.innerHTML = 'Copy Adress'; // Setze den Text zurück
      isCopying = false;
    }, 1500);
  }
});

// Zeige die Tooltip-Box beim Überfahren mit dem Mauszeiger
bitcoinDiv.addEventListener('mouseover', function() {
  tooltip.style.display = 'inline-block';
});

// Verstecke die Tooltip-Box nach dem Verlassen mit dem Mauszeiger
bitcoinDiv.addEventListener('mouseout', function() {
  tooltip.style.display = 'none';
});

function startSite() {
  var introContainer = document.getElementById('introContainer');
  var backgroundMusic = document.getElementById('backgroundMusic');
  var mainContent = document.querySelector('.container');

  if (introContainer && backgroundMusic && mainContent) {
      introContainer.style.display = 'none';
      mainContent.style.display = 'block';

      // Start background music
      backgroundMusic.play().catch(function (error) {
          console.error('Audio autoplay failed:', error);
      });
  } else {
      console.error('One or more elements not found.');
  }
}