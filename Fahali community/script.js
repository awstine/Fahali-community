/*let valueDisplays = document.querySelectorAll (".num");
let interval=5000;

valueDisplays.forEach(valueDispla) = {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute
        ("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
         startValue+=1;
         valueDisplay.textContent=startValue;
         if(startValue == endValue){
            clearInterval(couter);
         }
        },duration);
    });
}
*/
/*let valueDisplays = document.querySelectorAll(".num");
let interval = 1000;

valueDisplays.forEach(function(valueDisplay) {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function() {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
let valueDisplays = document.querySelectorAll(".num");
let interval = 1000;

valueDisplays.forEach(function(valueDisplay) {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function() {
    if (endValue >= 800) {
      valueDisplay.textContent = "800+";
      clearInterval(counter);
    } else {
      startValue += 1;
      valueDisplay.textContent = startValue;
      if (startValue == endValue) {
        clearInterval(counter);
      }
    }
  }, duration);
});
let valueDisplays = document.querySelectorAll(".num");
let interval = 1000;

valueDisplays.forEach(function(valueDisplay) {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function() {
    startValue += 1;
    if (startValue == endValue) {
      valueDisplay.textContent = "800+";
      clearInterval(counter);
    } else {
      valueDisplay.textContent = startValue;
    }
  }, duration);
});


function formatValue(endValue) {
  if (endValue >= 800) {
    return "800+";
  } else {
    return endValue.toString();
  }
}

let valueDisplays = document.querySelectorAll(".num");
let interval = 1000;

valueDisplays.forEach(function(valueDisplay) {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function() {
    startValue += 1;
    if (startValue == endValue) {
      valueDisplay.textContent = formatValue(endValue);
      clearInterval(counter);
    } else {
      valueDisplay.textContent = formatValue(startValue);
    }
  }, duration);
});

*/

function formatValue(endValue) {
  if (endValue > 790) {
    return "800+";
    /*return endValue.toString() + "+";*/
  } else if (endValue >= 50) {
    return endValue.toString() + "+";
  }else if(endValue>=15){
    return endValue.toString() + "+";
  }else {
    return endValue.toString();
  }
}

let valueDisplays = document.querySelectorAll(".num");
let interval = 1000;

valueDisplays.forEach(function(valueDisplay) {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function() {
    startValue += 1;
    if (startValue == endValue) {
      valueDisplay.textContent = formatValue(endValue);
      clearInterval(counter);
    } else {
      valueDisplay.textContent = formatValue(startValue);
    }
  }, duration);
});
