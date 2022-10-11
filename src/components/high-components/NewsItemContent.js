import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";

import { COLORS, SIZES, icons } from "constants";

import { Icon, Divider } from "@rneui/themed";
import Resume from "components/low-components/Resume";

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
