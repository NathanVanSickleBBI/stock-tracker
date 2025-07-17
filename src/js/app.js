const priceChangeButton = document.querySelector(".priceChangeButton");

priceChangeButton.addEventListener("click", (e) => {
  const stockCards = document.querySelectorAll(".stock");

  stockCards.forEach((card) => {
    const priceElement = card.querySelector(".price");
    const changeElement = card.querySelector(".change");

    const price = parseFloat(Number(priceElement.textContent).toFixed(2));
    const percentChange = Math.random() * 10;
    const isPositive = Math.random() > 0.5;
    const delta = price * (percentChange / 100);

    priceElement.textContent = `${
      isPositive ? (price + delta).toFixed(2) : (price - delta).toFixed(2)
    }`;

    changeElement.textContent = `${isPositive ? "+" : "-"}${parseFloat(
      percentChange
    ).toFixed(2)}% today`;
  });
});
