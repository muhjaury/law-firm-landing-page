"use client";

import { Button, Section } from "@/components";
import CoreLayout from "@/layout";
import COVER from "./../../assets/img/cover.png";
import PROFILE from "./../../assets/img/profile.jpeg";
import UP_RIGHT from "./../../assets/img/up-right.png";
import {
  ButtonArrow,
  ButtonDescription,
  CoverCard,
  CoverDescription,
  CoverPicture,
  CoverTitle,
  CoverWrapper,
  ProfilePicture,
} from "./main.styled";

export default function Main() {
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
            <Button>
              <ButtonDescription>Hubungi Kami</ButtonDescription>
              <ButtonArrow src={UP_RIGHT.src} />
            </Button>
          </CoverCard>
        </CoverWrapper>
      </Section>
      <Section>
        <p>Sample Text</p>
      </Section>
      <Section variant="secondary">
        <CoverWrapper>
          <ProfilePicture src={PROFILE.src} />
          <CoverDescription></CoverDescription>
        </CoverWrapper>
      </Section>
    </CoreLayout>
  );
}
