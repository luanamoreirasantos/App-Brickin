import { Input as NativeBaseInput, IInputProps } from 'native-base';


export function Input({ ...rest }:  IInputProps) {
    return (
        <NativeBaseInput 
        bg="#F0F0F0"
        fontSize={'md'}
        h={'16'}
        {...rest}
        borderRadius={4}
        borderBottomRadius={4}
        fontFamily={'Urbanist_900Black'}
        variant="unstyled"
        borderColor={'#E8770D'}
        borderBottomWidth={'3'}
        textDecoration={'none'}
        

        _focus={{
           
            bg: "#F0F0F0",
            borderBottomRadius: '4',
            borderColor: '#E8770D',
            borderBottomWidth: '3',
        }}
        />
    );
};