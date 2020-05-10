import React from "react";
import { ScrollView, Text } from "react-native";
import Paragraph from "../components/typography/Paragraph";
import Button from "../components/typography/Button";
import H2 from "../components/typography/H2";
import H1 from "../components/typography/H1";
import BulletPoints from "../components/typography/BulletPoints";

export default function AdviceToShare() {
  return (
    <ScrollView style={{ margin: 16 }}>
      <H1>Advice for health professionals to share with pregnant women</H1>

      <H2>General advice</H2>

      <Paragraph>
        As a pregnant woman the news that you were placed in a ‘vulnerable
        group’ by the UK Government on Monday 16 March 2020 may have caused you
        concern.
      </Paragraph>

      <Paragraph>
        The evidence to date is that pregnant women are still no more likely to
        contract the infection than the general population. What is known is
        that pregnancy, in a small proportion of women, can alter the body’s
        response to severe viral infections. This is something that midwives and
        obstetricians have known for many years and are used to dealing with.
      </Paragraph>

      <Paragraph>
        What has driven the decisions made by officials is the need to restrict
        spread of illness. This is because if the number of infections were to
        rise sharply, the number of severely infected pregnant women could also
        rise, potentially putting them in danger
      </Paragraph>

      <Paragraph>Our general advice is that:</Paragraph>

      <BulletPoints>
        <Text>
          If you are infected with COVID-19 you are still most likely to have no
          symptoms or a mild illness from which you will make a full recovery.
        </Text>
        <Text>
          If you develop more severe symptoms or your recovery is delayed, this
          may be a sign that you are developing a more significant chest
          infection that requires enhanced care. Our advice remains that if you
          feel your symptoms are worsening or if you are not getting better, you
          are recommended to contact the NHS on 111 (or a local alternative), or
          your maternity unit, or in an emergency 999, straight away for further
          information and advice.
        </Text>
      </BulletPoints>

      <H2>Advice regarding social distancing and self-isolation</H2>

      <Paragraph>
        The UK Government has decided that, given the limited information
        currently available about how COVID-19 could affect pregnancy, it would
        be prudent for pregnant women to stringently engage with social
        distancing measures to reduce the risk of infection.
      </Paragraph>

      <Paragraph>
        All pregnant women, regardless of gestation, should observe the social
        distancing and self-isolation guidance available on the Government
        website. Advice includes the avoidance of contact with people who are
        known to have COVID-19 or those who exhibit possible symptoms:
      </Paragraph>

      <Button
        url="https://www.gov.uk/government/publications/covid-19-guidance-on-social-distancing-and-for-vulnerable-people"
        title="All vulnerable people"
      />

      <Button
        url="https://www.gov.uk/government/publications/covid-19-stay-at-home-guidance/stay-at-home-guidance-for-households-with-possible-coronavirus-covid-19-infection"
        title="Individuals/households w. symptoms"
      />

      <Button
        url="https://www.gov.uk/government/news/major-new-measures-to-protect-people-at-highest-risk-from-coronavirus"
        title="People at highest risk"
      />

      <Paragraph>
        People at highest risk includes pregnant women with significant heart
        disease (congenital or acquired) or any individuals with specific
        cancers, severe respiratory conditions (such as cystic fibrosis and
        severe asthma) and those with rare diseases and inborn errors of
        metabolism that significantly increase the risk of infections (such as
        sickle cell disease).
      </Paragraph>

      <Paragraph>
        Women above 28 weeks’ gestation are recommended to be particularly
        attentive to social distancing and minimising contact with others.
      </Paragraph>

      <Paragraph>
        Specific recommendations regarding going to work have been published
        separately on the RCOG website
      </Paragraph>

      <Button
        url="https://www.rcog.org.uk/en/guidelines-research-services/guidelines/coronavirus-pregnancy/"
        title="RCOG Website"
      />

      <H2>
        Advice regarding your appointments or urgent visits to clinics and
        hospitals
      </H2>

      <Paragraph>
        If you are well at the moment and have had no complications in your
        previous pregnancies, the following practical advice may be helpful:
      </Paragraph>

      <BulletPoints>
        <Text>
          If you have a routine scan or visit due in the coming days, please
          contact your maternity unit for advice and to agree a plan. You may
          still be advised to attend for a visit, but this appointment may
          change due to staffing requirements.
        </Text>
        <Text>
          If you are between appointments, please wait to hear from your
          maternity team.
        </Text>
        <Text>
          If you are advised to attend for a scan or an appointment by your
          local maternity team, this is because the need for the appointment is
          greater than your risk of being exposed to COVID-19. Antenatal care is
          essential to support you in having a healthy pregnancy and so we
          strongly advise you do attend if asked to do so. If you have any
          concerns about this, please discuss with your maternity unit.
        </Text>
      </BulletPoints>

      <Paragraph>
        If you are attending more regularly in pregnancy, then your maternity
        team will be in touch with plans for further appointments, as required.
      </Paragraph>

      <Paragraph>
        Whatever your personal situation please consider the following:
      </Paragraph>

      <BulletPoints>
        <Text>
          Maternity care is essential and has been developed over many years to
          reduce complications in pregnant women and babies. The risks of not
          attending antenatal care include harm to you, your baby or both of
          you, even in the context of coronavirus. It is important that you keep
          in contact with your maternity team and continue to attend your
          scheduled routine care when you are well.
        </Text>
        <Text>
          If you are concerned about your or your baby’s wellbeing, including
          the baby’s movements, it remains of critical importance that you seek
          advice and care from maternity services without delay. This is a very
          challenging time, particularly if you have concerns about your
          pregnancy and are worried about entering a hospital. Maternity units
          are doing everything they can to minimise the spread of coronavirus
          infection to healthy women and their babies, including restricting
          access to visitors, using appropriate protection equipment and
          infection control measures. It is very important not to be deterred
          from coming into hospital when you or your baby need care. If you have
          an urgent problem related to your pregnancy but not related to
          coronavirus, get in touch using the same emergency contact details you
          already have.
        </Text>
        <Text>
          If you or anyone in your household has symptoms of COVID-19, please
          contact your maternity team and they will arrange the right place and
          time to come for your visits. You should not attend a routine clinic,
          unless specific arrangements have been made.
        </Text>
        <Text>
          You will be asked to come alone to clinical appointments, or keep the
          number of people with you to one (including midwifery visits in your
          home). This will include being asked not to bring your children with
          you to appointments. This is important in order to protect maternity
          staff, other women and babies, and you and your family from the risk
          of infection.
        </Text>
        <Text>
          There may be a need to reduce the number of antenatal visits you have.
          This will be communicated with you, and will be done as safely as
          possible, taking into account available evidence on the safe number of
          visits required. Please attend all your scheduled appointments, and if
          you have concerns about this please discuss with your maternity team.
        </Text>
      </BulletPoints>

      <Paragraph>
        At this time, it is particularly important that you help your maternity
        team take care of you. If you have had an appointment cancelled or
        delayed and are not sure of your next contact with your maternity team,
        please let them know by using the contact numbers provided to you at
        booking.
      </Paragraph>
    </ScrollView>
  );
}
