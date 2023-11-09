import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { fontFamilies } from "../styles/base";
import { Path, Svg } from "react-native-svg";

interface SearchBarProps {
  placeholder: string;
  href: string;
}

export default function SearchBar({ placeholder, href }: SearchBarProps) {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push(href);
      }}
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,

        elevation: 2,
      }}
      className="w-full px-5 py-4 flex flex-row items-center justify-between bg-white rounded-full"
    >
      <Text
        style={{ fontFamily: fontFamilies.bold }}
        className="text-[#C4C5C4] text-sm"
      >
        {placeholder}
      </Text>
      <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <Path
          d="M19.7559 18.5776L14.7817 13.6034C16.1372 11.9456 16.8037 9.83014 16.6433 7.6947C16.4828 5.55926 15.5077 3.56717 13.9197 2.1305C12.3317 0.693821 10.2522 -0.0775273 8.11143 -0.0240008C5.97064 0.0295257 3.93232 0.903832 2.41807 2.41807C0.903832 3.93232 0.0295257 5.97064 -0.0240008 8.11143C-0.0775273 10.2522 0.693821 12.3317 2.1305 13.9197C3.56717 15.5077 5.55926 16.4828 7.6947 16.6433C9.83014 16.8037 11.9456 16.1372 13.6034 14.7817L18.5776 19.7559C18.7347 19.9077 18.9452 19.9917 19.1637 19.9898C19.3822 19.9879 19.5912 19.9003 19.7457 19.7457C19.9003 19.5912 19.9879 19.3822 19.9898 19.1637C19.9917 18.9452 19.9077 18.7347 19.7559 18.5776ZM8.3334 15.0001C7.01485 15.0001 5.72592 14.6091 4.62959 13.8765C3.53327 13.144 2.67878 12.1028 2.1742 10.8846C1.66961 9.66644 1.53759 8.326 1.79483 7.03279C2.05206 5.73959 2.687 4.5517 3.61935 3.61935C4.5517 2.687 5.73959 2.05206 7.03279 1.79483C8.326 1.53759 9.66644 1.66961 10.8846 2.1742C12.1028 2.67878 13.144 3.53327 13.8765 4.62959C14.6091 5.72592 15.0001 7.01485 15.0001 8.3334C14.9981 10.1009 14.2951 11.7954 13.0452 13.0452C11.7954 14.2951 10.1009 14.9981 8.3334 15.0001Z"
          fill="#0C1A30"
        />
      </Svg>
    </TouchableOpacity>
  );
}
