import { Box, Button, Image, Text, VStack, HStack } from "@chakra-ui/react";
import { IItemShoppingBag, IProduct } from "@/commons/interfaces";

interface IItemShoppingBagProps {
    items: IItemShoppingBag;
}

export function ItemBag({ items }: IItemShoppingBagProps) {
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
                    {items.product.name}
                </Text>
                <Text fontSize="sm" color="gray.600">
                    {items.product.description}
                </Text>
                <Text fontSize="lg" color="blue.500" fontWeight="bold">
                    R$: {items.product.price}
                </Text>
            </VStack>

            {/* Ações do Card */}
            <HStack spacing={3} mt={4}>
                <Button size="sm" colorScheme="primary">+</Button>
                <Button size="sm" colorScheme="alert" variant="outline">-</Button>
            </HStack>
        </Box>
    );
}
