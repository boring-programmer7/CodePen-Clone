const initHTML = `
<div class="container"> 
  <h1>Hey Friends</h1>
  <p>Lets code something... </p>
  <button id="button" class="button">Click Here </button>
  <strong id="output" class="output" ></strong>
</div>
`;

const initCSS = `
.container {
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:center;
  height:95vh;
  border:1px solid black;
  color:white;
}

.output{
  margin-top:20px}

.button{ 
  background-color:#00acee;
  color:white;
  border:none;
  padding:10px;}

strong{
  font-size:1rem}

h1{
  font-size:3rem}
`;

const initJS = `
var count=0

document.getElementById("button").onclick=()=>{
  count++
  
  if (count<4){
  document.getElementById("output").innerHTML="You clicked " +count+ " times you are Cool"}
  else if ((count>=4)&&(count<10)){
    
    document.getElementById("output").innerHTML="You clicked " +count+ " times you are Awesome"}
  
  else{
   document.getElementById("output").innerHTML="You clicked " +count+ " times you are a God!"
  
  }
  }


`;

export { initHTML, initCSS, initJS };
