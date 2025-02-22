import { IProduct, IShoppingBag } from "@/commons/interfaces";
import ProductService from "@/service/ProductService";
import { useEffect, useState } from "react";
import { Box, SimpleGrid, Text, Alert, AlertIcon } from "@chakra-ui/react";
import { ItemBag } from "@/components/ItemBag";
import ShoppingBagService from "@/service/ShoppingBagService";

export function BuyCart() {
    const [data, setData] = useState<IShoppingBag>();
    const [apiError, setApiError] = useState<boolean>(false);
    const [apiMessage, setApiMessage] = useState<string>("");
    const [apiSuccess, setApiSuccess] = useState<boolean>(false);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        setApiError(false);
        setApiMessage("");
        setApiSuccess(false);

        const response = await ShoppingBagService.findAll();
        if (response.status === 200) {
            setData(response.data);
        } else {
            setApiError(true);
            setApiMessage("Falha ao carregar os dados");
            setData([]);
        }
    };

    const onClickRemove = async (id?: number) => {
        setApiError(false);
        setApiMessage("");
        setApiSuccess(false);

        if (id) {
            const response = await ProductService.remove(id);
            if (response.status === 204) {
                setData((prevData) => prevData.filter((product) => product.id !== id));
                setApiSuccess(true);
                setApiMessage("Produto removido com sucesso");
            } else {
                setApiError(true);
                setApiMessage("Falha ao remover o produto");
            }
        }
    };

    return (
        <Box textAlign="center" p={5}>
            <Text fontSize="2xl" fontWeight="bold" mb={4}>LandPage</Text>

            {/* Mensagens de erro e sucesso */}
            {apiError && (
                <Alert status="error" mb={4}>
                    <AlertIcon />
                    {apiMessage}
                </Alert>
            )}
            {apiSuccess && (
                <Alert status="success" mb={4}>
                    <AlertIcon />
                    {apiMessage}
                </Alert>
            )}

            {/* Grid de produtos */}
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
                {data.map((itemProduct) => (
                    <ItemBag key={itemProduct.id} produto={itemProduct} />
                ))}
            </SimpleGrid>
        </Box>
    );
}
