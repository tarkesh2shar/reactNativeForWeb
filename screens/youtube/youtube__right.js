import React from "react";
import { StyleSheet, Text, View, ScrollView,TouchableOpacity,Image } from "react-native";

const youtube__right = ({ videos, changeVideo }) => {
    const populateListOfVideos = () => {
      
    return videos.map((video, i) => {
        return (
          
            <TouchableOpacity key={i}  onPress={(e) => changeVideo(video)}>
                <View style={styles.listItem}>
                    <Image
                           style={styles.videoImage}
                        source={{uri:video.snippet.thumbnails.medium.url}} />
                     <Text style={{ marginLeft: 10 }}>{video.snippet.title}</Text>
              </View>
            </TouchableOpacity>
      );
    });
        
        
  };

  return (
    <View style={styles.youTubeRight}>
      <ScrollView>{populateListOfVideos()}</ScrollView>
    </View>
  );
};

export default youtube__right;

const styles = StyleSheet.create({
  youTubeRight: {
    flex: 4,
    backgroundColor: "white",
    height: "100%",
  },
  videoImage: {
    height: 40,
    width: 70,
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: "grey",
    padding: 10,
  },
});
