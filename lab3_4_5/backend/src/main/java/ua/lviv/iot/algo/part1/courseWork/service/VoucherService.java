package ua.lviv.iot.algo.part1.courseWork.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ua.lviv.iot.algo.part1.courseWork.exception.NotFoundException;
import ua.lviv.iot.algo.part1.courseWork.model.Voucher;
import ua.lviv.iot.algo.part1.courseWork.repository.VoucherRepository;


import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class VoucherService {

    private final VoucherRepository repository;

    public List<Voucher> create(Voucher voucher) {
        repository.save(voucher);
        return repository.findAll();
    }

    public List<Voucher> update(Integer id, Voucher voucher) {

        Optional<Voucher> voucherToUpdate = repository.findById(id);
        if (voucherToUpdate.isEmpty()) {
            throw new NotFoundException("Voucher with this id is not exist");
        }
        voucherToUpdate.ifPresent(voucher1 -> {
            voucher1.setTitle(voucher.getTitle());
            voucher1.setPrice(voucher.getPrice());
            voucher1.setDuration(voucher.getDuration());
            voucher1.setCountry(voucher.getCountry());
        });
        repository.save(voucherToUpdate.get());
        return repository.findAll();
    }

    public List<Voucher> getAll() {
        return repository.findAll();
    }

    public Optional<Voucher> getById(Integer id){
        return repository.findById(id);
    }

    public List<Voucher> delete(Integer id) {
        repository.deleteById(id);
        return repository.findAll();
    }
}
