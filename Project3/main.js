

var username = '';

function randomString(length, chars) {
    
    for (var i = length; i > 0; --i) username += chars[Math.round(Math.random() * (chars.length - 1))];
    return username;
}
// document.write(randomString(5, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));
randomString(5, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

console.log(username);

// onMessage

function sendMessage(value) {
  console.log('Send:', value);
  Chat.sendMessage({
    sender: username,
    type: 'sounds',
    value: value
  });


}



var sounds = {
  1: '1.mp3',
  2: '2.mp3',
  3: '3.mp3',
  4: '4.mp3',
  5: '5.mp3',
  6: '6.mp3',
  7: '7.mp3',
  8: '8.mp3',
  9: '9.mp3',
  10: '10.mp3',
  11: '11.mp3',
  12: '12.mp3',
};

Chat.onMessage(function(data){
  console.log('Get:', data.value);
  var sound = sounds[data.value];
  console.log('will play', sound);
  var audio = new Audio(sounds[data.value]);
  audio.play();

  // var selector = (.circle) [data.value];
  //   selector.addClass(pulse);
});




// sendMessage


$('.circle1').hover(function (data) {
  sendMessage(1);
});

$('.circle2').hover(function (data) {
  sendMessage(2);
});

$('.circle3').hover(function (data) {
  sendMessage(3);
});

$('.circle4').hover(function (data) {
  sendMessage(4);
});

$('.circle5').hover(function (data) {
  sendMessage(5);
});

$('.circle6').hover(function (data) {
  sendMessage(6);
});

$('.circle7').hover(function (data) {
  sendMessage(7);
});

$('.circle8').hover(function (data) {
  sendMessage(8);
});

$('.circle9').hover(function (data) {
  sendMessage(9);
});

$('.circle10').hover(function (data) {
  sendMessage(10);
});

$('.circle11').hover(function (data) {
  sendMessage(11);
});

$('.circle12').hover(function (data) {
  sendMessage(12);
});












  