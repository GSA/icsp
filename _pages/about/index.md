---
title: About Us
permalink: /about/
layout: page
section: about
---
<h3 class="bg-primary text-white radius-lg padding-1 font-sans-xs">Interagency Council on Statistical Policy</h3>
<p>Started in 1989, the Interagency on Statistical Policy (ICSP) was originally created to improve communication among the heads of the principal statistical agencies, and later was charged with advising and assisting the CSOTUS. The Evidence Act expanded membership to include the newly established Statistical Officials across major cabinet agencies, 11 of which are also heads of principal statistical agencies. The ICSP, led by the CSOTUS, supports implementation of the statistical system’s vision to operate as a seamless system, working together to provide strategic vision and robust implementation in support of the U.S. Federal statistical system’s critical longstanding - and expanding - role for supporting evidence-informed decision-making. For example, the ICSP sets strategic goals for modernizing the statistical system, as well as enhancing coordination and collaboration across the system, recognizing the efficiencies and advancements possible when taking advantage of the whole system’s statistical infrastructure and expertise.</p>
<h4>Current Strategic Priorities</h4>
<ul class="usa-list">
    <li>Evidence Act/Confidential Information Protection and Statistical Efficiency Act of 2018 (CIPSEA 2018) regulations and processes</li>
    <li>Promoting data quality</li>
    <li>Mitigating re-identification risk and the protection of data</li>
    <li>Autonomy and objectivity best practices</li>
    <li>Establishing Statistical Official role </li>
    <li>Enabling blended/high frequency data</li>
    <li>Developing staff data skills through employee engagement, the ICSP mentoring program, and data science initiatives </li>
    <li>Collaborating with other Evidence Act Officials, to include Chief Data Officers and Evaluation Officers</li>
</ul>
<p>The ICSP also charters subcommittees, as well as sponsors leadership, mentorship, and awards programs. Some examples include:</p>
<ul>
    <li><a href="https://www2.census.gov/programs-surveys/acs/operations_admin/ICSP_SACS_Charter.pdf" target="_blank">ICSP Subcommitee on the American Community Survey</a></li>
    <li><a href="{{site.baseurl}}/assets/files/ICSP Mentoring Program Information Sheet.pdf" target="_blank">ISCP Mentoring Program</a></li>
    <li><a href="https://community.amstat.org/governmentstatisticssection/awards/griffithmentoringaward" target="_blank">Jeanne E. Griffith Mentoring Award</a></li>
</ul>

<h3 class="bg-primary text-white radius-lg padding-1 font-sans-xs">The Federal Statistical System</h3>
<p>Relevant, timely, credible, and objective statistical information is part of the foundation of democracy and the fundamental responsibility of the U.S. Federal statistical system. Since the Nation’s founding, the U.S. Federal statistical system has collected and transformed data into high quality statistical information, making it readily and equitably available to inform all types of decision-making, while protecting the responses of individual data providers. Such decisions may include those made by Federal, state, local, territorial, and tribal policymakers; the private sector, including businesses; and individuals. Led by the Chief Statistician of the United States (CSOTUS) and the Interagency Council on Statistical Policy (ICSP), the U.S. Federal statistical system is a decentralized, interconnected network of 13 principal statistical agencies and 3 recognized statistical units, 24 Statistical Officials (across 24 major cabinet agencies), approximately 100 additional Federal statistical programs engaged in statistical activities, and several cross system interagency and advisory bodies. </p>
<p>The vision of the Federal statistical system is to: operate as a seamless system, as stewards of much of the nation's most sensitive data, enabling greater evidence building, civic engagement, and public and private sector decision making. </p>
<p>This graphic depicts each of the entities as part of the decentralized, interconnected network that is the Federal statistical system. </p>
<img src="{{ site.baseurl }}/assets/img/federal-statistical-system.png" alt="Federal Staistical System">
<hr>
<h3 class="bg-primary text-white radius-lg padding-1 font-sans-xs">Principal Statistical Agencies and Recognized Units</h3>
<p>OMB recognizes 16 statistical agencies and units under the Confidential Information Protection and Statistical Efficiency Act (CIPSEA). Of these, thirteen are known as principal statistical agencies, which are agencies or organizational units of the Executive Branch whose missions are predominantly the collection, compilation, processing, or analysis of information for statistical purposes, covering such topics as the economy, workforce, energy, agriculture, foreign trade, education, housing, crime, transportation, and health. In addition, OMB recognizes three additional units: Microeconomic Surveys Unit (Board of Directors of the Federal Reserve System); Center for Behavioral Health Statistics and Quality, Substance Abuse and Mental Health Services Administration (Department of Health and Human Services); and National Animal Health Monitoring System, Animal and Plant Health Inspection Service (Department of Agriculture).</p>
<div class="grid-row grid-gap">
{% for agency in site.agencies %}
  <div class="tablet:grid-col-6 padding-y-2">
    <div class="grid-row border-base-lighter border-solid border-width-1px border-top-width-05 radius-lg shadow-4 font-sans-3xs" style="min-height: 130px">
      <div class="grid-col-4 display-flex flex-row flex-align-center padding-x-2">
        <img src="{{ site.baseurl }}/assets/img/agency_logos/{{ agency.short }}.png" alt="{{ agency.title }} logo">
      </div> 
      <div class="grid-col-8 padding-right-2">
        <p><a href="{{ agency.url }}" target="_blank" class="usa-link--external text-no-underline text-primary">{{ agency.title }}</a></p>
      </div>
    </div>
  </div>
{% endfor %}
</div>