import { VStack, Heading, Center, Text, FormControl, Box, ScrollView } from "native-base";
import {  useForm, Controller  } from 'react-hook-form'

import { useFonts, Urbanist_700Bold, Urbanist_900Black, } from "@expo-google-fonts/urbanist";
import { styles } from './styles';
import { Input } from '../components/input';
import { Button } from '../components/button';

export function Cadastrar() {
    const [fontLoaded] = useFonts({
        Urbanist_700Bold,
        Urbanist_900Black,

    })

    if (!fontLoaded) {
        return null;
    }

   const { control } = useForm();




/*
    return (
        <ScrollView h="30">
            <VStack bgColor="white" flex={1} padding={10}>
                <Center>
                    <Heading style={styles.title} size="xl" color="#E8770D" my={10} >
                        Cadastrar
                    </Heading>
                    
                    <Input padding="2" placeholder="Email:" mb='4' />              
                    <Input padding="2" placeholder="Senha: " mb={4} />
                    <Input padding="2" placeholder="Confirmar senha: " mb={9} />

                 <Controller
                        control = {control}
                        name="name"
                        render= 
                    
                    />

                    <Button color='white' mb={4} title="Logar" />
                    <Text style={styles.title} marginX="20">Já tem uma conta? <Text color="#E8770D">login</Text></Text>
                </Center>
            </VStack>
        </ScrollView>

    );´
*/
}