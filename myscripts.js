const prevBtn=document.querySelector('.prevDiv');
const nextBtn=document.querySelector('.nextDiv');
let carousel=document.querySelector('.carousel-list');
let p=document.querySelector('p');

var c=1;
    carousel.style.marginLeft = ` ${-100*c}%`;


nextBtn.addEventListener('click',
             
             
                    
() =>{
  
    c++;
    carousel.classList.add('transitionClass');
     carousel.style.marginLeft = ` ${-100*c}%`;
   
 



}        
                    
                    );
                    
                    
     carousel.addEventListener('transitionend',
     
     ()=>{

     if(c===5){
     carousel.classList.remove('transitionClass');
     c=1;
   
   carousel.style.marginLeft = ` ${-100*c}%`;
 
     }
     
     else if(c===0){
     carousel.classList.remove('transitionClass');
     c=4;
   
   carousel.style.marginLeft = ` ${-100*c}%`;
     
     }
     
     
     
     }
     
     );
     
     prevBtn.addEventListener('click',
     
     () =>{
     
     c--;
      carousel.classList.add('transitionClass');
     carousel.style.marginLeft = ` ${-100*c}%`;
 
     
     }
     
     
     )
                    

 

 
