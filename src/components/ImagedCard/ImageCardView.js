import React from "react";
import { TouchableOpacity,StyleSheet ,Dimensions} from "react-native";

import CardContainer from "./CardContainer";

const ImagedCardView = props => {
  const { onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <CardContainer {...props} />
    </TouchableOpacity>
  );
};

const { width } = Dimensions.get("window");

const styles=StyleSheet.create({
    container:{
        container: {
            height: 160,
            width: width * 0.9,
            alignSelf: "center",
            backgroundColor: "transparent"
          }
    }
})

export default ImagedCardView;