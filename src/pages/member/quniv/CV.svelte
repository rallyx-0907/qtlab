<script>
  import { cvData as cv } from './cvData.js';
  import { displayExternalUrl, normalizeExternalUrl, phoneHref } from './contact.js';

  const experience = cv.experience.filter((entry) => entry.resume?.section === 'experience');
  const selectedWork = cv.experience.filter((entry) => entry.resume?.section === 'selected-work');
</script>

<div class="cv-root" data-cv-page>
  <header class="cv-header">
    <div class="identity">
      <p class="eyebrow">Curriculum Vitae</p>
      <h1>{cv.name}</h1>
      <p class="cv-title">{cv.title}</p>
      <p class="location">{cv.contact.location}</p>
    </div>

    <address class="contact-list" aria-label="Contact information">
      <a href={`mailto:${cv.contact.email}`}>{cv.contact.email}</a>
      <a href={phoneHref(cv.contact.phone)}>{cv.contact.phone}</a>
      <a href={normalizeExternalUrl(cv.contact.linkedin)}>{displayExternalUrl(cv.contact.linkedin)}</a>
      <a href={normalizeExternalUrl(cv.contact.github)}>{displayExternalUrl(cv.contact.github)}</a>
      <a href={normalizeExternalUrl(cv.contact.website)}>{displayExternalUrl(cv.contact.website)}</a>
    </address>
  </header>

  <section class="summary-section" aria-labelledby="cv-summary-heading">
    <div class="section-heading">
      <h2 id="cv-summary-heading">Profile</h2>
      <span></span>
    </div>
    <p class="summary">{cv.summary}</p>
  </section>

  <section aria-labelledby="cv-skills-heading">
    <div class="section-heading">
      <h2 id="cv-skills-heading">Core Expertise</h2>
      <span></span>
    </div>
    <div class="skills-grid">
      {#each cv.resume.skills as skill (skill.label)}
        <div class="skill-item">
          <h3>{skill.label}</h3>
          <p>{skill.detail}</p>
        </div>
      {/each}
    </div>
  </section>

  <section aria-labelledby="cv-experience-heading">
    <div class="section-heading">
      <h2 id="cv-experience-heading">Professional Experience</h2>
      <span></span>
    </div>

    <div class="entries">
      {#each experience as job (job.id)}
        <article class="entry">
          <header class="entry-header">
            <div>
              <h3>{job.title}</h3>
              <p class="company">
                {#if job.companyUrl}
                  <a href={job.companyUrl} target="_blank" rel="noopener noreferrer">{job.company}</a>
                {:else}
                  {job.company}
                {/if}
              </p>
            </div>
            <p class="period">{job.period}</p>
          </header>
          <p class="stack">{job.resume.stack}</p>
          <ul>
            {#each job.bullets as bullet (bullet)}
              <li>{bullet}</li>
            {/each}
          </ul>
        </article>
      {/each}
    </div>
  </section>

  <section aria-labelledby="cv-work-heading">
    <div class="section-heading">
      <h2 id="cv-work-heading">Selected Engineering Work</h2>
      <span></span>
    </div>

    {#each selectedWork as project (project.id)}
      <article class="entry selected-work">
        <header class="entry-header">
          <div>
            <h3>{project.title}</h3>
            <p class="company">
              {#if project.companyUrl}
                <a href={project.companyUrl} target="_blank" rel="noopener noreferrer">{project.company}</a>
              {:else}
                {project.company}
              {/if}
            </p>
          </div>
          <p class="period">{project.period}</p>
        </header>
        <p class="stack">{project.resume.stack}</p>
        <ul>
          {#each project.bullets as bullet (bullet)}
            <li>{bullet}</li>
          {/each}
        </ul>
      </article>
    {/each}
  </section>

  <footer class="cv-footer">
    <div>
      <strong>Education</strong>
      <span>{cv.education}</span>
    </div>
    <div class="language">
      <strong>Language</strong>
      <span>{cv.resume.language}</span>
    </div>
  </footer>
</div>

<style>
  .cv-root :global(*) {
    box-sizing: border-box;
    position: static !important;
    z-index: auto !important;
    animation: none !important;
    text-shadow: none !important;
    box-shadow: none !important;
  }

  .cv-root {
    box-sizing: border-box;
    width: 794px;
    height: 1122px;
    overflow: hidden;
    padding: 42px 48px 36px;
    background: #ffffff;
    color: #101828;
    font-family: Inter, Arial, sans-serif;
    font-size: 12px;
    line-height: 1.4;
  }

  .cv-header {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 260px;
    gap: 32px;
    align-items: end;
    padding-bottom: 16px;
    border-bottom: 2px solid #1267f4;
  }

  .eyebrow {
    margin: 0 0 3px;
    color: #1267f4;
    font-size: 7.6pt;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  h1 {
    margin: 0;
    color: #071a92;
    font-size: 25pt;
    font-weight: 800;
    letter-spacing: 0.02em;
    line-height: 1.03;
  }

  .cv-title {
    margin: 5px 0 0;
    color: #344054;
    font-size: 12pt;
    font-weight: 650;
  }

  .location {
    margin: 2px 0 0;
    color: #667085;
    font-size: 8.2pt;
  }

  .contact-list {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
    margin: 0;
    font-size: 8.4pt;
    font-style: normal;
    line-height: 1.34;
  }

  .contact-list a {
    color: #344054;
    text-decoration: none;
  }

  section {
    margin-top: 15px;
  }

  .summary-section {
    margin-top: 15px;
  }

  .section-heading {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 10px;
    align-items: center;
    margin-bottom: 8px;
  }

  .section-heading h2 {
    margin: 0;
    color: #071a92;
    font-size: 9.2pt;
    font-weight: 800;
    letter-spacing: 0.11em;
    line-height: 1;
    text-transform: uppercase;
  }

  .section-heading span {
    height: 1px;
    background: #d7e3fb;
  }

  .summary {
    margin: 0;
    color: #344054;
    font-size: 9pt;
    line-height: 1.45;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 24px;
    row-gap: 7px;
  }

  .skill-item {
    display: grid;
    grid-template-columns: 104px minmax(0, 1fr);
    gap: 7px;
    padding-left: 8px;
    border-left: 2px solid #d7e3fb;
  }

  .skill-item h3,
  .skill-item p {
    margin: 0;
    font-size: 8.1pt;
    line-height: 1.34;
  }

  .skill-item h3 {
    color: #071a92;
    font-weight: 750;
  }

  .skill-item p {
    color: #475467;
  }

  .entries {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .entry {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  .entry-header {
    display: grid;
    grid-template-columns: minmax(0, 1fr) max-content;
    gap: 16px;
    align-items: baseline;
  }

  .entry-header h3,
  .company,
  .period,
  .stack {
    margin: 0;
  }

  .entry-header h3 {
    display: inline;
    color: #101828;
    font-size: 9.7pt;
    font-weight: 800;
  }

  .company {
    display: inline;
    margin-left: 5px;
    color: #1267f4;
    font-size: 8.8pt;
    font-weight: 700;
  }

  .company a {
    color: inherit;
    text-decoration: none;
  }

  .company::before {
    content: '· ';
    color: #98a2b3;
  }

  .period {
    color: #667085;
    font-size: 8.2pt;
    font-weight: 650;
    white-space: nowrap;
  }

  .stack {
    margin-top: 2px;
    color: #667085;
    font-size: 6.8pt;
    line-height: 1.22;
  }

  ul {
    margin: 2px 0 0;
    padding-left: 15px;
    list-style: disc;
  }

  li {
    margin: 1px 0;
    padding-left: 1px;
    color: #344054;
    font-size: 8.1pt;
    line-height: 1.3;
  }

  li::marker {
    color: #1267f4;
    font-size: 0.8em;
  }

  .selected-work {
    padding: 9px 10px;
    border: 1px solid #d7e3fb;
    background: #f8faff;
  }

  .cv-footer {
    display: grid;
    grid-template-columns: minmax(0, 1fr) max-content;
    gap: 24px;
    margin-top: 15px;
    padding-top: 9px;
    border-top: 1px solid #d7e3fb;
    color: #475467;
    font-size: 8.1pt;
  }

  .cv-footer div {
    display: flex;
    gap: 6px;
  }

  .cv-footer strong {
    color: #071a92;
  }

  .language {
    justify-content: flex-end;
  }
</style>
