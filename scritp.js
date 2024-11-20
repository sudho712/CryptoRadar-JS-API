var settings = {
    async: true,
    crossDomain: true, // Corrected the typo from "scrossDomain"
    url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd",
    method: "GET", // Fixed "methid" typo
    headers: {}
};

$.ajax(settings).done(function(response) { // Fixed "funtion" typo
    console.log(response);
    document.getElementById('btc-price').innerText = `$${response.bitcoin.usd}`;
    document.getElementById('eth-price').innerText = `$${response.ethereum.usd}`;
    document.getElementById('doge-price').innerText = `$${response.dogecoin.usd}`;
});
