import { Urbanist_700Bold } from '@expo-google-fonts/urbanist';
import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base'

type Props = IButtonProps & {
    title: string;
}


export function Button({ title, ...rest }: Props) {
    return (
        <ButtonNativeBase
            {...rest}
            w={"full"}
            h={"16"}
            bg={"#E8770D"}
           

            _pressed={{
                bg: "#A55B16",

            }}
        >

            <Text  fontFamily={'Urbanist_700Bold'} color="white">{title}</Text>
        </ButtonNativeBase>
    )
}