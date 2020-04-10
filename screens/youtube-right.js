import React from 'react'
import { View, Text,StyleSheet,Image ,TouchableOpacity,ScrollView} from 'react-native'

const YoutubeRight = ({ videos ,changeVideo}) => {

    console.log("running Right");
    

    const populateListOfVideos = () => {
       
        return videos.map((video, i) => {
   
           
            return <TouchableOpacity
            key={i}
                onPress={
                (e) => changeVideo(video)
            }>
                 <View
                style={{
                display: "flex", flexDirection: "row", marginTop: "1rem", marginLeft: "1rem",
            backgroundColor:"grey",padding:"1rem"
            }}>
                
                <Image
                    
        style={styles.videoImage}
        source={video.snippet.thumbnails.medium.url}
                />
                <Text style={{marginLeft:"1rem"}}>
                {video.snippet.title}
                </Text>

            
        </View>
            </TouchableOpacity>
            
        })

    }
    
    return (
        <View style={styles.youTubeRight}>

            <ScrollView>
            {populateListOfVideos()}
           </ScrollView>
          
        </View>
    )
}

const styles = StyleSheet.create({
    youTubeRight: {
        flex: 4,
        backgroundColor: "white",
        height:"100%"
        
    },
    videoImage: {
        height: "4rem",
        width:"7rem"
    }
  });

export default React.memo(YoutubeRight)
