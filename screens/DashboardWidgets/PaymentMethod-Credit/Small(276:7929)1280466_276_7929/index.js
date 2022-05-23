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
      <View style={styles.View_276_7930}>
        <Text style={styles.Text_276_7930}>Card Payments</Text>
      </View>
      <View style={styles.View_276_7953}>
        <Text style={styles.Text_276_7953}>Know the basics</Text>
      </View>
      <View style={styles.View_276_7954}>
        <Text style={styles.Text_276_7954}>Learn More</Text>
      </View>
      <View style={styles.View_276_7955}>
        <View style={styles.View_276_7956}>
          <View style={styles.View_276_7957}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6be9/e7d0/8b323ef7944a3a1f6260949f237532ce"
              }}
              style={styles.ImageBackground_276_7958}
            />
            <View style={styles.View_276_7959} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5d0/1079/406c5f41f369f76d8db61414911f1bed"
              }}
              style={styles.ImageBackground_276_7960}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21f7/f658/6fa75b345771bb93361397614597c6ad"
              }}
              style={styles.ImageBackground_276_7961}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e46/4331/a5483ae9b6cc0a66aa1c657d98aeaf14"
              }}
              style={styles.ImageBackground_276_7962}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d593/e5d4/0050f850a408d8f250d0c75fb922a0e6"
              }}
              style={styles.ImageBackground_276_7963}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71b8/5462/9a6f113a3c1b4eafac87898c5b4fbc60"
              }}
              style={styles.ImageBackground_276_7964}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30a8/3788/d08feee160207f97c45964ffa4d06405"
              }}
              style={styles.ImageBackground_276_7965}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4fe/5475/46693b0cdde929bac2d3fb59872d2077"
              }}
              style={styles.ImageBackground_276_7966}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f5c/7d3f/f63c57e9f45f690873decf8d8acd432f"
              }}
              style={styles.ImageBackground_276_7967}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e4f/faa6/fa44ee20513a80c6ac4ba2e1f90f0b0d"
              }}
              style={styles.ImageBackground_276_7968}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7fe/901a/c6ab8a4ad0d0e07dd9b6a290e017b9d9"
              }}
              style={styles.ImageBackground_276_7969}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1fa/dd3f/df4778655bcd06cf8b15369a2f3aa512"
              }}
              style={styles.ImageBackground_276_7970}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57be/e31f/a48201a326ddbe8efd84dbf13c01369b"
              }}
              style={styles.ImageBackground_276_7971}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc4a/5c87/b5dc71f593be6fae2f87ba070f08e255"
              }}
              style={styles.ImageBackground_276_7972}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bf8/6e91/e110be250cc416120d81a18d7df92650"
              }}
              style={styles.ImageBackground_276_7973}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5e3/b8ac/1e6a3ad60ee4baae476198c534e8b498"
              }}
              style={styles.ImageBackground_276_7974}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f06/ea5c/a38af99db4c816b89326fdfe511d7d5b"
              }}
              style={styles.ImageBackground_276_7975}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4149/bdd5/973a825eeab0c0994a2d8ee86e1c5b3d"
              }}
              style={styles.ImageBackground_276_7976}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee9e/e5d8/53a977859e9e9b4b791e17983e260edb"
              }}
              style={styles.ImageBackground_276_7977}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3de4/cf15/c9ff11feef4e46de915aeb1374e42ca0"
              }}
              style={styles.ImageBackground_276_7978}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_276_7930: {
    width: wp("43%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_276_7930: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_276_7953: {
    width: wp("30%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "center"
  },
  Text_276_7953: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_276_7954: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("72%"),
    justifyContent: "flex-end"
  },
  Text_276_7954: {
    color: "rgba(106, 103, 206, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_276_7955: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("96%"),
    minHeight: hp("96%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_276_7956: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("115%"),
    minHeight: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_276_7957: {
    width: wp("33%"),
    height: hp("115%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_276_7958: {
    width: wp("4%"),
    height: hp("13%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_276_7959: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(160, 163, 189, 1)"
  },
  ImageBackground_276_7960: {
    width: wp("3%"),
    height: hp("16%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_276_7961: {
    width: wp("23%"),
    height: hp("14%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_276_7962: {
    width: wp("19%"),
    height: hp("8%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_276_7963: {
    width: wp("13%"),
    height: hp("6%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_276_7964: {
    width: wp("21%"),
    height: hp("9%"),
    top: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_276_7965: {
    width: wp("7%"),
    height: hp("37%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_276_7966: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_276_7967: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_276_7968: {
    width: wp("12%"),
    height: hp("57%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_276_7969: {
    width: wp("11%"),
    height: hp("67%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_276_7970: {
    width: wp("4%"),
    height: hp("15%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_276_7971: {
    width: wp("7%"),
    height: hp("33%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_276_7972: {
    width: wp("3%"),
    height: hp("30%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_276_7973: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_276_7974: {
    width: wp("3%"),
    height: hp("13%"),
    top: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_276_7975: {
    width: wp("4%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_276_7976: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_276_7977: {
    width: wp("3%"),
    height: hp("13%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_276_7978: {
    width: wp("2%"),
    height: hp("8%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
