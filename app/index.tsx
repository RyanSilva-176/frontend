import { Link } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Page() {
  return (
    <View className={styles.container}>
      <View className={styles.main}>
        <View>
          <Text className={styles.title}>Hello World</Text>
          <Text className={styles.subtitle}>This is the first page of your app.</Text>
        </View>
        <Link href={{ pathname: '/(tabs)/', params: { name: 'Dan' } }} asChild>
          <TouchableOpacity className={styles.button}>
            <Text className={styles.buttonText}>Show Details</Text>
          </TouchableOpacity>
        </Link>
        <Link href={{ pathname: '/collection', params: { name: 'Dan' } }} asChild>
          <TouchableOpacity className={styles.button}>
            <Text className={styles.buttonText}>Collection</Text>
          </TouchableOpacity>
        </Link>
        <Link href={{ pathname: '/single', params: { name: 'Dan' } }} asChild>
          <TouchableOpacity className={styles.button}>
            <Text className={styles.buttonText}>Single</Text>
          </TouchableOpacity>
        </Link>
        <Link href={{ pathname: '/cloud', params: { name: 'Dan' } }} asChild>
          <TouchableOpacity className={styles.button}>
            <Text className={styles.buttonText}>Cloud</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = {
  button: 'items-center bg-indigo-500 rounded-[28px] shadow-md p-4',
  buttonText: 'text-white text-lg font-semibold text-center',
  container: 'flex-1 p-6',
  main: 'flex-1 max-w-[960] gap-4 my-4',
  title: 'text-[64px] font-bold',
  subtitle: 'text-4xl text-gray-700',
};
