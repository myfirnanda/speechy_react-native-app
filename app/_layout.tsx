import { Slot, Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Slot />
        // <Stack>
        //     <Stack.Screen name="{tabs}" options={{ headerShown: false }} />
        //     <Stack.Screen name="index" options={{ headerShown: false }} />
        // </Stack>
    )
}