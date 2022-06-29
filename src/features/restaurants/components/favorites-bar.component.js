import React from "react";
import styled from "styled-components/native";
import { ScrollView, TouchableOpacity } from "react-native";
import { CompactRestInfo } from "./compact-rest-info.component";
import { Text } from "../../../components/typography/text.component";

const FavoritesArea = styled.View`
  padding: 10px;
`;

const FavoriteItem = styled.View`
  margin-right: 10px;
`;

export const FavoritesBar = ({ favorites, onNavigate }) => {
  return (
    <FavoritesArea>
      <Text variant="label">Favorites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <FavoriteItem key={key}>
              <TouchableOpacity
                onPress={() => onNavigate("RestaurantDetails", { restaurant })}
              >
                <CompactRestInfo restaurant={restaurant} />
              </TouchableOpacity>
            </FavoriteItem>
          );
        })}
      </ScrollView>
    </FavoritesArea>
  );
};

export default FavoritesBar;
