import React from "react";
import { nanoid } from "nanoid";
import * as Styled from "./styles";
import CatFact from "./CatFact";

const AppView = ({
  isLoading,
  catData,
  setCatData,
  handleGetData,
  fetchError,
}) => (
  <Styled.Page>
    <Styled.Header>
      <Styled.Logo src="https://placekitten.com/140/70" alt="" />
    </Styled.Header>
    <Styled.Main>
      <Styled.SideNav>I'm a sidenav</Styled.SideNav>
      <Styled.Primary>
        {catData.length === 0 && !isLoading && (
          <button onClick={handleGetData}>
            Load me up with some random facts about cats
          </button>
        )}
        {isLoading && <Styled.LoadingAnimation />}
        {fetchError && (
          <Styled.ErrorText>
            Oops - something's not working properly! Have another go 🤞
          </Styled.ErrorText>
        )}
        {catData.length > 0 &&
          catData.map((item, i) => (
            <CatFact
              pageOrderIndex={i}
              key={nanoid()}
              text={item.text}
              isVerified={item.status.verified}
              catData={catData}
              setCatData={setCatData}
            />
          ))}
      </Styled.Primary>
    </Styled.Main>
    <Styled.Footer>
      <p>
        Footer with lots of useful things like{" "}
        <a href="https://twitter.com/herrmanndigital/status/1375883064052641794?s=20">
          this link of a guy dancing
        </a>
      </p>
    </Styled.Footer>
  </Styled.Page>
);

export default AppView;
