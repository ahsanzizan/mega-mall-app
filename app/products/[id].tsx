import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import type { Product } from "../../types/product.type";
import { getProductById } from "../../lib/queries/product.queries";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Path, Svg } from "react-native-svg";
import { fontFamilies } from "../../styles/base";
import { calcDiscountedPrice } from "../../utils/calculateDiscount";

export default function ViewProduct() {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const init = async () => {
      try {
        const product = await getProductById(Number(id));
        setProduct(product);
      } catch (error) {
        return false;
      }
      return true;
    };

    init();
  }, []);

  return (
    <ScrollView className="px-6 py-16">
      <View className="flex flex-row justify-between items-center mb-10">
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
        >
          <Svg width="8" height="15" viewBox="0 0 8 15" fill="none">
            <Path
              d="M2.60003 8.20692C2.41256 8.01939 2.30724 7.76508 2.30724 7.49992C2.30724 7.23475 2.41256 6.98045 2.60003 6.79292L7.18503 2.20692C7.36719 2.01832 7.46798 1.76571 7.4657 1.50352C7.46342 1.24132 7.35825 0.990509 7.17285 0.805101C6.98744 0.619692 6.73663 0.514523 6.47443 0.512245C6.21223 0.509966 5.95963 0.610761 5.77103 0.792919L1.18903 5.37892C0.626616 5.9415 0.310669 6.70443 0.310669 7.49992C0.310669 8.29541 0.626616 9.05834 1.18903 9.62092L5.77503 14.2069C5.96363 14.3891 6.21623 14.4899 6.47843 14.4876C6.74063 14.4853 6.99144 14.3801 7.17685 14.1947C7.36226 14.0093 7.46742 13.7585 7.4697 13.4963C7.47198 13.2341 7.37119 12.9815 7.18903 12.7929L2.60003 8.20692Z"
              fill="#161616"
            />
          </Svg>
        </TouchableOpacity>
        <Text className="text-lg" style={{ fontFamily: fontFamilies.medium }}>
          Product Detail
        </Text>
        <View className="flex flex-row gap-5">
          <TouchableOpacity>
            <Svg width="20" height="18" viewBox="0 0 20 18" fill="none">
              <Path
                d="M0 16.3213V10.488C0.00220571 8.49953 0.79309 6.59316 2.19914 5.18711C3.60518 3.78107 5.51155 2.99018 7.5 2.98798H11.525V1.66631C11.5251 1.33673 11.6229 1.01456 11.806 0.740547C11.9891 0.466531 12.2494 0.252965 12.5539 0.126848C12.8584 0.000731436 13.1935 -0.0322734 13.5167 0.0320059C13.84 0.0962851 14.1369 0.254962 14.37 0.487978L19.27 5.38714C19.7387 5.85596 20.002 6.49173 20.002 7.15464C20.002 7.81756 19.7387 8.45333 19.27 8.92214L14.37 13.8213C14.1369 14.0543 13.84 14.213 13.5167 14.2773C13.1935 14.3416 12.8584 14.3086 12.5539 14.1824C12.2494 14.0563 11.9891 13.8428 11.806 13.5687C11.6229 13.2947 11.5251 12.9726 11.525 12.643V11.3213H6.66667C5.34099 11.3226 4.06999 11.8498 3.13259 12.7872C2.1952 13.7246 1.66799 14.9956 1.66667 16.3213C1.66667 16.5423 1.57887 16.7543 1.42259 16.9106C1.26631 17.0668 1.05435 17.1546 0.833333 17.1546C0.61232 17.1546 0.400358 17.0668 0.244078 16.9106C0.0877974 16.7543 0 16.5423 0 16.3213ZM13.1917 3.82131C13.1917 4.04233 13.1039 4.25429 12.9476 4.41057C12.7913 4.56685 12.5793 4.65464 12.3583 4.65464H7.5C5.95344 4.65641 4.47074 5.27156 3.37716 6.36514C2.28358 7.45872 1.66843 8.94142 1.66667 10.488V11.9163C2.29131 11.2054 3.06041 10.636 3.92263 10.246C4.78484 9.85596 5.72034 9.65436 6.66667 9.65464H12.3583C12.5793 9.65464 12.7913 9.74244 12.9476 9.89872C13.1039 10.055 13.1917 10.267 13.1917 10.488V12.643L18.0908 7.74381C18.2471 7.58754 18.3348 7.37562 18.3348 7.15464C18.3348 6.93367 18.2471 6.72175 18.0908 6.56548L13.1917 1.66631V3.82131Z"
                fill="#0C1A30"
              />
            </Svg>
          </TouchableOpacity>
          <TouchableOpacity>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.9275 3.3975C18.6931 3.1162 18.3996 2.88996 18.0679 2.73485C17.7363 2.57973 17.3745 2.49955 17.0083 2.5H3.535L3.5 2.2075C3.42837 1.59951 3.13615 1.03894 2.67874 0.632065C2.22133 0.225186 1.63052 0.000284828 1.01833 0H0.833333C0.61232 0 0.400358 0.0877974 0.244078 0.244078C0.0877974 0.400358 0 0.61232 0 0.833333C0 1.05435 0.0877974 1.26631 0.244078 1.42259C0.400358 1.57887 0.61232 1.66667 0.833333 1.66667H1.01833C1.22244 1.66669 1.41945 1.74163 1.57198 1.87726C1.72451 2.0129 1.82195 2.19979 1.84583 2.4025L2.9925 12.1525C3.11154 13.1665 3.59873 14.1015 4.36159 14.78C5.12445 15.4585 6.10988 15.8334 7.13083 15.8333H15.8333C16.0543 15.8333 16.2663 15.7455 16.4226 15.5893C16.5789 15.433 16.6667 15.221 16.6667 15C16.6667 14.779 16.5789 14.567 16.4226 14.4107C16.2663 14.2545 16.0543 14.1667 15.8333 14.1667H7.13083C6.61505 14.1652 6.11233 14.0043 5.69161 13.7059C5.27089 13.4075 4.95276 12.9863 4.78083 12.5H14.7142C15.6911 12.5001 16.6369 12.1569 17.3865 11.5304C18.1361 10.9039 18.6417 10.0339 18.815 9.0725L19.4692 5.44417C19.5345 5.08417 19.5198 4.71422 19.4262 4.36053C19.3326 4.00684 19.1623 3.67806 18.9275 3.3975ZM17.8333 5.14833L17.1783 8.77667C17.0743 9.35417 16.7704 9.87666 16.3199 10.2527C15.8694 10.6287 15.301 10.8342 14.7142 10.8333H4.51583L3.73167 4.16667H17.0083C17.1307 4.16594 17.2518 4.19218 17.3629 4.24355C17.4741 4.29491 17.5725 4.37012 17.6513 4.46384C17.73 4.55756 17.7872 4.66748 17.8186 4.78578C17.8501 4.90409 17.8551 5.02787 17.8333 5.14833ZM5.83333 20C6.75381 20 7.5 19.2538 7.5 18.3333C7.5 17.4129 6.75381 16.6667 5.83333 16.6667C4.91286 16.6667 4.16667 17.4129 4.16667 18.3333C4.16667 19.2538 4.91286 20 5.83333 20ZM15.3333 18.6667C15.3333 19.5871 14.5871 20.3333 13.6667 20.3333C12.7462 20.3333 12 19.5871 12 18.6667C12 17.7462 12.7462 17 13.6667 17C14.5871 17 15.3333 17.7462 15.3333 18.6667Z"
                fill="#0C1A30"
              />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
      {product && (
        <View>
          <View className="mb-7">
            <Image
              source={{ uri: product.images[0] }}
              className="w-full border p-2 mb-3"
              style={{ height: 280, borderRadius: 10 }}
            />
            <Text
              className="text-[#0C1A30] font-medium text-sm"
              style={{ fontFamily: fontFamilies.medium }}
            >
              1/{product.images.length} Images
            </Text>
          </View>
          <View className="mb-7">
            <Text
              className="text-2xl text-[#0C1A30 mb-2"
              style={{ fontFamily: fontFamilies.bold }}
            >
              {product.title}
            </Text>
            <Text
              className="text-[#FE3A30]"
              style={{ fontFamily: fontFamilies.medium }}
            >
              ${" "}
              {product.discountPercentage
                ? calcDiscountedPrice(product.price, product.discountPercentage)
                : product.price}
              .00
            </Text>
            {product.discountPercentage && (
              <Text
                className="line-through text-[#C4C5C4] text-xs mb-3"
                style={{ fontFamily: fontFamilies.regular }}
              >
                $ {product.price}.00
              </Text>
            )}
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row gap-3 items-center">
                <View className="flex flex-row items-center" style={{ gap: 3 }}>
                  <Svg width="16" height="16" viewBox="0 0 11 10" fill="none">
                    <Path
                      d="M5.49984 0.416626L6.91609 3.28579L10.0832 3.74871L7.7915 5.98079L8.33234 9.13413L5.49984 7.64454L2.66734 9.13413L3.20817 5.98079L0.916504 3.74871L4.08359 3.28579L5.49984 0.416626Z"
                      fill="#FFC120"
                    />
                  </Svg>
                  <Text
                    className="text-[#0C1A30] font-medium"
                    style={{ fontFamily: fontFamilies.medium }}
                  >
                    {product.rating}
                  </Text>
                </View>
                <Text
                  className="text-[#0C1A30]"
                  style={{ fontFamily: fontFamilies.medium }}
                >
                  86 Reviews
                </Text>
              </View>
              <Text
                className="px-3 py-2 text-[#3A9B7A] bg-[#EEFAF6] rounded-full"
                style={{ fontFamily: fontFamilies.bold }}
              >
                Stock : {product.stock}
              </Text>
            </View>
          </View>
          <View className="flex flex-row justify-between items-center py-7 border-y border-[#bcbcbc] mb-7">
            <View className="flex flex-row items-center gap-5">
              <Image
                source={require("../../assets/images/Company.png")}
                style={{
                  width: 50,
                  height: 50,
                  borderWidth: 0.5,
                  borderColor: "#C4C5C4",
                }}
                className="rounded-full bg-white"
              />
              <View>
                <Text
                  className="text-sm mb-1"
                  style={{ fontFamily: fontFamilies.bold }}
                >
                  {product.brand}
                </Text>
                <View className="flex flex-row items-center gap-2">
                  <Text>Official Store</Text>
                  <Svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                    <Path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.77346 17.2613C7.86574 17.3096 7.96893 17.3341 8.07212 17.3333C8.17531 17.3324 8.27767 17.3071 8.37079 17.2581L11.344 15.6687C12.1872 15.2192 12.8474 14.7167 13.3625 14.1316C14.4825 12.8568 15.0941 11.2298 15.0832 9.55216L15.048 4.01828C15.0446 3.38089 14.626 2.81213 14.0068 2.60539L8.47566 0.749596C8.14259 0.636827 7.77765 0.639278 7.45046 0.755316L1.94025 2.6773C1.32446 2.89222 0.913376 3.46505 0.916732 4.10326L0.951967 9.63306C0.962874 11.3132 1.59544 12.9328 2.73389 14.1945C3.25404 14.7714 3.92017 15.2666 4.77254 15.7087L7.77346 17.2613ZM6.98635 10.7574C7.11052 10.8767 7.27159 10.9355 7.43267 10.9339C7.59375 10.9331 7.75399 10.8726 7.87648 10.7517L11.1257 7.54837C11.3699 7.30731 11.3673 6.91997 11.1207 6.68217C10.8732 6.44437 10.4747 6.44601 10.2306 6.68707L7.42344 9.45401L6.27408 8.3492C6.02659 8.1114 5.62893 8.11385 5.38396 8.35492C5.13983 8.59598 5.14234 8.98332 5.38983 9.22112L6.98635 10.7574Z"
                      fill="#3669C9"
                    />
                  </Svg>
                </View>
              </View>
            </View>
            <TouchableOpacity className="rotate-180">
              <Svg width="8" height="15" viewBox="0 0 8 15" fill="none">
                <Path
                  d="M2.60003 8.20692C2.41256 8.01939 2.30724 7.76508 2.30724 7.49992C2.30724 7.23475 2.41256 6.98045 2.60003 6.79292L7.18503 2.20692C7.36719 2.01832 7.46798 1.76571 7.4657 1.50352C7.46342 1.24132 7.35825 0.990509 7.17285 0.805101C6.98744 0.619692 6.73663 0.514523 6.47443 0.512245C6.21223 0.509966 5.95963 0.610761 5.77103 0.792919L1.18903 5.37892C0.626616 5.9415 0.310669 6.70443 0.310669 7.49992C0.310669 8.29541 0.626616 9.05834 1.18903 9.62092L5.77503 14.2069C5.96363 14.3891 6.21623 14.4899 6.47843 14.4876C6.74063 14.4853 6.99144 14.3801 7.17685 14.1947C7.36226 14.0093 7.46742 13.7585 7.4697 13.4963C7.47198 13.2341 7.37119 12.9815 7.18903 12.7929L2.60003 8.20692Z"
                  fill="#838589"
                />
              </Svg>
            </TouchableOpacity>
          </View>
          <View className="mb-32">
            <Text className="mb-4" style={{fontFamily: fontFamilies.bold}}>Product Description</Text>
            <Text className="text-sm" style={{fontFamily: fontFamilies.regular}}>
              {product.description}. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Laboriosam enim amet vitae incidunt corrupti nam
              esse nostrum cupiditate consectetur ut distinctio, minus nulla
              pariatur aliquam ipsa quos, inventore itaque magni.
            </Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
}
