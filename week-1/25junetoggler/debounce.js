

let timmer;

function impl() {
  if(timmer){
      clearInterval(timmer)
  }
   timmer = setTimeout(() => {
  console.log("hii");
  }, 2000);
}

