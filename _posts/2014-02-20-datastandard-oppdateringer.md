---
layout: post
title: "Datastandard oppdatering"
date: "2014-02-20 11:46:36 +0100"
author: Hans Kristian
version: 1.0.0
tags: [datastandard, bilder, grupper, turer, områder, steder]
---

Datastandard for alle datatyper er nå oppdatert til å følge gjeldende versjon av
data i Nasjonal Turbase.

<!--more-->

Her er en oppsummert liste over endringene:

## Bilder

* `fotograf.kreditering` - er fjernet.
* `fotograf.telefon` - er lagt til og har typen `String`.
* `eier` - er lagt til har typen `object`.
* `img[#].url` - __må__ starte med `http://` eller `https://`.
* `img[#].width` - er endret fra `string` til `number`.
* `img[#].height` - er endret fra `string` til `number`.
* `img[#].size` - er endret fra `string` til `number`.

## Grupper

* `steder` - er et nytt felt av typen `Array` og som inneholder tilknyttede steder.
* `lenker[#].url` - __må__ starte med `http://` eller `https://`.
* `url` - __må__ starte med `http://` eller `https://`.

## Turer

* `steder` - er et nytt felt av typen `Array` og som inneholder tilknyttede steder.
* `lenker[#].url` - __må__ starte med `http://` eller `https://`.
* `url` - __må__ starte med `http://` eller `https://`.
* `kart` - er fjernet.
* `turkart` - er fjernet.

## Områder

* `steder` - er et nytt felt av typen `Array` og som inneholder tilknyttede steder.
* `lenker[#].url` - __må__ starte med `http://` eller `https://`.
* `url` - __må__ starte med `http://` eller `https://`.

## Steder

* `fasilitieter` - er endret fra `string[]` til `object` på format `key`=`value`.
* `besøksstatisikk` - er endret fra `string` til `object`. Nærmere format kommer senere.
* `steder` - er et nytt felt av typen `Array` og som inneholder tilknyttede steder.
* `lenker[#].url` - __må__ starte med `http://` eller `https://`.
* `url` - __må__ starte med `http://` eller `https://`.

