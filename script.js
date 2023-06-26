let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let current = document.querySelector('.visible');

next.addEventListener('click', nextNumber);
prev.addEventListener('click', prevNumber)

function nextNumber() {
    current.classList.add('hidden');
    current.classList.remove('visible')

    switch (current.id) {
        case "8":
            current = document.getElementById(`1`);
            current.classList.add('visible')
            console.log(current)
            break;
        default:
            current = document.getElementById(`${Number(current.id) + 1}`);
            current.classList.add('visible')
            console.log(current)
            break;
      }
}

function prevNumber() {

    current.classList.add('hidden');
    current.classList.remove('visible')

    switch (current.id) {
        case "1":
            current = document.getElementById(`8`);
            current.classList.add('visible')
            console.log(current)
            break;
        default:
            current = document.getElementById(`${Number(current.id) - 1}`);
            current.classList.add('visible')
            console.log(current)
            break;
      }
}



// prev.addEventListener('click', () =>{
//     current.classList.add("hidden")
//     current.classList.remove("visible")
//     qeued.classList.add("hidden")
//     qeued.classList.remove("visible")
// }) 
// next.addEventListener('click', () => {
//     qeued.classList.add("visible")
//     qeued.classList.remove("hidden")
//     current.classList.add("hidden")
//     current.classList.remove("visible")
//     console.log(current[0].id)
// })