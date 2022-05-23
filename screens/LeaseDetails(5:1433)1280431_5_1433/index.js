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
      <TouchableOpacity
        style={styles.TouchableOpacity_5_1434}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("122_2581"))
        }
      >
        <View style={styles.View_I5_1434_202_2681} />
        <View style={styles.View_I5_1434_202_2682}>
          <Text style={styles.Text_I5_1434_202_2682}>confirm information</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_5_1435}>
        <View style={styles.View_I5_1435_228_176}>
          <Text style={styles.Text_I5_1435_228_176}>Lease Details</Text>
        </View>
        <View style={styles.View_I5_1435_228_177}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba30/b758/2150ad9262068f872f9328883a5e36c8"
            }}
            style={styles.ImageBackground_I5_1435_228_177_154_460}
          />
        </View>
      </View>
      <View style={styles.View_5_1436}>
        <View style={styles.View_5_1437}>
          <View style={styles.View_I5_1437_299_5161}>
            <View style={styles.View_I5_1437_299_5161_154_101} />
          </View>
          <View style={styles.View_I5_1437_299_5162}>
            <Text style={styles.Text_I5_1437_299_5162}>Community</Text>
          </View>
          <View style={styles.View_I5_1437_299_5180}>
            <Text style={styles.Text_I5_1437_299_5180}>One Riverside</Text>
          </View>
        </View>
        <View style={styles.View_5_1438}>
          <View style={styles.View_I5_1438_299_5154}>
            <View style={styles.View_I5_1438_299_5154_154_101} />
          </View>
          <View style={styles.View_I5_1438_299_5155}>
            <Text style={styles.Text_I5_1438_299_5155}>Address</Text>
          </View>
          <View style={styles.View_I5_1438_299_5177}>
            <Text style={styles.Text_I5_1438_299_5177}>123 Main Street</Text>
          </View>
        </View>
        <View style={styles.View_5_1439}>
          <View style={styles.View_I5_1439_299_5154}>
            <View style={styles.View_I5_1439_299_5154_154_101} />
          </View>
          <View style={styles.View_I5_1439_299_5155}>
            <Text style={styles.Text_I5_1439_299_5155}>Unit</Text>
          </View>
          <View style={styles.View_I5_1439_299_5177}>
            <Text style={styles.Text_I5_1439_299_5177}>1A</Text>
          </View>
        </View>
        <View style={styles.View_5_1440}>
          <View style={styles.View_I5_1440_299_5154}>
            <View style={styles.View_I5_1440_299_5154_154_101} />
          </View>
          <View style={styles.View_I5_1440_299_5155}>
            <Text style={styles.Text_I5_1440_299_5155}>City</Text>
          </View>
          <View style={styles.View_I5_1440_299_5177}>
            <Text style={styles.Text_I5_1440_299_5177}>Smithstown</Text>
          </View>
        </View>
        <View style={styles.View_5_1441}>
          <View style={styles.View_I5_1441_299_5154}>
            <View style={styles.View_I5_1441_299_5154_154_101} />
          </View>
          <View style={styles.View_I5_1441_299_5155}>
            <Text style={styles.Text_I5_1441_299_5155}>State</Text>
          </View>
          <View style={styles.View_I5_1441_299_5177}>
            <Text style={styles.Text_I5_1441_299_5177}>California</Text>
          </View>
        </View>
        <View style={styles.View_5_1442}>
          <View style={styles.View_I5_1442_299_5157}>
            <Text style={styles.Text_I5_1442_299_5157}>Zip Code</Text>
          </View>
          <View style={styles.View_I5_1442_299_5178}>
            <Text style={styles.Text_I5_1442_299_5178}>12345</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_5_1443}>
        <Text style={styles.Text_5_1443}>Address</Text>
      </View>
      <View style={styles.View_5_1444}>
        <Text style={styles.Text_5_1444}>Lease Information</Text>
      </View>
      <View style={styles.View_5_1445}>
        <View style={styles.View_5_1446}>
          <View style={styles.View_I5_1446_299_5161}>
            <View style={styles.View_I5_1446_299_5161_154_101} />
          </View>
          <View style={styles.View_I5_1446_299_5162}>
            <Text style={styles.Text_I5_1446_299_5162}>Monthly Rent</Text>
          </View>
          <View style={styles.View_I5_1446_299_5180}>
            <Text style={styles.Text_I5_1446_299_5180}>$1000</Text>
          </View>
        </View>
        <View style={styles.View_5_1447}>
          <View style={styles.View_I5_1447_299_5154}>
            <View style={styles.View_I5_1447_299_5154_154_101} />
          </View>
          <View style={styles.View_I5_1447_299_5155}>
            <Text style={styles.Text_I5_1447_299_5155}>Start Date</Text>
          </View>
          <View style={styles.View_I5_1447_299_5177}>
            <Text style={styles.Text_I5_1447_299_5177}>1 January 2021</Text>
          </View>
        </View>
        <View style={styles.View_5_1448}>
          <View style={styles.View_I5_1448_299_5157}>
            <Text style={styles.Text_I5_1448_299_5157}>End Date</Text>
          </View>
          <View style={styles.View_I5_1448_299_5178}>
            <Text style={styles.Text_I5_1448_299_5178}>31 December 2021</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_5_1449}>
        <Text style={styles.Text_5_1449}>View lease</Text>
      </View>
      <View style={styles.View_5_1450}>
        <Text style={styles.Text_5_1450}>Report an error</Text>
      </View>
      <View style={styles.View_23_4585}>
        <View style={styles.View_I23_4585_23_4584}>
          <Text style={styles.Text_I23_4585_23_4584}>1</Text>
        </View>
      </View>
      <View style={styles.View_105_2357}>
        <View style={styles.View_I105_2357_105_2356}>
          <Text style={styles.Text_I105_2357_105_2356}>2</Text>
        </View>
      </View>
      <View style={styles.View_5_1451}>
        <View style={styles.View_I5_1451_137_722} />
      </View>
      <View style={styles.View_5_1452}>
        <View style={styles.View_I5_1452_137_706}>
          <View style={styles.View_I5_1452_137_707} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/525b/1182/3379c8a6088a242fe4f03785d2d970eb"
            }}
            style={styles.ImageBackground_I5_1452_137_708}
          />
          <View style={styles.View_I5_1452_137_709} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b81/843f/2074ecb78b933ae2dfe895e1affaec7a"
          }}
          style={styles.ImageBackground_I5_1452_137_710}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c15/8f2b/0490361ab74ccb4989d0ed026428146e"
          }}
          style={styles.ImageBackground_I5_1452_137_714}
        />
        <View style={styles.View_I5_1452_137_719}>
          <View style={styles.View_I5_1452_137_720}>
            <Text style={styles.Text_I5_1452_137_720}>9:41</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(249, 250, 254, 1)" },
  View_2: { height: hp("111%") },
  TouchableOpacity_5_1434: {
    width: wp("91%"),
    height: hp("7%"),
    top: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1434_202_2681: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(27, 12, 98, 1)"
  },
  View_I5_1434_202_2682: {
    flexGrow: 1,
    width: wp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I5_1434_202_2682: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_5_1435: {
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
  View_I5_1435_228_176: {
    flexGrow: 1,
    width: wp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I5_1435_228_176: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1435_228_177: {
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
  ImageBackground_I5_1435_228_177_154_460: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_5_1436: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1437: {
    width: wp("91%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_1437_299_5161: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1437_299_5161_154_101: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)"
  },
  View_I5_1437_299_5162: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1437_299_5162: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1437_299_5180: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1437_299_5180: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1438: {
    width: wp("91%"),
    height: hp("7%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_1438_299_5154: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1438_299_5154_154_101: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)"
  },
  View_I5_1438_299_5155: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1438_299_5155: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1438_299_5177: {
    flexGrow: 1,
    width: wp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1438_299_5177: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1439: {
    width: wp("91%"),
    height: hp("7%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_1439_299_5154: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1439_299_5154_154_101: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)"
  },
  View_I5_1439_299_5155: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1439_299_5155: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1439_299_5177: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1439_299_5177: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1440: {
    width: wp("91%"),
    height: hp("7%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_1440_299_5154: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1440_299_5154_154_101: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)"
  },
  View_I5_1440_299_5155: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1440_299_5155: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1440_299_5177: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1440_299_5177: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1441: {
    width: wp("91%"),
    height: hp("7%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_1441_299_5154: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1441_299_5154_154_101: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)"
  },
  View_I5_1441_299_5155: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1441_299_5155: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1441_299_5177: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1441_299_5177: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1442: {
    width: wp("91%"),
    height: hp("7%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_1442_299_5157: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1442_299_5157: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1442_299_5178: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1442_299_5178: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1443: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("16%"),
    justifyContent: "flex-end"
  },
  Text_5_1443: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1444: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("63%"),
    justifyContent: "flex-end"
  },
  Text_5_1444: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1445: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("67%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1446: {
    width: wp("91%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_1446_299_5161: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1446_299_5161_154_101: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)"
  },
  View_I5_1446_299_5162: {
    flexGrow: 1,
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1446_299_5162: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1446_299_5180: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1446_299_5180: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1447: {
    width: wp("91%"),
    height: hp("7%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_1447_299_5154: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1447_299_5154_154_101: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)"
  },
  View_I5_1447_299_5155: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1447_299_5155: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1447_299_5177: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1447_299_5177: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1448: {
    width: wp("91%"),
    height: hp("7%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_1448_299_5157: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1448_299_5157: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1448_299_5178: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1448_299_5178: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1449: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("64%"),
    justifyContent: "center"
  },
  Text_5_1449: {
    color: "rgba(106, 103, 206, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_5_1450: {
    width: wp("33%"),
    top: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    justifyContent: "center"
  },
  Text_5_1450: {
    color: "rgba(106, 103, 206, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_23_4585: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("8%"),
    backgroundColor: "rgba(24, 160, 251, 1)"
  },
  View_I23_4585_23_4584: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I23_4585_23_4584: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_2357: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37%"),
    backgroundColor: "rgba(24, 160, 251, 1)"
  },
  View_I105_2357_105_2356: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I105_2357_105_2356: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1451: {
    width: wp("100%"),
    height: hp("5%"),
    top: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1451_137_722: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("3%"),
    backgroundColor: "rgba(20, 20, 42, 1)"
  },
  View_5_1452: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1452_137_706: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  View_I5_1452_137_707: {
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
  ImageBackground_I5_1452_137_708: {
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
  View_I5_1452_137_709: {
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
  ImageBackground_I5_1452_137_710: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  ImageBackground_I5_1452_137_714: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I5_1452_137_719: {
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
  View_I5_1452_137_720: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I5_1452_137_720: {
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
