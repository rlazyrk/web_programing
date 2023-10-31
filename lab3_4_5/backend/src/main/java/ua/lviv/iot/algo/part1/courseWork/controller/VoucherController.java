package ua.lviv.iot.algo.part1.courseWork.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ua.lviv.iot.algo.part1.courseWork.model.Voucher;
import ua.lviv.iot.algo.part1.courseWork.service.VoucherService;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "*")
@RequestMapping("api/vouchers")
public class VoucherController {

    private final VoucherService service;

    @GetMapping
    public ResponseEntity<Iterable<Voucher>> getAll() {
        return ResponseEntity.ok(service.getAll());
    }

    @PostMapping
    public ResponseEntity<List<Voucher>> create(@RequestBody Voucher voucher) {
        return ResponseEntity.ok(service.create(voucher));
    }

    @PutMapping("/{id}")
    public ResponseEntity<List<Voucher>> update(@PathVariable Integer id, @RequestBody Voucher voucher) {
        return ResponseEntity.ok(service.update(id, voucher));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<List<Voucher>> delete(@PathVariable Integer id) {
        return ResponseEntity.ok(service.delete(id));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Voucher>> getById(@PathVariable Integer id){
        return ResponseEntity.ok(service.getById(id));
    }
}
