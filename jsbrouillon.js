// ---------- DONNÉES ----------
const aps = [
  {
    titre: "Déploiement d'un site WordPress en local (XAMPP)",
    periode: "1ère année — 1er semestre (sept. 2025)",
    description: "Installation, configuration et administration d'un site WordPress en environnement local avec la pile XAMPP (Apache, MySQL, phpMyAdmin), pour l'association « Cours et Jardins » : import de la base de données et des comptes utilisateurs, publication de pages et d'articles, procédure de sauvegarde complète du site.",
    outils: ["XAMPP", "Apache", "MySQL", "phpMyAdmin", "WordPress"],
    competences: ["Gérer le patrimoine informatique", "Répondre aux incidents et aux demandes d'assistance et d'évolution", "Organiser son développement professionnel"],
    docTechnique: `<a href="docenpdf/ap1-documentation.pdf" target="_blank" rel="noopener noreferrer">📄 Documentation technique AP1 (PDF)</a>`,
    production: "Environnement local XAMPP",
    mode: "À confirmer — non précisé dans le document source"
  },
  {
    titre: "Étude comparative de CMS/hébergeurs — site vitrine « Le Bidul »",
    periode: "1ère année — 1er semestre (nov. 2025)",
    description: "Comparaison de plusieurs CMS (Drupal, Google Sites, e-monsite) et de solutions d'hébergement (InfinityFree, hébergement intégré Google Sites, hébergement intégré e-monsite) afin de choisir la solution la plus adaptée à un projet associatif. Maquettage et réalisation d'un site vitrine pédagogique pour le fanzine culturel « Le Bidul ».",
    outils: ["Drupal", "Google Sites", "e-monsite", "InfinityFree"],
    competences: ["Développer la présence en ligne de l'organisation", "Répondre aux incidents et aux demandes d'assistance et d'évolution", "Mettre à disposition des utilisateurs un service informatique", "Gérer le patrimoine informatique"],
    docTechnique: `<a href="DOCENPDF/ap2-comparatif.pdf" target="_blank" rel="noopener noreferrer">📄 Diaporama comparatif AP2 (PDF)</a>`,
    production: `<a href="https://le-bidul.e-monsite.com/" target="_blank" rel="noopener noreferrer">🌐 Consulter le site « Le Bidul » en ligne</a>`,
    mode: "À confirmer — non précisé dans le document source"
  },
  {
    titre: "Déploiement d'une solution e-learning (Moodle) sur serveur Ubuntu",
    periode: "1ère année — 2ème semestre (fév. 2026)",
    description: "Déploiement d'une plateforme Moodle pour la société FKV sur un serveur virtuel Ubuntu : installation et configuration d'Apache, MariaDB et PHP, installation de Moodle et de sa base de données, mise en place d'une solution de sauvegarde sur NAS (OpenMediaVault) via un partage réseau, script de sauvegarde automatisé par tâche planifiée (cron). Rédaction d'un devis matériel pour le client (onduleur, stockage SSD/HDD, NAS Synology, serveur HPE ProLiant, licence Moodle).",
    outils: ["Ubuntu Server", "Apache", "MariaDB", "PHP", "Moodle", "OpenMediaVault (NAS)", "SSH/Putty", "Cron"],
    competences: ["Gérer le patrimoine informatique", "Travailler en mode projet", "Mettre à disposition des utilisateurs un service informatique", "Organiser son développement professionnel"],
    docTechnique: `<a href="DOCENPDF/ap3-doc-admin.pdf" target="_blank" rel="noopener noreferrer">📄 Documentation Administrateur (PDF)</a><br><a href="DOCENPDF/ap3-doc-apprenants.pdf" target="_blank" rel="noopener noreferrer">📄 Documentation Apprenants (PDF)</a><br><a href="DOCENPDF/ap3-doc-enseignants.pdf" target="_blank" rel="noopener noreferrer">📄 Documentation Enseignants (PDF)</a><br><a href="DOCENPDF/ap3-devis-client.pdf" target="_blank" rel="noopener noreferrer">📊 Devis matériel client (PDF)</a><br><a href="DOCENPDF/ap3-presentation.pdf" target="_blank" rel="noopener noreferrer">📊 Présentation du projet (PDF)</a>`,
    production: "Plateforme Moodle hébergée sur serveur local",
    mode: "En binôme — Lenny Gasnier &amp; Julien Hubert"
  },
  {
    titre: "Sécurisation de l'infrastructure e-learning — architecture 3 tiers avec pfSense",
    periode: "1ère année — 2ème semestre (avr. 2026)",
    description: "Évolution de la plateforme e-learning vers une architecture à 3 tiers sécurisée : segmentation du réseau en 4 zones (WAN, LAN, DMZ publique pour le serveur web, DMZ privée pour le serveur de base de données) via un pare-feu pfSense, séparation des rôles Apache/MariaDB sur deux serveurs distincts, rédaction des règles de filtrage entre zones, configuration du NAT pour l'accès externe, et campagne de tests de sécurité (vérifications d'accès autorisés/bloqués, consultation des journaux pfSense).",
    outils: ["pfSense", "Ubuntu Server", "Apache", "MariaDB", "Netplan", "UFW"],
    competences: ["Gérer le patrimoine informatique", "Travailler en mode projet", "Mettre à disposition des utilisateurs un service informatique", "Organiser son développement professionnel"],
    docTechnique: `<a href="DOCENPDF/ap4-securisation-pfsense.pdf" target="_blank" rel="noopener noreferrer">📄 Documentation pfSense & Sécurisation (PDF)</a><br><a href="DOCENPDF/ap4-commandes.pdf" target="_blank" rel="noopener noreferrer">📄 Aide-mémoire des commandes (PDF)</a>`,
    production: "Infrastructure virtuelle 3 tiers sous pfSense",
    mode: "En binôme — Lenny Gasnier &amp; Julien Hubert"
  },
  null
];

