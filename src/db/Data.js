import logoMaskapai from "./logo";
export const bandara = [
  {
    bandara_kode: "CGK",
    bandara_nama: "Soekarno Hatta",
  },
  {
    bandara_kode: "TKG",
    bandara_nama: "Raden Inten II",
  },
  {
    bandara_kode: "SRG",
    bandara_nama: "Jenderal Ahmad Yani",
  },
  {
    bandara_kode: "SUB",
    bandara_nama: "Juanda",
  },
  {
    bandara_kode: "YOG",
    bandara_nama: "Adi Sucipto",
  },
];

export const maskapai = [
  {
    maskapai_id: "QG/CTV",
    maskapai_nama: "Citilink",
    maskapai_logo: logoMaskapai.citilink,
  },
  {
    maskapai_id: "JT/LNI",
    maskapai_nama: "Lion Air",
    maskapai_logo: logoMaskapai.lion,
  },
  {
    maskapai_id: "SJ/SJY",
    maskapai_nama: "Sriwijaya Air",
    maskapai_logo: logoMaskapai.sriwijaya,
  },
  {
    maskapai_id: "ID/BTK",
    maskapai_nama: "Batik Air",
    maskapai_logo: logoMaskapai.batik,
  },
  {
    maskapai_id: "QZ/AWQ",
    maskapai_nama: "Air Asia",
    maskapai_logo: logoMaskapai.airasia,
  },
  {
    maskapai_id: "TKG/RDN",
    maskapai_nama: "Raden Inten II",
    maskapai_logo: logoMaskapai.radin,
  },
];

export const jadwal = [
  {
    jadwal_id: 11,
    bandara_kode_keberangkatan: "CGK",
    bandara_kode_tujuan: "TKG",
    maskapai_id: "ID/BTK",
  },
  {
    jadwal_id: 12,
    bandara_kode_keberangkatan: "TKG",
    bandara_kode_tujuan: "CGK",
    maskapai_id: "TKG/RDN",
  },
  {
    jadwal_id: 13,
    bandara_kode_keberangkatan: "SUB",
    bandara_kode_tujuan: "YOG",
    maskapai_id: "QG/CTV",
  },
  {
    jadwal_id: 14,
    bandara_kode_keberangkatan: "SRG",
    bandara_kode_tujuan: "CGK",
    maskapai_id: "QZ/AWQ",
  },
  {
    jadwal_id: 15,
    bandara_kode_keberangkatan: "YOG",
    bandara_kode_tujuan: "SUB",
    maskapai_id: "SJ/SJY",
  },
];
