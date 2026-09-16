function validateProductCode() {

    let productCode = document.getElementById("productCode").value;

    let pattern = /^#[A-Z]{4}[0-9]{3}$/;

    if (pattern.test(productCode)) {
        document.getElementById("result").innerHTML =
            "Product code verified successfully";
    } else {
        document.getElementById("result").innerHTML =
            "Product code is not valid";
    }
}
