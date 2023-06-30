import React, {useContext, useEffect, useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import ProductController from '../controllers/ProductController';

import LoadingAnimation from '../animation/LoadingAnimation';
import ImagedCardView from '../components/ImagedCard/ImageCardView';
import {useNavigation} from '@react-navigation/native';
import { DataContext } from '../context/context';


const ListProduct = () => {
  const [products, setProducts] = useState(null);
  const navigation = useNavigation();
  const{productInfo,setProductInfo}=useContext(DataContext)

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const fetchedProducts = await ProductController.getProducts();
      setProducts(fetchedProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const goToDetail =( productInf)=>{
    setProductInfo(productInf)
    navigation.navigate('ProductDetail')
  }

  return (
    <>
      {products == null ? (
        <LoadingAnimation />
      ) : (
        <FlatList
          data={products}
          renderItem={({item}) => {
            return (
              <View style={{marginBottom: 25}}>
                <ImagedCardView
                  onPress={() => goToDetail(item) }
                  stars={5}
                  reviews={456}
                  ratings={item.rating}
                  title={item.name}
                  rightSideValue={`$ ${item.price}`}
                  subtitle={item.description}
                  leftSideValue={item.brand}
                  backgroundColor="#ff6460"
                  source={{
                    uri: `${item.thumbnail}`,
                  }}
                />
              </View>
            );
          }}
          ListEmptyComponent={<LoadingAnimation />}
        />
      )}
      
    </>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
  },
  productItem: {
    marginBottom: 12,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: 'gray',
  },
};

export default ListProduct;
