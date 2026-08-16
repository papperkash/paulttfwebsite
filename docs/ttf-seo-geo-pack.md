# TTF SEO/GEO pack: first draft

## 0. How to use this pack

This pack is ready to paste. Keep the live homepage magazine body. Add the pages below as new HTML files that reuse the existing CSS, type, and colour. Do not invent extra offers, case studies, prices, or a Bristol street address.

**Voice.** Short. Punchy. Magazine. UK English. A finance director should be able to read every page in one sitting. Lead with the result. Match lines already on the homepage: "You keep the MSP. We sit above it." "Fill the seat instead." "Another helpdesk will not fix this." "One agent. One KPI. Then we stop." "A named senior does the work."

**Hard rules for the implementer.**
- Never mention DeskCrew, Resolve, or a parent company. The Technology Framework is a standalone practice.
- No em dashes. Use periods, commas, or parentheses.
- No "it is not this, it is that" rhetorical pairs.
- Do not publish a day rate or a monthly price.
- Do not invent case studies, client names, testimonials, or extra metrics.
- Sell a named Head of IT plus assurance. Do not sell MSP helpdesk, tickets, or "IT support".
- Only five offers. PE carve-out / Day-1 is a named project under who we work with.
- Azure FinOps only when the Azure or cloud bill is over £10k a month. Say that on the page, in the title or H1, and in a FAQ.
- We implement CE / CE+ / ISO 27001 controls. An accredited assessor certifies. Say that wherever certification is mentioned.
- Do not claim a Bristol office. 0117 is a Bristol-area phone. Registered office is London. The hero already shows Clifton Suspension Bridge. That is an image, not an address.
- Avoid: delve, leverage, tapestry, landscape, unlock, empower, journey, seamless, holistic, cutting-edge, in today's world.
- `lang="en-GB"`. organisation, specialised, analogue only if needed.
- Canonical host: `https://thetechnologyframework.com`
- Preview host (do not use in canonicals): `https://agreeable-sky-026f1ef03.7.azurestaticapps.net`
- Repo today: single `index.html` at `https://github.com/papperkash/paulttfwebsite`

**What "ship" means.** Each page in section 5 has title, meta, H1, kicker, full body, FAQs, internal links, CTA, and schema. Copy the words. Do not outline them again.

---

## 1. Sitemap and slugs

Use these 14 URLs only. Do not add a DevOps page, a vCISO page, a helpdesk page, or a generic digital-transformation page.

| Slug | Page name | Primary intent | Schema |
| --- | --- | --- | --- |
| `/` | Homepage (keep magazine body) | Named Head of IT for the firm that outgrew tickets | Organization, ProfessionalService, BreadcrumbList |
| `/fractional-head-of-it` | The seat | FD/MD wants a named senior in the room, not more tickets | Service, FAQPage, BreadcrumbList |
| `/cyber-essentials-iso-27001` | The evidence | Walk into insurer, PE, or enterprise buyer with a pack | Service, FAQPage, BreadcrumbList |
| `/microsoft-copilot-readiness` | The tenant | Licences bought, tenant unsafe, 30-day pilot on the right seats | Service, FAQPage, BreadcrumbList |
| `/azure-finops` | The bill | Cloud/Azure bill over £10k/month. FD-readable sprint | Service, FAQPage, BreadcrumbList |
| `/production-it-agent` | The one workflow | One live automation, one KPI, then stop | Service, FAQPage, BreadcrumbList |
| `/how-we-work` | How we work | Diagnose / 90 days / retainer | FAQPage, BreadcrumbList |
| `/who-we-work-with` | Who we work with | Hub for the three niches | FAQPage, BreadcrumbList |
| `/south-west-wealth-ifa` | South West wealth / IFA / SIPP | Local + sector: wealth, IFA, SIPP, South West | FAQPage, BreadcrumbList |
| `/pe-carve-out-it` | PE carve-out / Day-1 / TSA | Named project when the TSA clock is running | FAQPage, BreadcrumbList |
| `/professional-services-it` | Professional services 50-200 | Head of IT for 50-200 professional services | FAQPage, BreadcrumbList |
| `/proof` | Proof | Checkable facts only. No invented stories | FAQPage, BreadcrumbList |
| `/contact` | Book a conversation | Book, phone, email, form | ContactPage, FAQPage, BreadcrumbList |
| `/privacy` | Privacy | Lift the existing privacy note | FAQPage, BreadcrumbList |

### Recommended header nav

Desktop is tight. Keep the phone. Do not add every slug to the header.

**Header (left to right)**
1. Brand mark + "The Technology Framework" → `/`
2. Offers (disclosure menu, not a sixth page)
   - Fractional Head of IT → `/fractional-head-of-it`
   - CE+ / ISO sprint → `/cyber-essentials-iso-27001`
   - Copilot readiness → `/microsoft-copilot-readiness`
   - Azure FinOps → `/azure-finops`
   - Production IT agent → `/production-it-agent`
3. Who we work with → `/who-we-work-with`
4. How we work → `/how-we-work`
5. Proof → `/proof`
6. Button: Book a conversation → `/contact`
7. Phone: `0117 456 5486` → `tel:+441174565486`

On the homepage only, the Offers item may also keep an in-page jump to `#offers` as well as the menu.

### Recommended footer nav

**Column A, offers**
- Fractional Head of IT → `/fractional-head-of-it`
- CE+ / ISO sprint → `/cyber-essentials-iso-27001`
- Copilot readiness → `/microsoft-copilot-readiness`
- Azure FinOps → `/azure-finops`
- Production IT agent → `/production-it-agent`

**Column B, who and how**
- Who we work with → `/who-we-work-with`
- South West wealth / IFA / SIPP → `/south-west-wealth-ifa`
- PE carve-out / Day-1 → `/pe-carve-out-it`
- Professional services, 50-200 → `/professional-services-it`
- How we work → `/how-we-work`
- Proof → `/proof`

**Column C, legal and contact**
- Book a conversation → `/contact`
- Privacy → `/privacy`
- `hello@thetechnologyframework.com`
- `0117 456 5486`

**Footer blurb (keep):** Named Head of IT for firms that have outgrown tickets. A standalone practice.

**Footer legal (keep):** The Technology Framework Ltd · 13918137 · Registered in England. Registered office: 20-22 Wenlock Road, London N1 7GU.

---

## 2. Redirects from old production URLs

WordPress leftovers are still indexed on `thetechnologyframework.com`. 301 them. Do not keep DevOps, generic IT strategy, or "our services" as live pages.

| Old URL | New URL | Notes |
| --- | --- | --- |
| `/outsourced-management/` | `/fractional-head-of-it` | Closest current offer |
| `/outsourced-management` | `/fractional-head-of-it` | Non-slash twin |
| `/why-us/` | `/how-we-work` | Old about / method |
| `/why-us` | `/how-we-work` | |
| `/it-cost-management/` | `/azure-finops` | Qualify the new page at £10k+/month |
| `/it-cost-management` | `/azure-finops` | |
| `/contact-us/` | `/contact` | |
| `/contact-us` | `/contact` | |
| `/dev-ops/` | `/` | Do not keep DevOps as a service |
| `/dev-ops` | `/` | |
| `/our-services/` | `/` | Leftover hub. Found live. Not in the new sitemap |
| `/our-services` | `/` | |

**Also 301 if still live** (crawl production before ship; do not create new pages for these):
- Any leftover `/cloud-migrations/`, `/it-strategy/`, `/it-management/`, `/it-consultancy/` → `/`
- `/privacy-policy/` or `/privacy-policy` → `/privacy`
- Old WP `?p=` and `/category/` URLs → `/`

**Do not reuse** the old WordPress London phone (`020 4583 1054` or similar) if it still appears on leftover pages. Public phone is `0117 456 5486` only.

**Azure Static Web Apps.** Put redirects in `staticwebapp.config.json`. Example shape:

```json
{
  "trailingSlash": "never",
  "redirects": [
    { "source": "/outsourced-management", "destination": "/fractional-head-of-it", "statusCode": 301 },
    { "source": "/outsourced-management/", "destination": "/fractional-head-of-it", "statusCode": 301 },
    { "source": "/why-us", "destination": "/how-we-work", "statusCode": 301 },
    { "source": "/why-us/", "destination": "/how-we-work", "statusCode": 301 },
    { "source": "/it-cost-management", "destination": "/azure-finops", "statusCode": 301 },
    { "source": "/it-cost-management/", "destination": "/azure-finops", "statusCode": 301 },
    { "source": "/contact-us", "destination": "/contact", "statusCode": 301 },
    { "source": "/contact-us/", "destination": "/contact", "statusCode": 301 },
    { "source": "/dev-ops", "destination": "/", "statusCode": 301 },
    { "source": "/dev-ops/", "destination": "/", "statusCode": 301 },
    { "source": "/our-services", "destination": "/", "statusCode": 301 },
    { "source": "/our-services/", "destination": "/", "statusCode": 301 }
  ]
}
```

---

## 3. Keyword and intent list

No volume numbers. None were pulled for this draft. Do not invent them.

### Cluster A - leadership (commercial)

| Phrase | Suggested page | Intent note |
| --- | --- | --- |
| fractional Head of IT | `/fractional-head-of-it` | Primary. Named senior in the room. |
| fractional CIO UK | `/fractional-head-of-it` | Same seat. Some boards use CIO. Use once, naturally. |
| fractional IT director | `/fractional-head-of-it` | Same seat. FD-friendly wording. |
| part-time Head of IT | `/fractional-head-of-it` | One or two days a week. |
| outgrown MSP / need a Head of IT | `/fractional-head-of-it` and `/` | You keep the MSP. We sit above it. |

**Do not target:** cheap IT support, helpdesk, MSP Bristol, 24/7 support, day rate.

### Cluster B - assurance (commercial + informational)

