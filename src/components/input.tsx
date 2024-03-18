import { Input as NativeBaseInput, IInputProps } from 'native-base';


export function Input({ ...rest }:  IInputProps) {
    return (
        <NativeBaseInput 
        bg="#F0F0F0"
        fontSize={'md'}
        h={'16'}
        {...rest}
        
        fontFamily={'Urbanist_900Black'}
        variant="unstyled"
        borderColor={'#E8770D'}
        
        textDecoration={'none'}
        borderBottomWidth={'3'}

        _focus={{
           
            bg: "#F0F0F0",
            borderColor: '#E8770D',
            color: "gray.500"
        }}

        _invalid={ {
            borderColor: 'red.500',
            borderWidth: '2'
        }}


        
        />
    );
};