import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import Youtube__Left from "./youtube__left";
import Youtube__Right from "./youtube__right";

const youtube = () => {
  const [value, onChangeText] = React.useState("Tom and jerry");
  const [isLoading, setIsLoading] = React.useState(false);
  const [videos, setvideos] = React.useState([]);
  const [currentVideo, setcurrentVideo] = React.useState({});
  const screenWidth = Math.round(Dimensions.get("window").width);
  const screenHeight = Math.round(Dimensions.get("window").height);

  let urlToFetch = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=API_KEY_HERE&type=video&maxResults=5&q=`;

  React.useEffect(() => {
    fetchListOfVideos()
  }, [])
  
  const fetchListOfVideos = async () => {
    console.log("running here");
    console.log("screenWidth", screenWidth, "screenHeight", screenHeight);

    setIsLoading(true);
    let raw = await fetch(`${urlToFetch}${value}`);
    let res = await raw.json();
    setvideos(res.items);
    setcurrentVideo(res.items[0]);
    setIsLoading(false);
  };
  

    const changeVideo = React.useCallback((video) => {
        setcurrentVideo(video)
    },[])

  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextInput
            style={styles.input}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            placeholder="Search Here"
          />
          <Text style={styles.button} onPress={(e) => fetchListOfVideos()}>
            Search{" "}
          </Text>
        </View>

        <View style={screenWidth < 640 ? styles.mainMobile : styles.main}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#00c4b4" />
          ) : (
            <>
              <Youtube__Left firstVideo={currentVideo} />
                        
              <Youtube__Right videos={videos} changeVideo={changeVideo} />
            </>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default youtube;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
 
    flex: 1,
  },

  input: {
    backgroundColor: "white",
    padding: 10,
    width: "50%",
    margin: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#00c4b4",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    textTransform: "capitalize",
    color: "white",
  },

  main: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: "70%",
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
  
    flex: 1,
  },
  mainMobile: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
 
  },
});
