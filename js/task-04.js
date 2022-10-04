let counterValue = 0;

 const addValue = document.querySelector('[data-action="increment"]');
 const removeValue = document.querySelector('[data-action="decrement"]');
 const totalCount= document.getElementById('value');

 totalCount.innerHTML = counterValue;

 const increment = () => {
    counterValue++;
    totalCount.innerHTML = counterValue;
 };

 const decrement = () => {
    counterValue--;
    totalCount.innerHTML = counterValue;
 };

 addValue.addEventListener("click", increment);
 removeValue.addEventListener("click", decrement);

