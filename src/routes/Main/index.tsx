"use client";

import { Button, Section } from "@/components";
import CoreLayout from "@/layout";
import COVER from "./../../assets/img/cover.png";
import EMAIL from "./../../assets/img/email.png";
import PHONE from "./../../assets/img/phone.png";
import LOCATION from "./../../assets/img/location.png";
import PROFILE from "./../../assets/img/profile.jpeg";
import UP_RIGHT from "./../../assets/img/up-right.png";
import {
  ButtonArrow,
  ButtonDescription,
  ContactAddressIcon,
  ContactAddressIconLabelWrapper,
  ContactAddressValue,
  ContactAddressWrapper,
  ContactFormWrapper,
  ContactWrapper,
  CoverCard,
  CoverDescription,
  CoverPicture,
  CoverTitle,
  CoverWrapper,
  ProfileCard,
  ProfileDescriptionDescription,
  ProfileDescriptionTitle,
  ProfileDescriptionWrapper,
  ProfilePicture,
  ProfileWrapper,
  SectionTitle,
  SectionTitleWrapper,
  ServicesCard,
  ServicesDescription,
  ServicesTitle,
  ServicesWrapper,
  StatisticCard,
  StatisticDescription,
  StatisticTitle,
  StatisticWrapper,
} from "./main.styled";

