import { Pressable, StyleSheet, Text, View } from "react-native";
type TitleProps = {
  title: string;
  btnText: string;
};

const Title = ({ title, btnText }: TitleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Pressable>
        <Text style={styles.btnText}>{btnText}</Text>
      </Pressable>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 15,
  },
  title:{
    fontSize: 16, // default - 14
    fontWeight: '500',
  },
  btnText:{
    color: 'gray',
    fontSize: 14,
    fontWeight:"500"
  }
});
