import Colors from "@/constants/Colors";
import { Tabs } from "expo-router";
import { Feather, Entypo, AntDesign } from "@expo/vector-icons";

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.primary
            }}
        >

            <Tabs.Screen
                name="home-screen"
                options={{
                    tabBarLabel: "Beranda",
                    tabBarIcon: ({color}) => {
                        return <Feather name="home" size={24} color={color} />;
                    }
                }}
            />

            <Tabs.Screen
                name="speech-list"
                options={{
                    tabBarLabel: "Spech List",
                    tabBarIcon: ({color}) => {
                        return <Entypo name="open-book" size={24} color={color} />;
                    }
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    tabBarLabel: "Profil",
                    tabBarIcon: ({color}) => {
                        return <AntDesign name="user" size={24} color={color} />;
                    }
                }}
            />

        </Tabs>
    )
}

export default TabsLayout;