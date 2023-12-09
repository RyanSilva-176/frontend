import { Feather } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { HeaderRightCloud } from './cloud';
import { HeaderRightCollection } from './collection';
import { HeaderRightSingle } from './single';

export default function Layout() {
  const router = useRouter();

  const BackButton = () => (
    <TouchableOpacity onPress={router.back}>
      <View className={styles.backButton}>
        <Feather name="chevron-left" size={16} color="#007AFF" />
        <Text className={styles.backButtonText}>Back</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Overview' }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="details"
        options={{ title: 'Details', headerLeft: () => <BackButton /> }}
      />
      <Stack.Screen
        name="collection"
        options={{
          title: 'Collection',
          headerLeft: () => <BackButton />,
          headerRight: () => <HeaderRightCollection />,
        }}
      />
      <Stack.Screen
        name="single"
        options={{
          title: 'Single',
          headerLeft: () => <BackButton />,
          headerRight: () => <HeaderRightSingle />,
        }}
      />
      <Stack.Screen
        name="cloud"
        options={{
          title: 'Cloud',
          headerLeft: () => <BackButton />,
          headerRight: () => <HeaderRightCloud />,
        }}
      />
    </Stack>
  );
}

const styles = {
  backButton: 'flex-row',
  backButtonText: 'text-blue-500 ml-1',
  headerRight: 'flex-row items-center gap-4',
};
