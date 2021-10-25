
const display = async () => {

    const response = await fetch("http://localhost:8000/products");
    const data = await response.json();

    data.forEach( (data) => {
        document.querySelector("#prodName").textContent = data.Product_Name;
        document.querySelector("#prodType").textContent = data.Product_Type;
    });
}

display();