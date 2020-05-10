import React from "react";
import { ScrollView, Linking } from "react-native";
import Paragraph from "../components/typography/Paragraph";
import Button from "../components/typography/Button";
import H2 from "../components/typography/H2";
import H1 from "../components/typography/H1";

export default function Introduction() {
  return (
    <ScrollView style={{ margin: 16 }}>
      <H1>Introduction</H1>

      <Paragraph>
        The following advice is provided as a resource for UK healthcare
        professionals based on a combination of available evidence, good
        practice and expert advice. The priorities are:
      </Paragraph>

      <Paragraph style={{ marginHorizontal: 16 }}>
        1. The reduction of transmission of COVID-19 to pregnant women.
        {"\n"}2. The provision of safe care to pregnant women with
        suspected/confirmed COVID-19.
      </Paragraph>

      <Paragraph>
        Please be aware that this is very much an evolving situation and this
        guidance is a living document that is being updated as new information
        becomes available. We therefore suggest that you visit this page
        regularly for current advice.
      </Paragraph>

      <Paragraph>
        SARS-CoV-2 is a new coronavirus, and therefore the evidence currently
        available to guide clinical management in this specific situation is of
        low quality. Using a conventional grading system for guideline
        development, such as SIGN, many of the studies would be classed as level
        3 or 4 (non-analytical studies e.g. case series/reports and expert
        opinion). The advice based on this evidence would therefore be graded D,
        and in some cases, graded as good practice points. Clinicians and
        patients are advised to be aware of the low quality evidence on which
        the advice is made, when using this guidance to assist decision-making.
        We are currently updating this guidance weekly in line with newly
        available evidence.
      </Paragraph>

      <Paragraph>
        On Friday 20 March 2020, the UK Obstetric Surveillance System (UKOSS)
        launched a registry for all women admitted to UK hospitals with
        confirmed COVID-19 infection in pregnancy. Further information can be
        found here:
      </Paragraph>

      <Button
        url="https://www.npeu.ox.ac.uk/ukoss/current-surveillance/covid-19-in-pregnancy#case-definition"
        title="UKOSS"
      />

      <Paragraph>
        This guidance will be kept under regular review as new evidence emerges.
        If you would like to suggest additional areas for this guidance to
        cover, any clarifications required or to submit new evidence for
        consideration, please email COVID-19@rcog.org.uk. Please note, we will
        not be able to give individual clinical advice or information for
        specific organisational requirements via this email address.
      </Paragraph>

      <Button url="mailto:COVID-19@rcog.org.uk" title="Email us" />

      <H2>The virus</H2>

      <Paragraph>
        Novel coronavirus (SARS-COV-2) is a new strain of coronavirus causing
        COVID-19, first identified in Wuhan City, China. Other human coronavirus
        (HCoV) infections include HCoV 229E, NL63, OC43 and HKU1, which usually
        cause mild to moderate upper-respiratory tract illnesses like the common
        cold, Middle East Respiratory Syndrome (MERS-CoV) and Severe Acute
        Respiratory Syndrome (SARS-CoV).
      </Paragraph>

      <H2>Epidemiology</H2>

      <Paragraph>
        The virus appears to have originated in Hubei province in China towards
        the end of 2019. Within Europe, Italy and Spain are the countries
        currently most affected. The World Health Organization (WHO) publishes a
        daily international situation report with an additional Situation
        Dashboard illustrating information by individual countries. The total
        number of confirmed cases in the UK is published by the Department of
        Health and Social Care, and is available in a visual dashboard.
      </Paragraph>

      <Button
        url="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports"
        title="WHO International Situation Report"
      />

      <Button url="https://covid19.who.int/" title="WHO Situation Dashboard" />

      <Button
        url="https://www.gov.uk/guidance/coronavirus-covid-19-information-for-the-public"
        title="UK Total Cases"
      />

      <Button
        url="https://coronavirus.data.gov.uk/"
        title="UK Visual Dashboard"
      />

      <Paragraph>
        This situation however is changing rapidly. For the most up-to-date
        advice please consult local health protection agencies. Health
        protection in the United Kingdom is a devolved matter and links to local
        guidance are available for England, Wales, Scotland and Northern
        Ireland.
      </Paragraph>

      <Button
        url="https://www.gov.uk/government/collections/wuhan-novel-coronavirus"
        title="England"
      />

      <Button
        url="https://phw.nhs.wales/news/public-health-wales-statement-on-novel-coronavirus-outbreak/"
        title="Wales"
      />

      <Button
        url="https://www.hps.scot.nhs.uk/a-to-z-of-topics/covid-19"
        title="Scotland"
      />

      <Button
        url="https://www.publichealth.hscni.net/news/covid-19-what-situation-northern-ireland"
        title="Northern Ireland"
      />

      <Paragraph>
        Public Health England (PHE) and Public Health Scotland (PHS) have been
        cited throughout this document; specific guidance from the other areas
        of the UK will be updated as they become available. At the time of
        writing, Public Health Wales are aligning with PHE on case definitions,
        assessment, infection prevention and control and testing. We will update
        the RCOG guidance if this changes.
      </Paragraph>

      <H2>Transmission</H2>

      <Paragraph>
        Most cases of COVID-19 globally have evidence of human to human
        transmission. This virus can be readily isolated from respiratory
        secretions, faeces and fomites. There are two routes by which COVID-19
        can be spread. The first is directly through close contact with an
        infected person (within 2 metres) where respiratory secretions can enter
        the eyes, mouth, nose or airways. This risk increases the longer someone
        has close contact with an infected person who has symptoms. The second
        route is indirectly via the touching of a surface, object or the hand of
        an infected person contaminated with respiratory secretions and
        subsequently touching one’s own mouth, nose or eyes. Healthcare
        providers are recommended to employ strict infection prevention and
        control (IPC) measures, as per local Health Protection guidance.
      </Paragraph>

      <Button
        url="https://www.gov.uk/government/publications/wuhan-novel-coronavirus-infection-prevention-and-control"
        title="Health Protection guidance"
      />

      <Paragraph>
        Pregnant women do not appear more likely to contract the infection than
        the general population. Pregnancy itself alters the body’s immune system
        and response to viral infections in general, which can occasionally
        cause more severe symptoms. This will be the same for COVID-19.
      </Paragraph>

      <Paragraph>
        With regard to vertical transmission (transmission from woman to her
        baby antenatally or intrapartum), emerging evidence now suggests that
        vertical transmission is probable, although the proportion of
        pregnancies affected and the significance to the neonate has yet to be
        determined. Two reports have published evidence of IgM for SARS-COV-2 in
        neonatal serum at birth.2,3 Since IgM does not cross the placenta, this
        is likely to
      </Paragraph>

      <Paragraph>
        represent a neonatal immune response to in utero infection. Previous
        case reports from China suggested that there was no evidence for this
        and amniotic fluid, cord blood, neonatal throat swabs, placenta swabs,
        genital fluid and breastmilk samples from COVID-19 infected women and
        their babies have so far all tested negative for the virus.
      </Paragraph>

      <Paragraph>
        The evidence above is all based on small numbers of cases. The situation
        may change and we will continue to monitor outcomes. MBRRACE-UK have
        recently commenced centralised, real-time monitoring of affected women
        admitted to hospital, and their babies, through UKOSS. The data from
        these reports will be included in future versions of this guideline.
      </Paragraph>

      <H2>Effect on pregnant women</H2>

      <Paragraph>
        There is evolving evidence within the general population that there
        could be a cohort of asymptomatic individuals or those with very minor
        symptoms that are carrying the virus, although the incidence is unknown.
        Most women will experience only mild or moderate cold/flu like symptoms.
        Cough, fever, shortness of breath, headache and anosmia are other
        relevant symptoms.
      </Paragraph>

      <Paragraph>
        It has long been known that, whilst pregnant women are not necessarily
        more susceptible to viral illness, changes to their immune system in
        pregnancy can be associated with more severe symptoms. This is
        particularly true towards the end of pregnancy. The absolute risks are,
        however, small. More severe symptoms such as pneumonia and marked
        hypoxia are widely described with COVID-19 in older people, the
        immunosuppressed and those with long-term conditions such as diabetes,
        cancer and chronic lung disease. These same severe symptoms could occur
        in pregnant women and so should be identified and treated promptly.
      </Paragraph>

      <Paragraph>
        There have been case reports of women with severe COVID at the time of
        birth who have required ventilation and extracorporeal membrane
        oxygenation. A single case report has been published in scientific
        literature of a maternal death and intrauterine fetal death at 30 weeks’
        gestation. These deaths, which occurred in Iran, were directly
        attributed to COVID-19.
      </Paragraph>

      <Paragraph>
        Two cases series have recently been published by clinicians in New York.
        The first describes 43 women who tested positive for COVID-19 and showed
        a similar pattern of disease severity to non-pregnant adults: 86% mild,
        9% severe and 5% critical, although the sample size was too small to
        draw a definitive conclusion and the comparison not made to age, sex or
        co-morbidity-matched individuals. The second describes the results of
        screening all 215 women who attended two paired maternity units for
        labour and birth over a 2 week period. Of these, 15.4% of women tested
        positive for SARS-CoV-2 from naso-pharyngeal swabs on attendance to the
        hospital. Most were asymptomatic; only 4 (1.9%) had symptoms of COVID-19
        on attendance and 3 others developed fever or possible symptoms during
        their inpatient stay. In the UK, the Intensive Care National Audit and
        Research Centre weekly report on individuals admitted to critical care
        with COVID-19 was updated on 10 April 2020, describing the first 3,883
        patients admitted to critical care settings with a diagnosis of
        COVID-19, ten were pregnant and 13 recently pregnant (within the last
        six weeks). The rate of current/recent pregnancy amongst all individuals
        admitted to critical care (2.3%) remains similar to the reported rate
        for non-COVID viral pneumonia during 2017-19 (3.3%), although the number
        of people admitted is higher for all groups. Other reported cases of
        COVID-19 pneumonia in pregnancy are milder and with good recovery.
      </Paragraph>

      <Paragraph>
        Individual responses to viral infection are different for different
        pregnant women and for different viruses. However, influenza and
        pregnancy provides a useful comparator: data from Australia, examining
        critical illness in pregnancy and the postpartum period due to the
        infection H1N1, identified significant increases in critical illness in
        later pregnancy, compared with early pregnancy. In other types of
        coronavirus infection (SARS, MERS), the risks to pregnant women appear
        to increase in particular during the last trimester of pregnancy. In at
        least one study, there was an increased risk of preterm birth being
        indicated for maternal medical reasons after 28 weeks’ gestation.
      </Paragraph>

      <Paragraph>
        Given that pregnancy is known to be a hypercoagulable state, and
        emerging evidence suggests that individuals admitted to hospital with
        COVID-19 are also hypercoagulable, it follows that infection with
        COVID-19 is likely to be associated with an increased risk of maternal
        venous-thromboembolism. Reduced mobility resulting from self-isolation
        at home, or hospital admission, is likely to increase the risk further.
      </Paragraph>

      <H2>Effect on the fetus</H2>

      <Paragraph>
        There are currently no data suggesting an increased risk of miscarriage
        or early pregnancy loss in relation to COVID-19. Case reports from early
        pregnancy studies with SARS and MERS do not demonstrate a convincing
        relationship between infection and increased risk of miscarriage or
        second trimester loss.
      </Paragraph>

      <Paragraph>
        There is no evidence currently that the virus is teratogenic. Very
        recent evidence has, however, suggested that it is probable that the
        virus can be vertically transmitted, although the proportion of
        pregnancies affected and the significance to the neonate has yet to be
        determined.
      </Paragraph>

      <Paragraph>
        There are case reports of preterm birth in women with COVID-19, but it
        is unclear whether this was iatrogenic in every case, or whether some
        were spontaneous. Iatrogenic birth was predominantly for maternal
        indications related to the viral infection, although there was evidence
        of fetal compromise and prelabour preterm rupture of the membranes in at
        least one report.
      </Paragraph>
    </ScrollView>
  );
}
