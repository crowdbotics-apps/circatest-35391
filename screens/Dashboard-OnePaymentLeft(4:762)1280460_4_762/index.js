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
      <View style={styles.View_4_763}>
        <View style={styles.View_4_764} />
        <View style={styles.View_4_765}>
          <Text style={styles.Text_4_765}>$505 due in</Text>
        </View>
        <View style={styles.View_4_766}>
          <Text style={styles.Text_4_766}>5 days</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_4_767}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("114_3325"))
          }
        >
          <View style={styles.View_I4_767_175_1311}>
            <Text style={styles.Text_I4_767_175_1311}>modify</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_4_768}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I4_768_236_522}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("114_2797"))
            }
          >
            <View style={styles.View_I4_768_236_522_236_734}>
              <TouchableOpacity
                style={styles.TouchableOpacity_I4_768_236_522_236_735}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("114_2789")
                  )
                }
              >
                <View style={styles.View_I4_768_236_522_236_735_236_469}>
                  <Text style={styles.Text_I4_768_236_522_236_735_236_469}>
                    3944 Delancey
                  </Text>
                </View>
                <View style={styles.View_I4_768_236_522_236_735_236_489}>
                  <View
                    style={styles.View_I4_768_236_522_236_735_236_489_154_101}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.TouchableOpacity_I4_768_236_522_236_736}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("114_2789")
                  )
                }
              >
                <View style={styles.View_I4_768_236_522_236_736_236_469}>
                  <Text style={styles.Text_I4_768_236_522_236_736_236_469}>
                    500 Walnut #48
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.View_I4_768_236_522_236_737}>
              <View style={styles.View_I4_768_236_522_236_738}>
                <Text style={styles.Text_I4_768_236_522_236_738}>
                  123 Main Street #1A
                </Text>
              </View>
              <View style={styles.View_I4_768_236_522_236_739}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1157/c104/8ec7b6b1e18619b573c418e4a458643e"
                  }}
                  style={styles.ImageBackground_I4_768_236_522_236_739_236_51}
                />
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.View_I4_768_626_2115}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/185f/bfe8/c442ce61184e607db28abee8756e513c"
              }}
              style={styles.ImageBackground_I4_768_626_2115_144_655}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_4_769}>
        <View style={styles.View_4_770}>
          <View style={styles.View_I4_770_177_4} />
          <View style={styles.View_I4_770_494_1271}>
            <View style={styles.View_I4_770_494_1271_476_11864} />
          </View>
          <View style={styles.View_I4_770_177_6}>
            <Text style={styles.Text_I4_770_177_6}>$505</Text>
          </View>
          <View style={styles.View_I4_770_177_7}>
            <Text style={styles.Text_I4_770_177_7}>Jan 7</Text>
          </View>
          <View style={styles.View_I4_770_177_110}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/908e/31e3/a7c0abd3b33689902c86a9bbeab23fe7"
              }}
              style={styles.ImageBackground_I4_770_177_110_175_1525}
            />
            <View style={styles.View_I4_770_177_110_175_1526}>
              <Text style={styles.Text_I4_770_177_110_175_1526}>2</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_4_771}>
          <View style={styles.View_I4_771_177_144} />
          <View style={styles.View_I4_771_177_145}>
            <Text style={styles.Text_I4_771_177_145}>See all</Text>
          </View>
          <View style={styles.View_I4_771_177_151}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfc1/b405/109025109810195afc0ae204862219db"
              }}
              style={styles.ImageBackground_I4_771_177_151_177_147}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_4_772}>
        <View style={styles.View_I4_772_5560_47519}>
          <Text style={styles.Text_I4_772_5560_47519}>1</Text>
        </View>
      </View>
      <View style={styles.View_103_3376}>
        <Text style={styles.Text_103_3376}>widgets</Text>
      </View>
      <View style={styles.View_4_805}>
        <View style={styles.View_I4_805_144_70} />
        <View style={styles.View_I4_805_2511_17901}>
          <View style={styles.View_I4_805_144_770}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4c4/7645/eb18c075276bfda64c351eabd4b41549"
              }}
              style={styles.ImageBackground_I4_805_144_770_144_579}
            />
          </View>
          <View
            source={{ uri: "null" }}
            style={styles.View_I4_805_2511_17630}
          />
        </View>
        <View style={styles.View_I4_805_2511_20286}>
          <View style={styles.View_I4_805_595_33}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6afd/ec71/df5e0c33c2858d81dfc5e59da93fc505"
              }}
              style={styles.ImageBackground_I4_805_595_33_595_27}
            />
          </View>
          <View
            source={{ uri: "null" }}
            style={styles.View_I4_805_2511_18182}
          />
        </View>
        <View style={styles.View_I4_805_2511_20998}>
          <View style={styles.View_I4_805_144_870}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfa6/7c20/605a8ad25ba7faec99b01276f828c0b9"
              }}
              style={styles.ImageBackground_I4_805_144_870_144_589}
            />
          </View>
          <View
            source={{ uri: "null" }}
            style={styles.View_I4_805_2511_18882}
          />
        </View>
        <View style={styles.View_I4_805_2511_20637}>
          <View style={styles.View_I4_805_144_822}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79c2/7ee2/d8a5ec03658e71557fa5850c59ada8a3"
              }}
              style={styles.ImageBackground_I4_805_144_822_228_34}
            />
          </View>
          <View
            source={{ uri: "null" }}
            style={styles.View_I4_805_2511_18560}
          />
        </View>
        <View style={styles.View_I4_805_2462_14672}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3589/c59f/14d7df4d5aa26d58cbb279d42fc9178e"
            }}
            style={styles.ImageBackground_I4_805_2454_14657}
          />
          <View style={styles.View_I4_805_2859_15727}>
            <View style={styles.View_I4_805_2859_15727_2454_14658}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffa5/279d/b2b846f93b9026ad88accc168f0ea1ba"
                }}
                style={
                  styles.ImageBackground_I4_805_2859_15727_2454_14658_144_575
                }
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_4_806}>
        <View style={styles.View_I4_806_137_722} />
      </View>
      <View style={styles.View_4_807}>
        <View style={styles.View_I4_807_137_740}>
          <View style={styles.View_I4_807_137_741} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f42a/1606/503c13ffedd2dea885d01312f8573c77"
            }}
            style={styles.ImageBackground_I4_807_137_742}
          />
          <View style={styles.View_I4_807_137_743} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3600/2838/3894d8927595e78d5ffcb8f357b3824e"
          }}
          style={styles.ImageBackground_I4_807_137_744}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5b1/4af2/a5e6c0f60c15cfdeb166a41da89658a9"
          }}
          style={styles.ImageBackground_I4_807_137_748}
        />
        <View style={styles.View_I4_807_137_753}>
          <View style={styles.View_I4_807_137_754}>
            <Text style={styles.Text_I4_807_137_754}>9:41</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(249, 250, 254, 1)" },
  View_2: { height: hp("111%") },
  View_4_763: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_764: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(30, 11, 102, 1)"
  },
  View_4_765: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_4_765: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_766: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_4_766: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_4_767: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4_767_175_1311: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-end"
  },
  Text_I4_767_175_1311: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_4_768: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_I4_768_236_522: {
    flexGrow: 1,
    width: wp("59%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I4_768_236_522_236_734: {
    flexGrow: 1,
    width: wp("59%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  TouchableOpacity_I4_768_236_522_236_735: {
    width: wp("59%"),
    minWidth: wp("59%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I4_768_236_522_236_735_236_469: {
    flexGrow: 1,
    width: wp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I4_768_236_522_236_735_236_469: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I4_768_236_522_236_735_236_489: {
    flexGrow: 1,
    width: wp("59%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4_768_236_522_236_735_236_489_154_101: {
    flexGrow: 1,
    width: wp("59%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)"
  },
  TouchableOpacity_I4_768_236_522_236_736: {
    width: wp("59%"),
    minWidth: wp("59%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I4_768_236_522_236_736_236_469: {
    flexGrow: 1,
    width: wp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I4_768_236_522_236_736_236_469: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I4_768_236_522_236_737: {
    flexGrow: 1,
    width: wp("59%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4_768_236_522_236_738: {
    width: wp("39%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I4_768_236_522_236_738: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I4_768_236_522_236_739: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I4_768_236_522_236_739_236_51: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_I4_768_626_2115: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I4_768_626_2115_144_655: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_4_769: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4_770: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4_770_177_4: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I4_770_494_1271: {
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
  View_I4_770_494_1271_476_11864: {
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
  View_I4_770_177_6: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I4_770_177_6: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I4_770_177_7: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I4_770_177_7: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I4_770_177_110: {
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
  ImageBackground_I4_770_177_110_175_1525: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I4_770_177_110_175_1526: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I4_770_177_110_175_1526: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_771: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4_771_177_144: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I4_771_177_145: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I4_771_177_145: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I4_771_177_151: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I4_771_177_151_177_147: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_772: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("28%"),
    backgroundColor: "rgba(242, 72, 34, 1)"
  },
  View_I4_772_5560_47519: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I4_772_5560_47519: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_103_3376: {
    width: wp("55%"),
    minWidth: wp("55%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_103_3376: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_805: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("100%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4_805_144_70: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I4_805_2511_17901: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%")
  },
  View_I4_805_144_770: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I4_805_144_770_144_579: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I4_805_2511_17630: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I4_805_2511_20286: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("2%")
  },
  View_I4_805_595_33: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I4_805_595_33_595_27: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I4_805_2511_18182: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I4_805_2511_20998: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("2%")
  },
  View_I4_805_144_870: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I4_805_144_870_144_589: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I4_805_2511_18882: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I4_805_2511_20637: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("2%")
  },
  View_I4_805_144_822: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I4_805_144_822_228_34: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I4_805_2511_18560: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I4_805_2462_14672: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%")
  },
  ImageBackground_I4_805_2454_14657: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I4_805_2859_15727: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4_805_2859_15727_2454_14658: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I4_805_2859_15727_2454_14658_144_575: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_806: {
    width: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4_806_137_722: {
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
  View_4_807: {
    width: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I4_807_137_740: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  View_I4_807_137_741: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  ImageBackground_I4_807_137_742: {
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
  View_I4_807_137_743: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I4_807_137_744: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  ImageBackground_I4_807_137_748: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I4_807_137_753: {
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
  View_I4_807_137_754: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I4_807_137_754: {
    color: "rgba(255, 255, 255, 1)",
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
