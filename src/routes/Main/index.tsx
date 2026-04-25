"use client";

import { Section } from "@/components";
import CoreLayout from "@/layout";
import COVER from "./../../assets/img/cover.png";
import PROFILE from "./../../assets/img/profile.jpeg";
import {
  CoverWrapper,
  CoverPicture,
  CoverCard,
  CoverDescription,
  ProfilePicture,
  CoverTitle,
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
          </CoverCard>
        </CoverWrapper>
      </Section>
      <Section>
        <p>Sample Text</p>
      </Section>
      <Section variant="tertiary">
        <CoverWrapper>
          <ProfilePicture src={PROFILE.src} />
          <CoverDescription></CoverDescription>
        </CoverWrapper>
      </Section>
    </CoreLayout>
  );
}
