"use client";

import { Section } from "@/components";
import CoreLayout from "@/layout";
import {
  AboutMeWrapper,
  ProfileDescription,
  ProfilePicture,
} from "./main.styled";
import PROFILE from "./../../assets/img/profile.jpeg";

export default function Main() {
  return (
    <CoreLayout>
      <Section variant="secondary">
        <AboutMeWrapper>
          <ProfilePicture src={PROFILE.src} />
          <ProfileDescription>
            <h1>Main Page</h1>
            <p>Welcome to the main page of the application.</p>
            <h1>Main Page</h1>
            <p>Welcome to the main page of the application.</p>
            <h1>Main Page</h1>
            <p>Welcome to the main page of the application.</p>
            <h1>Main Page</h1>
            <p>Welcome to the main page of the application.</p>
            <h1>Main Page</h1>
            <p>Welcome to the main page of the application.</p>
            <h1>Main Page</h1>
            <p>Welcome to the main page of the application.</p>
            <h1>Main Page</h1>
            <p>Welcome to the main page of the application.</p>
            <h1>Main Page</h1>
            <p>Welcome to the main page of the application.</p>
            <h1>Main Page</h1>
            <p>Welcome to the main page of the application.</p>
            <h1>Main Page</h1>
          </ProfileDescription>
        </AboutMeWrapper>
      </Section>
      <Section>
        <h1>Main Page</h1>
        <p>Welcome to the main page of the application.</p>
        <h1>Main Page</h1>
        <p>Welcome to the main page of the application.</p>
        <h1>Main Page</h1>
        <p>Welcome to the main page of the application.</p>
        <h1>Main Page</h1>
        <p>Welcome to the main page of the application.</p>
        <h1>Main Page</h1>
        <p>Welcome to the main page of the application.</p>
        <h1>Main Page</h1>
        <p>Welcome to the main page of the application.</p>
        <h1>Main Page</h1>
        <p>Welcome to the main page of the application.</p>
        <h1>Main Page</h1>
        <p>Welcome to the main page of the application.</p>
        <h1>Main Page</h1>
        <p>Welcome to the main page of the application.</p>
        <h1>Main Page</h1>
      </Section>
      <Section variant="secondary">
        <h1>Main Page</h1>
        <p>Welcome to the main page of the application.</p>
        <h1>Main Page</h1>
        <p>Welcome to the main page of the application.</p>
        <h1>Main Page</h1>
        <p>Welcome to the main page of the application.</p>
        <h1>Main Page</h1>
        <p>Welcome to the main page of the application.</p>
        <h1>Main Page</h1>
        <p>Welcome to the main page of the application.</p>
        <h1>Main Page</h1>
        <p>Welcome to the main page of the application.</p>
        <h1>Main Page</h1>
        <p>Welcome to the main page of the application.</p>
        <h1>Main Page</h1>
        <p>Welcome to the main page of the application.</p>
        <h1>Main Page</h1>
        <p>Welcome to the main page of the application.</p>
        <h1>Main Page</h1>
      </Section>
    </CoreLayout>
  );
}
