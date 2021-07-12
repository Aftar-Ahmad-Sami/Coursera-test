(function (window) {

var names = ["Sami", "Johnny", "Jenny", "Jassy", "Sadi", "Rahul", "Frank", "Raj", "Smith", "Joker"];

for (var i = 0; i < names.length; i++) {

  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter == 'j') {
    window.byeSpeaker.speak(names[i]);
  } else {
    window.helloSpeaker.speak(names[i]);
  }
}

})(window);
