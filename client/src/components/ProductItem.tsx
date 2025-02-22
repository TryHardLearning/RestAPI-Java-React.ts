import { Box, Button, Image, Text, VStack, HStack } from "@chakra-ui/react";
import { IProduct } from "@/commons/interfaces";

interface ProductItemProps {
    produto: IProduct;
}

export function ProductItem({ produto }: ProductItemProps) {
    return (
        <Box 
            maxW="345px" 
            borderWidth="1px" 
            borderRadius="lg" 
            overflow="hidden" 
            boxShadow="md"
            p={4}
        >
            {/* Imagem do Produto */}
            <Image 
                src="https://source.unsplash.com/300x200/?product" 
                alt="Produto" 
                height="200px" 
                objectFit="cover"
                borderRadius="md"
            />

            {/* Conteúdo do Card */}
            <VStack align="start" spacing={2} mt={3}>
                <Text fontSize="lg" fontWeight="bold">
                    {produto.name}
                </Text>
                <Text fontSize="sm" color="gray.600">
                    {produto.description}
                </Text>
                <Text fontSize="lg" color="blue.500" fontWeight="bold">
                    R$: {produto.price}
                </Text>
            </VStack>

            {/* Ações do Card */}
            <HStack spacing={3} mt={4}>
                <Button size="sm" colorScheme="blue">Comprar</Button>
                <Button size="sm" colorScheme="gray" variant="outline">Ver mais</Button>
            </HStack>
        </Box>
    );
}
