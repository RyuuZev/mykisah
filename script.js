document.addEventListener('DOMContentLoaded', () => {

    const novelsData = [
        {
            id: 'novel-1',
            title: 'Firefly',
            author: 'pasya',
            synopsis: 'Caelus, seorang Trailblazer dari Astral Express, tiba di Penacony, planet hibu' +
                    'ran yang penuh gemerlap dan misteri, bersama Dan Heng dan March 7th. Mereka da' +
                    'tang unutk menyelidiki Stellaron yang bikin kacau.',
            content: `
              <p>Caelus, seorang Trailblazer dari Astral Express, tiba di Penacony—planet hiburan yang penuh gemerlap dan misteri—bersama Dan Heng dan March 7th. Mereka dateng buat nyelidikin Stellaron yang bikin chaos di “Dreamscape” Penacony. Suasana penuh lampu neon, musik jazz, dan orang-orang yang hanyut dalam mimpi indah. Tapi Caelus ngerasa ada yang nggak beres di balik kemewahan ini.</p>
              <p>Di Golden Hour, area paling ramai di Penacony, Caelus nyasar ke taman kecil yang sepi. Di sana, dia liat seorang cewek berambut perak dengan gradasi hijau, duduk di bangku sambil megang balon kecil berbentuk bintang. Cewek itu Firefly, anggota Stellaron Hunters yang lagi nyamar. Caelus nggak tau identitas aslinya, tapi dia ngerasa tertarik sama aura lembut dan melankolis Firefly.</p>
              <p>“Hai, balonnya lucu,” sapa Caelus santai, nyoba buka obrolan. Firefly kaget, tapi senyum kecil muncul di wajahnya. “Oh, ini… cuma suvenir. Kamu dari mana? Nggak kayak turis biasa,” tanya Firefly, matanya yang biru-hijau memperhatikan Caelus dengan penasaran. Mereka ngobrol ringan, dan Caelus ngerasa nyaman sama Firefly—ada perasaan hangat yang nggak bisa dia jelasin.</p>
              <p>Hari-hari berikutnya, Caelus sama Firefly sering ketemu “tanpa sengaja” di Penacony. Firefly ngajak Caelus jalan-jalan ke spot-spot kecil yang nggak terlalu ramai, kayak rooftop bar dengan pemandangan langit Penacony yang penuh bintang holografik. “Aku suka tempat kayak gini… bikin tenang,” kata Firefly, sambil nyanyi lagu pelan yang bikin Caelus takjub.</p>
              <p>Hari-hari berikutnya, Caelus sama Firefly sering ketemu “tanpa sengaja” di Penacony. Firefly ngajak Caelus jalan-jalan ke spot-spot kecil yang nggak terlalu ramai, kayak rooftop bar dengan pemandangan langit Penacony yang penuh bintang holografik. “Aku suka tempat kayak gini… bikin tenang,” kata Firefly, sambil nyanyi lagu pelan yang bikin Caelus takjub.</p>
              <p>Tapi konflik Stellaron di Penacony makin panas. Caelus akhirnya tau kalo Firefly adalah Stellaron Hunter—anggota kelompok yang seharusnya jadi musuh. Di Dreamscape, Firefly transformasi jadi SAM, armor mecha yang kuat, buat lawan musuh bareng Caelus. Meskipun awalnya Caelus bingung, dia liat ketulusan Firefly yang rela taruhin nyawa buat orang lain. “Aku nggak bisa milih hidupku, tapi aku pilih buat bantu orang yang aku sayang,” kata Firefly, matanya berkaca-kaca.</p>
              <p>Caelus pegang tangan Firefly, bilang, “Aku nggak peduli siapa kamu di masa lalu. Aku cuma tau, aku nggak mau kehilangan kamu.” Momen itu jadi titik balik—mereka mulai saling percaya dan melindungi satu sama lain di tengah bahaya Penacony.</p>
              <p>Setelah pertarungan besar melawan Sunday, bos Penacony yang nyoba kendaliin Dreamscape, Caelus sama Firefly berhasil selamatin banyak orang, tapi Firefly terluka parah. Di momen kritis, Firefly ceritain penyakitnya, Entropy Loss Syndrome, yang bikin dia nggak bisa hidup lama. “Aku takut… tapi bertemu kamu bikin aku ngerasa hidup,” katanya lemah.</p>
              <p>Caelus, dengan mata berkaca, bilang, “Aku bakal cari cara buat nyembuhin kamu. Aku janji.” Dia bawa Firefly ke Astral Express, dan bareng Pom-Pom sama Himeko, mereka cari solusi. Setelah berbulan-bulan, Welt nemuin teknologi dari Jarilo-VI yang bisa stabilin kondisi Firefly. Saat Firefly sembuh, Caelus ajak dia ke dek observasi Express, di bawah langit penuh bintang.</p>
              <p>“Firefly, dari pertama ketemu kamu di Penacony, aku tau kamu spesial. Aku… aku cinta kamu,” kata Caelus, tangannya gemetaran. Firefly tersenyum, pipinya merona, dan jawab, “Aku juga cinta kamu, Caelus. Terima kasih udah kasih aku alasan buat hidup.” Mereka pelukan, dan bintang-bintang jadi saksi cinta mereka.</p>
              <p>Setahun kemudian, Caelus sama Firefly mutusin buat nikah. Mereka pilih Astral Express sebagai tempat pernikahan—tempat yang jadi saksi perjuangan mereka bareng. March 7th jadi wedding planner dadakan, Dan Heng bantu dekorasi, dan Himeko jadi pendeta (meskipun cuma pura-pura). Pom-Pom malah jadi pembawa acara dengan topi kecil lucu.</p>
              <p>Firefly pake gaun putih sederhana dengan aksen bunga holografik, rambut peraknya dikasih hiasan kecil berbentuk bintang. Caelus pake jas hitam dengan mantel khas Trailblazer-nya, gugup tapi bahagia. Pas ijab kabul, Caelus bilang, “Aku janji bakal jaga kamu, di tiap galaksi yang kita jelajahi.” Firefly, dengan mata berkaca, jawab, “Aku juga, Caelus. Selamanya.”</p>
              <p>Pernikahan itu kecil tapi hangat, cuma dihadiri kru Express sama beberapa temen dari Penacony. Setelah upacara, mereka dansa di bawah langit holografik, dengan lagu yang pernah Firefly nyanyiin pas pertama ketemu. “Kamu bikin hidupku kayak mimpi yang nggak mau aku bangun,” bisik Firefly. Caelus cuma tersenyum, nyium keningnya, dan mereka lanjut petualangan sebagai suami istri.</p>
              <p style="text-align: justify;">
        <img src="https://cdn.donmai.us/original/2f/05/__trailblazer_firefly_and_caelus_honkai_and_1_more_drawn_by_feint721__2f05d73c9bf9b7897e3b1cdb1e1efe4b.jpg"
             alt="Caefly"
             style="max-width: 400px; height: auto; margin: 10px 0;">
            `
        }, {
            id: 'novel-2',
            title: 'Stelle and Remi Card',
            author: 'Caelusya',
            synopsis: 'Stelle, Trailblazer dari Astral Express, lagi jalan-jalan di Golden Hour, Pena' +
                    'cony, pasca misi Stellaron selesai. Dia nyasar ke kasino mewah yang penuh lamp' +
                    'u neon dan suara tawa.',
            content: `
                <p>Stelle, Trailblazer dari Astral Express, lagi jalan-jalan di Golden Hour, Penacony, pasca misi Stellaron selesai. Dia nyasar ke kasino mewah yang penuh lampu neon dan suara tawa. Di salah satu meja blackjack, dia liat Aventurine—anggota IPC (Interastral Peace Corporation) yang terkenal suka taruhan—lagi main dengan senyum licik. Aventurine, dengan jaket hijau toska dan topi khasnya, langsung ngajak Stelle. “Trailblazer, mau coba? Aku dengar kamu orangnya pemberani,” goda Aventurine, matanya yang ungu-biru berkilat penuh percaya diri.</p>
                <p>Stelle, yang emang nggak suka kalah, duduk di depan Aventurine. “Ayo, tapi jangan nangis kalo kalah,” balas Stelle sambil nyengir. Meja blackjack mereka jadi pusat perhatian—dua orang dengan aura kuat, satu penuh keberuntungan, satu penuh keberanian. Dealer bagi kartu: Stelle dapet 10 dan 8 (total 18), Aventurine dapet 9 dan 5 (total 14). Aventurine tarik kartu lagi, dapet 6—total 20. Stelle nyengir, “18-20, masih aman. Aku stand.” Aventurine cuma tersenyum tipis, “Keren, tapi ini baru awal.”</p>
                <p>Ronde kedua, Stelle dapet Ace dan 7 (soft 18), Aventurine dapet 10 dan 4 (total 14). Aventurine tarik lagi, dapet 8—bust, 22! Stelle menang ronde ini, dan chip-nya nambah. Dia ngerasa di atas angin. “Kayaknya keberuntungan IPC nggak cukup lawan aku, ya?” canda Stelle, matanya berbinar. Aventurine cuma ketawa pelan, “Jangan terlalu percaya diri, Trailblazer. Permainan belum selesai.”</p>
                <p>Ronde ketiga, taruhan dinaikin. Aventurine bilang, “Kalo aku menang, kamu harus nurut satu permintaanku. Kalo kamu menang, aku kasih semua chip ini—cukup buat beli apapun di Penacony.” Stelle setuju, ngerasa dia bakal menang lagi. Kartu dibagi: Stelle dapet 9 dan 8 (total 17), Aventurine dapet 10 dan 2 (total 12). Aventurine tarik kartu—dapet 3 (total 15), tarik lagi—dapet 6, total 21! Blackjack! Stelle kaget, “Apa?! Kok bisa pas banget?"</p>
                <p>Stelle ngerasa ada yang aneh. Dia liat Aventurine nyengir lelet, tangannya mainin chip dengan santai. Tiba-tiba, dia sadar—dealer yang bagi kartu tadi matanya nggak fokus, kayak orang yang dihipnotis. Aventurine ternyata udah atur semuanya! Dia pake kemampuan manipulatifnya—mungkin lewat teknologi IPC atau trik psikologis—buat pastiin kartu yang keluar sesuai rencananya. Aventurine adalah mastermind di balik permainan ini, dan Stelle baru sadar dia udah masuk jebakan.</p>
                <p>Stelle kalah, chip-nya diserahin ke Aventurine. “Aku kalah… ya Tuhan, apa yang bakal kamu minta? Jangan bilang aku harus jadi budak IPC atau apa gitu,” kata Stelle, wajahnya pucat, mikir Aventurine bakal minta sesuatu yang gila. Aventurine ketawa kecil, trus berdiri, mendekat ke Stelle, dan bilang dengan suara lembut, “Tenang, Trailblazer. Aku cuma mau… kamu jadi pacarku.”</p>
                <p>Stelle membelalak, mulutnya terbuka lelet. “Hah?! Pacar?! Serius?! Aku kira kamu bakal minta sesuatu yang aneh-aneh!” Aventurine nyengir, “Aneh? Menurutku ini cukup wajar. Lagipula, aku suka orang yang berani kayak kamu.” Stelle, meskipun kaget, nggak nolak. Dia malah ngerasa jantungnya berdebar—nggak nyangka Aventurine punya sisi manis di balik sikapnya yang licik. “Yaudah… aku nggak nolak, sih. Tapi jangan atur-atur aku kayak tadi, ya!” kata Stelle, pipinya merona.</p>
                <p>Mereka jalan bareng keluar kasino, tangan Aventurine megang tangan Stelle dengan lembut. “Aku tau kamu nggak gampang ditaklukkan, makanya aku pake cara ini,” kata Aventurine sambil nyengir. Stelle cuma nyengir balik, “Dasar licik. Tapi… lumayan lah, dapet pacar yang pinter main kartu.” Mereka ketawa bareng, dan di bawah langit holografik Penacony, hubungan baru dimulai—dari meja blackjack menuju petualangan yang lebih seru.</p>

            `
        }, {
            id: 'novel-3',
            title: 'Rover VS ???',
            author: 'Muhammad Rover Asam asam',
            synopsis: 'Langit Rinascita membara, awan kelam berputar di atas reruntuhan kuil kuno yan' +
                    'g diterangi kilat Tacet Discord. Rover berdiri tegak, pedang resonansi di tang' +
                    'annya bergetar, siap menghadapi Fleurdelys—seorang Ascendant elite yang dikena' +
                    'l sebagai "Pedang Penghancur Jiwa.',
            content: `
            <p>Langit Rinascita membara, awan kelam berputar di atas reruntuhan kuil kuno yang diterangi kilat Tacet Discord. Rover berdiri tegak, pedang resonansi di tangannya bergetar, siap menghadapi Fleurdelys—seorang Ascendant elite yang dikenal sebagai "Pedang Penghancur Jiwa." Fleurdelys, dengan armor peraknya yang berkilau dan mata merah menyala, menatap Rover dengan dingin. “Kau pikir bisa menghentikan kehancuran ini, Resonator? Kau hanyalah debu di hadapan takdir!” serunya, suaranya menggema bagai petir.</p>
            <p>Rover nggak mundur. Dia udah nyusun strategi berhari-hari—mempelajari pola serangan Fleurdelys dari cerita penduduk, memperkirakan situasi, dan menyiapkan berbagai cara buat lawan. Pertarungan dimulai. Fleurdelys bergerak cepat, pedang raksasanya membelah udara, menciptakan gelombang kejut yang menghancurkan pilar-pilar kuil. Rover menghindar dengan gesit, menggunakan resonansi Tacet buat ningkatin kecepatannya, tapi tekanan serangan itu bikin tanah di bawahnya retak.</p>
            <p>Rover mencoba berbagai cara. Dia pertama pake serangan jarak jauh—melemparkan proyeksi energi resonansi ke arah Fleurdelys, tapi Ascendant itu memblokir dengan perisai energi hitam. “Lemah!” ejek Fleurdelys, lalu melesat maju, pedangnya nyaris membelah tubuh Rover. Dengan sigap, Rover berguling ke samping, lalu nyusun strategi baru—dia manfaatin reruntuhan sebagai jebakan.</p>
            <p>Rover lari ke balik pilar, nyanyi resonansi buat bikin ilusi bayangan dirinya. Fleurdelys tertipu, menghancurkan pilar itu, tapi Rover udah ada di belakangnya, menusuk dengan pedang resonansi. “Aku tau gerakanmu, Ascendant!” teriak Rover. Tapi Fleurdelys cuma tersenyum, tubuhnya tiba-tiba berubah jadi asap hitam, dan serangan baliknya nyaris memenggal kepala Rover. “Kau terlalu naif,” kata Fleurdelys, suaranya penuh hina.</p>
            <p>Rover nggak nyerah. Dia ubah strategi lagi—memperkirakan situasi dengan lebih hati-hati. Dia perhatiin pola serangan Fleurdelys: setiap tiga serangan, ada celah kecil saat Ascendant itu tarik napas. Rover manfaatin ini, serang balik dengan serangan resonansi beruntun, tapi tenaganya mulai habis. Keringat bercucuran, napasnya memburu, dan luka-luka kecil mulai muncul di tubuhnya. “Aku… nggak boleh kalah,” gumam Rover, matanya penuh tekad.</p>
            <p>Pertarungan udah berlangsung berjam-jam. Rover udah nyoba semua strategi—ilusi, serangan jarak jauh, jebakan—tapi Fleurdelys terlalu kuat. Satu serangan telak dari pedang raksasa Ascendant itu akhirnya mengenai bahu Rover, bikin dia terpental ke dinding reruntuhan. Darah mengucur dari luka, pedangnya jatuh, dan tubuhnya gemetar. “Ini akhirnya, Resonator,” kata Fleurdelys, melangkah perlahan dengan pedang terangkat, siap menghabisi.</p>
            <p>Rover terduduk, napasnya terengah-engah, visi mulai buram. Dia ngerasa kekuatan resonansinya melemah, Tacet Discord di sekitar mulai nyanyi lagu kematian. “Aku… gagal?” gumamnya, tangannya mencoba meraih pedang, tapi tenaga udah nggak ada. Fleurdelys berdiri di depannya, mata merahnya penuh kemenangan. “Kau nggak bisa ubah takdir, anak manusia,” katanya, pedangnya mulai turun.</p>
            <p>Tiba-tiba, resonansi aneh terasa di udara. Sebuah Tacet Mark di tangan Rover bersinar terang, memancarkan energi yang belum pernah dia rasain sebelumnya. Flashback singkat muncul di pikirannya—saat Jinhsi, pemimpin Jinzhou, bilang, “Resonansi terkuat datang dari hati yang nggak menyerah, Rover.” Energi itu membanjiri tubuhnya, menyembuhkan luka-lukanya, dan membangkitkan kekuatan baru. “Aku… nggak akan kalah!” teriak Rover, matanya menyala emas.</p>
            <p>Fleurdelys kaget, tapi udah terlambat. Rover ternyata mastermind sejak awal—semua perjuangannya, semua “kegagalan” tadi, adalah bagian dari rencana. Dia sengaja tunjukin kelemahan buat bikin Fleurdelys lengah, sambil nyanyi resonansi pelan-pelan buat nyedot energi Tacet Discord di sekitar. Sekarang, dengan kekuatan penuh, Rover bangkit, pedangnya bergetar dengan energi emas yang menyilaukan.</p>
            <p>Rover melesat cepat, pedangnya membelah udara dengan suara mengaum. Fleurdelys coba ngeblok, tapi serangan Rover terlalu kuat—setiap tebasan pedangnya bikin Ascendant itu mundur, armor peraknya retak. “Apa… ini?!” teriak Fleurdelys, kewalahan sama kecepatan dan kekuatan Rover. Rover manfaatin semua strategi yang udah dia pikirin—ilusi, serangan balik, dan jebakan—dalam satu kombo mematikan.</p>
            <p>Fleurdelys nyoba kabur jadi asap hitam, tapi Rover udah prediksi. Dia nyanyi resonansi terakhir, menciptakan gelombang energi yang nge-lock ruang, bikin Fleurdelys nggak bisa kabur. “Ini… mustahil!” teriak Ascendant itu, matanya penuh ketakutan. Rover melompat tinggi, pedangnya menyala terang, dan dengan satu teriakan penuh emosi, “Ini akhirnya, Fleurdelys!”—dia menusuk pedangnya tepat ke jantung Ascendant itu.</p>
            <p>Darah hitam membuncah dari tubuh Fleurdelys, armornya hancur, dan tubuhnya ambruk ke tanah. Napasnya terengah-engah, matanya yang merah perlahan memudar. Saat dia terbaring sekarat, flashback muncul di pikirannya—zaman dia masih manusia, seorang gadis kecil yang lari dari The Lament, bersumpah buat jadi kuat biar nggak kehilangan orang yang dia sayang. “Aku… cuma mau… melindungi…” gumamnya, suaranya penuh penyesalan, sebelum matanya tertutup selamanya.</p>
            <p>Rover berdiri di samping tubuh Fleurdelys, napasnya masih memburu, pedangnya berdarah hitam. Kilat menyambar di langit Rinascita, hujan mulai turun, membasahi wajahnya yang penuh luka. “Aku tau… kau juga punya alasan,” kata Rover pelan, matanya penuh simpati, tapi tekadnya nggak goyah. Dia berbalik, langkahnya berat tapi penuh kemenangan, siap menghadapi tantangan berikutnya di dunia yang penuh luka ini.</p>
            <p>Hujan terus turun, membasuh darah dan puing-puing pertarungan. Di kejauhan, suara Tacet Discord mereda, seolah alam ikut menghormati perjuangan Rover. Dia udah buktiin—bahkan di titik terendah, resonansi hati yang nggak menyerah bisa ubah takdir.</p>
`
        }, {
            id: 'novel-4',
            title: 'Unknown',
            author: 'Caelusya',
            synopsis: 'Unknown',
            content: `
            
            `
        }
    ];

    const novelListContainer = document.getElementById('novelList');
    if (novelListContainer) {
        const novelGrid = novelListContainer.querySelector('.novel-grid');
        novelGrid.innerHTML = '';

        novelsData.forEach(novel => {
            const novelCard = document.createElement('div');
            novelCard
                .classList
                .add('novel-card');
            novelCard.innerHTML = `
                <h3>${novel.title}</h3>
                <p class="author">Penulis: ${novel.author}</p>
                <p class="synopsis">${novel.synopsis}</p>
                <a href="novel.html?id=${novel.id}" class="read-more">Baca Selengkapnya</a>
            `;
            novelGrid.appendChild(novelCard);
        });
    }

    // --- Fungsionalitas Halaman Detail Novel (novel.html) ---
    const novelContentContainer = document.getElementById('novelContent');
    if (novelContentContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const novelId = urlParams.get('id');

        const novel = novelsData.find(n => n.id === novelId);

        if (novel) {
            document
                .getElementById('novelTitle')
                .textContent = novel.title;
            document
                .getElementById('novelDetailTitle')
                .textContent = novel.title;
            document
                .getElementById('novelDetailAuthor')
                .textContent = novel.author;
            document
                .getElementById('novelDetailText')
                .innerHTML = novel.content;
        } else {
            document
                .getElementById('novelTitle')
                .textContent = 'Novel Tidak Ditemukan';
            document
                .getElementById('novelDetailTitle')
                .textContent = 'Novel Tidak Ditemukan';
            document
                .getElementById('novelDetailAuthor')
                .textContent = 'N/A';
            document
                .getElementById('novelDetailText')
                .innerHTML = '<p>Maaf, novel yang Anda cari tidak ditemukan. Silakan kembali ke <a href="ind' +
                        'ex.html">halaman utama</a>.</p>';
        }
    }
});
