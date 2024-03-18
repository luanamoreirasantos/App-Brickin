import React, { useState } from 'react';
import { VStack, Heading, Center, Text, Input, Button } from 'native-base'; // Importe os componentes necessários do NativeBase
import axios from 'axios'; // Importe axios para fazer solicitações HTTP

export function Cadastrar() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (field: string, value: string) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    const handleSubmit = async () => {
        try {
            // Faça uma solicitação POST para o backend com os dados do formulário
            const response = await axios.post('http://localhost:3000/clients', formData);
            console.log(response.data); // Exiba a resposta do backend no console
            // Adicione aqui a lógica para lidar com a resposta do backend, por exemplo, exibir uma mensagem de sucesso
        } catch (error) {
            console.error('Erro ao cadastrar:', error);
            // Adicione aqui a lógica para lidar com erros, por exemplo, exibir uma mensagem de erro
        }
    };

    return (
        <VStack bgColor="white" flex={1} padding={10}>
            <Center>
                <Heading size="xl" color="#E8770D" my={10}>
                    Cadastrar
                </Heading>
                <Input
                    padding="2"
                    placeholder="Nome:"
                    mb="4"
                    onChangeText={(value) => handleChange('name', value)}
                />
                <Input
                    padding="2"
                    placeholder="Email:"
                    mb="4"
                    onChangeText={(value) => handleChange('email', value)}
                />
                <Input
                    padding="2"
                    placeholder="Senha:"
                    mb="4"
                    secureTextEntry={true}
                    onChangeText={(value) => handleChange('password', value)}
                />
                <Button color="white" mb={4} onPress={handleSubmit}>
                    Cadastrar
                </Button>
            </Center>
        </VStack>
    );
}