| Phrase | Suggested page | Intent note |
| --- | --- | --- |
| Cyber Essentials Plus implementation | `/cyber-essentials-iso-27001` | Primary. We implement. Assessor certifies. |
| Cyber Essentials for professional services | `/cyber-essentials-iso-27001` and `/professional-services-it` | Sector flavour, not a new offer. |
| ISO 27001 implementation UK | `/cyber-essentials-iso-27001` | When they sell to enterprise, PE, or the public sector. |
| insurance cyber questionnaire / renewal evidence pack | `/cyber-essentials-iso-27001` | "Walk into the insurance renewal with a pack they can read." |

**Do not target:** "we certify you", "accredited certification body", standalone vCISO product.

### Cluster C - Copilot (commercial)

| Phrase | Suggested page | Intent note |
| --- | --- | --- |
| Microsoft Copilot readiness | `/microsoft-copilot-readiness` | Primary. Tenant first, then pilot. |
| Microsoft 365 Copilot governance | `/microsoft-copilot-readiness` | Purview, labels, the right seats. |
| Purview oversharing Copilot | `/microsoft-copilot-readiness` | Shared drive is the real problem. |

### Cluster D - cloud cost (commercial, qualified)

| Phrase | Suggested page | Intent note |
| --- | --- | --- |
| Azure FinOps | `/azure-finops` | Primary. Only if bill is over £10k/month. |
| Azure cost optimisation UK | `/azure-finops` | FD-readable sprint. |
| cloud bill too high | `/azure-finops` | Qualify in the first screen. Do not chase small bills. |

### Cluster E - agent (commercial, narrow)

| Phrase | Suggested page | Intent note |
| --- | --- | --- |
| production IT agent | `/production-it-agent` | Primary. One live thing. |
| Teams IT bot | `/production-it-agent` | One of three shapes. |
| one workflow one KPI | `/production-it-agent` | Then we stop. |

**Do not target:** AI transformation programme, "agents everywhere", generic chatbot agency.

### Cluster F - niches / GEO

| Phrase | Suggested page | Intent note |
| --- | --- | --- |
| IFA IT security / SIPP IT / wealth manager IT South West | `/south-west-wealth-ifa` | Sector + region. |
| PE carve-out IT / TSA IT / Day-1 IT separation | `/pe-carve-out-it` | Named project, not a sixth offer. |
| IT for professional services 50-200 | `/professional-services-it` | Size qualifier stays on the page. |
| Head of IT Bristol / fractional IT South West | `/south-west-wealth-ifa` and `/fractional-head-of-it` | 0117 number. |

**Local entities you may use:** Bristol, South West England, London (registered office), United Kingdom, phone 0117 456 5486.

**On-page rule.** One primary phrase in the title and H1, naturally. One or two secondaries in H2s or the first paragraph. Do not repeat a phrase for density.

---

## 4. Sitewide SEO/GEO

### 4.1 Organization + ProfessionalService JSON-LD

Place this once in the shared layout (every page). Fill known fields only. Omit `priceRange`. Leave `sameAs` out until a real profile URL is supplied. Omit `logo` until a stable absolute URL exists (see section 7).

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://thetechnologyframework.com/#organization",
      "name": "The Technology Framework",
      "legalName": "The Technology Framework Ltd",
      "url": "https://thetechnologyframework.com",
      "telephone": "+441174565486",
      "email": "hello@thetechnologyframework.com",
      "foundingDate": "2022-02-15",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "20-22 Wenlock Road",
        "addressLocality": "London",
        "postalCode": "N1 7GU",
        "addressCountry": "GB"
      },
      "areaServed": [
        { "@type": "City", "name": "Bristol" },
        { "@type": "AdministrativeArea", "name": "South West England" },
        { "@type": "City", "name": "London" },
        { "@type": "Country", "name": "United Kingdom" }
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://thetechnologyframework.com/#professionalservice",
      "name": "The Technology Framework",
      "url": "https://thetechnologyframework.com",
      "telephone": "+441174565486",
      "email": "hello@thetechnologyframework.com",
      "description": "A named Head of IT for firms that have outgrown tickets. One or two days a week. You keep the MSP. We sit above it.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "20-22 Wenlock Road",
        "addressLocality": "London",
        "postalCode": "N1 7GU",
        "addressCountry": "GB"
      },
      "areaServed": [
        { "@type": "City", "name": "Bristol" },
        { "@type": "AdministrativeArea", "name": "South West England" },
        { "@type": "City", "name": "London" },
        { "@type": "Country", "name": "United Kingdom" }
      ],
      "provider": {
        "@id": "https://thetechnologyframework.com/#organization"
      }
    }
  ]
}
```

`foundingDate` is from the Companies House record (incorporated 15 February 2022). SIC 62020 is on the record. Do not put SIC on the marketing pages.

### 4.2 Local / GEO notes

- **Phone:** 0117 456 5486 (`tel:+441174565486`). Bristol-area prefix. Use in header, contact, and South West copy.
- **Registered office:** 20-22 Wenlock Road, London N1 7GU. Footer and contact only. Do not imply a London consulting floor.
- **Bristol:** The hero image is Clifton Suspension Bridge. Alt text may say so. Body may say South West, Bristol-area, or "firms around Bristol". Do not write a street, a harbour office, or "our Bristol HQ".
- **Who we serve:** South West wealth / IFA / SIPP, PE carve-outs, professional services 50-200. Homepage line to keep: "You are 50-200 people in professional services, South West wealth, or a PE-backed roll-up."
- **areaServed in schema:** Bristol, South West England, London, United Kingdom. That is coverage, not a claim of four offices.

### 4.3 Internal linking rules

- Every offer page links to `/how-we-work`, `/who-we-work-with`, `/proof`, and `/contact`.
- Every niche page links to the seat (`/fractional-head-of-it`) and the evidence (`/cyber-essentials-iso-27001`). Add Copilot, FinOps, or the agent only where the niche copy makes that true.
- `/pe-carve-out-it` is a project page. Link it as a project, never as a sixth offer in the Offers menu.
- `/azure-finops` must state the £10k/month floor in the first screen and again in a FAQ.
- Descriptive anchors. "Fractional Head of IT" not "click here". "90-day CE+ / ISO sprint" not "learn more".
- Homepage slabs become the five offer URLs. The PE line becomes `/pe-carve-out-it`. How we work, proof, and book become both in-page anchors and the new URLs.
- Breadcrumbs: Home / [hub if any] / this page. Offer pages sit under Home. Niche pages sit under Home / Who we work with.

### 4.4 Homepage nav / CTA change list

**Do not rewrite the homepage body.** Keep current title, meta, H1, kicker, deck, cost-of-waiting, situations, five offer slabs, PE line, how we work, proof, close, form fields, footer blurb, and privacy paragraph text.

**Do change:**

1. **Title (keep):** The Technology Framework | A named Head of IT for the firm that outgrew tickets
2. **Meta (keep):** Your leadership team is making technology decisions without a technology leader in the room. A named Head of IT, one or two days a week. You keep the MSP. We sit above it.
3. **H1 (keep):** Your leadership team is making technology decisions without a technology leader in the room.
4. **Header nav:** replace in-page-only links with the header in section 1. Homepage may keep `#offers`, `#you`, `#how`, `#proof`, `#enquiry` as secondary jumps.
5. **Offer slabs:** wrap each slab (or its heading) as a link:
   - The seat → `/fractional-head-of-it`
   - The evidence → `/cyber-essentials-iso-27001`
   - The tenant → `/microsoft-copilot-readiness`
   - The bill → `/azure-finops`
   - The one workflow → `/production-it-agent`
6. **PE line** under the offers → `/pe-carve-out-it`
7. **How we work** heading or a text link "Read how we work" → `/how-we-work` (keep `#how`)
8. **Proof** heading or "See the facts" → `/proof` (keep `#proof`)
9. **Book a conversation** buttons → `/contact` and/or `#enquiry`. Phone stays `tel:+441174565486`.
10. **Situation 03** ("You are 50-200 people…") → `/who-we-work-with`
11. **Privacy note** "See the privacy note" → `/privacy`
12. **Add Organization + ProfessionalService JSON-LD** from 4.1
13. **Add BreadcrumbList** for Home only
14. **Optional strip** after the five offers, or skip and rely on nav:

> **Also on this site**
> [How we work](/how-we-work) · [Who we work with](/who-we-work-with) · [Proof](/proof) · [Book a conversation](/contact)

15. **`lang="en-GB"`**, canonical `https://thetechnologyframework.com/`, Open Graph matching the kept title and meta.

Do not add extra homepage offers. Do not add prices. Do not add testimonials.


---

## 5. Page copy

Copy below is ready to ship. Keep kickers in the existing uppercase treatment. One H1 per page.

### 5.1 `/` - Homepage

**Page name:** Homepage  
**Primary keyword / intent:** Named Head of IT for the firm that outgrew tickets (keep)  
**Title tag (keep, 79 chars):** The Technology Framework | A named Head of IT for the firm that outgrew tickets  
**Meta description (keep, 171 chars):** Your leadership team is making technology decisions without a technology leader in the room. A named Head of IT, one or two days a week. You keep the MSP. We sit above it.  
**H1 (keep):** Your leadership team is making technology decisions without a technology leader in the room.  
**Kicker (keep):** For the FD who became the IT department  
**Schema:** Organization, ProfessionalService (sitewide), BreadcrumbList  
**Body:** Do not rewrite. See section 4.4 for nav, slab links, JSON-LD, and the optional "Also on this site" strip.

**BreadcrumbList**

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://thetechnologyframework.com/"
    }
  ]
}
```

**Internal links to add (no new sentences required):** five offer slabs, PE line, how we work, proof, book, who we work with on situation 03, privacy.

---

### 5.2 `/fractional-head-of-it` - The seat

**Page name:** Fractional Head of IT  
**Primary keyword / intent:** fractional Head of IT. FD/MD of a 50-200 firm wants a named senior in the room.  
**Secondaries:** part-time Head of IT (H2), fractional CIO / fractional IT director (first section, once).  
**Title tag (48 chars):** Fractional Head of IT | The Technology Framework  
**Meta description (145 chars):** A named fractional Head of IT, one or two days a week. You keep the MSP. We sit above it, and the board finally has someone who owns the answers.  
**H1:** A fractional Head of IT. One or two days a week.  
**Kicker:** The seat  
**Schema:** Service, FAQPage, BreadcrumbList  
**Internal links:** `/how-we-work`, `/who-we-work-with`, `/cyber-essentials-iso-27001`, `/proof`, `/contact`, `/south-west-wealth-ifa`, `/professional-services-it`, `/pe-carve-out-it`

#### Intro

You keep the MSP if it works. We sit above it. A named Head of IT, one or two days a week, in the room when the board asks about cyber, Copilot, or the cloud bill.

Some boards call this a fractional CIO or a fractional IT director. The work is the same. Someone named. Someone who owns the answers.

A full-time IT director costs £130k before they have started. Fill the seat instead.

#### Who this is for

You are 50-200 people. You already pay an MSP. The tickets still land on the finance director.

Typical rooms: a professional services firm, a South West wealth or IFA business, or a PE-backed roll-up. If the TSA clock is running, that is a named project. Read [PE carve-out IT](/pe-carve-out-it).

Another helpdesk will not fix this.

#### What a part-time Head of IT actually does

We govern the estate you already have.

- Operating model the board can read.
- Vendor and MSP governance. Who does what. What "good" looks like. When to change it.
- The paper for cyber, Copilot, and the bill. No theatre.
- Decisions that have been waiting for an owner.

The named senior does the work. You are not buying a junior account and a slide deck.

#### How it runs

Same rhythm as [how we work](/how-we-work).

**01 Diagnose.** We sit with the people who actually run the estate. MSP, finance, operations, whoever holds the passwords.

**02 90 days.** A sprint with a board-readable outcome. Often the operating model, the vendor map, and the first evidence pack.

**03 Then a retainer if the seat still needs filling.** One or two days a week after that, or we leave the place stronger.

#### What you leave with

- A named person the board can call.
- An operating model and a vendor map.
- A written view of cyber, Copilot, and cost. What is safe to do next.
- The MSP still in place, if it works, with someone above it.

If the next 90 days also need [Cyber Essentials Plus or ISO 27001](/cyber-essentials-iso-27001), that sprint can run in the same window.

#### FAQs

**Do you replace our MSP?**  
You keep the MSP if it works. We govern it. Operating model, vendors, board paper. If the MSP is the problem, we say so in the first 90 days.

**Is this a fractional CIO or a fractional IT director?**  
Boards use all three titles. The seat we fill is Head of IT. One named senior, one or two days a week, on the leadership team.

**Do you run the helpdesk?**  
No. We do not sell tickets or "IT support". The MSP (or your internal team) runs the queue. We own the answers above it.

**How many days a week?**  
One or two. That is the model on the homepage and the model we sell. We do not publish a day rate.

**Who actually turns up?**  
A named senior. 20+ years as Head of IT. The person in the conversation is the person who does the work.

**Do you work with firms outside the South West?**  
Yes. The practice is UK-wide. The public number is 0117. The registered office is in London. The three rooms we know best are [South West wealth](/south-west-wealth-ifa), [professional services of 50-200](/professional-services-it), and [PE carve-outs](/pe-carve-out-it).

#### CTA

Book a conversation.  
Telephone [0117 456 5486](tel:+441174565486).  
Email [hello@thetechnologyframework.com](mailto:hello@thetechnologyframework.com).

#### Related links

- [How we work](/how-we-work)
- [90-day CE+ / ISO sprint](/cyber-essentials-iso-27001)
- [Who we work with](/who-we-work-with)
- [Proof you can check](/proof)
- [Book a conversation](/contact)

#### Service JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Fractional Head of IT",
  "url": "https://thetechnologyframework.com/fractional-head-of-it",
  "description": "A named Head of IT, one or two days a week. You keep the MSP. We sit above it. Operating model, vendors, board paper.",
  "provider": {
    "@id": "https://thetechnologyframework.com/#organization"
  },
  "areaServed": [
    { "@type": "City", "name": "Bristol" },
    { "@type": "AdministrativeArea", "name": "South West England" },
    { "@type": "City", "name": "London" },
    { "@type": "Country", "name": "United Kingdom" }
  ]
}
```

**Breadcrumbs:** Home > Fractional Head of IT

---

### 5.3 `/cyber-essentials-iso-27001` - The evidence

**Page name:** 90-day CE+ / ISO sprint  
**Primary keyword / intent:** Cyber Essentials Plus implementation. Walk into insurer, PE, or enterprise buyer with evidence.  
**Secondaries:** ISO 27001 implementation UK (H2), insurance cyber questionnaire (H2).  
**Title tag (52 chars):** Cyber Essentials Plus implementation for firms | TTF  
**Meta description (142 chars):** We implement Cyber Essentials Plus and ISO 27001. An accredited assessor certifies. Walk into the insurance renewal with a pack they can read.  
**H1:** Cyber Essentials Plus implementation. Then ISO if the buyer asks.  
**Kicker:** The evidence  
**Schema:** Service, FAQPage, BreadcrumbList  
**Internal links:** `/fractional-head-of-it`, `/how-we-work`, `/professional-services-it`, `/south-west-wealth-ifa`, `/pe-carve-out-it`, `/proof`, `/contact`

#### Intro

Walk into the insurance renewal with a pack they can read.

Cyber Essentials and Cyber Essentials Plus for the form that keeps coming back. ISO 27001 when you sell to enterprise, PE, or the public sector. We implement the controls. An accredited assessor certifies.

The next cyber form comes back with questions nobody can answer. That is the cost of waiting.

#### Who this is for

Finance directors and managing directors who have become the IT department. Professional services of 50-200. South West wealth, IFA, and SIPP firms. PE-backed businesses that need evidence in the data room.

You need a pack the insurer can read.

#### What we do

We implement. We do not certify.

- Scope the estate. What is in. What is out. Who owns each control.
- Cyber Essentials and CE+ control work. Patching, access, MFA, backups, the boring things insurers actually ask for.
- ISO 27001 when the buyer or the fund requires it. Policy, risk, evidence, the ISMS an assessor can walk through.
- An insurance cyber questionnaire answered with documents, not adjectives.

PCI DSS appears in our [proof](/proof) because it was implemented in a live estate, in twelve months, alongside ISO 27001. It is a fact. It is not a sixth offer. The assurance we sell here is CE, CE+, and ISO 27001.

#### How it runs

**01 Diagnose.** We sit with the people who actually run the estate. We read the last insurer form, the last buyer questionnaire, and the last "we will do that next quarter".

**02 A 90-day sprint.** Board-readable outcome: a control pack, a gap list that has been closed or owned, and a date with an accredited assessor if you are ready.

**03 Then a retainer if the seat still needs filling.** Someone has to keep the pack alive. That is the [fractional Head of IT](/fractional-head-of-it) seat. Or we leave the place stronger and you run the cycle yourselves.

#### What you leave with

- A pack an insurer, a PE house, or an enterprise buyer can read.
- Controls implemented, with owners.
- A path to CE, CE+, or ISO 27001 certification through an accredited assessor. We are not that assessor.
- Fewer questions that bounce to the FD.

#### FAQs

**Do you certify Cyber Essentials or ISO 27001?**  
No. The Technology Framework is not a certification body. We implement the controls. An accredited assessor certifies CE, CE+, and ISO 27001.

**What is the difference between Cyber Essentials and CE+?**  
Cyber Essentials is the self-assessed baseline most insurers now expect. CE+ adds a hands-on technical test by an assessor. If the renewal or the buyer asks for Plus, plan for Plus.

**When do we need ISO 27001 as well?**  
When you sell to enterprise, PE, or the public sector, and they ask for it in the contract or the data room. We implement. The assessor certifies.

**Will this help with the insurance cyber questionnaire?**  
That is the point of the sprint. The renewal pack is documents, owners, and dates. Not a paragraph of intent.

**Can this run while we keep our MSP?**  
Yes. You keep the MSP if it works. We sit above it and make the controls real. The MSP often does the tickets that the controls create.

**Do you sell a separate vCISO product?**  
No. Board cyber sits inside the Head of IT seat and this sprint. We do not sell a standalone vCISO line.

#### CTA

Book a conversation.  
Telephone [0117 456 5486](tel:+441174565486).  
Email [hello@thetechnologyframework.com](mailto:hello@thetechnologyframework.com).

#### Related links

- [Fractional Head of IT](/fractional-head-of-it)
- [How we work](/how-we-work)
- [IT for professional services, 50-200](/professional-services-it)
- [South West wealth, IFA and SIPP](/south-west-wealth-ifa)
- [Proof](/proof)
- [Book a conversation](/contact)

