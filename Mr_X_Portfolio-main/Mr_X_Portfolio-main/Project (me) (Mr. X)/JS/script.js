window.onload = function() 
{
    // Fetch data from an API when the page loads
    fetch('http://localhost:8070/api/getProjects') // Sample API
        .then(response => response.json()) // Parse the JSON response
        .then(data => 
        {
        
            // Display the fetched data
            const dataContainer = document.getElementById('projectContainer');
            data.data.forEach(post => {
                console.log(post)
                const postElement = document.createElement('div');
                const card = document.createElement('div');
                postElement.classList.add('card', 'overflow-hidden', 'shadow', 'rounded-4', 'border-0', 'mb-5','container');
                card.innerHTML=`
                                <div class="card-body p-0">

                                    <div class="d-flex align-items-center">

                                        <div class="p-5">
                                            <h2 class="fw-bolder">${post['projectName']}</h2>
                                            <p>${post['projectDescription']}</p>
                                        </div>
                                        
                                        <img class="w-50 rounded-2" src=${post['projectImage']} alt="image" />
                                    </div>

                                </div>`
                postElement.appendChild(card)
                dataContainer.appendChild(postElement);
            });
            
        })
        .catch(error => console.log('Error fetching data:', error.toString()));
};