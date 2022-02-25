const loadBuddies=()=>{
    fetch('https://randomuser.me/api/?results=5')
   .then(response=>response.json())
   .then(json=> displayBuddies(json));
}

loadBuddies();

const displayBuddies = data =>{
    const buddies = data.results;
    const buddiesDiv=document.getElementById('buddies');

    for(const buddy of buddies){
        console.log(buddy);
        console.log(buddy.name.first,buddy.name.last);
        const p=document.createElement('p');
        p.innerText=`Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
        email: ${buddy.email}`;
        buddiesDiv.appendChild(p);
    }
}