#### Service JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "90-day Cyber Essentials Plus and ISO 27001 sprint",
  "url": "https://thetechnologyframework.com/cyber-essentials-iso-27001",
  "description": "We implement Cyber Essentials, CE+ and ISO 27001 controls. An accredited assessor certifies. Walk into the insurance renewal with a pack they can read.",
  "provider": {
    "@id": "https://thetechnologyframework.com/#organization"
  },
  "areaServed": [
    { "@type": "City", "name": "Bristol" },
    { "@type": "AdministrativeArea", "name": "South West England" },
    { "@type": "City", "name": "London" },
    { "@type": "Country", "name": "United Kingdom" }
  ]
}
```

**Breadcrumbs:** Home > CE+ / ISO sprint

---

### 5.4 `/microsoft-copilot-readiness` - The tenant

**Page name:** Copilot readiness then 30-day pilot  
**Primary keyword / intent:** Microsoft Copilot readiness. They bought licences. The tenant is unsafe.  
**Secondaries:** Microsoft 365 Copilot governance (H2), Purview oversharing (first section).  
**Title tag (54 chars):** Microsoft Copilot readiness | The Technology Framework  
**Meta description (139 chars):** Microsoft Copilot stays unsafe while the shared drive is. Purview, oversharing, labels. Then a 30-day pilot on the seats you actually need.  
**H1:** Microsoft Copilot readiness, then a 30-day pilot.  
**Kicker:** The tenant  
**Schema:** Service, FAQPage, BreadcrumbList  
**Internal links:** `/fractional-head-of-it`, `/cyber-essentials-iso-27001`, `/how-we-work`, `/proof`, `/contact`, `/professional-services-it`

#### Intro

Copilot stays unsafe while the shared drive is.

Purview, oversharing, labels, the right seats. Then a 30-day pilot on the seats you actually need.

Copilot is sitting on a tenant that would fail an insurer. That is the cost of waiting.

#### Who this is for

Firms that already bought Microsoft 365 Copilot, or are about to. Professional services of 50-200, where every shared mailbox is a biography of the client book. South West wealth and IFA firms, where a prompt must not surface another family's file.

If nobody owns the tenant, start with the [fractional Head of IT](/fractional-head-of-it) seat. This page is the tenant sprint inside that work.

#### Microsoft 365 Copilot governance

We make the tenant fit to try Copilot.

- Oversharing. The open link, the "everyone" group, the shared drive that never had an owner.
- Purview. Retention, DLP, audit. What an insurer will ask for after the first incident.
- Labels. What is client, what is internal, what is partner.
- The right seats. Who actually needs Copilot. Who can wait.

Then a 30-day pilot. Measured. Narrow. On the seats that will tell you the truth.

#### How it runs

**01 Diagnose.** We sit with the people who actually run the tenant. We look at sharing, labels, and the licences already on the bill.

**02 A 90-day window, with a 30-day pilot inside it.** First the tenant. Then the pilot. Board-readable outcome: what is safe, what is not, which seats earned the licence.

**03 Then a retainer if the seat still needs filling.** Governance drifts. Someone has to own it. Or we leave the place stronger.

#### What you leave with

- A tenant you can defend to an insurer.
- Labels and sharing rules people can actually follow.
- A 30-day pilot result. Keep, cut, or pause the seats.
- A written view the board can read without a Microsoft dialect.

#### FAQs

**We already bought the licences. Are we too late?**  
No. Most firms buy first. The work is still the tenant, then a 30-day pilot on the seats you actually need. Unused licences are a bill problem. Unsafe licences are an insurer problem.

**What is Purview doing in a Copilot conversation?**  
Copilot reads what people can already see. If oversharing is the culture, Purview is how you prove you stopped it. Labels, DLP, audit. The boring layer that makes the pilot honest.

**Will you roll Copilot out to the whole firm?**  
We pilot the seats you actually need. Whole-firm rollouts wait for the tenant and the KPI. This is readiness and a 30-day pilot.

**Does this replace Cyber Essentials work?**  
No. A tenant that would fail an insurer still needs [the evidence pack](/cyber-essentials-iso-27001). The two sprints often run together.

**Do you keep our MSP?**  
Yes, if it works. We sit above it. The MSP still handles the tickets the new labels create.

#### CTA

Book a conversation.  
Telephone [0117 456 5486](tel:+441174565486).  
Email [hello@thetechnologyframework.com](mailto:hello@thetechnologyframework.com).

#### Related links

- [Fractional Head of IT](/fractional-head-of-it)
- [Cyber Essentials Plus and ISO 27001](/cyber-essentials-iso-27001)
- [How we work](/how-we-work)
- [Proof](/proof)
- [Book a conversation](/contact)

#### Service JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Microsoft Copilot readiness and 30-day pilot",
  "url": "https://thetechnologyframework.com/microsoft-copilot-readiness",
  "description": "Purview, oversharing, labels, the right seats. Then a 30-day Microsoft Copilot pilot on the seats you actually need.",
  "provider": {
    "@id": "https://thetechnologyframework.com/#organization"
  },
  "areaServed": [
    { "@type": "City", "name": "Bristol" },
    { "@type": "AdministrativeArea", "name": "South West England" },
    { "@type": "City", "name": "London" },
    { "@type": "Country", "name": "United Kingdom" }
  ]
}
```

**Breadcrumbs:** Home > Copilot readiness

---

### 5.5 `/azure-finops` - The bill

**Page name:** Azure FinOps  
**Primary keyword / intent:** Azure FinOps. Bill over £10k/month. FD-readable sprint.  
**Secondaries:** Azure cost optimisation UK (H2), cloud bill too high (intro).  
**Title tag (50 chars):** Azure FinOps only when the bill is over £10k | TTF  
**Meta description (142 chars):** Azure FinOps only if the cloud bill is over £10k a month. A fixed sprint a finance director can read. If it can fund a hire, it can fund this.  
**H1:** Azure FinOps, only when the bill is over £10k a month.  
**Kicker:** The bill  
**Schema:** Service, FAQPage, BreadcrumbList  
**Internal links:** `/fractional-head-of-it`, `/how-we-work`, `/proof`, `/contact`, `/who-we-work-with`

#### Intro

If the cloud bill can fund a hire, it can fund a sprint.

This is a fixed piece of work a finance director can read. We take it only when the Azure or cloud bill is over £10k a month. Below that, the saving rarely funds the work. We do not chase small bills.

Contracts keep auto-renewing. That is the cost of waiting.

#### Who this is for

Firms whose Azure or wider cloud bill is over £10k a month. Often 50-200 people. Often a PE-backed estate that grew by acquisition. Sometimes a professional services tenant that kept every resource "just in case".

If the bill is under £10k a month, this offer is not for you. Book a conversation about the [Head of IT seat](/fractional-head-of-it) instead, if the problem is ownership.

#### Azure cost optimisation a finance director can read

We treat the bill as a board paper.

- What you pay. What it is for. What nobody can name.
- Reserved capacity, orphaned resource, the environment that stayed up after the project left.
- A written recommendation with a number, an owner, and a risk.
- The 80% off a live cloud bill, and the 250+ servers to Azure, sit on [proof](/proof). They are facts from a live estate. They are not a promise that your bill moves the same way.

#### How it runs

**01 Diagnose.** We sit with finance and with the people who actually run the subscriptions. We need the bill, not a tour.

**02 A 90-day sprint.** Board-readable outcome: a cost pack, the changes we made or queued, and the run-rate you should expect next quarter.

**03 Then a retainer if the seat still needs filling.** Bills grow back when nobody owns them. One or two days a week, or we leave the place stronger.

#### What you leave with

- A pack the FD can read without a cloud dialect.
- Changes made or queued, with owners.
- A run-rate the board can put in the forecast.
- A clear no, if the estate is already tight. We will say that.

#### FAQs

**Do you take FinOps work if our bill is under £10k a month?**  
No. Azure FinOps here is only for firms whose Azure or cloud bill is over £10k a month. Below that, the sprint does not pay for itself.

**Is this the same as "IT cost management" on your old site?**  
The old WordPress page is gone. This is the offer that replaces it, and it is narrower. Cloud and Azure. Over £10k a month. A sprint a finance director can read.

**Will you promise an 80% cut?**  
No. 80% off a live cloud bill is a fact from an estate we already ran, listed on [proof](/proof). Your number will be your number.

**Do we have to move everything to Azure?**  
No. 250+ servers to Azure is also a proof fact, not a migration product. This page is the bill.

**Do you replace our cloud partner?**  
You keep the partner if they work. We sit above them for the cost pack and the decisions.

**Is there a monthly FinOps subscription on this page?**  
No. We do not publish a monthly price. After the sprint, the [Head of IT retainer](/fractional-head-of-it) is how the bill stays owned, if the seat still needs filling.

#### CTA

Book a conversation. Bring the last bill if you already know it is over £10k a month.  
Telephone [0117 456 5486](tel:+441174565486).  
Email [hello@thetechnologyframework.com](mailto:hello@thetechnologyframework.com).

#### Related links

- [Fractional Head of IT](/fractional-head-of-it)
- [How we work](/how-we-work)
- [Proof](/proof)
- [Who we work with](/who-we-work-with)
- [Book a conversation](/contact)

