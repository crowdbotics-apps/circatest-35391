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
      <View style={styles.View_274_6671}>
        <View style={styles.View_274_6672}>
          <View style={styles.View_274_6673}>
            <View style={styles.View_274_6674}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/90b7/30aa/01eef60818c2983844aba46a8ce50eba"
                }}
                style={styles.ImageBackground_274_6675}
              />
              <View style={styles.View_274_6678}>
                <View style={styles.View_274_6679}>
                  <View style={styles.View_274_6680}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86cc/d1fd/087db5ab8864f31b2fbd320b9d627377"
                      }}
                      style={styles.ImageBackground_274_6681}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3f3/07a7/2e3deb9464d484a5e7d30975be661dca"
                      }}
                      style={styles.ImageBackground_274_6682}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0ff/a3c5/ffea9667c9ffccbf351966cb39d0a455"
                      }}
                      style={styles.ImageBackground_274_6683}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/314f/71b0/d31b33f6768034eb40058490a3f08a0c"
                      }}
                      style={styles.ImageBackground_274_6686}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de83/eac2/ee5f26437f43c5529b0efa03c1b05ee0"
                      }}
                      style={styles.ImageBackground_274_6695}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_274_6696}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbc3/e891/79c9f57d12b9c991b3d37711b22f2e15"
                  }}
                  style={styles.ImageBackground_274_6697}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f92/c763/4063b7f2c4bfaa2a23ba35bd5b1b0665"
                  }}
                  style={styles.ImageBackground_274_6699}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9f9/7c6b/58ee14385d9da958e03b40e6e8d5a438"
                  }}
                  style={styles.ImageBackground_274_6700}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/409a/917f/f2dfe70d96c918609dbf1d4103dc3b9f"
                  }}
                  style={styles.ImageBackground_274_6701}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/060c/0c12/fa5f6facd28ff2e7fb2e6c8ba8f71f71"
                  }}
                  style={styles.ImageBackground_274_6702}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/082f/7ec6/033f69dda0fc7a79b2301091095d7a4b"
                  }}
                  style={styles.ImageBackground_274_6703}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc10/1d23/2b868808bd1323ffbf7a93b3ec5b363e"
                  }}
                  style={styles.ImageBackground_274_6704}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b67/7314/f27988461a37cc9c6342f279ae759938"
                  }}
                  style={styles.ImageBackground_274_6705}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6144/4319/20f6620d9fac125f78fdddbfa2224613"
                  }}
                  style={styles.ImageBackground_274_6706}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85af/64af/076b6027496c2e46d3416d7538ade299"
                  }}
                  style={styles.ImageBackground_274_6707}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6421/efba/966d1746d9e4c6d7d65eeeac2e6cab53"
                  }}
                  style={styles.ImageBackground_274_6708}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3065/d55d/57ce1b1bb5fcb53925d01c71efb67357"
                  }}
                  style={styles.ImageBackground_274_6709}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7160/15f9/7032fd98682af81f4fe5ac3151e735c3"
                  }}
                  style={styles.ImageBackground_274_6710}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_274_6711}>
            <Text style={styles.Text_274_6711}>
              Make a plan to get caught up.
            </Text>
          </View>
          <View style={styles.View_274_6712}>
            <Text style={styles.Text_274_6712}>Missed rent? It happens.</Text>
          </View>
          <View style={styles.View_274_6713}>
            <Text style={styles.Text_274_6713}>SETUP RENTASSIST</Text>
          </View>
        </View>
        <View style={styles.View_274_6714}>
          <View style={styles.View_274_6715}>
            <Text style={styles.Text_274_6715}>Card Payments</Text>
          </View>
          <View style={styles.View_274_6738}>
            <Text style={styles.Text_274_6738}>Know the basics</Text>
          </View>
          <View style={styles.View_274_6739}>
            <Text style={styles.Text_274_6739}>Learn More</Text>
          </View>
          <View style={styles.View_274_6740}>
            <View style={styles.View_274_6741}>
              <View style={styles.View_274_6742}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6be9/e7d0/8b323ef7944a3a1f6260949f237532ce"
                  }}
                  style={styles.ImageBackground_274_6743}
                />
                <View style={styles.View_274_6744} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b931/b8ec/7bbf180826329e5d3505390ec5d3e3c6"
                  }}
                  style={styles.ImageBackground_274_6745}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21f7/f658/6fa75b345771bb93361397614597c6ad"
                  }}
                  style={styles.ImageBackground_274_6746}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e46/4331/a5483ae9b6cc0a66aa1c657d98aeaf14"
                  }}
                  style={styles.ImageBackground_274_6747}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd75/1959/01d3ce64496e55d6c95f23fa14b57c1b"
                  }}
                  style={styles.ImageBackground_274_6748}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d21/dcc8/bbcf951a6dc8f3ea2a822442398b35a0"
                  }}
                  style={styles.ImageBackground_274_6749}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30a8/3788/d08feee160207f97c45964ffa4d06405"
                  }}
                  style={styles.ImageBackground_274_6750}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4fe/5475/46693b0cdde929bac2d3fb59872d2077"
                  }}
                  style={styles.ImageBackground_274_6751}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f5c/7d3f/f63c57e9f45f690873decf8d8acd432f"
                  }}
                  style={styles.ImageBackground_274_6752}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e4f/faa6/fa44ee20513a80c6ac4ba2e1f90f0b0d"
                  }}
                  style={styles.ImageBackground_274_6753}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/372e/5e3b/cc36d941bc7d380f9895ca2b9a376ddc"
                  }}
                  style={styles.ImageBackground_274_6754}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1fa/dd3f/df4778655bcd06cf8b15369a2f3aa512"
                  }}
                  style={styles.ImageBackground_274_6755}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57be/e31f/a48201a326ddbe8efd84dbf13c01369b"
                  }}
                  style={styles.ImageBackground_274_6756}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc4a/5c87/b5dc71f593be6fae2f87ba070f08e255"
                  }}
                  style={styles.ImageBackground_274_6757}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bf8/6e91/e110be250cc416120d81a18d7df92650"
                  }}
                  style={styles.ImageBackground_274_6758}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5e3/b8ac/1e6a3ad60ee4baae476198c534e8b498"
                  }}
                  style={styles.ImageBackground_274_6759}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f06/ea5c/a38af99db4c816b89326fdfe511d7d5b"
                  }}
                  style={styles.ImageBackground_274_6760}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4149/bdd5/973a825eeab0c0994a2d8ee86e1c5b3d"
                  }}
                  style={styles.ImageBackground_274_6761}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee9e/e5d8/53a977859e9e9b4b791e17983e260edb"
                  }}
                  style={styles.ImageBackground_274_6762}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3de4/cf15/c9ff11feef4e46de915aeb1374e42ca0"
                  }}
                  style={styles.ImageBackground_274_6763}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_274_6764}>
          <View style={styles.View_274_6765}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3381/7646/0cdecefcefdb4b10a3a208ce211cd5ff"
              }}
              style={styles.ImageBackground_274_6766}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99a2/f34a/c7e96bbd4e9a93887cd4b991492c00a8"
              }}
              style={styles.ImageBackground_274_6767}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f31/ed2d/4db6029c14255cb3e11335b84addb451"
              }}
              style={styles.ImageBackground_274_6768}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/274d/919f/b7d7d1d68c561bb7226b29bb43bd2069"
              }}
              style={styles.ImageBackground_274_6769}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c22/cd80/8e446bf0202fd79aae64d0449e79874f"
              }}
              style={styles.ImageBackground_274_6770}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc6b/fd78/20c22045cd89e0f0bb3ac9f48fe26b3d"
              }}
              style={styles.ImageBackground_274_6771}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dae2/f21f/0761a7a52cabd931473c69291585692c"
              }}
              style={styles.ImageBackground_274_6772}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7134/a523/92c46098687062fff163c98fe3e3cf97"
              }}
              style={styles.ImageBackground_274_6773}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7acf/26fa/9f710372624ceb096e958528fb6c76e3"
              }}
              style={styles.ImageBackground_274_6774}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98ea/f837/6a05f59b745ed6a20a8cb3471c35c6dd"
              }}
              style={styles.ImageBackground_274_6775}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20bc/d7b6/8d9d886edc1f783a709abf7794d0f5f5"
              }}
              style={styles.ImageBackground_274_6776}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/686d/e8b7/d33a92427d9685b6d4b55239ea352ef8"
              }}
              style={styles.ImageBackground_274_6777}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbfa/76c4/f6fe5c0d320e2255b6eab0b1c4200412"
              }}
              style={styles.ImageBackground_274_6778}
            />
            <View style={styles.View_274_6779}>
              <Text style={styles.Text_274_6779}>?</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f59/cbc0/58be879a16a078e80fdb6995c0214aaa"
              }}
              style={styles.ImageBackground_274_6780}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5dd/7990/f38eabe988d59b0359db78b2ac2ea9c8"
              }}
              style={styles.ImageBackground_274_6781}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5dd/7990/f38eabe988d59b0359db78b2ac2ea9c8"
              }}
              style={styles.ImageBackground_274_6782}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5dd/7990/f38eabe988d59b0359db78b2ac2ea9c8"
              }}
              style={styles.ImageBackground_274_6783}
            />
          </View>
          <View style={styles.View_274_6784}>
            <Text style={styles.Text_274_6784}>How can we help you?</Text>
          </View>
        </View>
        <View style={styles.View_274_6785}>
          <View style={styles.View_274_6786}>
            <Text style={styles.Text_274_6786}>Community Perks</Text>
          </View>
          <View style={styles.View_274_6787}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ae9/b6d8/486e0dcb2d0b9a561e2a6f8f2b421df2"
              }}
              style={styles.ImageBackground_274_6788}
            />
            <View style={styles.View_274_6789}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eee8/0370/9e5c1db627137a7fd49fb196759490f5"
                }}
                style={styles.ImageBackground_274_6790}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ccf/2924/2ca758d72c63fd8905818384aee1eacc"
                }}
                style={styles.ImageBackground_274_6793}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d43/916b/c2633aedb249751272b762bdce653626"
                }}
                style={styles.ImageBackground_274_6813}
              />
              <View style={styles.View_274_6833}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a910/02d3/36836444ca8c4ef773ec036a9391f303"
                  }}
                  style={styles.ImageBackground_274_6834}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ac2/27e2/db2ae05f205ed6053caf9a1331d8ff36"
                }}
                style={styles.ImageBackground_274_6860}
              />
              <View style={styles.View_274_6876}>
                <View style={styles.View_274_6877}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/068c/bd8a/7c399aab19c913f764cd96fbfde6bb34"
                    }}
                    style={styles.ImageBackground_274_6878}
                  />
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4023/a0f3/2334cbcdb69dcd499e155ebc16923b17"
                }}
                style={styles.ImageBackground_274_6898}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5833/95f4/f3011a8745b14cdb695e377fca22ac9f"
                }}
                style={styles.ImageBackground_274_6911}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fe4/857e/852756c6b5325ce33e9791b95e00901c"
                }}
                style={styles.ImageBackground_274_6920}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fe4/857e/852756c6b5325ce33e9791b95e00901c"
                }}
                style={styles.ImageBackground_274_6933}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/410f/995a/ab5e8675f7e8196f3f41f84707f1a301"
                }}
                style={styles.ImageBackground_274_6946}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_274_6966}>
          <View style={styles.View_274_6967}>
            <Text style={styles.Text_274_6967}>Share Circa &amp; Earn!</Text>
          </View>
          <View style={styles.View_274_6968}>
            <View style={styles.View_274_6969}>
              <View style={styles.View_274_6970}>
                <View style={styles.View_274_6971}>
                  <View style={styles.View_274_6972}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a005/cdc5/00f50f47eefd7582c846f86f39cf3992"
                      }}
                      style={styles.ImageBackground_274_6973}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ba8/60b8/144e75944ad5fbc31ab050746979f660"
                      }}
                      style={styles.ImageBackground_274_6974}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/465b/cfa0/2110fe0b4753ac7a1cb1eefc46eb0ae4"
                      }}
                      style={styles.ImageBackground_274_6975}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c95e/44de/1022f4d06055914a4198065c099aefb0"
                      }}
                      style={styles.ImageBackground_274_6976}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a076/c014/0ecce9b42e1a6f983e14a77bb8b0b637"
                      }}
                      style={styles.ImageBackground_274_6977}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4998/fc18/350b009bf05601c5bdc773d60638bdb3"
                      }}
                      style={styles.ImageBackground_274_6978}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71e1/ca36/214d09d05a1c6b62940aa0934e953c95"
                      }}
                      style={styles.ImageBackground_274_6979}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b105/8d3f/bbca062dfd36e29d2c91495d919c3247"
                      }}
                      style={styles.ImageBackground_274_6980}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4ff/4b28/ff354a5db3277ed45e2b972f20428bfc"
                      }}
                      style={styles.ImageBackground_274_6981}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5949/ee4b/13a6b58476b8ca542963150a86b67b9d"
                      }}
                      style={styles.ImageBackground_274_6983}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e13/6776/8825a72d93814ed928a71bcee2433797"
                      }}
                      style={styles.ImageBackground_274_6984}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_274_6985}>
            <Text style={styles.Text_274_6985}>Earn $10 per referral</Text>
          </View>
          <View style={styles.View_274_6986}>
            <Text style={styles.Text_274_6986}>refer a neighbor</Text>
          </View>
        </View>
        <View style={styles.View_274_6987}>
          <View style={styles.View_274_6988}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91f2/ea04/81c621456dc8da9f5287ca8466966a4b"
              }}
              style={styles.ImageBackground_274_6989}
            />
            <View style={styles.View_274_6993}>
              <View style={styles.View_274_6994}>
                <View style={styles.View_I274_6994_138_994}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b4e/373e/80ffdc80917e141a9c739a765a98a27a"
                    }}
                    style={styles.ImageBackground_I274_6994_138_995}
                  />
                </View>
                <View style={styles.View_I274_6994_138_998}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f69/cdae/91d639a0db71ca71b6f5fbf82b1c380e"
                    }}
                    style={styles.ImageBackground_I274_6994_138_999}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c783/e9ee/00e90d2601f5a73af55885017ff69517"
                    }}
                    style={styles.ImageBackground_I274_6994_138_1004}
                  />
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24b3/abdd/bbd4523f80af56fd61632839a6fe62ba"
                }}
                style={styles.ImageBackground_274_6995}
              />
              <View style={styles.View_274_7002}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0be/5331/595cea87b37ccc03c3536f78c345c043"
                  }}
                  style={styles.ImageBackground_I274_7002_138_710}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cd2/6b2f/f89b038212c7cb56a059dbc490645335"
                  }}
                  style={styles.ImageBackground_I274_7002_138_713}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae4a/9f86/b26c565dc34f62a7d2f30c3902ae8a07"
                  }}
                  style={styles.ImageBackground_I274_7002_498_394}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf3e/34e0/9e623ecc02bf4107390aabdc9029e7c8"
                  }}
                  style={styles.ImageBackground_I274_7002_138_714}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2e8/f13b/ba60fdee6e8bb2a92f5264d14602f01d"
                  }}
                  style={styles.ImageBackground_I274_7002_138_715}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_274_7003}>
            <View style={styles.View_274_7004}>
              <Text style={styles.Text_274_7004}>The credit you deserve</Text>
            </View>
            <View style={styles.View_274_7005}>
              <Text style={styles.Text_274_7005}>
                Using Circa boosts your credit.
              </Text>
            </View>
            <View style={styles.View_274_7006}>
              <Text style={styles.Text_274_7006}>Learn More</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_274_7007}>
          <View style={styles.View_274_7008}>
            <View style={styles.View_274_7009}>
              <Text text="" style={styles.Text_274_7009} />
            </View>
            <ImageBackground style={styles.ImageBackground_274_7010}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14d4/7f11/fe16098e1434702c3fe6e5d2a14238b8"
                }}
                style={styles.ImageBackground_274_7011}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f45b/40b6/20b2ea579cbaddc25693d06693f5f75e"
                }}
                style={styles.ImageBackground_274_7012}
              />
            </ImageBackground>
            <View style={styles.View_274_7013}>
              <TouchableOpacity
                style={styles.TouchableOpacity_274_7014}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("114_3325")
                  )
                }
              >
                <View style={styles.View_I274_7014_175_1311}>
                  <Text style={styles.Text_I274_7014_175_1311}>
                    Contact property
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={styles.View_274_7015}>
                <Text style={styles.Text_274_7015}>Deborah Rogers</Text>
              </View>
              <View style={styles.View_274_7016}>
                <Text style={styles.Text_274_7016}>Property Manager</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_274_7017}>
            <View style={styles.View_274_7018}>
              <View style={styles.View_274_7019} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d203/8845/5a53a6fec6db1fcff7ddc5543c8bbb9f"
                }}
                style={styles.ImageBackground_274_7020}
              />
            </View>
            <View style={styles.View_274_7021}>
              <TouchableOpacity
                style={styles.TouchableOpacity_274_7022}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("114_3325")
                  )
                }
              >
                <View style={styles.View_I274_7022_175_1311}>
                  <Text style={styles.Text_I274_7022_175_1311}>
                    Contact property
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={styles.View_274_7023}>
                <Text style={styles.Text_274_7023}>Sam Jackson</Text>
              </View>
              <View style={styles.View_274_7024}>
                <Text style={styles.Text_274_7024}>Property Manager</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_274_7025}>
            <View style={styles.View_274_7026}>
              <Text style={styles.Text_274_7026}>Circa Support</Text>
            </View>
            <View style={styles.View_274_7027}>
              <Text style={styles.Text_274_7027}>We’re here to help.</Text>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_274_7028}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("114_3325"))
              }
            >
              <View style={styles.View_I274_7028_175_1311}>
                <Text style={styles.Text_I274_7028_175_1311}>
                  VISIT support center{" "}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.View_274_7029}>
        <View style={styles.View_274_7030} />
        <View style={styles.View_274_7031}>
          <Text style={styles.Text_274_7031}>$505 due in</Text>
        </View>
        <View style={styles.View_274_7032}>
          <Text style={styles.Text_274_7032}>5 days</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_274_7033}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("114_3325"))
          }
        >
          <View style={styles.View_I274_7033_175_1311}>
            <Text style={styles.Text_I274_7033_175_1311}>modify</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_274_7034}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I274_7034_236_522}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("114_2797"))
            }
          >
            <View style={styles.View_I274_7034_236_522_236_734}>
              <TouchableOpacity
                style={styles.TouchableOpacity_I274_7034_236_522_236_735}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("114_2789")
                  )
                }
              >
                <View style={styles.View_I274_7034_236_522_236_735_236_469}>
                  <Text style={styles.Text_I274_7034_236_522_236_735_236_469}>
                    3944 Delancey
                  </Text>
                </View>
                <View style={styles.View_I274_7034_236_522_236_735_236_489}>
                  <View
                    style={
                      styles.View_I274_7034_236_522_236_735_236_489_154_101
                    }
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.TouchableOpacity_I274_7034_236_522_236_736}
                onPress={() =>
                  this.props.navigation.navigate(
                    getNavigationScreen("114_2789")
                  )
                }
              >
                <View style={styles.View_I274_7034_236_522_236_736_236_469}>
                  <Text style={styles.Text_I274_7034_236_522_236_736_236_469}>
                    500 Walnut #48
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.View_I274_7034_236_522_236_737}>
              <View style={styles.View_I274_7034_236_522_236_738}>
                <Text style={styles.Text_I274_7034_236_522_236_738}>
                  123 Main Street #1A
                </Text>
              </View>
              <View style={styles.View_I274_7034_236_522_236_739}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1157/c104/8ec7b6b1e18619b573c418e4a458643e"
                  }}
                  style={
                    styles.ImageBackground_I274_7034_236_522_236_739_236_51
                  }
                />
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.View_I274_7034_626_2115}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/185f/bfe8/c442ce61184e607db28abee8756e513c"
              }}
              style={styles.ImageBackground_I274_7034_626_2115_626_2110}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1088/8e35/7e863ba1780d703783e2f9f06d3caf4e"
              }}
              style={styles.ImageBackground_I274_7034_626_2115_626_2114}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_274_7035}>
        <View style={styles.View_274_7036} />
        <View style={styles.View_274_7037}>
          <View style={styles.View_274_7038}>
            <View style={styles.View_I274_7038_177_4} />
            <View style={styles.View_I274_7038_494_1271}>
              <View style={styles.View_I274_7038_494_1271_476_11864} />
            </View>
            <View style={styles.View_I274_7038_177_6}>
              <Text style={styles.Text_I274_7038_177_6}>$505</Text>
            </View>
            <View style={styles.View_I274_7038_177_7}>
              <Text style={styles.Text_I274_7038_177_7}>Jan 7</Text>
            </View>
            <View style={styles.View_I274_7038_177_110}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ae6/db19/bcdd7062f91964ea11aaf1b78fc52e5e"
                }}
                style={styles.ImageBackground_I274_7038_177_110_175_1525}
              />
              <View style={styles.View_I274_7038_177_110_175_1526}>
                <Text style={styles.Text_I274_7038_177_110_175_1526}>2</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_274_7039}>
            <View style={styles.View_I274_7039_177_4} />
            <View style={styles.View_I274_7039_494_1271}>
              <View style={styles.View_I274_7039_494_1271_476_11864} />
            </View>
            <View style={styles.View_I274_7039_177_6}>
              <Text style={styles.Text_I274_7039_177_6}>$505</Text>
            </View>
            <View style={styles.View_I274_7039_177_7}>
              <Text style={styles.Text_I274_7039_177_7}>Jan 16</Text>
            </View>
            <View style={styles.View_I274_7039_177_110}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ae6/db19/bcdd7062f91964ea11aaf1b78fc52e5e"
                }}
                style={styles.ImageBackground_I274_7039_177_110_175_1525}
              />
              <View style={styles.View_I274_7039_177_110_175_1526}>
                <Text style={styles.Text_I274_7039_177_110_175_1526}>2</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_274_7040}>
            <View style={styles.View_I274_7040_177_4} />
            <View style={styles.View_I274_7040_494_1271}>
              <View style={styles.View_I274_7040_494_1271_476_11864} />
            </View>
            <View style={styles.View_I274_7040_177_6}>
              <Text style={styles.Text_I274_7040_177_6}>$1000</Text>
            </View>
            <View style={styles.View_I274_7040_177_7}>
              <Text style={styles.Text_I274_7040_177_7}>Dec 13</Text>
            </View>
            <View style={styles.View_I274_7040_177_110}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ae6/db19/bcdd7062f91964ea11aaf1b78fc52e5e"
                }}
                style={styles.ImageBackground_I274_7040_177_110_175_1525}
              />
              <View style={styles.View_I274_7040_177_110_175_1526}>
                <Text style={styles.Text_I274_7040_177_110_175_1526}>2</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_274_7041}>
            <View style={styles.View_I274_7041_177_4} />
            <View style={styles.View_I274_7041_494_1271}>
              <View style={styles.View_I274_7041_494_1271_476_11864} />
            </View>
            <View style={styles.View_I274_7041_177_6}>
              <Text style={styles.Text_I274_7041_177_6}>$1000</Text>
            </View>
            <View style={styles.View_I274_7041_177_7}>
              <Text style={styles.Text_I274_7041_177_7}>Jan 1</Text>
            </View>
            <View style={styles.View_I274_7041_177_110}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ae6/db19/bcdd7062f91964ea11aaf1b78fc52e5e"
                }}
                style={styles.ImageBackground_I274_7041_177_110_175_1525}
              />
              <View style={styles.View_I274_7041_177_110_175_1526}>
                <Text style={styles.Text_I274_7041_177_110_175_1526}>2</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_274_7042}>
            <View style={styles.View_I274_7042_177_4} />
            <View style={styles.View_I274_7042_494_1271}>
              <View style={styles.View_I274_7042_494_1271_476_11864} />
            </View>
            <View style={styles.View_I274_7042_177_6}>
              <Text style={styles.Text_I274_7042_177_6}>$1000</Text>
            </View>
            <View style={styles.View_I274_7042_177_7}>
              <Text style={styles.Text_I274_7042_177_7}>Jan 13</Text>
            </View>
            <View style={styles.View_I274_7042_177_110}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ae6/db19/bcdd7062f91964ea11aaf1b78fc52e5e"
                }}
                style={styles.ImageBackground_I274_7042_177_110_175_1525}
              />
              <View style={styles.View_I274_7042_177_110_175_1526}>
                <Text style={styles.Text_I274_7042_177_110_175_1526}>2</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_274_7043}>
            <View style={styles.View_I274_7043_177_4} />
            <View style={styles.View_I274_7043_494_1271}>
              <View style={styles.View_I274_7043_494_1271_476_11864} />
            </View>
            <View style={styles.View_I274_7043_177_6}>
              <Text style={styles.Text_I274_7043_177_6}>$1000</Text>
            </View>
            <View style={styles.View_I274_7043_177_7}>
              <Text style={styles.Text_I274_7043_177_7}>Feb 1</Text>
            </View>
            <View style={styles.View_I274_7043_177_110}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ae6/db19/bcdd7062f91964ea11aaf1b78fc52e5e"
                }}
                style={styles.ImageBackground_I274_7043_177_110_175_1516}
              />
              <View style={styles.View_I274_7043_177_110_175_1517}>
                <Text style={styles.Text_I274_7043_177_110_175_1517}>1</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_274_7044}>
            <View style={styles.View_I274_7044_177_144} />
            <View style={styles.View_I274_7044_177_145}>
              <Text style={styles.Text_I274_7044_177_145}>See all</Text>
            </View>
            <View style={styles.View_I274_7044_177_151}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfc1/b405/109025109810195afc0ae204862219db"
                }}
                style={styles.ImageBackground_I274_7044_177_151_177_147}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_274_7045}>
        <View style={styles.View_I274_7045_144_70} />
        <View style={styles.View_I274_7045_2511_17901}>
          <View style={styles.View_I274_7045_144_770}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4c4/7645/eb18c075276bfda64c351eabd4b41549"
              }}
              style={styles.ImageBackground_I274_7045_144_770_144_579}
            />
          </View>
          <View
            source={{ uri: "null" }}
            style={styles.View_I274_7045_2511_17630}
          />
        </View>
        <View style={styles.View_I274_7045_2511_20286}>
          <View style={styles.View_I274_7045_595_33}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6afd/ec71/df5e0c33c2858d81dfc5e59da93fc505"
              }}
              style={styles.ImageBackground_I274_7045_595_33_595_27}
            />
          </View>
          <View
            source={{ uri: "null" }}
            style={styles.View_I274_7045_2511_18182}
          />
        </View>
        <View style={styles.View_I274_7045_2511_20998}>
          <View style={styles.View_I274_7045_144_870}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abfb/0996/f6fd4b1b08182381df9bfdb29526142d"
              }}
              style={styles.ImageBackground_I274_7045_144_870_144_589}
            />
          </View>
          <View
            source={{ uri: "null" }}
            style={styles.View_I274_7045_2511_18882}
          />
        </View>
        <View style={styles.View_I274_7045_2511_20637}>
          <View style={styles.View_I274_7045_144_822}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/79c2/7ee2/d8a5ec03658e71557fa5850c59ada8a3"
              }}
              style={styles.ImageBackground_I274_7045_144_822_228_34}
            />
          </View>
          <View
            source={{ uri: "null" }}
            style={styles.View_I274_7045_2511_18560}
          />
        </View>
        <View style={styles.View_I274_7045_2462_14672}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3589/c59f/14d7df4d5aa26d58cbb279d42fc9178e"
            }}
            style={styles.ImageBackground_I274_7045_2454_14657}
          />
          <View style={styles.View_I274_7045_2859_15727}>
            <View style={styles.View_I274_7045_2859_15727_2454_14658}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffa5/279d/b2b846f93b9026ad88accc168f0ea1ba"
                }}
                style={
                  styles.ImageBackground_I274_7045_2859_15727_2454_14658_144_575
                }
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_274_7046}>
        <View style={styles.View_I274_7046_137_722} />
      </View>
      <View style={styles.View_274_7047}>
        <View style={styles.View_I274_7047_137_740}>
          <View style={styles.View_I274_7047_137_741} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f42a/1606/503c13ffedd2dea885d01312f8573c77"
            }}
            style={styles.ImageBackground_I274_7047_137_742}
          />
          <View style={styles.View_I274_7047_137_743} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3600/2838/3894d8927595e78d5ffcb8f357b3824e"
          }}
          style={styles.ImageBackground_I274_7047_137_744}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5b1/4af2/a5e6c0f60c15cfdeb166a41da89658a9"
          }}
          style={styles.ImageBackground_I274_7047_137_748}
        />
        <View style={styles.View_I274_7047_137_753}>
          <View style={styles.View_I274_7047_137_754}>
            <Text style={styles.Text_I274_7047_137_754}>9:41</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(249, 250, 254, 1)" },
  View_2: { height: hp("260%") },
  View_274_6671: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("174%"),
    minHeight: hp("174%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("45%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_274_6672: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_274_6673: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_274_6674: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_274_6675: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_274_6678: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_274_6679: {
    width: wp("20%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_274_6680: {
    width: wp("20%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_274_6681: {
    width: wp("14%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_274_6682: {
    width: wp("7%"),
    height: hp("6%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_274_6683: {
    width: wp("13%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_274_6686: {
    width: wp("17%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_274_6695: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_274_6696: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  ImageBackground_274_6697: {
    width: wp("9%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_274_6699: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_274_6700: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_274_6701: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_274_6702: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_274_6703: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_274_6704: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_274_6705: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_274_6706: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_274_6707: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_274_6708: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_274_6709: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_274_6710: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_274_6711: {
    width: wp("55%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    justifyContent: "flex-start"
  },
  Text_274_6711: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_274_6712: {
    width: wp("54%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    justifyContent: "flex-start"
  },
  Text_274_6712: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_274_6713: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("12%"),
    justifyContent: "flex-end"
  },
  Text_274_6713: {
    color: "rgba(106, 103, 206, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_274_6714: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_274_6715: {
    width: wp("39%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_274_6715: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_274_6738: {
    width: wp("28%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "center"
  },
  Text_274_6738: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_274_6739: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("12%"),
    justifyContent: "flex-end"
  },
  Text_274_6739: {
    color: "rgba(106, 103, 206, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_274_6740: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_274_6741: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_274_6742: {
    width: wp("30%"),
    height: hp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_274_6743: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_274_6744: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(160, 163, 189, 1)"
  },
  ImageBackground_274_6745: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_274_6746: {
    width: wp("21%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_274_6747: {
    width: wp("17%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_274_6748: {
    width: wp("12%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_274_6749: {
    width: wp("19%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_274_6750: {
    width: wp("6%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_274_6751: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_274_6752: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_274_6753: {
    width: wp("11%"),
    height: hp("10%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_274_6754: {
    width: wp("10%"),
    height: hp("11%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_274_6755: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_274_6756: {
    width: wp("7%"),
    height: hp("6%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_274_6757: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_274_6758: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_274_6759: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_274_6760: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_274_6761: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_274_6762: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_274_6763: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_274_6764: {
    width: wp("62%"),
    minWidth: wp("62%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("105%")
  },
  View_274_6765: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_274_6766: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_274_6767: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_274_6768: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_274_6769: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_274_6770: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_274_6771: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_274_6772: {
    width: wp("10%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_274_6773: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_274_6774: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_274_6775: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_274_6776: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_274_6777: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_274_6778: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  View_274_6779: {
    width: wp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_274_6779: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13.153820037841797,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_274_6780: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_274_6781: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_274_6782: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_274_6783: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  View_274_6784: {
    width: wp("32%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    justifyContent: "center"
  },
  Text_274_6784: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_274_6785: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_274_6786: {
    width: wp("65%"),
    minWidth: wp("65%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("16%"),
    justifyContent: "center"
  },
  Text_274_6786: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_274_6787: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_274_6788: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_274_6789: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_274_6790: {
    width: wp("83%"),
    height: hp("3%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_274_6793: {
    width: wp("12%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_274_6813: {
    width: wp("12%"),
    height: hp("10%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_274_6833: {
    width: wp("12%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_274_6834: {
    width: wp("12%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_274_6860: {
    width: wp("12%"),
    height: hp("9%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  View_274_6876: {
    width: wp("12%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%")
  },
  View_274_6877: {
    width: wp("12%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_274_6878: {
    width: wp("12%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_274_6898: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_274_6911: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_274_6920: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  ImageBackground_274_6933: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%")
  },
  ImageBackground_274_6946: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  View_274_6966: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("83%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_274_6967: {
    width: wp("43%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_274_6967: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_274_6968: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("-2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_274_6969: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_274_6970: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_274_6971: {
    width: wp("44%"),
    height: hp("22%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_274_6972: {
    width: wp("44%"),
    height: hp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_274_6973: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_274_6974: {
    width: wp("27%"),
    height: hp("15%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_274_6975: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_274_6976: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_274_6977: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_274_6978: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_274_6979: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_274_6980: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_274_6981: {
    width: wp("13%"),
    height: hp("7%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_274_6983: {
    width: wp("33%"),
    height: hp("17%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_274_6984: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  View_274_6985: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_274_6985: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_274_6986: {
    width: wp("34%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-end"
  },
  Text_274_6986: {
    color: "rgba(106, 103, 206, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_274_6987: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("64%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_274_6988: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  ImageBackground_274_6989: {
    width: wp("12%"),
    height: hp("5%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_274_6993: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_274_6994: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I274_6994_138_994: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  ImageBackground_I274_6994_138_995: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I274_6994_138_998: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I274_6994_138_999: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I274_6994_138_1004: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_274_6995: {
    width: wp("10%"),
    height: hp("8%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_274_7002: {
    width: wp("17%"),
    height: hp("7%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I274_7002_138_710: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  ImageBackground_I274_7002_138_713: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%")
  },
  ImageBackground_I274_7002_498_394: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%")
  },
  ImageBackground_I274_7002_138_714: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_I274_7002_138_715: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_274_7003: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("2%")
  },
  View_274_7004: {
    width: wp("51%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_274_7004: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_274_7005: {
    width: wp("51%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_274_7005: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_274_7006: {
    width: wp("25%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-end"
  },
  Text_274_7006: {
    color: "rgba(106, 103, 206, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_274_7007: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("120%")
  },
  View_274_7008: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_274_7009: {
    width: wp("63%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    justifyContent: "flex-start"
  },
  Text_274_7009: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_274_7010: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%")
  },
  ImageBackground_274_7011: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_274_7012: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_274_7013: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("3%")
  },
  TouchableOpacity_274_7014: {
    width: wp("46%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I274_7014_175_1311: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-end"
  },
  Text_I274_7014_175_1311: {
    color: "rgba(106, 103, 206, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_274_7015: {
    width: wp("65%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_274_7015: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_274_7016: {
    width: wp("65%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_274_7016: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_274_7017: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_274_7018: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%")
  },
  View_274_7019: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_274_7020: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_274_7021: {
    width: wp("65%"),
    minWidth: wp("65%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("3%")
  },
  TouchableOpacity_274_7022: {
    width: wp("46%"),
    height: hp("3%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I274_7022_175_1311: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-end"
  },
  Text_I274_7022_175_1311: {
    color: "rgba(106, 103, 206, 1)",
    fontSize: 10,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_274_7023: {
    width: wp("65%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_274_7023: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_274_7024: {
    width: wp("65%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_274_7024: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_274_7025: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%"),
    backgroundColor: "rgba(27, 12, 98, 1)"
  },
  View_274_7026: {
    width: wp("82%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_274_7026: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_274_7027: {
    width: wp("82%"),
    minWidth: wp("82%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_274_7027: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_274_7028: {
    width: wp("50%"),
    height: hp("3%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I274_7028_175_1311: {
    flexGrow: 1,
    width: wp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-end"
  },
  Text_I274_7028_175_1311: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_274_7029: {
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
  View_274_7030: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(27, 12, 98, 1)"
  },
  View_274_7031: {
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
  Text_274_7031: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_274_7032: {
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
  Text_274_7032: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_274_7033: {
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
  View_I274_7033_175_1311: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-end"
  },
  Text_I274_7033_175_1311: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_274_7034: {
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
  TouchableOpacity_I274_7034_236_522: {
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
  View_I274_7034_236_522_236_734: {
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
  TouchableOpacity_I274_7034_236_522_236_735: {
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
  View_I274_7034_236_522_236_735_236_469: {
    flexGrow: 1,
    width: wp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I274_7034_236_522_236_735_236_469: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I274_7034_236_522_236_735_236_489: {
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
  View_I274_7034_236_522_236_735_236_489_154_101: {
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
  TouchableOpacity_I274_7034_236_522_236_736: {
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
  View_I274_7034_236_522_236_736_236_469: {
    flexGrow: 1,
    width: wp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I274_7034_236_522_236_736_236_469: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I274_7034_236_522_236_737: {
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
  View_I274_7034_236_522_236_738: {
    width: wp("39%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I274_7034_236_522_236_738: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I274_7034_236_522_236_739: {
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
  ImageBackground_I274_7034_236_522_236_739_236_51: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_I274_7034_626_2115: {
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
  ImageBackground_I274_7034_626_2115_626_2110: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I274_7034_626_2115_626_2114: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_274_7035: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_274_7036: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_274_7037: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_274_7038: {
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
  View_I274_7038_177_4: {
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
  View_I274_7038_494_1271: {
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
  View_I274_7038_494_1271_476_11864: {
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
  View_I274_7038_177_6: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I274_7038_177_6: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I274_7038_177_7: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I274_7038_177_7: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I274_7038_177_110: {
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
  ImageBackground_I274_7038_177_110_175_1525: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I274_7038_177_110_175_1526: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I274_7038_177_110_175_1526: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_274_7039: {
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
  View_I274_7039_177_4: {
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
  View_I274_7039_494_1271: {
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
  View_I274_7039_494_1271_476_11864: {
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
  View_I274_7039_177_6: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I274_7039_177_6: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I274_7039_177_7: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I274_7039_177_7: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I274_7039_177_110: {
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
  ImageBackground_I274_7039_177_110_175_1525: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I274_7039_177_110_175_1526: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I274_7039_177_110_175_1526: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_274_7040: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I274_7040_177_4: {
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
  View_I274_7040_494_1271: {
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
  View_I274_7040_494_1271_476_11864: {
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
  View_I274_7040_177_6: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I274_7040_177_6: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I274_7040_177_7: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I274_7040_177_7: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I274_7040_177_110: {
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
  ImageBackground_I274_7040_177_110_175_1525: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I274_7040_177_110_175_1526: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I274_7040_177_110_175_1526: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_274_7041: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("129%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I274_7041_177_4: {
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
  View_I274_7041_494_1271: {
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
  View_I274_7041_494_1271_476_11864: {
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
  View_I274_7041_177_6: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I274_7041_177_6: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I274_7041_177_7: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I274_7041_177_7: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I274_7041_177_110: {
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
  ImageBackground_I274_7041_177_110_175_1525: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I274_7041_177_110_175_1526: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I274_7041_177_110_175_1526: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_274_7042: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("171%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I274_7042_177_4: {
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
  View_I274_7042_494_1271: {
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
  View_I274_7042_494_1271_476_11864: {
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
  View_I274_7042_177_6: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I274_7042_177_6: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I274_7042_177_7: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I274_7042_177_7: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I274_7042_177_110: {
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
  ImageBackground_I274_7042_177_110_175_1525: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I274_7042_177_110_175_1526: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I274_7042_177_110_175_1526: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_274_7043: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("212%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I274_7043_177_4: {
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
  View_I274_7043_494_1271: {
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
  View_I274_7043_494_1271_476_11864: {
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
  View_I274_7043_177_6: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I274_7043_177_6: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I274_7043_177_7: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I274_7043_177_7: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I274_7043_177_110: {
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
  ImageBackground_I274_7043_177_110_175_1516: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I274_7043_177_110_175_1517: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I274_7043_177_110_175_1517: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_274_7044: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("254%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I274_7044_177_144: {
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
  View_I274_7044_177_145: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I274_7044_177_145: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I274_7044_177_151: {
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
  ImageBackground_I274_7044_177_151_177_147: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_274_7045: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("249%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I274_7045_144_70: {
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
  View_I274_7045_2511_17901: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("2%")
  },
  View_I274_7045_144_770: {
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
  ImageBackground_I274_7045_144_770_144_579: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I274_7045_2511_17630: {
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
  View_I274_7045_2511_20286: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("2%")
  },
  View_I274_7045_595_33: {
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
  ImageBackground_I274_7045_595_33_595_27: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I274_7045_2511_18182: {
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
  View_I274_7045_2511_20998: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("2%")
  },
  View_I274_7045_144_870: {
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
  ImageBackground_I274_7045_144_870_144_589: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I274_7045_2511_18882: {
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
  View_I274_7045_2511_20637: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("2%")
  },
  View_I274_7045_144_822: {
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
  ImageBackground_I274_7045_144_822_228_34: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I274_7045_2511_18560: {
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
  View_I274_7045_2462_14672: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%")
  },
  ImageBackground_I274_7045_2454_14657: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I274_7045_2859_15727: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I274_7045_2859_15727_2454_14658: {
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
  ImageBackground_I274_7045_2859_15727_2454_14658_144_575: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_274_7046: {
    width: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("256%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I274_7046_137_722: {
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
  View_274_7047: {
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
  View_I274_7047_137_740: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  View_I274_7047_137_741: {
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
  ImageBackground_I274_7047_137_742: {
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
  View_I274_7047_137_743: {
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
  ImageBackground_I274_7047_137_744: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  ImageBackground_I274_7047_137_748: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I274_7047_137_753: {
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
  View_I274_7047_137_754: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I274_7047_137_754: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
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
