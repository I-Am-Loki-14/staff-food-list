
const tableContent = document.getElementById('table-content');
console.log(tableContent);
const errorMessage = document.getElementById('error-message');
console.log(errorMessage);

async function photo() {
    
    try {
        console.log("Loading data...");
        
        errorMessage.innerHTML = '<h1 class="text-center font-monospace"><div class="loader"></div></h1>'

        const url = await fetch(' https://script.google.com/macros/s/AKfycbwoBK7seCZfkQ_myxY2djbuApyqd3iZWkfFC2uY_bHUJ5fh_cY5WmPRUH-4LDLgdb_wGA/exec')
        const data = await url.json();
        tableContent.innerHTML = ''
         errorMessage.innerHTML = '';
        data.forEach(person => {
            console.log(person);
            row = `
           <tr>
                        <td>${person.no}</td>
                        <td>${person.name}</td>
                        <td>${person.list}</td>
                        <td>${person.position}</td>
                        <td>${person.remark}</td>
                    </tr>
            `
           tableContent.innerHTML += row;
        });
       
        console.log("Loading complete...");
        
    } catch (error) {
        console.log("Error network...");
        errorMessage.innerHTML = '<h1 class="text-center font-monospace">Network Error...</h1>'
        
    }
}
photo()


// const tableContent = document.getElementById('table-content');
// console.log(tableContent);
// const errorMessage = document.getElementById('error-message');
// console.log(errorMessage);

// // Table ထဲ Data ထည့်ပေးသည့် သီးသန့် Function
// function renderTable(data) {
//     tableContent.innerHTML = '';
//     data.forEach(person => {
//         const row = `
//             <tr>
//                 <td>${person.no}</td>
//                 <td>${person.name}</td>
//                 <td>${person.list}</td>
//                 <td>${person.position}</td>
//                 <td>${person.remark}</td>
//             </tr>
//         `;
//         tableContent.innerHTML += row;
//     });
// }

// async function photo() {
//     try {
//         console.log("Loading data...");

//         // 1. LocalStorage ထဲတွင် အရင်သိမ်းထားသည့် Cache Data ရှိမရှိ စစ်ပါ
//         const cachedData = localStorage.getItem('canteen_data');

//         if (cachedData) {
//             // Cache Data ရှိပါက Table ထဲသို့ ချက်ချင်း (0.1 စက္ကန့်အတွင်း) ထုတ်ပြပါ
//             console.log("Showing cached data...");
//             renderTable(JSON.parse(cachedData));
//         } else {
//             // Cache မရှိသေးပါက Loading Spinner ပြပါ
//             errorMessage.innerHTML = '<h1 class="text-center font-monospace"><div class="loader"></div></h1>';
//         }

//         // 2. Google Sheet API ကနေ Data အသစ်ကို လှမ်း Fetch လုပ်ပါ
//         const url = await fetch('https://script.google.com/macros/s/AKfycbwoBK7seCZfkQ_myxY2djbuApyqd3iZWkfFC2uY_bHUJ5fh_cY5WmPRUH-4LDLgdb_wGA/exec');
//         const data = await url.json();

//         // 3. ရရှိလာသည့် Data အသစ်ကို LocalStorage ထဲသို့ သိမ်းဆည်းပါ
//         localStorage.setItem('canteen_data', JSON.stringify(data));

//         // 4. Loading ပြထားသည်များကို ရှင်းထုတ်ပြီး Table ထဲ Data အသစ် ထည့်ပြပါ
//         errorMessage.innerHTML = '';
//         renderTable(data);

//         console.log("Loading complete...");

//     } catch (error) {
//         console.log("Error network...", error);

//         // Network Error တက်သွားသော်လည်း LocalStorage ထဲ Data မရှိမှသာ Error ပြမည်
//         if (!localStorage.getItem('canteen_data')) {
//             errorMessage.innerHTML = '<h1 class="text-center font-monospace">Network Error...</h1>';
//         }
//     }
// }

// photo();