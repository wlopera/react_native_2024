import { Image, StyleSheet, Text, View } from "react-native";

const ImageExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/image.png")}
          style={styles.imageHeader}
        />
        <Text style={styles.textHeader}>Montaña Lunar</Text>
      </View>
      <View style={styles.imageView}>
        <Image
          source={require("../../assets/images/mountain.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.textFooter}>wlopera @2024</Text>
      </View>
    </View>
  );
};

export default ImageExample;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: "column",
    justifyContent:"space-between"
  },
  header: {
    alignItems: "center",
    backgroundColor: "red",
    flexDirection: "row",
  },
  imageHeader: {
    margin: 5,
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  textHeader: {
    fontSize: 24,
    textAlign: "center",
    paddingLeft: 20
  },
  imageView: {
    borderWidth: 1,
    borderColor: "black",
    marginLeft: 16,
    marginRight: 15,
    marginTop:60,
    marginBottom:120
  },
  image: {
    width: "100%",
    height: "100%",
  },
  footer: {
    justifyContent: "center",
    backgroundColor: "#14ea7f",
  },
  textFooter: {
    fontSize: 20,
    textAlign: "center",
  },
});
