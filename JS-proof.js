// create a variable to hold your NFT's this function will take in some values as parameters, create anNFT object using the parameters passed to it for its metadata, and store it in the variable above.

let mypersonNfts = [];
function personNFT (_name,_famous,_DOB,_year,) {
    const personnewNft =
    {   "name" : _name,
        "famous" : _famous,
        "DOB" : _DOB,
        "year" : _year, 
    };
    mypersonNfts.push(personnewNft);
}

// create a "loop" that will go through an "array" of personNFT's and print their metadata with console.log()
function listNFTs () {
    for(let counter =0 ; counter<mypersonNfts.length;counter++){
        console.log(mypersonNfts[counter]);
    }
}

// print the total number of personNFTs we have minted to the console
function getTotalSupply() {
    console.log("total number of available personnfts are: "+mypersonNfts.length);
}

// call your functions below this line


personNFT("Albert","physicist",1403,1955);
personNFT("Newton","mathematician",1401,1643);
personNFT("Elon","tesla",2806,1971);
personNFT("Tata","business",2812,1937);


listNFTs();
getTotalSupply();