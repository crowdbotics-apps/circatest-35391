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
      <View style={styles.View_5_900}>
        <Text style={styles.Text_5_900}>Make a Payment</Text>
      </View>
      <View style={styles.View_5_901}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1f1/3e8a/7d0b8fda0ccd647c16a3d5a4d7c09903"
          }}
          style={styles.ImageBackground_I5_901_260_1418}
        />
      </View>
      <View style={styles.View_5_902}>
        <Text style={styles.Text_5_902}>Method</Text>
      </View>
      <View style={styles.View_5_903}>
        <Text style={styles.Text_5_903}>Amount</Text>
      </View>
      <View style={styles.View_5_904}>
        <Text style={styles.Text_5_904}>Date</Text>
      </View>
      <View style={styles.View_5_905}>
        <Text style={styles.Text_5_905}>Item</Text>
      </View>
      <View style={styles.View_5_906}>
        <View style={styles.View_I5_906_175_1614} />
        <View style={styles.View_I5_906_476_17043}>
          <View style={styles.View_I5_906_476_17043_476_11864} />
        </View>
        <View style={styles.View_I5_906_175_1616}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ad3/50b4/3d2dae4bd157d5b31857e2c8d3305232"
            }}
            style={styles.ImageBackground_I5_906_175_1616_175_1485}
          />
        </View>
        <View style={styles.View_I5_906_175_1617}>
          <Text style={styles.Text_I5_906_175_1617}>Select date</Text>
        </View>
        <View style={styles.View_I5_906_202_2504}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3ff/a596/7bf2c7c0340a148b9aaafe7ea457e03f"
            }}
            style={styles.ImageBackground_I5_906_202_2504_177_507}
          />
        </View>
      </View>
      <View style={styles.View_5_907}>
        <View style={styles.View_I5_907_175_1614} />
        <View style={styles.View_I5_907_476_17043}>
          <View style={styles.View_I5_907_476_17043_476_11864} />
        </View>
        <View style={styles.View_I5_907_175_1616}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d11/d1b6/971ee2f08c21d2d79253b23c9dce70e3"
            }}
            style={styles.ImageBackground_I5_907_175_1616_649_16}
          />
        </View>
        <View style={styles.View_I5_907_175_1617}>
          <Text style={styles.Text_I5_907_175_1617}>Nov 1 Payment</Text>
        </View>
        <View style={styles.View_I5_907_202_2504}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3ff/a596/7bf2c7c0340a148b9aaafe7ea457e03f"
            }}
            style={styles.ImageBackground_I5_907_202_2504_177_507}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_5_908}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("101_2274"))
        }
      >
        <View style={styles.View_I5_908_202_2681} />
        <View style={styles.View_I5_908_202_2682}>
          <Text style={styles.Text_I5_908_202_2682}>Schedule payment</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_5_909}>
        <View style={styles.View_5_910}>
          <View style={styles.View_I5_910_494_3126}>
            <View style={styles.View_I5_910_494_3126_476_11864} />
          </View>
          <View style={styles.View_I5_910_220_3}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec15/3e7b/602ecc57fafb341189d145c7ed092cd6"
              }}
              style={styles.ImageBackground_I5_910_220_3_175_1498}
            />
          </View>
          <View style={styles.View_I5_910_220_4}>
            <Text style={styles.Text_I5_910_220_4}>Lauren’s Ch...</Text>
          </View>
        </View>
        <View style={styles.View_5_911}>
          <View style={styles.View_I5_911_494_805}>
            <View style={styles.View_I5_911_494_805_476_11864} />
          </View>
          <View style={styles.View_I5_911_202_2596}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2be/1680/8e3ad3878c50b6470e22edc8886906b0"
              }}
              style={styles.ImageBackground_I5_911_202_2596_175_1491}
            />
          </View>
          <View style={styles.View_I5_911_202_2597}>
            <Text style={styles.Text_I5_911_202_2597}>Cash</Text>
          </View>
        </View>
        <View style={styles.View_5_912}>
          <View style={styles.View_I5_912_649_69}>
            <View style={styles.View_I5_912_649_69_476_11864} />
          </View>
          <View style={styles.View_I5_912_649_70}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4be/b191/847710f234aac5931a319b8f06ec692b"
              }}
              style={styles.ImageBackground_I5_912_649_70_649_61}
            />
          </View>
          <View style={styles.View_I5_912_649_71}>
            <Text style={styles.Text_I5_912_649_71}>Circa Wallet</Text>
          </View>
        </View>
        <View style={styles.View_5_913}>
          <View style={styles.View_I5_913_202_2651}>
            <Text style={styles.Text_I5_913_202_2651}>Add Method</Text>
          </View>
          <View style={styles.View_I5_913_202_2657}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b818/af84/cfef922cba969bd240acee08b4a41ccc"
              }}
              style={styles.ImageBackground_I5_913_202_2657_202_2653}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_5_914}>
        <View style={styles.View_5_915}>
          <View style={styles.View_I5_915_626_4050} />
          <View style={styles.View_I5_915_626_4051}>
            <View style={styles.View_I5_915_626_4051_476_11864} />
          </View>
          <View style={styles.View_I5_915_626_4052}>
            <Text style={styles.Text_I5_915_626_4052}>Specify</Text>
          </View>
          <View style={styles.View_I5_915_626_4053}>
            <Text style={styles.Text_I5_915_626_4053}>Other</Text>
          </View>
          <View style={styles.View_I5_915_626_4054}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eab4/5b9b/179119fae3627ed128f1a3ad7c95b054"
              }}
              style={styles.ImageBackground_I5_915_626_4054_175_1531}
            />
          </View>
        </View>
        <View style={styles.View_5_916}>
          <View style={styles.View_I5_916_626_4112} />
          <View style={styles.View_I5_916_626_4113}>
            <View style={styles.View_I5_916_626_4113_476_11864} />
          </View>
          <View style={styles.View_I5_916_626_4114}>
            <Text style={styles.Text_I5_916_626_4114}>Nov rent</Text>
          </View>
          <View style={styles.View_I5_916_626_4115}>
            <Text style={styles.Text_I5_916_626_4115}>$1000</Text>
          </View>
          <View style={styles.View_I5_916_626_4116}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eab4/5b9b/179119fae3627ed128f1a3ad7c95b054"
              }}
              style={styles.ImageBackground_I5_916_626_4116_175_1531}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_5_917}>
        <View style={styles.View_I5_917_137_706}>
          <View style={styles.View_I5_917_137_707} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/525b/1182/3379c8a6088a242fe4f03785d2d970eb"
            }}
            style={styles.ImageBackground_I5_917_137_708}
          />
          <View style={styles.View_I5_917_137_709} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b81/843f/2074ecb78b933ae2dfe895e1affaec7a"
          }}
          style={styles.ImageBackground_I5_917_137_710}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c15/8f2b/0490361ab74ccb4989d0ed026428146e"
          }}
          style={styles.ImageBackground_I5_917_137_714}
        />
        <View style={styles.View_I5_917_137_719}>
          <View style={styles.View_I5_917_137_720}>
            <Text style={styles.Text_I5_917_137_720}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_5_918}>
        <View style={styles.View_I5_918_137_722} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(249, 250, 254, 1)" },
  View_2: { height: hp("111%") },
  View_5_900: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_5_900: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 19,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1,
    textTransform: "none"
  },
  View_5_901: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I5_901_260_1418: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_902: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("65%"),
    justifyContent: "center"
  },
  Text_5_902: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_903: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("49%"),
    justifyContent: "center"
  },
  Text_5_903: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_904: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("32%"),
    justifyContent: "center"
  },
  Text_5_904: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_905: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("16%"),
    justifyContent: "center"
  },
  Text_5_905: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_906: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("37%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I5_906_175_1614: {
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
  View_I5_906_476_17043: {
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
  View_I5_906_476_17043_476_11864: {
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
  View_I5_906_175_1616: {
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
  ImageBackground_I5_906_175_1616_175_1485: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I5_906_175_1617: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I5_906_175_1617: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_906_202_2504: {
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
  ImageBackground_I5_906_202_2504_177_507: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_5_907: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I5_907_175_1614: {
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
  View_I5_907_476_17043: {
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
  View_I5_907_476_17043_476_11864: {
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
  View_I5_907_175_1616: {
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
  ImageBackground_I5_907_175_1616_649_16: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I5_907_175_1617: {
    flexGrow: 1,
    width: wp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I5_907_175_1617: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_907_202_2504: {
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
  ImageBackground_I5_907_202_2504_177_507: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  TouchableOpacity_5_908: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_908_202_2681: {
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
  View_I5_908_202_2682: {
    flexGrow: 1,
    width: wp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I5_908_202_2682: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_5_909: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("69%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_910: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_910_494_3126: {
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
  View_I5_910_494_3126_476_11864: {
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
  View_I5_910_220_3: {
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
  ImageBackground_I5_910_220_3_175_1498: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I5_910_220_4: {
    flexGrow: 1,
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I5_910_220_4: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_911: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_911_494_805: {
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
  View_I5_911_494_805_476_11864: {
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
  View_I5_911_202_2596: {
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
  ImageBackground_I5_911_202_2596_175_1491: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_I5_911_202_2597: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I5_911_202_2597: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_912: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("107%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_912_649_69: {
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
  View_I5_912_649_69_476_11864: {
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
  View_I5_912_649_70: {
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
  ImageBackground_I5_912_649_70_649_61: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I5_912_649_71: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I5_912_649_71: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_913: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("158%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_913_202_2651: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I5_913_202_2651: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_913_202_2657: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I5_913_202_2657_202_2653: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_914: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("53%")
  },
  View_5_915: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I5_915_626_4050: {
    flexGrow: 1,
    width: wp("43%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I5_915_626_4051: {
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
  View_I5_915_626_4051_476_11864: {
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
  View_I5_915_626_4052: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I5_915_626_4052: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_915_626_4053: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I5_915_626_4053: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_915_626_4054: {
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
  ImageBackground_I5_915_626_4054_175_1531: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_916: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I5_916_626_4112: {
    flexGrow: 1,
    width: wp("41%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(106, 103, 206, 1)",
    borderWidth: 3
  },
  View_I5_916_626_4113: {
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
  View_I5_916_626_4113_476_11864: {
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
  View_I5_916_626_4114: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I5_916_626_4114: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_916_626_4115: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I5_916_626_4115: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_916_626_4116: {
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
  ImageBackground_I5_916_626_4116_175_1531: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_917: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_917_137_706: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  View_I5_917_137_707: {
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
  ImageBackground_I5_917_137_708: {
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
  View_I5_917_137_709: {
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
  ImageBackground_I5_917_137_710: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  ImageBackground_I5_917_137_714: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I5_917_137_719: {
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
  View_I5_917_137_720: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I5_917_137_720: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 12,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_5_918: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_918_137_722: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("3%"),
    backgroundColor: "rgba(20, 20, 42, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
