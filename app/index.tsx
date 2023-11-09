import { View } from "react-native";
import { useState } from "react";
import { Redirect } from "expo-router";

export default function RootPage() {
  const [loggedIn, setLoggedIn] = useState<boolean | null>(true);

  if (loggedIn) {
    return <Redirect href={"/home"} />;
  }

  return <View></View>;
}
