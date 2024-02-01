import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Card() {
  const contacts = [
    {
      uid: '1',
      name: 'Marty Weiner',
      status: 'Former CTO, Reddit',
      position: 'Ideaflow Advisor',
      imgUrl:
        'https://attiehandassociates.co.za/wp-content/uploads/2014/08/Profile-Pic-Demo.png',
      desc: 'A key step to realizing the potential of the Web as a medium for collective intelligence.',
    },
    {
      uid: '2',
      name: 'John Devadoss',
      status: 'Founding Director,',
      position: 'Microsoft Digital Consulting',
      imgUrl:
        'https://attiehandassociates.co.za/wp-content/uploads/2014/08/Profile-Pic-Demo.png',
      desc: 'Ideaflow is the force multiplier for business productivity in this new normal.',
    },
    {
      uid: '3',
      name: 'Tim Draper',
      status: 'Founder, DFJ',
      position: 'Ideaflow Investor',
      imgUrl:
        'https://attiehandassociates.co.za/wp-content/uploads/2014/08/Profile-Pic-Demo.png',
      desc: 'The amount of value that can be unlocked by connecting the right people and ideas together is incredible. I’m very excited for what Ideaflow is building',
    },
    {
      uid: '4',
      name: 'Harshit Mishra',
      status: 'Full Stack Developer',
      position: 'Ideaflow Developer',
      imgUrl:
        'https://attiehandassociates.co.za/wp-content/uploads/2014/08/Profile-Pic-Demo.png',
      desc: 'Ideaflow is the force multiplier for business productivity in this new normal.',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Advisors</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imgUrl, position, desc}) => (
          <View key={uid} style={styles.deckCard}>
            <View style={styles.userCard}>
              <View style={styles.userHeadBox}>
                <View style={styles.imgDiv}>
                  <Image source={{uri: imgUrl}} style={styles.userImage} />
                </View>
                <View style={styles.textDiv}>
                  <Text style={styles.userName}>{name}</Text>
                  <Text style={styles.userStatus}>{status}</Text>
                  <Text style={styles.userPosition}>{position}</Text>
                </View>
              </View>
              <View>
                <Text style={styles.userDescription}>{desc}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 30,
    paddingBottom: 20,
    color: '#FFFFFF',
  },

  container: {
    paddingHorizontal: 30,
    marginBottom: 5,
  },
  deckCard: {
    backgroundColor: '#0e0e0e',
    marginBottom: 15,
  },
  userCard: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  userHeadBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'nowrap',
  },
  imgDiv: {
    width: '50%',
  },
  textDiv: {
    width: '50%',
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 60 / 2,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  userStatus: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  userPosition: {
    color: '#FFFFFF',
  },
  userDescription: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});
