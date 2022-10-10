import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
} from "react-native";

import { FONTS, COLORS, SIZES, icons } from "constants";
import { myBooksData } from "constants/dummyData";
import { Icon, AirbnbRating, Divider } from "react-native-elements";
import Resume from "components/low-components/Resume";
import BuyItem from "components/low-components/BuyItem";
import Options from "components/low-components/Options";
import MetaInfo from "components/middle-components/MetaInfo";
import AuthorBooks from "../middle-components/AuthorBooks";
import Copyright from "components/low-components/Copyright";
import UpdateInfo from "components/low-components/UpdateInfo";

const NewsItemContent = ({ navigation, route }) => {
  const [article, setArticle] = React.useState(null);

  React.useEffect(() => {
    let { article } = route.params;
    setArticle(article);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [article]);

  function renderArticleContentSection() {
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

        <Divider
          style={{ marginHorizontal: 15, marginTop: 15 }}
          color={COLORS.lightGray}
        />

        <Resume text={article.content} />
        <Button
          onPress={() =>
            navigation.navigate("LibraryItemContent", {
              book: article.link,
            })
          }
          title="Consulter"
        />

        <Divider style={{ margin: 15 }} color={COLORS.lightGray} />
      </View>
    );
  }

  if (article) {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ justifyContent: "center" }}
      >
        {/* article Cover Section */}
        <View style={{ flex: 1 }}>{renderArticleContentSection()}</View>
      </ScrollView>
    );
  } else {
    return <></>;
  }
};

export default NewsItemContent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    marginTop: StatusBar.currentHeight,
  },
});
