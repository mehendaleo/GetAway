from app.models import Image, db

def seed_images():
    image1 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639613729/tampa/tampa-1-1_dvqp1d.jpg',
        user_id = 1,
        location_id = 1
    )
    image2 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639613729/tampa/tampa-1-2_a2zyve.jpg',
        user_id = 1,
        location_id = 1
    )
    image3 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639613729/tampa/tampa-1-3_w22xyg.jpg',
        user_id = 1,
        location_id = 1
    )
    image4 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639613729/tampa/tampa-5-1_xgtpj8.jpg',
        user_id = 2,
        location_id = 5
    )
    image5 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639613729/tampa/tampa-5-2_l34tas.jpg',
        user_id = 2,
        location_id = 5
    )
    image6 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639613729/tampa/tampa-5-3_mukmr8.jpg',
        user_id = 2,
        location_id = 5
    )
    image7 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639613729/tampa/tampa-9-1_rn7hql.jpg',
        user_id = 3,
        location_id = 9
    )
    image8 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639613729/tampa/tampa-9-2_vupm3r.jpg',
        user_id = 3,
        location_id = 9
    )
    image9 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639613729/tampa/tampa-9-3_kt6ac4.jpg',
        user_id = 3,
        location_id = 9
    )
    image10 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639613729/tampa/tampa-13-1_ippbtc.jpg',
        user_id = 4,
        location_id = 13
    )
    image11 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639613729/tampa/tampa-13-2_xyj2ag.jpg',
        user_id = 4,
        location_id = 13
    )
    image12 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639613729/tampa/tampa-13-3_gnen4f.jpg',
        user_id = 4,
        location_id = 13
    )
    image13 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639613729/tampa/tampa-17-1_ajrpr3.jpg',
        user_id = 5,
        location_id = 17
    )
    image14 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639613729/tampa/tampa-17-2_fa7trc.jpg',
        user_id = 5,
        location_id = 17
    )
    image15 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639613729/tampa/tampa-17-3_wcahuh.jpg',
        user_id = 5,
        location_id = 17
    )
    image16 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639613925/miami/miami-2-1_ofzg38.jpg',
        user_id = 1,
        location_id = 2
    )
    image17 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639613925/miami/miami-2-2_uayza3.jpg',
        user_id = 1,
        location_id = 2
    )
    image18 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639613925/miami/miami-2-3_b8nn1d.jpg',
        user_id = 1,
        location_id = 2
    )
    image19 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639613925/miami/miami-6-1_gdg1z8.jpg',
        user_id = 2,
        location_id = 6
    )
    image20 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639613925/miami/miami-6-2_rboorq.jpg',
        user_id = 2,
        location_id = 6
    )
    image21 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639613925/miami/miami-6-3_neyvte.jpg',
        user_id = 2,
        location_id = 6
    )
    image22 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639613925/miami/miami-10-1_c677dm.jpg',
        user_id = 3,
        location_id = 10
    )
    image23 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639613925/miami/miami-10-2_ufsslf.jpg',
        user_id = 3,
        location_id = 10
    )
    image24 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639613925/miami/miami-10-3_rc3yky.jpg',
        user_id = 3,
        location_id = 10
    )
    image25 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639613925/miami/miami-14-1_mix1io.jpg',
        user_id = 4,
        location_id = 14
    )
    image26 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639613925/miami/miami-14-2_duqkpr.jpg',
        user_id = 4,
        location_id = 14
    )
    image27 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639613925/miami/miami-14-3_xzedxx.jpg',
        user_id = 4,
        location_id = 14
    )
    image28 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639613925/miami/miami-18-1_thusl6.jpg',
        user_id = 5,
        location_id = 18
    )
    image29 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639613925/miami/miami-18-2_nnxoig.jpg',
        user_id = 5,
        location_id = 18
    )
    image30 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639613925/miami/miami-18-3_e5lqre.jpg',
        user_id = 5,
        location_id = 18
    )
    image31 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639614452/charlotte/charlotte-3-1_zzc5cw.jpg',
        user_id = 1,
        location_id = 3
    )
    image32 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639614452/charlotte/charlotte-3-2_hc5jum.jpg',
        user_id = 1,
        location_id = 3
    )
    image33 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639614451/charlotte/charlotte-3-3_pvexf5.jpg',
        user_id = 1,
        location_id = 3
    )
    image34 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639614451/charlotte/charlotte-7-1_vzxq4t.jpg',
        user_id = 2,
        location_id = 7
    )
    image35 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639614451/charlotte/charlotte-7-2_hi6umk.jpg',
        user_id = 2,
        location_id = 7
    )
    image36 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639614451/charlotte/charlotte-7-3_tsb0vm.jpg',
        user_id = 2,
        location_id = 7
    )
    image37 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639614451/charlotte/charlotte-11-1_qq5ip0.jpg',
        user_id = 3,
        location_id = 11
    )
    image38 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639614451/charlotte/charlotte-11-2_b98q1b.jpg',
        user_id = 3,
        location_id = 11
    )
    image39 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639614452/charlotte/charlotte-11-3_aaqlgg.jpg',
        user_id = 3,
        location_id = 11
    )
    image40 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639614452/charlotte/charlotte-15-1_dmdpop.jpg',
        user_id = 4,
        location_id = 15
    )
    image41 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639614452/charlotte/charlotte-15-2_li61xc.jpg',
        user_id = 4,
        location_id = 15
    )
    image42 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639614452/charlotte/charlotte-15-3_c7guip.jpg',
        user_id = 4,
        location_id = 15
    )
    image43 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639614452/charlotte/charlotte-19-1_loxfsu.jpg',
        user_id = 5,
        location_id = 19
    )
    image44 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639614452/charlotte/charlotte-19-2_ltezee.jpg',
        user_id = 5,
        location_id = 19
    )
    image45 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639614452/charlotte/charlotte-19-3_wbptpl.jpg',
        user_id = 5,
        location_id = 19
    )
    image46 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639614625/charleston/charlotte-4-1_n0oavz.jpg',
        user_id = 1,
        location_id = 4
    )
    image47 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639614625/charleston/charlotte-4-2_kpthnn.jpg',
        user_id = 1,
        location_id = 4
    )
    image48 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639614625/charleston/charlotte-4-3_v4ujb2.jpg',
        user_id = 1,
        location_id = 4
    )
    image49 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639614625/charleston/charlotte-8-1_lpnkp3.jpg',
        user_id = 2,
        location_id = 8
    )
    image50 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639614625/charleston/charlotte-8-2_w0ml87.jpg',
        user_id = 2,
        location_id = 8
    )
    image51 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639614625/charleston/charlotte-8-3_qbk3m0.jpg',
        user_id = 2,
        location_id = 8
    )
    image52 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639614625/charleston/charlotte-12-1_wvmvwt.jpg',
        user_id = 3,
        location_id = 12
    )
    image53 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639614625/charleston/charlotte-12-2_jhjzvo.jpg',
        user_id = 3,
        location_id = 12
    )
    image54 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639614625/charleston/charlotte-12-3_sr5bfm.jpg',
        user_id = 3,
        location_id = 12
    )
    image55 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639614625/charleston/charlotte-16-1_w8tahf.jpg',
        user_id = 4,
        location_id = 16
    )
    image56 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639614625/charleston/charlotte-16-2_kwmgce.jpg',
        user_id = 4,
        location_id = 16
    )
    image57 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639614625/charleston/charlotte-16-3_kylzme.jpg',
        user_id = 4,
        location_id = 16
    )
    image58 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639614625/charleston/charlotte-20-1_nennmq.jpg',
        user_id = 5,
        location_id = 20
    )
    image59 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639614625/charleston/charlotte-20-2_lhbzou.jpg',
        user_id = 5,
        location_id = 20
    )
    image60 = Image(
        image_url = 'https://res.cloudinary.com/duscvhetx/image/upload/v1639614625/charleston/charlotte-20-3_jhmhgt.jpg',
        user_id = 5,
        location_id = 20
    )

    db.session.add(image1)
    db.session.add(image2)
    db.session.add(image3)
    db.session.add(image4)
    db.session.add(image5)
    db.session.add(image6)
    db.session.add(image7)
    db.session.add(image8)
    db.session.add(image9)
    db.session.add(image10)
    db.session.add(image11)
    db.session.add(image12)
    db.session.add(image13)
    db.session.add(image14)
    db.session.add(image15)
    db.session.add(image16)
    db.session.add(image17)
    db.session.add(image18)
    db.session.add(image19)
    db.session.add(image20)
    db.session.add(image21)
    db.session.add(image22)
    db.session.add(image23)
    db.session.add(image24)
    db.session.add(image25)
    db.session.add(image26)
    db.session.add(image27)
    db.session.add(image28)
    db.session.add(image29)
    db.session.add(image30)
    db.session.add(image31)
    db.session.add(image32)
    db.session.add(image33)
    db.session.add(image34)
    db.session.add(image35)
    db.session.add(image36)
    db.session.add(image37)
    db.session.add(image38)
    db.session.add(image39)
    db.session.add(image40)
    db.session.add(image41)
    db.session.add(image42)
    db.session.add(image43)
    db.session.add(image44)
    db.session.add(image45)
    db.session.add(image46)
    db.session.add(image47)
    db.session.add(image48)
    db.session.add(image49)
    db.session.add(image50)
    db.session.add(image51)
    db.session.add(image52)
    db.session.add(image53)
    db.session.add(image54)
    db.session.add(image55)
    db.session.add(image56)
    db.session.add(image57)
    db.session.add(image58)
    db.session.add(image59)
    db.session.add(image60)

    db.session.commit()


def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
