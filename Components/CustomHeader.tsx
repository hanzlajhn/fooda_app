import { View,Text,Platform,SafeAreaView,StatusBar,StyleSheet,TouchableOpacity,Image,TextInput,} from "react-native";
import React, { useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";
import BottomSheet from "./BottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <View style={styles.searchInput}>
        <View style={styles.searchField}>
          <Ionicons
            style={styles.searchIcon}
            name="search-outline"
            size={20}
            color={Colors.medium}
          />
          <TextInput
            style={styles.input}
            placeholder="Restaurant, groceries, dishes"
          />
        </View>

      </View>
    </View>
  );
};

const CustomHeader = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const openModel = () => {
    bottomSheetRef.current?.present();
  };
  return (
    <>
      <StatusBar
        backgroundColor={Platform.OS === "ios" ? "#000" : "#000"}
        barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
      />
      <SafeAreaView style={[styles.safeArea, { paddingTop: insets.top }]}>
        <BottomSheet ref={bottomSheetRef} />
        <View style={styles.container}>
          <TouchableOpacity onPress={openModel}>
            <Image
              style={styles.bike}
              source={require("@/assets/images/applebike.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.titleContainer} onPress={openModel}>
            <Text style={styles.title}>Delivery · Now</Text>
            <View style={styles.location}>
              <Text style={styles.subtitle}>Lahore</Text>
              <Ionicons
                name="chevron-down"
                size={20}
                color={Colors.primary}
                style={{ marginLeft: 3, marginTop: 2 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.profileBtn}
            onPress={() => router.push("./userDetails")}
          >
            <Ionicons name="person-outline" size={20} color={Colors.primary} />
          </TouchableOpacity>
        </View>
        <SearchBar />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    height: 50,
    backgroundColor: "#fff",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  bike: {
    width: 30,
    height: 30,
  },
  titleContainer: {
    flex: 1,
  },
  profileBtn: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 50,
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
    gap: 1,
  },
  searchBar: {
    height: 60,
    backgroundColor: "#fff",
  },
  searchInput: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  searchField: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  optionsBtn: {
    padding: 5,
    borderRadius: 50,
  },
  searchIcon: {
    paddingLeft: 10,
  },
  input: {
    padding: 10,
    color: Colors.mediumDark,
  },
});

export default CustomHeader;
