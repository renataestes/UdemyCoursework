 


//time is first measured when the page is loaded
            var start = new Date().getTime();
            
            
            //Generate a random color for the shape
            function getRandomColor() {
                
              var letters = '0123456789ABCDEF';
                
              var color = '#';
                
              for (var i = 0; i < 6; i++) {
                  
                color += letters[Math.floor(Math.random() * 16)];
                  
              }
                
              return color;
        }
            
            //This section makes a shape appear at random sizes and colors
            function makeShapeAppear(){
                
                var top = Math.random() * 400;
                
                var left = Math.random() * 400;
                
                var width = (Math.random() * 200) + 100;
                
                var height = Math.random() * 300;
                
                if(Math.random() >0.5) {
                    document.getElementById("shape").style.borderRadius = "50%";
                } else {
                    document.getElementById("shape").style.borderRadius = "0";
                }
                
                document.getElementById("shape").style.backgroundColor = getRandomColor(); 
                
                document.getElementById("shape").style.top = top + "px";
                
                document.getElementById("shape").style.left = left + "px";
               
                document.getElementById("shape").style.width = width + "px";
                
                document.getElementById("shape").style.height = height + "px";
                document.getElementById("shape").style.display = "block";
                
                start = new Date().getTime();
            }   
            
            //The shape appears on the page a random time between 0s and 2s after the page loads
            function appearAfterDelay() {
                setTimeout(makeShapeAppear, Math.random()*2000);
            }
            
            appearAfterDelay();
            
            
            //This section makes certain actions happen onclick
                document.getElementById("shape").onclick = function() {
                    
               document.getElementById("shape").style.display = "none";
                
                //The time stops once you click the element
                var end = new Date().getTime();
                
                //Divide it by 1000 to get the time in seconds
                var timeTaken = (end - start) / 1000;
                
               document.getElementById("timeTaken").innerHTML = timeTaken + "s";
                
                appearAfterDelay();
                
            }
