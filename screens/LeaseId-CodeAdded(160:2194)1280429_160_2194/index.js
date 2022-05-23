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
      <View style={styles.View_160_2195}>
        <Text style={styles.Text_160_2195}>Enter Lease ID</Text>
      </View>
      <View style={styles.View_160_2196}>
        <Text style={styles.Text_160_2196}>Enter Zip Code</Text>
      </View>
      <View style={styles.View_160_2197}>
        <View style={styles.View_160_2198}>
          <View style={styles.View_160_2199}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41d3/524f/4e1ecb5a444dd4bc6ba5079a89c10c4a"
              }}
              style={styles.ImageBackground_160_2200}
            />
            <View style={styles.View_160_2201}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/763f/c91c/27dcea4395d8fd57f072dd543bc22fce"
                }}
                style={styles.ImageBackground_160_2202}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b2a/8b8f/a9873507e2161cfa3c4f1f8655d00dd6"
                }}
                style={styles.ImageBackground_160_2203}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d5b/18b8/cbc42233f66a0e72d28502f2027c9e44"
                }}
                style={styles.ImageBackground_160_2204}
              />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94d3/8ba2/0360b2395e5643a066b767f60ac50368"
          }}
          style={styles.ImageBackground_160_2207}
        />
      </View>
      <View style={styles.View_160_2208}>
        <View style={styles.View_I160_2208_306_1384} />
        <View style={styles.View_I160_2208_306_1385}>
          <Text style={styles.Text_I160_2208_306_1385}>Next</Text>
        </View>
      </View>
      <View style={styles.View_160_2209}>
        <View style={styles.View_160_2210} />
        <View style={styles.View_160_2211}>
          <View style={styles.View_I160_2211_396_9708} />
        </View>
        <View style={styles.View_160_2212}>
          <View style={styles.View_I160_2212_396_9708} />
        </View>
        <View style={styles.View_160_2213}>
          <View style={styles.View_I160_2213_396_9708} />
        </View>
        <View style={styles.View_160_2214}>
          <View style={styles.View_I160_2214_396_9708} />
        </View>
        <View style={styles.View_160_2215}>
          <View style={styles.View_I160_2215_396_9708} />
        </View>
        <View style={styles.View_160_2216}>
          <View style={styles.View_I160_2216_396_9708} />
        </View>
        <View style={styles.View_160_2217}>
          <View style={styles.View_I160_2217_396_9708} />
        </View>
      </View>
      <View style={styles.View_160_2218}>
        <View style={styles.View_160_2219}>
          <View style={styles.View_I160_2219_396_9708} />
        </View>
        <View style={styles.View_160_2220}>
          <View style={styles.View_I160_2220_396_9708} />
        </View>
        <View style={styles.View_160_2221}>
          <View style={styles.View_I160_2221_396_9708} />
        </View>
        <View style={styles.View_160_2222}>
          <View style={styles.View_I160_2222_396_9708} />
        </View>
        <View style={styles.View_160_2223}>
          <View style={styles.View_I160_2223_396_9708} />
        </View>
      </View>
      <View style={styles.View_160_2224}>
        <View style={styles.View_I160_2224_586_53}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba30/b758/2150ad9262068f872f9328883a5e36c8"
            }}
            style={styles.ImageBackground_I160_2224_586_53_154_460}
          />
        </View>
      </View>
      <View style={styles.View_160_2225}>
        <View style={styles.View_I160_2225_197_2604}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8aaa/4af4/1d432346b10785bae9197e2c400447a4"
            }}
            style={styles.ImageBackground_I160_2225_4645_38209}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3232/b9a9/760d4aa12a1c1fc5c15b4e023b7d2cae"
            }}
            style={styles.ImageBackground_I160_2225_197_2607}
          />
        </View>
      </View>
      <View style={styles.View_160_2226}>
        <Text style={styles.Text_160_2226}>
          Referral code successfully added
        </Text>
      </View>
      <View style={styles.View_209_2235}>
        <View style={styles.View_I209_2235_209_2234}>
          <Text style={styles.Text_I209_2235_209_2234}>2</Text>
        </View>
      </View>
      <View style={styles.View_160_2227}>
        <View style={styles.View_I160_2227_137_706}>
          <View style={styles.View_I160_2227_137_707} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/525b/1182/3379c8a6088a242fe4f03785d2d970eb"
            }}
            style={styles.ImageBackground_I160_2227_137_708}
          />
          <View style={styles.View_I160_2227_137_709} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b81/843f/2074ecb78b933ae2dfe895e1affaec7a"
          }}
          style={styles.ImageBackground_I160_2227_137_710}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c15/8f2b/0490361ab74ccb4989d0ed026428146e"
          }}
          style={styles.ImageBackground_I160_2227_137_714}
        />
        <View style={styles.View_I160_2227_137_719}>
          <View style={styles.View_I160_2227_137_720}>
            <Text style={styles.Text_I160_2227_137_720}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_160_2228}>
        <View style={styles.View_I160_2228_137_722} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_160_2195: {
    width: wp("36%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    justifyContent: "center"
  },
  Text_160_2195: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_2196: {
    width: wp("38%"),
    top: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    justifyContent: "center"
  },
  Text_160_2196: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_2197: {
    width: wp("74%"),
    height: hp("30%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_160_2198: {
    width: wp("63%"),
    height: hp("30%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_160_2199: {
    width: wp("63%"),
    height: hp("30%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_160_2200: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29%")
  },
  View_160_2201: {
    width: wp("46%"),
    height: hp("29%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_160_2202: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%")
  },
  ImageBackground_160_2203: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%")
  },
  ImageBackground_160_2204: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("14%")
  },
  ImageBackground_160_2207: {
    width: wp("69%"),
    minWidth: wp("69%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-14%"),
    top: hp("2%")
  },
  View_160_2208: {
    width: wp("91%"),
    height: hp("7%"),
    top: hp("86%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I160_2208_306_1384: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(160, 163, 189, 1)"
  },
  View_I160_2208_306_1385: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I160_2208_306_1385: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_160_2209: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("58%")
  },
  View_160_2210: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    backgroundColor: "rgba(160, 163, 189, 1)"
  },
  View_160_2211: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I160_2211_396_9708: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 1
  },
  View_160_2212: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I160_2212_396_9708: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 1
  },
  View_160_2213: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I160_2213_396_9708: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 1
  },
  View_160_2214: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I160_2214_396_9708: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 1
  },
  View_160_2215: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I160_2215_396_9708: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 1
  },
  View_160_2216: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I160_2216_396_9708: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 1
  },
  View_160_2217: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I160_2217_396_9708: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 1
  },
  View_160_2218: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("74%")
  },
  View_160_2219: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I160_2219_396_9708: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 1
  },
  View_160_2220: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I160_2220_396_9708: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 1
  },
  View_160_2221: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I160_2221_396_9708: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 1
  },
  View_160_2222: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I160_2222_396_9708: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 1
  },
  View_160_2223: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I160_2223_396_9708: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(160, 163, 189, 1)",
    borderWidth: 1
  },
  View_160_2224: {
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
  View_I160_2224_586_53: {
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
  ImageBackground_I160_2224_586_53_154_460: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_160_2225: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I160_2225_197_2604: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I160_2225_4645_38209: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I160_2225_197_2607: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_160_2226: {
    width: wp("62%"),
    top: hp("96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "center"
  },
  Text_160_2226: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_209_2235: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("95%"),
    backgroundColor: "rgba(123, 97, 255, 1)"
  },
  View_I209_2235_209_2234: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I209_2235_209_2234: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_160_2227: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I160_2227_137_706: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  View_I160_2227_137_707: {
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
  ImageBackground_I160_2227_137_708: {
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
  View_I160_2227_137_709: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I160_2227_137_710: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  ImageBackground_I160_2227_137_714: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I160_2227_137_719: {
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
  View_I160_2227_137_720: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I160_2227_137_720: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_160_2228: {
    width: wp("100%"),
    height: hp("5%"),
    top: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I160_2228_137_722: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
