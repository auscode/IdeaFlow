import React from 'react';
import Card from './components/Card';
// import ClipboardSection from './components/ClipboardSection';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;
function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor="#000000" translucent={true} />
        <View style={styles.container}>
          <View>
            <Text style={styles.logo}>IdeaFlow</Text>
          </View>
          <Separator />
          <View style={styles.imgTopSection}>
            <View>
              <Image
                source={{
                  uri: 'https://png.pngtree.com/background/20230527/original/pngtree-futuristic-city-with-a-futuristic-design-picture-image_2767766.jpg',
                }}
                style={styles.imgDemo}
              />
            </View>
            <View style={styles.divTitle}>
              <Text style={styles.divTitleText2}>
                The Intelligence Amplification Company
              </Text>
            </View>
            <View style={styles.divDesc}>
              <Text style={styles.divDescText}>
                We’re creating an ecosystem for humans and machines to work
                together to solve the world’s most important problems – starting
                with a notebook that augments your intelligence.
              </Text>
            </View>
            <View>
              <TouchableOpacity style={styles.learnMoreButton}>
                <Text style={styles.learnMoreButtonText}>
                  Try Ideaflow Notes
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnSupportLinks}>
              <View>
                <Text style={styles.btnSupportLinksText}>ios</Text>
              </View>
              <View>
                <Text style={styles.btnSupportLinksText}>Guide</Text>
              </View>
              <View>
                <Text style={styles.btnSupportLinksText}>Twitter</Text>
              </View>
              <View>
                <Text style={styles.btnSupportLinksText}>Letter</Text>
              </View>
            </View>
          </View>
          <View style={styles.AboutUs}>
            <Text style={styles.aboutUsHeading}>
              Connecting people with matching puzzle pieces
            </Text>
            <Separator />
            <Text style={styles.aboutUsHeadingDesc}>
              There are millions of scientists trying to cure the likes of AIDS
              and Alzheimer’s. Maybe the cure is currently separated in
              different people’s heads. How can we design the web so that these
              half-formed solutions can come together?
            </Text>
            <Text style={styles.aboutUsHeadingDescTag}>
              - Sir Tim Berners-Lee, Creator of the Web
            </Text>
          </View>
          <View style={styles.imgTopSection}>
            <View>
              <Image
                source={{
                  uri: 'https://i.pinimg.com/originals/a1/77/df/a177dfc84703c31afa0d501ccf43fe4f.gif',
                }}
                style={styles.imgDemo2}
              />
            </View>
            <View style={styles.divTitle}>
              <Text style={styles.divTitleText2}>
                The auto-suggest layer for human thinking
              </Text>
            </View>
            <Separator />
            <View style={styles.divDesc}>
              <Text style={styles.divDescText2}>
                Connect fragments of information from siloed sources faster than
                ever before.
              </Text>
              <Text style={styles.divDescText2}>
                Your organization's collective memory at your fingertips.
              </Text>
            </View>
            <View>
              <TouchableOpacity style={styles.learnMoreButton}>
                <Text style={styles.learnMoreButtonText}>Learn More</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.cardDiv}>
            <Card />
          </View>
          <View style={styles.whiteDiv}>
            <View style={styles.sectionLast}>
              <Text style={styles.sectionText1}> We're Hiring Key Roles </Text>
              <Text style={styles.sectionText2}>
                {' '}
                Help us extend the human mind.{' '}
              </Text>
              <TouchableOpacity style={styles.learnMoreButton}>
                <Text style={styles.learnMoreButtonText}>
                  Join us or refer someone!
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.containerFoot}>
            <View style={styles.footer}>
              <Text style={styles.footLogo}>TRINKET</Text>
            </View>

            <View style={styles.footerContent}>
              <Text style={styles.footerTitle}>Explore</Text>
              <Text style={styles.footerLink}>#rabbithole</Text>
              <Text style={styles.footerLink}>Memex</Text>
              <Text style={styles.footerLink}>
                Niklas Luhmann's Zettelkasten
              </Text>
              <Text style={styles.footerLink}>Collective IQ</Text>
              <Text style={styles.footerLink}>Intelligence amplification</Text>
              <Text style={styles.footerLink}>
                Tim Berners-Lee’s Giant Global Graph
              </Text>
              <Text style={styles.footerLink}>Polymath Project</Text>
              <Text style={styles.footerLink}>
                Category Theory for Scientists
              </Text>
              <Text style={styles.footerLink}>ideaflowplan.jacobcole.net</Text>
              <Text style={styles.footerLink}>Privacy Policy</Text>
            </View>

            <View style={styles.footerContent}>
              <Text style={styles.footerTitle}>Updates</Text>
              <Text style={styles.footerLink}>Latest updates</Text>
              <Text style={styles.footerLink}>Blog</Text>
              <Text style={styles.footerLink}>Funding</Text>
              <Text style={styles.footerLink}>Bullet View Video</Text>
            </View>

            <View style={styles.footerContent}>
              <Text style={styles.footerTitle}>Connect</Text>
              <Text style={styles.footerLink}>Contact</Text>
              <Text style={styles.footerLink}>Email</Text>
              <Text style={styles.footerLink}>Linkedin</Text>
              <Text style={styles.footerLink}>Facebook</Text>
              <Text style={styles.footerLink}>Twitter</Text>
            </View>
            <Text style={styles.copyrightText}>
              Copyright © 2020 Ideaflow, Inc. All rights reserved.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    marginVertical: 30,
  },
  logo: {
    fontSize: 24,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  imgTopSection: {
    marginTop: 30,
    marginHorizontal: 20,
    marginBottom: 30,
  },
  imgDemo: {
    height: 400,
    borderRadius: 6,
    marginBottom: 30,
  },
  imgDemo2: {
    height: 450,
    borderRadius: 6,
    marginBottom: 30,
  },
  divTitle: {
    marginTop: 10,
  },
  divTitleText: {
    textAlign: 'left',
    fontSize: 40,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  divTitleText2: {
    textAlign: 'left',
    fontSize: 30,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  divDesc: {
    marginVertical: 10,
  },
  divDescText: {
    marginVertical: 10,
    textAlign: 'left',
    fontSize: 20,
    fontWeight: '300',
    color: '#FFFFFF',
  },
  divDescText2: {
    marginVertical: 10,
    textAlign: 'left',
    fontSize: 20,
    fontWeight: '200',
    color: '#FFFFFF',
  },
  learnMoreButton: {
    borderRadius: 5,
    backgroundColor: '#0B60B0',
    padding: 10,
    alignItems: 'center',
  },
  learnMoreButtonText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 20,
  },
  btnSupportLinks: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginVertical: 20,
  },
  btnSupportLinksText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#40A2D8',
  },
  AboutUs: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  aboutUsHeading: {
    fontSize: 35,
    fontWeight: '700',
    textAlign: 'left',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  aboutUsHeadingDesc: {
    fontSize: 20,
    textAlign: 'left',
    fontStyle: 'italic',
    fontWeight: '300',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  aboutUsHeadingDescTag: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 15,
    textAlign: 'left',
    color: '#FFFFFF',
    fontStyle: 'italic',
    fontWeight: '100',
  },

  cardDiv: {
    marginTop: 20,
  },
  whiteDiv: {
    backgroundColor: '#FFFFFF',
  },
  sectionLast: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  sectionText1: {
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
    marginVertical: 5,
    color: '#000000',
  },
  sectionText2: {
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'center',
    marginVertical: 5,
    color: '#000000',
  },

  containerFoot: {
    flex: 1,
    backgroundColor: '#000000',
    paddingVertical: 10,
  },
  footer: {
    marginHorizontal: 20,
  },
  footLogo: {
    fontSize: 24,
    fontFamily: 'Times New Roman',
    color: 'white',
    fontWeight: '600',
  },
  footerContent: {
    marginVertical: 10,
    marginHorizontal: 20,
    color: 'white',
  },
  footerTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  footerLink: {
    color: 'white',
    marginBottom: 5,
  },
  copyrightText: {
    marginBottom: 5,
    marginHorizontal: 20,
    color: '#FFFFFF',
  },
});

export default App;