const stages = [
  {
    titre: "Stage technicien support informatique — MicroInfoExpert",
    periode: "1ère année — mai/juin 2026 (5 semaines)",
    description: "Stage au sein de MicroInfoExpert (groupe Stelogy), société de maintenance informatique spécialisée dans le secteur médical (cabinets médicaux, dentaires...). Support technique à distance et sur site : prise en main à distance (TeamViewer, AnyDesk), gestion d'antivirus en parc (G Data), sauvegardes (Veeam Server/Agent), virtualisation (Hyper-V — serveurs AD, TSE, APP). Préparation et masterisation de postes (déploiement Windows 11 via PXE/iVentoy, licences, mises à jour). Interventions terrain : câblage et rangement de baies de brassage, installation de switches (dont PoE), raccordement fibre optique (ONT), bornes Wi-Fi Unifi, imprimantes, NAS Synology et boîtiers de sauvegarde (RAID), configuration d'un routeur FortiNet, mise en place d'un accès VPN. Rédaction de comptes rendus d'intervention pour les clients.",
    outils: ["TeamViewer", "AnyDesk", "Veeam", "Hyper-V", "G Data", "iVentoy / PXE", "NAS Synology", "Unifi", "FortiNet"],
    competences: ["Support technique à distance et sur site", "Sauvegarde et virtualisation", "Déploiement et masterisation de postes", "Câblage et infrastructure réseau (baies, switches, fibre)", "Rédaction de comptes rendus d'intervention"],
    docTechnique: `<a href="DOCENPDF/stage1-journal-de-bord.pdf" target="_blank" rel="noopener noreferrer">📄 Journal de bord détaillé (PDF)</a>`,
    production: "Données confidentielles d'entreprise",
    mode: "En entreprise, en autonomie progressive avec accompagnement d'un tuteur ; certaines missions réalisées en binôme avec un technicien"
  },
  null
];

// ---------- RENDU ----------
function renderGrid(items, gridEl, countEl, kind){
  gridEl.innerHTML = "";
  let filled = items.filter(i => i).length;
  countEl.textContent = filled + " / " + items.length + " complétées";
  items.forEach((item, i) => {
    const card = document.createElement("div");
    if(item){
      card.className = "tag-card";
      card.innerHTML = `<div class="num">${kind === 'ap' ? 'AP' : 'STAGE'} ${i+1}</div>
        <h3>${item.titre}</h3>
        <div class="period">${item.periode}</div>`;
      card.onclick = () => showDetail(kind, i);
    } else {
      card.className = "tag-card empty";
      card.innerHTML = `<div class="num">${kind === 'ap' ? 'AP' : 'STAGE'} ${i+1}</div>
        <h3>À compléter</h3>
        <div class="period">—</div>`;
    }
    gridEl.appendChild(card);
  });
}

function showDetail(kind, i){
  const data = (kind === 'ap' ? aps : stages)[i];
  if(!data) return;
  const listEl = document.getElementById(kind + "s-list");
  const detailEl = document.getElementById(kind + "s-detail");
  const contentEl = document.getElementById(kind + "s-detail-content");
  contentEl.innerHTML = `
    <div class="detail-card">
      2>${data.titre}</h2>
      <div class="meta mono">${data.periode}</div>
      <div class="detail-block">
        <h4>Description</h4>
        <p>${data.description}</p>
      </div>
      <div class="detail-grid2">
        <div class="detail-block">
          <h4>Outils utilisés</h4>
          <div class="stack-row">${data.outils.map(o => `<span>${o}</span>`).join("")}</div>
        </div>
        <div class="detail-block">
          <h4>Compétences travaillées</h4>
          <div class="stack-row">${data.competences.map(c => `<span>${c}</span>`).join("")}</div>
        </div>
      </div>
      <div class="detail-block">
        <h4>Documentation technique</h4>
        <p>${data.docTechnique}</p>
      </div>
      <div class="detail-block">
        <h4>Production en ligne / captures d'écran</h4>
        <p>${data.production}</p>
      </div>
      <div class="detail-block">
        <h4>Mode de travail</h4>
        <p>${data.mode}</p>
      </div>
    </div>`;
  listEl.style.display = "none";
  detailEl.classList.add("active");
}

document.querySelectorAll("[data-back]").forEach(btn => {
  btn.onclick = () => {
    const listId = btn.dataset.back;
    document.getElementById(listId).style.display = "";
    document.getElementById(listId.replace("-list","-detail")).classList.remove("active");
  };
});

// ---------- NAVIGATION ----------
document.querySelectorAll(".tab").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    document.getElementById("view-" + btn.dataset.view).classList.add("active");
  };
});

renderGrid(aps, document.getElementById("aps-grid"), document.getElementById("aps-count"), "ap");
renderGrid(stages, document.getElementById("stages-grid"), document.getElementById("stages-count"), "stage");