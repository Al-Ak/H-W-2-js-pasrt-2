const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const errorIndicator = false;
  
        if (!errorIndicator) {
            const response = {
                url: "https://example.com",
                status: 200,
            }
  
            console.log("server get response", response);
            console.log("preparing data ...");
   const data =  JSON.stringify(response)
            resolve(data);
  
        } else {
            reject("Something went wrong");
        }
    }, 0);
  });
  
  
  promise
  .then((res) => {
    
    const data =JSON.parse(res)
    setTimeout(() => {
  
    console.log("data getted", data);
    
  
    
  }, 4000);
  
  
  
  })
  .catch((err)=> {
    console.log("o_O sorry try again later", err);
  })
  promise
  .then((final) =>{
    const data = JSON.parse(final)
    setTimeout(() => {
      console.log("loading ended........", final);
    }, 3000);
  } )
 