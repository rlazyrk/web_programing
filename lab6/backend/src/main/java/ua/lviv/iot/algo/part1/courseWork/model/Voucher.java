package ua.lviv.iot.algo.part1.courseWork.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Voucher {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private Integer price;
    private Integer duration;
    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String description;
    private String country;
    private String image;

}