#### Service JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Azure FinOps",
  "url": "https://thetechnologyframework.com/azure-finops",
  "description": "Azure FinOps for firms whose Azure or cloud bill is over £10k a month. A fixed sprint a finance director can read.",
  "provider": {
    "@id": "https://thetechnologyframework.com/#organization"
  },
  "areaServed": [
    { "@type": "City", "name": "Bristol" },
    { "@type": "AdministrativeArea", "name": "South West England" },
    { "@type": "City", "name": "London" },
    { "@type": "Country", "name": "United Kingdom" }
  ]
}
```

**Breadcrumbs:** Home > Azure FinOps


### 5.6 `/production-it-agent` - The one workflow

**Page name:** One production IT agent  
**Primary keyword / intent:** production IT agent. One live automation that earns its keep. Then stop.  
**Secondaries:** Teams IT bot (H2), one workflow one KPI (H1 / deck).  
**Title tag (46 chars):** Production IT agent | The Technology Framework  
**Meta description (148 chars):** One production IT agent. One KPI. Then we stop. A Teams IT bot, a voice front door, or n8n / LangChain work that already earns its keep in the firm.  
**H1:** One production IT agent. One KPI. Then we stop.  
**Kicker:** The one workflow  
**Schema:** Service, FAQPage, BreadcrumbList  
**Internal links:** `/fractional-head-of-it`, `/how-we-work`, `/proof`, `/contact`, `/microsoft-copilot-readiness`

#### Intro

A Teams bot, a voice front door, or an automation that already earns its keep.

We put one agent into production. We agree one KPI. Then we stop. The live stack we already run is a production Teams agent, voice agents, n8n / LangChain. That is on [proof](/proof). This page is how that work is sold: one workflow, not a programme.

#### Who this is for

A firm that can name the workflow. Password resets that still hit the FD. A switchboard that dies at 12:30. A reconciliation that a person should not still be doing.

50-200 people. An MSP already in place. Someone on the leadership team who will own the KPI.

If you want "AI everywhere", this is the wrong page. If you want one thing live, keep reading.

#### What we do

One workflow. One production path.

- A Teams IT bot for the request that already has a clear owner and a clear finish line.
- A voice front door for the call that should never have reached a director.
- An automation (n8n / LangChain or the estate you already have) that earns its keep in the first month.

We pick the workflow in the diagnose. We do not arrive with a catalogue of agents.

#### How it runs

**01 Diagnose.** We sit with the people who actually run the estate. We name the workflow and the KPI. If we cannot name both, we do not start.

**02 A 90-day sprint, with the agent live inside it.** Board-readable outcome: one agent in production, one KPI, a short paper on what it did.

**03 Then we stop.** If the [Head of IT seat](/fractional-head-of-it) still needs filling, that is a different conversation. The agent offer ends when the KPI is live.

#### What you leave with

- One agent in production. Not a demo.
- One KPI the board can read.
- A decision: keep it, change the KPI, or turn it off.
- No backlog of "phase two agents" unless you open a new piece of work.

#### FAQs

**What counts as a production IT agent?**  
Something the firm uses for real work. A Teams IT bot, a voice front door, or an automation with an owner. If it only lives in a slide, it is not production.

**What KPI will you use?**  
Yours. Time back on a queue. Calls that no longer reach the director. Errors that stopped. We agree it before we build. We do not invent a vanity score.

**Will you build a fleet of agents?**  
No. One agent. One KPI. Then we stop. A second workflow is a second conversation.

**Is this Copilot?**  
No. [Copilot readiness](/microsoft-copilot-readiness) is the tenant and a 30-day pilot. This page is one workflow you own.

**Do you use n8n and LangChain?**  
Those are in the live stack on [proof](/proof). We use what the workflow needs. We do not sell a tool licence.

**Do you need to replace our MSP first?**  
No. You keep the MSP if it works. The bot often sits in front of the same queue.

#### CTA

Book a conversation. Bring the one workflow you can already name.  
Telephone [0117 456 5486](tel:+441174565486).  
Email [hello@thetechnologyframework.com](mailto:hello@thetechnologyframework.com).

#### Related links

- [Fractional Head of IT](/fractional-head-of-it)
- [Microsoft Copilot readiness](/microsoft-copilot-readiness)
- [How we work](/how-we-work)
- [Proof](/proof)
- [Book a conversation](/contact)

#### Service JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Production IT agent",
  "url": "https://thetechnologyframework.com/production-it-agent",
  "description": "One production IT agent. One KPI. Then we stop. A Teams bot, a voice front door, or an automation that already earns its keep.",
  "provider": {
    "@id": "https://thetechnologyframework.com/#organization"
  },
  "areaServed": [
    { "@type": "City", "name": "Bristol" },
    { "@type": "AdministrativeArea", "name": "South West England" },
    { "@type": "City", "name": "London" },
    { "@type": "Country", "name": "United Kingdom" }
  ]
}
```

**Breadcrumbs:** Home > Production IT agent

---

### 5.7 `/how-we-work` - Diagnose / 90 days / retainer

**Page name:** How we work  
**Primary keyword / intent:** How a named Head of IT engagement runs. Diagnose, 90 days, then a retainer if the seat still needs filling.  
**Secondaries:** 90-day sprint, board-readable outcome.  
**Title tag (49 chars):** How we work: 90-day sprint, then a retainer | TTF  
**Meta description (147 chars):** Diagnose. 90 days. Then a retainer if the seat still needs filling. A 90-day sprint with a board-readable outcome, then one or two days a week.  
**H1:** Diagnose. 90 days. Then a retainer if the seat still needs filling.  
**Kicker:** How we work  
**Schema:** FAQPage, BreadcrumbList (no extra Service type)  
**Internal links:** `/fractional-head-of-it`, `/cyber-essentials-iso-27001`, `/microsoft-copilot-readiness`, `/azure-finops`, `/production-it-agent`, `/who-we-work-with`, `/proof`, `/contact`

#### Intro

We sit with the people who actually run the estate. We run a 90-day sprint with a board-readable outcome. Then one or two days a week after that, or we leave the place stronger.

That is the whole method. It is how the [seat](/fractional-head-of-it) is filled, and how each of the four sprints is scoped.

#### Who this is for

The FD who became the IT department. The MD who is tired of being the escalation. The board that asked about cyber, Copilot, or the cloud bill, and heard a silence.

You are 50-200 people in professional services, South West wealth, or a PE-backed roll-up. Read [who we work with](/who-we-work-with).

#### 01 We sit with the people who actually run the estate

Not a tour of the reception. The MSP lead. The office manager who resets the MFA. Finance, who sees the auto-renewals. The person who still has the global admin because they were first in.

We come away with what is true. Vendors, access, the last insurer form, the bill, the one workflow that hurts.

#### 02 A 90-day sprint with a board-readable outcome

90 days is long enough to change something and short enough to keep a board's attention.

The outcome depends on the offer you opened:

- [The seat](/fractional-head-of-it): operating model, vendor map, someone named in the room.
- [The evidence](/cyber-essentials-iso-27001): a pack an insurer or buyer can read. We implement. An assessor certifies.
- [The tenant](/microsoft-copilot-readiness): Purview, labels, a 30-day Copilot pilot on the right seats.
- [The bill](/azure-finops): a cost pack, only if the Azure or cloud bill is over £10k a month.
- [The one workflow](/production-it-agent): one agent, one KPI, in production.

In 90 days the board has an operating model, the insurer has evidence, and you stop being the IT department. That line is already on the homepage. It still holds.

#### 03 One or two days a week after that, or we leave the place stronger

If the seat still needs filling, we stay. One or two days a week. Named. In the room.

If the sprint was the job, we leave. The pack, the tenant, the bill, or the agent stays with you.

We do not publish a day rate or a monthly price.

#### What you leave with

A board paper. Owners. A next step that fits on one page. And a named senior if you still want one.

#### FAQs

**Do we have to take a retainer after 90 days?**  
No. The retainer exists if the seat still needs filling. The third step is also "or we leave the place stronger".

**Can two offers run in the same 90 days?**  
Often the seat and the evidence pack. Sometimes the tenant. FinOps only if the bill is over £10k a month. The agent only if you can name the workflow. We will not stack five sprints on a 50-person firm.

**Who do you talk to first?**  
The people who actually run the estate. Then the FD or MD who booked the conversation.

**Will you present to the board?**  
Yes. The sprint is built to be board-readable. That is the outcome, not a side effect.

**Do you work on site?**  
When the estate needs it. A lot of the work is in the tenant, the bill, and the pack. The public number is 0117. The registered office is in London.

**Is this IT support?**  
No. Another helpdesk will not fix this. The method is diagnose, a 90-day outcome, then a Head of IT seat if you still need one.

#### CTA

Book a conversation.  
Telephone [0117 456 5486](tel:+441174565486).  
Email [hello@thetechnologyframework.com](mailto:hello@thetechnologyframework.com).

#### Related links

- [Fractional Head of IT](/fractional-head-of-it)
- [Who we work with](/who-we-work-with)
- [Proof](/proof)
- [Book a conversation](/contact)

**Breadcrumbs:** Home > How we work

---

### 5.8 `/who-we-work-with` - Hub for the three niches

**Page name:** Who we work with  
**Primary keyword / intent:** The three rooms: South West wealth, PE carve-outs, professional services 50-200.  
**Secondaries:** 50-200 professional services, PE-backed roll-up.  
**Title tag (43 chars):** Who we work with | The Technology Framework  
**Meta description (139 chars):** 50-200 people in professional services, South West wealth, or a PE-backed roll-up. A named Head of IT for firms that have outgrown tickets.  
**H1:** 50-200 people. Three kinds of firm.  
**Kicker:** Who we work with  
**Schema:** FAQPage, BreadcrumbList  
**Internal links:** `/south-west-wealth-ifa`, `/pe-carve-out-it`, `/professional-services-it`, `/fractional-head-of-it`, `/how-we-work`, `/contact`

#### Intro

You are 50-200 people in professional services, South West wealth, or a PE-backed roll-up.

You have an MSP. You still need a Head of IT. A full-time director is too much. Another helpdesk will not fix this.

#### The three rooms

**[South West wealth, IFA and SIPP](/south-west-wealth-ifa)**  
Advice firms, SIPP operators, and wealth managers around Bristol and the wider South West. Insurers, the FCA file, and a tenant full of other people's money. A named senior on an 0117 number.

**[PE carve-out, TSA and Day-1](/pe-carve-out-it)**  
A named project, not a sixth offer. The TSA clock is running. Day-1 needs a pack. We fill the seat and implement the controls until the new estate stands up.

**[Professional services, 50-200](/professional-services-it)**  
Law, accountancy, consultancy, and the firms that look like them. Partners who still approve laptops. A board that asked about Copilot and heard a silence.

#### What we do in each room

The same five offers. The same method.

- [Fractional Head of IT](/fractional-head-of-it)
- [CE+ / ISO sprint](/cyber-essentials-iso-27001)
- [Copilot readiness](/microsoft-copilot-readiness)
- [Azure FinOps](/azure-finops) (only if the bill is over £10k a month)
- [One production IT agent](/production-it-agent)

Read [how we work](/how-we-work). Diagnose. 90 days. Then a retainer if the seat still needs filling.

#### Who this is not a fit for

Start-ups looking for a cheap helpdesk. Estates that want 24/7 tickets with no owner above them. Cloud bills under £10k a month that only wanted a FinOps discount. We will say no.

#### FAQs

**Do you only work in the South West?**  
No. The three rooms above are the ones we know best. The practice is UK-wide. The phone is 0117. The registered office is London.

**We are 40 people. Are we too small?**  
The homepage qualifier is 50-200. Under that, book a conversation only if the risk is oversized for the headcount (a SIPP book, a PE clock, an insurer who will not wait).

**We are 400 people. Are we too big?**  
Usually yes for a one-or-two-day seat. A carve-out inside a larger group can still be the right project. Read [PE carve-out IT](/pe-carve-out-it).

**Do you work with our existing MSP?**  
Yes. You keep the MSP if it works. We sit above it.

**Is PE carve-out a separate product?**  
No. It is a named project under this hub. The offers stay the five on the homepage.

