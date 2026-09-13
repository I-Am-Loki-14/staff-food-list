
const tableContent = document.getElementById('table-content');
console.log(tableContent);
const errorMessage = document.getElementById('error-message');
console.log(errorMessage);

async function photo() {
    
    try {
        console.log("Loading data...");
        
        errorMessage.innerHTML = '<h1 class="text-center font-monospace"><div class="loader"></div></h1>'

        const url = await fetch('https://script.google.com/macros/s/AKfycbz20rouMtqzkezfEONPzMzilCe46VsUj2ulAaPSYeqQlIJRYtmaeYvjCvwJxOjR9hZdLw/exec')
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

