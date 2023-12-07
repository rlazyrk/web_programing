package ua.lviv.iot.algo.part1.courseWork.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ua.lviv.iot.algo.part1.courseWork.exception.NotFoundException;
import ua.lviv.iot.algo.part1.courseWork.model.Voucher;
import ua.lviv.iot.algo.part1.courseWork.repository.VoucherRepository;


import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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

    public List<Voucher> getFiltered(String country, String duration, String price, String title) {
        List<Voucher> vouchers = getAll();
        if (!duration.isEmpty()) {
            vouchers = sortByDuration(duration, vouchers);
        }
        if (!country.isEmpty()) {
            vouchers = sortByCountry(country, vouchers);
        }
        if (!price.isEmpty()) {
            vouchers = sortByPrice(price, vouchers);
        }
        if (!title.isEmpty()) {
            vouchers = vouchers.stream()
                    .filter(voucher -> voucher.getTitle().toLowerCase().contains(title.toLowerCase()))
                    .collect(Collectors.toList());
        }
        return vouchers;
    }

    private List<Voucher> sortByDuration(String duration, List<Voucher> vouchers) {
        int durationInt = Integer.parseInt(duration);
        return vouchers.stream()
                .filter(voucher -> durationInt == 8 ? voucher.getDuration() >= 8 : voucher.getDuration() <= 7)
                .collect(Collectors.toList());
    }

    private List<Voucher> sortByCountry(String country, List<Voucher> vouchers) {
        System.out.println(country);
        return vouchers.stream()
                .filter(voucher -> voucher.getCountry().toLowerCase().equals(country.toLowerCase()))
                .collect(Collectors.toList());
    }

    private List<Voucher> sortByPrice(String price, List<Voucher> vouchers) {
        int priceInt = Integer.parseInt(price);
        return vouchers.stream()
                .filter(voucher -> voucher.getPrice() <= priceInt)
                .collect(Collectors.toList());
    }

    public List<Voucher> sortByTitleOnly(String title) {
        return getAll().stream()
                .filter(voucher -> voucher.getTitle().toLowerCase().contains(title.toLowerCase()))
                .collect(Collectors.toList());
    }
}
