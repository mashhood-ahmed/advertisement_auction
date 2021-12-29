let auctionContractAddr = "0x7588Cf8e3950463726BC5802134303E28936Cb54";

let auction_contract_obj = "";

const initilizeMainContract = async (web3) => {
    const auction_data = await $.getJSON('./js/contracts/AdvertisementAuction.json');
    auction_contract_obj = await new web3.eth.Contract(auction_data.abi, auctionContractAddr);
    console.log("charity org contract object is loaded " + auction_contract_obj);
    return auction_contract_obj;
}

async function initSetup() {
    const web3 = await getWeb3();
    await initilizeMainContract(web3);
    try{
        loadPage();
    }
    catch(error){
        console.log("Load page is not defined by child page :"+error);
    }
}

initSetup();
