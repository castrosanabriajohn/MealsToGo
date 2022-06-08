import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import RestaurantInfoCard from "../components/restaurant-info.component";

const SearchArea = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const ListArea = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;
// if StatusBar.currentHeight has a value then add margin-top set to that value + pixels
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}`}px;
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchArea>
      <Searchbar />
    </SearchArea>
    <ListArea>
      <RestaurantInfoCard />
    </ListArea>
  </SafeArea>
);
