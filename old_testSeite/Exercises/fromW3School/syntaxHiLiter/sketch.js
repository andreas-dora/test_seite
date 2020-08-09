var textBefore = document.getElementById('before');
var textAfter = document.getElementById('after');
var pbtn = document.getElementById('pButton');
var rbtn = document.getElementById("resetButton");
var cbtn = document.getElementById("copyButton");
var out = document.getElementById('finalStr');
var tP = document.getElementById('testP');

pbtn.addEventListener("click", doStuff);
rbtn.addEventListener("click", resetStuff);
cbtn.addEventListener("click", copyStuff);

function doStuff(){
    var workWith = textBefore.value;

    var step1 = workWith.trim();
  // var step1 = step0.replace(/<(.*?)>\\n/g, '<br>');

   // var step2 = step1.replace(/<(.*?)\n/g, '$1 \n'); //&lt;/PENIS$1&gt; /\n/');
    // var step2 = step1.replace(/<\/[a-z0-9\](*?)>\n/g, 'AHOI'); //&lt;/PENIS$1&gt; /\n/');

 // var step2 = firstStep.replace(/<(.*?)>/g, '<span class="colTag">&lt;$1&gt;</span>');
    var step2 = step1.replace(/<(.*?)>/g, '&lt;$1&gt;');
  // var step3 = step2.replace(/\s(.*?)=/g, '<span class="colAtr"> $1=</span>');
    var step3 = step2.replace(/"(.*?)"/g, '<span class="colStr">&quot;$1&quot;</span>');
    var step4 = step3.replace(/&lt;(.*?)\s/g, '&lt;<span class="colTag">$1 </span>');
    // var step5 = step4.replace(/[a-z0-9](.*?)\n/g, '&lt;<span class="colTag">$1 </span> <br>');
//    var fithtStep = fourthStep.replace(/;\/(.*?)&gt;/g, '/<span class="colTag">$1</span>&gt;');
//    var sixtStep = fithtStep.replace(/\s\b([a-z]+?)=</g, '<span class="colAtr"> $1</span>=<');
  
   // var lastStep = "<code><pre>" + firstStep + "</pre></code>";
    var lastStep = "<pre><code>" + step4+ "</code></pre>";
    // for(var i = 0; i<workWith.length, i++){
    //     var data = workWith;
    //     data = data.replace(/"(.*?)"/g, '<span class="colStr">&quot;$1&quot;</span>');
    //     data = data.replace(/"(.*?)"/g, '<span class="code-str">&quot;$1&quot;</span>');

    // }

//    for(var i=0; i < ca.length; i++){
//     var data = ca[i];
//     data = data.replace(/"(.*?)"/g, '<span class="code-str">&quot;$1&quot;</span>');
//     data = data.replace(/&lt;(.*?)&gt;/g, '<span class="code-elem">&lt;$1&gt;</span>');
//     data = data.replace(/\/\* (.*?) \*\//g, '<span class="code-comment">/* $1 */</span>');
//     ca[i].innerHTML = data;
// }
//textAfter.value = workWith;
textAfter.value = lastStep;

tP.innerHTML = lastStep;
out.innerHTML = lastStep;
}
function resetStuff(){

    textAfter.value = "";
    textBefore.value = "";
    out.innerHTML = "";
}

function copyStuff(){
    // var copyText = document.getElementById("after");
    var copyText = textAfter;

  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  document.execCommand("copy");
//   alert("Copied the text: " + copyText.value);
}
