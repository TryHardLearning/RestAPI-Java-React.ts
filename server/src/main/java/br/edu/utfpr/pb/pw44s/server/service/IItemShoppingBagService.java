package br.edu.utfpr.pb.pw44s.server.service;

import br.edu.utfpr.pb.pw44s.server.model.ItemShoppingBag;

public interface IItemShoppingBagService extends ICrudService<ItemShoppingBag, Long> {
    ItemShoppingBag findOne(Long id);
}