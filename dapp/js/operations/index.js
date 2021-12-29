function get_data() {
    auction_contract_obj.methods.get_advertisement_data().call( (error, result) => {
        if(result) {
            let image_cid = result[0]
            let content = result[1]
            get_owner()
            get_amount()
            $('#content').html(content)
            if(image_cid) {
                $('#my_img').removeAttr('src')
                $('#my_img').attr('src', `https://ipfs.io/ipfs/${image_cid}`)
            }
            console.log(result)
        }
    } )
}

function get_owner() {
    auction_contract_obj.methods.get_contract_owner_addr().call((err, res) => {
        $('#owner').html(res)
    })
}

function get_amount() {
    auction_contract_obj.methods.get_advertisement_amount().call((err, res) => {
        $('#amount').html(res)
    })
}

// async function loadImage(validCID) {
//     for await (const file of ipfs.get(validCID)) {
//       console.log(file.path)
//       console.log(file);
//       //files.forEach((file) => {
//         console.log(file.path);
//         const content = []
//         if(file.content) {
//           for await (const chunk of file.content) {
//               content.push(chunk)
//           }
//       }
//         document.getElementById('myImg').src = URL.createObjectURL(
//           new Blob(content, { type: 'image/jpeg' } /* (1) */)
//         );
//     }
//   }

function loadPage() {
    get_data()
}