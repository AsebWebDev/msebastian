export default function t(lang, string) {
  if (lang === "de") {
    switch (string) {
      // About Me
      case "ABOUT_ME_TITLE":
        return "Über mich";
      case "ABOUT_ME_SUMMARY":
        return `In meiner Forschung analysiere ich den Zusammenhang von Institutionenwandel, Kulturwandel und Akteurshandeln. Mein
            thematischer Schwerpunkt ist die Soziologie der Mensch-Tier-Beziehung. Dieses Thema untersuche ich unter anderem
            aus der Perspektive des historischen Institutionalismus, der Arbeitssoziologie, der Emotionssoziologie, der
            Gewaltsoziologie, der sozialen Bewegungsforschung und der sozologischen Theorien über Kultur.`;

      // CV
      case "CV_5_DATE":
        return `01/2021`;
      case "CV_5_TITLE":
        return `Promotion Soziologie (summa cum laude)`;
      case "CV_5":
        return `kummulative Dissertation zum Thema “Cultural and Institutional Frames of Human-Animal Relations”`;

      case "CV_4_DATE":
        return `08/2019 - 08/2020`;
      case "CV_4_TITLE":
        return `Wissenschaftlicher Koordinator am Interdisciplinary Centre for European Studies (ICES) der Europa-Universität Flensburg (EUF)`;

      case "CV_3_DATE":
        return `05/2016 - 12/2018`;
      case "CV_3_TITLE":
        return `Wissenschaftlicher Mitarbeiter der Universität Hamburg`;

      case "CV_2_DATE":
        return `04/2013 - 05/2016`;
      case "CV_2_TITLE":
        return `Promotionsstipendiat der Heinrich-Böll-Stiftung`;

      case "CV_1_DATE":
        return `06/2012`;
      case "CV_1_TITLE":
        return `Magister Soziologie (1,0, ausgezeichnet)`;
      case "CV_1":
        return `Nebenfächer: Gender Studies, Sozial- und Wirtschaftsgeschichte, Magisterarbeit “Ambivalenzen der Arbeitssituation und Umgangsweisen von Arbeitern in der Fleischindustrie“`;

      // MEMBERSHIP
      case "MEMBERSHIP_TITLE":
        return `Mitgliedschaft in wissenschaftlichen Organisationen`;
      case "MEMBERSHIP_5":
        return `Transformationskolleg des Norbert-Elias-Center, Europa Universität Flensburg`;
      case "MEMBERSHIP_4":
        return `Group for Society and Animals Studies (GSA), Universität Hamburg`;
      case "MEMBERSHIP_3":
        return `Deutsche Gesellschaft für Soziologie (DGS) und DGS-Sektion Land-, Agrar- und Ernährungssoziologie sowie Arbeitsgemeinschaft Gewaltsoziologie in der DGS`;
      case "MEMBERSHIP_2":
        return `Minding Animals International`;
      case "MEMBERSHIP_1":
        return `Interdisciplinary Centre for European Studies (ICES), Europa Universität Flensburg`;

      // EXPERT OPINIONS
      case "EXPERT_OPINION_TITLE":
        return `Gutachtertätigkeiten`;
      case "EXPERT_OPINION_3":
        return `Psychosozial (2019)`;
      case "EXPERT_OPINION_2":
        return `Berliner und Münchner Tierärztlichen Wochenschrift, Sonderheft zur Tiermedizinischen Ethik (2019)`;
      case "EXPERT_OPINION_1":
        return `Incipiens – Zeitschrift für Erstpublikationen aus der Philosophie und ihrer Geschichte (2016)`;

      default:
        return "Translation missing";
    }
  }
}
