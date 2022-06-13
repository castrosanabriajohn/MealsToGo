import React from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

const SearchArea = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const ListArea = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

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
