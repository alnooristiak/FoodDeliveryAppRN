import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageSlider } from 'react-native-image-slider-banner'

const OfferSlaider = () => {
  return (
    <View>
      {/* swipe slaider you well learn for react native */}
      <ImageSlider
        data={[
          { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU' },
          { img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg' },
          { img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg' }
        ]}
        timer={3000}
        autoPlay={true}
        onItemChanged={(item) => console.log("item", item)}
        closeIconColor="#fff"
      />
    </View>
  )
}

export default OfferSlaider

const styles = StyleSheet.create({})