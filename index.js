function contactButtons(id){
  anime({
    targets: '#' + id,
    translateX: 100
  })

}

function log(){
  console.log('ping');
}

anime({
  targets: '',
  translateX: 250,
  rotateZ: 360,
  scale: 3,
  duration: 3000,
  loop: true
});