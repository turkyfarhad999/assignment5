const loadAlldata=()=>{
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then(res=>res.json())
    .then(i=>showData(i.data))
}

// "id": 1,
// "title": "Fix navigation menu on mobile devices",
// "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
// "status": "open",
// "labels": [
// "bug",
// "help wanted"
// ],
// "priority": "high",
// "author": "john_doe",
// "assignee": "jane_smith",
// "createdAt": "2024-01-15T10:30:00Z",
// "updatedAt": "2024-01-15T10:30:00Z"

const showData=(data)=>{
console.log(data);
const container=document.getElementById("card-container")
container.innerHTML=""
for(const i of data){
    
    const card=document.createElement("div")
   
    
    card.innerHTML=`
     <div class="space-y-3 shadow-sm p-5 rounded-lg">
            <div class="flex justify-between">
                <img id="topimg" src="./assets/Open-Status.png" alt="" class="topimg">
                <btn class="px-5 py-1 rounded-lg bg-[#FEECEC] text-[#EF4444] text-[12px] ">${i.priority}</btn>
            </div>
            <h1 class="font-semibold text-[14px] ">${i.title}</h1>
            <p class="text-[#64748B] text-[12px]">${i.description}</p>
            <div class="flex flex-wrap gap2 py-3 border-b border-b-[#E4E4E7]">
                <btn class="px-5 rounded-lg bg-[#FEECEC] text-[#EF4444] text-[12px]"><i class="fa-solid fa-bug"></i>  BUG</btn>
                <btn class="px-5 rounded-lg text-[#D97706] bg-[#FDE68A] text-[12px]"><i class="fa-solid fa-virus"></i> Help Wanter</btn>
            </div>
            <p class="text-[#64748B] text-[12px]">#${i.author}</p>
            <p class="text-[#64748B] text-[12px]">${i.createdAt}</p>

        </div>
    `
     if(i.status==='open'){
        card.style.borderTop="4px solid #00A96E";
        card.style.borderRadius="10px"
    
    }
    else{
        card.style.borderTop="4px solid #A855F7";
          card.style.borderRadius="10px"
          card.querySelector(".topimg").src="./assets/Closed- Status .png"
    }
    container.appendChild(card)
}
}
loadAlldata()