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
import ABI from "../wallet/nuovo.json";
import {
  co2contract,
  handleEthereum,
  injected,
  mumbaiRete,
  polygonRete,
} from "../wallet/wallet";
import Carbon from "../media/carbon.png";

import { useWeb3React } from "@web3-react/core";
import { useMediaQuery } from "react-responsive";
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

  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  if (!isTabletOrMobile)
    return (
      <ContainerCrediti>
        <TitleSection>CREDITI CO2</TitleSection>
        <ContainerBox>
          <BoxNFT>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
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
                  CO2 credit scambiabile
                  <br />
                </TextNft>
                <Link to={"/project"}>
                  <img
                    style={{
                      position: "absolute",
                      top: "1.5rem",
                      right: "1rem",
                      width: "45px",
                    }}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEzUlEQVR4nO2bS49VRRDHfwK5hnmoPDYgMuPADG58kQk4ggb9Akx8EBYKSyVBokQTmbhgo19ilipoYmJCDOpGjY/oMCgMGxmHh5qIOyF4Lq+A46L6cqp7zly493T13Bvmn5ykkj636t91u6uru+vAPOZxR+OuBDYqwEZgCFjnnhXAEqDTvVMFzgN/AyeB34AfgTHgWgKO0dEN7AS+QDo33eRTdTp2Al1Je9Ak+oFRIKP5Ts/2ZE53f0zCsaZAL/AesA1YWNA+CXwNTCDD+3dkyGeuvQtYCvQgU+RRYIuTQ9wAPgZGgD8i8W8aFWAfxcP8GPAGsKqE/lXAXuB4gf6qs10pob8U1gBHA1L/AYeAJwzsDQGfORva5rjjkhTDwIWAyBFgMIHtDcx0/AXHKQl2IfOwZvwysBtYkIoAEmf2ONs1HtcdN1OM4Ht+EglYc4XHgamA04iVsVcDQ2PAcitjDWAJ8D0+tz2xjQzjD/vPgY7YRkqgA0mY9HSIFhPW4Ae8n8hT2FbCYuA7cp4XgYGySiv4EXcSGXKtimX4MWGcknmCDnqXkaDT6ngEuETO++1mFfXiZ3i7Y7BLhNfxM8aeZpQcUEqOkHadL4uFwM/k/D9oVEE/Eklr6a1FhjcAnAFOE3mH5zCEvyqsbeTHo+rHh6JTE+j4ss/IxmFlY/R2f9SNv5+32NgA7Fc29hvZ2KRsZBQcqhTN6+fJ1/ljyLrfrvgBOOHkTuC58IUiB2xX8vsGpGo4reRThnZ0H7bP+pZDBX/pK3OYcSssAF5yj+UKsxp/GtRNjJ5WL/9qSCo1dHb4lG4IPa8D3jfGpFLiKyV7QT10wENKnjCjkx4nlOwdtIYO0I2TZnTSQ/elrgNWKvmsGR2BdSaocUbJ9+uG0AHdSv7XjI7gBeBBoM/JlrioZN3HOXWAXo7uNral+1LXAXccQgdkSm6Ly8jbxKwjO3SAniv3mtFJj3uUXNcB55Tca0YnPfqU/JduCB1wUslFN7Ptilnzm9ABuvExMzrpoW+v6jpA7/23mNFJj2eV7J1vFDngkpPXAQ8YkkqFHvLr8ypypXcToQOuIbcrNbxoxysZtin5W4Kiq6JE6CMlv2zBKDF0Hw6GjUUO+AQZKiCB8EkDUqmwGXjYyVXg0/CFIgdk+J6yum/XQ/GqkY13lHwQP9Oti/BiZENcXoBsh0+5x2I7rI/EG74YAfhQKThKcflbq2IRcqTf9NUYyPKhT4ijV10YYi/+SfDqZhXp66srwPoY7IwxiHAtfT0OcmgxrpRNIUUIrYrlyBFbtAIJmFkiM0ZrnhV0IFdhNZ7n8XeBpTBMvipMIwVJrVQk1Ql8iR/1t8Y28ooy0Eplckvx//lp4DUrY2Gh5BRzGxgH8ee8Za3BTezCnw5XkJqclHnCImSp09H+OlLMmQRbmVks/QtSlmKNTfhJTq1YOvqcvxX68JfI2nPYkYyNzUiFamhvnIjRvlHU+2BiAniTElkYko2+hVxuhvozJMkptc7H+mSmB3gXqcAoigVTyHX7cfJPZv7B/2RmmdMzgGzDn6F4A3MDObMYAf6MxD8a1mL/0VTDu7q5QBewA4kHZZyROR07MMo+U384OYActq4E7iPvVIZE8nPIsXXbfzg5j3m0Cf4HBLu4ZVlCsncAAAAASUVORK5CYII="
                  />
                </Link>
              </div>
              <TextPrice>90€ - 101,3 MATIC</TextPrice>
            </div>

            <ButtonBuy onClick={() => Buy()}>ACQUISTA</ButtonBuy>
          </BoxNFT>
          <BoxNFT>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
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
                  CO2 credit uso singolo <br />
                </TextNft>
                <Link to={"/project2"}>
                  <img
                    style={{
                      position: "absolute",
                      top: "1.5rem",
                      right: "1rem",
                      width: "45px",
                    }}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEzUlEQVR4nO2bS49VRRDHfwK5hnmoPDYgMuPADG58kQk4ggb9Akx8EBYKSyVBokQTmbhgo19ilipoYmJCDOpGjY/oMCgMGxmHh5qIOyF4Lq+A46L6cqp7zly493T13Bvmn5ykkj636t91u6uru+vAPOZxR+OuBDYqwEZgCFjnnhXAEqDTvVMFzgN/AyeB34AfgTHgWgKO0dEN7AS+QDo33eRTdTp2Al1Je9Ak+oFRIKP5Ts/2ZE53f0zCsaZAL/AesA1YWNA+CXwNTCDD+3dkyGeuvQtYCvQgU+RRYIuTQ9wAPgZGgD8i8W8aFWAfxcP8GPAGsKqE/lXAXuB4gf6qs10pob8U1gBHA1L/AYeAJwzsDQGfORva5rjjkhTDwIWAyBFgMIHtDcx0/AXHKQl2IfOwZvwysBtYkIoAEmf2ONs1HtcdN1OM4Ht+EglYc4XHgamA04iVsVcDQ2PAcitjDWAJ8D0+tz2xjQzjD/vPgY7YRkqgA0mY9HSIFhPW4Ae8n8hT2FbCYuA7cp4XgYGySiv4EXcSGXKtimX4MWGcknmCDnqXkaDT6ngEuETO++1mFfXiZ3i7Y7BLhNfxM8aeZpQcUEqOkHadL4uFwM/k/D9oVEE/Eklr6a1FhjcAnAFOE3mH5zCEvyqsbeTHo+rHh6JTE+j4ss/IxmFlY/R2f9SNv5+32NgA7Fc29hvZ2KRsZBQcqhTN6+fJ1/ljyLrfrvgBOOHkTuC58IUiB2xX8vsGpGo4reRThnZ0H7bP+pZDBX/pK3OYcSssAF5yj+UKsxp/GtRNjJ5WL/9qSCo1dHb4lG4IPa8D3jfGpFLiKyV7QT10wENKnjCjkx4nlOwdtIYO0I2TZnTSQ/elrgNWKvmsGR2BdSaocUbJ9+uG0AHdSv7XjI7gBeBBoM/JlrioZN3HOXWAXo7uNral+1LXAXccQgdkSm6Ly8jbxKwjO3SAniv3mtFJj3uUXNcB55Tca0YnPfqU/JduCB1wUslFN7Ptilnzm9ABuvExMzrpoW+v6jpA7/23mNFJj2eV7J1vFDngkpPXAQ8YkkqFHvLr8ypypXcToQOuIbcrNbxoxysZtin5W4Kiq6JE6CMlv2zBKDF0Hw6GjUUO+AQZKiCB8EkDUqmwGXjYyVXg0/CFIgdk+J6yum/XQ/GqkY13lHwQP9Oti/BiZENcXoBsh0+5x2I7rI/EG74YAfhQKThKcflbq2IRcqTf9NUYyPKhT4ijV10YYi/+SfDqZhXp66srwPoY7IwxiHAtfT0OcmgxrpRNIUUIrYrlyBFbtAIJmFkiM0ZrnhV0IFdhNZ7n8XeBpTBMvipMIwVJrVQk1Ql8iR/1t8Y28ooy0Eplckvx//lp4DUrY2Gh5BRzGxgH8ee8Za3BTezCnw5XkJqclHnCImSp09H+OlLMmQRbmVks/QtSlmKNTfhJTq1YOvqcvxX68JfI2nPYkYyNzUiFamhvnIjRvlHU+2BiAniTElkYko2+hVxuhvozJMkptc7H+mSmB3gXqcAoigVTyHX7cfJPZv7B/2RmmdMzgGzDn6F4A3MDObMYAf6MxD8a1mL/0VTDu7q5QBewA4kHZZyROR07MMo+U384OYActq4E7iPvVIZE8nPIsXXbfzg5j3m0Cf4HBLu4ZVlCsncAAAAASUVORK5CYII="
                  />
                </Link>
              </div>
              <TextPrice>90€ - 101,3 MATIC</TextPrice>
            </div>

            <ButtonBuy onClick={() => Buy()}>ACQUISTA</ButtonBuy>
          </BoxNFT>
        </ContainerBox>
      </ContainerCrediti>
    );
  else
    return (
      <>
        <ContainerCrediti>
          <TitleSection>CREDITI CO2</TitleSection>
          <ContainerBox
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "100%",
            }}
          >
            <BoxNFT style={{ width: "350px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img src={Carbon} width={"350px"} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "5rem",
                    position: "relative",
                  }}
                >
                  <TextNft style={{ marginLeft: "20px" }}>
                    CO2 credit scambiabile
                    <br />
                  </TextNft>
                  <Link to={"/project"}>
                    <img
                      style={{
                        position: "absolute",
                        top: "1.5rem",
                        right: "1rem",
                        width: "45px",
                      }}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEzUlEQVR4nO2bS49VRRDHfwK5hnmoPDYgMuPADG58kQk4ggb9Akx8EBYKSyVBokQTmbhgo19ilipoYmJCDOpGjY/oMCgMGxmHh5qIOyF4Lq+A46L6cqp7zly493T13Bvmn5ykkj636t91u6uru+vAPOZxR+OuBDYqwEZgCFjnnhXAEqDTvVMFzgN/AyeB34AfgTHgWgKO0dEN7AS+QDo33eRTdTp2Al1Je9Ak+oFRIKP5Ts/2ZE53f0zCsaZAL/AesA1YWNA+CXwNTCDD+3dkyGeuvQtYCvQgU+RRYIuTQ9wAPgZGgD8i8W8aFWAfxcP8GPAGsKqE/lXAXuB4gf6qs10pob8U1gBHA1L/AYeAJwzsDQGfORva5rjjkhTDwIWAyBFgMIHtDcx0/AXHKQl2IfOwZvwysBtYkIoAEmf2ONs1HtcdN1OM4Ht+EglYc4XHgamA04iVsVcDQ2PAcitjDWAJ8D0+tz2xjQzjD/vPgY7YRkqgA0mY9HSIFhPW4Ae8n8hT2FbCYuA7cp4XgYGySiv4EXcSGXKtimX4MWGcknmCDnqXkaDT6ngEuETO++1mFfXiZ3i7Y7BLhNfxM8aeZpQcUEqOkHadL4uFwM/k/D9oVEE/Eklr6a1FhjcAnAFOE3mH5zCEvyqsbeTHo+rHh6JTE+j4ss/IxmFlY/R2f9SNv5+32NgA7Fc29hvZ2KRsZBQcqhTN6+fJ1/ljyLrfrvgBOOHkTuC58IUiB2xX8vsGpGo4reRThnZ0H7bP+pZDBX/pK3OYcSssAF5yj+UKsxp/GtRNjJ5WL/9qSCo1dHb4lG4IPa8D3jfGpFLiKyV7QT10wENKnjCjkx4nlOwdtIYO0I2TZnTSQ/elrgNWKvmsGR2BdSaocUbJ9+uG0AHdSv7XjI7gBeBBoM/JlrioZN3HOXWAXo7uNral+1LXAXccQgdkSm6Ly8jbxKwjO3SAniv3mtFJj3uUXNcB55Tca0YnPfqU/JduCB1wUslFN7Ptilnzm9ABuvExMzrpoW+v6jpA7/23mNFJj2eV7J1vFDngkpPXAQ8YkkqFHvLr8ypypXcToQOuIbcrNbxoxysZtin5W4Kiq6JE6CMlv2zBKDF0Hw6GjUUO+AQZKiCB8EkDUqmwGXjYyVXg0/CFIgdk+J6yum/XQ/GqkY13lHwQP9Oti/BiZENcXoBsh0+5x2I7rI/EG74YAfhQKThKcflbq2IRcqTf9NUYyPKhT4ijV10YYi/+SfDqZhXp66srwPoY7IwxiHAtfT0OcmgxrpRNIUUIrYrlyBFbtAIJmFkiM0ZrnhV0IFdhNZ7n8XeBpTBMvipMIwVJrVQk1Ql8iR/1t8Y28ooy0Eplckvx//lp4DUrY2Gh5BRzGxgH8ee8Za3BTezCnw5XkJqclHnCImSp09H+OlLMmQRbmVks/QtSlmKNTfhJTq1YOvqcvxX68JfI2nPYkYyNzUiFamhvnIjRvlHU+2BiAniTElkYko2+hVxuhvozJMkptc7H+mSmB3gXqcAoigVTyHX7cfJPZv7B/2RmmdMzgGzDn6F4A3MDObMYAf6MxD8a1mL/0VTDu7q5QBewA4kHZZyROR07MMo+U384OYActq4E7iPvVIZE8nPIsXXbfzg5j3m0Cf4HBLu4ZVlCsncAAAAASUVORK5CYII="
                    />
                  </Link>
                </div>
                <TextPrice style={{ marginLeft: "20px" }}>
                  90€ - 101,3 MATIC
                </TextPrice>
              </div>

              <ButtonBuy onClick={() => Buy()}>ACQUISTA</ButtonBuy>
            </BoxNFT>
            <BoxNFT style={{ width: "350px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img src={Carbon} width={"350px"} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "5rem",
                    position: "relative",
                  }}
                >
                  <TextNft style={{ marginLeft: "20px" }}>
                    CO2 credit uso singolo <br />
                  </TextNft>
                  <Link to={"/project2"}>
                    <img
                      style={{
                        position: "absolute",
                        top: "1.5rem",
                        right: "1rem",
                        width: "45px",
                      }}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEzUlEQVR4nO2bS49VRRDHfwK5hnmoPDYgMuPADG58kQk4ggb9Akx8EBYKSyVBokQTmbhgo19ilipoYmJCDOpGjY/oMCgMGxmHh5qIOyF4Lq+A46L6cqp7zly493T13Bvmn5ykkj636t91u6uru+vAPOZxR+OuBDYqwEZgCFjnnhXAEqDTvVMFzgN/AyeB34AfgTHgWgKO0dEN7AS+QDo33eRTdTp2Al1Je9Ak+oFRIKP5Ts/2ZE53f0zCsaZAL/AesA1YWNA+CXwNTCDD+3dkyGeuvQtYCvQgU+RRYIuTQ9wAPgZGgD8i8W8aFWAfxcP8GPAGsKqE/lXAXuB4gf6qs10pob8U1gBHA1L/AYeAJwzsDQGfORva5rjjkhTDwIWAyBFgMIHtDcx0/AXHKQl2IfOwZvwysBtYkIoAEmf2ONs1HtcdN1OM4Ht+EglYc4XHgamA04iVsVcDQ2PAcitjDWAJ8D0+tz2xjQzjD/vPgY7YRkqgA0mY9HSIFhPW4Ae8n8hT2FbCYuA7cp4XgYGySiv4EXcSGXKtimX4MWGcknmCDnqXkaDT6ngEuETO++1mFfXiZ3i7Y7BLhNfxM8aeZpQcUEqOkHadL4uFwM/k/D9oVEE/Eklr6a1FhjcAnAFOE3mH5zCEvyqsbeTHo+rHh6JTE+j4ss/IxmFlY/R2f9SNv5+32NgA7Fc29hvZ2KRsZBQcqhTN6+fJ1/ljyLrfrvgBOOHkTuC58IUiB2xX8vsGpGo4reRThnZ0H7bP+pZDBX/pK3OYcSssAF5yj+UKsxp/GtRNjJ5WL/9qSCo1dHb4lG4IPa8D3jfGpFLiKyV7QT10wENKnjCjkx4nlOwdtIYO0I2TZnTSQ/elrgNWKvmsGR2BdSaocUbJ9+uG0AHdSv7XjI7gBeBBoM/JlrioZN3HOXWAXo7uNral+1LXAXccQgdkSm6Ly8jbxKwjO3SAniv3mtFJj3uUXNcB55Tca0YnPfqU/JduCB1wUslFN7Ptilnzm9ABuvExMzrpoW+v6jpA7/23mNFJj2eV7J1vFDngkpPXAQ8YkkqFHvLr8ypypXcToQOuIbcrNbxoxysZtin5W4Kiq6JE6CMlv2zBKDF0Hw6GjUUO+AQZKiCB8EkDUqmwGXjYyVXg0/CFIgdk+J6yum/XQ/GqkY13lHwQP9Oti/BiZENcXoBsh0+5x2I7rI/EG74YAfhQKThKcflbq2IRcqTf9NUYyPKhT4ijV10YYi/+SfDqZhXp66srwPoY7IwxiHAtfT0OcmgxrpRNIUUIrYrlyBFbtAIJmFkiM0ZrnhV0IFdhNZ7n8XeBpTBMvipMIwVJrVQk1Ql8iR/1t8Y28ooy0Eplckvx//lp4DUrY2Gh5BRzGxgH8ee8Za3BTezCnw5XkJqclHnCImSp09H+OlLMmQRbmVks/QtSlmKNTfhJTq1YOvqcvxX68JfI2nPYkYyNzUiFamhvnIjRvlHU+2BiAniTElkYko2+hVxuhvozJMkptc7H+mSmB3gXqcAoigVTyHX7cfJPZv7B/2RmmdMzgGzDn6F4A3MDObMYAf6MxD8a1mL/0VTDu7q5QBewA4kHZZyROR07MMo+U384OYActq4E7iPvVIZE8nPIsXXbfzg5j3m0Cf4HBLu4ZVlCsncAAAAASUVORK5CYII="
                    />
                  </Link>
                </div>
                <TextPrice style={{ marginLeft: "20px" }}>
                  90€ - 101,3 MATIC
                </TextPrice>
              </div>

              <ButtonBuy onClick={() => Buy()}>ACQUISTA</ButtonBuy>
            </BoxNFT>
          </ContainerBox>
        </ContainerCrediti>
      </>
    );
};

export default Co2Listing;
