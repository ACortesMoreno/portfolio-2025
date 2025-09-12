document.addEventListener('DOMContentLoaded', () => {
    // DOM
    const asideHeader = document.getElementById('aside-header');

    // Functions
    const getRandomNumber = () => Math.floor(Math.random() * 11);
    const isPair = (n) => n % 2 === 0;

    const changeProfileConection = () => {
        const F = isPair(getRandomNumber());

        if (F) {
            asideHeader.innerHTML = `
            <div class="online">
            <div class="online-circle"></div>
            <p class="online-text">En Linea</p>
            </div>
        
        `;
            return;
        }
    }
    console.log('hola')
    changeProfileConection();


})
