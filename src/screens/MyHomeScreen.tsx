import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppButton } from "../components/AppButton";
import { AuthAppView } from "../components/AppSafeView";
import { GlobalColors } from "../styles/Colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

type MyHomeScreenProps = {};

const { primaryColor, whiteColor } = GlobalColors;

export const MyHomeScreen = ({}: MyHomeScreenProps) => {
  // const onPressSearch = () => {

  // }

  return (
    <AuthAppView>
      <View style={{ backgroundColor: primaryColor }}>
        <View style={styles.headingContainer}>
          <AppButton
            // onPress={onPressSearch}
            backgroundColor={whiteColor}
            borderColor={whiteColor}
            rippleColor={whiteColor}
          >
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <FontAwesomeIcon icon={faSearch} color="#888" size={20} />
              <Text style={styles.searchText}>Find an insight...</Text>
            </View>
          </AppButton>

          <Text style={{ fontSize: 48, fontWeight: "bold", color: whiteColor }}>
            Carousel
          </Text>
        </View>
      </View>

      <View>
        <View style={styles.cardContainer}>
          <Text style={styles.menuTitleText}>My Psychologists</Text>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.menuTitleText}>My Knowledge</Text>
        </View>
      </View>
    </AuthAppView>
  );
};

const styles = StyleSheet.create({
  // Heading
  headingContainer: {
    marginTop: 8,
    marginBottom: 40,
    marginHorizontal: 20,
  },
  searchText: {
    color: "#888",
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 16,
  },

  // MyKnowledge Articles
  cardContainer: {
    marginVertical: 16,
    marginHorizontal: 20,
  },
  menuTitleText: {
    color: "#888",
    fontSize: 20,
    fontWeight: "bold",
  },
});
