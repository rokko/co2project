import React from 'react'
import {
    ButtonMetamaskProject,
    HeaderProject,
    SecondPartHeader,
    ContainerProject,
    BoxProject,
    BoxText
} from "./ProjectStyled";
import {BoxNFT, ButtonBuy, TextNft, TextPrice} from "../co2listing/Co2ListingStyled";
import Albero from "../media/albero.png";
import {Link} from "react-router-dom";
import {useWeb3React} from "@web3-react/core";


const Project = () => {
    const { chainId, account, activate, active, library } = useWeb3React();

    return(

        <ContainerProject>
        <HeaderProject>
            <p>Progetto</p>
            <SecondPartHeader>
                <Link to={'/'}>
             <p>Home</p>
                </Link>
                <ButtonMetamaskProject style={{ whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'}}>{account? account :'Connetti Portafoglio'}</ButtonMetamaskProject>
            </SecondPartHeader>
        </HeaderProject>
            <BoxProject>
                <BoxNFT>

                    <img src={Albero}  width={'80%'}/>
                    <div style={{display:'flex', flexDirection:'row',gap:'5rem'}}>
                        <TextNft>CO2 credit  <br/>TRADABLE</TextNft>

                    </div>

                    <TextPrice>90€ - 101,3 MATIC</TextPrice>

                    <ButtonBuy>BUY</ButtonBuy>
                </BoxNFT>
            <BoxText>
                <h2>CO2 Credit</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod arcu id lobortis ultricies. Suspendisse et pellentesque lacus, nec rhoncus nibh. Maecenas condimentum lacus vitae pharetra rutrum. Sed iaculis elit lacus, a dapibus ipsum rutrum non. Aliquam porta, arcu ut eleifend dictum, felis purus dictum nunc, a varius ante est eu lacus. Phasellus iaculis, sapien a auctor porta, dui leo pretium orci, id consectetur magna magna non felis. Proin vel leo nec felis pretium cursus condimentum mattis elit.</p>
            </BoxText>
            </BoxProject>
        </ContainerProject>


    )
}

export default Project