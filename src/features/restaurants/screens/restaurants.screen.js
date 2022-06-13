import React from "react";
import { StatusBar, SafeAreaView, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import RestaurantInfoCard from "../components/restaurant-info-card.component";

const SearchArea = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const ListArea = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

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
    <ListArea
      data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
      renderItem={() => <RestaurantInfoCard />}
      keyExtractor={(item) => item.name}
      contentContainerStyle={{ padding: 16 }}
    />
  </SafeArea>
);
