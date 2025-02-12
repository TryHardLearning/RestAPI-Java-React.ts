package br.edu.utfpr.pb.pw44s.server.dto;

import br.edu.utfpr.pb.pw44s.server.model.Product;
import br.edu.utfpr.pb.pw44s.server.model.ShoppingBag;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ItemShoppingBagDTO {
    Long id;

    @NotNull
    private Product product;

    @NotNull
    private Integer quantity;

    @NotNull
    private Double cost;

    private ShoppingBag shoppingBag;
}
