package br.edu.utfpr.pb.pw44s.server.controller;

import br.edu.utfpr.pb.pw44s.server.dto.ShoppingBagDTO;
import br.edu.utfpr.pb.pw44s.server.model.Product;
import br.edu.utfpr.pb.pw44s.server.model.ShoppingBag;
import br.edu.utfpr.pb.pw44s.server.service.ICrudService;
import br.edu.utfpr.pb.pw44s.server.service.IShoppingBagService;
import br.edu.utfpr.pb.pw44s.server.service.impl.CrudServiceImpl;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("shoppingbag")
public class ShoppingBagController extends CrudController<ShoppingBag, ShoppingBagDTO, Long>{
    private final IShoppingBagService service;

    private final ModelMapper modelMapper;

    public ShoppingBagController(IShoppingBagService service, ModelMapper modelMapper) {
        super(ShoppingBag.class, ShoppingBagDTO.class);
        this.service = service;
        this.modelMapper = modelMapper;
    }

    @Override
    protected ICrudService<ShoppingBag, Long> getService() {
        return service;
    }

    @Override
    protected ModelMapper getModelMapper() {
        return modelMapper;
    }

    @GetMapping //http://ip.api:port/classname
    public ResponseEntity<ShoppingBagDTO> findOneByUsername(@RequestParam String username) {
        ShoppingBag entity = service.findOneByUsername();
        if ( entity != null) {
            return ResponseEntity.ok(modelMapper.map(entity, ShoppingBagDTO.class));
        } else {
            return ResponseEntity.noContent().build();
        }
    }
}
