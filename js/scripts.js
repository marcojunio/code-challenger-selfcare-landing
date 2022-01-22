const arrImgs = [
    'chandra-oh-y5hRv6UNKMg-unsplash',
    'devin-avery-bMH8ub9z1_U-unsplash',
    'devin-avery-BRVqq2uak4E-unsplash',
    'gabrielle-henderson-1DMNn6gBbwQ-unsplash',
    'nery-montenegro-SmEty_TVr80-unsplash',
    'olena-sergienko-GOVTETevRm8-unsplash',
    'phaedra-botanicals-uFAHrKYkTVI-unsplash',
    'pharma-hemp-complex-tAzdKblAinw-unsplash',
    'pharma-hemp-complex-yVAXSK6zFIM-unsplash'
]


const createProducts = (arrImgs) => {
    arrImgs.map(element => {
        const append = `
        <div class="card">
            <img src="./assets/${element}.jpg">
            <div class="text-card">
                <h3>Lorem ipsum dolor sit</h3>
                <span class="value" ><span class="digit">R$</span> 50,00</span>
            </div>
         </div>
        `;
        document.getElementById('target-div').innerHTML += append;
    });
}


createProducts(arrImgs);