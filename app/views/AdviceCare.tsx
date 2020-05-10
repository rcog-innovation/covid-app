import React from "react";
import { ScrollView, Text } from "react-native";
import Paragraph from "../components/typography/Paragraph";
import Button from "../components/typography/Button";
import H2 from "../components/typography/H2";
import H1 from "../components/typography/H1";
import BulletPoints from "../components/typography/BulletPoints";
import H3 from "../components/typography/H3";

export default function AdviceCare() {
  return (
    <ScrollView style={{ padding: 16 }}>
      <H1>
        Advice for services caring for women with suspected or confirmed
        COVID-19
      </H1>

      <Paragraph>
        The following advice refers mostly to the care of women in the second or
        third trimesters of pregnancy.
      </Paragraph>

      <Paragraph>
        Specific advice regarding the acute care of pregnant women admitted with
        moderate or severe symptoms of COVID-19 can be found later on this page.
      </Paragraph>

      <Paragraph>
        Care of women in the first trimester should include attention to the
        same infection prevention and investigation/diagnostic guidance as for
        the general population with COVID-19. Separate RCOG guidance is
        available for modifications to early pregnancy services during the
        pandemic.
      </Paragraph>

      <Button
        url="https://www.rcog.org.uk/globalassets/documents/guidelines/2020-04-03-guidance-for-rationalising-early-pregnancy-services-in-the-evolving-coronavirus-covid-19-pandemic.pdf"
        title="Modification - early pregnancy"
      />

      <H2>
        4.1 General advice for services providing care to pregnant women with
        suspected or confirmed COVID-19, where hospital attendance is necessary
      </H2>

      <Paragraph>
        The following suggestions apply to all hospital/clinic attendances for
        women with suspected or confirmed COVID-19:
      </Paragraph>

      <BulletPoints>
        <Text>
          Women should be advised to attend via private transport where
          possible.
        </Text>
        <Text>
          If an ambulance is required, the woman should alert the call handler
          that she is currently in self-isolation for possible or confirmed
          COVID-19 affecting either her or her household contact.
        </Text>
        <Text>
          Women should be asked to alert a member of maternity staff to their
          attendance when on the hospital premises, by telephone, prior to
          entering the hospital.
        </Text>
        <>
          <Text>
            Staff providing care should take personal protective equipment (PPE)
            precautions as per local health protection guidance.
          </Text>
          <Button
            url="https://www.gov.uk/government/publications/wuhan-novel-coronavirus-infection-prevention-and-control"
            title="PPE Guidance"
          />
        </>
        <Text>
          Women should be met at the maternity unit entrance by staff wearing
          appropriate PPE and be provided with a fluid-resistant surgical mask.
          The face mask should not be removed until the woman is isolated in a
          suitable room or cohort bay.
        </Text>
        <>
          <Text>
            Women should immediately be escorted to an isolation room or cohort
            bay/ward, suitable for the majority of care during their hospital
            visit or stay.
          </Text>
          <BulletPoints>
            <Text>
              Isolation rooms or ward bays should ideally have a defined area
              for staff to put on and remove PPE, and suitable bathroom
              facilities.
            </Text>
            <>
              <Text>
                Further advice on care in isolation rooms and COVID-19 cohort
                bays is available from PHE.
              </Text>
              <Button
                url="https://www.gov.uk/government/publications/wuhan-novel-coronavirus-infection-prevention-and-control"
                title="PHE Advice"
              />
            </>
          </BulletPoints>
        </>
        <Text>
          Only essential staff should enter the room and visitors should be kept
          to a minimum.
        </Text>
        <Text>
          All non-essential items from the clinic/scan room should be removed
          prior to the woman’s arrival.
        </Text>
        <>
          <Text>
            All clinical areas used must be cleaned after use, as per health
            protection guidance.
          </Text>
          <Button
            url="https://www.gov.uk/government/publications/wuhan-novel-coronavirus-infection-prevention-and-control"
            title="Health protection guidance"
          />
        </>
      </BulletPoints>

      <H2>
        4.2 Women with unconfirmed COVID-19 but symptoms suggestive of possible
        infection
      </H2>

      <H3>For women who phone maternity services</H3>

      <Paragraph>
        Women may attend maternity units in person, or call maternity services
        by telephone, to report symptoms which are suggestive of COVID-19.
      </Paragraph>

      <Paragraph>
        When women phone maternity services for advice regarding symptoms which
        may be attributed to COVID-19, consider differential diagnoses which
        could otherwise explain fever, cough, shortness of breath or similar.
        This includes, but is not limited to: urinary tract infection,
        chorioamnionitis, pulmonary embolism etc.
      </Paragraph>

      <H3>For women who attend maternity units in person</H3>

      <Paragraph>
        Maternity departments with direct entry for women and the public should
        have a system in place for identifying potential cases at first point of
        contact. This should be before the woman or accompanying visitors take a
        seat in the waiting area.
      </Paragraph>

      <Paragraph>
        Women may attend hospital for reasons directly related to pregnancy and
        also have coincidental symptoms meeting the COVID-19 case definition. In
        cases of uncertainty, seek additional advice or in case of emergency,
        investigate and treat as suspected COVID-19 until advice can be sought.
        Suspected COVID-19 should not delay administration of therapy that would
        be usually given (for example, IV antibiotics in woman with fever and
        prolonged rupture of membranes).
      </Paragraph>

      <Paragraph>
        Women should be tested for COVID-19 if they meet PHE criteria. Current
        criteria (correct at the time of publishing this update) are:
      </Paragraph>

      <Button
        url="https://www.gov.uk/government/publications/wuhan-novel-coronavirus-initial-investigation-of-possible-cases"
        title="PHE Criteria"
      />

      <Paragraph>
        Women who are being/are admitted to hospital with one of the following:
      </Paragraph>

      <BulletPoints>
        <Text>Clinical/radiological evidence of pneumonia,</Text>
        <Text>Acute Respiratory Distress Syndrome (ARDS),</Text>
        <Text>
          Fever ≥37.8 AND at least one of acute persistent cough, hoarseness,
          nasal discharge/congestion, shortness of breath, sore throat, wheezing
          or sneezing.
        </Text>
      </BulletPoints>

      <Paragraph>
        Furthermore, we recommend that women with an isolated fever should be
        investigated and treated according to the unit protocol. This will
        include sending a full blood count. If lymphopenia is identified on the
        full blood count, testing for COVID-19 should also be arranged.
      </Paragraph>

      <Paragraph>
        In the event of a pregnant woman attending with an obstetric emergency
        and being suspected or confirmed to have COVID-19, maternity staff must
        first follow IPC guidance. This includes transferring the woman to an
        isolation room and donning appropriate PPE. This can be time consuming
        and stressful for women, their birth partner and health professionals.
        Once IPC measures are in place, the obstetric emergency should be dealt
        with as the priority. Do not delay obstetric management in order to test
        for COVID-19.
      </Paragraph>

      <Paragraph>
        Until test results are available, the woman with suspected COVID-19
        should be treated as though it is confirmed.
      </Paragraph>

      <H2>4.3 Antenatal care in women who are self-isolating at home</H2>

      <Paragraph>
        Women with mild-moderate symptoms of suspected COVID-19 are advised to
        self-isolate at home, according to government guidelines.
      </Paragraph>

      <Button
        url="https://www.gov.uk/government/publications/covid-19-guidance-on-social-distancing-and-for-vulnerable-people/guidance-on-social-distancing-for-everyone-in-the-uk-and-protecting-older-people-and-vulnerable-adults"
        title="Self Isolation Guidelines"
      />

      <Paragraph>
        The guidance in this section can also be applied to antenatal care for
        women who are self-isolating at home because they live with another
        person who has symptoms indicative of possible COVID-19.
      </Paragraph>

      <H3>4.3.1 Risk of venous-thromboembolism</H3>

      <Paragraph>
        For women who are self-isolating at home, ensure they stay well hydrated
        and are mobile throughout this period. Women who have thromboprophylaxis
        already prescribed should continue taking this. If women are concerned
        about the development of venous thromboembolism (VTE) during a period of
        self-isolation, a clinical review (in person or remotely) should be
        attempted to assess VTE risk, and thromboprophylaxis considered and
        prescribed on a case-by-case basis. If their VTE risk score at booking
        is 3 or more then commencement of prophylactic LMWH should be
        recommended. A prescription can be sent through the post along with a
        video link of how to self-inject, or a video appointment following
        receipt.
      </Paragraph>

      <Paragraph>
        Local procedures should be followed in ensuring the supply of low
        molecular weight heparin (LMWH).
      </Paragraph>

      <H3>
        4.3.2 Managing planned appointments during the self-isolation period
      </H3>

      <Paragraph>
        Routine appointments for women who are self-isolating at home (growth
        scans, oral glucose tolerance test, antenatal community or secondary
        care appointments) should be delayed until after the recommended period
        of self-isolation. Advice to attend more urgent pre-arranged
        appointments (fetal medicine surveillance, high risk maternal secondary
        care) will require a senior decision on urgency and potential
        risks/benefits.
      </Paragraph>

      <Paragraph>
        Trusts/boards are advised to arrange local, robust communication
        pathways for senior maternity staff members to screen and coordinate
        appointments missed due to periods of self-isolation at home.
      </Paragraph>

      <Paragraph>
        If it is deemed that obstetric or midwifery care cannot be delayed until
        after the recommended period of isolation, infection prevention and
        control measures should be arranged locally to facilitate care. Pregnant
        women in self-isolation who need to attend should be contacted by a
        local care coordinator to re-book urgent appointments / scans,
        preferably at the end of the working day.
      </Paragraph>

      <Paragraph>
        If ultrasound equipment is used, this should be decontaminated after use
        in line with guidance.
      </Paragraph>

      <Button
        url="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/877533/Routine_decontamination_of_reusable_noninvasive_equipment.pdf"
        title="Decontamination Guidance"
      />

      <H3>
        4.3.3 Attendance for unscheduled/urgent antenatal care in women with
        suspected or confirmed COVID-19
      </H3>

      <Paragraph>
        When possible, early pregnancy units (EPUs) or maternity triage units
        should provide advice over the telephone. If this requires discussion
        with a senior member of staff who is not immediately available, a return
        call should be arranged as soon as possible.
      </Paragraph>

      <Paragraph>
        Local protocols are required to ensure women currently self-isolating
        are also isolated on arrival to EPUs or maternity triage units and full
        PPE measures are in place for staff (see Section 4.1).
      </Paragraph>

      <Paragraph>
        Medical, midwifery or obstetric care should otherwise be provided as per
        routine.
      </Paragraph>

      <H2>
        4.4 Women who develop new symptoms of COVID-19 during admission
        (antenatal, intrapartum or postnatal).
      </H2>

      <Paragraph>
        There is an estimated incubation period for COVID-19 of 0-14 days (mean
        5-6 days); an infected woman may therefore initially present
        asymptomatically, developing symptoms later during an admission.36
        Health professionals should be aware of this possibility, particularly
        those who regularly measure patient vital signs (e.g. healthcare
        assistants).
      </Paragraph>

      <Paragraph>
        Women with new onset respiratory symptoms, which meet the PHE
        case-definition for suspected COVID-19 (section 2), should be isolated
        with appropriate infection control precautions and investigated for
        possible SARS-COV-2 infection, amongst other differential diagnoses. The
        local Infection Prevention and Control team should be notified.
      </Paragraph>

      <Paragraph>
        Furthermore, we recommend that women with an isolated fever should be
        investigated and treated according to the unit’s protocol. This will
        include sending a full blood count. If lymphopenia is identified on the
        full blood count, or the woman has other symptoms suggestive of
        COVID-19, testing for COVID-19 should be considered.
      </Paragraph>

      <Paragraph>
        Suspected COVID-19 should not delay administration of therapy that would
        otherwise usually be given (for example, IV antibiotics in woman with
        fever and prolonged rupture of membranes).
      </Paragraph>

      <Paragraph>
        Recommended care for women who have moderate to severe symptoms of
        COVID-19 during pregnancy is covered in section 4.6.
      </Paragraph>

      <H2>
        4.5 Women attending for intrapartum care with suspected or confirmed
        COVID-19
      </H2>

      <H3>4.5.1 Attendance in labour</H3>

      <Paragraph>
        All women should be encouraged to call the maternity unit for advice in
        early labour. Women with mild COVID-19 symptoms can be encouraged to
        remain at home (self-isolating) in early (latent phase) labour as per
        standard practice.
      </Paragraph>

      <Paragraph>
        If homebirth or birth in a midwifery-led unit is planned, a discussion
        should be initiated with the woman regarding the potentially increased
        risk of fetal compromise in active phase of labour if infected with
        COVID-19. Attending an obstetric unit, where the baby can be monitored
        using continuous electronic fetal 25 monitoring (EFM), should be
        recommended for birth. When a woman attends the maternity unit, general
        recommendations about hospital attendance apply (see section 4.1).
      </Paragraph>

      <Paragraph>
        Once settled in an isolation room, a full maternal and fetal assessment
        should include:
      </Paragraph>

      <BulletPoints>
        <Text>
          Assessment of the severity of COVID-19 symptoms by the most senior
          available clinician.
        </Text>
        <Text>
          Discussion with a multidisciplinary team (MDT), including an
          infectious diseases or general medical specialist.
        </Text>
        <Text>
          Maternal observations including temperature, respiratory rate and
          oxygen saturations.
        </Text>
        <Text>Confirmation of the onset of labour, as per standard care. </Text>
        <>
          <Text>EFM using cardiotocograph (CTG).</Text>
          <BulletPoints>
            <Text>
              In two Chinese case series, including a total of 18 pregnant women
              infected with COVID-19 and 19 babies (one set of twins), there
              were eight reported cases of fetal compromise.4,7 Given this
              relatively high rate of fetal compromise, continuous EFM in labour
              is currently recommended for all women with COVID-19.
            </Text>
          </BulletPoints>
        </>
        <>
          <Text>
            If the woman attends with a fever, investigate and treat as per RCOG
            guidance on sepsis in pregnancy, but also consider active COVID-19
            as a cause of sepsis and investigate according to PHE guidance (see
            section 2 for COVID-19 case definition).
          </Text>
          <Button
            title="RCOG Sepsis Guidance"
            url="https://www.rcog.org.uk/globalassets/documents/guidelines/gtg_64a.pdf"
          />
          <Button
            title="PHE Guidance"
            url="https://www.gov.uk/government/publications/wuhan-novel-coronavirus-initial-investigation-of-possible-cases/investigation-and-initial-clinical-management-of-possible-cases-of-wuhan-novel-coronavirus-wn-cov-infection"
          />
        </>
      </BulletPoints>

      <Paragraph>
        If there are no concerns regarding the condition of either the woman or
        baby, women who would usually be advised to return home until labour is
        more established, can still be advised to do so, if appropriate
        transport is available.
      </Paragraph>

      <Paragraph>
        Women should be given the usual advice regarding signs and symptoms to
        look out for, but in addition should be told about symptoms that might
        suggest deterioration related to COVID-19 following consultation with
        the medical team (e.g. difficulty in breathing).
      </Paragraph>

      <Paragraph>
        If labour is confirmed, then care in labour should ideally continue in
        the same isolation room.
      </Paragraph>

      <H3>4.5.2 Care in labour</H3>

      <Paragraph>
        Considerations when caring for women in spontaneous or induced labour:
      </Paragraph>

      <BulletPoints>
        <Text>
          When a woman with confirmed or suspected COVID-19 is admitted to the
          maternity suite, the following members of the MDT should be informed:
          consultant obstetrician, consultant anaesthetist, midwife-in-charge,
          consultant neonatologist, neonatal nurse in charge and infection
          control team.
        </Text>
        <Text>
          Efforts should be made to minimise the number of staff members
          entering the room and units should develop a local policy specifying
          essential personnel for emergency scenarios.
        </Text>
        <Text>
          Asymptomatic birth partners should be asked to wash their hands
          frequently. If symptomatic, birth partners should remain in
          self-isolation at home and not attend the unit. Women should be
          advised in advance, to identify an alternative birth partner, should
          the need arise.
        </Text>
        <>
          <Text>
            Maternal observations and assessment should be continued as per
            standard practice, with the addition of hourly oxygen saturations.
          </Text>
          <BulletPoints>
            <Text>
              Aim to keep oxygen saturation more than 94%, titrating oxygen
              therapy accordingly.
            </Text>
          </BulletPoints>
        </>
        <>
          <Text>
            If the woman develops a fever, investigate and treat as per RCOG
            guidance on sepsis in pregnancy, but also consider active COVID-19
            as a cause of sepsis and investigate according to PHE guidance (see
            section 2 for COVID-19 case definition).
          </Text>
          <Button
            title="RCOG Sepsis Guidance"
            url="https://www.rcog.org.uk/globalassets/documents/guidelines/gtg_64a.pdf"
          />
          <Button
            title="PHE Guidance"
            url="https://www.gov.uk/government/publications/wuhan-novel-coronavirus-initial-investigation-of-possible-cases/investigation-and-initial-clinical-management-of-possible-cases-of-wuhan-novel-coronavirus-wn-cov-infection"
          />
        </>
        <Text>
          Given the rate of fetal compromise reported in the two Chinese case
          series, the current recommendation is for continuous electronic fetal
          monitoring in labour
        </Text>
        <Text>
          In case of deterioration in the woman’s symptoms, refer to Section 4.6
          for additional considerations, and make an individual assessment
          regarding the risks and benefits of continuing the labour versus
          proceeding to emergency caesarean birth if this is likely to assist
          efforts to resuscitate the woman
        </Text>
        <Text>
          The neonatal team should be given sufficient notice at the time of
          birth, to allow them to attend and don PPE before entering the
          room/theatre.
        </Text>
        <Text>
          Given a lack of evidence to the contrary, delayed cord clamping is
          still recommended following birth, provided there are no other
          contraindications. The baby can be cleaned and dried as normal, while
          the cord is still intact.
        </Text>
      </BulletPoints>

      <H3>Regarding mode of birth</H3>

      <BulletPoints>
        <Text>
          There is currently no evidence to favour one mode of birth over
          another and therefore mode of birth should be discussed with the
          woman, taking into consideration her preferences and any obstetric
          indications for intervention.
        </Text>
        <Text>
          Mode of birth should not be influenced by the presence of COVID-19,
          unless the woman’s respiratory condition demands urgent intervention
          for birth.
        </Text>
        <Text>
          Where vaginal secretions have been tested for COVID-19, the results
          have been negative.
        </Text>
        <Text>
          The use of birthing pools in hospital should be avoided in suspected
          or confirmed cases, given the risk of infection via faeces
        </Text>
        <>
          <Text>
            When caesarean birth or other operative procedure is advised, follow
            guidance later in this document.
          </Text>
          <BulletPoints>
            <Text>
              For emergency caesarean births, donning PPE is time-consuming.
              This may impact on the decision to delivery interval but it must
              be done. Women and their families should be told about this
              possible delay.
            </Text>
          </BulletPoints>
        </>
        <Text>
          An individualised informed discussion and decision should be made
          regarding shortening the length of the second stage of labour with
          elective instrumental birth in a symptomatic woman who is becoming
          exhausted or hypoxic.
        </Text>
      </BulletPoints>

      <H3>Regarding analgesia</H3>

      <BulletPoints>
        <Text>
          There is no evidence that epidural or spinal analgesia or anaesthesia
          is contraindicated in the presence of coronaviruses. Epidural
          analgesia should therefore be recommended in labour, to women with
          suspected or confirmed COVID-19 to minimise the need for general
          anaesthesia if urgent intervention for birth is needed.
        </Text>
        <>
          <Text>
            Entonox should be used with a single-patient microbiological filter.
            This is standard issue throughout maternity units in the UK.
          </Text>
          <BulletPoints>
            <Text>
              There is no evidence that the use of Entonox is an
              aerosol-generating procedure (AGP).
            </Text>
          </BulletPoints>
        </>
      </BulletPoints>

      <H3>Risk of venous-thromboembolism</H3>

      <BulletPoints>
        <Text>
          Following birth, women should be risk assessed for venous
          thromboembolism.
        </Text>
        <>
          <Text>
            The first dose of LMWH should be administered as soon as possible
            after birth, provided there is no postpartum haemorrhage and
            regional analgesia has not been used.
          </Text>
          <BulletPoints>
            <Text>
              Where regional analgesia has been used, LMWH can be administered 4
              hours after the last spinal injection or removal of the epidural
              catheter.
            </Text>
          </BulletPoints>
        </>
      </BulletPoints>

      <H3>4.5.3 Personal protective equipment for labour</H3>

      <Paragraph>
        General advice from PHE on type and specification of PPE is available
        here. Particular advice from Public Health England on type and
        specification of PPE for different maternity settings is available as
        part of the table here.
      </Paragraph>

      <Button
        url="https://www.gov.uk/government/publications/wuhan-novel-coronavirus-infection-prevention-and-control"
        title="General Advice"
      />
      <Button
        url="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/879107/T1_poster_Recommended_PPE_for_healthcare_workers_by_secondary_care_clinical_context.pdf"
        title="PPE Table"
      />

      <Paragraph>
        Caesarean birth: specific advice on PPE when caring for pregnant women
        with suspected/confirmed COVID-19 requiring Caesarean birth is detailed
        later in this document.
      </Paragraph>

      <H3>4.5.4 Elective (planned) caesarean birth</H3>

      <Paragraph>
        Where women who are currently in a period of self-isolation because of
        suspected COVID-19 in themselves or a household contact, an individual
        assessment should be made to determine whether it is safe to delay
        scheduled appointments for pre-operative care and elective caesarean
        birth. The individualised assessment should consider the urgency of the
        birth, and the risk of infectious transmission to other women,
        healthcare workers and, postnatally, to her baby.
      </Paragraph>

      <Paragraph>
        In cases where elective caesarean birth cannot safely be delayed, the
        general advice for services providing care to women admitted when
        affected by suspected/confirmed COVID-19 should be followed (see Section
        4.1), as should the advice on PPE for caesarean birth (see section 4.7).
      </Paragraph>

      <Paragraph>
        Obstetric management of elective caesarean birth should be according to
        usual practice.
      </Paragraph>

      <H3>4.5.5 Planned induction of labour</H3>

      <Paragraph>
        As for elective caesarean birth, an individual assessment should be made
        regarding the urgency of planned induction of labour for women currently
        in self-isolation because of suspected COVID-19 affecting either 29
        themselves or a household contact. If induction of labour cannot safely
        be delayed, the general advice for services providing care to women
        admitted to hospital when affected by suspected/confirmed COVID-19
        should be followed (see Section 4.1). Women should be admitted into an
        isolation room; in which they should ideally be cared for the entirety
        of their hospital stay.
      </Paragraph>

      <H2>
        4.6 Additional considerations for women with confirmed COVID-19 and
        moderate/severe symptoms
      </H2>

      <Paragraph>
        When pregnant women with moderate or severe signs and symptoms of
        suspected or confirmed COVID-19 infection are being cared for in any
        hospital setting, the following recommendations apply in addition to
        those specified for women with no or mild symptoms:
      </Paragraph>

      <BulletPoints>
        <>
          <Text>
            A MDT planning meeting ideally involving a consultant physician
            (infectious disease specialist where available), consultant
            obstetrician, midwife-in-charge and consultant anaesthetist
            responsible for obstetric care should be arranged urgently. The
            discussion should be shared with the woman. The following should be
            included:
          </Text>
          <BulletPoints>
            <Text>
              Key priorities for medical care of the woman and her baby, and her
              birth preferences.
            </Text>
            <Text>
              Most appropriate location of care (e.g. intensive care unit,
              isolation room in infectious disease ward or other suitable
              isolation room) and lead specialty.
            </Text>
            <Text>
              Concerns among the team regarding special considerations in
              pregnancy, particularly the condition of the baby.
            </Text>
          </BulletPoints>
        </>
        <>
          <Text>
            The priority for medical care should be to stabilise the woman’s
            condition with standard therapies.
          </Text>
          <BulletPoints>
            <>
              <Text>
                A useful summary on supportive care for adults diagnosed with
                COVID-19 has been published by the World Health Organisation
                (WHO)
              </Text>
              <Button
                url="https://www.who.int/publications-detail/clinical-management-of-severe-acute-respiratory-infection-when-novel-coronavirus-(ncov)-infection-is-suspected"
                title="WHO Summary"
              />
            </>
            <>
              <Text>
                Specific guidance on the management of patients with COVID-19
                who are admitted to critical care has now been published by NICE
              </Text>
              <Button
                url="https://www.nice.org.uk/guidance/ng159"
                title="NICE Guidance"
              />
            </>
          </BulletPoints>
        </>
        <>
          <Text>
            Hourly observations should include respiratory rate and oxygen
            saturations, looking for the number and trends.
          </Text>
          <BulletPoints>
            <Text>
              Young fit women can compensate during a deterioration in
              respiratory function and are able to maintain normal oxygen
              saturations before sudden clinical decompensation.
            </Text>
            <Text>
              Signs of decompensation include an increase in oxygen requirements
              or FiO2 > 40%, a respiratory rate of greater than 30, reduction in
              urine output, or drowsiness, even if the saturations are normal.
            </Text>
            <Text>
              Escalate urgently if any signs of decompensation develop in a
              woman who is pregnant or has recently given birth.
            </Text>
            <Text>Titrate oxygen to keep saturations >94%.</Text>
          </BulletPoints>
        </>
        <>
          <Text>
            Radiographic investigations should be performed as for the
            non-pregnant adult; this includes chest X-ray and computerised
            tomography (CT) of the chest.
          </Text>
          <BulletPoints>
            <Text>
              Chest imaging, especially CT chest, is essential for the
              evaluation of the unwell patient with COVID-19 and should be
              performed when indicated, and not delayed because of fetal
              concerns.
            </Text>
            <Text>
              Abdominal shielding can be used to protect the fetus as per normal
              protocols.
            </Text>
          </BulletPoints>
        </>
        <Text>
          Consider additional investigations to rule out differential diagnoses
          e.g. ECG, CTPA, echocardiogram.
        </Text>
        <>
          <Text>
            Do not assume all pyrexia is due to COVID-19 and also perform full
            sepsis-six screening.
          </Text>
          <BulletPoints>
            <Text>
              Consider bacterial infection if the white blood cell count is
              raised (lymphocytes usually normal or low with COVID-19) and
              commence antibiotics.
            </Text>
          </BulletPoints>
        </>
        <>
          <Text>Apply caution with IV fluid management. </Text>
          <BulletPoints>
            <Text>
              Given the association of COVID-19 with acute respiratory distress
              syndrome,43 women with moderate to severe symptoms of COVID-19
              should be monitored using hourly fluid input/ output charts.
            </Text>
            <Text>
              Efforts should be targeted towards achieving neutral fluid balance
              in labour, in order to avoid the risk of fluid overload.
            </Text>
            <Text>
              Try boluses in volumes of 250-500mls and then assess for fluid
              overload before proceeding with further fluid resuscitation.
            </Text>
          </BulletPoints>
        </>
        <>
          <Text>
            All pregnant women admitted with COVID-19 infection (or suspected
            COVID-19 infection) should receive prophylactic low molecular weight
            heparin (LMWH), unless birth is expected within 12 hours (e.g. for a
            woman with increasing oxygen requirements).1
          </Text>
          <BulletPoints>
            <Text>
              Where women with complications of COVID-19 are under the care of
              other teams, such as intensivists or acute physicians, the
              appropriate dosing regimen of LMWH should be discussed in an MDT
              that includes a senior obstetrician and a local VTE expert.
            </Text>
            <Text>
              The diagnosis of PE should be considered in women with chest pain,
              worsening hypoxia (particularly if there is a sudden increase in
              oxygen requirements) or in women whose breathlessness persists or
              worsens after expected recovery from COVID-19.
            </Text>
          </BulletPoints>
        </>
        <Text>
          The frequency and suitability of fetal heart rate monitoring should be
          considered on an individual basis, taking into consideration the
          gestational age of the fetus and the maternal condition. If urgent
          intervention for birth is indicated for fetal reasons, birth should be
          expedited as normal, as long as the maternal condition is stable.
        </Text>
        <>
          <Text>
            An individualised assessment of the woman should be made by the MDT
            to decide whether emergency caesarean birth or induction of labour
            is indicated, either to assist efforts in maternal resuscitation or
            where there are serious concerns regarding the fetal condition.
          </Text>
          <BulletPoints>
            <Text>
              Individual assessment should consider: the maternal condition, the
              fetal condition, the potential for improvement following elective
              birth and the gestation of the pregnancy. The priority must always
              be the wellbeing of the woman.
            </Text>
            <Text>
              If maternal stabilisation is required before intervention for
              birth, this is the priority, as it is in other maternity
              emergencies, e.g. severe pre-eclampsia.
            </Text>
          </BulletPoints>
        </>
        <>
          <Text>Steroids should be given when indicated by NICE guidance.</Text>
          <Button
            url="https://www.nice.org.uk/guidance/ng25/chapter/recommendations#maternal-corticosteroids"
            title="NICE Guidance"
          />
          <BulletPoints>
            <Text>
              As per standard practice, urgent intervention for birth should not
              be delayed for their administration.
            </Text>
            <Text>
              There is no evidence to suggest that steroids for fetal lung
              maturation, when they would usually be offered, cause any harm in
              the context of COVID-19.
            </Text>
          </BulletPoints>
        </>
      </BulletPoints>

      <Paragraph>
        There are some reports that even after a period of improvement there can
        be a rapid deterioration. Following improvement in a woman’s condition,
        consider an ongoing period of observation, where possible, for a further
        24-48 hours. On discharge, advise the woman to return immediately if she
        becomes more unwell.
      </Paragraph>

      <H2>
        4.7 Specific peri-operative advice for healthcare professionals caring
        for pregnant women with suspected/confirmed COVID-19 who require
        surgical intervention
      </H2>

      <H3>4.7.1 General advice for obstetric/emergency gynaecology theatre</H3>

      <BulletPoints>
        <Text>
          Elective/planned obstetric procedures (e.g. cervical cerclage or
          caesarean) should be scheduled at the end of the operating list.
        </Text>
        <>
          <Text>
            Non-elective or emergency procedures should be carried out in a
            second obstetric theatre, where available, allowing time for a full
            postoperative theatre clean as per local health protection guidance.
          </Text>
          <Button
            url="https://www.gov.uk/government/publications/wuhan-novel-coronavirus-infection-prevention-and-control#equipment"
            title="Health protection guidance"
          />
        </>
        <>
          <Text>
            The number of staff in the operating theatre should be kept to a
            minimum, and all must wear appropriate PPE.
          </Text>
          <Button
            url="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/879107/T1_poster_Recommended_PPE_for_healthcare_workers_by_secondary_care_clinical_context.pdf"
            title="PPE Recommendations"
          />
        </>
        <Text>
          All staff (including maternity, neonatal and domestic) should have
          been trained in the use of PPE so that 24-hour emergency theatres are
          available and possible delays reduced.
        </Text>
        <>
          <Text>
            Anaesthetic management for women with symptoms or confirmed COVID-19
            should be with reference to anaesthetic guidance.
          </Text>
          <Button
            url="https://icmanaesthesiacovid-19.org/management-of-pregnant-women-with-known-or-suspected-covid-19"
            title="Anaesthetic Guidance"
          />
        </>
        <Text>
          Departments should consider organising dry-run simulation exercises to
          prepare staff, build confidence and identify areas of concern to
          prepare for emergency transfers to the operating theatre.
        </Text>
      </BulletPoints>

      <H3>
        4.7.2 Advice regarding Personal Protective Equipment for Caesarean birth
      </H3>

      <Paragraph>
        Caesarean birth: the level of PPE required by healthcare professionals
        caring for a woman with COVID-19 who is undergoing a caesarean birth
        should be determined based on the risk of requiring a general
        anaesthetic (GA). Intubation is an AGP. This significantly increases the
        risk of transmission of coronavirus to the attending staff. Siting
        regional anaesthesia (spinal, epidural or CSE) is not an AGP.
      </Paragraph>

      <Paragraph>
        For the minority of caesarean births, where GA is planned from the
        outset, all staff in theatre should wear PPE, with a FFP3 mask. The
        scrub team should scrub and don PPE before the GA is commenced. For a
        non-urgent caesarean birth where regional anaesthesia is planned, the
        risk of requiring a GA is very small, as there is no time pressure.
      </Paragraph>

      <Paragraph>
        The chance of requiring conversion to a GA during a caesarean birth
        commenced under regional anaesthesia is small, but this chance increases
        with the urgency of caesarean birth. In situations where there are risk
        factors that make conversion to a GA more likely, the decision on what
        type of PPE to wear should be judged based on the individual
        circumstances. If the risk of requiring conversion to a GA is considered
        significant (e.g. ‘top-up’ of a suboptimal epidural from labour), the
        theatre team should wear PPE appropriate to a GA in readiness.
      </Paragraph>

      <Paragraph>
        These recommendations will be updated as required as further evidence
        and advice becomes available.
      </Paragraph>

      <H2>4.8 Postnatal care</H2>

      <H3>4.8.1 Neonatal care</H3>

      <Paragraph>
        There are limited data to guide the postnatal care of babies of women
        who tested positive for COVID-19 in the third trimester of pregnancy.
        Literature from China has advised separate isolation of the infected
        woman and her baby for 14 days. However, routine precautionary
        separation of a woman and a healthy baby should not be undertaken
        lightly, given the potential detrimental effects on feeding and bonding.
        Given the current limited evidence, we advise that women and healthy
        babies, not otherwise requiring neonatal care, are kept together in the
        immediate postpartum period.
      </Paragraph>

      <Paragraph>
        A risk and benefits discussion with neonatologists and families to
        individualise care in babies that may be more susceptible is
        recommended. All babies born to COVID-19 positive women should be cared
        for as per RCPCH guidance.
      </Paragraph>

      <Button
        url="https://www.rcpch.ac.uk/resources/covid-19-guidance-paediatric-services"
        title="RCPCH Guidance"
      />

      <H3>Infant feeding</H3>

      <Paragraph>
        It is reassuring that in six Chinese cases, breastmilk tested negative
        for COVID-19;4 however, given the small number of cases, this evidence
        should be interpreted with caution. The main risk of breastfeeding is
        the close contact between the baby and the woman, who is likely to share
        infective droplets.
      </Paragraph>

      <Paragraph>
        In the light of the current evidence, we advise that the benefits of
        breastfeeding outweigh any potential risks of transmission of the virus
        through breastmilk. The risks and benefits of feeding choices, including
        the risk of holding the baby in close proximity where women may be
        infected, should be discussed with the parents.
      </Paragraph>

      <Paragraph>
        The following precautions should be taken to limit viral spread to the
        baby:
      </Paragraph>

      <BulletPoints>
        <Text>Considering asking someone who is well to feed the baby.</Text>
        <Text>
          Wash hands before touching the baby, breast pump or bottles.
        </Text>
        <Text>Avoid coughing or sneezing on the baby while feeding.</Text>
        <Text>
          Consider wearing a fluid-resistant surgical face mask, if available,
          while feeding or caring for the baby.
        </Text>
        <>
          <Text>
            Where women are expressing breastmilk in hospital, a dedicated
            breast pump should be used.
          </Text>
          <BulletPoints>
            <Text>
              Where a breast pump is used, follow recommendations for pump
              cleaning after each use.
            </Text>
          </BulletPoints>
        </>
        <>
          <Text>
            For babies who are bottle fed with formula or expressed milk, strict
            adherence to sterilisation guidelines is recommended.
          </Text>
          <Button
            url="https://www.nhs.uk/conditions/pregnancy-and-baby/sterilising-bottles/"
            title="Steralisation Guidelines"
          />
        </>
      </BulletPoints>

      <H3>4.8.3 Discharge and readmission to hospital</H3>

      <Paragraph>
        Any women or babies requiring readmission for postnatal obstetric or
        neonatal care during a period of selfisolation for suspected or
        confirmed COVID-19 are advised to telephone their local unit ahead of
        arrival and follow the attendance protocol as described in Section 4.1.
      </Paragraph>
    </ScrollView>
  );
}
