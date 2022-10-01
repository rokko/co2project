import React from "react";
import {BoxNFT, ButtonBuy, ContainerBox, TextNft, TextPrice, TitleSection} from "./Co2ListingStyled";
import Albero from '../media/albero.png'
const Co2Listing = () => {
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
                    <p>I</p>
                </div>

                <TextPrice>90€ - 101,3 MATIC</TextPrice>

                <ButtonBuy>BUY</ButtonBuy>
            </BoxNFT>
            <BoxNFT>
                <img src={Albero}  width={'80%'} />
                <div style={{display:'flex', flexDirection:'row',gap:'5rem'}}>
                    <TextNft>CO2 credit  <br/>TRADABLE</TextNft>
                    <p>I</p>
                </div>                <TextPrice>90€ - 101,3 MATIC</TextPrice>
                <ButtonBuy>BUY</ButtonBuy>



            </BoxNFT>
            <BoxNFT>
                <img src={Albero}  width={'80%'} />

                <div style={{display:'flex', flexDirection:'row',gap:'5rem'}}>
                    <TextNft>CO2 credit  <br/>TRADABLE</TextNft>
                    <p>I</p>
                </div>                <TextPrice>90€ - 101,3 MATIC</TextPrice>
                <ButtonBuy>BUY</ButtonBuy>


            </BoxNFT>
            <BoxNFT>
                <img src={Albero} width={'80%'} />


                <div style={{display:'flex', flexDirection:'row',gap:'5rem'}}>
                    <TextNft>CO2 credit  <br/>TRADABLE</TextNft>
                    <p>I</p>
                </div>                <TextPrice>90€ - 101,3 MATIC</TextPrice>
                <ButtonBuy>BUY</ButtonBuy>


            </BoxNFT>
            </ContainerBox>
        </>
    )
}

export default Co2Listing