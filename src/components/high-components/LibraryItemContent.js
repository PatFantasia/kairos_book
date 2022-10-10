import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import { FONTS, COLORS, SIZES, icons } from "constants";
import { myBooksData } from "constants/dummyData";
import { Icon, AirbnbRating, Divider } from "react-native-elements";
import Resume from "../low-components/Resume";
import BuyItem from "../low-components/BuyItem";
import Options from "../low-components/Options";
import MetaInfo from "../middle-components/MetaInfo";
import AuthorBooks from "../middle-components/AuthorBooks";
import Copyright from "../low-components/Copyright";
import UpdateInfo from "../low-components/UpdateInfo";

const LibraryItemContent = ({ route, navigation }) => {
  const [book, setBook] = React.useState(null);

  React.useEffect(() => {
    let { book } = route.params;
    setBook(book);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [book]);

  function renderBookInfoSection() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: SIZES.radius,
            height: 40,
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity
            style={{ marginRight: 10, justifyContent: "flex-end" }}
            onPress={() => navigation.goBack()}
          >
            <Icon
              source={icons.more_icon}
              name="closecircleo"
              type="antdesign"
              color={COLORS.lightGray}
            />
          </TouchableOpacity>
        </View>

        {/* Book Cover */}
        <View
          style={{
            marginTop: 20,
            alignItems: "center",
            bottom: 15,
            height: 380,
          }}
        >
          <Image
            source={book.bookCover}
            resizeMode="contain"
            style={{
              flex: 1,
              width: 280,
              height: "auto",
            }}
          />
        </View>

        {/* Book Name and Author */}
        <View
          style={{
            flex: 1.8,
            alignItems: "center",
            fontWeight: "bold",
            justifyContent: "center",
          }}
        >
          <Text style={{ ...FONTS.h2, color: COLORS.white }}>
            {book.bookName}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ ...FONTS.body4, color: COLORS.white }}>
              {book.author}
            </Text>
            <Icon
              name="keyboard-arrow-right"
              size={25}
              color={COLORS.lightGray}
              style={{ marginLeft: -2 }}
            />
          </View>
        </View>

        {/* Book Info */}

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <AirbnbRating
            isDisabled={true}
            selectedColor={COLORS.white}
            showRating={false}
            size={15}
            starContainerStyle={{
              marginLeft: 25,
            }}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginRight: 15,
              width: 100,
            }}
          >
            <Icon
              name="gift"
              type="feather"
              size={25}
              color={COLORS.white}
              style={{ marginLeft: -2 }}
            />

            <Icon
              name="dots-three-horizontal"
              type="entypo"
              size={25}
              color={COLORS.white}
              style={{ marginLeft: -2 }}
            />
          </View>
        </View>
        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.lightGray,
            marginLeft: 25,
            fontSize: SIZES.h4,
          }}
        >
          {book.rating} notes
        </Text>
        <BuyItem price={book.price} />
        <Options />

        <Divider
          style={{ marginHorizontal: 15, marginTop: 15 }}
          color={COLORS.lightGray}
        />

        <Resume text={book.description} />

        <Divider style={{ margin: 15 }} color={COLORS.lightGray} />
        <MetaInfo book={book} />
        <Divider style={{ margin: 15 }} color={COLORS.lightGray} />
      </View>
    );
  }

  if (book) {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ justifyContent: "center" }}
      >
        {/* Book Cover Section */}
        <View style={{ flex: 1 }}>{renderBookInfoSection()}</View>
        <AuthorBooks
          data={myBooksData}
          bookInfo={book}
          title={"Plus de livres de : "}
        />
        <AuthorBooks
          data={myBooksData}
          bookInfo={book}
          title={"Plus de livres  audio  "}
          audiobook
        />
        <AuthorBooks
          data={myBooksData}
          title={"D'autres clients  "}
          specialCatagory={"ont aussi acheté"}
          bookInfo={book}
        />
        <AuthorBooks
          data={myBooksData}
          title={"Meilleures ventes livres :"}
          specialCatagory={book.genre[0] + " et " + book.genre[1]}
          bookInfo={book}
          customStyle={{ marginLeft: -20 }}
        />
        <UpdateInfo />
        <Copyright />
      </ScrollView>
    );
  } else {
    return <></>;
  }
};

export default LibraryItemContent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    marginTop: StatusBar.currentHeight,
  },
});
