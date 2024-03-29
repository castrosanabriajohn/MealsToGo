import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import Spacer from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  InfoSection,
  Address,
  RestaurantCard,
  RestaurantCardCover,
  RatingSection,
  Section,
  SectionEnd,
  Icon,
} from "./restaurant-info-card-component.styles";
import { Favorite } from "./favorites-component";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Restaurant's Name",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <Favorite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <InfoSection>
        <Text variant="label">{name}</Text>
        <Section>
          <RatingSection>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </RatingSection>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer variant="left.md" />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer variant="left.md" />
            <Icon source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </InfoSection>
    </RestaurantCard>
  );
};

export default RestaurantInfo;
