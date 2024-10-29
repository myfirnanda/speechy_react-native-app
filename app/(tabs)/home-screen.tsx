import { SafeAreaView, Text, View } from "react-native"

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View className="flex justify-center items-center h-full">
                <Text className="text-4xl font-bold">Hello 👋</Text>
                <Text className="text-2xl">Mochammad Yoga Firnanda</Text>
                <Text className="text-2xl">(21081010152)</Text>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen