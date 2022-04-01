export default function initFetchBitcoin() {
  const link = 'https://blockchain.info/ticker';
  const btcPreco = document.querySelector('.btc-preco');

  async function fetchBitcoin(url) {
    try {
      const responseBitcoin = await fetch(url);

      const BitcoinJSON = await responseBitcoin.json();

      btcPreco.innerText = (1000 / BitcoinJSON.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(Error(erro));
    }
  }
  fetchBitcoin(link);
}
