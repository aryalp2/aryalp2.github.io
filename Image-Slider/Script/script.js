class Slider {
  constructor (elem, options) {
    this.elem = elem; 
    this.image = elem.querySelector(".image");
    this.images = this.image.children;

    this.options = options || {};
    this.options.transitionTime = this.options.transitionTime || 100;

    this.width = this.options.width || this.images[0].width;
    this.height = this.options.height || this.images[0].height;

    this.init();    
  }

  init () {
    this.elem.style.width = this.width + "px";
    this.elem.style.height = this.height + "px";
    this.elem.style.overflow = "hidden";
    this.elem.style.position = "relative";
    this.image.style.width = this.images.length * this.width + "px";
    this.image.style.lineHeight = "0";

    for(let image of this.images){
      image.style.display = "block";
      image.style.float = "left";
      image.style.width = this.width + "px";
      image.style.height = this.height + "px";
    }

    this.addButtons();
    this.addBullets();

    this.currentIndex = 0;

    this.bulletList.children[this.currentIndex].classList.add('active');
    this.startLoop();
  }

  startLoop () {
    this.changer = setInterval(() => { this.right(); }, this.options.delay || 2000);
  }

  clearTime () {
    clearInterval(this.changer);
  }

  addButtons () {
    let leftBtn = document.createElement('div');
    leftBtn.classList.add('left');
    this.elem.appendChild(leftBtn);
    leftBtn.addEventListener('click', () => {
      this.left();
    });
    let rightBtn = document.createElement('div');
    rightBtn.classList.add('right');
    this.elem.appendChild(rightBtn);
    rightBtn.addEventListener('click', () => {
      this.right();
    });
  }

  addBullets () {
    this.bulletList = document.createElement("ul");
    this.bulletList.classList.add('bullets-list');
    
    for(let i = 0; i < this.images.length; i++){
      let bullet = document.createElement("li");
      bullet.classList.add('bullet');
      bullet.addEventListener('click', () => {
        this.jumpTo(i);
      });
      this.bulletList.appendChild(bullet);
    }
    this.elem.appendChild(this.bulletList);
  }

  animateTo (n){
    let currentMargin = this.currentIndex * this.width;
    let endMargin = n * this.width;
    let diffMargin = endMargin - currentMargin;
    let progress = 0;
    let speed = Math.abs(n - this.currentIndex) / this.options.transitionTime;

    clearInterval(this.animator);

    this.animator = setInterval(() => {
      this.image.style.marginLeft = -(currentMargin + diffMargin * progress) + "px";
      progress += speed;
      if(progress >= 1){
        this.image.style.marginLeft = -endMargin + "px";
        clearInterval(this.animator);
        this.startLoop();
      }
    }, speed * this.width);
    
  }

  left () {
    let leftIndex  = (this.currentIndex - 1);
    if(leftIndex < 0){
      leftIndex = this.images.length + leftIndex;
    }
    this.jumpTo(leftIndex);
  }

  right () {
    let rightIndex = (this.currentIndex + 1) % this.images.length;
    this.jumpTo(rightIndex);
  }

  jumpTo (i) {
    this.clearTime();
    this.animateTo(i);
    this.bulletList.children[this.currentIndex].classList.remove('active');
    this.currentIndex = i;
    this.bulletList.children[i].classList.add('active');
  }

  static register(selector, options) {
    let elements = document.querySelectorAll(selector);
    elements.forEach(function(element) {
      new Slider(element, options);
    });
  }
  
}

Slider.register(".image-slider", {
  width: 800,
  height: 400
});