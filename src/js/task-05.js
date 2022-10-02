const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

const newInput = (xyz) => {
    console.log(xyz.currentTarget.value);
    output.textContent = xyz.currentTarget.value;

    if (xyz.currentTarget.value === "") {
        output.textContent = 'Anonymous'
    }
}
input.addEventListener("input", newInput);