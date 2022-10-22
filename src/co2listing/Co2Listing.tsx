import React from "react";
import {
  BoxNFT,
  ButtonBuy,
  ContainerBox,
  TextNft,
  TextPrice,
  TitleSection,
  ContainerCrediti,
} from "./Co2ListingStyled";
import Albero from "../media/albero.png";
import { Link } from "react-router-dom";
import ABI from "../wallet/lastAbi.json";
import {
  co2contract,
  handleEthereum,
  injected,
  mumbaiRete,
  polygonRete,
} from "../wallet/wallet";
import Carbon from "../media/carbon.jpeg";

import { useWeb3React } from "@web3-react/core";
var Contract = require("web3-eth-contract");
const Web3Utils = require("web3-utils");
const Co2Listing = () => {
  Contract.setProvider(window.ethereum);
  const contract = new Contract(ABI, co2contract);
  const { chainId, account, activate, active, library } = useWeb3React();

  const Buy = async () => {
    try {
      const value = 0.1 * 1;
      await contract.methods
        .buyToken(account, 1)
        .send({ from: account, value: Web3Utils.toWei(`${value}`, "ether") })
        .then((e: any) => {
          if (e?.status === true) {
            console.log("ok");
          }
        });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <ContainerCrediti>
      <TitleSection>CREDITI CO2</TitleSection>
      <ContainerBox>
        <BoxNFT>
          <img src={Carbon} width={"350px"} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "5rem",
              position: "relative",
            }}
          >
            <TextNft>
              CO2 credit <br />
            </TextNft>
            <Link to={"/project"}>
              <img
                style={{ position: "absolute", top: "1rem" }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABaUlEQVRIid2VPU7DQBCFPxzFDeEKHCDhDoQCShQilCtERAjIJVDEGaDi5zCIhoDABGjhAKYgBTHFzOIV2rXXSZcnjTbyzL63eZ5Zw7IjBnrADZAAXxoJcK25eF7yLvAOZCXxBuxVIY6AM4vgHjgCmsCqRgs4BsZW3Uj3lsKQfwP9kk0RcKC1RqQQXYt8M+Q0irYl0vEVxeSe9z01xg4XBpp7Bequgh655z5bigRqwIPm981Dm8h0wjkw85CsaLjwA1zob6dNL6re9BCEoKUciSuZarJRQFBkEcCa5lPzIKhvK8DY92exLfCh6/oCAmbvp0vgTtftBQR2dL11JU2bjpm/TR/516Y2YuTiypDxrypwqLkJnkEDmQVzVbR9RQ5sAVPk5e6WFY8skQHy132oISef6p7TkNNElkiGjP8JMkQNjQ1gSO75TMkrtX0HubjKPjgTAmzxoY50xBXwjExoCjwBl5rzvtDlwC8o13JbRpxVtAAAAABJRU5ErkJggg=="
              />
            </Link>
          </div>
          <TextPrice>90€ - 101,3 MATIC</TextPrice>

          <ButtonBuy onClick={() => Buy()}>ACQUISTA</ButtonBuy>
        </BoxNFT>

        <BoxNFT>
          <img src={Carbon} width={"80%"} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "5rem",
              position: "relative",
            }}
          >
            <TextNft>
              CO2 credit <br />
            </TextNft>
            <Link to={"/project"}>
              <img
                style={{ position: "absolute", top: "1rem" }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABaUlEQVRIid2VPU7DQBCFPxzFDeEKHCDhDoQCShQilCtERAjIJVDEGaDi5zCIhoDABGjhAKYgBTHFzOIV2rXXSZcnjTbyzL63eZ5Zw7IjBnrADZAAXxoJcK25eF7yLvAOZCXxBuxVIY6AM4vgHjgCmsCqRgs4BsZW3Uj3lsKQfwP9kk0RcKC1RqQQXYt8M+Q0irYl0vEVxeSe9z01xg4XBpp7Bequgh655z5bigRqwIPm981Dm8h0wjkw85CsaLjwA1zob6dNL6re9BCEoKUciSuZarJRQFBkEcCa5lPzIKhvK8DY92exLfCh6/oCAmbvp0vgTtftBQR2dL11JU2bjpm/TR/516Y2YuTiypDxrypwqLkJnkEDmQVzVbR9RQ5sAVPk5e6WFY8skQHy132oISef6p7TkNNElkiGjP8JMkQNjQ1gSO75TMkrtX0HubjKPjgTAmzxoY50xBXwjExoCjwBl5rzvtDlwC8o13JbRpxVtAAAAABJRU5ErkJggg=="
              />
            </Link>
          </div>
          <TextPrice>90€ - 101,3 MATIC</TextPrice>

          <ButtonBuy onClick={() => Buy()}>ACQUISTA</ButtonBuy>
        </BoxNFT>
      </ContainerBox>
    </ContainerCrediti>
  );
};

export default Co2Listing;
