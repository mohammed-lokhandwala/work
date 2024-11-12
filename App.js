import React, { useState } from "react";
import { FlatList, View, StyleSheet, Button, Image, Text } from "react-native";



const samplebook = [
  { id: '1', content: require('./1.jpg'), bookTag: 1, bookpage: 1 },
  { id: '2', content: require('./2.jpg'), bookTag: 1, bookpage: 2 },


  { id: '6', content: require('./above.jpg'), bookTag: 2, bookpage: 6 },
  { id: '7', content: require('./above.jpg'), bookTag: 2, bookpage: 7 },
  { id: '8', content: require('./above.jpg'), bookTag: 2, bookpage: 8 },
  { id: '9', content: require('./above.jpg'), bookTag: 2, bookpage: 9 },
  { id: '10', content: require('./above.jpg'), bookTag: 2, bookpage: 10 },
  { id: '11', content: require('./above.jpg'), bookTag: 2, bookpage: 11 },


  { id: '12', content: require('./1.jpg'), bookTag: 3, bookpage: 1 },
  { id: '13', content: require('./2.jpg'), bookTag: 3, bookpage: 2 },
  { id: '14', content: require('./3.jpg'), bookTag: 3, bookpage: 3 },
 







];







const mainBook = []

var no_of_pages_loaded = 0;

// inital render of every first 5 pages of book

if(no_of_pages_loaded == 0 ) {
  for (let i =0; i < samplebook.length; i++ ) {


    if(samplebook[i].bookpage <= 5) {
      mainBook.push({id : samplebook[i].id, content: samplebook[i].content, bookpage: samplebook[i].bookpage, bookTag: samplebook[i].bookTag})
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

  // ,stay with me
      if( (page + 1) * itemsPerPage >= samplebook.length  ) {
        if(no_of_pages_loaded > 0 ) {

          for (let i =0; i < samplebook.length; i++ ) {
        
        
            if(samplebook[i].bookpage <= (no_of_pages_loaded + 5) && samplebook[i].bookpage > no_of_pages_loaded) {

              mainBook.push({id: samplebook[i].id,
                content: samplebook[i].content,
                bookpage: samplebook[i].bookpage,
              bookTag: samplebook[i].bookTag
              })
            }
          
           } 
        no_of_pages_loaded += 5 
        console.log(no_of_pages_loaded)
        
        } else {
          
        }
        
      }
      console.log(page,no_of_pages_loaded )
    }
  };



  const prevPage = () => {
    if (page > 1) {
      NO_OF_PAGES_AT_A_TIME(page - 1);
    }
  };


  const renderItem = ({ item }) => (
    <View style={styles.imageContainer}>
     
      <Text>the page number is  {item.bookpage} the booktag is {item.bookTag}</Text>
      
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
    height: 400,
    marginVertical: 10,
    fontSize: 14,
    zIndex: 1,
   color: 'black',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  fonts: {
    fontSize: 14,
    zIndex: 1,
   color: 'black',
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






