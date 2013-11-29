---
layout: "post"
title: "Oppdatert datastandard"
date: "2013-11-29 14:15:00 +0100"
author: "Hans Kristian"
gravatar: "c736f0ded2a01e0c33c1057bd7ddf682"
twitter: "starefossen"
version: 1.0.0
categories: ["datastandard"]
---

Feltet <code>.opprettet</code> er nå fjernet fra alle datastandarder. Oppdatert
data følger.

<!--more-->

Nasjonal Turbase har som sitt primære formål å tilby standardisert friluftsdata
på maskinlesbare formater. Standardisert betry å måtte ta noen valg om hva som
er viktig og hva som er mindre viktig for en gitt objekttype.

Nasjonal Turbase legger på metadata om et gitt objekt som <code>._id</code>,
<code>.opprettet</code>, <code>endret</code>, og <code>tilbyder</code> når det
opprettes og oppdateres automatisk av Nasjonal Turbase når objektet blir
oppdatert.

For vår egen dele og for alle som benytter Nasjonal Turbase ønsker vi å lagre så
lite metadata som mulig slik at det er rask å effektivt å hente data fra
Nasjonal Turbase. Derfor ønsker vi bare å lagre metadata som er absolutt
nødvendig. Vi har derfor bestemt oss fra og med i dag å fjerne
<code>.opprettet</code> ettersom det har lite nytteverdi for folk flest. Det
viktigste er jo tross alt når objektet sist ble oppdatert og det har ligger i
feltet <code>.oppdatert</code>.

Det skal imidertid være sakt at det fremedles er mulig å legge dette feltet inn
når du legger inn ny data i Nasjonal Turbase men fra og med i dag er det ikke
lenger en del av standarden.

