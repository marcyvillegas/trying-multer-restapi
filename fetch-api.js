
const display = async () => {

    const response = await fetch("http://localhost:8000/products/all");
    const data = await response.json();

    let output = "";
    let container = document.querySelector(".container");

    data.forEach((data) => {
        // document.querySelector("#prodName").textContent = data.Product_Name;
        // document.querySelector("#prodType").textContent = data.Product_Type;
        // document.querySelector("#prodImg").textContent = data.Product_Img;

        let content = `
        
        <div class="">
        <p>Product Name: <span id="prodName">${data.Product_Name}</span></p>
    </div>

    <div>
        <p>Product Type: <span id="prodType">${data.Product_Type}</span></p>
    </div>

    <div>
        <img src="${data.Product_Img}" alt="">
    </div>
        
        `;

        container.innerHTML = content;
    });
}

display();