#### CTA

Book a conversation.  
Telephone [0117 456 5486](tel:+441174565486).  
Email [hello@thetechnologyframework.com](mailto:hello@thetechnologyframework.com).

#### Related links

- [South West wealth, IFA and SIPP](/south-west-wealth-ifa)
- [PE carve-out IT](/pe-carve-out-it)
- [Professional services IT](/professional-services-it)
- [Fractional Head of IT](/fractional-head-of-it)
- [How we work](/how-we-work)
- [Book a conversation](/contact)

**Breadcrumbs:** Home > Who we work with

---

### 5.9 `/south-west-wealth-ifa` - South West wealth / IFA / SIPP

**Page name:** South West wealth, IFA and SIPP  
**Primary keyword / intent:** IFA / SIPP / wealth manager IT, South West. Named Head of IT plus evidence.  
**Secondaries:** Head of IT Bristol / fractional IT South West (H2), IFA IT security (body).  
**Title tag (49 chars):** Head of IT for South West wealth, IFA, SIPP | TTF  
**Meta description (140 chars):** Fractional Head of IT for South West wealth, IFA and SIPP firms. Cyber evidence for the insurer, Copilot governance, a named senior on 0117.  
**H1:** A Head of IT for South West wealth, IFA and SIPP firms.  
**Kicker:** South West wealth  
**Schema:** FAQPage, BreadcrumbList  
**Internal links:** `/who-we-work-with`, `/fractional-head-of-it`, `/cyber-essentials-iso-27001`, `/microsoft-copilot-readiness`, `/how-we-work`, `/contact`

#### Intro

Advice firms, SIPP operators, and wealth managers in Bristol and the wider South West. You hold other people's money, and the insurer knows it.

A named Head of IT. One or two days a week. You keep the MSP. We sit above it.

#### Who this is for

IFA networks and independents. SIPP and SSAS operators. Discretionary and advisory wealth firms. Often 50-200 people, or a smaller firm whose client book already carries a 200-person risk.

The FD has become the IT department. The next cyber form has landed. Copilot is on a tenant that still shares a drive called "Clients".

#### What we do here

- Fill the [fractional Head of IT](/fractional-head-of-it) seat. Operating model, vendors, board paper.
- Build the [evidence pack](/cyber-essentials-iso-27001). Cyber Essentials, CE+, ISO 27001 when a platform, a PE holder, or an enterprise introducer asks. We implement. An accredited assessor certifies.
- Make [Copilot](/microsoft-copilot-readiness) wait until oversharing is closed. Then a 30-day pilot on the seats that advise, not the seats that file.

Azure FinOps only if the cloud bill is over £10k a month. Most wealth tenants are not there. We will not force it.

#### Head of IT, Bristol and the South West

We know this room. Clifton is already on the homepage hero. The work is in the tenant, the insurer pack, and the leadership meeting, not in a harbour office we do not have.

If you are in Bath, Exeter, or further into the South West, the same seat applies. If you are a wealth firm in London with a South West book, book the conversation anyway.

#### How it runs

[How we work](/how-we-work). Diagnose. 90 days. Then a retainer if the seat still needs filling.

In 90 days the board has an operating model and the insurer has evidence. You stop being the IT department.

#### What you leave with

- A named senior the managing director can put in front of the board.
- A pack for the insurance cyber questionnaire.
- A tenant that can survive a prompt.
- The MSP still in place, governed.

#### FAQs

**Do you understand IFA and SIPP IT security?**  
The work is ownership, the tenant, and the evidence pack. Client data, access, and the insurer form are the job. We implement controls. We do not pretend to be your compliance officer or your certification body.

**Are you a Bristol IT support company?**  
No. We do not sell helpdesk or MSP tickets. The number is 0117. The offer is a named Head of IT plus assurance.

**Will this help with FCA or insurer questions?**  
The evidence sprint is built for the insurance cyber questionnaire and for buyers who ask for CE+ or ISO 27001. FCA permissions stay with you and your compliance lead.

**Can a smaller IFA book a conversation?**  
Yes, if the risk is the client book rather than the headcount. The usual qualifier is 50-200 people.

**Do you replace our outsourced IT?**  
You keep the MSP if it works. We sit above it.

#### CTA

Book a conversation.  
Telephone [0117 456 5486](tel:+441174565486).  
Email [hello@thetechnologyframework.com](mailto:hello@thetechnologyframework.com).

#### Related links

- [Who we work with](/who-we-work-with)
- [Fractional Head of IT](/fractional-head-of-it)
- [Cyber Essentials Plus and ISO 27001](/cyber-essentials-iso-27001)
- [Microsoft Copilot readiness](/microsoft-copilot-readiness)
- [How we work](/how-we-work)
- [Book a conversation](/contact)

**Breadcrumbs:** Home > Who we work with > South West wealth, IFA and SIPP


### 5.10 `/pe-carve-out-it` - PE carve-out / Day-1 / TSA

**Page name:** PE carve-out IT  
**Primary keyword / intent:** PE carve-out IT, TSA IT, Day-1 IT separation. Named project, not a sixth offer.  
**Secondaries:** Day-1 pack (H2), TSA clock (intro).  
**Title tag (51 chars):** PE carve-out IT when the TSA clock is running | TTF  
**Meta description (144 chars):** PE carve-out IT when the TSA clock is running. A Day-1 pack, a named Head of IT, and evidence a buyer or an insurer can actually read. UK firms.  
**H1:** PE carve-out IT when the TSA clock is running.  
**Kicker:** Day-1 pack  
**Schema:** FAQPage, BreadcrumbList (project page, not a sixth Service offer)  
**Internal links:** `/who-we-work-with`, `/fractional-head-of-it`, `/cyber-essentials-iso-27001`, `/how-we-work`, `/azure-finops`, `/proof`, `/contact`

#### Intro

PE carve-out or Day-1 pack. A named project for PE-backed businesses when the TSA clock is running.

This is not a sixth offer. The offers stay the five on the homepage. Here they are aimed at a clock. Identity, email, the estate you are leaving, the estate you must stand up, and the evidence a buyer or an insurer will ask for on Day-1.

#### Who this is for

A deal team, an FD, or an operating partner with a Transitional Services Agreement that has a date on it. A carve-out from a group tenant. A roll-up that just bought a firm whose IT still lives in someone else's contract.

50-200 people in the newco, or a slice of a larger group that will be 50-200 once it stands alone.

#### The Day-1 pack

What "stood up" has to mean on the morning you cannot use the seller's estate.

- Identity, email, devices, the first admin who is actually yours.
- Vendor map. What transfers. What dies with the TSA.
- [Evidence](/cyber-essentials-iso-27001) a buyer, a lender, or an insurer can read. We implement CE / CE+ / ISO controls. An accredited assessor certifies.
- A [named Head of IT](/fractional-head-of-it) in the room for the weekly that used to have nobody.

If the cloud bill on the new estate is over £10k a month, [Azure FinOps](/azure-finops) can sit in the same 90 days. If it is not, we leave it.

#### How it runs

The TSA does not care about our calendar. We still use the method.

**01 Diagnose.** We sit with the people who actually run both estates. Seller IT, the MSP, finance, the deal team.

**02 90 days, or the days you have.** Board-readable outcome: a Day-1 pack, owners, and the first controls that will survive a questionnaire.

**03 Then a retainer if the seat still needs filling.** Newcos keep needing a Head of IT after Day-1. One or two days a week, or we leave the place stronger.

Read [how we work](/how-we-work).

#### What you leave with

- A Day-1 pack the operating partner can read.
- A named senior on the newco side of the TSA.
- Controls in progress, with an assessor in the plan if certification is required.
- A vendor map that says what stops when the clock stops.

#### FAQs

**Is this a separate product from fractional Head of IT?**  
No. It is a named project. The seat, the evidence sprint, and sometimes the bill, pointed at a TSA date.

**Do you run the whole separation programme?**  
We own IT leadership and the pack. Legal, tax, and the wider carve-out stay with the deal team. We will not pretend otherwise.

**What if Day-1 is in four weeks?**  
Say so on the first call. We will tell you what will be true by then, and what will still be a risk. We will not invent a miracle.

**Will you talk to the seller's IT?**  
Yes. We sit with the people who actually run the estate. That includes the people you are leaving.

**Do you certify the newco for Cyber Essentials before Day-1?**  
We implement. An accredited assessor certifies. Timelines depend on scope and on the assessor. We will not claim we are the certification body.

**Do you work only with South West carve-outs?**  
No. PE-backed roll-ups sit in [who we work with](/who-we-work-with) alongside South West wealth and professional services. The phone is 0117. The registered office is London.

#### CTA

Book a conversation. Bring the TSA date if you have one.  
Telephone [0117 456 5486](tel:+441174565486).  
Email [hello@thetechnologyframework.com](mailto:hello@thetechnologyframework.com).

#### Related links

- [Who we work with](/who-we-work-with)
- [Fractional Head of IT](/fractional-head-of-it)
- [Cyber Essentials Plus and ISO 27001](/cyber-essentials-iso-27001)
- [Azure FinOps](/azure-finops)
- [How we work](/how-we-work)
- [Book a conversation](/contact)

**Breadcrumbs:** Home > Who we work with > PE carve-out IT

---

### 5.11 `/professional-services-it` - Professional services 50-200

**Page name:** IT for professional services, 50-200  
**Primary keyword / intent:** IT for professional services firms of 50-200. Named Head of IT.  
**Secondaries:** Cyber Essentials for professional services (H2), outgrown MSP (intro).  
**Title tag (50 chars):** Head of IT for professional services, 50-200 | TTF  
**Meta description (139 chars):** A named Head of IT for professional services firms of 50-200 people. You keep the MSP. We sit above it. Cyber, Copilot, and the cloud bill.  
**H1:** A Head of IT for professional services firms of 50-200.  
**Kicker:** Professional services  
**Schema:** FAQPage, BreadcrumbList  
**Internal links:** `/who-we-work-with`, `/fractional-head-of-it`, `/cyber-essentials-iso-27001`, `/microsoft-copilot-readiness`, `/azure-finops`, `/production-it-agent`, `/how-we-work`, `/contact`

