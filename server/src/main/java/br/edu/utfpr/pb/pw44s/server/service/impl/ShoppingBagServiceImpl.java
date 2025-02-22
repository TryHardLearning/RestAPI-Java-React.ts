package br.edu.utfpr.pb.pw44s.server.service.impl;

import br.edu.utfpr.pb.pw44s.server.model.ItemShoppingBag;
import br.edu.utfpr.pb.pw44s.server.model.ShoppingBag;
import br.edu.utfpr.pb.pw44s.server.repository.ShoppingBagRepository;
import br.edu.utfpr.pb.pw44s.server.service.IShoppingBagService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class ShoppingBagServiceImpl extends CrudServiceImpl<ShoppingBag, Long> implements IShoppingBagService {

    private final ShoppingBagRepository repository;

    public ShoppingBagServiceImpl(ShoppingBagRepository repository) {
        this.repository = repository;
    }

    @Override
    protected JpaRepository<ShoppingBag, Long> getRepository() {
        return this.repository;
    }


    @Override
    public ShoppingBag findOneByUsername(String username) {
        return repository.findByUser_Username(username);
    }

    @Override
    public ShoppingBag save(ShoppingBag entity) {
        // Garantir que todos os itens tenham a referência correta
        for (ItemShoppingBag item : entity.getItems()) {
            item.setShoppingBag(entity);
            System.out.println(item.getId());
        }
        return repository.save(entity);
    }
}