export default function Main() {
  const handleCoverButtonClick = () => {
    window.open(
      "https://wa.me/6282399402547?text=Halo+Saya+ingin+konsultasi+hukum.",
    );
  };

  return (
    <CoreLayout>
      <Section variant="secondary">
        <CoverWrapper>
          <CoverPicture src={COVER.src} />
          <CoverCard>
            <CoverTitle>
              Perlindungan Hukum Terpercaya untuk Ketenangan Anda.
            </CoverTitle>
            <CoverDescription>
              “Dengan pengalaman luas dan integritas tinggi, kami siap
              mendampingi setiap langkah hukum Anda melalui solusi yang tepat
              sasaran dan profesional.”
            </CoverDescription>
            <Button onClick={handleCoverButtonClick}>
              <ButtonDescription>Hubungi Kami</ButtonDescription>
              <ButtonArrow src={UP_RIGHT.src} />
            </Button>
          </CoverCard>
        </CoverWrapper>
      </Section>
      <Section>
        <StatisticWrapper>
          <StatisticCard>
            <StatisticTitle>500+ </StatisticTitle>
            <StatisticDescription>Kasus Selesai</StatisticDescription>
          </StatisticCard>
          <StatisticCard>
            <StatisticTitle>5+ </StatisticTitle>
            <StatisticDescription>Tahun Pengalaman</StatisticDescription>
          </StatisticCard>
        </StatisticWrapper>
      </Section>
      <Section variant="secondary" id="tentang-kami">
        <SectionTitleWrapper>
          <SectionTitle>Tentang Kami</SectionTitle>
        </SectionTitleWrapper>
        <ProfileWrapper>
          <ProfilePicture src={PROFILE.src} />
          <ProfileDescriptionWrapper>
            <ProfileCard>
              <ProfileDescriptionTitle>Profil Singkat</ProfileDescriptionTitle>
              <ProfileDescriptionDescription>
                Kantor Hukum Nuzul Qadriy, S.H. & Rekan adalah firma hukum yang
                bergerak di bidang litigasi dan non-litigasi, dengan fokus pada
                penyelesaian perkara secara efektif, efisien, dan profesional.
                Kami berkomitmen memberikan pelayanan hukum yang mengedepankan
                keadilan, integritas, dan kerahasiaan klien.
              </ProfileDescriptionDescription>
              <ProfileDescriptionTitle>Visi</ProfileDescriptionTitle>
              <ProfileDescriptionDescription>
                Menjadi Kantor Hukum yang mengedepankan integritas dan inovasi
                teknologi dalam memberikan kepastian hukum.
              </ProfileDescriptionDescription>
            </ProfileCard>
          </ProfileDescriptionWrapper>
        </ProfileWrapper>
      </Section>
      <Section id="layanan-kami">
        <SectionTitleWrapper>
          <SectionTitle $variant="secondary">Layanan Kami</SectionTitle>
        </SectionTitleWrapper>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesTitle>Hukum Perdata</ServicesTitle>
            <ServicesDescription>
              Menangani berbagai sengketa perdata seperti wanprestasi,
              perjanjian, dan gugatan hukum lainnya
            </ServicesDescription>
          </ServicesCard>
          <ServicesCard>
            <ServicesTitle>Hukum Pidana</ServicesTitle>
            <ServicesDescription>
              Pendampingan hukum dalam perkara pidana dari penyelidikan hingga
              persidangan
            </ServicesDescription>
          </ServicesCard>
          <ServicesCard>
            <ServicesTitle>Hukum Bisnis</ServicesTitle>
            <ServicesDescription>
              Penyelesaian konflik bisnis, perusahaan, dan perjanjian komersial
            </ServicesDescription>
          </ServicesCard>
          <ServicesCard>
            <ServicesTitle>Hukum Keluarga</ServicesTitle>
            <ServicesDescription>
              Menangani perceraian, warisan, hak asuh anak, dan permasalahan
              keluarga lainnya
            </ServicesDescription>
          </ServicesCard>
        </ServicesWrapper>
        <SectionTitleWrapper>
          <SectionTitle $variant="secondary">
            Mengapa Memilih Kami?
          </SectionTitle>
        </SectionTitleWrapper>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesTitle>Berpengalaman</ServicesTitle>
            <ServicesDescription>
              Kami telah menangani berbagai perkara dengan tingkat keberhasilan
              yang tinggi.
            </ServicesDescription>
          </ServicesCard>
          <ServicesCard>
            <ServicesTitle>Profesional</ServicesTitle>
            <ServicesDescription>
              Tim kami terdiri dari advokat yang kompeten dan berintegritas.
            </ServicesDescription>
          </ServicesCard>
          <ServicesCard>
            <ServicesTitle>Terpercaya</ServicesTitle>
            <ServicesDescription>
              Kami menjaga kerahasiaan klien dan memberikan layanan terbaik.
            </ServicesDescription>
          </ServicesCard>
          <ServicesCard>
            <ServicesTitle>Responsif</ServicesTitle>
            <ServicesDescription>
              Kami siap membantu Anda dengan cepat dan solusi yang tepat.
            </ServicesDescription>
          </ServicesCard>
        </ServicesWrapper>
      </Section>
      <Section id="kontak" variant="tertiary">
        <SectionTitleWrapper>
          <SectionTitle>Hubungi Kami</SectionTitle>
        </SectionTitleWrapper>
        <ContactWrapper>
          <ContactFormWrapper>WA</ContactFormWrapper>
          <ContactAddressWrapper>
            <ContactAddressIconLabelWrapper>
              <ContactAddressIcon src={EMAIL.src} />
              <ContactAddressValue>qadriynuzul7@gmail.com</ContactAddressValue>
            </ContactAddressIconLabelWrapper>{" "}
            <ContactAddressIconLabelWrapper>
              <ContactAddressIcon src={PHONE.src} />
              <ContactAddressValue>+6282399402547</ContactAddressValue>
            </ContactAddressIconLabelWrapper>{" "}
            <ContactAddressIconLabelWrapper>
              <ContactAddressIcon src={LOCATION.src} />
              <ContactAddressValue>
                Jl. Bambu Runcing No.14, Kelurahan Bumi Harapan, Kecamatan
                Bacukiki Barat, Kota Parepare
              </ContactAddressValue>
            </ContactAddressIconLabelWrapper>
          </ContactAddressWrapper>
        </ContactWrapper>
      </Section>
    </CoreLayout>
  );
}
