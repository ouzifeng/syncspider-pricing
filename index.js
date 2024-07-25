const checkbox = document.getElementById("checkbox");
const professional = document.getElementById("professional");
const master = document.getElementById("master");
const basic = document.getElementById("basic");
const currencyDropdown = document.getElementById("currency-dropdown");

const prices = {
  EUR: { basic: [299, 999], professional: [599, 1999], master: [999, 2999] },
  USD: { basic: [330, 1100], professional: [660, 2200], master: [1100, 3300] },
  GBP: { basic: [250, 850], professional: [500, 1700], master: [750, 2500] }
};

function updatePrices() {
  const currency = currencyDropdown.value;
  const isQuarterly = checkbox.checked;
  const period = isQuarterly ? 1 : 0;

  basic.textContent = `${currencySymbol(currency)}${prices[currency].basic[period].toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  professional.textContent = `${currencySymbol(currency)}${prices[currency].professional[period].toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  master.textContent = `${currencySymbol(currency)}${prices[currency].master[period].toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

function currencySymbol(currency) {
  switch(currency) {
    case 'EUR':
      return '€';
    case 'GBP':
      return '£';
    default:
      return '$';
  }
}

checkbox.addEventListener("click", updatePrices);
currencyDropdown.addEventListener("change", updatePrices);

// Initial update
updatePrices();
