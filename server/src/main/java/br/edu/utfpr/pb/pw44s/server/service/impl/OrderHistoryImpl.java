package br.edu.utfpr.pb.pw44s.server.service.impl;

import br.edu.utfpr.pb.pw44s.server.model.OrderHistory;
import br.edu.utfpr.pb.pw44s.server.repository.OrderHistoryRepository;
import br.edu.utfpr.pb.pw44s.server.service.IOrderHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderHistoryImpl extends CrudServiceImpl<OrderHistory, Long> implements IOrderHistory {
    private final OrderHistoryRepository repository;

    public OrderHistoryImpl(OrderHistoryRepository repository) {
        this.repository = repository;
    }

    @Override
    protected JpaRepository<OrderHistory, Long> getRepository() {
        return repository;
    }

    public List<OrderHistory> findAllByUserId(Long userId) {
        return repository.findAllByUserId(userId);
    }
}
