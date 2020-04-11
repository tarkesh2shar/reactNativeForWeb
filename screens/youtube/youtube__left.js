import React from "react";
import { StyleSheet, Text, View, Dimensions,Platform } from "react-native";
import WebViewForWeb from "react-native-web-webview";
import { WebView } from 'react-native-webview';

const Youtube__left = ({ firstVideo }) => {

  console.log("platform",Platform.OS);
  
  const screenWidth = Math.round(Dimensions.get("window").width);
  const screenHeight = Math.round(Dimensions.get("window").height);
  return (
    <View
      style={screenWidth < 640 ? styles.youTubeLeftMobile : styles.youTubeLeft}
    >
     {Platform.OS==="web"? <WebViewForWeb
        style={styles.iframe}
        source={{
          uri: `https://www.youtube.com/embed/${
            firstVideo.id ? firstVideo.id.videoId : ""
          }`,
        }}
        style={{ width: "100%", height: "100%" }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
      />: <WebView
      style={styles.iframe}
      source={{
        uri: `https://www.youtube.com/embed/${
          firstVideo.id ? firstVideo.id.videoId : ""
        }`,
      }}
      style={{ width: "100%", height: "100%" }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      startInLoadingState={true}
    /> }
    </View>
  );
};

export default Youtube__left;

const styles = StyleSheet.create({
  youTubeLeft: {
    flex: 7,
    height: "100%",
    marginRight: 10,
  },
  iframe: {
    width: "100%",
    height: "100%",
  },
  youTubeLeftMobile: {
    width: 400,
    height: 200,
  },
});
