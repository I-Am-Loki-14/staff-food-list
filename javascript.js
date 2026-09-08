
const tableContent = document.getElementById('table-content');
console.log(tableContent);
const errorMessage = document.getElementById('error-message');
console.log(errorMessage);

async function photo() {
    
    try {
        console.log("Loading data...");
        
        errorMessage.innerHTML = '<h1 class="text-center font-monospace"><span class="loader text-3xl"></span></h1>'
        // const url = await fetch(' https://fakestoreapi.com/products');
        const url = await fetch(' https://script.google.com/macros/s/AKfycbwoBK7seCZfkQ_myxY2djbuApyqd3iZWkfFC2uY_bHUJ5fh_cY5WmPRUH-4LDLgdb_wGA/exec')
        const data = await url.json();
        tableContent.innerHTML = ''
         errorMessage.innerHTML = '';
        data.forEach(person => {
            console.log(person);
            row = `
           <tr>
                        <td>${person.no}</td>
                        <td>${person.list}</td>
                        <td>${person.name}</td>
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


