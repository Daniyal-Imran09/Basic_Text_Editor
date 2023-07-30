function check(){
console.log("hello world")
}

function changefont(){

  const text = document.getElementById('text');
  fontOptions = ["Arial", "Verdana", "Times New Roman", "Courier New"];
  var container = document.createElement('div');
   container.classList.add('centered-container');
   var select = document.createElement('select');
  var button = document.createElement('button')
  button.textContent='close'
   for(var i=0;i<fontOptions.length;i++){
    option=  document.createElement('option');
   option.textContent=fontOptions[i];
   option.value = fontOptions[i];
   select.appendChild(option);
   }

   container.appendChild(select)
   container.appendChild(button)
   document.body.appendChild(container)
   select.addEventListener('click',function(){
    text.style.fontFamily = select.value;
   })

   button.addEventListener('click',function(){
    document.body.removeChild(container)
   })
 
}
function helpit(){
  var container = document.createElement('div');
   container.classList.add('centered-container');
   var text = document.createElement('p');
  text.textContent = 'Basic Text Editor';
  var button = document.createElement('button');
  button.textContent = 'Close';
  container.appendChild(text)
  container.appendChild(button)
  document.body.appendChild(container)

  button.addEventListener('click',function(){
    document.body.removeChild(container)
  })
}

fontvalue='';
fontvalue1=100
 zoomLevel = fontvalue1;
 zoomStep = 10;

function zoominit(){

  const text = document.getElementById('text');
  zoomLevel += zoomStep;
  console.log(zoomLevel)
  text.style.fontSize = `${zoomLevel}%`;
}
function zoomoutit(){
console.log('zoomout')
  const text = document.getElementById('text');
  zoomLevel -= zoomStep;
  console.log(zoomLevel)
  text.style.fontSize = `${zoomLevel}%`;

}

function boldit(){

  console.log('bold')
text=  document.getElementById("text");
selectedText = text.value.substring(text.selectionStart, text.selectionEnd);
//text.style.fontweight = 'bold'
a = document.createElement('textarea')
a.value= selectedText;
//a.style.fontweight='bold';
//console.log(a.textContent)
a.style.fontWeight='bold';
console.log(a.value)
//text.value = a.value
text.style.fontWeight='bold';
//console.log(text.value);
//text.setRangeText(a.value)
// const boldText = `<b>${selectedText}</b>`;
//   // const newText =
//   //   text.value.substring(0, text.selectionStart) +
//   //   boldText +
//   //   text.value.substring(text.selectionEnd , text.length);
//   // text.value = newText;
  
  //document.execCommand("bold", false, null)
  // const boldText = "**" + selectedText + "**";
  // text.setRangeText(boldText);

}


function italicit(){
  console.log('it')
text =  document.getElementById("text");
const selectedText = text.value.substring(text.selectionStart, text.selectionEnd);
a = document.createElement('p')
a.textContent= selectedText;
a.style.fontStyle = "italic"
text.style.fontStyle = "italic";
}
function underlineit(){
  console.log('in')
text =  document.getElementById("text");
const selectedText = text.value.substring(text.selectionStart, text.selectionEnd);
a = document.createElement('p')
a.textContent= selectedText;
a.style.fontStyle = "italic"
text.style.textDecoration = "underline";
}

function fontsize(){
  textarea = document.getElementById("text")
  var container = document.createElement('div');
        container.classList.add('centered-container');
        var button = document.createElement('button');
        button.textContent = 'Enter';
        var text = document.createElement('p');
        text.textContent = 'Please Enter the Size';
        var input = document.createElement('input')
        input.type="number"
        input.value= fontvalue;
        container.appendChild(text)
        container.appendChild(input);
        container.appendChild(button)
        document.body.appendChild(container);

        button.addEventListener('click',function(){
          fontvalue=input.value
          console.log(input.value)
          textarea.style.fontSize = input.value+ 'px';
          document.body.removeChild(container)
        })
}
function newfile(){
    a = document.getElementById('text').value
    if(a){
        var container = document.createElement('div');
        container.classList.add('centered-container');
        
        var button = document.createElement('button');
        button.textContent = 'save';

        var button1 = document.createElement('button');
        button1.textContent = 'Dont save';

        var button2 = document.createElement('button');
        button2.textContent = 'Cancel';
        
        var text = document.createElement('p');
        text.textContent = 'Do you want to save changes?';
        
        container.appendChild(text);
        container.appendChild(button);
        container.appendChild(button1); 
        container.appendChild(button2); 
       
        document.body.appendChild(container);
       

  button.addEventListener('click',function(){
    savefile();
    document.body.removeChild(container)
    document.getElementById('text').value=''
  })
  button1.addEventListener('click',function(){
    document.body.removeChild(container)
    document.getElementById('text').value=''
  })
  button2.addEventListener('click',function(){
    document.body.removeChild(container)
  })
    }
    else{
        console.log('empty')
}
}

