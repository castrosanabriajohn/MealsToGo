import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

// if StatusBar.currentHeight has a value then add margin-top set to that value + pixels

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}`}px;
`;

export default SafeArea;
