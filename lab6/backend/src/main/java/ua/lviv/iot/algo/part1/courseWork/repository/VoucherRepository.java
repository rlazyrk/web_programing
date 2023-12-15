package ua.lviv.iot.algo.part1.courseWork.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ua.lviv.iot.algo.part1.courseWork.model.Voucher;

public interface VoucherRepository extends JpaRepository<Voucher, Integer> {
}

