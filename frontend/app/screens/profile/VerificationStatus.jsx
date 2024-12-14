import React, { useCallback, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function BottomSheetExample() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // Snap Points for Bottom Sheet
  const snapPoints = ['50%'];

  // Handle Bottom Sheet Open
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
       <View> 
         <View style={styles.container}>
          <Text style={styles.openButton} onPress={handlePresentModalPress}>
            Open Verification Status
          </Text>
        </View>

          <View style={styles.contentContainer}>
            <Text style={styles.title}>Verification status</Text>
            <View style={styles.row}>
              <Text style={styles.rowText}>Identity</Text>
              <Text style={styles.rowVerified}>Verified</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowText}>Payment card</Text>
              <Text style={styles.rowVerified}>Verified</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowText}>Address</Text>
              <Text style={styles.rowVerified}>Verified</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowText}>Email Address</Text>
              <Text style={styles.rowVerified}>Verified</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.rowText}>Our terms & policy</Text>
              <Text style={styles.rowVerified}>Verified</Text>
            </View>
          </View>
       </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0D0F18',
    alignItems: 'center',
    padding: 20,
  },
  profilePicture: {
    marginTop: 10,
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  username: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#0D0F18',
    justifyContent: 'center',
    alignItems: 'center',
  },
  openButton: {
    color: '#1E90FF',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },
  bottomSheetBackground: {
    backgroundColor: '#151A29',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  indicator: {
    backgroundColor: '#666',
    width: 50,
    height: 4,
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 10,
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingVertical: 15,
  },
  rowText: {
    color: '#fff',
    fontSize: 16,
  },
  rowVerified: {
    color: '#4CAF50', 
    fontSize: 16,
  },
});
