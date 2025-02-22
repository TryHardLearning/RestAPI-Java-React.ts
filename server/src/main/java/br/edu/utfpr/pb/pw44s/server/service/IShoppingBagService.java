package br.edu.utfpr.pb.pw44s.server.service;

import br.edu.utfpr.pb.pw44s.server.model.ShoppingBag;

public interface IShoppingBagService extends ICrudService<ShoppingBag, Long> {
    ShoppingBag findOneByUsername(String username);
}
