import { TouchableOpacity, Text } from "react-native";
import { fontFamilies } from "../styles/base";

interface CategoryTagProps {
  category: string;
}

export default function CategoryTag({ category }: CategoryTagProps) {
  return (
    <TouchableOpacity className="m-2 rounded-full border border-red px-3 py-2">
      <Text
        className="font-medium text-red"
        style={{ fontFamily: fontFamilies.medium }}
      >
        {category.replace(category[0], category[0].toUpperCase())}
      </Text>
    </TouchableOpacity>
  );
}
