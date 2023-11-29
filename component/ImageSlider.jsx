import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import { SliderBox } from "react-native-image-slider-box";

const Slider = ({ images }) => {
  return (
    <View style={styles.carouselContainer}>
      {/* <SliderBox
        images={images}
        dotColor={"#000"}
        inactiveDotColor={"#fff"}
        ImageComponentStyle={{
          borderRadius: 15,
          width: "95%",
          marginTop: 20,
        }}
        autoplay
        circuleloop
      /> */}
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});
