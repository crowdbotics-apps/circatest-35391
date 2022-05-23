import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_5_1476}>
        <View style={styles.View_5_1477}>
          <View style={styles.View_5_1478}>
            <View style={styles.View_I5_1478_224_250} />
            <View style={styles.View_I5_1478_224_271}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3ff/a596/7bf2c7c0340a148b9aaafe7ea457e03f"
                }}
                style={styles.ImageBackground_I5_1478_224_271_177_507}
              />
            </View>
            <View style={styles.View_I5_1478_476_16867}>
              <View style={styles.View_I5_1478_476_16867_476_11864} />
            </View>
            <View style={styles.View_I5_1478_224_252}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4aa/8bac/94185a0c3762abd8ed6381c6587759c2"
                }}
                style={styles.ImageBackground_I5_1478_224_252_175_1485}
              />
            </View>
            <View style={styles.View_I5_1478_224_253}>
              <Text style={styles.Text_I5_1478_224_253}>7th</Text>
            </View>
            <View style={styles.View_I5_1478_224_254}>
              <View style={styles.View_I5_1478_224_254_175_1584} />
            </View>
          </View>
          <View style={styles.View_5_1479}>
            <View style={styles.View_I5_1479_224_256} />
            <View style={styles.View_I5_1479_224_274}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3ff/a596/7bf2c7c0340a148b9aaafe7ea457e03f"
                }}
                style={styles.ImageBackground_I5_1479_224_274_177_507}
              />
            </View>
            <View style={styles.View_I5_1479_476_17009}>
              <View style={styles.View_I5_1479_476_17009_476_11864} />
            </View>
            <View style={styles.View_I5_1479_224_258}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4aa/8bac/94185a0c3762abd8ed6381c6587759c2"
                }}
                style={styles.ImageBackground_I5_1479_224_258_175_1485}
              />
            </View>
            <View style={styles.View_I5_1479_224_259}>
              <Text style={styles.Text_I5_1479_224_259}>16th</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_5_1480}>
          <Text style={styles.Text_5_1480}>Dates</Text>
        </View>
      </View>
      <View style={styles.View_5_1481}>
        <TouchableOpacity
          style={styles.TouchableOpacity_I5_1481_210_1}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("122_2414"))
          }
        >
          <View style={styles.View_I5_1481_210_1_202_2778} />
          <View style={styles.View_I5_1481_210_1_202_2800}>
            <Text style={styles.Text_I5_1481_210_1_202_2800}>
              Pay half between the 1st &amp; 12th and the rest between the 13th
              &amp; 24th
            </Text>
          </View>
          <View style={styles.View_I5_1481_210_1_202_2780} />
          <View style={styles.View_I5_1481_210_1_476_15917}>
            <View style={styles.View_I5_1481_210_1_476_15917_476_11864} />
          </View>
          <View style={styles.View_I5_1481_210_1_202_2783}>
            <Text style={styles.Text_I5_1481_210_1_202_2783}>2 Date</Text>
          </View>
          <View style={styles.View_I5_1481_210_1_202_2784}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28a2/62de/9702bb09401a87757be89987e4f22391"
              }}
              style={styles.ImageBackground_I5_1481_210_1_202_2784_202_2729}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I5_1481_210_10}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("122_2440"))
          }
        >
          <View style={styles.View_I5_1481_210_10_202_2804} />
          <View style={styles.View_I5_1481_210_10_202_2867}>
            <Text style={styles.Text_I5_1481_210_10_202_2867}>
              Pay according to biweekly paydays. Max 2 payments per month
            </Text>
          </View>
          <View style={styles.View_I5_1481_210_10_476_16172}>
            <View style={styles.View_I5_1481_210_10_476_16172_476_11864} />
          </View>
          <View style={styles.View_I5_1481_210_10_202_2807}>
            <Text style={styles.Text_I5_1481_210_10_202_2807}>Alternating</Text>
          </View>
          <View style={styles.View_I5_1481_210_10_202_2808}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a11/e9e6/a94cfc98ded4124c6949e4f4ee41c570"
              }}
              style={styles.ImageBackground_I5_1481_210_10_202_2808_202_2733}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I5_1481_210_21}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("122_2467"))
          }
        >
          <View style={styles.View_I5_1481_210_21_202_2944} />
          <View style={styles.View_I5_1481_210_21_202_3010}>
            <Text style={styles.Text_I5_1481_210_21_202_3010}>
              Pay half on 2nd and 4th weekday of choice every month
            </Text>
          </View>
          <View style={styles.View_I5_1481_210_21_476_16760}>
            <View style={styles.View_I5_1481_210_21_476_16760_476_11864} />
          </View>
          <View style={styles.View_I5_1481_210_21_202_2947}>
            <Text style={styles.Text_I5_1481_210_21_202_2947}>
              2nd &amp; 4th
            </Text>
          </View>
          <View style={styles.View_I5_1481_210_21_202_2948}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/304c/9fe6/2941c388def4c62fbd47394e0ecfb0b3"
              }}
              style={styles.ImageBackground_I5_1481_210_21_202_2948_202_2745}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I5_1481_210_32}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("122_2494"))
          }
        >
          <View style={styles.View_I5_1481_210_32_202_2874} />
          <View style={styles.View_I5_1481_210_32_202_3012}>
            <Text style={styles.Text_I5_1481_210_32_202_3012}>
              Pay half on 1st and 3rd weekday of choice every month
            </Text>
          </View>
          <View style={styles.View_I5_1481_210_32_476_16279}>
            <View style={styles.View_I5_1481_210_32_476_16279_476_11864} />
          </View>
          <View style={styles.View_I5_1481_210_32_202_2877}>
            <Text style={styles.Text_I5_1481_210_32_202_2877}>
              1st &amp; 3rd
            </Text>
          </View>
          <View style={styles.View_I5_1481_210_32_202_2878}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d536/92a8/03cf0e06a71d742502b12d991f60f0e1"
              }}
              style={styles.ImageBackground_I5_1481_210_32_202_2878_202_2739}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.View_I5_1481_210_43}>
          <Text style={styles.Text_I5_1481_210_43}>Schedule</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I5_1481_210_44}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("122_2524"))
          }
        >
          <View style={styles.View_I5_1481_210_44_197_2604}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e89b/2b5d/bfe1168245b10a9f8098c72eb2525829"
              }}
              style={styles.ImageBackground_I5_1481_210_44_4645_38209}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/867c/37c3/1b0003f5bf0968cc493ac57c8cbff13d"
              }}
              style={styles.ImageBackground_I5_1481_210_44_197_2607}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_5_1482}>
        <TouchableOpacity
          style={styles.TouchableOpacity_I5_1482_197_2694}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("122_2777"))
          }
        >
          <View style={styles.View_I5_1482_197_2694_185_1281} />
          <View style={styles.View_I5_1482_197_2694_185_1282}>
            <Text style={styles.Text_I5_1482_197_2694_185_1282}>
              Pay rent in full anytime between the 1st and 5th of the month
            </Text>
          </View>
          <View style={styles.View_I5_1482_197_2694_476_11867}>
            <View style={styles.View_I5_1482_197_2694_476_11867_476_11864} />
          </View>
          <View style={styles.View_I5_1482_197_2694_185_1284}>
            <Text style={styles.Text_I5_1482_197_2694_185_1284}>FREE</Text>
          </View>
          <View style={styles.View_I5_1482_197_2694_185_1285}>
            <Text style={styles.Text_I5_1482_197_2694_185_1285}>1 Pay</Text>
          </View>
          <View style={styles.View_I5_1482_197_2694_185_1376}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ae6/db19/bcdd7062f91964ea11aaf1b78fc52e5e"
              }}
              style={styles.ImageBackground_I5_1482_197_2694_185_1376_175_1516}
            />
            <View style={styles.View_I5_1482_197_2694_185_1376_175_1517}>
              <Text style={styles.Text_I5_1482_197_2694_185_1376_175_1517}>
                1
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I5_1482_197_2695}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("122_2824"))
          }
        >
          <View style={styles.View_I5_1482_197_2695_197_2403} />
          <View style={styles.View_I5_1482_197_2695_197_2461}>
            <Text style={styles.Text_I5_1482_197_2695_197_2461}>
              Pay rent in full anytime between the 6th and 15th of the month
            </Text>
          </View>
          <View style={styles.View_I5_1482_197_2695_476_13261}>
            <View style={styles.View_I5_1482_197_2695_476_13261_476_11864} />
          </View>
          <View style={styles.View_I5_1482_197_2695_197_2406}>
            <Text style={styles.Text_I5_1482_197_2695_197_2406}>
              1.5% of rent
            </Text>
          </View>
          <View style={styles.View_I5_1482_197_2695_197_2407}>
            <Text style={styles.Text_I5_1482_197_2695_197_2407}>
              1 Deferred
            </Text>
          </View>
          <View style={styles.View_I5_1482_197_2695_197_2408}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ae6/db19/bcdd7062f91964ea11aaf1b78fc52e5e"
              }}
              style={styles.ImageBackground_I5_1482_197_2695_197_2408_175_1519}
            />
            <View style={styles.View_I5_1482_197_2695_197_2408_175_1520}>
              <Text style={styles.Text_I5_1482_197_2695_197_2408_175_1520}>
                1
              </Text>
            </View>
            <View style={styles.View_I5_1482_197_2695_197_2408_175_1521}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/364e/a9e6/c970b33d68cbc7f8947d87f1ccc0352d"
                }}
                style={
                  styles.ImageBackground_I5_1482_197_2695_197_2408_175_1522
                }
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I5_1482_197_2696}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("122_2871"))
          }
        >
          <View style={styles.View_I5_1482_197_2696_197_2498} />
          <View style={styles.View_I5_1482_197_2696_197_2533}>
            <Text style={styles.Text_I5_1482_197_2696_197_2533}>
              Pay rent in two equal payments throughout the month
            </Text>
          </View>
          <View style={styles.View_I5_1482_197_2696_197_2500} />
          <View style={styles.View_I5_1482_197_2696_476_14705}>
            <View style={styles.View_I5_1482_197_2696_476_14705_476_11864} />
          </View>
          <View style={styles.View_I5_1482_197_2696_197_2502}>
            <Text style={styles.Text_I5_1482_197_2696_197_2502}>
              1.5% of rent
            </Text>
          </View>
          <View style={styles.View_I5_1482_197_2696_197_2503}>
            <Text style={styles.Text_I5_1482_197_2696_197_2503}>2 Pay</Text>
          </View>
          <View style={styles.View_I5_1482_197_2696_197_2504}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ae6/db19/bcdd7062f91964ea11aaf1b78fc52e5e"
              }}
              style={styles.ImageBackground_I5_1482_197_2696_197_2504_175_1525}
            />
            <View style={styles.View_I5_1482_197_2696_197_2504_175_1526}>
              <Text style={styles.Text_I5_1482_197_2696_197_2504_175_1526}>
                2
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I5_1482_197_2697}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("122_2915"))
          }
        >
          <View style={styles.View_I5_1482_197_2697_197_2538} />
          <View style={styles.View_I5_1482_197_2697_197_2584}>
            <Text style={styles.Text_I5_1482_197_2697_197_2584}>
              Pay rent in four equal payments throughout the month
            </Text>
          </View>
          <View style={styles.View_I5_1482_197_2697_476_15302}>
            <View style={styles.View_I5_1482_197_2697_476_15302_476_11864} />
          </View>
          <View style={styles.View_I5_1482_197_2697_197_2541}>
            <Text style={styles.Text_I5_1482_197_2697_197_2541}>
              1.5% of rent
            </Text>
          </View>
          <View style={styles.View_I5_1482_197_2697_197_2542}>
            <Text style={styles.Text_I5_1482_197_2697_197_2542}>4 Pay</Text>
          </View>
          <View style={styles.View_I5_1482_197_2697_197_2543}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ae6/db19/bcdd7062f91964ea11aaf1b78fc52e5e"
              }}
              style={styles.ImageBackground_I5_1482_197_2697_197_2543_175_1528}
            />
            <View style={styles.View_I5_1482_197_2697_197_2543_175_1529}>
              <Text style={styles.Text_I5_1482_197_2697_197_2543_175_1529}>
                4
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_I5_1482_197_2698}>
          <Text style={styles.Text_I5_1482_197_2698}>Plan</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I5_1482_197_2699}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("122_2965"))
          }
        >
          <View style={styles.View_I5_1482_197_2699_197_2604}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d3e/e63a/b880533514f4dc5c25b0b785e2027c4e"
              }}
              style={styles.ImageBackground_I5_1482_197_2699_4645_38209}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/554e/4a61/291e38a212079d9850414bfc9913f8c5"
              }}
              style={styles.ImageBackground_I5_1482_197_2699_197_2607}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_5_1483}>
        <View style={styles.View_5_1484} />
        <View style={styles.View_5_1485}>
          <Text style={styles.Text_5_1485}>You pay</Text>
        </View>
        <View style={styles.View_5_1486}>
          <Text style={styles.Text_5_1486}>$505</Text>
        </View>
        <View style={styles.View_5_1487}>
          <Text style={styles.Text_5_1487}>on the </Text>
        </View>
        <View style={styles.View_5_1488}>
          <Text style={styles.Text_5_1488}>7th &amp; 16th</Text>
        </View>
      </View>
      <View style={styles.View_5_1489}>
        <View style={styles.View_I5_1489_228_176}>
          <Text style={styles.Text_I5_1489_228_176}>Select Your Plan</Text>
        </View>
        <View style={styles.View_I5_1489_228_177}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba30/b758/2150ad9262068f872f9328883a5e36c8"
            }}
            style={styles.ImageBackground_I5_1489_228_177_154_460}
          />
        </View>
      </View>
      <View style={styles.View_5_1490}>
        <View style={styles.View_I5_1490_137_722} />
      </View>
      <View style={styles.View_108_3786}>
        <View style={styles.View_I108_3786_108_3785}>
          <Text style={styles.Text_I108_3786_108_3785}>1</Text>
        </View>
      </View>
      <View style={styles.View_5_1491}>
        <View style={styles.View_I5_1491_137_706}>
          <View style={styles.View_I5_1491_137_707} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/525b/1182/3379c8a6088a242fe4f03785d2d970eb"
            }}
            style={styles.ImageBackground_I5_1491_137_708}
          />
          <View style={styles.View_I5_1491_137_709} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b81/843f/2074ecb78b933ae2dfe895e1affaec7a"
          }}
          style={styles.ImageBackground_I5_1491_137_710}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c15/8f2b/0490361ab74ccb4989d0ed026428146e"
          }}
          style={styles.ImageBackground_I5_1491_137_714}
        />
        <View style={styles.View_I5_1491_137_719}>
          <View style={styles.View_I5_1491_137_720}>
            <Text style={styles.Text_I5_1491_137_720}>9:41</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(249, 250, 254, 1)" },
  View_2: { height: hp("111%") },
  View_5_1476: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("93%")
  },
  View_5_1477: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1478: {
    width: wp("91%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I5_1478_224_250: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I5_1478_224_271: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I5_1478_224_271_177_507: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I5_1478_476_16867: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1478_476_16867_476_11864: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(236, 235, 255, 1)"
  },
  View_I5_1478_224_252: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I5_1478_224_252_175_1485: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I5_1478_224_253: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I5_1478_224_253: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1478_224_254: {
    flexGrow: 1,
    width: wp("74%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1478_224_254_175_1584: {
    flexGrow: 1,
    width: wp("74%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)"
  },
  View_5_1479: {
    width: wp("91%"),
    height: hp("9%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I5_1479_224_256: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I5_1479_224_274: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I5_1479_224_274_177_507: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I5_1479_476_17009: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1479_476_17009_476_11864: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(236, 235, 255, 1)"
  },
  View_I5_1479_224_258: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I5_1479_224_258_175_1485: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I5_1479_224_259: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I5_1479_224_259: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1480: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "center"
  },
  Text_5_1480: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1481: {
    width: wp("91%"),
    height: hp("24%"),
    top: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_I5_1481_210_1: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I5_1481_210_1_202_2778: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(106, 103, 206, 1)",
    borderWidth: 3
  },
  View_I5_1481_210_1_202_2800: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I5_1481_210_1_202_2800: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1481_210_1_202_2780: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-12%"),
    borderColor: "rgba(106, 103, 206, 1)",
    borderWidth: 3
  },
  View_I5_1481_210_1_476_15917: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1481_210_1_476_15917_476_11864: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(236, 235, 255, 1)"
  },
  View_I5_1481_210_1_202_2783: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I5_1481_210_1_202_2783: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1481_210_1_202_2784: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I5_1481_210_1_202_2784_202_2729: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  TouchableOpacity_I5_1481_210_10: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I5_1481_210_10_202_2804: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I5_1481_210_10_202_2867: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I5_1481_210_10_202_2867: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1481_210_10_476_16172: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1481_210_10_476_16172_476_11864: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(236, 235, 255, 1)"
  },
  View_I5_1481_210_10_202_2807: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I5_1481_210_10_202_2807: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1481_210_10_202_2808: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I5_1481_210_10_202_2808_202_2733: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_I5_1481_210_21: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I5_1481_210_21_202_2944: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I5_1481_210_21_202_3010: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I5_1481_210_21_202_3010: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1481_210_21_476_16760: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1481_210_21_476_16760_476_11864: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(236, 235, 255, 1)"
  },
  View_I5_1481_210_21_202_2947: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I5_1481_210_21_202_2947: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1481_210_21_202_2948: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I5_1481_210_21_202_2948_202_2745: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_I5_1481_210_32: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I5_1481_210_32_202_2874: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I5_1481_210_32_202_3012: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I5_1481_210_32_202_3012: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1481_210_32_476_16279: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1481_210_32_476_16279_476_11864: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(236, 235, 255, 1)"
  },
  View_I5_1481_210_32_202_2877: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I5_1481_210_32_202_2877: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1481_210_32_202_2878: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I5_1481_210_32_202_2878_202_2739: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I5_1481_210_43: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I5_1481_210_43: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I5_1481_210_44: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I5_1481_210_44_197_2604: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1481_210_44_4645_38209: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I5_1481_210_44_197_2607: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1482: {
    width: wp("91%"),
    height: hp("24%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_I5_1482_197_2694: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I5_1482_197_2694_185_1281: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I5_1482_197_2694_185_1282: {
    flexGrow: 1,
    width: wp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I5_1482_197_2694_185_1282: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1482_197_2694_476_11867: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1482_197_2694_476_11867_476_11864: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(236, 235, 255, 1)"
  },
  View_I5_1482_197_2694_185_1284: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I5_1482_197_2694_185_1284: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1482_197_2694_185_1285: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I5_1482_197_2694_185_1285: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1482_197_2694_185_1376: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I5_1482_197_2694_185_1376_175_1516: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I5_1482_197_2694_185_1376_175_1517: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I5_1482_197_2694_185_1376_175_1517: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I5_1482_197_2695: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I5_1482_197_2695_197_2403: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I5_1482_197_2695_197_2461: {
    flexGrow: 1,
    width: wp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I5_1482_197_2695_197_2461: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1482_197_2695_476_13261: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1482_197_2695_476_13261_476_11864: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(236, 235, 255, 1)"
  },
  View_I5_1482_197_2695_197_2406: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I5_1482_197_2695_197_2406: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1482_197_2695_197_2407: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I5_1482_197_2695_197_2407: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1482_197_2695_197_2408: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I5_1482_197_2695_197_2408_175_1519: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I5_1482_197_2695_197_2408_175_1520: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I5_1482_197_2695_197_2408_175_1520: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1482_197_2695_197_2408_175_1521: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I5_1482_197_2695_197_2408_175_1522: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_I5_1482_197_2696: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I5_1482_197_2696_197_2498: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(106, 103, 206, 1)",
    borderWidth: 3
  },
  View_I5_1482_197_2696_197_2533: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I5_1482_197_2696_197_2533: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1482_197_2696_197_2500: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-12%"),
    borderColor: "rgba(106, 103, 206, 1)",
    borderWidth: 3
  },
  View_I5_1482_197_2696_476_14705: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1482_197_2696_476_14705_476_11864: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(236, 235, 255, 1)"
  },
  View_I5_1482_197_2696_197_2502: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I5_1482_197_2696_197_2502: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1482_197_2696_197_2503: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I5_1482_197_2696_197_2503: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1482_197_2696_197_2504: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I5_1482_197_2696_197_2504_175_1525: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I5_1482_197_2696_197_2504_175_1526: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I5_1482_197_2696_197_2504_175_1526: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I5_1482_197_2697: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I5_1482_197_2697_197_2538: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I5_1482_197_2697_197_2584: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I5_1482_197_2697_197_2584: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1482_197_2697_476_15302: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1482_197_2697_476_15302_476_11864: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(236, 235, 255, 1)"
  },
  View_I5_1482_197_2697_197_2541: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I5_1482_197_2697_197_2541: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1482_197_2697_197_2542: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I5_1482_197_2697_197_2542: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1482_197_2697_197_2543: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I5_1482_197_2697_197_2543_175_1528: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I5_1482_197_2697_197_2543_175_1529: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I5_1482_197_2697_197_2543_175_1529: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1482_197_2698: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_1482_197_2698: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I5_1482_197_2699: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I5_1482_197_2699_197_2604: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1482_197_2699_4645_38209: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I5_1482_197_2699_197_2607: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1483: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("16%")
  },
  View_5_1484: {
    width: wp("91%"),
    height: hp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(30, 11, 102, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_5_1485: {
    width: wp("15%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_5_1485: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1486: {
    width: wp("25%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_5_1486: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1487: {
    width: wp("12%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    justifyContent: "flex-start"
  },
  Text_5_1487: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1488: {
    width: wp("38%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    justifyContent: "flex-start"
  },
  Text_5_1488: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1489: {
    width: wp("100%"),
    height: hp("7%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I5_1489_228_176: {
    flexGrow: 1,
    width: wp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I5_1489_228_176: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1489_228_177: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I5_1489_228_177_154_460: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_5_1490: {
    width: wp("100%"),
    height: hp("5%"),
    top: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1490_137_722: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_108_3786: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("66%"),
    backgroundColor: "rgba(24, 160, 251, 1)"
  },
  View_I108_3786_108_3785: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I108_3786_108_3785: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1491: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1491_137_706: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  View_I5_1491_137_707: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(25, 29, 33, 1)",
    borderWidth: 1
  },
  ImageBackground_I5_1491_137_708: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_I5_1491_137_709: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(20, 20, 42, 1)"
  },
  ImageBackground_I5_1491_137_710: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  ImageBackground_I5_1491_137_714: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I5_1491_137_719: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1491_137_720: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I5_1491_137_720: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 12,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
