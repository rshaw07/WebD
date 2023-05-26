fetch("https://www.coursehubiitg.in/api/codingweek/contributions")
.then(function(response){
  return response.json();
})
.then(function(data){
          
   data = data.sort((a,b)=>{
    return b.points - a.points;
   })

    document.getElementById("first").src = data[0].avatar;
    document.getElementById("second").src = data[1].avatar;
    document.getElementById("third").src = data[2].avatar;
    document.getElementById("rec").textContent = data[0].name + " . " + data[0].points;
    document.getElementById("rec2").textContent = data[1].name + " . " + data[1].points;
    document.getElementById("rec3").textContent = data[2].name + " . " + data[2].points;

    for(i=3;i<data.length;i++){
         const box1 = `
         <div class="box1">
            <span>${i+1}</span>
            <div class="circle4"><img src="${data[i].avatar}" width="55px"></div>
            <div class="name">${data[i].name}</div>
            <div class="score">${data[i].points}</div>
        </div>
    </div>`;

    document.body.innerHTML += box1;
    
}
});