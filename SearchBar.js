import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showDots, setShowDots] = useState(false);
  const [showNoMatches, setShowNoMatches] = useState(false);

  useEffect(() => {
    // Simulate search results (you'll need to replace this with actual search logic)
    const results = []; // Replace with actual search results
    setSearchResults(results);

    // Show dots after a delay (e.g., 1 second)
    const dotsTimeout = setTimeout(() => {
      setShowDots(true);
    }, 1000);

    // Show "No matches found" after another delay (e.g., 3 seconds)
    const noMatchesTimeout = setTimeout(() => {
      setShowNoMatches(true);
    }, 3000);

    return () => {
      clearTimeout(dotsTimeout);
      clearTimeout(noMatchesTimeout);
    };
  }, [searchText]);

  const handleSearch = () => {
    // Perform the search (you'll need to implement this logic)
    // For demonstration purposes, I'm assuming an empty search result
    const results = []; // Replace with actual search results

    setSearchResults(results);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="search the store"
        placeholderTextColor="black"
        backgroundColor="white"
        onChangeText={setSearchText}
        value={searchText}
      />
      <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
        <Text style={styles.searchButtonText}>search</Text>
      </TouchableOpacity>

      {showDots && (
        <View style={styles.dots}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      )}

      {showNoMatches && searchResults.length === 0 && searchText.length > 0 && (
        <Text style={styles.noMatchesText}>No matches found.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'left',
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchButton: {
    backgroundColor: 'transparent',
    paddingVertical: 5,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: 'white',
    marginRight: 236,
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
  },
  noMatchesText: {
    color: 'white',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'blue',
    marginHorizontal: 4,
    opacity: 0.5,
    animationDuration: '4s',
    animationIterationCount: 'infinite',
    animationName: 'dots',
  },
});

export default SearchBar;