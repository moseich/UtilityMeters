
function myProba(){
  let canvas = document.createElement('canvas');
  let ctx = canvas.getContext('2d');
  let   w = canvas.width = document.getElementById('allSecondPage').parentNode.parentElement.clientWidth;
  let  h = canvas.height = document.getElementById('allSecondPage').parentNode.parentElement.clientHeight;
      let particles = [],
     properties = {
        bgColor             : '#000',
        particleColor       : '#222',
       particleRadius      :8,
        particleCount       :17,
        particleMaxVelocity :0.5,
        lineLength          :500
              
      };
  
document.querySelector('.secondCan').appendChild(canvas);
  
      
      window.onresize = function(){
        w = canvas.width = document.getElementById('allSecondPage').parentNode.parentElement.clientWidth;
        h = canvas.height = document.getElementById('allSecondPage').parentNode.parentElement.clientHeight;
        
      }
      
      class Particle {
        constructor(){
          this.x = Math.random()*w;
          this.y = Math.random()*h;
          this.velocityX = Math.random()*(properties.particleMaxVelocity*2)-properties.particleMaxVelocity;
          this.velocityY = Math.random()*(properties.particleMaxVelocity*2)-properties.particleMaxVelocity;
        }
        position(){
        this.x + this.velocityX > w && this.velocityX > 0 || this.x + this.velocityX < 0 && this.velocityX < 0? this.velocityX*=-1 : this.velocityX;
        this.y + this.velocityY > h && this.velocityY > 0 || this.y + this.velocityY < 0 && this.velocityY < 0? this.velocityY*=-1 : this.velocityY;
        this.x += this.velocityX;
        this.y += this.velocityY;
        }
        reDraw(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,properties.particleRadius,0,Math.PI*2);
        ctx.closePath();
        ctx.fillStyle = properties.particleColor;
        ctx.fill();
   }
        
      }
      
      function reDrawBackground(){
        ctx.fillStyle = properties.bgColor;
        ctx.fillRect(0,0,w,h);
      }
  
      function drawLines(){
        var x1,y1,x2,y2,length,opasity;
        for(var i in particles){
          for(var j in particles){
            x1 = particles[i].x;
            y1 = particles[i].y;
            x2 = particles[j].x;
            y2 = particles[j].y;
            length = Math.sqrt(Math.pow(x2 - x1,2) + Math.pow(y2-y1, 2));
            if(length < properties.lineLength){
              ctx.lineWidth = 0.6;
              ctx.strokeStyle = '#222';
              ctx.beginPath();
              ctx.moveTo(x1,y1);
              ctx.lineTo(x2,y2);
              ctx.closePath();
              ctx.stroke();
              
            }
          }
        }
      }
      
      function reDrawParticles(){
        for(var i in particles){
          particles[i].position();
          particles[i].reDraw();
        }
      }
      
      function loop(){
        reDrawBackground();
        reDrawParticles();
        drawLines();
        requestAnimationFrame(loop);
      }
      
      
      function init(){
        for(var i = 0 ; i < properties.particleCount ; i++){
          particles.push(new Particle);
        }
        loop();
      }
      
      init();
  
  
}
myProba();

(function (){
  let canvas1 = document.createElement('canvas');
  let ctx1 = canvas1.getContext('2d');
   let   w = canvas1.width = document.getElementById('thirdPage').parentNode.parentElement.clientWidth;
   let   h = canvas1.height = document.getElementById('thirdPage').parentNode.parentElement.clientHeight;
  
       let particles = [],
      properties = {
        bgColor             : '#fff',
        particleColor       : '#e6e6e6',
        particleRadius      :8,
        particleCount       :17,
        particleMaxVelocity :0.5,
        lineLength          :500
                
      };
  
      document.querySelector ('.cnvas2').appendChild(canvas1);
      
      window.onresize = function(){
        w = canvas1.width = document.getElementById('thirdPage').parentNode.parentElement.clientWidth;
        h = canvas1.height = document.getElementById('thirdPage').parentNode.parentElement.clientHeight;
        
      }
      
      class Particle1 {
        constructor(){
          this.x = Math.random()*w;
          this.y = Math.random()*h;
          this.velocityX = Math.random()*(properties.particleMaxVelocity*2)-properties.particleMaxVelocity;
          this.velocityY = Math.random()*(properties.particleMaxVelocity*2)-properties.particleMaxVelocity;
        }
        position(){
          this.x + this.velocityX > w && this.velocityX > 0 || this.x + this.velocityX < 0 && this.velocityX < 0? this.velocityX*=-1 : this.velocityX;
          this.y + this.velocityY > h && this.velocityY > 0 || this.y + this.velocityY < 0 && this.velocityY < 0? this.velocityY*=-1 : this.velocityY;
          this.x += this.velocityX;
          this.y += this.velocityY;
        }
        reDraw(){
          ctx1.beginPath();
          ctx1.arc(this.x,this.y,properties.particleRadius,0,Math.PI*2);
          ctx1.closePath();
          ctx1.fillStyle = properties.particleColor;
          ctx1.fill();
        }
        
      }
      
      function reDrawBackground(){
        ctx1.fillStyle = properties.bgColor;
        ctx1.fillRect(0,0,w,h);
      }
  
      function drawLines(){
        var x1,y1,x2,y2,length,opasity;
        for(var i in particles){
          for(var j in particles){
            x1 = particles[i].x;
            y1 = particles[i].y;
            x2 = particles[j].x;
            y2 = particles[j].y;
            length = Math.sqrt(Math.pow(x2 - x1,2) + Math.pow(y2-y1, 2));
            if(length < properties.lineLength){
              ctx1.lineWidth = 0.6;
              ctx1.strokeStyle = '#e6e6e6';
              ctx1.beginPath();
              ctx1.moveTo(x1,y1);
              ctx1.lineTo(x2,y2);
              ctx1.closePath();
              ctx1.stroke();
              
            }
          }
        }
      }
      
      function reDrawParticles(){
        for(var i in particles){
          particles[i].position();
          particles[i].reDraw();
        }
      }
      
      function loop(){
        reDrawBackground();
        reDrawParticles();
        drawLines();
        requestAnimationFrame(loop);
      }
      
      
      function init(){
        for(var i = 0 ; i < properties.particleCount ; i++){
          particles.push(new Particle1);
        }
        loop();
      }
      
      init();
  
  
}());
 
window.onscroll = function(){
   
   
   if (window.pageYOffset >= 1490){
     nav.classList.add('_whiteMenu');
   }
   else {nav.classList.remove('_whiteMenu') }
 }
 
const popupLinks = document.querySelectorAll(".popup-link");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length >0){
  for (let i - 0; i < popupLinks.lehgth; i++){
    const popupLink = popupLinks[i];
    popupLink.addEventListener("click",function(e){
      const popupName = popupLink.getAttribute("href").replace("#","");
      const curentPopup = document.getElementById(popupName);
      popup(curentPopup);
      e.preventDefault();
    });
  };
};

const popupClouseIcon = document.querySelectorAll(".close-popup");
if(popupClouseIcon.length >0){
  for (let i = 0; i< popupClouseIcon.length; i++){
    const el = popupClouseIcon[i];
    el.addEventListener("click", function(e){
      popupClouse(el.closest(".popup"));
    });
  }
}
     
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    