#### Intro

Partners, a practice manager, and an MSP. The tickets still find the finance director.

You are 50-200 people. You have outgrown the MSP as your only IT leadership. A full-time IT director costs £130k before they have started. Fill the seat instead.

#### Who this is for

Law, accountancy, consultancy, surveyors, and the firms that look like them. A partnership or an LLP. A board that asked about cyber, Copilot, or the cloud bill. Nobody had an answer.

If you are a South West wealth or IFA firm, use the [wealth page](/south-west-wealth-ifa). If the TSA clock is running, use [PE carve-out IT](/pe-carve-out-it).

#### What we do

- [Fractional Head of IT](/fractional-head-of-it). Someone on the leadership team who owns IT. One or two days a week.
- [Cyber Essentials for professional services](/cyber-essentials-iso-27001), then CE+ and ISO 27001 when a client or a panel asks. We implement. An accredited assessor certifies.
- [Copilot readiness](/microsoft-copilot-readiness). Matter files and shared mailboxes first. Then a 30-day pilot on the seats you actually need.
- [Azure FinOps](/azure-finops) only if the Azure or cloud bill is over £10k a month.
- [One production IT agent](/production-it-agent) if you can name the workflow and the KPI.

#### How it runs

[How we work](/how-we-work). We sit with the people who actually run the estate. A 90-day sprint with a board-readable outcome. Then one or two days a week, or we leave the place stronger.

#### What you leave with

- A named senior the partners can put in the minutes.
- An insurer pack that is documents, not adjectives.
- A tenant that can survive Copilot, or a written no.
- The MSP still in place, if it works, with someone above it.

#### FAQs

**We already have an MSP. Why do we need you?**  
You have an MSP. You still need a Head of IT. The MSP runs the queue. We own the answers above it.

**Do you work with firms outside 50-200 people?**  
That is the qualifier on the homepage. Under 50, only if the risk is oversized. Over 200, only if a carve-out or a seat is clearly part-time.

**Can you help with client security questionnaires?**  
Yes. That is the evidence sprint. The pack is written so a panel, an insurer, or an enterprise client can read it.

**Will you train the partners on Copilot?**  
We make the tenant safe, then pilot the right seats. Firm-wide training is a later decision, after the 30-day pilot.

**Do you provide 24/7 support?**  
No. We do not sell helpdesk. Your MSP does out-of-hours, if you bought it.

**Are you based in London or the South West?**  
Registered office in London. Public phone 0117. We work with professional services firms across the UK.

#### CTA

Book a conversation.  
Telephone [0117 456 5486](tel:+441174565486).  
Email [hello@thetechnologyframework.com](mailto:hello@thetechnologyframework.com).

#### Related links

- [Who we work with](/who-we-work-with)
- [Fractional Head of IT](/fractional-head-of-it)
- [Cyber Essentials Plus and ISO 27001](/cyber-essentials-iso-27001)
- [Microsoft Copilot readiness](/microsoft-copilot-readiness)
- [How we work](/how-we-work)
- [Book a conversation](/contact)

**Breadcrumbs:** Home > Who we work with > Professional services, 50-200

---

### 5.12 `/proof` - The checkable facts

**Page name:** Proof  
**Primary keyword / intent:** Checkable facts behind the homepage numbers. No invented case studies.  
**Secondaries:** none. Do not keyword-stuff this page.  
**Title tag (46 chars):** Proof you can check | The Technology Framework  
**Meta description (142 chars):** Facts you can check. 20+ years as Head of IT. 90% fewer incidents. ISO 27001 and PCI DSS in 12 months. 80% off a live cloud bill. Live agents.  
**H1:** Facts you can check.  
**Kicker:** Proof  
**Schema:** FAQPage, BreadcrumbList  
**Internal links:** `/fractional-head-of-it`, `/cyber-essentials-iso-27001`, `/azure-finops`, `/production-it-agent`, `/how-we-work`, `/contact`

#### Intro

The homepage lists facts, not stories. This page says what each number means, in one sentence. We will not name a client, invent a sector, or add a testimonial.

The homepage heading says "Four facts you can check" and then shows five cards. Keep the homepage as it is. Here we list all five cards, plus the £130k line from the cost-of-waiting slab.

#### The facts

**20+ years as Head of IT.**  
The named senior has done the Head of IT job for more than twenty years. The person in the conversation is the person who does the work.

**90% fewer incidents. SLO from 45% to 98%.**  
An estate we ran became measurable, then reliable. Incidents fell by 90%. The service level moved from 45% to 98%. We will not name the firm.

**12 months. ISO 27001 and PCI DSS, implemented in the estate.**  
Both were implemented in a live estate inside a year. We implemented the controls. An accredited assessor certified. PCI DSS is a fact on this page. It is not a sixth offer. The assurance we sell is [Cyber Essentials, CE+, and ISO 27001](/cyber-essentials-iso-27001).

**80% off a live cloud bill. 250+ servers to Azure.**  
A real bill, a real estate. The [Azure FinOps](/azure-finops) offer is how that kind of work is sold now, and only when the Azure or cloud bill is over £10k a month. Your saving will be your saving.

**Live. Production Teams agent, voice agents, n8n / LangChain.**  
The [production IT agent](/production-it-agent) offer is one workflow, one KPI, then we stop. The stack on this line is already in production.

**£130k. A full-time IT director, before they have started.**  
Salary and on-cost before a single day in the room. The seat we sell is one or two days a week.

#### What we will not add

Client logos. Quotes. Fake names. Extra percentages. A case-study grid. If a later proof point is true and checkable, add it here with the same discipline. If it needs a story to make sense, leave it out.

#### FAQs

**Can we speak to a reference?**  
Ask on the call. We will not publish names on this page.

**Why is there no case-study library?**  
Because we will not invent one. The facts above are the public record.

**Does 80% off the bill apply to us?**  
No promise. That number is one live bill. [FinOps](/azure-finops) starts only over £10k a month, and ends with your run-rate.

**Did you certify the ISO and PCI work yourselves?**  
No. We implemented. An accredited assessor certified.

**Who is the named senior?**  
The person who takes the conversation. We do not print a biography on this page until the practice asks for one. See section 7.

**Are these UK results?**  
The practice is UK. The registered office is in London. The public phone is 0117. We will not pin a fact to a city we have not named on the homepage.

#### CTA

Book a conversation.  
Telephone [0117 456 5486](tel:+441174565486).  
Email [hello@thetechnologyframework.com](mailto:hello@thetechnologyframework.com).

#### Related links

- [Fractional Head of IT](/fractional-head-of-it)
- [How we work](/how-we-work)
- [Azure FinOps](/azure-finops)
- [Production IT agent](/production-it-agent)
- [Book a conversation](/contact)

**Breadcrumbs:** Home > Proof

---

### 5.13 `/contact` - Book a conversation

**Page name:** Book a conversation  
**Primary keyword / intent:** Book a conversation with The Technology Framework.  
**Secondaries:** 0117 number, hello@ email.  
**Title tag (46 chars):** Book a conversation | The Technology Framework  
**Meta description (149 chars):** Book a conversation with The Technology Framework. Named Head of IT for firms that outgrew tickets. 0117 456 5486 or hello@thetechnologyframework.com  
**H1:** Book a conversation.  
**Kicker:** The next 90 days  
**Schema:** ContactPage, FAQPage, BreadcrumbList  
**Internal links:** `/how-we-work`, `/who-we-work-with`, `/privacy`, `/fractional-head-of-it`, five offers as a short list

#### Intro

In 90 days the board has an operating model, the insurer has evidence, and you stop being the IT department.

Telephone [0117 456 5486](tel:+441174565486).  
Email [hello@thetechnologyframework.com](mailto:hello@thetechnologyframework.com).  
Registered office: 20-22 Wenlock Road, London N1 7GU.

#### Who this is for

The FD who became the IT department. 50-200 people in professional services, South West wealth, or a PE-backed roll-up. You have an MSP. You still need a Head of IT.

#### The form

Keep the fields already on the homepage. Do not add a thank-you page unless the form stops using mailto.

- Name
- Business
- Email
- Telephone
- Message

Submit label: Book a conversation.

Helper line: We use what you send only to reply. We do not sell it. See the [privacy note](/privacy).

If the current mailto pattern stays, keep the subject `Conversation with The Technology Framework` and the same body lines (Name, Business, Email, Telephone, then the message).

#### What happens next

We read what you sent. We reply to arrange a conversation. Bring the thing that hurts: the insurer form, the TSA date, the Copilot licences, or the bill, if it is over £10k a month.

#### FAQs

**Can I book without the form?**  
Yes. Call 0117 456 5486 or write to hello@thetechnologyframework.com.

**Do I need to prepare a brief?**  
No. A sentence is enough. If you have a bill, a TSA date, or a cyber form, attach or paste it.

**Will a junior reply?**  
A named senior does the work. The conversation is with the practice, not a qualifying desk.

**Do you work outside the South West?**  
Yes. UK firms. The three rooms we know best are on [who we work with](/who-we-work-with).

**What will you do with my details?**  
Reply and arrange a conversation. We do not sell your information. Full note on [privacy](/privacy).

#### CTA

The form above, or the phone, or the email. That is the whole path.

#### Related links

- [How we work](/how-we-work)
- [Who we work with](/who-we-work-with)
- [Fractional Head of IT](/fractional-head-of-it)
- [Privacy](/privacy)

