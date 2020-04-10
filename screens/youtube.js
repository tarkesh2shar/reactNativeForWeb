import * as React from "react";
import {} from "@expo/vector-icons";
import '@expo/match-media'
import { useMediaQuery } from "react-responsive";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableHighlight,
    ActivityIndicator,
  ScrollView
} from "react-native";
import YoutubeLeft from "./youtube-left";
import YoutubeRight from "./youtube-right";
export default function Youtube(props) {
  const [value, onChangeText] = React.useState("Tom and jerry");
  const [videos, setvideos] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
  const [currentVideo, setcurrentVideo] = React.useState(videos[0])
  
  /////////////////////////------------------->mediaQueries Here<-------------//////////////////////

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)"
  });
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)"
  });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  //////////////////////////---------->MediaQuery ends here>--------------//////////////////////////


     
    React.useEffect(() => {
        fetchListOfVideos()
    }, [])

    let urlToFetch = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAthAHI0CQwvonGBc6GL_fZJ-Q9RMrveDw&type=video&maxResults=5&q=` 
  const fetchListOfVideos = async () => {
      setIsLoading(true);
      let raw = await fetch(`${urlToFetch}${value}`)
      let res = await raw.json();
      setvideos(res.items)
      setcurrentVideo(res.items[0])
      setIsLoading(false)
    };
    
    // const changeVideo = (video) => {
        
    //     setcurrentVideo(video)
    // }

    const changeVideo = React.useCallback((video) => {
        setcurrentVideo(video)
    },[])

    console.log("running main");
    

  return (
    <ScrollView>
      
      <View style={{ display: "flex", flexDirection: "column" }}>

        {/* Text Button and Search Input */}
        
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
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

        
      <View style={ isTabletOrMobile?styles.mainMobile :styles.main }>
        {isLoading ? (
          <ActivityIndicator size="large" color="#00c4b4" />
        ) : (
          <>
            <YoutubeLeft  firstVideo={currentVideo}  />
            <YoutubeRight videos={videos} changeVideo={changeVideo}/>
          </>
        )}
      </View>
    </View>
   </ScrollView>

  );
}
 
const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    padding: "1rem ",
    width: "50%",
    margin: "1rem",
    borderRadius: "1rem",
  },
  button: {
    backgroundColor: "#00c4b4",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    borderRadius: "1rem",
    textTransform: "capitalize",
    color: "white",
  },
  main: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
      height: "70vh",
      paddingLeft: "1rem",
    paddingRight:"1rem",
      flexDirection: "row",

  },
  mainMobile: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  }
});
