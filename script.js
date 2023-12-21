(function(){
    fetch('https://randomuser.me/api/?results=1')
    .then((res)=>res.json())
    .then((result)=>{
        let data=result.results;
        let output='';
        data.forEach((item) => {
            output=output+`
            <div class="card">
            <div class="user_img">
                <div class="user_thumbnail">    
                    <img src="${item.picture.large}"
                        alt="">
                </div>
                <div class="user_profile_img">
                    <img src="${item.picture.large}"
                        alt="">
                </div>
            </div>
            <div class="user_details">
                <h2>${item.name.first} ${item.name.last}</h2>
                <span class="city">${item.location.city} <i class="ri-map-pin-2-line"></i></span>
                <span class="email">${item.email} <i class="ri-mail-line"></i></span>
            </div>
        </div>
            `
        });
        document.querySelector('body').innerHTML=output;
    })
})();