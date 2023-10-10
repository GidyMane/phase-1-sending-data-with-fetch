// Add your code here
function submitData(name, email){
    const configurationObject={
        method:"POST", 
        headers:{
            "Content-Type":"application/json",
            "accept": "application/json"
        },
        body:JSON.stringify({
            "name":name,
            "email":email
        })
    }

    fetch("http://localhost:3000/users", configurationObject)
    .then(res => res.json())
    .then(function(object){
        // console.log(object)
        
        let p = document.createElement('p')
        p.innerHTML=object.id
        let body =document.querySelector("body")
        body.appendChild(p)
    }).catch(e=>console.log(e))
}

