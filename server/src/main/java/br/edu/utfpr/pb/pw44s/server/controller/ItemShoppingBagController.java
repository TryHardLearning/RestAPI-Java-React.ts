package br.edu.utfpr.pb.pw44s.server.controller;

import br.edu.utfpr.pb.pw44s.server.dto.ItemShoppingBagDTO;
import br.edu.utfpr.pb.pw44s.server.dto.ProductDTO;
import br.edu.utfpr.pb.pw44s.server.model.ItemShoppingBag;
import br.edu.utfpr.pb.pw44s.server.model.Product;
import br.edu.utfpr.pb.pw44s.server.service.ICrudService;
import br.edu.utfpr.pb.pw44s.server.service.IItemShoppingBagService;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("itembag")
public class ItemShoppingBagController extends CrudController<ItemShoppingBag, ItemShoppingBagDTO, Long>{
    private final IItemShoppingBagService service;

    private final ModelMapper modelMapper;

    public ItemShoppingBagController(IItemShoppingBagService service, ModelMapper modelMapper) {
        super(ItemShoppingBag.class, ItemShoppingBagDTO.class);
        this.service = service;
        this.modelMapper = modelMapper;
    }

    @Override
    protected ICrudService<ItemShoppingBag, Long> getService() {
        return service;
    }

    @Override
    protected ModelMapper getModelMapper() {
        return modelMapper;
    }
}
