import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import SearchBar from './SearchBar';
import IEComponent from './ie';
import AGComponent from './ag';
import UpdateStatusComponent from './UpdateStatusComponent';
import * as Font from 'expo-font';
import ag from './assets/ag.webp';
import ie from './assets/ie.png';
import ieimg from './assets/ieimg.webp';
import ieimg2 from './assets/ieimg2.jpg';
import { Image } from 'react-native';

export default function App() {
  const [currentPage, setCurrentPage] = useState('store');
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'SegoeUI': require('./assets/fonts/SegoeUI.ttf'), // Ujistěte se, že cesta k fontu je správná
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  /*if (!fontsLoaded) {
    return <View><Text>Loading...</Text></View>;
  }*/
  const handleAppsClick = () => {
    setCurrentPage('apps');
  };

  const handleGamesClick = () => {
    setCurrentPage('games');
  };

  const handleMusicClick = () => {
    setCurrentPage('music');
  };

  const handleAllClick = () => {
    setCurrentPage('all');
  };

  const handleEntClick = () => {
    setCurrentPage('entertainment');
  };

  const handleMvClick = () => {
    setCurrentPage('music + video');
  };

  const handleTpClick = () => {
    setCurrentPage('tools + productivity');
  };

  const handleLfClick = () => {
    setCurrentPage('lifestyle');
  };

  const handleKfClick = () => {
    setCurrentPage('kids + family');
  };

  const handleNwClick = () => {
    setCurrentPage('news + weather');
  };

  const handleTnClick = () => {
    setCurrentPage('travel + navigation');
  };

  const handleHfClick = () => {
    setCurrentPage('health + fitness');
  };

  const handleSearchClick = () => {
    setCurrentPage('search');
  };

  const handleUpClick = () => {
    setCurrentPage('update');
  };

  const handleAbClick = () => {
    setCurrentPage('about');
  };

  const handleCategoryClick = (category) => {
    setCurrentPage(category);
  };

  const handleIEClick = () => {
    setCurrentPage('Internet Explorer');
  };

  const handleAGClick = () => {
    setCurrentPage('Angry Birds');
  };

  const handleBackClick = () => {
    setCurrentPage('store');
  };

  const handleSearch = (searchText) => {
    // Implement your search logic here
    console.log('Search text:', searchText);
  };

  const App = () => {
    const [updateStatus, setUpdateStatus] = useState('checking'); // Initial status
  };
  
    const checkForUpdates = async () => {
      // Simulate checking for updates (replace with actual logic)
      // Example: Make a network request to your update server
      try {
        // ... Your update logic here ...
        // If update available:
        setUpdateStatus('available');
        // If up to date:
        // setUpdateStatus('upToDate');
      } catch (error) {
        console.error('Error checking for updates:', error);
        setUpdateStatus('error');
      }
    };

  const renderContent = () => {
    if (currentPage === 'store') {
      return (
        <ScrollView>
          <Text style={styles.header}>store</Text>
          <TouchableOpacity onPress={handleAppsClick}>
            <Text style={styles.appsText}>apps</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleGamesClick}>
            <Text style={styles.gamesText}>games</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleMusicClick}>
            <Text style={styles.gamesText}>music</Text>
          </TouchableOpacity>
          <Text style={styles.header2}>spotlight</Text>
          <IEComponent onPress={handleIEClick} />
          <AGComponent onPress={handleAGClick} />
          <Text style={styles.header2}>categories</Text>
          <TouchableOpacity onPress={handleAllClick}>
            <Text style={styles.ctText}>all</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEntClick}>
            <Text style={styles.ctText}>entertainment</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleMvClick}>
            <Text style={styles.ctText}>music + video</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleTpClick}>
            <Text style={styles.ctText}>tools + productivity</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLfClick}>
            <Text style={styles.ctText}>lifestyle</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleKfClick}>
            <Text style={styles.ctText}>kids + family</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNwClick}>
            <Text style={styles.ctText}>news + weather</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleTnClick}>
            <Text style={styles.ctText}>travel + navigation</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleHfClick}>
            <Text style={styles.ctText}>health + fitness</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSearchClick}>
            <Text style={styles.ctText}>search</Text>
          </TouchableOpacity>
          <Text style={styles.header2}>settings</Text>
          <TouchableOpacity onPress={handleUpClick}>
            <Text style={styles.ctText}>update</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleAbClick}>
            <Text style={styles.ctText}>about</Text>
          </TouchableOpacity>
        </ScrollView>
      );
    } else {
      // Category pages
      return (
        <>
          <Text style={styles.header}>{currentPage}</Text>
          {/* Add a blank space for listing apps */}
          {/* You can customize this part */}
        </>
      );
    }
  };

  return (
    <View style={styles.container}>
      {renderContent()}

      {currentPage !== 'store' && (
        <TouchableOpacity onPress={handleBackClick}>
          <Text style={styles.arrowButton}>← back</Text>
        </TouchableOpacity>
      )}

      {currentPage === 'apps' && (
        <View style={styles.appsPage}>
          <TouchableOpacity style={styles.appsPageTouchableOpacity} onPress={() => handleCategoryClick('top free')}>
            <View style={styles.blueBox}>
              <Text style={styles.boxText}>Top Free</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appsPageTouchableOpacity} onPress={() => handleCategoryClick('new + rising')}>
            <View style={styles.blueBox}>
              <Text style={styles.boxText}>New + Rising</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appsPageTouchableOpacity} onPress={() => handleCategoryClick('top paid')}>
            <View style={styles.blueBox}>
              <Text style={styles.boxText}>Top Paid</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appsPageTouchableOpacity} onPress={() => handleCategoryClick('best rated')}>
            <View style={styles.blueBox}>
              <Text style={styles.boxText}>Best Rated</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appsPageTouchableOpacity} onPress={() => handleCategoryClick('collections')}>
            <View style={styles.blueBox}>
              <Text style={styles.boxText}>Collections</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.appsPageTouchableOpacity} onPress={() => handleCategoryClick('picks for you')}>
            <View style={styles.blueBox}>
              <Text style={styles.boxText}>Picks for You</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      {currentPage === 'games' && (
        <View style={styles.gamesPage}>
          <TouchableOpacity style={styles.gamesPageTouchableOpacity} onPress={() => handleCategoryClick('top free')}>
            <View style={styles.greenBox}>
              <Text style={styles.boxText}>Top Free</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gamesPageTouchableOpacity} onPress={() => handleCategoryClick('new + rising')}>
            <View style={styles.greenBox}>
              <Text style={styles.boxText}>New Relases</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gamesPageTouchableOpacity} onPress={() => handleCategoryClick('top paid')}>
            <View style={styles.greenBox}>
              <Text style={styles.boxText}>Top Paid</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gamesPageTouchableOpacity} onPress={() => handleCategoryClick('best rated')}>
            <View style={styles.greenBox}>
              <Text style={styles.boxText}>Best Rated</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gamesPageTouchableOpacity} onPress={() => handleCategoryClick('play anywhere')}>
            <View style={styles.greenBox}>
              <Text style={styles.boxText}>Play Anywhere</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gamesPageTouchableOpacity} onPress={() => handleCategoryClick('xbox')}>
            <View style={styles.greenBox}>
              <Text style={styles.boxText}>Xbox</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      {currentPage === 'music' && (
        <View style={styles.musicPage}>
          <TouchableOpacity style={styles.musicPageTouchableOpacity} onPress={() => handleCategoryClick('Artists')}>
            <View style={styles.orangeBox}>
              <Text style={styles.boxText}>Artists</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.musicPageTouchableOpacity} onPress={() => handleCategoryClick('new relases')}>
            <View style={styles.orangeBox}>
              <Text style={styles.boxText}>New Relases</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.musicPageTouchableOpacity} onPress={() => handleCategoryClick('popular')}>
            <View style={styles.orangeBox}>
              <Text style={styles.boxText}>Popular</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.musicPageTouchableOpacity} onPress={() => handleCategoryClick('best rated')}>
            <View style={styles.orangeBox}>
              <Text style={styles.boxText}>Best Rated</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.musicPageTouchableOpacity} onPress={() => handleCategoryClick('picks for you')}>
            <View style={styles.orangeBox}>
              <Text style={styles.boxText}>Picks for you</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.musicPageTouchableOpacity} onPress={() => handleCategoryClick('all music')}>
            <View style={styles.orangeBox}>
              <Text style={styles.boxText}>All Music</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      {currentPage === 'update' && (
        <View style={styles.aboutPage}>
          <Text style={styles.abheaderText}>Search for updates</Text>
          <Text style={styles.abText}>Update status</Text>
          <TouchableOpacity style={styles.updatePageTouchableOpacity} onPress={() => ('update')}>
            <View style={styles.upButton}>
              <Text style={styles.UpboxText}>check for updates</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.abText}>Current version: Alpha 1.0.0.0</Text>
          <Text style={styles.abText}>Build: 000001</Text>
        </View>
      )}
      {currentPage === 'about' && (
        <View style={styles.aboutPage}>
          <Text style={styles.abheaderText}>NSE Store</Text>
          <Text style={styles.abText}>Version: Alpha 1.0.0.0</Text>
          <Text style={styles.abText}>Build: 000001</Text>
          <Text style={styles.abText}>© 2024 Jan Kadlčík</Text>
          <Text style={styles.abText}>Unauthorized distribution is strictly prohibited.</Text>
        </View>
      )}
      {currentPage === 'search' && (
        <View>
        <SearchBar onSearch={handleSearch} />
      </View>
      )}
      {currentPage === 'Internet Explorer' && (
        <ScrollView>
        <View style={styles.aboutPage}>
          <Image source={ie} style={{width: 200, height: 200, marginTop: 20,}} />
          <Text style={styles.abheaderText}>Internet Explorer</Text>
          <Text style={styles.abText}>Microsoft Corporation</Text>
          <Text style={styles.abText}>Free</Text>
          <TouchableOpacity style={styles.updatePageTouchableOpacity} onPress={() => ('download')}>
            <View style={styles.dwButton}>
              <Text style={styles.dwboxText}>download</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.abheaderText}>About</Text>
          <Text style={styles.abText}>Browse smarter and faster with Internet Explorer 11.</Text>
          <Image source={ieimg} style={{width: 320, height: 200, marginTop: 20,}} />
          <Image source={ieimg2} style={{width: 320, height: 200, marginTop: 20,}} />
        </View>
        </ScrollView>
      )}
      {currentPage === 'Angry Birds' && (
        <ScrollView>
        <View style={styles.aboutPage}>
          <Image source={ag} style={{width: 200, height: 200, marginTop: 20,}} />
          <Text style={styles.abheaderText}>Angry Birds</Text>
          <Text style={styles.abText}>Rovio</Text>
          <Text style={styles.abText}>7.99$</Text>
          <TouchableOpacity style={styles.updatePageTouchableOpacity} onPress={() => ('buy')}>
            <View style={styles.dwButton}>
              <Text style={styles.dwboxText}>buy</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.abheaderText}>About</Text>
          <Text style={styles.abText}></Text>
          <Image source={ieimg} style={{width: 320, height: 200, marginTop: 20,}} />
          <Image source={ieimg2} style={{width: 320, height: 200, marginTop: 20,}} />
        </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    //fontFamily: 'SegoeUI',
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
  },
  header: {
    fontSize: 100,
    color: 'white',
    marginBottom: 10,
  },
  header2: {
    fontSize: 35,
    color: 'white',
    marginTop: 10,
    marginBottom: 10,
  },
  appsText: {
    fontSize: 26,
    color: 'white',
    marginBottom: 10,
  },
  gamesText: {
    fontSize: 26,
    color: 'white',
    marginBottom: 10,
  },
  musicText: {
    fontSize: 26,
    color: 'white',
    marginBottom: 10,
  },
  ctText: {
    fontSize: 26,
    color: 'white',
    marginBottom: 10,
  },
  abheaderText: {
    fontSize: 30,
    color: 'white',
    marginTop: 10,
    marginBottom: 10,
  },
  abText: {
    fontSize: 15,
    color: 'white',
  },
  appsPage: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gamesPage: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  musicPage: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  appsPageTouchableOpacity: {
    width:'50%',
  },
  gamesPageTouchableOpacity: {
    width:'50%',
  },
  musicPageTouchableOpacity: {
    width:'50%',
  },
  updatePageTouchableOpacity: {
    width:'50%',
  },
  blueBox: {
    backgroundColor: '#0074D9',
    padding: 10,
    marginBottom: 10,
    aspectRatio: 1,
  },
  greenBox: {
    backgroundColor: '#107C10',
    padding: 10,
    marginBottom: 10,
    aspectRatio: 1,
  },
  orangeBox: {
    backgroundColor: '#ED7014',
    padding: 10,
    marginBottom: 10,
    aspectRatio: 1,
  },
  upButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'white',
    padding: 8,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 13,
  },
  dwButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'white',
    padding: 8,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 70,
  },
  boxText: {
    fontSize: 18,
    color: 'white',
  },
  UpboxText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'left',
  },
  dwboxText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'left',
  },
  arrowButton: {
    fontSize: 20,
    color: 'white',
    marginTop: 10,
  },
});
