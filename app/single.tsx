import Ionicons from '@expo/vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';
import { Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';

export const HeaderRightSingle = () => (
  <View className={styles.headerRight}>
    <TouchableOpacity>
      <Ionicons name="share-social-outline" size={24} />
    </TouchableOpacity>
    <TouchableOpacity>
      <Ionicons name="ellipsis-vertical-outline" size={24} />
    </TouchableOpacity>
  </View>
);

interface BookParams {
  bookId: string;
  bookTitle: string;
  bookAuthor: string;
  bookCover: string;
  bookSummary: string;
}

export default function Single() {
  const route = useRoute();
  const { bookTitle, bookAuthor, bookCover, bookSummary } = route.params as BookParams;

  return (
    <ScrollView>
      {/* Banner */}
      <View className={styles.banner}>
        <Image source={{ uri: bookCover }} className={styles.imageBanner} />
      </View>
      <View className={styles.container}>
        <View className={styles.main}>
          {/* Book Details */}
          <View className={styles.bookDetailsContainer}>
            <View className={styles.bookDetails}>
              {/* Book title */}
              <Text className={styles.bookTitle}>{bookTitle}</Text>
              {/* Book Image */}
              <TouchableOpacity className={styles.authorDetails}>
                <Image source={{ uri: bookCover }} className={styles.imageAuthor} />
                {/* Authors name */}
                <Text className={styles.authorName}>{bookAuthor}</Text>
              </TouchableOpacity>
              {/* Book popularity */}
              <View className={styles.bookInfo}>
                <View className={styles.bookReaders}>
                  <Ionicons name="eye-outline" size={16} />
                  <Text>100 Readers</Text>
                </View>
                <View className={styles.bookLikes}>
                  <Ionicons name="star-outline" size={16} />
                  <Text>100+ Rates</Text>
                </View>
                <View className={styles.bookChapters}>
                  <Ionicons name="ellipsis-vertical-outline" size={16} />
                  <Text>100 Chapters</Text>
                </View>
              </View>
            </View>
          </View>
          {/* Actions */}
          <View className={styles.actions}>
            <TouchableOpacity className={styles.button}>
              <Text className={styles.buttonText}>Start Reading</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="add-circle-outline" size={32} />
            </TouchableOpacity>
          </View>
          {/* Tags */}
          <View className={styles.tags}>
            <TouchableOpacity className={styles.tag}>
              <Text>Tag 1</Text>
            </TouchableOpacity>
            <TouchableOpacity className={styles.tag}>
              <Text>Tag 2</Text>
            </TouchableOpacity>
            <TouchableOpacity className={styles.tag}>
              <Text>Tag 3</Text>
            </TouchableOpacity>
            <TouchableOpacity className={styles.tag}>
              <Text>Tag 4</Text>
            </TouchableOpacity>
            <TouchableOpacity className={styles.tag}>
              <Text>Tag 5</Text>
            </TouchableOpacity>
          </View>
          {/* Description */}
          <View className={styles.description}>
            <Text>{bookSummary}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = {
  headerRight: 'flex-row items-center gap-4',
  container: 'flex-1 p-4',
  main: 'flex-1 max-w-[960] mb-4 pt-20',
  banner: 'h-[256px] bg-gray-300 flex items-center justify-center pt-32',
  imageBanner: 'w-[190px] h-[290px]',
  bookDetailsContainer: 'flex-row justify-center items-center',
  bookDetails: 'flex-col gap-2 justify-center items-center',
  bookTitle: 'text-lg font-bold',
  authorDetails: 'flex-row items-center',
  imageAuthor: 'w-[32px] h-[32px] rounded-full mr-2',
  authorName: 'text-sm font-bold',
  bookInfo: 'flex-row justify-between items-center',
  bookReaders: 'flex-row items-center mr-4',
  bookLikes: 'flex-row items-center mr-4',
  bookChapters: 'flex-row items-center',
  actions: 'flex-row justify-center items-center mt-6',
  button: 'items-center bg-gray-300 rounded-[28px] w-[150px] shadow-md p-2 mr-4',
  buttonText: 'text-md font-semibold text-center',
  tags: 'flex-row justify-center items-center mt-6',
  tag: 'bg-gray-300 rounded-[28px] shadow-md p-2 mr-4',
  description: 'mt-6 text-sm bg-gray-300 rounded-md p-4',
};
