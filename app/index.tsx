import { useRouter } from "expo-router";
import { Button, Pressable, SafeAreaView, Text, View } from "react-native"

const app = () => {
    const router = useRouter();
    return (
        <SafeAreaView>
            <View className="flex w-full h-full justify-between p-5">
                <View className="mt-10">
                    <Text className="text-2xl text-orange-600 font-bold">Welcome to Speechy</Text>
                    <Text className="text-lg">We help you to become nice speaker</Text>
                </View>
                <Pressable
                    className="bg-orange-500 p-4 rounded-lg items-center"
                    onPress={() => router.push('/home-screen')}
                >
                    <Text className="text-white font-bold">Get Started</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default app;