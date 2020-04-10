import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import { WebView } from "react-native-webview";
import WebView from 'react-native-web-webview';

import '@expo/match-media'
import { useMediaQuery } from "react-responsive";

const YoutubeLeft = ({ firstVideo }) => {

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
 
    console.log("running left");
    
  return (
    <View style={isTabletOrMobile?styles.youTubeLeftMobile :styles.youTubeLeft}>
      <WebView
        style={styles.iframe}
              source={{
            uri:`https://www.youtube.com/embed/${ firstVideo?firstVideo.id.videoId:""}`
                }}
        style={{ width: "100%", height: "100%" }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  youTubeLeft: {
    flex: 7,
    height: "100%",
    marginRight: "1rem",
  },
  iframe: {
    width: "100%",
    height: "100%",
  },
  youTubeLeftMobile: {
    width: "40rem",
    height:"20rem"
    
  }

});

export default React.memo(YoutubeLeft);
