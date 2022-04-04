import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "constants";

const AccountSetting = () => {
  return (
    <>
      <MaterialCommunityIcons
        name="account-circle"
        size={30}
        color={COLORS.white}
        style={{ marginHorizontal: 10, marginBottom: 10 }}
      />
    </>
  );
};

export default AccountSetting;
