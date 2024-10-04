import React, { useState } from "react";
import { FlatList, View, StyleSheet, Button, Image, Text } from "react-native";



const samplebook = [
  { id: '1', content: require('./abc2.jpg'), bookTag: 1, bookpage: 1 },
  { id: '2', content: require('./abc2.jpg'), bookTag: 1, bookpage: 2 },
  { id: '3', content: require('./abc2.jpg'), bookTag: 1, bookpage: 3 },
  { id: '4', content: require('./abc2.jpg'), bookTag: 1, bookpage: 4 },
  { id: '5', content: require('./abc2.jpg'), bookTag: 1, bookpage: 5 },

  { id: '6', content: require('./abc2.jpg'), bookTag: 1, bookpage: 6 },
  { id: '7', content: require('./abc2.jpg'), bookTag: 1, bookpage: 7 },
  { id: '8', content: require('./abc2.jpg'), bookTag: 1, bookpage: 8 },
  { id: '9', content: require('./abc2.jpg'), bookTag: 1, bookpage: 9 },
  { id: '10', content: require('./abc2.jpg'), bookTag: 1, bookpage: 10 },

  { id: '11', content: require('./sample.jpg'), bookTag: 2, bookpage: 1 },
  { id: '12', content: require('./sample.jpg'), bookTag: 2, bookpage: 2 },
  { id: '13', content: require('./sample.jpg'), bookTag: 2, bookpage: 3 },
  { id: '14', content: require('./sample.jpg'), bookTag: 2, bookpage: 4 },
  { id: '15', content: require('./sample.jpg'), bookTag: 2, bookpage: 5 },

  { id: '16', content: require('./sample.jpg'), bookTag: 2, bookpage: 6 },
  { id: '17', content: require('./sample.jpg'), bookTag: 2, bookpage: 7 },
  { id: '18', content: require('./sample.jpg'), bookTag: 2, bookpage: 8 },

  { id: '19', content: require('./abc2.jpg'), bookTag: 1, bookpage: 11 },
  { id: '20', content: require('./abc2.jpg'), bookTag: 1, bookpage: 12 },
  { id: '21', content: require('./abc2.jpg'), bookTag: 1, bookpage: 13 },
  { id: '22', content: require('./abc2.jpg'), bookTag: 1, bookpage: 14 },
  { id: '23', content: require('./abc2.jpg'), bookTag: 1, bookpage: 15 },


  { id: '24', content: require('./abc2.jpg'), bookTag: 1, bookpage: 16 },
  { id: '25', content: require('./abc2.jpg'), bookTag: 1, bookpage: 17 },
  { id: '26', content: require('./abc2.jpg'), bookTag: 1, bookpage: 18 },
  { id: '27', content: require('./abc2.jpg'), bookTag: 1, bookpage: 19 },
  { id: '28', content: require('./abc2.jpg'), bookTag: 1, bookpage: 20 },

 

];







const mainBook = []
let testBook = []
var no_of_pages_loaded = 0;

// inital render of every first 5 pages of book

if(no_of_pages_loaded == 0 ) {
  for (let i =0; i < samplebook.length; i++ ) {


    if(samplebook[i].bookpage <= 5) {
      mainBook.push({id : samplebook[i].id, content: samplebook[i].content})
    }
  
   } 
no_of_pages_loaded += 5 

}







export default function Home() {
  const [page, NO_OF_PAGES_AT_A_TIME] = useState(1);
  const itemsPerPage = 5;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = mainBook.slice(startIndex, endIndex);


  const nextPage = () => {
    if (page * itemsPerPage < samplebook.length) {
      NO_OF_PAGES_AT_A_TIME(page + 1);

  //brain damage starts from here ,stay with me
      if( (page + 1) * itemsPerPage >= samplebook.length  ) {
        if(no_of_pages_loaded > 0 ) {

          for (let i =0; i < samplebook.length; i++ ) {
        
        
            if(samplebook[i].bookpage <= no_of_pages_loaded) {

              mainBook.push({id : samplebook[i].id, content: samplebook[i].content})
            }
          
           } 
        no_of_pages_loaded += 5 
        
        } else {
          
        }
        
      }
      console.log(testBook,page,no_of_pages_loaded )
    }
  };



  const prevPage = () => {
    if (page > 1) {
      NO_OF_PAGES_AT_A_TIME(page - 1);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={item.content} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={paginatedData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.buttonContainer}>
        <Button title="Previous" onPress={prevPage} disabled={page === 1} />
        <Text style={styles.pageText}>Page {page}</Text>
        <Button title="Next" onPress={nextPage} disabled={page * itemsPerPage >= samplebook.length}  />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: 200,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  pageText: {
    fontSize: 16,
  }
});
