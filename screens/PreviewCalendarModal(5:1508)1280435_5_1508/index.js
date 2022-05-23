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
        style={styles.TouchableOpacity_5_1509}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("122_2581"))
        }
      >
        <View style={styles.View_I5_1509_202_2681} />
        <View style={styles.View_I5_1509_202_2682}>
          <Text style={styles.Text_I5_1509_202_2682}>continue</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_5_1510}>
        <View style={styles.View_I5_1510_228_176}>
          <Text style={styles.Text_I5_1510_228_176}>Select Your Plan</Text>
        </View>
        <View style={styles.View_I5_1510_228_177}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba30/b758/2150ad9262068f872f9328883a5e36c8"
            }}
            style={styles.ImageBackground_I5_1510_228_177_154_460}
          />
        </View>
      </View>
      <View style={styles.View_5_1511}>
        <View style={styles.View_I5_1511_197_2383}>
          <View style={styles.View_I5_1511_197_2383_185_1392} />
          <View style={styles.View_I5_1511_197_2383_185_1393}>
            <Text style={styles.Text_I5_1511_197_2383_185_1393}>
              Pay rent in full anytime between the 1st and 5th of the month
            </Text>
          </View>
          <View style={styles.View_I5_1511_197_2383_197_2184} />
          <View style={styles.View_I5_1511_197_2383_476_12335}>
            <View style={styles.View_I5_1511_197_2383_476_12335_476_11864} />
          </View>
          <View style={styles.View_I5_1511_197_2383_185_1395}>
            <Text style={styles.Text_I5_1511_197_2383_185_1395}>FREE</Text>
          </View>
          <View style={styles.View_I5_1511_197_2383_185_1396}>
            <Text style={styles.Text_I5_1511_197_2383_185_1396}>1 Pay</Text>
          </View>
          <View style={styles.View_I5_1511_197_2383_185_1397}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ae6/db19/bcdd7062f91964ea11aaf1b78fc52e5e"
              }}
              style={styles.ImageBackground_I5_1511_197_2383_185_1397_175_1516}
            />
            <View style={styles.View_I5_1511_197_2383_185_1397_175_1517}>
              <Text style={styles.Text_I5_1511_197_2383_185_1397_175_1517}>
                1
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I5_1511_197_2462}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("122_2824"))
          }
        >
          <View style={styles.View_I5_1511_197_2462_197_2403} />
          <View style={styles.View_I5_1511_197_2462_197_2461}>
            <Text style={styles.Text_I5_1511_197_2462_197_2461}>
              Pay rent in full anytime between the 6th and 15th of the month
            </Text>
          </View>
          <View style={styles.View_I5_1511_197_2462_476_13261}>
            <View style={styles.View_I5_1511_197_2462_476_13261_476_11864} />
          </View>
          <View style={styles.View_I5_1511_197_2462_197_2406}>
            <Text style={styles.Text_I5_1511_197_2462_197_2406}>
              1.5% of rent
            </Text>
          </View>
          <View style={styles.View_I5_1511_197_2462_197_2407}>
            <Text style={styles.Text_I5_1511_197_2462_197_2407}>
              1 Deferred
            </Text>
          </View>
          <View style={styles.View_I5_1511_197_2462_197_2408}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ae6/db19/bcdd7062f91964ea11aaf1b78fc52e5e"
              }}
              style={styles.ImageBackground_I5_1511_197_2462_197_2408_175_1519}
            />
            <View style={styles.View_I5_1511_197_2462_197_2408_175_1520}>
              <Text style={styles.Text_I5_1511_197_2462_197_2408_175_1520}>
                1
              </Text>
            </View>
            <View style={styles.View_I5_1511_197_2462_197_2408_175_1521}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/364e/a9e6/c970b33d68cbc7f8947d87f1ccc0352d"
                }}
                style={
                  styles.ImageBackground_I5_1511_197_2462_197_2408_175_1522
                }
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I5_1511_197_2585}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("122_2870"))
          }
        >
          <View style={styles.View_I5_1511_197_2585_197_2476} />
          <View style={styles.View_I5_1511_197_2585_197_2535}>
            <Text style={styles.Text_I5_1511_197_2585_197_2535}>
              Pay rent in two equal payments throughout the month
            </Text>
          </View>
          <View style={styles.View_I5_1511_197_2585_476_13947}>
            <View style={styles.View_I5_1511_197_2585_476_13947_476_11864} />
          </View>
          <View style={styles.View_I5_1511_197_2585_197_2479}>
            <Text style={styles.Text_I5_1511_197_2585_197_2479}>
              1.5% of rent
            </Text>
          </View>
          <View style={styles.View_I5_1511_197_2585_197_2480}>
            <Text style={styles.Text_I5_1511_197_2585_197_2480}>2 Pay</Text>
          </View>
          <View style={styles.View_I5_1511_197_2585_197_2481}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ae6/db19/bcdd7062f91964ea11aaf1b78fc52e5e"
              }}
              style={styles.ImageBackground_I5_1511_197_2585_197_2481_175_1525}
            />
            <View style={styles.View_I5_1511_197_2585_197_2481_175_1526}>
              <Text style={styles.Text_I5_1511_197_2585_197_2481_175_1526}>
                2
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I5_1511_197_2594}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("122_2915"))
          }
        >
          <View style={styles.View_I5_1511_197_2594_197_2538} />
          <View style={styles.View_I5_1511_197_2594_197_2584}>
            <Text style={styles.Text_I5_1511_197_2594_197_2584}>
              Pay rent in four equal payments throughout the month
            </Text>
          </View>
          <View style={styles.View_I5_1511_197_2594_476_15302}>
            <View style={styles.View_I5_1511_197_2594_476_15302_476_11864} />
          </View>
          <View style={styles.View_I5_1511_197_2594_197_2541}>
            <Text style={styles.Text_I5_1511_197_2594_197_2541}>
              1.5% of rent
            </Text>
          </View>
          <View style={styles.View_I5_1511_197_2594_197_2542}>
            <Text style={styles.Text_I5_1511_197_2594_197_2542}>4 Pay</Text>
          </View>
          <View style={styles.View_I5_1511_197_2594_197_2543}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ae6/db19/bcdd7062f91964ea11aaf1b78fc52e5e"
              }}
              style={styles.ImageBackground_I5_1511_197_2594_197_2543_175_1528}
            />
            <View style={styles.View_I5_1511_197_2594_197_2543_175_1529}>
              <Text style={styles.Text_I5_1511_197_2594_197_2543_175_1529}>
                4
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_I5_1511_197_2608}>
          <Text style={styles.Text_I5_1511_197_2608}>Plan</Text>
        </View>
        <View style={styles.View_I5_1511_197_2610}>
          <View style={styles.View_I5_1511_197_2610_197_2604}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f877/6c62/60da157cdb6069fb829254cb10c0bba7"
              }}
              style={styles.ImageBackground_I5_1511_197_2610_4645_38209}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/554e/4a61/291e38a212079d9850414bfc9913f8c5"
              }}
              style={styles.ImageBackground_I5_1511_197_2610_197_2607}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_5_1512}>
        <View style={styles.View_5_1513}>
          <Text style={styles.Text_5_1513}>Date</Text>
        </View>
        <View style={styles.View_5_1514}>
          <View style={styles.View_I5_1514_175_1614} />
          <View style={styles.View_I5_1514_476_17043}>
            <View style={styles.View_I5_1514_476_17043_476_11864} />
          </View>
          <View style={styles.View_I5_1514_175_1616}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4aa/8bac/94185a0c3762abd8ed6381c6587759c2"
              }}
              style={styles.ImageBackground_I5_1514_175_1616_175_1485}
            />
          </View>
          <View style={styles.View_I5_1514_175_1617}>
            <Text style={styles.Text_I5_1514_175_1617}>2nd of every month</Text>
          </View>
          <View style={styles.View_I5_1514_202_2504}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3ff/a596/7bf2c7c0340a148b9aaafe7ea457e03f"
              }}
              style={styles.ImageBackground_I5_1514_202_2504_177_507}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_5_1515}>
        <View style={styles.View_5_1516} />
        <View style={styles.View_5_1517}>
          <Text style={styles.Text_5_1517}>You pay</Text>
        </View>
        <View style={styles.View_5_1518}>
          <Text style={styles.Text_5_1518}>$1000</Text>
        </View>
        <View style={styles.View_5_1519}>
          <Text style={styles.Text_5_1519}>on the</Text>
        </View>
        <View style={styles.View_5_1520}>
          <Text style={styles.Text_5_1520}>2nd</Text>
        </View>
      </View>
      <View style={styles.View_5_1521}>
        <Text style={styles.Text_5_1521}>preview calendar</Text>
      </View>
      <View style={styles.View_5_1522}>
        <View style={styles.View_I5_1522_451_9977} />
      </View>
      <View style={styles.View_5_1523}>
        <View style={styles.View_5_1524} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed5d/a446/31b64e30287d65643ebe676f68eb279b"
          }}
          style={styles.ImageBackground_5_1525}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed5d/a446/31b64e30287d65643ebe676f68eb279b"
          }}
          style={styles.ImageBackground_5_1526}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed5d/a446/31b64e30287d65643ebe676f68eb279b"
          }}
          style={styles.ImageBackground_5_1527}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed5d/a446/31b64e30287d65643ebe676f68eb279b"
          }}
          style={styles.ImageBackground_5_1528}
        />
        <View style={styles.View_5_1529}>
          <View style={styles.View_5_1530}>
            <View style={styles.View_5_1531}>
              <Text style={styles.Text_5_1531}>2</Text>
            </View>
            <View style={styles.View_5_1532}>
              <Text style={styles.Text_5_1532}>9</Text>
            </View>
            <View style={styles.View_5_1533}>
              <Text style={styles.Text_5_1533}>16</Text>
            </View>
            <View style={styles.View_5_1534}>
              <Text style={styles.Text_5_1534}>23</Text>
            </View>
            <View style={styles.View_5_1535}>
              <Text style={styles.Text_5_1535}>30</Text>
            </View>
            <View style={styles.View_5_1536}>
              <View style={styles.View_5_1537}>
                <Text style={styles.Text_5_1537}>3</Text>
              </View>
              <View style={styles.View_5_1538}>
                <Text style={styles.Text_5_1538}>10</Text>
              </View>
              <View style={styles.View_5_1539}>
                <Text style={styles.Text_5_1539}>17</Text>
              </View>
              <View style={styles.View_5_1540}>
                <Text style={styles.Text_5_1540}>24</Text>
              </View>
              <View style={styles.View_5_1541}>
                <Text style={styles.Text_5_1541}>31</Text>
              </View>
            </View>
            <View style={styles.View_5_1542}>
              <View style={styles.View_5_1543}>
                <Text style={styles.Text_5_1543}>4</Text>
              </View>
              <View style={styles.View_5_1544}>
                <Text style={styles.Text_5_1544}>11</Text>
              </View>
              <View style={styles.View_5_1545}>
                <Text style={styles.Text_5_1545}>18</Text>
              </View>
              <View style={styles.View_5_1546}>
                <Text style={styles.Text_5_1546}>25</Text>
              </View>
            </View>
            <View style={styles.View_5_1547}>
              <View style={styles.View_5_1548}>
                <Text style={styles.Text_5_1548}>5</Text>
              </View>
              <View style={styles.View_5_1549}>
                <Text style={styles.Text_5_1549}>12</Text>
              </View>
              <View style={styles.View_5_1550}>
                <Text style={styles.Text_5_1550}>19</Text>
              </View>
              <View style={styles.View_5_1551}>
                <Text style={styles.Text_5_1551}>26</Text>
              </View>
            </View>
            <View style={styles.View_5_1552}>
              <View style={styles.View_5_1553}>
                <Text style={styles.Text_5_1553}>6</Text>
              </View>
              <View style={styles.View_5_1554}>
                <Text style={styles.Text_5_1554}>13</Text>
              </View>
              <View style={styles.View_5_1555}>
                <Text style={styles.Text_5_1555}>20</Text>
              </View>
              <View style={styles.View_5_1556}>
                <Text style={styles.Text_5_1556}>27</Text>
              </View>
            </View>
            <View style={styles.View_5_1557}>
              <Text style={styles.Text_5_1557}>7</Text>
            </View>
            <View style={styles.View_5_1558}>
              <Text style={styles.Text_5_1558}>7</Text>
            </View>
            <View style={styles.View_5_1559}>
              <Text style={styles.Text_5_1559}>14</Text>
            </View>
            <View style={styles.View_5_1560}>
              <Text style={styles.Text_5_1560}>21</Text>
            </View>
            <View style={styles.View_5_1561}>
              <Text style={styles.Text_5_1561}>28</Text>
            </View>
            <View style={styles.View_5_1562}>
              <View style={styles.View_5_1563}>
                <Text style={styles.Text_5_1563}>1</Text>
              </View>
              <View style={styles.View_5_1564}>
                <Text style={styles.Text_5_1564}>8</Text>
              </View>
              <View style={styles.View_5_1565}>
                <Text style={styles.Text_5_1565}>15</Text>
              </View>
              <View style={styles.View_5_1566}>
                <Text style={styles.Text_5_1566}>22</Text>
              </View>
              <View style={styles.View_5_1567}>
                <Text style={styles.Text_5_1567}>29</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_5_1568}>
          <View style={styles.View_5_1569}>
            <View style={styles.View_5_1570}>
              <Text style={styles.Text_5_1570}>2</Text>
            </View>
            <View style={styles.View_5_1571}>
              <Text style={styles.Text_5_1571}>9</Text>
            </View>
            <View style={styles.View_5_1572}>
              <Text style={styles.Text_5_1572}>16</Text>
            </View>
            <View style={styles.View_5_1573}>
              <Text style={styles.Text_5_1573}>23</Text>
            </View>
            <View style={styles.View_5_1574}>
              <Text style={styles.Text_5_1574}>30</Text>
            </View>
            <View style={styles.View_5_1575}>
              <View style={styles.View_5_1576}>
                <Text style={styles.Text_5_1576}>3</Text>
              </View>
              <View style={styles.View_5_1577}>
                <Text style={styles.Text_5_1577}>10</Text>
              </View>
              <View style={styles.View_5_1578}>
                <Text style={styles.Text_5_1578}>17</Text>
              </View>
              <View style={styles.View_5_1579}>
                <Text style={styles.Text_5_1579}>24</Text>
              </View>
              <View style={styles.View_5_1580}>
                <Text style={styles.Text_5_1580}>31</Text>
              </View>
            </View>
            <View style={styles.View_5_1581}>
              <View style={styles.View_5_1582}>
                <Text style={styles.Text_5_1582}>4</Text>
              </View>
              <View style={styles.View_5_1583}>
                <Text style={styles.Text_5_1583}>11</Text>
              </View>
              <View style={styles.View_5_1584}>
                <Text style={styles.Text_5_1584}>18</Text>
              </View>
              <View style={styles.View_5_1585}>
                <Text style={styles.Text_5_1585}>25</Text>
              </View>
            </View>
            <View style={styles.View_5_1586}>
              <View style={styles.View_5_1587}>
                <Text style={styles.Text_5_1587}>5</Text>
              </View>
              <View style={styles.View_5_1588}>
                <Text style={styles.Text_5_1588}>12</Text>
              </View>
              <View style={styles.View_5_1589}>
                <Text style={styles.Text_5_1589}>19</Text>
              </View>
              <View style={styles.View_5_1590}>
                <Text style={styles.Text_5_1590}>26</Text>
              </View>
            </View>
            <View style={styles.View_5_1591}>
              <View style={styles.View_5_1592}>
                <Text style={styles.Text_5_1592}>6</Text>
              </View>
              <View style={styles.View_5_1593}>
                <Text style={styles.Text_5_1593}>13</Text>
              </View>
              <View style={styles.View_5_1594}>
                <Text style={styles.Text_5_1594}>20</Text>
              </View>
              <View style={styles.View_5_1595}>
                <Text style={styles.Text_5_1595}>27</Text>
              </View>
            </View>
            <View style={styles.View_5_1596}>
              <Text style={styles.Text_5_1596}>14</Text>
            </View>
            <View style={styles.View_5_1597}>
              <Text style={styles.Text_5_1597}>21</Text>
            </View>
            <View style={styles.View_5_1598}>
              <Text style={styles.Text_5_1598}>28</Text>
            </View>
            <View style={styles.View_5_1599}>
              <View style={styles.View_5_1600}>
                <Text style={styles.Text_5_1600}>1</Text>
              </View>
              <View style={styles.View_5_1601}>
                <Text style={styles.Text_5_1601}>8</Text>
              </View>
              <View style={styles.View_5_1602}>
                <Text style={styles.Text_5_1602}>15</Text>
              </View>
              <View style={styles.View_5_1603}>
                <Text style={styles.Text_5_1603}>22</Text>
              </View>
              <View style={styles.View_5_1604}>
                <Text style={styles.Text_5_1604}>29</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_5_1605}>
          <View style={styles.View_5_1606}>
            <View style={styles.View_5_1607}>
              <Text style={styles.Text_5_1607}>2</Text>
            </View>
            <View style={styles.View_5_1608}>
              <Text style={styles.Text_5_1608}>9</Text>
            </View>
            <View style={styles.View_5_1609}>
              <Text style={styles.Text_5_1609}>16</Text>
            </View>
            <View style={styles.View_5_1610}>
              <Text style={styles.Text_5_1610}>23</Text>
            </View>
            <View style={styles.View_5_1611}>
              <Text style={styles.Text_5_1611}>30</Text>
            </View>
            <View style={styles.View_5_1612}>
              <View style={styles.View_5_1613}>
                <Text style={styles.Text_5_1613}>3</Text>
              </View>
              <View style={styles.View_5_1614}>
                <Text style={styles.Text_5_1614}>10</Text>
              </View>
              <View style={styles.View_5_1615}>
                <Text style={styles.Text_5_1615}>17</Text>
              </View>
              <View style={styles.View_5_1616}>
                <Text style={styles.Text_5_1616}>24</Text>
              </View>
              <View style={styles.View_5_1617}>
                <Text style={styles.Text_5_1617}>31</Text>
              </View>
            </View>
            <View style={styles.View_5_1618}>
              <View style={styles.View_5_1619}>
                <Text style={styles.Text_5_1619}>4</Text>
              </View>
              <View style={styles.View_5_1620}>
                <Text style={styles.Text_5_1620}>11</Text>
              </View>
              <View style={styles.View_5_1621}>
                <Text style={styles.Text_5_1621}>18</Text>
              </View>
              <View style={styles.View_5_1622}>
                <Text style={styles.Text_5_1622}>25</Text>
              </View>
            </View>
            <View style={styles.View_5_1623}>
              <View style={styles.View_5_1624}>
                <Text style={styles.Text_5_1624}>5</Text>
              </View>
              <View style={styles.View_5_1625}>
                <Text style={styles.Text_5_1625}>12</Text>
              </View>
              <View style={styles.View_5_1626}>
                <Text style={styles.Text_5_1626}>19</Text>
              </View>
              <View style={styles.View_5_1627}>
                <Text style={styles.Text_5_1627}>26</Text>
              </View>
            </View>
            <View style={styles.View_5_1628}>
              <View style={styles.View_5_1629}>
                <Text style={styles.Text_5_1629}>6</Text>
              </View>
              <View style={styles.View_5_1630}>
                <Text style={styles.Text_5_1630}>13</Text>
              </View>
              <View style={styles.View_5_1631}>
                <Text style={styles.Text_5_1631}>20</Text>
              </View>
              <View style={styles.View_5_1632}>
                <Text style={styles.Text_5_1632}>27</Text>
              </View>
            </View>
            <View style={styles.View_5_1633}>
              <Text style={styles.Text_5_1633}>7</Text>
            </View>
            <View style={styles.View_5_1634}>
              <Text style={styles.Text_5_1634}>14</Text>
            </View>
            <View style={styles.View_5_1635}>
              <Text style={styles.Text_5_1635}>21</Text>
            </View>
            <View style={styles.View_5_1636}>
              <Text style={styles.Text_5_1636}>28</Text>
            </View>
            <View style={styles.View_5_1637}>
              <View style={styles.View_5_1638}>
                <Text style={styles.Text_5_1638}>1</Text>
              </View>
              <View style={styles.View_5_1639}>
                <Text style={styles.Text_5_1639}>8</Text>
              </View>
              <View style={styles.View_5_1640}>
                <Text style={styles.Text_5_1640}>15</Text>
              </View>
              <View style={styles.View_5_1641}>
                <Text style={styles.Text_5_1641}>22</Text>
              </View>
              <View style={styles.View_5_1642}>
                <Text style={styles.Text_5_1642}>29</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_5_1643}>
          <Text style={styles.Text_5_1643}>May 2021</Text>
        </View>
        <View style={styles.View_5_1644}>
          <Text style={styles.Text_5_1644}>June 2021</Text>
        </View>
        <View style={styles.View_5_1645}>
          <Text style={styles.Text_5_1645}>July 2021</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fe7/1f33/ee1c14912593d0136c7cfbf2ccba72b4"
          }}
          style={styles.ImageBackground_5_1646}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fe7/1f33/ee1c14912593d0136c7cfbf2ccba72b4"
          }}
          style={styles.ImageBackground_5_1647}
        />
        <View style={styles.View_5_1648}>
          <View style={styles.View_5_1649}>
            <Text style={styles.Text_5_1649}>S</Text>
          </View>
          <View style={styles.View_5_1650}>
            <Text style={styles.Text_5_1650}>M</Text>
          </View>
          <View style={styles.View_5_1651}>
            <Text style={styles.Text_5_1651}>T</Text>
          </View>
          <View style={styles.View_5_1652}>
            <Text style={styles.Text_5_1652}>W</Text>
          </View>
          <View style={styles.View_5_1653}>
            <Text style={styles.Text_5_1653}>S</Text>
          </View>
          <View style={styles.View_5_1654}>
            <Text style={styles.Text_5_1654}>F</Text>
          </View>
          <View style={styles.View_5_1655}>
            <Text style={styles.Text_5_1655}>T</Text>
          </View>
        </View>
        <View style={styles.View_5_1656}>
          <View style={styles.View_5_1657}>
            <View style={styles.View_5_1658}>
              <Text style={styles.Text_5_1658}>Payment Calendar</Text>
            </View>
          </View>
          <View style={styles.View_5_1660}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1f1/3e8a/7d0b8fda0ccd647c16a3d5a4d7c09903"
              }}
              style={styles.ImageBackground_I5_1660_260_1418}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66a7/be57/6f2bf1eb25833ca207b1c89668894884"
          }}
          style={styles.ImageBackground_108_5430}
        />
      </View>
      <View style={styles.View_5_1661}>
        <View style={styles.View_I5_1661_137_722} />
      </View>
      <View style={styles.View_5_1662}>
        <View style={styles.View_I5_1662_137_706}>
          <View style={styles.View_I5_1662_137_707} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/525b/1182/3379c8a6088a242fe4f03785d2d970eb"
            }}
            style={styles.ImageBackground_I5_1662_137_708}
          />
          <View style={styles.View_I5_1662_137_709} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b81/843f/2074ecb78b933ae2dfe895e1affaec7a"
          }}
          style={styles.ImageBackground_I5_1662_137_710}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c15/8f2b/0490361ab74ccb4989d0ed026428146e"
          }}
          style={styles.ImageBackground_I5_1662_137_714}
        />
        <View style={styles.View_I5_1662_137_719}>
          <View style={styles.View_I5_1662_137_720}>
            <Text style={styles.Text_I5_1662_137_720}>9:41</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(249, 250, 254, 1)" },
  View_2: { height: hp("111%") },
  TouchableOpacity_5_1509: {
    width: wp("91%"),
    height: hp("7%"),
    top: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1509_202_2681: {
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
  View_I5_1509_202_2682: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I5_1509_202_2682: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_5_1510: {
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
  View_I5_1510_228_176: {
    flexGrow: 1,
    width: wp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I5_1510_228_176: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1510_228_177: {
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
  ImageBackground_I5_1510_228_177_154_460: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_5_1511: {
    width: wp("91%"),
    height: hp("24%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1511_197_2383: {
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
  View_I5_1511_197_2383_185_1392: {
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
  View_I5_1511_197_2383_185_1393: {
    flexGrow: 1,
    width: wp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I5_1511_197_2383_185_1393: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1511_197_2383_197_2184: {
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
  View_I5_1511_197_2383_476_12335: {
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
  View_I5_1511_197_2383_476_12335_476_11864: {
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
  View_I5_1511_197_2383_185_1395: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I5_1511_197_2383_185_1395: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1511_197_2383_185_1396: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I5_1511_197_2383_185_1396: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1511_197_2383_185_1397: {
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
  ImageBackground_I5_1511_197_2383_185_1397_175_1516: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I5_1511_197_2383_185_1397_175_1517: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I5_1511_197_2383_185_1397_175_1517: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I5_1511_197_2462: {
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
  View_I5_1511_197_2462_197_2403: {
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
  View_I5_1511_197_2462_197_2461: {
    flexGrow: 1,
    width: wp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I5_1511_197_2462_197_2461: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1511_197_2462_476_13261: {
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
  View_I5_1511_197_2462_476_13261_476_11864: {
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
  View_I5_1511_197_2462_197_2406: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I5_1511_197_2462_197_2406: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1511_197_2462_197_2407: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I5_1511_197_2462_197_2407: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1511_197_2462_197_2408: {
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
  ImageBackground_I5_1511_197_2462_197_2408_175_1519: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I5_1511_197_2462_197_2408_175_1520: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I5_1511_197_2462_197_2408_175_1520: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1511_197_2462_197_2408_175_1521: {
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
  ImageBackground_I5_1511_197_2462_197_2408_175_1522: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_I5_1511_197_2585: {
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
  View_I5_1511_197_2585_197_2476: {
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
  View_I5_1511_197_2585_197_2535: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I5_1511_197_2585_197_2535: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1511_197_2585_476_13947: {
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
  View_I5_1511_197_2585_476_13947_476_11864: {
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
  View_I5_1511_197_2585_197_2479: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I5_1511_197_2585_197_2479: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1511_197_2585_197_2480: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I5_1511_197_2585_197_2480: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1511_197_2585_197_2481: {
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
  ImageBackground_I5_1511_197_2585_197_2481_175_1525: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I5_1511_197_2585_197_2481_175_1526: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I5_1511_197_2585_197_2481_175_1526: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I5_1511_197_2594: {
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
  View_I5_1511_197_2594_197_2538: {
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
  View_I5_1511_197_2594_197_2584: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I5_1511_197_2594_197_2584: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1511_197_2594_476_15302: {
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
  View_I5_1511_197_2594_476_15302_476_11864: {
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
  View_I5_1511_197_2594_197_2541: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I5_1511_197_2594_197_2541: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1511_197_2594_197_2542: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I5_1511_197_2594_197_2542: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1511_197_2594_197_2543: {
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
  ImageBackground_I5_1511_197_2594_197_2543_175_1528: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I5_1511_197_2594_197_2543_175_1529: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I5_1511_197_2594_197_2543_175_1529: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1511_197_2608: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_1511_197_2608: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1511_197_2610: {
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
  View_I5_1511_197_2610_197_2604: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I5_1511_197_2610_4645_38209: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I5_1511_197_2610_197_2607: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1512: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("66%")
  },
  View_5_1513: {
    width: wp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_5_1513: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1514: {
    width: wp("91%"),
    height: hp("9%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I5_1514_175_1614: {
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
  View_I5_1514_476_17043: {
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
  View_I5_1514_476_17043_476_11864: {
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
  View_I5_1514_175_1616: {
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
  ImageBackground_I5_1514_175_1616_175_1485: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I5_1514_175_1617: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I5_1514_175_1617: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1514_202_2504: {
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
  ImageBackground_I5_1514_202_2504_177_507: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_5_1515: {
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
  View_5_1516: {
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
  View_5_1517: {
    width: wp("15%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_5_1517: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1518: {
    width: wp("30%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_5_1518: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1519: {
    width: wp("12%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    justifyContent: "flex-start"
  },
  Text_5_1519: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1520: {
    width: wp("18%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    justifyContent: "flex-start"
  },
  Text_5_1520: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1521: {
    width: wp("36%"),
    top: hp("92%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    justifyContent: "center"
  },
  Text_5_1521: {
    color: "rgba(106, 103, 206, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_5_1522: {
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
  View_I5_1522_451_9977: {
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
  View_5_1523: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("105%"),
    minHeight: hp("105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_5_1524: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("105%"),
    minHeight: hp("105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_5_1525: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("28%")
  },
  ImageBackground_5_1526: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("34%")
  },
  ImageBackground_5_1527: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("63%")
  },
  ImageBackground_5_1528: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("69%")
  },
  View_5_1529: {
    width: wp("87%"),
    height: hp("44%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_5_1530: {
    width: wp("87%"),
    height: hp("44%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1531: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1531: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1532: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_5_1532: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1533: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_5_1533: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1534: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_5_1534: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1535: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_5_1535: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1536: {
    width: wp("5%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1537: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1537: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1538: {
    width: wp("4%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1538: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1539: {
    width: wp("4%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1539: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1540: {
    width: wp("5%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1540: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1541: {
    width: wp("4%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1541: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1542: {
    width: wp("5%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1543: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1543: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1544: {
    width: wp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1544: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1545: {
    width: wp("4%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1545: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1546: {
    width: wp("5%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1546: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1547: {
    width: wp("5%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1548: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1548: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1549: {
    width: wp("4%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1549: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1550: {
    width: wp("4%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1550: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1551: {
    width: wp("5%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1551: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1552: {
    width: wp("5%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1553: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1553: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1554: {
    width: wp("4%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1554: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1555: {
    width: wp("5%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1555: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1556: {
    width: wp("5%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1556: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1557: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_5_1557: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1558: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("42%"),
    justifyContent: "flex-start"
  },
  Text_5_1558: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1559: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_5_1559: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1560: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_5_1560: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1561: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_5_1561: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1562: {
    width: wp("5%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1563: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_5_1563: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1564: {
    width: wp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1564: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1565: {
    width: wp("4%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1565: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1566: {
    width: wp("5%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1566: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1567: {
    width: wp("5%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1567: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1568: {
    width: wp("87%"),
    height: hp("27%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_5_1569: {
    width: wp("87%"),
    height: hp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1570: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1570: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1571: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_5_1571: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1572: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_5_1572: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1573: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_5_1573: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1574: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_5_1574: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1575: {
    width: wp("5%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1576: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1576: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1577: {
    width: wp("4%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1577: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1578: {
    width: wp("4%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1578: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1579: {
    width: wp("5%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1579: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1580: {
    width: wp("4%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1580: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1581: {
    width: wp("5%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1582: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1582: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1583: {
    width: wp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1583: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1584: {
    width: wp("4%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1584: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1585: {
    width: wp("5%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1585: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1586: {
    width: wp("5%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1587: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1587: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1588: {
    width: wp("4%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1588: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1589: {
    width: wp("4%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1589: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1590: {
    width: wp("5%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1590: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1591: {
    width: wp("5%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1592: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1592: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1593: {
    width: wp("4%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1593: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1594: {
    width: wp("5%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1594: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1595: {
    width: wp("5%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1595: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1596: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_5_1596: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1597: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_5_1597: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1598: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_5_1598: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1599: {
    width: wp("5%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1600: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_5_1600: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1601: {
    width: wp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1601: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1602: {
    width: wp("4%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1602: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1603: {
    width: wp("5%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1603: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1604: {
    width: wp("5%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1604: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1605: {
    width: wp("87%"),
    height: hp("27%"),
    top: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_5_1606: {
    width: wp("87%"),
    height: hp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_1607: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1607: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1608: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_5_1608: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1609: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_5_1609: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1610: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_5_1610: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1611: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_5_1611: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1612: {
    width: wp("5%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1613: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1613: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1614: {
    width: wp("4%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1614: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1615: {
    width: wp("4%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1615: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1616: {
    width: wp("5%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1616: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1617: {
    width: wp("4%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1617: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1618: {
    width: wp("5%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1619: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1619: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1620: {
    width: wp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1620: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1621: {
    width: wp("4%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1621: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1622: {
    width: wp("5%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1622: {
    color: "rgba(160, 163, 189, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1623: {
    width: wp("5%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1624: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1624: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1625: {
    width: wp("4%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1625: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1626: {
    width: wp("4%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1626: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1627: {
    width: wp("5%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1627: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1628: {
    width: wp("5%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1629: {
    width: wp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1629: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1630: {
    width: wp("4%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1630: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1631: {
    width: wp("5%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1631: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1632: {
    width: wp("5%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1632: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1633: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_5_1633: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1634: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_5_1634: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1635: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_5_1635: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1636: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_5_1636: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1637: {
    width: wp("5%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1638: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_5_1638: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1639: {
    width: wp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1639: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1640: {
    width: wp("4%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_5_1640: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1641: {
    width: wp("5%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1641: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1642: {
    width: wp("5%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1642: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1643: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_5_1643: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1644: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("52%"),
    justifyContent: "flex-start"
  },
  Text_5_1644: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1645: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("88%"),
    justifyContent: "flex-start"
  },
  Text_5_1645: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_1646: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("104%")
  },
  ImageBackground_5_1647: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("110%")
  },
  View_5_1648: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("11%")
  },
  View_5_1649: {
    width: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1649: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1650: {
    width: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1650: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1651: {
    width: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1651: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1652: {
    width: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1652: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1653: {
    width: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1653: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1654: {
    width: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1654: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1655: {
    width: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1655: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_1656: {
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
  View_5_1657: {
    width: wp("52%"),
    minWidth: wp("52%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_1658: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_5_1658: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 19,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1,
    textTransform: "none"
  },
  View_5_1660: {
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
  ImageBackground_I5_1660_260_1418: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_108_5430: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  View_5_1661: {
    width: wp("100%"),
    height: hp("5%"),
    top: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1661_137_722: {
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
  View_5_1662: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1662_137_706: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  View_I5_1662_137_707: {
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
  ImageBackground_I5_1662_137_708: {
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
  View_I5_1662_137_709: {
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
  ImageBackground_I5_1662_137_710: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  ImageBackground_I5_1662_137_714: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I5_1662_137_719: {
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
  View_I5_1662_137_720: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I5_1662_137_720: {
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
