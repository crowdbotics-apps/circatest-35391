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
        style={styles.TouchableOpacity_5_1454}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("122_2581"))
        }
      >
        <View style={styles.View_I5_1454_202_2681} />
        <View style={styles.View_I5_1454_202_2682}>
          <Text style={styles.Text_I5_1454_202_2682}>confirm information</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_5_1455}>
        <View style={styles.View_I5_1455_228_176}>
          <Text style={styles.Text_I5_1455_228_176}>Lease Details</Text>
        </View>
        <View style={styles.View_I5_1455_228_177}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba30/b758/2150ad9262068f872f9328883a5e36c8"
            }}
            style={styles.ImageBackground_I5_1455_228_177_154_460}
          />
        </View>
      </View>
      <View style={styles.View_5_1456}>
        <View style={styles.View_5_1457}>
          <View style={styles.View_I5_1457_299_5161}>
            <View style={styles.View_I5_1457_299_5161_154_101} />
          </View>
          <View style={styles.View_I5_1457_299_5162}>
            <Text style={styles.Text_I5_1457_299_5162}>Community</Text>
          </View>
          <View style={styles.View_I5_1457_299_5180}>
            <Text style={styles.Text_I5_1457_299_5180}>One Riverside</Text>
          </View>
        </View>
        <View style={styles.View_5_1458}>
          <View style={styles.View_I5_1458_299_5154}>
            <View style={styles.View_I5_1458_299_5154_154_101} />
          </View>
          <View style={styles.View_I5_1458_299_5155}>
            <Text style={styles.Text_I5_1458_299_5155}>Address</Text>
          </View>
          <View style={styles.View_I5_1458_299_5177}>
            <Text style={styles.Text_I5_1458_299_5177}>123 Main Street</Text>
          </View>
        </View>
        <View style={styles.View_5_1459}>
          <View style={styles.View_I5_1459_299_5154}>
            <View style={styles.View_I5_1459_299_5154_154_101} />
          </View>
          <View style={styles.View_I5_1459_299_5155}>
            <Text style={styles.Text_I5_1459_299_5155}>Unit</Text>
          </View>
          <View style={styles.View_I5_1459_299_5177}>
            <Text style={styles.Text_I5_1459_299_5177}>1A</Text>
          </View>
        </View>
        <View style={styles.View_5_1460}>
          <View style={styles.View_I5_1460_299_5154}>
            <View style={styles.View_I5_1460_299_5154_154_101} />
          </View>
          <View style={styles.View_I5_1460_299_5155}>
            <Text style={styles.Text_I5_1460_299_5155}>City</Text>
          </View>
          <View style={styles.View_I5_1460_299_5177}>
            <Text style={styles.Text_I5_1460_299_5177}>Smithstown</Text>
          </View>
        </View>
        <View style={styles.View_5_1461}>
          <View style={styles.View_I5_1461_299_5154}>
            <View style={styles.View_I5_1461_299_5154_154_101} />
          </View>
          <View style={styles.View_I5_1461_299_5155}>
            <Text style={styles.Text_I5_1461_299_5155}>State</Text>
          </View>
          <View style={styles.View_I5_1461_299_5177}>
            <Text style={styles.Text_I5_1461_299_5177}>California</Text>
          </View>
        </View>
        <View style={styles.View_5_1462}>
          <View style={styles.View_I5_1462_299_5157}>
            <Text style={styles.Text_I5_1462_299_5157}>Zip Code</Text>
          </View>
          <View style={styles.View_I5_1462_299_5178}>
            <Text style={styles.Text_I5_1462_299_5178}>12345</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_5_1463}>
        <Text style={styles.Text_5_1463}>Address</Text>
      </View>
      <View style={styles.View_5_1464}>
        <Text style={styles.Text_5_1464}>Lease Information</Text>
      </View>
      <View style={styles.View_5_1465}>
        <View style={styles.View_5_1466}>
          <View style={styles.View_I5_1466_299_5161}>
            <View style={styles.View_I5_1466_299_5161_154_101} />
          </View>
          <View style={styles.View_I5_1466_299_5162}>
            <Text style={styles.Text_I5_1466_299_5162}>Monthly Rent</Text>
          </View>
          <View style={styles.View_I5_1466_299_5180}>
            <Text style={styles.Text_I5_1466_299_5180}>$1000</Text>
          </View>
        </View>
        <View style={styles.View_5_1467}>
          <View style={styles.View_I5_1467_299_5154}>
            <View style={styles.View_I5_1467_299_5154_154_101} />
          </View>
          <View style={styles.View_I5_1467_299_5155}>
            <Text style={styles.Text_I5_1467_299_5155}>Start Date</Text>
          </View>
          <View style={styles.View_I5_1467_299_5177}>
            <Text style={styles.Text_I5_1467_299_5177}>1 January 2020</Text>
          </View>
        </View>
        <View style={styles.View_5_1468}>
          <View style={styles.View_I5_1468_299_5157}>
            <Text style={styles.Text_I5_1468_299_5157}>End Date</Text>
          </View>
          <View style={styles.View_I5_1468_299_5178}>
            <Text style={styles.Text_I5_1468_299_5178}>31 December 2020</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_5_1469}>
        <Text style={styles.Text_5_1469}>View lease</Text>
      </View>
      <View style={styles.View_5_1470}>
        <Text style={styles.Text_5_1470}>Report an error</Text>
      </View>
      <View style={styles.View_5_1471}>
        <View style={styles.View_I5_1471_451_9977} />
      </View>
      <View style={styles.View_5_1472}>
        <View style={styles.View_I5_1472_586_264}>
          <View style={styles.View_I5_1472_586_265}>
            <Text style={styles.Text_I5_1472_586_265}>Report an Error</Text>
          </View>
          <View style={styles.View_I5_1472_586_266}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1f1/3e8a/7d0b8fda0ccd647c16a3d5a4d7c09903"
              }}
              style={styles.ImageBackground_I5_1472_586_266_260_1418}
            />
          </View>
        </View>
        <View style={styles.View_I5_1472_586_267}>
          <View style={styles.View_I5_1472_586_269}>
            <Text style={styles.Text_I5_1472_586_269}>
              If any of these lease details are incorrect, please contact us
              before continuing your account setup. Email us anytime at
              support@wearecirca.com or call us during business hours at
              423-377-6729.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_5_1473}>
        <View style={styles.View_I5_1473_137_722} />
      </View>
      <View style={styles.View_5_1474}>
        <View style={styles.View_I5_1474_137_706}>
          <View style={styles.View_I5_1474_137_707} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/525b/1182/3379c8a6088a242fe4f03785d2d970eb"
            }}
            style={styles.ImageBackground_I5_1474_137_708}
          />
          <View style={styles.View_I5_1474_137_709} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b81/843f/2074ecb78b933ae2dfe895e1affaec7a"
          }}
          style={styles.ImageBackground_I5_1474_137_710}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c15/8f2b/0490361ab74ccb4989d0ed026428146e"
          }}
          style={styles.ImageBackground_I5_1474_137_714}
        />
        <View style={styles.View_I5_1474_137_719}>
          <View style={styles.View_I5_1474_137_720}>
            <Text style={styles.Text_I5_1474_137_720}>9:41</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(249, 250, 254, 1)" },
  View_2: { height: hp("111%") },
  TouchableOpacity_5_1454: {
    width: wp("91%"),
    height: hp("7%"),
    top: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1454_202_2681: {
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
  View_I5_1454_202_2682: {
    flexGrow: 1,
    width: wp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I5_1454_202_2682: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_5_1455: {
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
  View_I5_1455_228_176: {
    flexGrow: 1,
    width: wp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I5_1455_228_176: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1455_228_177: {
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
  ImageBackground_I5_1455_228_177_154_460: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_5_1456: {
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
  View_5_1457: {
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
  View_I5_1457_299_5161: {
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
  View_I5_1457_299_5161_154_101: {
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
  View_I5_1457_299_5162: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1457_299_5162: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1457_299_5180: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1457_299_5180: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1458: {
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
  View_I5_1458_299_5154: {
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
  View_I5_1458_299_5154_154_101: {
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
  View_I5_1458_299_5155: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1458_299_5155: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1458_299_5177: {
    flexGrow: 1,
    width: wp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1458_299_5177: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1459: {
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
  View_I5_1459_299_5154: {
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
  View_I5_1459_299_5154_154_101: {
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
  View_I5_1459_299_5155: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1459_299_5155: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1459_299_5177: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1459_299_5177: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1460: {
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
  View_I5_1460_299_5154: {
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
  View_I5_1460_299_5154_154_101: {
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
  View_I5_1460_299_5155: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1460_299_5155: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1460_299_5177: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1460_299_5177: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1461: {
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
  View_I5_1461_299_5154: {
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
  View_I5_1461_299_5154_154_101: {
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
  View_I5_1461_299_5155: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1461_299_5155: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1461_299_5177: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1461_299_5177: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1462: {
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
  View_I5_1462_299_5157: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1462_299_5157: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1462_299_5178: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1462_299_5178: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1463: {
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
  Text_5_1463: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1464: {
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
  Text_5_1464: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1465: {
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
  View_5_1466: {
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
  View_I5_1466_299_5161: {
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
  View_I5_1466_299_5161_154_101: {
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
  View_I5_1466_299_5162: {
    flexGrow: 1,
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1466_299_5162: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1466_299_5180: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1466_299_5180: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1467: {
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
  View_I5_1467_299_5154: {
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
  View_I5_1467_299_5154_154_101: {
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
  View_I5_1467_299_5155: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1467_299_5155: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1467_299_5177: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1467_299_5177: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1468: {
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
  View_I5_1468_299_5157: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1468_299_5157: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1468_299_5178: {
    flexGrow: 1,
    width: wp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I5_1468_299_5178: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1469: {
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
  Text_5_1469: {
    color: "rgba(106, 103, 206, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_5_1470: {
    width: wp("33%"),
    top: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    justifyContent: "center"
  },
  Text_5_1470: {
    color: "rgba(106, 103, 206, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_5_1471: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1471_451_9977: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(20, 20, 42, 1)"
  },
  View_5_1472: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("74%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I5_1472_586_264: {
    flexGrow: 1,
    width: wp("87%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1472_586_265: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I5_1472_586_265: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 19,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1,
    textTransform: "none"
  },
  View_I5_1472_586_266: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I5_1472_586_266_260_1418: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I5_1472_586_267: {
    flexGrow: 1,
    width: wp("87%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1472_586_269: {
    width: wp("87%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_I5_1472_586_269: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1473: {
    width: wp("100%"),
    height: hp("5%"),
    top: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1473_137_722: {
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
  View_5_1474: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1474_137_706: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  View_I5_1474_137_707: {
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
  ImageBackground_I5_1474_137_708: {
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
  View_I5_1474_137_709: {
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
  ImageBackground_I5_1474_137_710: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  ImageBackground_I5_1474_137_714: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I5_1474_137_719: {
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
  View_I5_1474_137_720: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I5_1474_137_720: {
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