#### ContactPage JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Book a conversation",
  "url": "https://thetechnologyframework.com/contact",
  "mainEntity": {
    "@id": "https://thetechnologyframework.com/#organization"
  }
}
```

**Breadcrumbs:** Home > Book a conversation

---

### 5.14 `/privacy` - Privacy

**Page name:** Privacy  
**Primary keyword / intent:** How enquiry details are used. Legal page, not a ranking play.  
**Title tag (34 chars):** Privacy | The Technology Framework  
**Meta description (140 chars):** How The Technology Framework Ltd uses enquiry details. Company 13918137, 20-22 Wenlock Road, London N1 7GU. We do not sell your information.  
**H1:** Privacy  
**Kicker:** (omit, or use "Legal")  
**Schema:** FAQPage, BreadcrumbList  
**Internal links:** `/contact`, `/`

#### Intro

Lift the homepage note. Do not invent a longer policy unless counsel writes one.

#### The note (publish this as the body)

The Technology Framework Ltd (company number 13918137), of 20-22 Wenlock Road, London N1 7GU, uses enquiry details only to reply and to arrange a conversation. We do not sell your information. Write to hello@thetechnologyframework.com to ask for a copy, a correction or a deletion.

#### What that means in practice

- **What we collect.** The form fields: name, business, email, telephone, message. Plus whatever you include in an email or a call.
- **Why.** To reply and to arrange a conversation.
- **What we do not do.** We do not sell your information.
- **Your request.** Write to [hello@thetechnologyframework.com](mailto:hello@thetechnologyframework.com) for a copy, a correction, or a deletion.

If a later counsel-drafted policy replaces this page, keep these facts and this address. Do not invent a DPO name, a cookie wall, or a lawful-basis essay without instruction.

#### FAQs

**Do you sell enquiry details?**  
No.

**Who do I write to?**  
hello@thetechnologyframework.com

**What is the company number?**  
13918137. The Technology Framework Ltd. Registered in England.

**Where is the registered office?**  
20-22 Wenlock Road, London N1 7GU.

**Do you use the details for marketing lists?**  
The published note says we use them to reply and to arrange a conversation. We do not sell them. Do not add a newsletter signup on this build.

**Is there a separate cookie policy?**  
Not on the live site today. Do not invent one. If analytics are added later, counsel writes the line.

#### CTA

Questions about your details: [hello@thetechnologyframework.com](mailto:hello@thetechnologyframework.com).  
To book work: [contact](/contact) or 0117 456 5486.

#### Related links

- [Book a conversation](/contact)
- [Home](/)

**Breadcrumbs:** Home > Privacy


---

## 6. Implementation checklist for the cloud agent

Ship the 14 URLs. Reuse the magazine CSS already in `index.html`. Do not redesign.

### Files to add

- Extract shared CSS from `index.html` to something like `/css/ttf.css`. Keep indigo `#261C40` and cyan `#00C3DC`.
- Keep `/index.html` as the magazine homepage. Apply section 4.4 only.
- Add one HTML file per slug. Prefer `fractional-head-of-it.html` (and twins) plus `"trailingSlash": "never"` in `staticwebapp.config.json`. If you instead use folders with `index.html`, force canonicals without a trailing slash and 301 the slash.
- `/404.html` in the same voice. H1: "This page is not here." Link home, the five offers, `/contact`, phone 0117 456 5486. Do not invent a joke.
- `/robots.txt` - allow `/`, point at `https://thetechnologyframework.com/sitemap.xml`. Do not noindex any of the 14 URLs.
- `/sitemap.xml` - the 14 URLs, `https`, no trailing slash, `lastmod` on ship date. Homepage changefreq weekly. Others monthly. Do not invent priority theatre; 0.8 home, 0.7 offers, 0.6 niches, 0.5 proof/how/privacy/contact is enough.
- `/staticwebapp.config.json` - trailing slash never, 301s from section 2, `404.html` as the exception for unknown routes.
- Shared header and footer partials, or a single include. Same nav on every page.
- JSON-LD: sitewide Organization + ProfessionalService on every page. Per-page Service / FAQPage / ContactPage / BreadcrumbList as specified in section 5.

### URL, canonical, language

- Production canonical host: `https://thetechnologyframework.com`
- No trailing slash. 301 `/slug/` → `/slug`.
- `rel="canonical"` on every page, absolute, https, matching the sitemap.
- `lang="en-GB"` on `<html>`.
- `hreflang="en-GB"` only. Do not invent other languages.
- Open Graph: `og:title`, `og:description`, `og:url`, `og:type=website`, `og:locale=en_GB`. Use the page title and meta. If you reuse the Clifton hero, `og:image` may be that file. Alt: Clifton Suspension Bridge, Bristol. That is the picture, not an office.
- Do not put the Azure preview host in canonicals, sitemaps, or schema.

### Nav, CTAs, homepage

- Header and footer as section 1.
- Homepage: keep body copy. Make slabs, PE line, how we work, proof, book, situation 03, and privacy into links (section 4.4).
- PE carve-out is in the who-we-work-with footer column. It is not in the Offers menu.
- Every page CTA: Book a conversation, `tel:+441174565486`, `hello@thetechnologyframework.com`.
- Header phone stays visible.

### Schema

- Validate JSON before ship. Known fields only.
- Omit `priceRange`, `sameAs`, and `logo` until real values exist (section 7).
- `foundingDate` `2022-02-15` is from Companies House. Safe to keep.
- FAQPage: one `Question` / `acceptedAnswer` pair per FAQ on that page. Use the FAQ text in section 5. Reusable shape:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "QUESTION TEXT",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ANSWER TEXT"
      }
    }
  ]
}
```

- BreadcrumbList on every page. Offer pages: Home > page. Niche pages: Home > Who we work with > page.
- Service schema only on the five offer URLs. Do not mark `/pe-carve-out-it` as a sixth Service.

### Redirects

- Implement the table in section 2.
- Crawl `thetechnologyframework.com` before go-live. 301 any other WordPress leftover to `/` or to the single closest of the five offers. Do not recreate DevOps, cloud migrations, IT strategy, or "our services".
- Do not reuse any old London `020` number found on leftover pages.

### Forms, privacy, indexation

- Form fields stay: Name, Business, Email, Telephone, Message.
- Privacy helper links to `/privacy`.
- Do not add a thank-you URL. If mailto stays, the user never leaves a success page. If a backend is added later, stay on `/contact` with an in-page confirmation.
- Noindex nothing in this build. No staging `noindex` left on production.
- Do not add a newsletter, a cookie banner, or extra tracking unless asked. If you add analytics later, do not invent a cookie policy.

### On-page hygiene

- One H1. Kickers are not H1s.
- UK English. organisation, specialised.
- No em dashes in page copy.
- No day rate, no monthly price.
- FinOps: £10k/month floor in title or H1, intro, and a FAQ.
- CE / CE+ / ISO: "We implement. An accredited assessor certifies." wherever certification is mentioned.
- Internal links use the slugs and anchors in section 5.
- 404, sitemap, robots, canonicals, redirects, schema: all in the first PR, not a "phase two".

### Trailing-slash convention (decision)

**Use no trailing slash.** Azure: `"trailingSlash": "never"`. Canonicals and sitemap match. Old WordPress slash URLs 301 to the new form.

---

## 7. Facts we did not invent / open questions

### Do not fabricate

- Client names, logos, sectors for the proof numbers, quotes, or testimonials.
- Extra metrics. The public set is: 20+ years; 90% fewer incidents; SLO 45% to 98%; 12 months ISO 27001 and PCI DSS implemented; 80% off a live cloud bill; 250+ servers to Azure; live Teams / voice / n8n / LangChain; £130k full-time IT director before they have started.
- A day rate, a monthly retainer price, a package price, or a "from £".
- A Bristol street address, harbour office, or "Bristol HQ".
- A claim that we certify CE, CE+, ISO, or PCI. We implement. An assessor certifies.
- A sixth offer (DevOps, vCISO product, helpdesk, digital transformation, cloud migration as a product, PCI as a product).
- Azure FinOps for bills under £10k/month.
- Parent brands. DeskCrew, Resolve, or TTF as a group. The Technology Framework is a standalone practice.
- VAT number, DPO name, cookie policy, social `sameAs` URLs, a public biography, or a headshot, unless supplied.
- Search volumes.
- Old WordPress claims (40% cloud saving, "premier IT management", "born in Bristol" as an origin story with an office). Do not recycle them.

### Used from the public record, not invented

- Legal name, company number 13918137, registered in England, registered office 20-22 Wenlock Road, London N1 7GU.
- Incorporated 15 February 2022 (Companies House). Used only as `foundingDate` in schema.
- SIC 62020 on the Companies House record. Do not put it on marketing pages.
- Public phone 0117 456 5486, email hello@thetechnologyframework.com.
- All homepage magazine lines listed in the brief and checked against the live preview.

### Open questions (do not invent the answer)

1. **Public name of the named senior.** Homepage says "a named senior does the work" and does not print a name. Leave unnamed until the practice supplies a byline.
2. **`sameAs`.** No LinkedIn, Companies House URL, or social profile was supplied for schema. Omit the field.
3. **`Organization.logo`.** A brand mark exists in the HTML. No stable absolute logo URL was supplied. Omit until `/logo.png` (or similar) is a real production file, then add the absolute URL.
4. **Homepage "Four facts" vs five cards.** Keep the homepage heading. The proof page lists all five cards plus the £130k line. Do not "fix" the homepage count.
5. **Reference calls.** Proof FAQ says "ask on the call". Do not publish a reference list.
6. **Form backend.** Live form is mailto. Stay on mailto unless asked to wire a backend. No thank-you page.
7. **Further WordPress leftovers.** `/our-services/` is live. Crawl at ship time for `/cloud-migrations/`, `/it-strategy/`, `/it-management/`, `/privacy-policy/`, and any `?p=` URLs. 301 them. Do not write new copy for them.
8. **Old `020` phone** on leftover WordPress pages. Do not reuse. Confirm it is gone after redirects.
9. **VAT number, ICO registration, insurance wording.** Unknown. Do not invent footer lines for them.
10. **Counsel-drafted privacy policy.** The live note is the whole public policy. Do not expand it into a fake GDPR essay.
11. **Keyword volumes.** Not pulled. Do not add invented numbers to section 3 later without a real export.
12. **Previous company name** on Companies House (short early period). Do not publish it.

If a fact is missing and the page would be weaker without it, leave the gap. Do not fill it with a plausible line.
