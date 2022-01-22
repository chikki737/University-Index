const universityJson = JSON.parse(`
[
{
    "web_pages": [
      "https://www.mohawkcollege.ca/"
    ],
    "name": "Mohawk College",
    "alpha_two_code": "CA",
    "state-province": null,
    "domains": [
      "mohawkcollege.ca"
    ],
    "country": "Canada"
  },
  {
    "web_pages": [
      "https://www.bdeb.qc.ca/"
    ],
    "name": "College of Bois-de-Boulogne",
    "alpha_two_code": "CA",
    "state-province": null,
    "domains": [
      "bdeb.qc.ca"
    ],
    "country": "Canada"
  },
  {
    "web_pages": [
      "https://www.fanshawec.ca/"
    ],
    "name": "Fanshawe College",
    "alpha_two_code": "CA",
    "state-province": null,
    "domains": [
      "fanshawec.ca",
      "fanshaweonline.ca"
    ],
    "country": "Canada"
  },
  {
    "web_pages": [
      "https://www.vaniercollege.qc.ca/"
    ],
    "name": "Vanier College",
    "alpha_two_code": "CA",
    "state-province": null,
    "domains": [
      "vaniercollege.qc.ca"
    ],
    "country": "Canada"
  },
  {
    "web_pages": [
      "https://www.academyart.edu/"
    ],
    "name": "Academy of Art University",
    "alpha_two_code": "US",
    "state-province": "California",
    "domains": [
      "academyart.edu",
      "art.edu"
    ],
    "country": "United States"
  },
  {
    "web_pages": [
      "https://www.lr.edu/"
    ],
    "name": "Lenoir-Rhyne University",
    "alpha_two_code": "US",
    "state-province": "North Carolina",
    "domains": [
      "lr.edu"
    ],
    "country": "United States"
  },
  {
    "web_pages": [
      "https://pointpark.edu/"
    ],
    "name": "Point Park University",
    "alpha_two_code": "US",
    "state-province": "Pennsylvania",
    "domains": [
      "pointpark.edu"
    ],
    "country": "United States"
  },
  {
    "web_pages": [
      "https://ontariotechu.ca/"
    ],
    "name": "Ontario Tech University",
    "alpha_two_code": "CA",
    "state-province": null,
    "domains": [
      "ontariotechu.ca",
      "ontariotechu.net"
    ],
    "country": "Canada"
  },
  {
    "web_pages": [
      "https://northwood.edu/"
    ],
    "name": "Northwood University",
    "alpha_two_code": "US",
    "state-province": "Michigan",
    "domains": [
      "northwood.edu"
    ],
    "country": "United States"
  },
  {
    "web_pages": [
      "http://www.skmu.edu.in/"
    ],
    "name": "Sido Kanhu Murmu University",
    "alpha_two_code": "IN",
    "state-province": null,
    "domains": [
      "skmu.edu.in"
    ],
    "country": "India"
  },
  {
    "web_pages": [
      "http://www.skuastkashmir.ac.in/"
    ],
    "name": "Sher-E-Kashmir University of Agricultural Sciences and Technology",
    "alpha_two_code": "IN",
    "state-province": null,
    "domains": [
      "skuastkashmir.ac.in"
    ],
    "country": "India"
  },
  {
    "web_pages": [
      "http://skuniv.ap.nic.in/"
    ],
    "name": "Sri Krishnadevaraya University",
    "alpha_two_code": "IN",
    "state-province": null,
    "domains": [
      "skuniv.ap.nic.in"
    ],
    "country": "India"
  },
  {
    "web_pages": [
      "http://www.slbsrsv.ac.in/"
    ],
    "name": "Shri Lal Bahadur Shastri Rashtriya Sanskrit Vidyapeetha",
    "alpha_two_code": "IN",
    "state-province": null,
    "domains": [
      "slbsrsv.ac.in"
    ],
    "country": "India"
  },
  {
    "web_pages": [
      "http://www.smkfomra.net/"
    ],
    "name": "SMK Fomra Institute of Technology",
    "alpha_two_code": "IN",
    "state-province": null,
    "domains": [
      "smkfomra.net"
    ],
    "country": "India"
  },
  
  {
    "web_pages": [
      "http://www.ehl.ch/"
    ],
    "name": "Lausanne Hotel School (EHL)",
    "alpha_two_code": "CH",
    "state-province": null,
    "domains": [
      "ehl.ch"
    ],
    "country": "Switzerland"
  },
  {
    "web_pages": [
      "http://www.euruni.edu/"
    ],
    "name": "European University",
    "alpha_two_code": "CH",
    "state-province": null,
    "domains": [
      "euruni.edu"
    ],
    "country": "Switzerland"
  },
  {
    "web_pages": [
      "http://www.fc.edu/"
    ],
    "name": "Franklin College Switzerland",
    "alpha_two_code": "CH",
    "state-province": null,
    "domains": [
      "fc.edu"
    ],
    "country": "Switzerland"
  },
  {
    "web_pages": [
      "http://www.fh-aargau.ch/"
    ],
    "name": "University of Applied Sciences Aargau",
    "alpha_two_code": "CH",
    "state-province": null,
    "domains": [
      "fh-aargau.ch"
    ],
    "country": "Switzerland"
  },
  {
    "web_pages": [
      "http://www.fhbb.ch/"
    ],
    "name": "University of Applied Sciences Basel (FHBB )",
    "alpha_two_code": "CH",
    "state-province": null,
    "domains": [
      "fhbb.ch"
    ],
    "country": "Switzerland"
  },
  {
    "web_pages": [
      "http://www.usjr.edu.ph/"
    ],
    "name": "University of San Jose Recoletos",
    "alpha_two_code": "PH",
    "state-province": null,
    "domains": [
      "usjr.edu.ph"
    ],
    "country": "Philippines"
  },
  {
    "web_pages": [
      "http://www.usls.edu/"
    ],
    "name": "University of Saint La Salle",
    "alpha_two_code": "PH",
    "state-province": null,
    "domains": [
      "usls.edu"
    ],
    "country": "Philippines"
  },
  {
    "web_pages": [
      "http://www.usm.edu.ph/"
    ],
    "name": "University of Southern Mindanao",
    "alpha_two_code": "PH",
    "state-province": null,
    "domains": [
      "usm.edu.ph"
    ],
    "country": "Philippines"
  },
  {
    "web_pages": [
      "http://www.usp.ph/"
    ],
    "name": "University of Southern Philippines Foundation",
    "alpha_two_code": "PH",
    "state-province": null,
    "domains": [
      "usp.ph"
    ],
    "country": "Philippines"
  },
  {
    "web_pages": [
      "http://www.ust.edu.ph/"
    ],
    "name": "University of Santo Tomas",
    "alpha_two_code": "PH",
    "state-province": null,
    "domains": [
      "ust.edu.ph"
    ],
    "country": "Philippines"
  },
  {
    "web_pages": [
      "http://www.chugye.ac.kr/"
    ],
    "name": "Chugye University for the Arts",
    "alpha_two_code": "KR",
    "state-province": null,
    "domains": [
      "chugye.ac.kr"
    ],
    "country": "Korea, Republic of"
  },
  {
    "web_pages": [
      "http://www.cnue.ac.kr/"
    ],
    "name": "Chuncheon National University of Education",
    "alpha_two_code": "KR",
    "state-province": null,
    "domains": [
      "cnue.ac.kr"
    ],
    "country": "Korea, Republic of"
  },
  {
    "web_pages": [
      "http://www.chungwoon.ac.kr"
    ],
    "name": "Chungwoon University",
    "alpha_two_code": "KR",
    "state-province": null,
    "domains": [
      "chungwoon.ac.kr"
    ],
    "country": "Korea, Republic of"
  },
  {
    "web_pages": [
      "http://www.daebul.ac.kr/"
    ],
    "name": "Daebul University",
    "alpha_two_code": "KR",
    "state-province": null,
    "domains": [
      "daebul.ac.kr"
    ],
    "country": "Korea, Republic of"
  },
  {
    "web_pages": [
      "http://www.dankook.ac.kr/"
    ],
    "name": "Dankook University",
    "alpha_two_code": "KR",
    "state-province": null,
    "domains": [
      "dankook.ac.kr"
    ],
    "country": "Korea, Republic of"
  },
  {
    "web_pages": [
      "http://www.univ-montp1.fr/"
    ],
    "name": "Université de Montpellier I",
    "alpha_two_code": "FR",
    "state-province": null,
    "domains": [
      "univ-montp1.fr"
    ],
    "country": "France"
  },
  {
    "web_pages": [
      "http://www.univ-montp2.fr/"
    ],
    "name": "Université de Montpellier II",
    "alpha_two_code": "FR",
    "state-province": null,
    "domains": [
      "univ-montp2.fr"
    ],
    "country": "France"
  },
  {
    "web_pages": [
      "http://www.univ-montp3.fr/"
    ],
    "name": "Université Paul Valéry (Montpellier III)",
    "alpha_two_code": "FR",
    "state-province": null,
    "domains": [
      "univ-montp3.fr"
    ],
    "country": "France"
  },
  {
    "web_pages": [
      "http://www.ensc-lille.fr/"
    ],
    "name": "Ecole Nationale Supérieure de Chimie de Lille",
    "alpha_two_code": "FR",
    "state-province": null,
    "domains": [
      "ensc-lille.fr"
    ],
    "country": "France"
  },
  {
    "web_pages": [
      "http://www.enscm.fr/"
    ],
    "name": "Ecole Nationale Supérieure de Chimie de Montpellier",
    "alpha_two_code": "FR",
    "state-province": null,
    "domains": [
      "enscm.fr"
    ],
    "country": "France"
  },
  {
    "web_pages": [
      "http://www.mgu.ac.jp/"
    ],
    "name": "Miyagi Gakuin Women's College",
    "alpha_two_code": "JP",
    "state-province": null,
    "domains": [
      "mgu.ac.jp"
    ],
    "country": "Japan"
  },
  {
    "web_pages": [
      "http://www.mie-chukyo-u.ac.jp/"
    ],
    "name": "Matsusaka University",
    "alpha_two_code": "JP",
    "state-province": null,
    "domains": [
      "mie-chukyo-u.ac.jp"
    ],
    "country": "Japan"
  },
  {
    "web_pages": [
      "http://www.mie-u.ac.jp/"
    ],
    "name": "Mie University",
    "alpha_two_code": "JP",
    "state-province": null,
    "domains": [
      "mie-u.ac.jp"
    ],
    "country": "Japan"
  },
  {
    "web_pages": [
      "http://www.mimasaka.ac.jp/"
    ],
    "name": "Mimasaka Women's College",
    "alpha_two_code": "JP",
    "state-province": null,
    "domains": [
      "mimasaka.ac.jp"
    ],
    "country": "Japan"
  },
  {
    "web_pages": [
      "http://www.miyakyo-u.ac.jp/"
    ],
    "name": "Miyagi University of Education",
    "alpha_two_code": "JP",
    "state-province": null,
    "domains": [
      "miyakyo-u.ac.jp"
    ],
    "country": "Japan"
  },
  {
    "web_pages": [
      "http://www.univali.rct-sc.br/"
    ],
    "name": "Universidade do Vale do Itajaí",
    "alpha_two_code": "BR",
    "state-province": null,
    "domains": [
      "univali.rct-sc.br"
    ],
    "country": "Brazil"
  },
  {
    "web_pages": [
      "http://www.univap.br/"
    ],
    "name": "Universidade Vale do Paraiba",
    "alpha_two_code": "BR",
    "state-province": null,
    "domains": [
      "univap.br"
    ],
    "country": "Brazil"
  },
  {
    "web_pages": [
      "http://www.univasf.edu.br/"
    ],
    "name": "Universidade Federal do Vale do São Francisco",
    "alpha_two_code": "BR",
    "state-province": null,
    "domains": [
      "univasf.edu.br"
    ],
    "country": "Brazil"
  },
  {
    "web_pages": [
      "http://www.universo.br/"
    ],
    "name": "Universidade Salgado de Oliveira",
    "alpha_two_code": "BR",
    "state-province": null,
    "domains": [
      "universo.br"
    ],
    "country": "Brazil"
  },
  {
    "web_pages": [
      "http://www.unoesc.edu.br/"
    ],
    "name": "Universidade do Oeste de Santa Catarina",
    "alpha_two_code": "BR",
    "state-province": null,
    "domains": [
      "unoesc.edu.br"
    ],
    "country": "Brazil"
  },
  {
    "web_pages": [
      "http://www.pfh-goettingen.de/"
    ],
    "name": "Private Fachhochschule Göttingen",
    "alpha_two_code": "DE",
    "state-province": null,
    "domains": [
      "pfh-goettingen.de"
    ],
    "country": "Germany"
  },
  {
    "web_pages": [
      "http://www.ph-erfurt.de/"
    ],
    "name": "Pädagogische Hochschule Erfurt/Mühlhausen",
    "alpha_two_code": "DE",
    "state-province": null,
    "domains": [
      "ph-erfurt.de"
    ],
    "country": "Germany"
  },
  {
    "web_pages": [
      "http://www.ph-freiburg.de/"
    ],
    "name": "Pädagogische Hochschule Freiburg",
    "alpha_two_code": "DE",
    "state-province": null,
    "domains": [
      "ph-freiburg.de"
    ],
    "country": "Germany"
  },
  {
    "web_pages": [
      "http://www.ph-gmuend.de/"
    ],
    "name": "Pädagogische Hochschule Schwäbisch Gmünd",
    "alpha_two_code": "DE",
    "state-province": null,
    "domains": [
      "ph-gmuend.de"
    ],
    "country": "Germany"
  },
  {
    "web_pages": [
      "www.fom.de"
    ],
    "name": "FOM Hochschule für Oekonomie & Management",
    "alpha_two_code": "DE",
    "state-province": null,
    "domains": [
      "fom-net.de"
    ],
    "country": "Germany"
  }
]
`);
