package br.edu.utfpr.pb.pw44s.server.service.impl;

import br.edu.utfpr.pb.pw44s.server.model.ItemShoppingBag;
import br.edu.utfpr.pb.pw44s.server.repository.ItemShoppingBagRepository;
import br.edu.utfpr.pb.pw44s.server.service.IItemShoppingBagService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class ItemShoppingBagServiceImpl extends CrudServiceImpl<ItemShoppingBag, Long> implements IItemShoppingBagService {
    private final ItemShoppingBagRepository repository;
    //private ShoppingBagService shoppingBagService;

    public ItemShoppingBagServiceImpl(ItemShoppingBagRepository repository) {
        this.repository = repository;
    }

    @Override
    protected JpaRepository<ItemShoppingBag, Long> getRepository() {
        return repository;
    }
}
