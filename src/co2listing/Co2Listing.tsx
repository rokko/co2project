import React from "react";
import {BoxNFT, ContainerBox, TitleSection} from "./Co2ListingStyled";
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

            </BoxNFT>
            <BoxNFT>
                <img src={Albero}  width={'80%'} />


            </BoxNFT>
            <BoxNFT>
                <img src={Albero}  width={'80%'} />


            </BoxNFT>
            <BoxNFT>
                <img src={Albero} width={'80%'} />


            </BoxNFT>
            </ContainerBox>
        </>
    )
}

export default Co2Listing