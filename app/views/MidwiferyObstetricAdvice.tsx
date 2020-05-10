import React from "react";
import { ScrollView, Text } from "react-native";
import Paragraph from "../components/typography/Paragraph";
import Button from "../components/typography/Button";
import H2 from "../components/typography/H2";
import H1 from "../components/typography/H1";
import BulletPoints from "../components/typography/BulletPoints";

export default function MidwiferyObstetricAdvice() {
  return (
    <ScrollView style={{ padding: 16 }}>
      <H1>
        Advice for all midwifery and obstetric services caring for pregnant
        women
      </H1>

      <H2>Reducing the transmission of COVID-19 in maternity settings</H2>

      <Paragraph>
        Most women attending maternity services are healthy and are advised to
        maintain stringent social distancing. It is recognised that women may
        have significant anxiety about the possibility of contracting COVID-19
        by attending maternity services, particularly where located in
        hospitals. It is important that maternity services do all they can to
        protect women from contracting COVID-19 during their maternity care by
        following PHE infection prevention and control guidance stringently and
        using appropriate PPE.
      </Paragraph>

      <Button
        url="https://www.england.nhs.uk/coronavirus/secondary-care/infection-control/"
        title="PHE Infection Guidance"
      />

      <Button
        url="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/879107/T1_poster_Recommended_PPE_for_healthcare_workers_by_secondary_care_clinical_context.pdf"
        title="Appropriate PPE"
      />

      <Paragraph>
        Particular consideration should be given to the care of pregnant women
        with comorbidities who are ‘shielded’. These women should be provided
        with a mask during hospital visits. Their status should be clearly noted
        at any handover; shared waiting areas should be avoided; and if admitted
        they should be in a side room.
      </Paragraph>

      <Button url="Guidance on Shielding" title="Guidance on Shielding" />

      <H2>
        General advice regarding the continued provision of antenatal and
        postnatal services
      </H2>

      <Paragraph>
        The situation is currently moving very fast and reconfiguration of
        services is likely to be necessary. At present, the following is
        recommended:
      </Paragraph>

      <BulletPoints>
        <Text>
          Antenatal and postnatal care is based on years of evidence to keep
          women and babies safe in pregnancy and birth. Antenatal and postnatal
          care should therefore be regarded as essential care and women should
          be encouraged to attend, despite being advised to otherwise engage
          with social distancing measures.
        </Text>
        <>
          <Text>
            Women should be advised to attend routine antenatal care unless they
            meet current self-isolation guidance for individuals and households
            of individuals with symptoms of new continuous cough or fever. 22
            Maternity care has been shown repeatedly to be essential, and
            studies in the UK and internationally have shown that if women do
            not attend antenatal services they are at increased risk of maternal
            death, stillbirth, and other adverse perinatal outcomes.
          </Text>
          <Button
            url="https://www.gov.uk/government/publications/covid-19-stay-at-home-guidance/stay-at-home-guidance-for-households-with-possible-coronavirus-covid-19-infection"
            title="Households w. possible infection"
          />
        </>
        <>
          <Text>
            Units should rapidly seek to adopt teleconferencing and
            videoconferencing capability and consider what appointments can be
            conducted remotely. We hope to issue further guidance on this soon.
            14 The NHS has provided guidance on the relaxation of information
            governance requirements for video calling.
          </Text>
          <Button
            url="https://www.nhsx.nhs.uk/covid-19-response/data-and-information-governance/information-governance/"
            title="NHSX Advice"
          />
        </>
        <Text>Record keeping remains paramount.</Text>
        <Text>
          Electronic record systems should be used and, where remote access for
          staff or women is an available function, this should be expedited.
          When seeing women face-to- face, simultaneous electronic documentation
          will facilitate future remote consultation.
        </Text>
        <>
          <Text>
            Units should appoint a group of clinicians to coordinate care for
            women forced to miss appointments due to self-isolation. Women
            should be able to notify the unit of their self-isolation through
            telephone numbers that are already available to them. Appointments
            should then be reviewed for urgency and either converted to remote
            appointments, attendance appropriately advised or deferred.
          </Text>
          <BulletPoints>
            <Text>
              For women who have had symptoms, appointments can be deferred
              until 7 days after the start of symptoms, unless symptoms (aside
              from persistent cough) persevere.
            </Text>
            <Text>
              For women who are self-isolating because someone in their
              household has possible symptoms of COVID-19, appointments should
              be deferred for 14 days.
            </Text>
          </BulletPoints>
          <Button
            url="https://www.gov.uk/government/publications/covid-19-stay-at-home-guidance/stay-at-home-guidance-for-households-with-possible-coronavirus-covid-19-infection"
            title="Stay at Home Advice"
          />
        </>
        <Text>
          Units should have a system to flag women who have missed serial
          appointments, which is a particular risk for women with small children
          who may become sequentially unwell.
        </Text>
        <Text>
          Any woman who has a routine appointment delayed for more than 3 weeks
          should be contacted and an appointment scheduled urgently.
        </Text>
        <Text>
          Pregnant women will continue to need at least as much support, advice,
          care and guidance in relation to pregnancy, childbirth and early
          parenthood as before the pandemic. It is important that care is
          available to ensure continued support for women with multiple complex
          needs. Women living with adversity including poverty, homelessness,
          substance misuse, being an asylum seeker, experiencing domestic abuse
          and mental health problems will continue to require timely expert
          support.
        </Text>
        <Text>
          Individualised plans for women requiring frequent review may be
          necessary
        </Text>
        <Text>
          Visitor restrictions, including for women admitted to maternity
          services for antenatal and postnatal care, are in place in most
          settings across the UK. Midwifery, obstetric and support staff should
          be aware, as they normally are, of the support needs for all women and
          the practical challenges of caring for newborns after birth.{" "}
        </Text>
      </BulletPoints>

      <H2>
        General advice regarding possible service modifications during COVID-19
      </H2>

      <Paragraph>
        Service modifications may be required to assist women practising social
        distancing measures, to reduce the risk of transmission between women,
        staff and other clinic/hospital visitors and to provide care to women
        who are self-isolating for suspected/confirmed COVID-19.
      </Paragraph>

      <Paragraph>
        Units should identify areas where there are clear possibilities for
        rationalisation of services.
      </Paragraph>

      <Paragraph>Particular possibilities include:</Paragraph>

      <BulletPoints>
        <Text>
          Reducing induction of labour for indications that are not strictly
          necessary.
        </Text>
        <Text>
          Improving outpatient provision of induction of labour, depending on
          availability of transport to hospital.
        </Text>
        <>
          <Text>
            Reducing routine growth scans where this is not for a strict
            guidance-based indication. Additional modified guidance is available
            for services in England in the Saving Babies’ Lives Care Bundle,
            appendix G.
          </Text>
          <Button
            url="https://www.england.nhs.uk/mat-transformation/saving-babies/"
            title="Saving Babies Bundle"
          />
        </>
      </BulletPoints>

      <Paragraph>
        We are developing, together with a wide range of co-authors, a series of
        guidance documents to assist maternity units with changes to services
        that they provide, which may occur during the COVID-19 pandemic. These
        are available on the RCOG website and include:
      </Paragraph>
      <BulletPoints>
        <Text>Guidance for early pregnancy services.</Text>
        <Text>Guidance for antenatal and postnatal services.</Text>
        <Text>
          Guidance for antenatal screening (including screening ultrasound).
        </Text>
        <Text>Guidance for fetal medicine services.</Text>
        <Text>Guidance for maternal medicine clinics.</Text>
        <Text>
          Guidance for self-monitoring of blood pressure in pregnancy (for women
          with hypertensive disorders of pregnancy).
        </Text>
        <Text>Guidance for midwifery-led birth settings</Text>
      </BulletPoints>
      <Button
        url="https://www.rcog.org.uk/en/guidelines-research-services/guidelines/coronavirus-pregnancy/"
        title="RCOG Website"
      />

      <H2>General advice regarding intrapartum services</H2>

      <BulletPoints>
        <Text>
          Intrapartum services should be provided in a way that is safe, with
          reference to minimum staffing requirements and the ability to provide
          emergency obstetric, anaesthetic and neonatal care where needed.
        </Text>
        <>
          <Text>
            Women should be permitted and encouraged to have a birth partner
            present with them during their labour and birth. A single,
            asymptomatic birth partner should be permitted to stay with the
            woman, at a minimum, through labour and birth, unless the birth
            occurs under general anaesthetic. Having a trusted birth partner
            present throughout labour is known to make a significant difference
            to the safety and well-being of women in childbirth.
          </Text>
          <BulletPoints>
            <Text>
              When a woman contacts the maternity unit in early labour, she
              should be asked about whether she or her birth partner have had
              any symptoms which could suggest COVID-19 in the preceding seven
              days. If her partner has had onset of symptoms in the last seven
              days, the woman should be advised that her partner should not
              attend the unit with her and she should consider bringing another
              birth partner who is symptom free. Explain the need to protect
              maternity staff and other women and families from the risk of
              infection.
            </Text>
            <Text>
              On attendance to the maternity unit, all birth partners should
              also be asked whether they have had any symptoms which could
              suggest COVID-19 in the preceding seven days. If the onset of
              these symptoms was seven days or less ago, or they still have
              symptoms (other than persistent cough), they should be asked to
              leave the maternity unit immediately and self-isolate at home.{" "}
            </Text>
            <>
              <Text>
                The symptoms to ask about are: fever, acute persistent cough,
                hoarseness, nasal discharge/ congestion, shortness of breath,
                sore throat, wheezing or sneezing.
              </Text>
              <Button
                url="https://www.gov.uk/government/publications/wuhan-novel-coronavirus-initial-investigation-of-possible-cases/investigation-and-initial-clinical-management-of-possible-cases-of-wuhan-novel-coronavirus-wn-cov-infection"
                title="Symptoms"
              />
            </>
            <Text>
              Birth partners who are not symptomatic of COVID-19 should be asked
              to remain by the woman’s bedside and to not walk around the
              ward/hospital. We recommend they be given clear advance guidance
              on what is expected of them should they need to accompany the
              woman to the operating theatre (e.g. for caesarean birth). This is
              particularly important given the challenges of staff communication
              when wearing full PPE.
            </Text>
          </BulletPoints>
        </>
      </BulletPoints>

      <H2>Smoking cessation and carbon monoxide monitoring in pregnancy</H2>

      <Paragraph>
        Smoking is very likely to be associated with more severe disease in
        COVID-19, although current evidence does not accurately estimate the
        effect. This risk should be included when counselling women about the
        need to stop smoking as soon as possible during pregnancy.
      </Paragraph>

      <Paragraph>
        The National Centre for Smoking Cessation and Training (NCSCT) has
        recommended that carbon monoxide monitoring during pregnancy be paused,
        as a precautionary measure following concern about the risk of
        coronavirus transmission.
      </Paragraph>

      <Paragraph>
        All women should still be asked about their smoking status at antenatal
        appointments, and if smoking, be referred to (telephone-based) stop
        smoking services on an opt out basis. Nicotine replacement therapy
        should be offered and household members who smoke can also be signposted
        to support. Further guidance is available, including in Appendix H of
        the Saving Babies’ Lives Care Bundle for England.
      </Paragraph>

      <Button
        url="https://www.ncsct.co.uk/usr/pub/COVID-19%20bulletin%2018:03:20.pdf"
        title="NCSCT Further Guidance"
      />
      <Button
        url="https://www.england.nhs.uk/mat-transformation/saving-babies/"
        title="Saving Babies Bundle"
      />

      <H2>Maternal mental wellbeing</H2>

      <Paragraph>
        This pandemic will inevitably result in an increased amount of anxiety
        in the general population, and this is likely to be even more so for
        pregnant women as pregnancy represents an additional period of
        uncertainty. Specifically, these anxieties are likely to revolve around:
      </Paragraph>

      <BulletPoints>
        <Text>COVID-19 itself,</Text>

        <Text>
          The impact of social isolation resulting in reduced support from wider
          family and friends,
        </Text>
        <Text>The potential of reduced household finances,</Text>
        <Text>
          Major changes in antenatal and other NHS care, including appointments
          being changed from face-toface to telephone contact.
        </Text>
      </BulletPoints>

      <Paragraph>
        Isolation, bereavement, financial difficulties, insecurity and inability
        to access support systems are all widely recognised risk factors for
        mental ill-health. The coronavirus epidemic also increases the risk of
        domestic violence.34 Additional advice regarding support for victims of
        domestic violence during the COVID-19 pandemic is available here:
      </Paragraph>

      <Button
        url="https://www.gov.uk/government/publications/coronavirus-covid-19-and-domestic-abuse/coronavirus-covid-19-support-for-victims-of-domestic-abuse"
        title="Support - Victims Of Domestic Abuse"
      />

      <Paragraph>
        The change in appointment style will also make assessment for women
        experiencing domestic violence, women with safeguarding concerns, women
        who are misusing substances and women with complex mental health
        difficulties more challenging. If identified, the usual referrals should
        still be made to appropriate services.
      </Paragraph>

      <Paragraph>
        Simply by acknowledging these difficulties, healthcare professionals can
        help to contain some of these anxieties.
      </Paragraph>

      <Paragraph>
        Women should be asked about mental health at every contact. Women who
        require support should be signposted to resources which can be remotely
        provided, where possible. This includes accessing:
      </Paragraph>

      <BulletPoints>
        <>
          <Text>Sources of self-help for anxiety and stress</Text>
          <Button
            url="https://www.nhs.uk/oneyou/every-mind-matters/"
            title="NHS Every Mind Matters"
          />
        </>
        <Text>
          When necessary, women in England can self-refer to local IAPT
          (Improving Access to Psychological Therapies) services
        </Text>
        <>
          <Text>
            In Scotland, advice is available from Parentclub and NHS Inform.
            Further information from the RCPsych website.
          </Text>
          <Button
            url="https://www.parentclub.scot/articles/mental-health-advice-soon-be-and-new-parents-during-coronavirus"
            title="Parentclub"
          />
          <Button
            url="https://www.nhsinform.scot/illnesses-and-conditions/infections-and-poisoning/coronavirus-covid-19/your-mental-wellbeing/coronavirus-covid-19-your-mental-wellbeing#finding-support"
            title="NHS Inform"
          />
          <Button
            url="https://www.rcpsych.ac.uk/about-us/responding-to-covid-19/responding-to-covid-19-guidance-for-clinicians/community-and-inpatient-services/covid-19-working-with-vulnerable-patients"
            title="RCPsych website"
          />
        </>
      </BulletPoints>
    </ScrollView>
  );
}
