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
      <View style={styles.View_5_1311}>
        <Text style={styles.Text_5_1311}>Pay Other Amount</Text>
      </View>
      <View style={styles.View_5_1312}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1f1/3e8a/7d0b8fda0ccd647c16a3d5a4d7c09903"
          }}
          style={styles.ImageBackground_I5_1312_260_1418}
        />
      </View>
      <View style={styles.View_5_1313}>
        <Text style={styles.Text_5_1313}>Method</Text>
      </View>
      <View style={styles.View_5_1314}>
        <View style={styles.View_I5_1314_175_1614} />
        <View style={styles.View_I5_1314_476_17043}>
          <View style={styles.View_I5_1314_476_17043_476_11864} />
        </View>
        <View style={styles.View_I5_1314_175_1617}>
          <Text style={styles.Text_I5_1314_175_1617}>Select reason</Text>
        </View>
        <View style={styles.View_I5_1314_202_2504}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3ff/a596/7bf2c7c0340a148b9aaafe7ea457e03f"
            }}
            style={styles.ImageBackground_I5_1314_202_2504_177_507}
          />
        </View>
      </View>
      <View style={styles.View_5_1315}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3331/b7bf/f6d8aef4dd78241b52587634a38b5b16"
          }}
          style={styles.ImageBackground_5_1316}
        />
      </View>
      <View style={styles.View_5_1320}>
        <Text style={styles.Text_5_1320}>Reason</Text>
      </View>
      <View style={styles.View_5_1321}>
        <View style={styles.View_5_1322}>
          <View style={styles.View_I5_1322_494_3126}>
            <View style={styles.View_I5_1322_494_3126_476_11864} />
          </View>
          <View style={styles.View_I5_1322_220_3}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec15/3e7b/602ecc57fafb341189d145c7ed092cd6"
              }}
              style={styles.ImageBackground_I5_1322_220_3_175_1498}
            />
          </View>
          <View style={styles.View_I5_1322_220_4}>
            <Text style={styles.Text_I5_1322_220_4}>Lauren’s Ch...</Text>
          </View>
        </View>
        <View style={styles.View_5_1323}>
          <View style={styles.View_I5_1323_494_805}>
            <View style={styles.View_I5_1323_494_805_476_11864} />
          </View>
          <View style={styles.View_I5_1323_202_2596}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2be/1680/8e3ad3878c50b6470e22edc8886906b0"
              }}
              style={styles.ImageBackground_I5_1323_202_2596_175_1491}
            />
          </View>
          <View style={styles.View_I5_1323_202_2597}>
            <Text style={styles.Text_I5_1323_202_2597}>Cash</Text>
          </View>
        </View>
        <View style={styles.View_5_1324}>
          <View style={styles.View_I5_1324_649_69}>
            <View style={styles.View_I5_1324_649_69_476_11864} />
          </View>
          <View style={styles.View_I5_1324_649_70}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4be/b191/847710f234aac5931a319b8f06ec692b"
              }}
              style={styles.ImageBackground_I5_1324_649_70_649_61}
            />
          </View>
          <View style={styles.View_I5_1324_649_71}>
            <Text style={styles.Text_I5_1324_649_71}>Circa Wallet</Text>
          </View>
        </View>
        <View style={styles.View_5_1325}>
          <View style={styles.View_I5_1325_202_2651}>
            <Text style={styles.Text_I5_1325_202_2651}>Add Method</Text>
          </View>
          <View style={styles.View_I5_1325_202_2657}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b818/af84/cfef922cba969bd240acee08b4a41ccc"
              }}
              style={styles.ImageBackground_I5_1325_202_2657_202_2653}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_5_1326}>
        <Text style={styles.Text_5_1326}>Message to Property (Optional)</Text>
      </View>
      <View style={styles.View_5_1327}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3ad/84a6/39e2013e329cc27b1c7c07ccd4a0071a"
          }}
          style={styles.ImageBackground_I5_1327_131_1167}
        />
        <View style={styles.View_I5_1327_225_3780}>
          <Text style={styles.Text_I5_1327_225_3780}>
            Share details with your property
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_5_1328}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("105_2047"))
        }
      >
        <View style={styles.View_I5_1328_202_2681} />
        <View style={styles.View_I5_1328_202_2682}>
          <Text style={styles.Text_I5_1328_202_2682}>Schedule payment</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_5_1329}>
        <Text style={styles.Text_5_1329}>
          By scheduling this payment, you agree to our direct debit autorization
          form.
        </Text>
      </View>
      <View style={styles.View_5_1330}>
        <Text style={styles.Text_5_1330}>
          You are modifying $1000 on December 2
        </Text>
      </View>
      <View style={styles.View_5_1331}>
        <Text style={styles.Text_5_1331}>Amount</Text>
      </View>
      <View style={styles.View_5_1332}>
        <View style={styles.View_I5_1332_175_1614} />
        <View style={styles.View_I5_1332_476_17043}>
          <View style={styles.View_I5_1332_476_17043_476_11864} />
        </View>
        <View style={styles.View_I5_1332_175_1616}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ca0/6ebb/8cfffca2da769280b685c94d8b9de27c"
            }}
            style={styles.ImageBackground_I5_1332_175_1616_175_1531}
          />
        </View>
        <View style={styles.View_I5_1332_175_1617}>
          <Text style={styles.Text_I5_1332_175_1617}>Select amount</Text>
        </View>
        <View style={styles.View_I5_1332_202_2504}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3ff/a596/7bf2c7c0340a148b9aaafe7ea457e03f"
            }}
            style={styles.ImageBackground_I5_1332_202_2504_177_507}
          />
        </View>
      </View>
      <View style={styles.View_5_1333} />
      <View style={styles.View_5_1367}>
        <View style={styles.View_I5_1367_137_706}>
          <View style={styles.View_I5_1367_137_707} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/525b/1182/3379c8a6088a242fe4f03785d2d970eb"
            }}
            style={styles.ImageBackground_I5_1367_137_708}
          />
          <View style={styles.View_I5_1367_137_709} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b81/843f/2074ecb78b933ae2dfe895e1affaec7a"
          }}
          style={styles.ImageBackground_I5_1367_137_710}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c15/8f2b/0490361ab74ccb4989d0ed026428146e"
          }}
          style={styles.ImageBackground_I5_1367_137_714}
        />
        <View style={styles.View_I5_1367_137_719}>
          <View style={styles.View_I5_1367_137_720}>
            <Text style={styles.Text_I5_1367_137_720}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_130_2298}>
        <View style={styles.View_130_2299}>
          <View style={styles.View_130_2300}>
            <Text style={styles.Text_130_2300}>Enter Amount</Text>
          </View>
          <View style={styles.View_130_2301}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1f1/3e8a/7d0b8fda0ccd647c16a3d5a4d7c09903"
              }}
              style={styles.ImageBackground_I130_2301_260_1418}
            />
          </View>
        </View>
        <View style={styles.View_130_2341}>
          <View style={styles.View_130_2323}>
            <Text style={styles.Text_130_2323}>$0</Text>
          </View>
        </View>
        <View style={styles.View_130_2348}>
          <View style={styles.View_130_2349}>
            <View style={styles.View_130_2302} />
            <View style={styles.View_130_2303} />
            <View style={styles.View_130_2304} />
            <View style={styles.View_130_2305} />
            <View style={styles.View_130_2306} />
            <View style={styles.View_130_2307} />
            <View style={styles.View_130_2308} />
            <View style={styles.View_130_2309} />
            <View style={styles.View_130_2310} />
            <View style={styles.View_130_2311} />
            <View style={styles.View_130_2312}>
              <Text style={styles.Text_130_2312}>1</Text>
            </View>
            <View style={styles.View_130_2313}>
              <Text style={styles.Text_130_2313}>4</Text>
            </View>
            <View style={styles.View_130_2314}>
              <Text style={styles.Text_130_2314}>7</Text>
            </View>
            <View style={styles.View_130_2315}>
              <Text style={styles.Text_130_2315}>2</Text>
            </View>
            <View style={styles.View_130_2316}>
              <Text style={styles.Text_130_2316}>5</Text>
            </View>
            <View style={styles.View_130_2317}>
              <Text style={styles.Text_130_2317}>8</Text>
            </View>
            <View style={styles.View_130_2318}>
              <Text style={styles.Text_130_2318}>0</Text>
            </View>
            <View style={styles.View_130_2319}>
              <Text style={styles.Text_130_2319}>.</Text>
            </View>
            <View style={styles.View_130_2320}>
              <Text style={styles.Text_130_2320}>3</Text>
            </View>
            <View style={styles.View_130_2321}>
              <Text style={styles.Text_130_2321}>6</Text>
            </View>
            <View style={styles.View_130_2322}>
              <Text style={styles.Text_130_2322}>9</Text>
            </View>
            <View style={styles.View_130_2324}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8c2/c902/a51fbff580d5ade90a0ed01841a598db"
                }}
                style={styles.ImageBackground_130_2325}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_130_2345}>
          <View style={styles.View_130_2330}>
            <Text style={styles.Text_130_2330}>
              Payment must be at least $250.
            </Text>
          </View>
        </View>
        <View style={styles.View_130_2335}>
          <View style={styles.View_I130_2335_306_1384} />
          <View style={styles.View_I130_2335_306_1385}>
            <Text style={styles.Text_I130_2335_306_1385}>confirm amount</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_130_2329}>
        <View style={styles.View_I130_2329_137_722} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(249, 250, 254, 1)" },
  View_2: { height: hp("119%") },
  View_5_1311: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_5_1311: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 19,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1,
    textTransform: "none"
  },
  View_5_1312: {
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
  ImageBackground_I5_1312_260_1418: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_1313: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("38%"),
    justifyContent: "center"
  },
  Text_5_1313: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1314: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("59%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I5_1314_175_1614: {
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
  View_I5_1314_476_17043: {
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
  View_I5_1314_476_17043_476_11864: {
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
  View_I5_1314_175_1617: {
    flexGrow: 1,
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I5_1314_175_1617: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1314_202_2504: {
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
  ImageBackground_I5_1314_202_2504_177_507: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_5_1315: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("62%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_5_1316: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1320: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("55%"),
    justifyContent: "center"
  },
  Text_5_1320: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1321: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1322: {
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
  View_I5_1322_494_3126: {
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
  View_I5_1322_494_3126_476_11864: {
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
  View_I5_1322_220_3: {
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
  ImageBackground_I5_1322_220_3_175_1498: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I5_1322_220_4: {
    flexGrow: 1,
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I5_1322_220_4: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1323: {
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
  View_I5_1323_494_805: {
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
  View_I5_1323_494_805_476_11864: {
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
  View_I5_1323_202_2596: {
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
  ImageBackground_I5_1323_202_2596_175_1491: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_I5_1323_202_2597: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I5_1323_202_2597: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1324: {
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
  View_I5_1324_649_69: {
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
  View_I5_1324_649_69_476_11864: {
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
  View_I5_1324_649_70: {
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
  ImageBackground_I5_1324_649_70_649_61: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I5_1324_649_71: {
    flexGrow: 1,
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I5_1324_649_71: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1325: {
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
  View_I5_1325_202_2651: {
    flexGrow: 1,
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I5_1325_202_2651: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1325_202_2657: {
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
  ImageBackground_I5_1325_202_2657_202_2653: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_1326: {
    width: wp("69%"),
    minWidth: wp("69%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("71%"),
    justifyContent: "center"
  },
  Text_5_1326: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1327: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("76%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I5_1327_131_1167: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("13%")
  },
  View_I5_1327_225_3780: {
    flexGrow: 1,
    width: wp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I5_1327_225_3780: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_5_1328: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("102%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1328_202_2681: {
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
  View_I5_1328_202_2682: {
    flexGrow: 1,
    width: wp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I5_1328_202_2682: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_5_1329: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("96%"),
    justifyContent: "flex-start"
  },
  Text_5_1329: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1330: {
    width: wp("93%"),
    minWidth: wp("93%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("14%"),
    justifyContent: "center"
  },
  Text_5_1330: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1331: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("21%"),
    justifyContent: "center"
  },
  Text_5_1331: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1332: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I5_1332_175_1614: {
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
  View_I5_1332_476_17043: {
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
  View_I5_1332_476_17043_476_11864: {
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
  View_I5_1332_175_1616: {
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
  ImageBackground_I5_1332_175_1616_175_1531: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I5_1332_175_1617: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I5_1332_175_1617: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1332_202_2504: {
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
  ImageBackground_I5_1332_202_2504_177_507: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_5_1333: {
    width: wp("100%"),
    height: hp("119%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(20, 20, 43, 1)"
  },
  View_5_1367: {
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
  View_I5_1367_137_706: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  View_I5_1367_137_707: {
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
  ImageBackground_I5_1367_137_708: {
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
  View_I5_1367_137_709: {
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
  ImageBackground_I5_1367_137_710: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  ImageBackground_I5_1367_137_714: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I5_1367_137_719: {
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
  View_I5_1367_137_720: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I5_1367_137_720: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 12,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_130_2298: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("90%"),
    minHeight: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%"),
    backgroundColor: "rgba(249, 250, 254, 1)",
    overflow: "hidden"
  },
  View_130_2299: {
    flexGrow: 1,
    width: wp("87%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_130_2300: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_130_2300: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 19,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1,
    textTransform: "none"
  },
  View_130_2301: {
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
  ImageBackground_I130_2301_260_1418: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_130_2341: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_130_2323: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_130_2323: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_130_2348: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_130_2349: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%")
  },
  View_130_2302: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_130_2303: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_130_2304: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_130_2305: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_130_2306: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_130_2307: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("26%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_130_2308: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("39%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_130_2309: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_130_2310: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_130_2311: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("26%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_130_2312: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_130_2312: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_130_2313: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_130_2313: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_130_2314: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_130_2314: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_130_2315: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_130_2315: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_130_2316: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_130_2316: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_130_2317: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_130_2317: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_130_2318: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("42%"),
    justifyContent: "flex-start"
  },
  Text_130_2318: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_130_2319: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_130_2319: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_130_2320: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_130_2320: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_130_2321: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_130_2321: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_130_2322: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_130_2322: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_130_2324: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_130_2325: {
    width: wp("12%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_130_2345: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("74%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_130_2330: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_130_2330: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_130_2335: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("80%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I130_2335_306_1384: {
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
  View_I130_2335_306_1385: {
    flexGrow: 1,
    width: wp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I130_2335_306_1385: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_130_2329: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("114%"),
    backgroundColor: "rgba(249, 250, 254, 1)"
  },
  View_I130_2329_137_722: {
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
