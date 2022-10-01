import React from "react";
import {BoxNFT, ButtonBuy, ContainerBox, TextNft, TextPrice, TitleSection} from "./Co2ListingStyled";
import Albero from '../media/albero.png'
import {Link} from "react-router-dom";
import ABI from "../wallet/abi_co2.json";
import {co2contract, handleEthereum, injected, mumbaiRete, polygonRete} from "../wallet/wallet";
import {useWeb3React} from "@web3-react/core";
var Contract = require("web3-eth-contract");
const Web3Utils = require("web3-utils");

const Co2Listing = () => {
    Contract.setProvider(window.ethereum);
    const contract = new Contract(ABI, co2contract);
    const { chainId, account, activate, active, library } = useWeb3React();

    const Buy =async () =>  {

        try {
            const value = 0.1 * 1;
            await contract.methods
                .buyToken(account, 1)
                .send({ from: account, value: Web3Utils.toWei(`${value}`, "ether") })
                .then((e:any) => {
                    if (e?.status === true) {
                      console.log('ok')
                    }
                });
        } catch (e) {
            console.log(e);
        }
    }
    return(
        <>
        <TitleSection>
            CO2 credits listing
        </TitleSection>
            <ContainerBox>
            <BoxNFT>

                <img src={Albero}  width={'80%'}/>
                <div style={{display:'flex', flexDirection:'row',gap:'5rem'}}>
<TextNft>CO2 credit  <br/>TRADABLE</TextNft>
                    <Link to={'/project'}> <p>I</p></Link>
                </div>

                <TextPrice>90€ - 101,3 MATIC</TextPrice>

                <ButtonBuy onClick={()=> Buy()}>BUY</ButtonBuy>
            </BoxNFT>
            <BoxNFT>
                <img src={Albero}  width={'80%'} />
                <div style={{display:'flex', flexDirection:'row',gap:'5rem'}}>
                    <TextNft>CO2 credit  <br/>TRADABLE</TextNft>
                    <Link to={'/project'}> <p>I</p></Link>
                </div>                <TextPrice>90€ - 101,3 MATIC</TextPrice>
                <ButtonBuy onClick={()=> Buy()}>BUY</ButtonBuy>



            </BoxNFT>
            <BoxNFT>
                <img src={Albero}  width={'80%'} />

                <div style={{display:'flex', flexDirection:'row',gap:'5rem'}}>
                    <TextNft>CO2 credit  <br/>TRADABLE</TextNft>
                    <Link to={'/project'}> <p>I</p></Link>
                </div>                <TextPrice>90€ - 101,3 MATIC</TextPrice>
                <ButtonBuy onClick={()=> Buy()}>BUY</ButtonBuy>


            </BoxNFT>
            <BoxNFT>
                <img src={Albero} width={'80%'} />


                <div style={{display:'flex', flexDirection:'row',gap:'5rem'}}>
                    <TextNft>CO2 credit  <br/>TRADABLE</TextNft>
                    <Link to={'/project'}> <p>I</p></Link>
                </div>                <TextPrice>90€ - 101,3 MATIC</TextPrice>
                <ButtonBuy onClick={()=> Buy()}>BUY</ButtonBuy>


            </BoxNFT>
            </ContainerBox>
        </>
    )
}

export default Co2Listing