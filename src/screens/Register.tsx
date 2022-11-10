import { VStack } from 'native-base';

import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function Register() {
  return (
    <VStack flex={1} p={6} bg="gray.600">
      <Header title="Nova solicitação"/>

      <Input 
        placeholder="Descrição do problema"
        flex={1}
        ml={5}
        multiline
        textAlign="top"
      />
    </VStack>
  );
}