function findit(){

  var container = document.createElement('div');
  container.classList.add('centered-container');
  var input = document.createElement('input');
  var button = document.createElement('button')
  button.textContent = 'Find'
    container.appendChild(input)
    container.appendChild(button)
    document.body.appendChild(container)

    button.addEventListener('click',function(){
      var term = input.value;
      var text = document.getElementById("text");
      var regex = new RegExp(term, "gi");
      var matches = text.value.match(regex);
      console.log(regex)
    
      if (matches && matches.length > 0) {
        var text = document.getElementById('text');
        var highlightedHtml = text.value.replace(
          regex,
          '<span class="highlighted">$&</span>'
        );
        text.value = highlightedHtml;
        var numMatches =  highlightedHtml.length
    alert("Found " + numMatches + " matches.");

      }
      input.value = "";
    
    })

}

function replaceit(){
  var text = document.getElementById("text");
  var container = document.createElement('div');
  container.classList.add('centered-container');
  var input = document.createElement('input');
  input.placeholder='Find'
  var input1 = document.createElement('input');
  input1.placeholder='Replace'
  var button = document.createElement('button')
  button.textContent = 'FindAndReplace'
    container.appendChild(input)
    container.appendChild(input1)
    container.appendChild(button)
    document.body.appendChild(container)



    button.addEventListener('click',function(){
      var regex = new RegExp(input.value, "gi");
  var Text = text.value;
  var newContent = Text.replace(regex, input1.value);
  text.value = newContent;
document.body.removeChild(container)
  input.value = "";
  input1.value = "";

    })
}
function openfile() {
    var input = document.createElement('input');
      input.type = 'file';
      input.accept = '.txt';
      
      input.onchange = function(event) {
        var fileInput = event.target;
        var reader = new FileReader();
        
        reader.onload = function() {
          var text = reader.result;
          document.getElementById('text').value = text;
        };
        
        reader.readAsText(fileInput.files[0]);
      };
      
      input.click();
  }

function savefile() {
          
    var textToSave = document.getElementById("text").value;
    var blob = new Blob([textToSave], {type: "text/plain;charset=utf-8"});
    
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'myFile.txt';
    link.click();
  }
var c2=''
function undo(){
  var c1 = c2
   c2=document.getElementById('text').value;
  document.getElementById('text').value=c1;
}

function copyit(){
  text = document.getElementById('text')
  copy = document.getElementById('copy');
 
    const selectedText = text.value.substring(text.selectionStart, text.selectionEnd);
    if (selectedText) {
      navigator.clipboard.writeText(selectedText)
        .then(() => {
          console.log('Selected text copied to clipboard');
        })
        .catch((err) => {
          console.error('Failed to copy selected text: ', err);
        });
      }

}
function pasteit(){
  const text = document.getElementById('text');
  text.focus();
  a=navigator.clipboard.readText().then((pastedText) => {
    text.value += pastedText;
  })
  //console.log(a)
  //document.getElementById('text').value=a.PromiseResul
}

function cutit(){
  const text = document.getElementById('text');
  const selectedText = text.value.substring(text.selectionStart, text.selectionEnd);
  if(selectedText){
    text.setRangeText('', text.selectionStart, text.selectionEnd, 'end');
    navigator.clipboard.writeText(selectedText)
    console.log('cut')
  }
}
  function saveasfile() {
    var textToSave = document.getElementById("text").value;
    var blob = new Blob([textToSave], {type: "text/plain;charset=utf-8"});
    
    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.style.display = 'none';
    
    fileInput.addEventListener('change', function(e) {
      var file = e.target.files[0];
      
      var reader = new FileReader();
      reader.onload = function(e) {
        var link = document.createElement('a');
        link.href = e.target.result;
        link.download = file.name;
        link.click();
      };
      
      reader.readAsDataURL(file);
    });
    
    document.body.appendChild(fileInput);
    fileInput.click();
    document.body.removeChild(fileInput);
  }
