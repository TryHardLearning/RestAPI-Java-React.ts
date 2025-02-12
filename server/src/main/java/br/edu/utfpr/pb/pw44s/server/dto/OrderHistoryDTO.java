package br.edu.utfpr.pb.pw44s.server.dto;

import br.edu.utfpr.pb.pw44s.server.model.ShoppingBag;
import br.edu.utfpr.pb.pw44s.server.model.User;
import jakarta.validation.constraints.NotNull;

public class OrderHistoryDTO {

    private Long id;

    @NotNull
    private ShoppingBag bag;

    @NotNull
    private User user;
}
