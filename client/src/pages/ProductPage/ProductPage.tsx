import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IProduct } from "@/commons/interfaces";
import ProductService from "@/service/ProductService";
import { Box, Image, Text, Button, VStack, Spinner, Alert, AlertIcon } from "@chakra-ui/react";

export function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState<IProduct | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        if (id) {
            loadProduct(id);
        }
    }, [id]);

    const loadProduct = async (productId: any) => {
        try {
            setLoading(true);
            const response = await ProductService.findById(Number(id));

            if (response.status === 200) {
                setProduct(response.data);
            } else {
                setError("Produto não encontrado.");
            }
        } catch (err) {
            setError("Erro ao carregar o produto.");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <Spinner size="xl" thickness="4px" color="blue.500" mt={10} />;
    }

    if (error) {
        return (
            <Alert status="error">
                <AlertIcon />
                {error}
            </Alert>
        );
    }

    if (!product) {
        return null;
    }

    return (
        <Box maxW="700px" mx="70vh" p={5} boxShadow="lg" borderRadius="md">
            <Image src="https://i.pinimg.com/564x/a6/51/02/a651026986996bb1b607d4487c5a5336.jpg" alt={product.name} borderRadius="md" />
            <VStack align="start" spacing={3} mt={5}>
                <Text fontSize="2xl" fontWeight="bold">{product.name}</Text>
                <Text fontSize="md" color="gray.600">{product.description}</Text>
                <Text fontSize="xl" fontWeight="bold" color="blue.500">R$ {product.price}</Text>
                <Button colorScheme="blue" size="lg">Finalizar Compra</Button>
            </VStack>
        </Box>
    );
}
