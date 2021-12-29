function set_data() {
    let image = $('#image').val();
    let text = $('#text').val();
    let amount = $('#amount').val();
    auction_contract_obj.methods.set_advertisement_data(amount, image, text).send({from:myaccount[0], gasPrice:web3.utils.toWei("4.1", "Gwei")},(err,res)=>{
        console.log(res)
    })

    event.preventDefault()
    return false
}

function addInIPFS(event) {
    ret = confirm("Are you sure you want to upload this file?");
    event.stopPropagation();
    event.preventDefault();
    saveToIpfs(event.target.files)
}

function saveToIpfs (files){
    ipfs.add([...files], { progress: (prog) => console.log("received:" +prog) })
        .then((response) => {
            console.log(response);
            let ipfsId = response.path;
            console.log(ipfsId);
            $("#image").val(ipfsId);
        }).catch((err) => {
        console.error(err);
    })
}