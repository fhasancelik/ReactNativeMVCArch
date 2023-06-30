import React ,{useContext} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, ScrollView } from 'react-native'
import { DataContext } from '../context/context'
import StarRating from 'react-native-star-rating-widget'
export default ProductDetailScreen = ({detPro}) => {

console.log(detPro)


  const clickEventListener = () => {
    Alert.alert('Success', 'Product has beed added to cart')
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: 'center', marginHorizontal: 30 }}>
          <Image
            style={styles.productImg}
            source={{
              uri: detPro.thumbnail,
            }}
          />
          <Text style={styles.name}>{detPro.name}</Text>
          <Text style={styles.price}>$ {detPro.price}</Text>
          <Text style={styles.description}>
            {detPro.description}
          </Text>
        </View>
        <View style={styles.starContainer}>
        <StarRating
      
      disabled={true} // Kullanıcının tıklamasını engellemek için
      maxStars={5} // Toplam yıldız sayısı
      rating={detPro.ratings} // API'den gelen derecelendirme değeri
      starSize={18} // Yıldız simgelerinin boyutu
      fullStarColor="gold" // Dolu yıldız simgelerinin rengi
      emptyStarColor="lightgray" // Boş yıldız simgelerinin rengi
    />
        </View>
        <View style={styles.contentColors}>
          <TouchableOpacity
            style={[styles.btnColor, { backgroundColor: '#00BFFF' }]}></TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnColor, { backgroundColor: '#FF1493' }]}></TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnColor, { backgroundColor: '#00CED1' }]}></TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnColor, { backgroundColor: '#228B22' }]}></TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnColor, { backgroundColor: '#20B2AA' }]}></TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnColor, { backgroundColor: '#FF4500' }]}></TouchableOpacity>
        </View>
        <View style={styles.contentSize}>
          <TouchableOpacity style={styles.btnSize}>
            <Text>S</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSize}>
            <Text>M</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSize}>
            <Text>L</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSize}>
            <Text>XL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separator}></View>
        <View style={styles.addToCarContainer}>
          <TouchableOpacity style={styles.shareButton} onPress={() => clickEventListener()}>
            <Text style={styles.shareButtonText}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  productImg: {
    width: 200,
    height: 200,
    borderRadius:100,
    objectFit:'cover',
  
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: 'bold',
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    marginTop: 10,
    color: '#696969',
  },
  star: {
    width: 40,
    height: 40,
  },
  btnColor: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginHorizontal: 3,
  },
  btnSize: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderColor: '#778899',
    borderWidth: 1,
    marginHorizontal: 3,
    backgroundColor: 'white',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  contentColors: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  contentSize: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  separator: {
    height: 2,
    backgroundColor: '#eeeeee',
    marginTop: 20,
    marginHorizontal: 30,
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  shareButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  addToCarContainer: {
    marginHorizontal: 30,
  },
})
