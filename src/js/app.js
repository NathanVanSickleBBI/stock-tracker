const priceChangeButton = document.querySelector('.priceChangeButton')

priceChangeButton.addEventListener('click', (e) => {
    let stockCards = document.querySelectorAll('.stock')
    // console.log(stockCards)
    stockCards.forEach(card => {
        let price = Number(card.children[2].innerHTML)
        let percentChange = Math.random() * 10
        // card.children[3].innerHTML = percentChange.toFixed(2)
        let isPositive = Math.random() > 0.5
        let change = price * (percentChange / 100)
        card.children[2].innerHTML = (isPositive ? price + change : price - change).toFixed(2)
    })
})