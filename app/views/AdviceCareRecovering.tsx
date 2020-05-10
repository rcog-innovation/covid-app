import React from "react";
import { ScrollView, Text } from "react-native";
import Paragraph from "../components/typography/Paragraph";
import Button from "../components/typography/Button";
import H2 from "../components/typography/H2";
import H1 from "../components/typography/H1";
import BulletPoints from "../components/typography/BulletPoints";

export default function AdviceCareRecovering() {
  return (
    <ScrollView style={{ padding: 16 }}>
      <H1>
        Advice for services caring for women following isolation for symptoms,
        or recovery from confirmed COVID-19
      </H1>

      <H2>
        5.1 Antenatal care for pregnant women following self-isolation for
        symptoms suggestive of COVID-19
      </H2>

      <Paragraph>
        Scheduled antenatal care that falls within the self-isolation period
        should be rearranged for post-isolation.
      </Paragraph>

      <Paragraph>
        No additional tests, including ultrasound assessment of fetal growth,
        are necessary for women who have not requiried hospitalisation for
        COVID-19.
      </Paragraph>

      <Paragraph>
        If a woman has previously tested negative for COVID-19, and she
        re-presents with symptoms that meet the case definition (section 2),
        COVID-19 should still be suspected (due to the rate of false negative
        results from COVID-19 naso-pharyngeal swabs).
      </Paragraph>

      <H2>
        5.2 Antenatal care for pregnant women following hospitalisation for
        confirmed COVID-19 illness
      </H2>

      <Paragraph>
        At the time of discharge from hospital following a period of care for
        confirmed COVID-19 infection, all women should be prescribed at least 10
        days of prophylactic LMWH.
      </Paragraph>

      <Paragraph>
        For those recovering after acute illness, further antenatal care should
        be arranged for after the period of selfisolation.
      </Paragraph>

      <Paragraph>
        Referral to antenatal ultrasound services for fetal growth surveillance
        is recommended 14 days after resolution of acute illness. Although there
        is no evidence yet that fetal growth restriction (FGR) is a risk of
        COVID-19, two-thirds of pregnancies with SARS were affected by FGR and a
        placental abruption occurred in a MERS case, so ultrasound follow-up
        seems prudent.
      </Paragraph>
      <Button
        url="https://www.england.nhs.uk/mat-transformation/saving-babies/"
        title="Growth Surveillance Recommendation"
      />

      <H2>
        5.3 Postnatal care for pregnant women immediately following
        hospitalisation for confirmed COVID-19 illness
      </H2>

      <Paragraph>
        At the time of discharge from hospital following a period of care for
        confirmed COVID-19, which includes the birth of their baby, all women
        should be prescribed at least 10 days of prophylactic LMWH. This should
        be offered regardless of the mode of birth. A longer course of LMWH
        should be prescribed if indicated by existing guidance.
      </Paragraph>

      <Paragraph>
        Families should be provided with guidance about how to identify signs of
        illness in their newborn or worsening of the woman’s symptoms and
        provided with appropriate contact details if they have concerns or
        questions about their baby’s wellbeing.
      </Paragraph>

      <Paragraph>
        Usual advice about safe sleeping and a smoke free environment should be
        emphasised, along with provision of clear advice about careful hand
        hygiene and infection control measures when caring for and feeding the
        baby
      </Paragraph>

      <Paragraph>
        RCPCH guidance recommends that all families self-isolate at home for 14
        days after birth of a baby to a woman with active COVID-19 infection.
      </Paragraph>

      <Button
        title="RCPCH Guidance"
        url="https://www.rcpch.ac.uk/resources/covid-19-guidance-paediatric-services#working-in-neonatal-settings"
      />

      <Paragraph>
        Postnatal care should continue according to the recommended schedule,
        where safe to do so. Maternity services should offer a combination of
        face-to-face and remote postnatal follow-up, according to the woman and
        baby’s needs. For example, women with hypertensive diseases of pregnancy
        may require face-to-face reviews, particularly if they don’t have access
        to home blood pressure monitoring. If the baby is of low birth weight,
        premature or where there any concerns about feeding, face to face
        appointments will be needed in order to weigh and examine the baby
        fully.
      </Paragraph>

      <Paragraph>
        Where is it essential that women receive a face-to-face review in the
        community, midwives are advised to wear appropriate PPE and follow
        social distancing and infection control guidance. In order to reduce the
        exposure of midwives to risk of infection, for home visits other members
        of the household should be asked not to be present in the room when the
        midwife is examining the woman and her baby
      </Paragraph>

      <Button
        title="PPE Guidance"
        url="https://www.gov.uk/government/publications/wuhan-novel-coronavirus-infection-prevention-and-control/covid-19-personal-protective-equipment-ppe"
      />
    </ScrollView>
  );
}
