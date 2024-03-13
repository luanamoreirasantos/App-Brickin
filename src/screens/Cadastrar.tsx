import {
    VStack,
    Heading,
    Center,
    Text,
    ScrollView,
} from "native-base";
import { useForm, Controller } from "react-hook-form";

import {
    useFonts,
    Urbanist_700Bold,
    Urbanist_900Black,
} from "@expo-google-fonts/urbanist";
import { styles } from "./styles";
import { Input } from "../components/input";
import { Button } from "../components/button";

export function Cadastrar() {
    const { control } = useForm();
   const [fontLoaded] = useFonts({
        Urbanist_700Bold,
        Urbanist_900Black,
    });

    if (!fontLoaded) {
        return null;
    }

    return (
        <ScrollView h="30">
            <VStack bgColor="white" flex={1} padding={10}>
                <Center>
                    <Heading style={styles.title} size="xl" color="#E8770D" my={10}>
                        Cadastrar
                    </Heading>

                    <Controller
                        control={control}
                        name="name"
                        render={({ field: { onChange } }) => (
                            <Input
                                padding="2"
                                placeholder="Nome:"
                                mb="4"
                                onChangeText={onChange}
                            />
                        )}
                    />



                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange } }) => (
                            <Input
                                padding="2"
                                placeholder="Email:"

                                mb="4"
                                onChangeText={onChange}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange } }) => (
                            <Input
                                padding="2"
                                placeholder="Senha:"

                                mb="4"
                                onChangeText={onChange}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange } }) => (
                            <Input
                                padding="2"
                                placeholder="Confirme a senha:"
                                
                                mb="4"
                                onChangeText={onChange}
                            />
                        )}
                    />



                    <Button color="white" mb={4} title="Logar" />
                    <Text style={styles.title} marginX="20">
                        Já tem uma conta? <Text color="#E8770D">login</Text>
                    </Text>
                </Center>
            </VStack>
        </ScrollView>
    );
}
