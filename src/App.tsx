import React, {useState, useEffect} from 'react';
import Card from './components/Card';
import {
  SafeAreaView,
  ScrollView,
  Button,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  useColorScheme,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;
function App(): React.JSX.Element {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(colorScheme);

  useEffect(() => {
    setTheme(colorScheme);
  }, [colorScheme]);

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        theme === 'dark' ? styles.darkTheme : styles.lightTheme,
      ]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar
          barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
          hidden={false}
          backgroundColor={theme === 'dark' ? '#000000' : '#FFFFFF'}
          translucent={true}
        />
        <View style={styles.container}>
          <View>
            <Text style={styles.logo}>IdeaFlow</Text>
          </View>
          <Separator />
          <View style={styles.navMenu}>
            <View style={styles.navItem}>
              <Text style={styles.navText}>Home</Text>
            </View>
            <View style={styles.navItem}>
              <Text style={styles.navText}>About Us</Text>
            </View>
            <View style={styles.navItem}>
              <Text style={styles.navText}>Contact Us</Text>
            </View>
          </View>
          <View>
            <View>
              <Image
                source={{
                  uri: 'https://png.pngtree.com/background/20230527/original/pngtree-futuristic-city-with-a-futuristic-design-picture-image_2767766.jpg',
                }}
                style={styles.imgDemo}
              />
            </View>
            <View style={styles.divTitle}>
              <Text style={styles.divTitleText}>future ahead</Text>
            </View>
            <View style={styles.divDesc}>
              <Text style={styles.divDescText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                ducimus alias modi harum, molestias, praesentium et at dicta
                eligendi perferendis adipisci velit fugiat facilis? Unde enim
                laudantium magnam autem deserunt!
              </Text>
            </View>
            <Button
              // onPress={onPressLearnMore}
              title="Learn More"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
          <View style={styles.AboutUs}>
            <Text style={styles.aboutUsHeading}>About us</Text>
            <Text style={styles.aboutUsHeadingDesc}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
              error minus numquam aliquam tempora dicta a autem vero, voluptate
              perspiciatis quidem dolorum illum aspernatur in consequuntur iusto
              eius voluptatibus! Eligendi eaque sed iusto reiciendis? Asperiores
              necessitatibus quas ipsam in nam libero sapiente, ex voluptatem,
              animi architecto temporibus reiciendis laudantium. Illum?
            </Text>
          </View>
          <View>
            <Card />
          </View>
          <View style={styles.soloCard}>
            <Text style={styles.soloCardText}>Awesome place</Text>
            <View style={styles.iconSection}>
              <View>
                <Image
                  source={{
                    uri: 'https://wallpapers.com/images/hd/neon-blue-domo-logo-m89momzcez2oiqeo.jpg',
                  }}
                  style={styles.soloCardImg}
                />
              </View>
              <View>
                <Text style={styles.soloCardDesc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                  eos perferendis. Libero ex assumenda obcaecati, sunt
                  dignissimos non distinctio consequuntur eos ad iusto eveniet
                  fugit fugiat corrupti, velit quaerat. Possimus.
                </Text>
              </View>
            </View>
            <View style={styles.iconSection}>
              <View>
                <Image
                  source={{
                    uri: 'https://wallpapers.com/images/hd/neon-blue-domo-logo-m89momzcez2oiqeo.jpg',
                  }}
                  style={styles.soloCardImg}
                />
              </View>
              <View>
                <Text style={styles.soloCardDesc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                  eos perferendis. Libero ex assumenda obcaecati, sunt
                  dignissimos non distinctio consequuntur eos ad iusto eveniet
                  fugit fugiat corrupti, velit quaerat. Possimus.
                </Text>
              </View>
            </View>
            <View style={styles.iconSection}>
              <View>
                <Image
                  source={{
                    uri: 'https://wallpapers.com/images/hd/neon-blue-domo-logo-m89momzcez2oiqeo.jpg',
                  }}
                  style={styles.soloCardImg}
                />
              </View>
              <View>
                <Text style={styles.soloCardDesc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                  eos perferendis. Libero ex assumenda obcaecati, sunt
                  dignissimos non distinctio consequuntur eos ad iusto eveniet
                  fugit fugiat corrupti, velit quaerat. Possimus.
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text>lmnop</Text>
            <Button
              // onPress={onPressLearnMore}
              title="Learn More"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />

            <View style={styles.soloCard}>
              <Text>abc</Text>
              <Text>def</Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                asperiores ipsam provident eaque adipisci assumenda doloremque
                architecto omnis non, minus corporis natus iste, voluptatibus
                beatae eveniet! A sequi ullam sed.
              </Text>
              <Text>Apply Now</Text>
            </View>
            <Text>abc</Text>
            <View style={styles.soloCard}>
              <Text>abc</Text>
              <Text>def</Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                asperiores ipsam provident eaque adipisci assumenda doloremque
                architecto omnis non, minus corporis natus iste, voluptatibus
                beatae eveniet! A sequi ullam sed.
              </Text>
              <Text>Apply Now</Text>
            </View>
            <View style={styles.soloCard}>
              <Text>abc</Text>
              <Text>def</Text>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                asperiores ipsam provident eaque adipisci assumenda doloremque
                architecto omnis non, minus corporis natus iste, voluptatibus
                beatae eveniet! A sequi ullam sed.
              </Text>
              <Text>Apply Now</Text>
            </View>
            <Text>abc</Text>
            <Text>abc</Text>
            <Text>abc</Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footLogo}>TRINKET</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // marginHorizontal: 5,
    marginTop: 25,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    // marginTop: 30,
  },
  logo: {
    fontSize: 24,
    textAlign: 'center',
  },
  navMenu: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 4,
  },
  navItem: {
    // marginBottom: 10,
  },
  navText: {
    fontSize: 20,
    fontWeight: '700',
  },
  imgDemo: {
    height: 200,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  divTitle: {},
  divTitleText: {},
  divDesc: {},
  divDescText: {},
  AboutUs: {},
  aboutUsHeading: {},
  aboutUsHeadingDesc: {},
  soloCard: {
    display: 'flex',
    marginBottom: 4,
    paddingLeft: 3,
    paddingRight: 3,
    backgroundColor: '#8D3DAF',
    padding: 4,
    borderRadius: 10,
  },
  soloCardText: {
    textAlign: 'center',
  },
  iconSection: {
    flexDirection: 'row',
  },
  soloCardImg: {
    width: 50,
    height: 50,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  soloCardDesc: {},
  footer: {
    backgroundColor: '#000000',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  footLogo: {
    fontSize: 24,
    fontFamily: 'Times New Roman',
  },

  // Add new styles for dark and light themes
  lightTheme: {
    backgroundColor: '#FFFFFF',
  },
  darkTheme: {
    backgroundColor: '#000000',
  },
  lightText: {
    color: '#000000',
  },
  darkText: {
    color: '#FFFFFF',
  },
});

export default App;
