import { VStack, Heading, Center, Text, Image } from "native-base";
import { Input } from '../components/input';
import { Button } from '../components/button';
import { useFonts, Urbanist_700Bold, Urbanist_900Black, Urbanist_400Regular } from "@expo-google-fonts/urbanist";
import { styles } from './styles';


export function Login() {
  const [fontLoaded] = useFonts({
    Urbanist_700Bold,
    Urbanist_900Black,
    Urbanist_400Regular
  })

  if (!fontLoaded) {
    return null;
  }

  return (
    <VStack bgColor="white" flex={1} padding={10}>
      <Center>
        
        
        <Heading style={styles.title} size="xl" color="#E8770D" my={10} >
          Login
        </Heading>
        <Input padding="2" placeholder="Email:" mb={4} />
        <Input padding="2" placeholder="Senha:" secureTextEntry />
        <Text style={styles.title} color="#E8770D" mb={20} mr={210}>Esqueceu a senha?</Text>
        
        <Button color='white' mb={4} title="Logar" />
        <Text style={styles.title} >Não tem uma conta? <Text color="#E8770D">Registre-se</Text></Text>

      </Center>
    </VStack>
  );
}


