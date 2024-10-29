import { useRouter } from "expo-router";
import { Pressable, SafeAreaView, Text, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

const SpeechList = () => {
    const router = useRouter();
    return (
        <SafeAreaView>
            <Pressable
                className='absolute mt-10 ml-5'
                onPress={() => router.push('/home-screen')}
            >
                <Ionicons name="arrow-back-sharp" size={24} color="black" />
            </Pressable>
            <View className="flex justify-center items-center h-full">
                <Text className="text-3xl font-bold">Halaman Speech List</Text>
            </View>
        </SafeAreaView>
    )
}

export default SpeechList;