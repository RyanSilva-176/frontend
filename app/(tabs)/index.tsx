import { View, Text } from 'react-native';

export default function Home() {
  return (
    <View>
      <Text className={styles.title}>Hello World</Text>
    </View>
  );
}

const styles = {
  title: 'text-xl font-bold text-red-500',
};
