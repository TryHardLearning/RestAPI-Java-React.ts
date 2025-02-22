package br.edu.utfpr.pb.pw44s.server.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ItemShoppingBag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @NotNull
    private Product product;

    private int quantity  = 1;

    @NotNull
    private double cost;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "shopping_bag_id", nullable = false)
    @JsonBackReference
    private ShoppingBag shoppingBag;
}
