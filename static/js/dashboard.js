// PERIOD SNAPSHOTS — to add March 2026:
// 1. Add '2026-03': { label, caption, returnData, investments,
//    cashMap, sbMap, fcMap, fcCards, standbyFunds, totalAUM,
//    cashVals, entityMeta }
// 2. Add <option value="2026-03"> to #periodSelect
// 3. All tabs update automatically — no other changes needed
// PERIOD SNAPSHOTS — copy '2026-02' to add month
// ══════════════════════════════════════════════
const periodSnapshots = {

  '2026-01': {
    label:'Jan 2026', caption:'January 2026',
    returnData:[
  {name:'INVESCO Sr Loan (5EC)',vintage:2025,ent:'5E',group:'Short Term',strat:'Public – Fixed Inc.',prin:2800000,navDec:2949156,navJan:2938516,yld:0.0521,mthDiv:0,ytdDiv:0,cumDist:0,janRet:0},
  {name:'KKR Income Trust (5EC)',vintage:2025,ent:'5E',group:'Short Term',strat:'Private – Dir. Lend.',prin:4100000,navDec:4267830,navJan:4303921,yld:0.0648,mthDiv:0,ytdDiv:0,cumDist:0,janRet:0},
  {name:'TIFF Diversifying (DSF)',vintage:2025,ent:'ATH',group:'Short Term',strat:'Alternatives – Hedge',prin:2000000,navDec:2100691,navJan:2112196,yld:0.0000,mthDiv:0,ytdDiv:0,cumDist:0,janRet:0},
  {name:'QRT Torus (via TIFF)',vintage:2025,ent:'ATH',group:'Short Term',strat:'Alternatives – Hedge',prin:2000000,navDec:2098612,navJan:2100876,yld:0.0000,mthDiv:0,ytdDiv:0,cumDist:0,janRet:0},
  {name:'PIMCO GIS Income',vintage:2025,ent:'LPE',group:'Short Term',strat:'Public – Fixed Inc.',prin:2598436,navDec:2606571,navJan:2606571,yld:0.0601,mthDiv:13134,ytdDiv:13134,cumDist:87918,janRet:0},
  {name:'JPM Income Fund',vintage:2025,ent:'LPE',group:'Short Term',strat:'Public – Fixed Inc.',prin:2591966,navDec:2572340,navJan:2565726,yld:0.0619,mthDiv:13226,ytdDiv:13226,cumDist:75393,janRet:0},
  {name:'M&G Float Rate HY',vintage:2025,ent:'LPE',group:'Short Term',strat:'Public – Fixed Inc.',prin:1291570,navDec:1257994,navJan:1251728,yld:0.0663,mthDiv:7492,ytdDiv:7492,cumDist:49011,janRet:0},
  {name:'Invesco Sr Loan (LPE)',vintage:2025,ent:'LPE',group:'Short Term',strat:'Public – Fixed Inc.',prin:1993742,navDec:1952263,navJan:1932916,yld:0.0787,mthDiv:12184,ytdDiv:12184,cumDist:65938,janRet:0},
  {name:'KKR Income Trust (LPE)',vintage:2025,ent:'LPE',group:'Short Term',strat:'Private – Dir. Lend.',prin:3000000,navDec:2968838,navJan:2970021,yld:0.0959,mthDiv:23685,ytdDiv:23685,cumDist:71053,janRet:0},
  {name:'Blackstone BCRED-iCap',vintage:2025,ent:'LPE',group:'Short Term',strat:'Private – Dir. Lend.',prin:2000000,navDec:1966593,navJan:1960771,yld:0.0839,mthDiv:13660,ytdDiv:13660,cumDist:42519,janRet:0},
  {name:'OTIC iCap',vintage:2025,ent:'LPE',group:'Short Term',strat:'Private – Dir. Lend.',prin:2000000,navDec:1984126,navJan:1984127,yld:0.0741,mthDiv:12185,ytdDiv:12185,cumDist:37514,janRet:0},
  {name:'MSA Venture III',vintage:2021,ent:'5E',group:'Long Term',strat:'Private – VC',prin:899729,navDec:907125,navJan:912056,yld:0.0000,mthDiv:0,ytdDiv:0,cumDist:0,janRet:0},
  {name:'NB Credit Opp. II',vintage:2021,ent:'5E',group:'Long Term',strat:'Private – Credit',prin:665948,navDec:967490,navJan:967490,yld:0.0000,mthDiv:0,ytdDiv:0,cumDist:0,janRet:0},
  {name:'Lexington Cap. X',vintage:2022,ent:'5E',group:'Long Term',strat:'Private – Secondary',prin:2536896,navDec:3548202,navJan:3506069,yld:0.0000,mthDiv:0,ytdDiv:0,cumDist:0,janRet:0},
  {name:'Colbeck Strat. III',vintage:2023,ent:'5E',group:'Long Term',strat:'Private – Credit',prin:1621845,navDec:1761261,navJan:1761261,yld:0.0000,mthDiv:0,ytdDiv:0,cumDist:116155,janRet:0},
  {name:'PSG Equity VI',vintage:2024,ent:'5E',group:'Long Term',strat:'Private – Buyout',prin:1160252,navDec:1067315,navJan:1067315,yld:0.0000,mthDiv:0,ytdDiv:0,cumDist:0,janRet:0},
  {name:'Gunung Raja (GGRP)',vintage:2023,ent:'5E',group:'Long Term - GGRP',strat:'Public – Equity',prin:2645862,navDec:6358462,navJan:6454426,yld:0.0000,mthDiv:0,ytdDiv:0,cumDist:0,janRet:0},
  {name:'BlueMark (ATH)',vintage:2023,ent:'ATH',group:'Long Term',strat:'Direct Co-Investment',prin:500000,navDec:500000,navJan:500000,yld:0.0000,mthDiv:0,ytdDiv:0,cumDist:0,janRet:0},
  {name:'Thrive (ATH)',vintage:2024,ent:'ATH',group:'Long Term',strat:'Direct Co-Investment',prin:250000,navDec:250000,navJan:250000,yld:0.0000,mthDiv:0,ytdDiv:0,cumDist:0,janRet:0},
  {name:'Asia Heritage (ATH)',vintage:2024,ent:'ATH',group:'Long Term',strat:'Direct Co-Investment',prin:250000,navDec:250000,navJan:250000,yld:0.0000,mthDiv:0,ytdDiv:0,cumDist:0,janRet:0},
  {name:'Bonaccord Cap. II',vintage:2024,ent:'ATH',group:'Long Term',strat:'Private – GP Stakes',prin:1431355,navDec:2717504,navJan:2717504,yld:0.0000,mthDiv:0,ytdDiv:0,cumDist:34720,janRet:0},
  {name:'CF PE Co-Inv. V',vintage:2025,ent:'ATH',group:'Long Term',strat:'Private – Buyout',prin:200000,navDec:0,navJan:200000,yld:0.0000,mthDiv:0,ytdDiv:0,cumDist:0,janRet:0},
  {name:'Clearlake Cap. VIII',vintage:2024,ent:'LPE',group:'Long Term',strat:'Private – Buyout',prin:849744,navDec:251778,navJan:751565,yld:0.0000,mthDiv:0,ytdDiv:0,cumDist:0,janRet:0},
  {name:'Galvanize Innov. I',vintage:2022,ent:'LPE',group:'Long Term',strat:'Private – Climate VC',prin:492413,navDec:465412,navJan:465412,yld:0.0000,mthDiv:0,ytdDiv:0,cumDist:0,janRet:0},
  {name:'Thoma Bravo XVI-A',vintage:2025,ent:'LPE',group:'Long Term',strat:'Private – Buyout',prin:471442,navDec:459850,navJan:459850,yld:0.0000,mthDiv:0,ytdDiv:0,cumDist:0,janRet:0},
  {name:'CA Select Co-Inv. (LPE)',vintage:2024,ent:'LPE',group:'Long Term',strat:'Private – Buyout',prin:0,navDec:0,navJan:0,yld:0.0000,mthDiv:0,ytdDiv:0,cumDist:0,janRet:0},
  {name:'Odin Hills J8',vintage:2025,ent:'KIL',group:'Real Estate',strat:'Real Asset – Property',prin:3095297,navDec:3093622,navJan:3093622,yld:0.0000,mthDiv:0,ytdDiv:0,cumDist:0,janRet:0}
    ],
    investments:[
  {name:'INVESCO Sr Loan (5EC)',vintage:2025,ent:'5E',cls:'pub',strat:'Public – Fixed Inc.',group:'Short Term',prin:2800000,nav:2938516,unf:0,dist:0,yield:0.0521,irr:0.0521,dpi:0.00,months:10},
  {name:'KKR Income Trust (5EC)',vintage:2025,ent:'5E',cls:'priv',strat:'Private – Dir. Lend.',group:'Short Term',prin:4100000,nav:4303921,unf:0,dist:0,yield:0.0648,irr:0.0648,dpi:0.00,months:10},
  {name:'MSA Venture III',vintage:2021,ent:'5E',cls:'priv',strat:'Private – VC',group:'Long Term',prin:899729,nav:912056,unf:100271,dist:0,yield:0.0045,irr:0.0045,dpi:0.00,months:41},
  {name:'NB Credit Opp. II',vintage:2021,ent:'5E',cls:'priv',strat:'Private – Credit',group:'Long Term',prin:665948,nav:967490,unf:334052,dist:0,yield:0.0000,irr:0.1221,dpi:0.00,months:33},
  {name:'Lexington Cap. X',vintage:2022,ent:'5E',cls:'priv',strat:'Private – Secondary',group:'Long Term',prin:2536896,nav:3506069,unf:2463104,dist:0,yield:0.0000,irr:0.1743,dpi:0.00,months:24},
  {name:'Colbeck Strat. III',vintage:2023,ent:'5E',cls:'priv',strat:'Private – Credit',group:'Long Term',prin:1621845,nav:1761261,unf:3378155,dist:116155,yield:0.0000,irr:0.1066,dpi:0.06,months:16},
  {name:'PSG Equity VI',vintage:2024,ent:'5E',cls:'priv',strat:'Private – Buyout',group:'Long Term',prin:1160252,nav:1067315,unf:3839748,dist:0,yield:0.0000,irr:0.0000,dpi:0.00,months:9},
  {name:'BlueMark (ATH)',vintage:2023,ent:'ATH',cls:'co',strat:'Direct Co-Investment',group:'Long Term',prin:500000,nav:500000,unf:0,dist:0,yield:0.0000,irr:0.0000,dpi:0.00,months:26},
  {name:'Thrive (ATH)',vintage:2024,ent:'ATH',cls:'co',strat:'Direct Co-Investment',group:'Long Term',prin:250000,nav:250000,unf:0,dist:0,yield:0.0000,irr:0.0000,dpi:0.00,months:25},
  {name:'Asia Heritage (ATH)',vintage:2024,ent:'ATH',cls:'co',strat:'Direct Co-Investment',group:'Long Term',prin:250000,nav:250000,unf:0,dist:0,yield:0.0000,irr:0.0000,dpi:0.00,months:22},
  {name:'Bonaccord Cap. II',vintage:2024,ent:'ATH',cls:'priv',strat:'Private – GP Stakes',group:'Long Term',prin:1431355,nav:2717504,unf:3568645,dist:34720,yield:0.0000,irr:1.1856,dpi:0.02,months:11},
  {name:'CF PE Co-Inv. V',vintage:2025,ent:'ATH',cls:'priv',strat:'Private – Buyout',group:'Long Term',prin:200000,nav:200000,unf:800000,dist:0,yield:0.0000,irr:0.0000,dpi:0.00,months:1},
  {name:'TIFF Diversifying (DSF)',vintage:2025,ent:'ATH',cls:'alt',strat:'Alternatives – Hedge',group:'Short Term',prin:2000000,nav:2112196,unf:0,dist:0,yield:0.0000,irr:0.1665,dpi:0.00,months:5},
  {name:'QRT Torus (via TIFF)',vintage:2025,ent:'ATH',cls:'alt',strat:'Alternatives – Hedge',group:'Short Term',prin:2000000,nav:2100876,unf:0,dist:0,yield:0.0000,irr:0.1497,dpi:0.00,months:5},
  {name:'PIMCO GIS Income',vintage:2025,ent:'LPE',cls:'pub',strat:'Public – Fixed Inc.',group:'Short Term',prin:2598436,nav:2606571,unf:0,dist:101052,yield:0.0601,irr:0.0856,dpi:0.06,months:6},
  {name:'JPM Income Fund',vintage:2025,ent:'LPE',cls:'pub',strat:'Public – Fixed Inc.',group:'Short Term',prin:2591966,nav:2565726,unf:0,dist:75393,yield:0.0619,irr:0.0393,dpi:0.06,months:6},
  {name:'M&G Float Rate HY',vintage:2025,ent:'LPE',cls:'pub',strat:'Public – Fixed Inc.',group:'Short Term',prin:1291570,nav:1251728,unf:0,dist:55876,yield:0.0663,irr:0.0093,dpi:0.07,months:6},
  {name:'Invesco Sr Loan (LPE)',vintage:2025,ent:'LPE',cls:'pub',strat:'Public – Fixed Inc.',group:'Short Term',prin:1993742,nav:1932916,unf:0,dist:78465,yield:0.0787,irr:0.0000,dpi:0.07,months:6},
  {name:'KKR Income Trust (LPE)',vintage:2025,ent:'LPE',cls:'priv',strat:'Private – Dir. Lend.',group:'Short Term',prin:3000000,nav:2970021,unf:0,dist:94737,yield:0.0959,irr:0.0371,dpi:0.06,months:6},
  {name:'Blackstone BCRED-iCap',vintage:2025,ent:'LPE',cls:'priv',strat:'Private – Dir. Lend.',group:'Short Term',prin:2000000,nav:1960771,unf:0,dist:56177,yield:0.0839,irr:0.0104,dpi:0.06,months:6},
  {name:'OTIC iCap',vintage:2025,ent:'LPE',cls:'priv',strat:'Private – Dir. Lend.',group:'Short Term',prin:2000000,nav:1984127,unf:0,dist:49742,yield:0.0741,irr:0.0289,dpi:0.06,months:6},
  {name:'Clearlake Cap. VIII',vintage:2024,ent:'LPE',cls:'priv',strat:'Private – Buyout',group:'Long Term',prin:849744,nav:751565,unf:4150257,dist:0,yield:0.0000,irr:0.0000,dpi:0.00,months:5},
  {name:'Galvanize Innov. I',vintage:2022,ent:'LPE',cls:'priv',strat:'Private – Climate VC',group:'Long Term',prin:492413,nav:465412,unf:507587,dist:0,yield:0.0000,irr:0.0000,dpi:0.00,months:5},
  {name:'Thoma Bravo XVI-A',vintage:2025,ent:'LPE',cls:'priv',strat:'Private – Buyout',group:'Long Term',prin:471442,nav:459850,unf:4528558,dist:0,yield:0.0000,irr:0.0000,dpi:0.00,months:2},
  {name:'CA Select Co-Inv. (LPE)',vintage:2024,ent:'LPE',cls:'priv',strat:'Private – Buyout',group:'Long Term',prin:0,nav:0,unf:1000000,dist:0,yield:0.0000,irr:0.0000,dpi:0.00,months:0},
  {name:'Gunung Raja (GGRP)',vintage:2023,ent:'5E',cls:'pub',strat:'Public – Equity',group:'Long Term - GGRP',prin:2645862,nav:6454426,unf:0,dist:0,yield:0.0000,irr:0.0000,dpi:0.00,months:35},
  {name:'Odin Hills J8',vintage:2025,ent:'KIL',cls:'re',strat:'Real Asset – Property',group:'Real Estate',prin:3095297,nav:3093622,unf:0,dist:0,yield:0.0000,irr:0.0000,dpi:0.00,months:10}
    ],
    cashMap:{ALL:6319293,'5E':3238552,ATH:1492638,LPE:1588103,KIL:0},
    fcMap:{ALL:6440690,'5E':206738,ATH:201114,LPE:6032838,KIL:0},
    sbByEnt:{ALL:25948686,'5E':7252566,ATH:3455903,LPE:15240217,KIL:0},
    sbMap:{ALL:25960799,'5E':7242438,ATH:3446501,LPE:15271860,KIL:0},
    entityMeta: {
      ALL:{name:'All Entities — Eagle I',kpis:[
        {l:'AUM',v:'$56.4M',cls:''},
        {l:'NAV',v:'$50,083,939',cls:''},
        {l:'Cash',v:'$6,322,107',cls:''},
        {l:'Principal',v:'$43,838,084',cls:''},
        {l:'Unreal. G/L',v:'+$6,245,855',cls:'up'},
        {l:'Free Cash',v:'$6,540,914',cls:''},
      ]},
      '5E':{name:'5E Capital',kpis:[
        {l:'NAV',v:'$21,911,054',cls:''},
        {l:'Cash',v:'$3,238,552',cls:''},
        {l:'Principal',v:'$16,841,979',cls:''},
        {l:'Unreal. G/L',v:'+$5,069,075',cls:'up'},
        {l:'MOIC',v:'1.30x',cls:''},
        {l:'Free Cash',v:'$215,733',cls:''},
        {l:'Unfunded',v:'$10,115,330',cls:'down'},
      ]},
      ATH:{name:'Athena (ATH)',kpis:[
        {l:'NAV',v:'$8,130,576',cls:''},
        {l:'Cash',v:'$1,492,638',cls:''},
        {l:'Principal',v:'$6,611,495',cls:''},
        {l:'Unreal. G/L',v:'+$1,519,081',cls:'up'},
        {l:'MOIC',v:'1.23x',cls:''},
        {l:'Free Cash',v:'$229,574',cls:''},
        {l:'Unfunded',v:'$4,368,645',cls:'down'},
      ]},
      LPE:{name:'LPE',kpis:[
        {l:'NAV',v:'$16,948,687',cls:''},
        {l:'Cash',v:'$1,588,103',cls:''},
        {l:'Principal',v:'$17,289,313',cls:''},
        {l:'Unreal. G/L',v:'-$340,626',cls:'down'},
        {l:'MOIC',v:'0.98x',cls:'down'},
        {l:'Free Cash',v:'$6,095,608',cls:''},
        {l:'Unfunded',v:'$10,186,402',cls:'down'},
      ]},
      KIL:{name:'KIL',kpis:[
        {l:'NAV / Book',v:'$3,093,622',cls:''},
        {l:'Budget',v:'$5,165,652',cls:''},
        {l:'Spent',v:'$3,093,622',cls:''},
        {l:'Remaining',v:'$2,072,030',cls:''},
        {l:'Utilisation',v:'59.9%',cls:''},
      ]},
    },
    cashVals:[126557,126557,3238552,3238552,4086017,3888071,3884653,3883022,3338239,3329930,3329634,2825972,3238552],
    standbyFunds:[
  {name:'INVESCO Sr Loan',   ent:'5E',  strat:'Public – Fixed Inc.',  group:'Short Term', val:2938516.18},
  {name:'KKR Income Trust',  ent:'5E',  strat:'Private – Dir. Lend.', group:'Short Term', val:4303921.39},
  {name:'AMH_FD',            ent:'ATH', strat:'Liquid Fund',           group:'Short Term', val:3446501.07},
  {name:'PIMCO GIS Income',  ent:'LPE', strat:'Public – Fixed Inc.',  group:'Short Term', val:2606570.54},
  {name:'JPM Income Fund',   ent:'LPE', strat:'Public – Fixed Inc.',  group:'Short Term', val:2565726.22},
  {name:'M&G Float Rate HY', ent:'LPE', strat:'Public – Fixed Inc.',  group:'Short Term', val:1251728.15},
  {name:'Invesco Sr Loan',   ent:'LPE', strat:'Public – Fixed Inc.',  group:'Short Term', val:1932916.41},
  {name:'KKR Income Trust',  ent:'LPE', strat:'Private – Dir. Lend.', group:'Short Term', val:2970021.00},
  {name:'Blackstone BCRED',  ent:'LPE', strat:'Private – Dir. Lend.', group:'Short Term', val:1960771.31},
  {name:'OTIC iCap',         ent:'LPE', strat:'Private – Dir. Lend.', group:'Short Term', val:1984126.79},
],
    fcCards:{
      fc5e:[{label:'Cash/FD',sign:'+',val:3238552},{label:'Standby Funds',sign:'+',val:7242438},{label:'Unfunded Commitments',sign:'−',val:10115330},{label:'Expenses Forecast',sign:'−',val:158922},{label:'Free Cash',sign:'=',val:206738}],
      fcAth:[{label:'Cash/FD',sign:'+',val:1492638},{label:'Standby Funds',sign:'+',val:3446501},{label:'Unfunded (KT portion)',sign:'−',val:4225899},{label:'Expenses Forecast',sign:'−',val:12126},{label:'Settlement to 5E',sign:'−',val:500000},{label:'Free Cash',sign:'=',val:201114}],
      fcLpe:[{label:'Cash/FD',sign:'+',val:1588103},{label:'Standby Funds',sign:'+',val:15271860},{label:'Unfunded Commitments',sign:'−',val:10186402},{label:'Expenses Forecast',sign:'−',val:640724},{label:'Free Cash',sign:'=',val:6032838}]
    },
    totalAUM: 56403232,
  },

  '2026-02': { label:'Feb 2026', caption:'February 2026',
    returnData:null, investments:null, cashMap:null, fcMap:null,
    sbByEnt:null, sbMap:null, entityMeta:null },

};

let activePeriod = '2026-02';
let activeCashMap, activeFcMap, activeSbMap, activeTotalAUM, activeFcCards, activeStandbyFunds;

function setPeriod(key) {
  if (!periodSnapshots[key]) return;
  activePeriod = key;
  var sel = document.getElementById('periodSelect');
  if (sel) sel.value = key;
  // Load period-specific maps from snapshot
  var snap = periodSnapshots[key];
  if (snap) {
    if (snap.cashMap)  activeCashMap  = snap.cashMap;
    if (snap.fcMap)    activeFcMap    = snap.fcMap;
    if (snap.sbMap)    activeSbMap    = snap.sbMap;
    if (snap.totalAUM) activeTotalAUM = snap.totalAUM;
    if (snap.fcCards)        activeFcCards       = snap.fcCards;
    if (snap.standbyFunds)   activeStandbyFunds  = snap.standbyFunds;
  }
  var snap = periodSnapshots[key];
  var src_rd  = snap.returnData  || _origReturnData;
  var src_inv = snap.investments || _origInvestments;
  returnData.length=0;  src_rd.forEach(function(d){returnData.push(d);});
  investments.length=0; src_inv.forEach(function(d){investments.push(d);});
  // cashMap/fcMap/sbByEnt/entityMeta read per-period from periodSnapshots inside each function
  var cap=periodSnapshots[key].caption;
  document.querySelectorAll('.page-caption').forEach(function(el){
    var t=el.textContent;
    t=t.replace(/January|February|March|April|May|June|July|August|September|October|November|December/g,cap.split(' ')[0]);
    t=t.replace(/20\d\d/g,cap.split(' ')[1]||'2026');
    el.textContent=t;
  });
  refreshAll();
}


// ─── helpers ───────────────────────────────────────────────────
const fmt = n => '$' + Math.round(n).toLocaleString();
const fmtK = n => n >= 1e6 ? '$' + (n/1e6).toFixed(1) + 'M' : '$' + (n/1e3).toFixed(0) + 'K';
const pct  = (a,b) => b ? ((a/b)*100).toFixed(1)+'%' : '—';

function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('section-'+id).classList.add('active');
  const btn = document.querySelector(`.nav-btn[onclick*="${id}"]`);
  if (btn) btn.classList.add('active');
}

// ─── COLOUR PALETTE ─────────────────────────────────────────────
const C = {
  navy:'#1F3864', gold:'#b89a5a', green:'#2d7a5f', red:'#a03030',
  blue:'#2a4a7f', rust:'#783c28', ink:'#2a303c', muted:'#5a6278',
  lg:'#f2ece0', border:'rgba(184,154,90,0.2)',
  teal:'#1a7a8c', orange:'#c07030',
};

// ─── DONUT helper ────────────────────────────────────────────────
function drawDonut(id, data, opts={}) {
  const canvas = document.getElementById(id);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const cx = W/2, cy = H/2, r = Math.min(W,H)/2 - 10, ir = r * 0.58;
  let start = -Math.PI/2;
  const total = data.reduce((a,d) => a + d.v, 0);
  data.forEach(d => {
    const arc = (d.v/total) * Math.PI * 2;
    ctx.beginPath(); ctx.moveTo(cx,cy);
    ctx.arc(cx, cy, r, start, start+arc);
    ctx.closePath(); ctx.fillStyle = d.c; ctx.fill();
    start += arc;
  });
  ctx.beginPath(); ctx.arc(cx,cy,ir,0,Math.PI*2);
  ctx.fillStyle = opts.bg || '#ffffff'; ctx.fill();
  if (opts.label) {
    ctx.fillStyle = C.ink; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = `300 11px 'Cormorant Garamond', serif`;
    ctx.fillText(opts.label, cx, cy);
  }
}

// ─── LINE CHART helper ───────────────────────────────────────────
function drawLine(id, datasets, labels, opts={}) {
  const canvas = document.getElementById(id);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width || canvas.offsetWidth;
  const H = canvas.height;
  canvas.width = W; canvas.height = H;
  ctx.clearRect(0,0,W,H);
  const pad = {t:16, r:16, b:36, l:64};
  const gw = W - pad.l - pad.r, gh = H - pad.t - pad.b;
  const allVals = datasets.flatMap(d => d.data);
  const minV = Math.min(...allVals) * 0.92;
  const maxV = Math.max(...allVals) * 1.06;
  const ys = v => pad.t + gh - ((v - minV) / (maxV - minV)) * gh;
  const xs = i => pad.l + (i / (labels.length-1)) * gw;
  // grid
  [0,.25,.5,.75,1].forEach(f => {
    const y = pad.t + gh*(1-f);
    ctx.strokeStyle = 'rgba(184,154,90,0.12)'; ctx.lineWidth = 1;
    ctx.setLineDash([3,4]);
    ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(pad.l+gw, y); ctx.stroke();
    ctx.setLineDash([]);
    const v = minV + f*(maxV-minV);
    ctx.fillStyle = C.muted; ctx.font = `300 9px 'DM Mono',monospace`;
    ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
    ctx.fillText(fmtK(v), pad.l-6, y);
  });
  // x labels
  const step = Math.ceil(labels.length / 6);
  labels.forEach((l, i) => {
    if (i % step !== 0 && i !== labels.length-1) return;
    ctx.fillStyle = C.muted; ctx.font = `300 8px 'DM Mono',monospace`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    ctx.fillText(l, xs(i), pad.t+gh+6);
  });
  // lines
  datasets.forEach(ds => {
    // fill
    ctx.beginPath();
    ctx.moveTo(xs(0), ys(ds.data[0]));
    ds.data.forEach((v,i) => ctx.lineTo(xs(i), ys(v)));
    ctx.lineTo(xs(ds.data.length-1), pad.t+gh);
    ctx.lineTo(xs(0), pad.t+gh);
    ctx.closePath();
    ctx.fillStyle = ds.fill || 'rgba(184,154,90,0.06)';
    ctx.fill();
    // stroke
    ctx.beginPath();
    ctx.moveTo(xs(0), ys(ds.data[0]));
    ds.data.forEach((v,i) => ctx.lineTo(xs(i), ys(v)));
    ctx.strokeStyle = ds.color; ctx.lineWidth = 1.5; ctx.stroke();
    // dots at end
    const lx = xs(ds.data.length-1), ly = ys(ds.data[ds.data.length-1]);
    ctx.beginPath(); ctx.arc(lx, ly, 3, 0, Math.PI*2);
    ctx.fillStyle = ds.color; ctx.fill();
  });
}

// ─── BAR CHART helper ────────────────────────────────────────────
function drawBars(id, labels, datasets, opts={}) {
  const canvas = document.getElementById(id);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.offsetWidth || 400;
  const H = canvas.height;
  canvas.width = W; canvas.height = H;
  ctx.clearRect(0,0,W,H);
  const pad = {t:12, r:16, b:60, l:68};
  const gw = W - pad.l - pad.r, gh = H - pad.t - pad.b;
  const n = labels.length, nds = datasets.length;
  const barW = (gw / n) * 0.65 / nds;
  const groupGap = (gw / n) * 0.35;
  const allV = datasets.flatMap(d=>d.data).filter(v=>v>0);
  const maxV = Math.max(...allV) * 1.1;
  const ys = v => pad.t + gh - (v / maxV) * gh;
  // grid
  [0,.25,.5,.75,1].forEach(f => {
    const y = pad.t + gh*(1-f);
    ctx.strokeStyle='rgba(184,154,90,0.12)'; ctx.lineWidth=1; ctx.setLineDash([3,4]);
    ctx.beginPath(); ctx.moveTo(pad.l,y); ctx.lineTo(pad.l+gw,y); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle=C.muted; ctx.font=`300 9px 'DM Mono',monospace`;
    ctx.textAlign='right'; ctx.textBaseline='middle';
    ctx.fillText(fmtK(maxV*f), pad.l-5, y);
  });
  // bars
  labels.forEach((lbl, i) => {
    const gx = pad.l + i * (gw/n) + groupGap/2;
    datasets.forEach((ds, di) => {
      const x = gx + di * (barW + 1);
      const v = ds.data[i] || 0;
      if (!v) return;
      const y = ys(v), h = pad.t+gh - y;
      ctx.fillStyle = ds.color;
      ctx.fillRect(x, y, barW, h);
    });
    ctx.fillStyle=C.muted; ctx.font=`300 8px 'DM Mono',monospace`;
    ctx.textAlign='center'; ctx.textBaseline='top';
    ctx.fillText(lbl, gx + (barW*nds)/2, pad.t+gh+6);
  });
}

// ─── DATA ───────────────────────────────────────────────────────

const investments = [
  // group: 'Cash/FD' = bank/cash/FD positions; 'Short Term' = liquid public/hedge/income funds; 'Long Term' = illiquid PE/VC/RE
  // yield = ann. income return; irr = ann. total return from cost basis; dpi = distributions/paid-in (0 = unrealised); months = holding months
  {name:'INVESCO Sr Loan (5EC)', vintage:2025,   ent:'5E',  cls:'pub',  strat:'Public – Fixed Inc.',  group:'Short Term', prin:2800000,   nav:2924584,   unf:0,       dist:0,        yield:0.0521, irr:0.0521, dpi:0.00, months:10},
  {name:'KKR Income Trust (5EC)', vintage:2025,  ent:'5E',  cls:'priv', strat:'Private – Dir. Lend.', group:'Short Term', prin:4100000,   nav:4327982,   unf:0,       dist:0,        yield:0.0648, irr:0.0648, dpi:0.00, months:10},
  {name:'MSA Venture III', vintage:2021,         ent:'5E',  cls:'priv', strat:'Private – VC',          group:'Long Term',  prin:899729,    nav:912056,    unf:100271,  dist:0,        yield:0.0045, irr:0.0045, dpi:0.00, months:41},
  {name:'NB Credit Opp. II', vintage:2021,       ent:'5E',  cls:'priv', strat:'Private – Credit',     group:'Long Term',  prin:630355,    nav:931897,    unf:369645,  dist:0,   yield:0.0000, irr:0.1221, dpi:0.00, months:33},
  {name:'Lexington Cap. X', vintage:2022,        ent:'5E',  cls:'priv', strat:'Private – Secondary',  group:'Long Term',  prin:2494493,   nav:3463666,   unf:2505507, dist:0,   yield:0.0000, irr:0.1743, dpi:0.00, months:24},
  {name:'Colbeck Strat. III', vintage:2023,      ent:'5E',  cls:'priv', strat:'Private – Credit',     group:'Long Term',  prin:2111288,   nav:2250704,   unf:2888712, dist:116155,   yield:0.0000, irr:0.1066, dpi:0.06, months:16},
  {name:'PSG Equity VI', vintage:2024,           ent:'5E',  cls:'priv', strat:'Private – Buyout',     group:'Long Term',  prin:1160252,   nav:1067315,   unf:3839748, dist:0,   yield:-0.1759,irr:-0.1759,dpi:0.00, months:9},
  {name:'BlueMark (ATH)', vintage:2023,          ent:'ATH', cls:'co',   strat:'Direct Co-Investment', group:'Long Term',  prin:500000,    nav:500000,    unf:0,       dist:0,        yield:0.0000, irr:0.0000, dpi:0.00, months:26},
  {name:'Thrive (ATH)', vintage:2024,            ent:'ATH', cls:'co',   strat:'Direct Co-Investment', group:'Long Term',  prin:250000,    nav:250000,    unf:0,       dist:0,        yield:0.0000, irr:0.0000, dpi:0.00, months:25},
  {name:'Asia Heritage (ATH)', vintage:2024,     ent:'ATH', cls:'co',   strat:'Direct Co-Investment', group:'Long Term',  prin:250000,    nav:250000,    unf:0,       dist:0,        yield:0.0000, irr:0.0000, dpi:0.00, months:22},
  {name:'Bonaccord Cap. II', vintage:2024,       ent:'ATH', cls:'priv', strat:'Private – GP Stakes',  group:'Long Term',  prin:1411495,   nav:2697644,   unf:3588505, dist:34720,   yield:0.0000, irr:1.1856, dpi:0.02, months:11},
  {name:'CF PE Co-Inv. V', vintage:2025,         ent:'ATH', cls:'priv', strat:'Private – Buyout',     group:'Long Term',  prin:200000,    nav:200000,    unf:800000,  dist:0,        yield:0.0000, irr:-0.6834,dpi:0.00, months:1},
  {name:'TIFF Diversifying (DSF)', vintage:2025, ent:'ATH', cls:'alt',  strat:'Alternatives – Hedge', group:'Short Term', prin:2000000,   nav:2112196,   unf:0,       dist:0,        yield:0.0000, irr:0.1665, dpi:0.00, months:5},
  {name:'QRT Torus (via TIFF)', vintage:2025,    ent:'ATH', cls:'alt',  strat:'Alternatives – Hedge', group:'Short Term', prin:2000000,   nav:2100876,   unf:0,       dist:0,        yield:0.0000, irr:0.1497, dpi:0.00, months:5},
  {name:'PIMCO GIS Income', vintage:2025,        ent:'LPE', cls:'pub',  strat:'Public – Fixed Inc.',  group:'Short Term', prin:2598436,   nav:2621740,   unf:0,       dist:101052,   yield:0.0601, irr:0.0856, dpi:0.06, months:6},
  {name:'JPM Income Fund', vintage:2025,         ent:'LPE', cls:'pub',  strat:'Public – Fixed Inc.',  group:'Short Term', prin:2591966,   nav:2565726,   unf:0,       dist:75393,    yield:0.0619, irr:0.0393, dpi:0.06, months:6},
  {name:'M&G Float Rate HY', vintage:2025,       ent:'LPE', cls:'pub',  strat:'Public – Fixed Inc.',  group:'Short Term', prin:1291570,   nav:1242370,   unf:0,       dist:55876,    yield:0.0663, irr:0.0093, dpi:0.07, months:6},
  {name:'Invesco Sr Loan (LPE)', vintage:2025,   ent:'LPE', cls:'pub',  strat:'Public – Fixed Inc.',  group:'Short Term', prin:1993742,   nav:1911308,   unf:0,       dist:78465,    yield:0.0787, irr:-0.0036, dpi:0.07, months:6},
  {name:'KKR Income Trust (LPE)', vintage:2025,  ent:'LPE', cls:'priv', strat:'Private – Dir. Lend.', group:'Short Term', prin:3000000,   nav:2964100,   unf:0,       dist:94737,    yield:0.0959, irr:0.0371, dpi:0.06, months:6},
  {name:'Blackstone BCRED-iCap', vintage:2025,   ent:'LPE', cls:'priv', strat:'Private – Dir. Lend.', group:'Short Term', prin:2000000,   nav:1954642,   unf:0,       dist:56177,    yield:0.0839, irr:0.0104, dpi:0.06, months:6},
  {name:'OTIC iCap', vintage:2025,               ent:'LPE', cls:'priv', strat:'Private – Dir. Lend.', group:'Short Term', prin:2000000,   nav:1980331,   unf:0,       dist:49742,    yield:0.0741, irr:0.0289, dpi:0.06, months:6},
  {name:'Clearlake Cap. VIII', vintage:2024,     ent:'LPE', cls:'priv', strat:'Private – Buyout',     group:'Long Term',  prin:849744,    nav:751565,    unf:4150257, dist:0,        yield:-0.5520,irr:-0.5520,dpi:0.00, months:5},
  {name:'Galvanize Innov. I', vintage:2022,      ent:'LPE', cls:'priv', strat:'Private – Climate VC', group:'Long Term',  prin:492413,    nav:465412,    unf:507587,  dist:0,        yield:0.0000, irr:-0.3801,dpi:0.00, months:5},
  {name:'Thoma Bravo XVI-A', vintage:2025,       ent:'LPE', cls:'priv', strat:'Private – Buyout',     group:'Long Term',  prin:471442,    nav:459850,    unf:4528558, dist:0,        yield:0.0000, irr:-0.4775, dpi:0.00, months:2},
  {name:'CA Select Co-Inv. (LPE)', vintage:2024, ent:'LPE', cls:'priv', strat:'Private – Buyout',     group:'Long Term',  prin:0,         nav:0,         unf:1000000, dist:0,        yield:0.0000, irr:0.0000, dpi:0.00, months:0},
  {name:'Gunung Raja (GGRP)', vintage:2023,      ent:'5E',  cls:'pub',  strat:'Public – Equity',      group:'Long Term - GGRP',  prin:2645862,   nav:6853217,   unf:0,       dist:0,        yield:null, irr:null,   dpi:0.00, months:35},
  {name:'Odin Hills J8', vintage:2025,           ent:'KIL', cls:'re',   strat:'Real Asset – Property',group:'Real Estate',prin:3095297,   nav:3095297,   unf:0,       dist:0,        yield:0.0000, irr:0.0000, dpi:0.00, months:10},
];

const totalNAV = investments.filter(d=>d.prin>0).reduce((a,d)=>a+d.nav,0);

// ─── FORMAT HELPERS ──────────────────────────────────────────────
function fmtPct(v) {
  if (v === null || v === undefined || isNaN(v)) return '—';
  const cls = v >= 0 ? 'up' : 'down';
  return `<span class="${cls}">${(v*100).toFixed(1)}%</span>`;
}
function fmtDPI(v) {
  if (!v) return '<span style="color:var(--ink-muted)">0.00×</span>';
  return `${v.toFixed(2)}×`;
}

// ─── BUILD GROUPED ROWS ───────────────────────────────────────────
function buildGroupedRows(inv, navBase) {
  const ORDER = ['Short Term', 'Long Term', 'Long Term - GGRP', 'Real Estate'];
  const chipClass = {pub:'chip-pub', priv:'chip-priv', alt:'chip-alt', re:'chip-re', co:'chip-priv'};
  let html = '';
  for (const grp of ORDER) {
    const grpInv = inv.filter(d => d.group === grp);
    if (!grpInv.length) continue;
    const grpNav  = grpInv.reduce((a,d)=>a+d.nav,0);
    const grpPrin = grpInv.filter(d=>d.prin>0).reduce((a,d)=>a+d.prin,0);
    const grpGL   = grpNav - grpPrin;
    const grpDist  = grpInv.reduce((a,d)=>a+(d.dist||0),0);
    const grpMoic = grpPrin > 0 ? (grpNav + grpDist) / grpPrin : 0;
    const grpUnf  = grpInv.reduce((a,d)=>a+d.unf,0);
    const grpColor = grp === 'Short Term' ? C.blue : grp === 'Real Estate' ? C.rust : grp === 'Long Term - GGRP' ? '#7a3a1a' : C.navy;
    // Group header row — col order: Entity · Investment · Vintage · Strategy · Principal · NAV · %NAV · G/L · Ann.Yield · Ann.Ret · IRR · DPI · MOIC · Unfunded
    html += `<tr style="background:${grpColor}0d;border-left:3px solid ${grpColor}">
      <td colspan="4" style="padding:8px 16px;font-family:'DM Mono',monospace;font-size:9px;letter-spacing:0.12em;color:${grpColor};font-weight:500;text-transform:uppercase">${grp} &nbsp;<span style="opacity:0.5">${grpInv.length} investment${grpInv.length>1?'s':''}</span></td>
      <td style="text-align:right;font-family:'DM Mono',monospace;font-size:10px;color:var(--ink-muted)">${fmt(grpPrin)}</td>
      <td style="text-align:right;font-family:'DM Mono',monospace;font-size:10px;font-weight:500">${fmt(grpNav)}</td>
      <td style="text-align:right;font-size:10px;color:var(--ink-muted)">${navBase>0?(grpNav/navBase*100).toFixed(1)+'%':'—'}</td>
      <td style="text-align:right;font-family:'DM Mono',monospace;font-size:10px" class="${grpGL>=0?'up':'down'}">${(grpGL>=0?'+':'-')}$${Math.abs(Math.round(grpGL)).toLocaleString()}</td>
      <td style="text-align:right;font-size:10px;color:var(--ink-muted)"></td>
      <td colspan="3" style="text-align:right;font-size:10px;color:var(--ink-muted)"></td>
      <td style="text-align:center;font-family:'DM Mono',monospace;font-size:10px">${grp==='Short Term'?'<span style="color:var(--ink-muted)">—</span>':grpMoic.toFixed(2)+'×'}</td>
      <td style="text-align:right;font-family:'DM Mono',monospace;font-size:10px;color:${grpUnf?C.red:C.muted}">${grpUnf?fmt(grpUnf):'—'}</td>
    </tr>`;
    // Investment rows
    for (const d of grpInv) {
      const gl = d.nav - d.prin;
      const moic = d.prin > 0 ? (d.nav + (d.dist||0)) / d.prin : 0;
      const glClass = gl >= 0 ? 'up' : 'down';
      const glStr = (gl>=0?'+':'-') + '$' + Math.abs(Math.round(gl)).toLocaleString();
      const entColor = {'5E':C.navy,'ATH':C.gold,'LPE':C.green,'KIL':C.rust}[d.ent];
      html += `<tr>
        <td><span style="font-family:'DM Mono';font-size:9px;padding:2px 7px;border-radius:2px;background:${entColor}20;color:${entColor};font-weight:500;letter-spacing:0.1em">${d.ent}</span></td>
        <td style="padding-left:12px">${d.name}${d.group==='Real Estate'?'<span style="font-family:\'DM Mono\';font-size:8px;padding:1px 5px;border-radius:2px;background:#8c3a2a20;color:#8c3a2a;font-weight:600;margin-left:6px;letter-spacing:0.08em">WIP</span>':''}</td>
        <td style="text-align:center;font-family:'DM Mono',monospace;font-size:11px;color:var(--ink-muted)">${d.vintage||'—'}</td>
        <td><span class="asset-chip ${chipClass[d.cls]}">${d.strat}</span></td>
        <td style="text-align:right">${d.prin>0?fmt(d.prin):'<span style="color:var(--ink-muted)">—</span>'}</td>
        <td style="text-align:right">${d.nav>0?fmt(d.nav):'<span style="color:var(--ink-muted)">—</span>'}</td>
        <td style="text-align:right">${navBase>0&&d.nav>0?(d.nav/navBase*100).toFixed(1)+'%':'—'}</td>
        <td style="text-align:right" class="${glClass}">${d.prin>0?glStr:'—'}</td>
        <td style="text-align:right">${d.yield&&d.yield!==d.irr?fmtPct(d.yield):'<span style="color:var(--ink-muted)">—</span>'}</td>
        <td style="text-align:right">${d.group==='Short Term'?(d.months>=3?fmtPct(d.irr):'<span style="color:var(--ink-muted)">Short hist.</span>'):'<span style="color:var(--ink-muted)">—</span>'}</td>
        <td style="text-align:right">${d.group==='Short Term'?'<span style="color:var(--ink-muted)">—</span>':(d.months>=3?fmtPct(d.irr):'<span style="color:var(--ink-muted)">Short hist.</span>')}</td>
        <td style="text-align:right">${d.group==='Short Term'?'<span style="color:var(--ink-muted)">—</span>':fmtDPI(d.dpi)}</td>
        <td style="text-align:right">${d.group==='Short Term'?'<span style="color:var(--ink-muted)">—</span>':(d.prin>0?moic.toFixed(2)+'×':'—')}</td>
        <td style="text-align:right;color:${d.unf?C.red:C.muted}">${d.unf ? fmt(d.unf) : '—'}</td>
      </tr>`;
    }
  }
  return html;
}

// ─── RENDER PORTFOLIO TABLE ──────────────────────────────────────
function renderPortfolioTable() {
  const tbody = document.getElementById('portfolioTbody');
  tbody.innerHTML = buildGroupedRows(investments, totalNAV);
}

// ─── RENDER WATERFALL ───────────────────────────────────────────
function renderWaterfall() {
  const cMap = activeCashMap || {ALL:6020184};
  const sbM  = activeSbMap   || {ALL:25948686};
  const fcM  = activeFcMap   || {ALL:6540914};
  const fc   = activeFcCards || {};
  const inv  = getInv();
  const unfKT_5E  = inv.filter(d=>d.ent==='5E').reduce((a,d)=>a+(d.unf||0),0);
  const unfKT_LPE = inv.filter(d=>d.ent==='LPE').reduce((a,d)=>a+(d.unf||0),0);
  const unfKT_ATH = fc.fcAth ? (fc.fcAth.find(d=>d.label.includes('Unfunded'))||{val:0}).val : 0;
  const unfKT_ALL = unfKT_5E + unfKT_ATH + unfKT_LPE;
  const totalAvail = cMap.ALL + sbM.ALL;
  const expAll = 811772;  // expenses excl settlement — period-stable for 2026
  const settle = 500000;

  const rows = [
    {label:'Cash/FD',                       sign:'+', val:cMap.ALL,    pct:100, color:C.green},
    {label:'Standby / Liquid Investments',  sign:'+', val:sbM.ALL,     pct:100, color:C.blue},
    {label:'Total Available Liquidity',     sign:'=', val:totalAvail,  pct:100, color:C.navy, total:true},
    {label:'Unfunded Commitments (KT)',     sign:'−', val:unfKT_ALL,   pct:100, color:C.red},
    {label:'Expenses Forecast 2026',        sign:'−', val:expAll-settle,pct:100,color:C.rust},
    {label:'Settlement to 5E',             sign:'−', val:settle,       pct:100, color:C.orange||'#c07030'},
    {label:'Total Free Cash',              sign:'=', val:fcM.ALL,      pct:100, color:C.green, total:true},
  ];
  const maxV = Math.max(...rows.map(r=>r.val));
  const el = document.getElementById('waterfallRows');
  if (!el) return;
  el.innerHTML = rows.map(r => `
    <div class="waterfall-row">
      <div class="wf-label${r.total?' total':''}">${r.label}</div>
      <div class="wf-sign" style="color:${r.sign==='+'?C.green:r.sign==='−'?C.red:C.muted}">${r.sign}</div>
      <div class="wf-val" style="color:${r.total?C.ink:r.sign==='+'?C.green:r.sign==='−'?C.red:C.muted}">
        ${r.val ? fmt(r.val) : '—'}
      </div>
      <div class="wf-bar-wrap">
        <div class="wf-bar-track">
          <div class="wf-bar-fill" style="width:${maxV?Math.round(r.val/maxV*120):0}px;background:${r.color}"></div>
        </div>
      </div>
    </div>`).join('');
}

// ─── ENTITY FREE CASH CARDS ──────────────────────────────────────
function fcCard(containerId, rows) {
  const el = document.getElementById(containerId);
  if (!el) return;
  // ID map: containerId+label → span id for dynamic updates
  const idMap = {
    'fc5e|Cash/FD':'fc5eCash', 'fc5e|Standby Funds':'fc5eSb',
    'fc5e|Unfunded Commitments':'fc5eUnf', 'fc5e|Free Cash':'fc5eTotal',
    'fcAth|Cash/FD':'fcAthCash', 'fcAth|Standby Funds':'fcAthSb',
    'fcAth|Free Cash':'fcAthTotal',
    'fcLpe|Cash/FD':'fcLpeCash', 'fcLpe|Standby Funds':'fcLpeSb',
    'fcLpe|Free Cash':'fcLpeTotal',
  };
  el.innerHTML = rows.map(r => {
    const spanId = idMap[containerId+'|'+r.label] ? ` id="${idMap[containerId+'|'+r.label]}"` : '';
    return `
    <div style="display:flex;justify-content:space-between;align-items:center;
      padding:6px 0;border-bottom:1px solid var(--border-lt)">
      <span style="font-family:'DM Mono',monospace;font-size:10px;color:var(--ink-muted);
        letter-spacing:0.06em">${r.label}</span>
      <span${spanId} style="font-family:'DM Mono',monospace;font-size:11px;font-weight:500;
        color:${r.sign==='='?'var(--ink)':r.sign==='+'?'var(--green)':'var(--red)'}">
        ${r.sign !== '=' ? r.sign : ''} ${fmt(r.val)}
      </span>
    </div>`;
  }).join('');
}

// ─── COMMITMENT GAUGES ───────────────────────────────────────────
function renderCommitments() {
  const nameMap = {
    'MSA Venture III':'5E – MSA', 'NB Credit Opp. II':'5E – NB',
    'Lexington Cap. X':'5E – Lexington', 'Colbeck Strat. III':'5E – Colbeck',
    'PSG Equity VI':'5E – PSG', 'Bonaccord Cap. II':'ATH – Bonaccord',
    'CF PE Co-Inv. V':'ATH – CF COOP', 'Clearlake Cap. VIII':'LPE – Clearlake',
    'Galvanize Innov. I':'LPE – Galvanize', 'Thoma Bravo XVI-A':'LPE – Thoma Bravo',
    'CA Select Co-Inv. (LPE)':'LPE – Cambridge',
  };
  const data = getInv()
    .filter(d => nameMap[d.name])
    .map(d => ({name:nameMap[d.name], comm:d.prin+(d.unf||0), inv:d.prin, unf:d.unf||0}));
  document.getElementById('commitmentGauges').innerHTML = data.map(d => `
    <div class="commit-row">
      <div class="commit-name">${d.name}</div>
      <div class="commit-track">
        <div class="commit-fill" style="width:${(d.inv/d.comm*100).toFixed(1)}%"></div>
      </div>
      <div class="commit-vals">
        <span>${fmtK(d.inv)}</span> of ${fmtK(d.comm)} &nbsp;·&nbsp; <span style="color:var(--red)">
      </div>
    </div>`).join('');
}

// ─── EXPENSE FORECAST ────────────────────────────────────────────
function renderExpenses() {
  const exp = [
    {m:'Jan',v:3712},{m:'Feb',v:2500},{m:'Mar',v:76618},{m:'Apr',v:49255},
    {m:'May',v:0},{m:'Jun',v:69739},{m:'Jul',v:428434},{m:'Aug',v:17045},
    {m:'Sep',v:83138},{m:'Oct',v:5758},{m:'Nov',v:0},{m:'Dec',v:75909},
  ];
  const maxE = Math.max(...exp.map(e=>e.v));
  document.getElementById('expForecast').innerHTML = exp.map(e => `
    <div class="exp-row">
      <div class="exp-month">${e.m}</div>
      <div class="exp-bar-wrap">
        <div class="exp-bar-track">
          <div class="exp-bar-fill" style="width:${e.v?e.v/maxE*100:0}%"></div>
        </div>
      </div>
      <div class="exp-val">${e.v ? fmt(e.v) : '—'}</div>
    </div>`).join('');
}

// ─── KIL GAUGES ──────────────────────────────────────────────────

function updateKILSummaryKPI() {
  const isJan = activePeriod === '2026-01';
  const spent     = isJan ? 3093622 : 3095297;
  const remaining = isJan ? 2072030 : 2070355;
  const budget    = 5165652;
  const util      = (spent / budget * 100).toFixed(1);
  const spentM    = (spent / 1e6).toFixed(3) + 'M';

  // Update spent KPI card
  const spentEl = document.getElementById('kilSpentKpi');
  if (spentEl) {
    spentEl.querySelector('.kpi-value').innerHTML =
      '<span class="currency">$</span>' + spentM;
    spentEl.querySelector('.kpi-sub').textContent =
      util + '% of total budget utilised';
  }
  // Update remaining KPI
  const remEl = document.getElementById('kilRemKpi');
  if (remEl) {
    const remM = (remaining / 1e6).toFixed(3) + 'M';
    remEl.querySelector('.kpi-value').innerHTML =
      '<span class="currency">$</span>' + remM;
  }
}
function renderKILGauges() {
  const isJan = activePeriod === '2026-01';
  const data = [
    {name:'Land Purchase',    bud:1737968, act:1806005},
    {name:'PM Fees',          bud:929144,  act:565627},
    {name:'Construction',     bud:2339572, act:676837},
    {name:'Title Reg.',       bud:3041,    act:3084},
    {name:'Kazoku Set-Up',    bud:3625,    act:isJan ? 3075 : 4750},
    {name:'Legal Fees',       bud:46415,   act:34847},
    {name:'Taxes',            bud:96215,   act:283},
    {name:'Other',            bud:9671,    act:3865},
  ];
  const el = document.getElementById('kilGauges');
  if (!el) return;
  el.innerHTML = data.map(d => {
    const util = d.bud > 0 ? d.act / d.bud : 0;
    const pctW = Math.min(util * 100, 100).toFixed(1);
    const fillColor = util > 1 ? '#a03030' : util > 0.8 ? '#c07030' : '#2d7a5f';
    const remaining = d.bud - d.act;
    const remText = remaining > 0
      ? `<span style="color:#5a6278">${fmtK(remaining)} remaining</span>`
      : `<span style="color:#a03030">Over budget</span>`;
    return `<div style="margin-bottom:22px">
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:7px">
        <span style="font-family:'Jost',sans-serif;font-size:13px;font-weight:600;color:#2a303c">${d.name}</span>
        <span style="font-family:'DM Mono',monospace;font-size:10px;color:#5a6278">
          ${fmtK(d.act)} spent &nbsp;/&nbsp; ${fmtK(d.bud)} budget
          &nbsp;&nbsp;<span style="color:${fillColor};font-weight:700">${(util*100).toFixed(1)}%</span>
          &nbsp;utilised &nbsp;&nbsp;${remText}
        </span>
      </div>
      <div style="height:6px;background:rgba(184,154,90,0.15);border-radius:3px;overflow:hidden">
        <div style="height:100%;width:${pctW}%;background:${fillColor};border-radius:6px"></div>
      </div>
    </div>`;
  }).join('');
}

// ─── KIL EXPENSE FORECAST TABLE ─────────────────────────────────
function renderKILExpForecast() {
  const rows = [
    {cat:'PM Fees',       m:[0,0,0,0,185829,0,0,92914,0,0,0,0]},
    {cat:'Construction',  m:[0,0,467914,0,350936,0,0,350936,0,350936,0,0]},
    {cat:'Title Reg.',    m:[0,0,33,0,0,0,0,0,0,0,0,0]},
    {cat:'Legal Fees',    m:[0,0,1337,0,0,0,0,0,0,0,0,0]},
    {cat:'Taxes',         m:[0,0,3690,0,0,0,0,0,0,0,91979,0]},
    {cat:'Other Fees',    m:[0,0,5294,0,0,0,0,0,0,0,0,0]},
  ];

  const fv = v => v > 0
    ? `<span style="font-family:'DM Mono',monospace;font-size:10px;color:#2a303c">${fmt(v)}</span>`
    : `<span style="color:rgba(184,154,90,0.3)">—</span>`;

  const tbody  = document.getElementById('kilExpTbody');
  const footer = document.getElementById('kilExpFooter');
  if (!tbody) return;

  const colTotals = Array(12).fill(0);

  tbody.innerHTML = rows.map(d => {
    const rowTotal = d.m.reduce((a,v) => a+v, 0);
    d.m.forEach((v,i) => colTotals[i] += v);
    return `<tr>
      <td style="font-family:'Jost',sans-serif;font-size:12px;color:#2a303c">${d.cat}</td>
      ${d.m.map(v => `<td style="text-align:right">${fv(v)}</td>`).join('')}
      <td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px;font-weight:600;
        color:#783c28">${rowTotal > 0 ? fmt(rowTotal) : '—'}</td>
    </tr>`;
  }).join('');

  if (footer) {
    const grandTotal = colTotals.reduce((a,v) => a+v, 0);
    footer.innerHTML = `<td style="font-weight:600;font-family:'Jost',sans-serif">Total</td>
      ${colTotals.map(v => `<td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px;font-weight:600;color:#783c28">${v > 0 ? fmt(v) : '—'}</td>`).join('')}
      <td style="text-align:right;font-family:'DM Mono',monospace;font-size:12px;font-weight:700;color:#783c28">${fmt(grandTotal)}</td>`;
  }
}

// ─── LIQUIDITY FULL REFRESH ──────────────────────────────────────
function refreshLiquidity(ent) {
  const isJan = activePeriod === '2026-01';

  // ── Period-aware data ─────────────────────────────────────────
  const cashMap = activeCashMap || {ALL:6020184,'5E':2825972,ATH:1511696,LPE:1682516,KIL:0};
  const sbMap   = activeSbMap   || {ALL:25948686,'5E':7252566,ATH:3455903,LPE:15240217,KIL:0};
  const fcMap   = activeFcMap   || {ALL:6540914,'5E':215733,ATH:229574,LPE:6095608,KIL:0};
  const fc      = activeFcCards || {};

  // ── Rebuild entity free cash cards from active period data ───
  if (fc.fc5e)  fcCard('fc5e',  fc.fc5e);
  if (fc.fcAth) fcCard('fcAth', fc.fcAth);
  if (fc.fcLpe) fcCard('fcLpe', fc.fcLpe);

  // Derived totals
  const avail  = {
    ALL: cashMap.ALL + sbMap.ALL,
    '5E': cashMap['5E'] + sbMap['5E'],
    ATH:  cashMap.ATH  + sbMap.ATH,
    LPE:  cashMap.LPE  + sbMap.LPE,
  };
  // Unfunded per entity (read from investments)
  const inv = getInv();
  const unfMap = {
    ALL: inv.filter(d=>d.ent!=='KIL').reduce((a,d)=>a+(d.unf||0),0),
    '5E': inv.filter(d=>d.ent==='5E').reduce((a,d)=>a+(d.unf||0),0),
    ATH:  inv.filter(d=>d.ent==='ATH').reduce((a,d)=>a+(d.unf||0),0),
    LPE:  inv.filter(d=>d.ent==='LPE').reduce((a,d)=>a+(d.unf||0),0),
  };
  // Expenses (fixed — not period-dependent)
  const expMap = {ALL:811772,'5E':158922,ATH:512126,LPE:640724,KIL:0};
  // Settlement (ATH only, fixed)
  const settlementATH = 500000;
  // KT unfunded (ATH only — from fcCards if available)
  const athUnfKT = fc.fcAth ? (fc.fcAth.find(d=>d.label.includes('Unfunded'))||{val:unfMap.ATH}).val : unfMap.ATH;
  // ALL unfunded KT = 5E + ATH_KT + LPE
  const unfKT_ALL = unfMap['5E'] + athUnfKT + unfMap.LPE;

  // ── 1. Cash/FD table rows ─────────────────────────────────────
  document.querySelectorAll('#section-liquidity .cash-table tbody tr[data-ent]').forEach(row => {
    const rowEnt = row.getAttribute('data-ent');
    row.style.display = (ent === 'ALL' || rowEnt === ent) ? '' : 'none';
  });
  const cashTotalEl = document.getElementById('cashTableTotal');
  if (cashTotalEl) cashTotalEl.textContent = fmt(cashMap[ent] || 0);

  // Update individual cash rows
  if (isJan) {
    const set = (id,v) => { var el=document.getElementById(id); if(el) el.innerHTML=v; };
    set('liqCash5eBos','$'+fmt(41267));
    set('liqCash5eDbs','$'+fmt(460490));
    set('liqCash5eBcl','$'+fmt(2734956));
    set('liqCash5eSgd','$'+fmt(1840));
    set('liqCashAth',  '$'+fmt(1492638));
    set('liqCashLpe',  '$'+fmt(1588103));
  } else {
    const set = (id,v) => { var el=document.getElementById(id); if(el) el.innerHTML=v; };
    set('liqCash5eBos','$'+fmt(83700));
    set('liqCash5eDbs','$'+fmt(496075));
    set('liqCash5eBcl','$'+fmt(2245467));
    set('liqCash5eSgd','$'+fmt(730));
    set('liqCashAth',  '$'+fmt(1511696));
    set('liqCashLpe',  '$'+fmt(1682516));
  }

  // ── 2. Free Cash Bridge waterfall ─────────────────────────────
  const wfDefs = {
    ALL: {
      tag:'Consolidated',
      note:'ATH unfunded = KT portion only; KF co-investor gap excluded',
      rows:[
        {label:'Cash/FD',                    sign:'+', val:cashMap.ALL,    color:C.green},
        {label:'Standby / Liquid Investments',sign:'+', val:sbMap.ALL,     color:C.blue},
        {label:'Total Available Liquidity',  sign:'=', val:avail.ALL,      color:C.navy, total:true},
        {label:'Unfunded Commitments (KT)',  sign:'−', val:unfKT_ALL,      color:C.red},
        {label:'Expenses Forecast 2026',     sign:'−', val:expMap.ALL-settlementATH, color:C.rust},
        {label:'Settlement to 5E',           sign:'−', val:settlementATH,  color:'#c07030'},
        {label:'Total Free Cash',            sign:'=', val:fcMap.ALL,      color:C.green, total:true},
      ]
    },
    '5E':{
      tag:'5E Capital', note:'',
      rows:[
        {label:'Cash/FD',              sign:'+', val:cashMap['5E'],  color:C.green},
        {label:'Standby Funds',        sign:'+', val:sbMap['5E'],    color:C.blue},
        {label:'Total Available',      sign:'=', val:avail['5E'],    color:C.navy, total:true},
        {label:'Unfunded Commitments', sign:'−', val:unfMap['5E'],   color:C.red},
        {label:'Expenses Forecast 2026',sign:'−',val:expMap['5E'],   color:C.rust},
        {label:'Total Free Cash',      sign:'=', val:fcMap['5E'],    color:C.green, total:true},
      ]
    },
    ATH:{
      tag:'Athena (ATH)',
      note:'Unfunded = KT portion only; KF co-investor gap excluded',
      rows:[
        {label:'Cash/FD',                   sign:'+', val:cashMap.ATH,  color:C.green},
        {label:'Standby Funds (AMH_FD)',    sign:'+', val:sbMap.ATH,    color:C.blue},
        {label:'Total Available',           sign:'=', val:avail.ATH,    color:C.navy, total:true},
        {label:'Unfunded Commitments (KT)', sign:'−', val:athUnfKT,     color:C.red},
        {label:'Expenses Forecast 2026',    sign:'−', val:expMap.ATH-settlementATH, color:C.rust},
        {label:'Settlement to 5E',          sign:'−', val:settlementATH,color:'#c07030'},
        {label:'Total Free Cash',           sign:'=', val:fcMap.ATH,    color:C.green, total:true},
      ]
    },
    LPE:{
      tag:'LPE', note:'',
      rows:[
        {label:'Cash/FD',              sign:'+', val:cashMap.LPE,  color:C.green},
        {label:'Standby Funds',        sign:'+', val:sbMap.LPE,    color:C.blue},
        {label:'Total Available',      sign:'=', val:avail.LPE,    color:C.navy, total:true},
        {label:'Unfunded Commitments', sign:'−', val:unfMap.LPE,   color:C.red},
        {label:'Expenses Forecast 2026',sign:'−',val:expMap.LPE,   color:C.rust},
        {label:'Total Free Cash',      sign:'=', val:fcMap.LPE,    color:C.green, total:true},
      ]
    },
    KIL:{
      tag:'KIL Real Estate', note:'KIL has no standalone bank account; funded via LPE and ATH inter-entity transfers.',
      rows:[
        {label:'No standalone cash account', sign:' ', val:0, color:C.muted},
        {label:'Funded via LPE / ATH',       sign:' ', val:0, color:C.muted},
      ]
    },
  };

  const wf = wfDefs[ent];
  const maxV = Math.max(...wf.rows.map(r => r.val));
  document.getElementById('waterfallTag').textContent = wf.tag;
  const noteEl = document.getElementById('waterfallNote');
  if (noteEl) { noteEl.textContent = wf.note; noteEl.style.display = wf.note ? '' : 'none'; }
  document.getElementById('waterfallRows').innerHTML = wf.rows.map(r => `
    <div class="waterfall-row">
      <div class="wf-label${r.total?' total':''}">${r.label}</div>
      <div class="wf-sign" style="color:${r.sign==='+'?C.green:r.sign==='−'?C.red:C.muted}">${r.sign}</div>
      <div class="wf-val" style="color:${r.total?C.ink:r.sign==='+'?C.green:r.sign==='−'?C.red:C.muted}">
        ${r.val ? fmt(r.val) : '—'}
      </div>
      <div class="wf-bar-wrap">
        <div class="wf-bar-track">
          <div class="wf-bar-fill" style="width:${maxV?Math.round(r.val/maxV*120):0}px;background:${r.color}"></div>
        </div>
      </div>
    </div>`).join('');

  // ── 3. Free Cash entity cards visibility ──────────────────────
  const fc5eCard  = document.getElementById('fc5eCard');
  const fcAthCard = document.getElementById('fcAthCard');
  const fcLpeCard = document.getElementById('fcLpeCard');
  const fcGrid    = document.getElementById('fcGrid');
  if (fc5eCard)  fc5eCard.style.display  = ent==='ALL' ? '' : 'none';
  if (fcAthCard) fcAthCard.style.display = ent==='ALL' ? '' : 'none';
  if (fcLpeCard) fcLpeCard.style.display = ent==='ALL' ? '' : 'none';
  if (fcGrid)    fcGrid.style.display    = ent === 'KIL' ? 'none' : '';

  // ── 4. Standby KPI strip ──────────────────────────────────────
  const sbCounts = {ALL:'3 entities · 10 instruments','5E':'2 instruments',ATH:'1 fund (AMH_FD)',LPE:'7 instruments',KIL:'No standby funds'};
  const sbStrip  = document.getElementById('standbyKpiStrip');
  if (sbStrip) {
    if (ent === 'ALL') {
      sbStrip.style.gridTemplateColumns = 'repeat(4,1fr)';
      ['sbKpi0','sbKpi1','sbKpi2','sbKpi3'].forEach(id => { const el=document.getElementById(id); if(el) el.style.display=''; });
      const k0 = document.getElementById('sbKpi0');
      if (k0) { k0.querySelector('.kpi-value').innerHTML=`<span class="currency">$</span>${fmtM(sbMap.ALL)}`; k0.querySelector('.kpi-sub').textContent=sbCounts.ALL; }
      // Update per-entity SB KPI values
      const k1 = document.getElementById('sbKpi1');
      const k2 = document.getElementById('sbKpi2');
      const k3 = document.getElementById('sbKpi3');
      if (k1) k1.querySelector('.kpi-value').innerHTML=`<span class="currency">$</span>${fmtM(sbMap['5E'])}`;
      if (k2) k2.querySelector('.kpi-value').innerHTML=`<span class="currency">$</span>${fmtM(sbMap.ATH)}`;
      if (k3) k3.querySelector('.kpi-value').innerHTML=`<span class="currency">$</span>${fmtM(sbMap.LPE)}`;
    } else {
      const entKpiId = {'5E':'sbKpi1',ATH:'sbKpi2',LPE:'sbKpi3',KIL:'sbKpi3'}[ent];
      sbStrip.style.gridTemplateColumns = 'repeat(2,1fr)';
      document.getElementById('sbKpi0').style.display = '';
      ['sbKpi1','sbKpi2','sbKpi3'].forEach(id => { const el=document.getElementById(id); if(el) el.style.display=(id===entKpiId)?'':'none'; });
      const k0 = document.getElementById('sbKpi0');
      k0.querySelector('.kpi-value').innerHTML=`<span class="currency">$</span>${fmtM(sbMap[ent])}`;
      k0.querySelector('.kpi-sub').textContent=sbCounts[ent];
      // Also update individual entity boxes in case they become visible
      const k1=document.getElementById('sbKpi1'); if(k1) k1.querySelector('.kpi-value').innerHTML=`<span class="currency">$</span>${fmtM(sbMap['5E'])}`;
      const k2=document.getElementById('sbKpi2'); if(k2) k2.querySelector('.kpi-value').innerHTML=`<span class="currency">$</span>${fmtM(sbMap.ATH)}`;
      const k3=document.getElementById('sbKpi3'); if(k3) k3.querySelector('.kpi-value').innerHTML=`<span class="currency">$</span>${fmtM(sbMap.LPE)}`;
    }
  }
}


// standbyFunds — read from active period snapshot
function getStandbyFunds() {
  return activeStandbyFunds || [
  {name:'INVESCO Sr Loan',   ent:'5E',  strat:'Public – Fixed Inc.',  group:'Short Term', val:2924583.56},
  {name:'KKR Income Trust',  ent:'5E',  strat:'Private – Dir. Lend.', group:'Short Term', val:4327982.45},
  {name:'AMH_FD',            ent:'ATH', strat:'Liquid Fund',           group:'Short Term', val:3455903.38},
  {name:'PIMCO GIS Income',  ent:'LPE', strat:'Public – Fixed Inc.',  group:'Short Term', val:2621739.72},
  {name:'JPM Income Fund',   ent:'LPE', strat:'Public – Fixed Inc.',  group:'Short Term', val:2565726.22},
  {name:'M&G Float Rate HY', ent:'LPE', strat:'Public – Fixed Inc.',  group:'Short Term', val:1242370.33},
  {name:'Invesco Sr Loan',   ent:'LPE', strat:'Public – Fixed Inc.',  group:'Short Term', val:1911308.35},
  {name:'KKR Income Trust',  ent:'LPE', strat:'Private – Dir. Lend.', group:'Short Term', val:2964099.91},
  {name:'Blackstone BCRED',  ent:'LPE', strat:'Private – Dir. Lend.', group:'Short Term', val:1954641.57},
  {name:'OTIC iCap',         ent:'LPE', strat:'Private – Dir. Lend.', group:'Short Term', val:1980331.27},
];
}
const standbyFunds = getStandbyFunds();  // initial load (Feb default)
const sbTotal = standbyFunds.reduce((a,d) => a+d.val, 0);
const sbColors = [C.navy,'#3a6cbf',C.gold,C.green,'#1a7a8c','#2d8c60',
                  '#5a8c3a','#8c6a2a','#c07030',C.rust];

function buildStandbyRows(filtered, total) {
  const entColor = {'5E':C.navy,'ATH':C.gold,'LPE':C.green};
  // Group by entity first within Short Term
  const entities = [...new Set(filtered.map(d=>d.ent))];
  let html = '';
  // Single group header: Short Term
  const grpColor = C.blue;
  html += `<tr style="background:${grpColor}0d;border-left:3px solid ${grpColor}">
    <td colspan="5" style="padding:6px 16px;font-family:'DM Mono',monospace;font-size:9px;letter-spacing:0.12em;color:${grpColor};font-weight:500;text-transform:uppercase">Short Term &nbsp;<span style="opacity:0.5">Liquid standby instruments</span></td>
  </tr>`;
  filtered.forEach((d,i) => {
    const bg = i%2===0 ? 'var(--surface2)' : 'var(--surface)';
    const ec = entColor[d.ent] || C.ink;
    html += `<tr style="background:${bg}">
      <td><span style="font-family:'DM Mono';font-size:9px;padding:2px 7px;border-radius:2px;background:${ec}20;color:${ec};font-weight:500;letter-spacing:0.1em">${d.ent}</span></td>
      <td style="padding-left:12px">${d.name}</td>
      <td><span class="asset-chip chip-pub">${d.strat}</span></td>
      <td style="text-align:right;font-family:'DM Mono',monospace;font-size:10px">${fmt(d.val)}</td>
      <td style="text-align:right;font-family:'DM Mono',monospace;font-size:10px">${(d.val/total*100).toFixed(1)}%</td>
    </tr>`;
  });
  return html;
}


function renderLiquidityCash() {
  const isJan = activePeriod === '2026-01';
  // Cash table values
  const cashData = isJan ? {
    bos:41267, dbs:460490, bcl:2734956, sgd:1840,
    ath:1492638, lpe:1588103, total:6319293,
    sgdRaw:2331
  } : {
    bos:83700, dbs:496075, bcl:2245467, sgd:730,
    ath:1511696, lpe:1682516, total:6020184,
    sgdRaw:934
  };
  function set(id, txt) { var el=document.getElementById(id); if(el) el.innerHTML=txt; }
  set('liqCash5eBos',  '$'+fmt(cashData.bos));
  set('liqCash5eDbs',  '$'+fmt(cashData.dbs));
  set('liqCash5eBcl',  '$'+fmt(cashData.bcl));
  set('liqCash5eSgd',  '$'+fmt(cashData.sgd));
  set('liqCashAth',    '$'+fmt(cashData.ath));
  set('liqCashLpe',    '$'+fmt(cashData.lpe));
  set('cashTableTotal','$'+fmt(cashData.total));

  // Waterfall cards updated by fcCard() which runs after this
}
function renderStandby() {
  const standbyFunds = getStandbyFunds();
  const sbTotal = standbyFunds.reduce((a,d)=>a+d.val,0);
  const tbody = document.getElementById('standbyTbody');
  if (!tbody) return;
  tbody.innerHTML = buildStandbyRows(standbyFunds, sbTotal);
  const sbFootTotal = document.getElementById('sbFootTotal');
  const sbFootPct   = document.getElementById('sbFootPct');
  if (sbFootTotal) sbFootTotal.textContent = fmt(sbTotal);
  if (sbFootPct)   sbFootPct.textContent   = '100.0%';

  drawDonut('standbyPie',
    standbyFunds.map((d,i) => ({v:d.val, c:sbColors[i]})),
    {label: fmtK(sbTotal)});

  const legend = document.getElementById('standbyLegend');
  if (legend) legend.innerHTML = standbyFunds.map((d,i) =>
    `<div class="legend-item">
      <div class="legend-dot" style="background:${sbColors[i]}"></div>
      ${d.ent} – ${d.name}
      <span class="legend-pct">${(d.val/sbTotal*100).toFixed(1)}%</span>
    </div>`).join('');
}

// ─── ENTITY SUMMARY TABLE (new: Cash/FD · Short Term · Long Term · RE · AUM) ──
function renderEntitySummary(ent) {
  const cashMap = activeCashMap || {ALL:6020184, '5E':2825972, ATH:1511696, LPE:1682516, KIL:0};
  const totalAUM = activeTotalAUM || 56872987;

  // Per-entity rows: [label, badge, cash, shortT, longT, re]
  const entityRows = [
    {label:'5E Capital', badge:'5E',  color:C.navy,  cash:(activeCashMap||{})['5E']||2825972,
     shortT: investments.filter(d=>d.ent==='5E' &&d.group==='Short Term').reduce((a,d)=>a+d.nav,0),
     longT:  investments.filter(d=>d.ent==='5E' &&(d.group==='Long Term'||d.group==='Long Term - GGRP')).reduce((a,d)=>a+d.nav,0),
     re:     investments.filter(d=>d.ent==='5E' &&d.group==='Real Estate').reduce((a,d)=>a+d.nav,0)},
    {label:'Athena',     badge:'ATH', color:C.gold,  cash:(activeCashMap||{}).ATH||1511696,
     shortT: investments.filter(d=>d.ent==='ATH'&&d.group==='Short Term').reduce((a,d)=>a+d.nav,0),
     longT:  investments.filter(d=>d.ent==='ATH'&&(d.group==='Long Term'||d.group==='Long Term - GGRP')).reduce((a,d)=>a+d.nav,0),
     re:     investments.filter(d=>d.ent==='ATH'&&d.group==='Real Estate').reduce((a,d)=>a+d.nav,0)},
    {label:'LPE',        badge:'LPE', color:C.green, cash:(activeCashMap||{}).LPE||1682516,
     shortT: investments.filter(d=>d.ent==='LPE'&&d.group==='Short Term').reduce((a,d)=>a+d.nav,0),
     longT:  investments.filter(d=>d.ent==='LPE'&&(d.group==='Long Term'||d.group==='Long Term - GGRP')).reduce((a,d)=>a+d.nav,0),
     re:     investments.filter(d=>d.ent==='LPE'&&d.group==='Real Estate').reduce((a,d)=>a+d.nav,0)},
    {label:'KIL',        badge:'KIL', color:C.rust,  cash:0,
     shortT: investments.filter(d=>d.ent==='KIL'&&d.group==='Short Term').reduce((a,d)=>a+d.nav,0),
     longT:  investments.filter(d=>d.ent==='KIL'&&(d.group==='Long Term'||d.group==='Long Term - GGRP')).reduce((a,d)=>a+d.nav,0),
     re:     investments.filter(d=>d.ent==='KIL'&&d.group==='Real Estate').reduce((a,d)=>a+d.nav,0)},
  ];

  const visRows = ent === 'ALL' ? entityRows : entityRows.filter(r => r.badge === ent);
  const grandAUM = ent === 'ALL' ? totalAUM : (visRows[0] ? visRows[0].cash + visRows[0].shortT + visRows[0].longT + visRows[0].re : 0);

  const tbody = document.getElementById('entitySummaryBody');
  const tfoot = document.getElementById('entitySummaryFoot');
  if (!tbody) return;

  const fmtCell = v => v > 0 ? `$${Math.round(v).toLocaleString()}` : '<span style="color:var(--ink-muted)">—</span>';

  tbody.innerHTML = visRows.map(r => {
    const aum = r.cash + r.shortT + r.longT + r.re;
    const pct = grandAUM > 0 ? (aum / grandAUM * 100).toFixed(1) + '%' : '—';
    return `<tr data-ent="${r.badge}">
      <td><span class="badge-entity" style="background:${r.color}20;color:${r.color};border:1px solid ${r.color}40">${r.badge}</span></td>
      <td style="text-align:right">${fmtCell(r.cash)}</td>
      <td style="text-align:right">${fmtCell(r.shortT)}</td>
      <td style="text-align:right">${fmtCell(r.longT)}</td>
      <td style="text-align:right">${fmtCell(r.re)}</td>
      <td style="text-align:right;font-weight:500">$${Math.round(aum).toLocaleString()}</td>
      <td style="text-align:right;color:var(--ink-muted)">${pct}</td>
    </tr>`;
  }).join('');

  if (tfoot) {
    if (ent === 'ALL') {
      const totCash  = entityRows.reduce((a,r)=>a+r.cash,0);
      const totST    = entityRows.reduce((a,r)=>a+r.shortT,0);
      const totLT    = entityRows.reduce((a,r)=>a+r.longT,0);
      const totRE    = entityRows.reduce((a,r)=>a+r.re,0);
      const totAUM   = totCash + totST + totLT + totRE;
      tfoot.innerHTML = `<tr>
        <td>Total</td>
        <td style="text-align:right">$${Math.round(totCash).toLocaleString()}</td>
        <td style="text-align:right">$${Math.round(totST).toLocaleString()}</td>
        <td style="text-align:right">$${Math.round(totLT).toLocaleString()}</td>
        <td style="text-align:right">$${Math.round(totRE).toLocaleString()}</td>
        <td style="text-align:right;font-weight:500">$${Math.round(totAUM).toLocaleString()}</td>
        <td style="text-align:right">100%</td>
      </tr>`;
    } else {
      tfoot.innerHTML = '';
    }
  }
}

// ─── DUAL-RING CHART (outer = asset class, inner = horizon) ──────
function drawDualRing() {
  const total = investments.filter(d=>d.nav>0).reduce((a,d)=>a+d.nav,0);

  // Outer ring: asset class segments
  const outerDefs = [
    {label:'Public Market',   cls:['pub'],          color:C.blue},
    {label:'Private Market',  cls:['priv'],         color:C.gold},
    {label:'Alternatives',    cls:['alt'],           color:C.green},
    {label:'Direct Co-Inv.',  cls:['co'],            color:'#7a5c20'},
    {label:'Real Asset',      cls:['re'],            color:C.rust},
  ];
  const outerData = outerDefs.map(d => ({
    label: d.label, color: d.color,
    v: investments.filter(x=>d.cls.includes(x.cls)).reduce((a,x)=>a+x.nav,0)
  })).filter(d=>d.v>0);

  // Inner ring: investment horizon
  const innerDefs = [
    {label:'Short Term',  group:'Short Term',  color:'#4a7fbf'},
    {label:'Long Term',   group:'Long Term',   ggrp:'Long Term - GGRP', color:'#3a5a8c'},
    {label:'Real Estate', group:'Real Estate', color:C.rust},
  ];
  const innerData = innerDefs.map(d => ({
    label: d.label, color: d.color,
    v: investments.filter(x=>x.group===d.group||(d.ggrp&&x.group===d.ggrp)).reduce((a,x)=>a+x.nav,0)
  })).filter(d=>d.v>0);

  // Draw outer ring (thick)
  const outerCanvas = document.getElementById('assetPie');
  const innerCanvas = document.getElementById('horizonPie');
  if (!outerCanvas || !innerCanvas) return;

  const S = 260, cx = S/2, cy = S/2;
  outerCanvas.width = innerCanvas.width = S;
  outerCanvas.height = innerCanvas.height = S;

  function drawRing(canvas, data, r1, r2, gap=0.03) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,S,S);
    const tot = data.reduce((a,d)=>a+d.v,0);
    let angle = -Math.PI/2;
    data.forEach(d => {
      const sweep = (d.v/tot) * Math.PI*2 - gap;
      ctx.beginPath();
      ctx.moveTo(cx + r1*Math.cos(angle+gap/2), cy + r1*Math.sin(angle+gap/2));
      ctx.arc(cx, cy, r2, angle+gap/2, angle+sweep);
      ctx.arc(cx, cy, r1, angle+sweep, angle+gap/2, true);
      ctx.closePath();
      ctx.fillStyle = d.color;
      ctx.globalAlpha = 0.88;
      ctx.fill();
      ctx.globalAlpha = 1;
      angle += sweep + gap;
    });
  }

  drawRing(outerCanvas, outerData, 95, 128, 0.025); // outer ring
  drawRing(innerCanvas, innerData, 58, 90,  0.04);  // inner ring

  // Centre label
  const ctx = innerCanvas.getContext('2d');
  ctx.fillStyle = 'var(--ink)';
  ctx.font = "500 13px 'DM Mono', monospace";
  ctx.textAlign = 'center';
  ctx.fillText('$' + (total/1e6).toFixed(1) + 'M', cx, cy+2);
  ctx.font = "300 9px 'Jost', sans-serif";
  ctx.fillStyle = '#5a6278';
  ctx.fillText('Total NAV', cx, cy+16);

  // Legends
  const acLeg = document.getElementById('assetClassLegend');
  if (acLeg) acLeg.innerHTML = outerData.map(d =>
    `<div class="legend-item">
      <div class="legend-dot" style="background:${d.color}"></div>
      ${d.label}<span class="legend-pct">${(d.v/total*100).toFixed(1)}%</span>
    </div>`).join('');

  const hLeg = document.getElementById('horizonLegend');
  if (hLeg) hLeg.innerHTML = innerData.map(d =>
    `<div class="legend-item" style="flex-direction:row-reverse;justify-content:flex-start;gap:8px">
      <div class="legend-dot" style="background:${d.color};flex-shrink:0"></div>
      <span>${d.label}</span><span class="legend-pct">${(d.v/total*100).toFixed(1)}%</span>
    </div>`).join('');
}

// ─── DRAW CHARTS ─────────────────────────────────────────────────
window.addEventListener('load', () => {

  // Initialize all active* vars from the default period snapshot
  // before any render functions run — prevents values showing as undefined on first load
  setPeriod(activePeriod);

  renderEntitySummary('ALL');

  // Entity pie
  drawDonut('entityPie', [
    {v:22731421, c:C.navy},
    {v:8110716,  c:C.gold},
    {v:16917044, c:C.green},
    {v:3095297,  c:C.rust},
  ], {label:'$49.6M'});

  // Dual-ring: outer = asset class, inner = investment horizon
  drawDualRing();

  // Commitment pie
  drawDonut('commitPie', [
    {v:10115330, c:C.navy},
    {v:4368645,  c:C.gold},
    {v:9186402,  c:C.green},
  ]);

  // Asset class bar
  const pubNAV  = investments.filter(d=>d.cls==='pub').reduce((a,d)=>a+d.nav,0);
  const privNAV = investments.filter(d=>d.cls==='priv').reduce((a,d)=>a+d.nav,0);
  const altNAV  = investments.filter(d=>d.cls==='alt').reduce((a,d)=>a+d.nav,0);
  const reNAV   = investments.filter(d=>d.cls==='re').reduce((a,d)=>a+d.nav,0);
  const coNAV   = investments.filter(d=>d.cls==='co').reduce((a,d)=>a+d.nav,0);
  const acLabels = ['Public', 'Private', 'Alts', 'Direct', 'Real Asset'];
  const acPrin = [
    investments.filter(d=>d.cls==='pub').reduce((a,d)=>a+d.prin,0),
    investments.filter(d=>d.cls==='priv').reduce((a,d)=>a+d.prin,0),
    investments.filter(d=>d.cls==='alt').reduce((a,d)=>a+d.prin,0),
    investments.filter(d=>d.cls==='co').reduce((a,d)=>a+d.prin,0),
    investments.filter(d=>d.cls==='re').reduce((a,d)=>a+d.prin,0),
  ];
  const acNAV = [pubNAV, privNAV, altNAV, coNAV, reNAV];
  drawBars('assetBarChart', acLabels,
    [{data:acPrin, color:'rgba(42,74,127,0.4)'},
     {data:acNAV,  color:C.navy}]);

  // MOIC horizontal bars
  const moicLabels = investments.slice(0,12).map(d => d.name.split(' ')[0]);
  const moicVals   = investments.slice(0,12).map(d => d.prin>0?d.nav/d.prin:0);
  const moicCanvas = document.getElementById('moicChart');
  if (moicCanvas) {
    const ctx = moicCanvas.getContext('2d');
    const W = moicCanvas.offsetWidth||400, H = moicCanvas.height;
    moicCanvas.width = W;
    const barH = H / moicLabels.length * 0.6;
    const padL = 80, padR = 16, padT = 8;
    const maxM = Math.max(...moicVals) * 1.1;
    const gw = W - padL - padR;
    moicLabels.forEach((lbl, i) => {
      const y = padT + i*(H-padT)/moicLabels.length;
      const bw = (moicVals[i]/maxM)*gw;
      ctx.fillStyle = moicVals[i]>=1 ? C.navy : C.red;
      ctx.globalAlpha = 0.7;
      ctx.fillRect(padL, y+2, bw, barH);
      ctx.globalAlpha = 1;
      ctx.fillStyle = C.muted; ctx.font=`300 8px 'DM Mono',monospace`;
      ctx.textAlign='right'; ctx.textBaseline='middle';
      ctx.fillText(lbl, padL-4, y+2+barH/2);
      ctx.fillStyle=C.ink; ctx.textAlign='left';
      ctx.fillText(moicVals[i].toFixed(2)+'×', padL+bw+4, y+2+barH/2);
    });
    // 1x line
    const x1 = padL + (1/maxM)*gw;
    ctx.strokeStyle = C.gold; ctx.lineWidth = 1; ctx.setLineDash([3,3]);
    ctx.beginPath(); ctx.moveTo(x1, padT); ctx.lineTo(x1, H); ctx.stroke();
    ctx.setLineDash([]);
  }

  // Cash trend
  const cashMonths = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan'];
  const snap = periodSnapshots[activePeriod];
  const cashVals = (snap && snap.cashVals) || [126557,126557,3238552,3238552,4086017,3888071,3884653,3883022,3338239,3329930,3329634,3203477,2825972];
  drawLine('cashTrend', [{data:cashVals, color:C.teal||C.blue, fill:'rgba(26,122,140,0.06)'}], cashMonths);

  // KIL expense forecast table
  renderKILExpForecast();

  // Populate entity cards & tables
  renderPortfolioTable();
  renderCommitments();
  renderExpenses();
  renderKILGauges();
  updateKILSummaryKPI();
  renderLiquidityCash();
  renderStandby();

  if (activeFcCards) {
    if (activeFcCards.fc5e)  fcCard('fc5e',  activeFcCards.fc5e);
    if (activeFcCards.fcAth) fcCard('fcAth', activeFcCards.fcAth);
    if (activeFcCards.fcLpe) fcCard('fcLpe', activeFcCards.fcLpe);
  } else {
    fcCard('fc5e', [{label:'Cash/FD',sign:'+',val:2825972},{label:'Standby Funds',sign:'+',val:7252566},{label:'Unfunded Commitments',sign:'−',val:9703883},{label:'Expenses Forecast',sign:'−',val:158922},{label:'Free Cash',sign:'=',val:215733}]);
    fcCard('fcAth',[{label:'Cash/FD',sign:'+',val:1511696},{label:'Standby Funds',sign:'+',val:3455903},{label:'Unfunded (KT portion)',sign:'−',val:4225899},{label:'Expenses Forecast',sign:'−',val:12126},{label:'Settlement to 5E',sign:'−',val:500000},{label:'Free Cash',sign:'=',val:229574}]);
    fcCard('fcLpe',[{label:'Cash/FD',sign:'+',val:1682516},{label:'Standby Funds',sign:'+',val:15240217},{label:'Unfunded Commitments',sign:'−',val:10186402},{label:'Expenses Forecast',sign:'−',val:640724},{label:'Free Cash',sign:'=',val:6095608}]);
  }

  refreshLiquidity('ALL');

  // Run full refresh after a short delay to ensure DOM is fully settled
  setTimeout(() => { refreshAll(); }, 50);

});

// ─── ENTITY DATA ────────────────────────────────────────────────
const entityMeta = {
  ALL: {
    name: 'All Entities — Eagle I',
    kpis: [
      {l:'AUM',         v:'$56.9M', cls:''},
      {l:'NAV',         v:'$50,854,478', cls:''},
      {l:'Cash',        v:'$6,322,106',  cls:''},
      {l:'Principal',   v:'$43,838,084', cls:''},
      {l:'Unreal. G/L', v:'+$7,016,394', cls:'up'},
      {l:'Free Cash',   v:'$6,540,914',  cls:''},
    ]
  },
  '5E': {
    name: '5E Capital',
    kpis: [
      {l:'NAV',         v:'$22,731,421', cls:''},
      {l:'Cash',        v:'$3,238,552',  cls:''},
      {l:'Principal',   v:'$17,218,298', cls:''},
      {l:'Unreal. G/L', v:'+$6,002,566', cls:'up'},
      {l:'MOIC',        v:'1.29×',        cls:''},
      {l:'Free Cash',   v:'$215,733',    cls:''},
      {l:'Unfunded',    v:'$10,115,330', cls:'down'},
    ]
  },
  ATH: {
    name: 'Athena (ATH)',
    kpis: [
      {l:'NAV',         v:'$8,110,716',  cls:''},
      {l:'Cash',        v:'$1,495,451',  cls:''},
      {l:'Principal',   v:'$6,631,355',  cls:''},
      {l:'Unreal. G/L', v:'+$1,304,052', cls:'up'},
      {l:'MOIC',        v:'1.30×',        cls:''},
      {l:'Free Cash',   v:'$229,574',    cls:''},
      {l:'Unfunded',    v:'$4,368,645',  cls:'down'},
    ]
  },
  LPE: {
    name: 'LPE',
    kpis: [
      {l:'NAV',         v:'$16,917,044', cls:''},
      {l:'Cash',        v:'$1,588,103',  cls:''},
      {l:'Principal',   v:'$17,289,313', cls:''},
      {l:'Unreal. G/L', v:'-$357,569',   cls:'down'},
      {l:'MOIC',        v:'0.98×',        cls:'down'},
      {l:'Free Cash',   v:'$6,095,608',  cls:''},
      {l:'Unfunded',    v:'$10,186,402', cls:'down'},
    ]
  },
  KIL: {
    name: 'KIL Real Estate',
    kpis: [
      {l:'NAV / Book',  v:'$3,095,297',  cls:''},
      {l:'Budget',      v:'$5,165,652',  cls:''},
      {l:'Spent',       v:'$3,095,297',  cls:''},
      {l:'Remaining',   v:'$2,070,355',  cls:''},
      {l:'Utilisation', v:'59.9%',        cls:''},
    ]
  },
};


let activeEntity = 'ALL';

function setEntity(ent, btn) {
  activeEntity = ent;
  // update pills
  document.querySelectorAll('.entity-pill').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  // update banner
  const banner = document.getElementById('entityBanner');
  const meta = entityMeta[ent];
  if (ent === 'ALL') {
    banner.classList.remove('visible');
  } else {
    banner.classList.add('visible');
    document.getElementById('ebName').textContent = meta.name;
    document.getElementById('ebKpis').innerHTML = meta.kpis.map(k =>
      `<div class="eb-kpi">
        <div class="eb-lbl">${k.l}</div>
        <div class="eb-val ${k.cls}">${k.v}</div>
      </div>`
    ).join('');
  }
  // re-render all dynamic content
  refreshAll();
}

function getInv() {
  return activeEntity === 'ALL'
    ? investments
    : investments.filter(d => d.ent === activeEntity);
}

function refreshAll() {
  const inv = getInv();
  const ent = activeEntity;

  // ── Overview KPIs ──
  const tNav  = inv.reduce((a,d)=>a+d.nav,0);
  const tPrin = inv.reduce((a,d)=>a+d.prin,0);
  const tUnf  = inv.reduce((a,d)=>a+d.unf,0);

  const cashMap  = activeCashMap  || {ALL:6020184,  '5E':2825972, ATH:1511696, LPE:1682516, KIL:0};
  const fcMap    = activeFcMap    || {ALL:6540914,  '5E':215733,  ATH:229574,  LPE:6095608, KIL:0};
  const sbMap    = activeSbMap    || {ALL:25948686, '5E':7252566, ATH:3455903, LPE:15240217, KIL:0};
  const tCash    = cashMap[ent];
  const tFC      = fcMap[ent];
  const tSB      = sbMap[ent];
  const tAUM     = tCash + tNav;

  // Update Overview KPI boxes 1–4 (by direct element reference)
  const kpi0 = document.getElementById('kpiAUM');
  const kpi1 = document.getElementById('kpiNAV');
  const kpi2 = document.getElementById('kpiCash');
  const kpi3 = document.getElementById('kpiFC');
  if (kpi0) { kpi0.querySelector('.kpi-value').innerHTML = `<span class="currency">$</span>${fmtM(tAUM)}`; kpi0.querySelector('.kpi-sub').innerHTML = `Cash ${fmtM(tCash)} &nbsp;·&nbsp; Portfolio ${fmtM(tNav)}`; }
  if (kpi1) { kpi1.querySelector('.kpi-value').innerHTML = `<span class="currency">$</span>${fmtM(tNav)}`; const gl=tNav-tPrin; kpi1.querySelector('.kpi-sub').innerHTML = `<span class="${gl>=0?'up':'down'}">${gl>=0?'↑':'↓'} ${fmt(Math.abs(gl))}</span> unrealised gain vs principal`; }
  if (kpi2) { kpi2.querySelector('.kpi-value').innerHTML = `<span class="currency">$</span>${fmtM(tCash)}`; }
  if (kpi3) { kpi3.querySelector('.kpi-value').innerHTML = `<span class="currency">$</span>${fmtM(tFC)}`; }

  // Return tab table + Overview KPI boxes
  renderReturnTable(ent);

  // Entity summary table — re-render with new category columns
  renderEntitySummary(ent);

  // Portfolio table filter
  renderPortfolioTableFiltered(inv, tNav);

  // Update portfolio mini strip
  const miniVals = document.querySelectorAll('#section-portfolio .mini-stat-val');
  if (miniVals.length >= 4) {
    const gl2 = tNav - tPrin;
    miniVals[0].textContent = inv.length;
    miniVals[1].textContent = tPrin > 0 ? (tNav/tPrin).toFixed(2)+'×' : '—';
    miniVals[2].textContent = (gl2>=0?'+':'-') + '$' + (Math.abs(gl2)/1e6).toFixed(2) + 'M';
    miniVals[2].className = 'mini-stat-val ' + (gl2>=0?'up':'down');
    miniVals[3].textContent = fmt(tUnf);
  }

  // Portfolio footer
  const gl3 = tNav - tPrin;
  const portFootPrin = document.getElementById('portFootPrin');
  const portFootNav  = document.getElementById('portFootNav');
  const portFootGL   = document.getElementById('portFootGL');
  const portFootMoic = document.getElementById('portFootMoic');
  const portFootUnf  = document.getElementById('portFootUnf');
  if (portFootPrin) portFootPrin.textContent = fmt(tPrin);
  if (portFootNav)  portFootNav.textContent  = fmt(tNav);
  if (portFootGL)   { portFootGL.textContent = (gl3>=0?'+':'-')+'$'+Math.abs(Math.round(gl3)).toLocaleString(); portFootGL.className = gl3>=0?'up':'down'; }
  if (portFootMoic) portFootMoic.textContent = tPrin>0?(tNav/tPrin).toFixed(2)+'×':'—';
  if (portFootUnf)  { portFootUnf.textContent = tUnf>0?fmt(tUnf):'—'; portFootUnf.style.color = tUnf>0?C.red:C.muted; }

  // Commitments — filter gauges
  renderCommitmentsFiltered(ent);

  // Standby — filter table & pie
  renderStandbyFiltered(ent);

  // Due Amount Forecast
  renderDueAmountFiltered(ent);

  // ── LIQUIDITY TAB — full refresh ──────────────────────────────
  refreshLiquidity(ent);

  // For KIL: show/hide appropriate tabs
  const kilSection = document.getElementById('section-realestate');
  const kilNavBtn  = document.querySelector('.nav-btn[onclick*="realestate"]');
  if (ent === '5E' || ent === 'ATH' || ent === 'LPE') {
    if (kilSection && kilSection.classList.contains('active')) showSection('overview');
    if (kilNavBtn) kilNavBtn.style.opacity = '0.3';
  } else {
    if (kilNavBtn) kilNavBtn.style.opacity = '';
  }
  // For KIL: show/hide non-KIL tabs
  ['portfolio','liquidity','commitments'].forEach(tab => {
    const btn = document.querySelector(`.nav-btn[onclick*="${tab}"]`);
    if (!btn) return;
    if (ent === 'KIL') {
      btn.style.opacity = '0.3';
      if (document.getElementById('section-'+tab)?.classList.contains('active')) showSection('realestate');
    } else {
      btn.style.opacity = '';
    }
  });
  // Real Estate tab — always refresh KIL data on period change
  renderKILGauges();
  updateKILSummaryKPI();

  // ── Portfolio mini-stats + footer computed columns ─────────
  const _inv = getInv();
  const _tPrin = _inv.filter(d=>d.ent!=='KIL').reduce((a,d)=>a+d.prin,0);
  const _tNav  = _inv.filter(d=>d.ent!=='KIL').reduce((a,d)=>a+d.nav,0);
  const _tUnf  = _inv.filter(d=>d.ent!=='KIL').reduce((a,d)=>a+(d.unf||0),0);
  const _gl    = _tNav - _tPrin;
  const _tMoic = _tPrin > 0 ? _tNav/_tPrin : 0;
  const _count = _inv.filter(d=>d.ent!=='KIL').length;
  // Weighted avg yield, ann, irr, dpi
  const _tYld  = _inv.filter(d=>d.ent!=='KIL').reduce((a,d)=>a+d.nav*(d.yield||0),0) / (_tNav||1);
  const _tDpi  = _tPrin > 0 ? _inv.filter(d=>d.ent!=='KIL').reduce((a,d)=>a+(d.dist||0),0)/_tPrin : 0;

  // Mini-stats
  const _msGL  = document.getElementById('miniStatGL');
  const _msUnf = document.getElementById('miniStatUnf');
  const _msCnt = document.getElementById('miniStatCount');
  const _msMoic= document.getElementById('miniStatMoic');
  if (_msGL)   { _msGL.textContent   = (_gl>=0?'+':'')+fmtM(Math.abs(_gl)); _msGL.style.color=_gl>=0?'var(--green)':'var(--red)'; }
  if (_msUnf)  { _msUnf.textContent  = fmtM(_tUnf); }
  if (_msCnt)  { _msCnt.textContent  = _count; }
  if (_msMoic) { _msMoic.textContent = _tMoic.toFixed(2)+'×'; }

  // Portfolio footer computed columns
  const _pfYld  = document.getElementById('portFootYld');
  const _pfAnn  = document.getElementById('portFootAnn');
  const _pfIrr  = document.getElementById('portFootIrr');
  const _pfDpi  = document.getElementById('portFootDpi');
  if (_pfYld)  _pfYld.textContent  = (_tYld*100).toFixed(2)+'%';
  if (_pfAnn)  _pfAnn.textContent  = '—';
  if (_pfIrr)  _pfIrr.textContent  = '—';
  if (_pfDpi)  _pfDpi.textContent  = _tDpi.toFixed(2)+'×';

  // Render waterfall (overview tab)
  renderWaterfall();
}

function fmtM(n) {
  if (n >= 1e6)  return (n/1e6).toFixed(2) + 'M';
  if (n >= 1e3)  return (n/1e3).toFixed(1) + 'K';
  return Math.round(n).toLocaleString();
}

let activePortView = 'all';

function setPortView(view) {
  activePortView = view;
  const colors = {all: 'var(--ink)', short: C.blue, long: C.gold, ggrp: '#7a3a1a', estate: C.rust};
  const labels = {all: 'Investment Portfolio Detail', short: 'Short Term Investments',
                  long: 'Long Term Investments', ggrp: 'Long Term – GGRP (Gunung Raja)', estate: 'Real Estate'};
  const pills = {all:'portPillAll', short:'portPillShort', long:'portPillLong', ggrp:'portPillGgrp', estate:'portPillEstate'};

  // Reset all pills
  Object.values(pills).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.background = 'transparent';
    el.style.color = 'var(--ink-muted)';
    el.style.borderColor = 'var(--border)';
  });
  // Activate selected pill
  const active = document.getElementById(pills[view]);
  if (active) {
    active.style.background = colors[view];
    active.style.color = '#fff';
    active.style.borderColor = colors[view];
  }
  // Update title
  const title = document.getElementById('portCardTitle');
  if (title) title.textContent = labels[view];
  // Show/hide total footer row
  const footRow = document.getElementById('portFootRow');
  if (footRow) footRow.style.display = view === 'all' ? '' : 'none';
  // Re-render table
  refreshAll();
}

function renderPortfolioTableFiltered(inv, navBase) {
  const tbody = document.getElementById('portfolioTbody');
  if (!tbody) return;
  const groupMap = {all: null, short: 'Short Term', long: 'Long Term', ggrp: 'Long Term - GGRP', estate: 'Real Estate'};
  const filterGroup = groupMap[activePortView];
  const filtered = filterGroup ? inv.filter(d => d.group === filterGroup) : inv;
  const base = filterGroup ? filtered.reduce((a,d) => a+d.nav, 0) : navBase;
  tbody.innerHTML = buildGroupedRows(filtered, base);
}

function renderCommitmentsFiltered(ent) {
  const nameMap = {
    'MSA Venture III':'5E – MSA', 'NB Credit Opp. II':'5E – NB',
    'Lexington Cap. X':'5E – Lexington', 'Colbeck Strat. III':'5E – Colbeck',
    'PSG Equity VI':'5E – PSG', 'Bonaccord Cap. II':'ATH – Bonaccord',
    'CF PE Co-Inv. V':'ATH – CF COOP', 'Clearlake Cap. VIII':'LPE – Clearlake',
    'Galvanize Innov. I':'LPE – Galvanize', 'Thoma Bravo XVI-A':'LPE – Thoma Bravo',
    'CA Select Co-Inv. (LPE)':'LPE – Cambridge',
  };
  const entMap  = {
    'MSA Venture III':'5E','NB Credit Opp. II':'5E','Lexington Cap. X':'5E',
    'Colbeck Strat. III':'5E','PSG Equity VI':'5E','Bonaccord Cap. II':'ATH',
    'CF PE Co-Inv. V':'ATH','Clearlake Cap. VIII':'LPE','Galvanize Innov. I':'LPE',
    'Thoma Bravo XVI-A':'LPE','CA Select Co-Inv. (LPE)':'LPE',
  };
  const allCommit = getInv()
    .filter(d => nameMap[d.name])
    .map(d => ({ent:entMap[d.name], name:nameMap[d.name], comm:d.prin+(d.unf||0), inv:d.prin, unf:d.unf||0}));
  const data = ent === 'ALL' ? allCommit : allCommit.filter(d => d.ent === ent);
  const tComm = data.reduce((a,d)=>a+d.comm,0);
  const tInv  = data.reduce((a,d)=>a+d.inv,0);
  const tUnf  = data.reduce((a,d)=>a+d.unf,0);

  // Update KPI boxes in commitments tab
  const cKpis = document.querySelectorAll('#section-commitments .kpi-card');
  if (cKpis.length >= 4) {
    cKpis[0].querySelector('.kpi-value').innerHTML = `<span class="currency">$</span>${fmtM(tComm)}`
    cKpis[0].querySelector('.kpi-sub').textContent = `Across ${data.length} commitment${data.length!==1?'s':''}`;
    cKpis[1].querySelector('.kpi-value').innerHTML = `<span class="currency">$</span>${fmtM(tInv)}`;
    cKpis[1].querySelector('.kpi-sub').textContent = `${(tInv/tComm*100).toFixed(1)}% of total committed`;
    cKpis[2].querySelector('.kpi-value').innerHTML = `<span class="currency">$</span>${fmtM(tUnf)}`;
    cKpis[2].querySelector('.kpi-sub').textContent = `${(tUnf/tComm*100).toFixed(1)}% yet to be called`;
    // Cash & Standby — read from active period maps
    const cMap = activeCashMap || {ALL:6020184,'5E':2825972,ATH:1511696,LPE:1682516,KIL:0};
    const sMap = activeSbMap   || {ALL:25948686,'5E':7252566,ATH:3455903,LPE:15240217,KIL:0};
    const tC  = cMap[ent];
    const tSB = sMap[ent];
    const tCS = tC + tSB;
    const cov = tUnf > 0 ? (tCS / tUnf * 100).toFixed(1) : '—';
    const covOk = tUnf > 0 && tCS >= tUnf;
    cKpis[3].querySelector('.kpi-value').innerHTML = `<span class="currency">$</span>${fmtM(tCS)}`;
    cKpis[3].querySelector('.kpi-sub').innerHTML   =
      `Cash ${fmtM(tC)} &nbsp;·&nbsp; Standby ${fmtM(tSB)} &nbsp;·&nbsp; ` +
      `<span class="${covOk?'up':'down'}">${cov}% coverage vs unfunded ${covOk?'✓':'!'}</span>`;
  }

  document.getElementById('commitmentGauges').innerHTML = data.map(d => `
    <div class="commit-row">
      <div class="commit-name">${d.name}</div>
      <div class="commit-track">
        <div class="commit-fill" style="width:${(d.inv/d.comm*100).toFixed(1)}%"></div>
      </div>
      <div class="commit-vals">
        <span>${fmtK(d.inv)}</span> of ${fmtK(d.comm)} &nbsp;·&nbsp; <span style="color:var(--red)">
      </div>
    </div>`).join('');
}

function renderStandbyFiltered(ent) {
  const standbyFunds = getStandbyFunds();
  const filtered = ent === 'ALL' ? standbyFunds : standbyFunds.filter(d => d.ent === ent);
  const total    = filtered.reduce((a,d) => a+d.val, 0);

  const tbody = document.getElementById('standbyTbody');
  if (!tbody) return;
  tbody.innerHTML = buildStandbyRows(filtered, total);

  // Update footer grand total
  const sbFootTotal = document.getElementById('sbFootTotal');
  const sbFootPct   = document.getElementById('sbFootPct');
  if (sbFootTotal) sbFootTotal.textContent = fmt(total);
  if (sbFootPct)   sbFootPct.textContent   = '100.0%';

  // Redraw donut
  drawDonut('standbyPie', filtered.map((d,i)=>({v:d.val, c:sbColors[i]})), {label: fmtK(total)});

  const legend = document.getElementById('standbyLegend');
  if (legend) legend.innerHTML = filtered.map((d,i) =>
    `<div class="legend-item">
      <div class="legend-dot" style="background:${sbColors[i]}"></div>
      ${d.ent} – ${d.name}
      <span class="legend-pct">${(d.val/total*100).toFixed(1)}%</span>
    </div>`).join('');
}

// ── RETURN DATA ──────────────────────────────────────────────────────────────
// navDec = Dec 2025 NAV; navJan = Jan 2026 NAV (same as d.nav in investments)
// mtd = navJan - navDec; ytd = mtd (Jan is month 1 of 2026); at = navJan - prin
const returnData = [
  {name:'INVESCO Sr Loan (5EC)', vintage:2025,   ent:'5E',  group:'Short Term', strat:'Public – Fixed Inc.',   prin:2800000,   navDec:2938516, navJan:2924584, yld:0.0521, mthDiv:0,     cumDist:0, janRet:-10640},
  {name:'KKR Income Trust (5EC)', vintage:2025,  ent:'5E',  group:'Short Term', strat:'Private – Dir. Lend.',  prin:4100000,   navDec:4303921, navJan:4327982, yld:0.0648, mthDiv:0,     cumDist:0, janRet:36091},
  {name:'TIFF Diversifying (DSF)', vintage:2025, ent:'ATH', group:'Short Term', strat:'Alternatives – Hedge',  prin:2000000,   navDec:2112196, navJan:2112196, yld:0.0000, mthDiv:0,     cumDist:0, janRet:11505},
  {name:'QRT Torus (via TIFF)', vintage:2025,    ent:'ATH', group:'Short Term', strat:'Alternatives – Hedge',  prin:2000000,   navDec:2100876, navJan:2100876, yld:0.0000, mthDiv:0,     cumDist:0, janRet:2264},
  {name:'PIMCO GIS Income', vintage:2025,        ent:'LPE', group:'Short Term', strat:'Public – Fixed Inc.',   prin:2598436,   navDec:2606571, navJan:2621740, yld:0.0601, mthDiv:13134, cumDist:101052, ytdDiv:26268, janRet:13134},
  {name:'JPM Income Fund', vintage:2025,         ent:'LPE', group:'Short Term', strat:'Public – Fixed Inc.',   prin:2591966,   navDec:2565726, navJan:2565726, yld:0.0619, mthDiv:13225, cumDist:88618,  ytdDiv:26451, janRet:6612},
  {name:'M&G Float Rate HY', vintage:2025,       ent:'LPE', group:'Short Term', strat:'Public – Fixed Inc.',   prin:1291570,   navDec:1251728, navJan:1242370, yld:0.0663, mthDiv:6865,  cumDist:55876,  ytdDiv:14357, janRet:1226},
  {name:'Invesco Sr Loan (LPE)', vintage:2025,   ent:'LPE', group:'Short Term', strat:'Public – Fixed Inc.',   prin:1993742,   navDec:1932916, navJan:1911308, yld:0.0787, mthDiv:12527, cumDist:78465,  ytdDiv:24711, janRet:-7163},
  {name:'KKR Income Trust (LPE)', vintage:2025,  ent:'LPE', group:'Short Term', strat:'Private – Dir. Lend.',  prin:3000000,   navDec:2970021, navJan:2964100, yld:0.0959, mthDiv:23684, cumDist:94737,  ytdDiv:47369, janRet:24868},
  {name:'Blackstone BCRED-iCap', vintage:2025,   ent:'LPE', group:'Short Term', strat:'Private – Dir. Lend.',  prin:2000000,   navDec:1960771, navJan:1954642, yld:0.0839, mthDiv:13658, cumDist:56177,  ytdDiv:27318, janRet:7838},
  {name:'OTIC iCap', vintage:2025,               ent:'LPE', group:'Short Term', strat:'Private – Dir. Lend.',  prin:2000000,   navDec:1984127, navJan:1980331, yld:0.0741, mthDiv:12228, cumDist:49742,  ytdDiv:24413, janRet:12186},
  {name:'MSA Venture III', vintage:2021,         ent:'5E',  group:'Long Term',  strat:'Private – VC',          prin:899729,    navDec:912056,  navJan:912056,  yld:0.0000, mthDiv:0,     cumDist:0, janRet:4931},
  {name:'NB Credit Opp. II', vintage:2021,       ent:'5E',  group:'Long Term',  strat:'Private – Credit',      prin:630355,    navDec:967490,  navJan:931897,  yld:0.0000, mthDiv:0,     cumDist:0, janRet:0},
  {name:'Lexington Cap. X', vintage:2022,        ent:'5E',  group:'Long Term',  strat:'Private – Secondary',   prin:2494493,   navDec:3506069, navJan:3463666, yld:0.0000, mthDiv:0,     cumDist:0, janRet:-42133},
  {name:'Colbeck Strat. III', vintage:2023,      ent:'5E',  group:'Long Term',  strat:'Private – Credit',      prin:2111288,   navDec:1761261, navJan:2250704, yld:0.0000, mthDiv:0,     cumDist:116155, janRet:0},
  {name:'PSG Equity VI', vintage:2024,           ent:'5E',  group:'Long Term',  strat:'Private – Buyout',      prin:1160252,   navDec:1067315, navJan:1067315, yld:0.0000, mthDiv:0,     cumDist:0, janRet:0},
  {name:'Gunung Raja (GGRP)', vintage:2023,      ent:'5E',  group:'Long Term - GGRP',  strat:'Public – Equity',       prin:2645862,   navDec:6454426, navJan:6853217, yld:0.0000, mthDiv:0,     cumDist:0, janRet:95964},
  {name:'BlueMark (ATH)', vintage:2023,          ent:'ATH', group:'Long Term',  strat:'Direct Co-Investment',  prin:500000,    navDec:500000,  navJan:500000,  yld:0.0000, mthDiv:0,     cumDist:0, janRet:0},
  {name:'Thrive (ATH)', vintage:2024,            ent:'ATH', group:'Long Term',  strat:'Direct Co-Investment',  prin:250000,    navDec:250000,  navJan:250000,  yld:0.0000, mthDiv:0,     cumDist:0, janRet:0},
  {name:'Asia Heritage (ATH)', vintage:2024,     ent:'ATH', group:'Long Term',  strat:'Direct Co-Investment',  prin:250000,    navDec:250000,  navJan:250000,  yld:0.0000, mthDiv:0,     cumDist:0, janRet:0},
  {name:'Bonaccord Cap. II', vintage:2024,       ent:'ATH', group:'Long Term',  strat:'Private – GP Stakes',   prin:1411495,   navDec:2717504, navJan:2697644, yld:0.0000, mthDiv:0,     cumDist:34720, janRet:0},
  {name:'CF PE Co-Inv. V', vintage:2025,         ent:'ATH', group:'Long Term',  strat:'Private – Buyout',      prin:200000,    navDec:200000,  navJan:200000,  yld:0.0000, mthDiv:0,     cumDist:0,     ytdDiv:0, janRet:200000},
  {name:'Clearlake Cap. VIII', vintage:2024,     ent:'LPE', group:'Long Term',  strat:'Private – Buyout',      prin:849744,    navDec:751565,  navJan:751565,  yld:0.0000, mthDiv:0,     cumDist:0, janRet:499787},
  {name:'Galvanize Innov. I', vintage:2022,      ent:'LPE', group:'Long Term',  strat:'Private – Climate VC',  prin:492413,    navDec:465412,  navJan:465412,  yld:0.0000, mthDiv:0,     cumDist:0, janRet:0},
  {name:'Thoma Bravo XVI-A', vintage:2025,       ent:'LPE', group:'Long Term',  strat:'Private – Buyout',      prin:471442,    navDec:459850,  navJan:459850,  yld:0.0000, mthDiv:0,     cumDist:0,     ytdDiv:0, janRet:0},
  {name:'CA Select Co-Inv. (LPE)', vintage:2024, ent:'LPE', group:'Long Term',  strat:'Private – Buyout',      prin:0,         navDec:0,       navJan:0,       yld:0.0000, mthDiv:0,     cumDist:0, janRet:0},
  /* ── KIL MAINTENANCE RULE ──────────────────────────────────────────────
     KIL (Odin Hills J8) is real estate held at cost.
     On every monthly update:
       • navJan  = Feb cumulative spend  (from 01. Remaining Budget sheet)
       • navDec  = Jan cumulative spend  (previous month)
       • prin    = navJan  (ALWAYS equal — cumulative spend IS the principal)
       • janRet  = 0       (no investment return, only spend tracking)
       • mthDiv  = 0       (no income distribution)
       • cumDist = 0       (no distributions)
     All Time Return will always be 0. MTD = spend increase in the month.
  ─────────────────────────────────────────────────────────────────────── */
  {name:'Odin Hills J8', vintage:2025,           ent:'KIL', group:'Real Estate',strat:'Real Asset – Property', prin:3095297,   navDec:3093622, navJan:3095297, yld:0.0000, mthDiv:0,     cumDist:0, janRet:0}  /* KIL: prin always = navJan (cumulative spend = NAV at cost) */,
];

function fmtRet(val) {
  if (val === 0) return '<span style="color:var(--ink-muted)">—</span>';
  const cls = val > 0 ? 'up' : 'down';
  const sign = val > 0 ? '+' : '';
  return `<span class="${cls}">${sign}${fmt(Math.abs(val))}</span>`;
}
function fmtPctRet(val) {
  if (val === 0) return '<span style="color:var(--ink-muted)">—</span>';
  const cls = val > 0 ? 'up' : 'down';
  const sign = val > 0 ? '+' : '';
  return `<span class="${cls}">${sign}${(val*100).toFixed(2)}%</span>`;
}

let activeReturnView = 'yield';

function toggleReturnBreakdown() {
  const card = document.getElementById('retBreakdownCard');
  const btn  = document.getElementById('retPillBreakdown');
  if (!card || !btn) return;
  const isVisible = card.style.display !== 'none';
  card.style.display = isVisible ? 'none' : '';
  if (isVisible) {
    btn.style.background   = 'transparent';
    btn.style.color        = 'var(--ink-muted)';
    btn.style.borderColor  = 'var(--border)';
  } else {
    btn.style.background   = 'var(--gold)';
    btn.style.color        = '#fff';
    btn.style.borderColor  = 'var(--gold)';
  }
}

function setReturnView(view) {
  const yieldDiv  = document.getElementById('retViewYield');
  const returnDiv = document.getElementById('retViewReturn');
  const pillY     = document.getElementById('retPillYield');
  const pillR     = document.getElementById('retPillReturn');
  const title     = document.getElementById('retCardTitle');
  const blue      = '#2a4a7f';

  if (view === 'yield') {
    if (yieldDiv)  yieldDiv.style.display  = '';
    if (returnDiv) returnDiv.style.display = 'none';
    if (pillY) { pillY.style.background = blue;         pillY.style.color = '#fff';             pillY.style.borderColor = blue; }
    if (pillR) { pillR.style.background = 'transparent'; pillR.style.color = 'var(--ink-muted)'; pillR.style.borderColor = 'var(--border)'; }
    if (title) title.textContent = 'Yield by Portfolio';
  } else {
    if (yieldDiv)  yieldDiv.style.display  = 'none';
    if (returnDiv) returnDiv.style.display = '';
    if (pillR) { pillR.style.background = blue;         pillR.style.color = '#fff';             pillR.style.borderColor = blue; }
    if (pillY) { pillY.style.background = 'transparent'; pillY.style.color = 'var(--ink-muted)'; pillY.style.borderColor = 'var(--border)'; }
    if (title) title.textContent = 'Return by Portfolio';
  }
}

function renderReturnBreakdown(ent) {
  const data = ent === 'ALL' ? returnData : returnData.filter(d => d.ent === ent);
  const GGRP = 'Long Term - GGRP';
  const fmt2 = v => v.toLocaleString('en-US',{minimumFractionDigits:0,maximumFractionDigits:0});
  const gl = v => {
    if (v === 0) return '<span style="color:var(--ink-muted)">—</span>';
    const s = v > 0 ? '+' : '-';
    const c = v > 0 ? '#2a7a5a' : '#a03030';
    return '<span style="color:'+c+'">'+s+'$'+fmt2(Math.abs(v))+'</span>';
  };
  const pos = v => v > 0 ? '<span style="color:#2a4a7f">+$'+fmt2(v)+'</span>' : '—';

  // Build group subtotals — include at = (navJan - prin) + cumDist
  const grpOrder = ['Short Term','Long Term','Long Term - GGRP','Real Estate'];
  const grpColor = {'Short Term':'#2a4a7f','Long Term':'#b08020','Long Term - GGRP':'#7a3a1a','Real Estate':'#8c3a2a'};
  const grps = {};
  data.forEach(function(d) {
    if (!grps[d.group]) grps[d.group] = {navDec:0,navJan:0,mthDiv:0,janRet:0,mtd:0,ytd:0,at:0};
    const g = grps[d.group];
     if (d.group === 'Real Estate') { g.isWIP = true; g.navDec += d.navDec; g.navJan += d.navJan; return; }
    const mtd = (d.navJan - d.navDec) + d.mthDiv;
    const ytd = d.janRet + mtd;
    const at  = (d.navJan - d.prin) + (d.cumDist||0);
    g.navDec += d.navDec; g.navJan += d.navJan; g.mthDiv += d.mthDiv;
    g.janRet += d.janRet; g.mtd += mtd; g.ytd += ytd; g.at += at;
  });

  // Populate group breakdown table — GGRP excluded
  const tbody = document.getElementById('retBreakdownBody');
  const tfoot = document.getElementById('retBreakdownFoot');
  if (tbody) {
    var rows = '';
    grpOrder.forEach(function(g) {
      if (!grps[g] || g === GGRP || g === 'Real Estate') return;
      const s = grps[g];
      const gc = grpColor[g] || '#2a4a7f';
      rows += '<tr style="background:'+gc+'0d;border-left:3px solid '+gc+'">'
        + '<td style="padding:8px 12px;font-family:Jost,sans-serif;font-size:10px;font-weight:600;color:'+gc+'">'+g+'</td>'
        + '<td style="text-align:right;padding:8px 12px;font-family:DM Mono,monospace;font-size:11px">'+fmt2(s.navDec)+'</td>'
        + '<td style="text-align:right;padding:8px 12px;font-family:DM Mono,monospace;font-size:11px">'+fmt2(s.navJan)+'</td>'
        + (s.isWIP
          ? '<td colspan="5" style="text-align:center;padding:8px 12px;color:var(--ink-muted);font-style:italic;font-size:10px">Work In Progress — held at cost, return not applicable</td>'
          : '<td style="text-align:right;padding:8px 12px;font-family:DM Mono,monospace;font-size:11px">'+pos(s.mthDiv)+'</td>'
          + '<td style="text-align:right;padding:8px 12px;font-family:DM Mono,monospace;font-size:11px">'+gl(s.janRet)+'</td>'
          + '<td style="text-align:right;padding:8px 12px;font-family:DM Mono,monospace;font-size:11px">'+gl(s.mtd)+'</td>'
          + '<td style="text-align:right;padding:8px 12px;font-family:DM Mono,monospace;font-size:11px;font-weight:600">'+gl(s.ytd)+'</td>'
          + '<td style="text-align:right;padding:8px 12px;font-family:DM Mono,monospace;font-size:11px;font-weight:600">'+gl(s.at)+'</td>')
        + '</tr>';
    });
    tbody.innerHTML = rows;
  }

  // Group totals footer — GGRP excluded from ALL columns (consistent with displayed rows)
  var tNavDec=0,tNavJan=0,tMthDiv=0,tJanRet=0,tMtd=0,tYtd=0,tAt=0;
  grpOrder.forEach(function(g) {
    if (!grps[g] || g === GGRP || g === 'Real Estate') return;
    tNavDec += grps[g].navDec; tNavJan += grps[g].navJan;
    tMthDiv += grps[g].mthDiv; tJanRet += grps[g].janRet;
    tMtd    += grps[g].mtd;    tYtd    += grps[g].ytd; tAt += grps[g].at;
  });
  if (tfoot) {
    tfoot.innerHTML = '<tr style="border-top:2px solid var(--border);font-weight:700;background:var(--cream)">'
      + '<td style="padding:9px 12px;font-family:Jost,sans-serif;font-size:10px">Total Group</td>'
      + '<td style="text-align:right;padding:9px 12px;font-family:DM Mono,monospace;font-size:11px">'+fmt2(tNavDec)+'</td>'
      + '<td style="text-align:right;padding:9px 12px;font-family:DM Mono,monospace;font-size:11px">'+fmt2(tNavJan)+'</td>'
      + '<td style="text-align:right;padding:9px 12px;font-family:DM Mono,monospace;font-size:11px">'+pos(tMthDiv)+'</td>'
      + '<td style="text-align:right;padding:9px 12px;font-family:DM Mono,monospace;font-size:11px">'+gl(tJanRet)+'</td>'
      + '<td style="text-align:right;padding:9px 12px;font-family:DM Mono,monospace;font-size:11px;font-weight:700">'+gl(tMtd)+'</td>'
      + '<td style="text-align:right;padding:9px 12px;font-family:DM Mono,monospace;font-size:11px;font-weight:700">'+gl(tYtd)+'</td>'
      + '<td style="text-align:right;padding:9px 12px;font-family:DM Mono,monospace;font-size:11px;font-weight:700">'+gl(tAt)+'</td>'
      + '</tr>';
  }

  // Update formula KPI boxes
  const signFmt = function(v) { return (v>=0?'+':'-')+'$'+fmt2(Math.abs(v)); };
  const bdgMtd = document.getElementById('bdgMtd');
  const bdgYtd = document.getElementById('bdgYtd');
  const bdgAt  = document.getElementById('bdgAt');
  if (bdgMtd) bdgMtd.textContent = signFmt(tMtd);
  if (bdgYtd) bdgYtd.textContent = signFmt(tYtd);
  if (bdgAt)  bdgAt.textContent  = signFmt(tAt);

  // Fund-level detail table — with row numbers and sum total
  const fundbody = document.getElementById('retBreakdownFundBody');
  const fundfoot = document.getElementById('retBreakdownFundFoot');
  if (fundbody) {
    const entColor = {'5E':'#2a4a7f','ATH':'#b08020','LPE':'#2a7a5a','KIL':'#8c3a2a'};
    var frows = '';
    var fNavDec=0, fNavJan=0, fMthDiv=0, fMtd=0, fJanRet=0, fYtd=0;
    var rowNum = 0;
    data.forEach(function(d, i) {
      if (d.group === GGRP || d.group === 'Real Estate') return;
       const isWIP = (d.group === 'Real Estate');
      const mtd = isWIP ? 0 : (d.navJan - d.navDec) + d.mthDiv;
      const ytd = isWIP ? 0 : d.janRet + mtd;
      const ec  = entColor[d.ent] || '#2a4a7f';
      const bg  = i%2===0 ? 'var(--surface2)' : 'var(--surface)';
      rowNum++;
      // Accumulate totals excluding GGRP (consistent with main table KPIs)
      if (!isWIP) {
        fNavDec += d.navDec; fNavJan += d.navJan; fMthDiv += d.mthDiv;
        fMtd    += mtd;      fJanRet += d.janRet; fYtd    += ytd;
      }
      frows += '<tr style="background:'+bg+'">'
        + '<td style="text-align:center;padding:5px 10px;color:var(--ink-muted);font-size:9px">'+rowNum+'</td>'
        + '<td style="padding:5px 10px"><span style="font-size:8px;padding:1px 6px;border-radius:2px;background:'+ec+'20;color:'+ec+'">'+d.ent+'</span></td>'
         + '<td style="padding:5px 10px;font-size:10px">'+d.name+(isWIP?' <span style="font-family:DM Mono;font-size:8px;padding:1px 5px;border-radius:2px;background:#8c3a2a20;color:#8c3a2a;font-weight:600">WIP</span>':'')+'</td>'
        + '<td style="text-align:right;padding:5px 10px;color:var(--ink-muted);font-family:DM Mono,monospace;font-size:10px">'+fmt2(d.navDec)+'</td>'
        + '<td style="text-align:right;padding:5px 10px;color:var(--ink-muted);font-family:DM Mono,monospace;font-size:10px">'+fmt2(d.navJan)+'</td>'
        + (isWIP
           ? '<td colspan="4" style="text-align:center;padding:5px 10px;color:var(--ink-muted);font-style:italic;font-size:9px">WIP — return not applicable</td>'
           : '<td style="text-align:right;padding:5px 10px;font-family:DM Mono,monospace;font-size:10px">'+pos(d.mthDiv)+'</td>'
           + '<td style="text-align:right;padding:5px 10px;font-family:DM Mono,monospace;font-size:10px">'+gl(d.janRet)+'</td>'
           + '<td style="text-align:right;padding:5px 10px;font-family:DM Mono,monospace;font-size:10px">'+gl(mtd)+'</td>'
           + '<td style="text-align:right;padding:5px 10px;font-family:DM Mono,monospace;font-size:10px;font-weight:600">'+gl(ytd)+'</td>')
        + '</tr>';
    });
    fundbody.innerHTML = frows;
    if (fundfoot) {
      fundfoot.innerHTML = '<tr style="border-top:2px solid var(--border);background:var(--cream);font-weight:700">'
        + '<td></td>'
        + '<td></td>'
        + '<td style="padding:7px 10px;font-family:Jost,sans-serif;font-size:10px">Total</td>'
        + '<td style="text-align:right;padding:7px 10px;font-family:DM Mono,monospace;font-size:10px">'+fmt2(fNavDec)+'</td>'
        + '<td style="text-align:right;padding:7px 10px;font-family:DM Mono,monospace;font-size:10px">'+fmt2(fNavJan)+'</td>'
        + '<td style="text-align:right;padding:7px 10px;font-family:DM Mono,monospace;font-size:10px">'+pos(fMthDiv)+'</td>'
        + '<td style="text-align:right;padding:7px 10px;font-family:DM Mono,monospace;font-size:10px">'+gl(fJanRet)+'</td>'
        + '<td style="text-align:right;padding:7px 10px;font-family:DM Mono,monospace;font-size:10px;font-weight:700">'+gl(fMtd)+'</td>'
        + '<td style="text-align:right;padding:7px 10px;font-family:DM Mono,monospace;font-size:10px;font-weight:700">'+gl(fYtd)+'</td>'
        + '</tr>';
    }
  }
}


function renderReturnTable(ent) {
  const data = ent === 'ALL' ? returnData : returnData.filter(d => d.ent === ent);
  const groups = ['Short Term', 'Long Term', 'Real Estate'];
  const grpColors = {'Short Term': C.blue, 'Long Term': C.gold, 'Real Estate': C.rust};
  const blue = '#2a4a7f';

  let htmlY = '', htmlR = '';
  let tPrin=0, tNavJan=0, tMtd=0, tAt=0, tNavDec=0, tMthDiv=0, tCumDist=0, tYtdDiv=0, tYtdRet=0;

  const glv = (v) => v===0 ? '<span style="color:var(--ink-muted)">&#8212;</span>'
    : `<span class="${v>0?'up':'down'}">${v>0?'+':'-'}${fmt(Math.abs(v))}</span>`;
  const glp = (v,z) => z===0 ? '<span style="color:var(--ink-muted)">&#8212;</span>'
    : `<span class="${v>0?'up':'down'}">${v>0?'+':'-'}${(Math.abs(v)*100).toFixed(2)}%</span>`;
  const bv  = (v) => v===0 ? '<span style="color:var(--ink-muted)">&#8212;</span>'
    : `<span style="color:${blue}">+${fmt(v)}</span>`;
  const bp  = (v,z) => z===0 ? '<span style="color:var(--ink-muted)">&#8212;</span>'
    : `<span style="color:${blue}">${(v*100).toFixed(2)}%</span>`;

  const ecBadge = (ent, ec) =>
    `<span style="font-family:'DM Mono';font-size:9px;padding:2px 7px;border-radius:2px;background:${ec}20;color:${ec};font-weight:500;letter-spacing:0.1em">${ent}</span>`;

  groups.forEach(grp => {
    const rows = data.filter(d => d.group === grp);
    if (!rows.length) return;
    if (grp === 'Real Estate') return;  // Odin Hills shown in footer instead
    const gPrin   = rows.reduce((a,d)=>a+d.prin,0);
    const gNavJan = rows.reduce((a,d)=>a+d.navJan,0);
    const gNavDec = rows.reduce((a,d)=>a+d.navDec,0);
    const gMthDiv   = rows.reduce((a,d)=>a+d.mthDiv,0);
    const gCumDist  = rows.reduce((a,d)=>a+(d.cumDist||0),0);
    const gYtdDiv   = rows.reduce((a,d)=>a+(d.ytdDiv||0),0);
    const gJanRet   = rows.reduce((a,d)=>a+(d.janRet||0),0);
    const gMtd    = (gNavJan - gNavDec) + gMthDiv;
    const gAt     = (gNavJan - gPrin) + gCumDist;
    const gYtdRet = gJanRet + gMtd;
    const gMtdPct = gNavDec > 0 ? gMtd/gNavDec : 0;
    const gAtPct  = gPrin   > 0 ? gAt/gPrin    : 0;
    const gYtdRetPct = gNavDec > 0 ? gYtdRet/gNavDec : 0;
    const gYldPct    = gNavJan > 0 ? gMthDiv/gNavJan : 0;
    const gYtdYldPct = gNavJan > 0 ? gYtdDiv/gNavJan : 0;
    // All groups accumulate into totals — Total Portfolio footer matches Portfolio tab
    // Exclude Real Estate (WIP at cost) from return totals
    if (grp !== 'Real Estate') {
      tPrin+=gPrin; tNavJan+=gNavJan; tNavDec+=gNavDec;
      tMtd+=gMtd; tAt+=gAt; tMthDiv+=gMthDiv; tCumDist+=gCumDist; tYtdDiv+=gYtdDiv; tYtdRet+=gYtdRet;
    }
    const gc = grpColors[grp];

    const grpBase = `<tr style="background:var(--cream)">
      <td colspan="4" style="font-family:'Jost',sans-serif;font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:${gc};padding:10px 16px 6px">${grp}</td>
      <td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px;font-weight:600;color:${gc};padding:10px 16px 6px">${fmt(gPrin)}</td>
      <td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px;font-weight:600;color:${gc};padding:10px 16px 6px">${fmt(gNavJan)}</td>`;

    htmlY += grpBase + (grp === 'Real Estate'
      ? `<td colspan="5" style="text-align:center;color:var(--ink-muted);font-style:italic;font-size:10px;padding:10px 16px 6px">Work In Progress &mdash; held at cost, return not applicable</td>`
      : `<td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px;font-weight:600;padding:10px 16px 6px">${bv(gMthDiv)}</td>
      <td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px;font-weight:600;padding:10px 16px 6px">${bp(gYldPct,gNavJan)}</td>
      <td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px;font-weight:600;padding:10px 16px 6px">${bv(gYtdDiv)}</td>
      <td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px;font-weight:600;padding:10px 16px 6px">${bp(gYtdYldPct,gNavJan)}</td>
      <td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px;font-weight:600;padding:10px 16px 6px">${bv(gCumDist)}</td>`) +
    `</tr>`;

    htmlR += grpBase + (grp === 'Real Estate'
      ? `<td colspan="6" style="text-align:center;color:var(--ink-muted);font-style:italic;font-size:10px;padding:10px 16px 6px">Work In Progress &mdash; held at cost, return not applicable</td>`
      : `<td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px;font-weight:600;padding:10px 16px 6px">${glv(gMtd)}</td>
      <td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px;font-weight:600;padding:10px 16px 6px">${glp(gMtdPct,gNavDec)}</td>
      <td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px;font-weight:600;padding:10px 16px 6px">${glv(gYtdRet)}</td>
      <td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px;font-weight:600;padding:10px 16px 6px">${glp(gYtdRetPct,gNavDec)}</td>
      <td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px;font-weight:600;padding:10px 16px 6px">${glv(gAt)}</td>
      <td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px;font-weight:600;padding:10px 16px 6px">${glp(gAtPct,gPrin)}</td>`) +
    `</tr>`;

    const isWIP = (grp === 'Real Estate');
    rows.forEach(d => {
      const mtd       = (d.navJan - d.navDec) + (d.mthDiv||0);
      const at        = (d.navJan - d.prin) + (d.cumDist||0);
      const ytdRet    = (d.janRet||0) + mtd;
      const mtdPct    = d.navDec > 0 ? mtd/d.navDec : 0;
      const atPct     = d.prin   > 0 ? at/d.prin    : 0;
      const ytdRetPct = d.navDec > 0 ? ytdRet/d.navDec : 0;
      const yldPct    = d.navJan > 0 ? d.mthDiv/d.navJan       : 0;
      const ytdYldPct = d.navJan > 0 ? (d.ytdDiv||0)/d.navJan  : 0;
      const ec = {'5E':C.navy,'ATH':C.gold,'LPE':C.green,'KIL':C.rust}[d.ent];
      const rowBase = `<tr data-ent="${d.ent}">
        <td>${ecBadge(d.ent,ec)}</td>
        <td style="padding-left:12px">${d.name}</td>
        <td style="text-align:center;font-family:'DM Mono',monospace;font-size:11px;color:var(--ink-muted)">${d.vintage||'&#8212;'}</td>
        <td style="color:var(--ink-muted);font-size:11px">${d.strat}</td>
        <td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px">${fmt(d.prin)}</td>
        <td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px">${fmt(d.navJan)}</td>`;

      htmlY += rowBase + (isWIP
        ? `<td colspan="5" style="text-align:center;color:var(--ink-muted);font-style:italic;font-size:10px;letter-spacing:0.05em">Work In Progress &mdash; held at cost, return not applicable</td>`
        : `<td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px">${bv(d.mthDiv)}</td>
        <td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px">${bp(yldPct,d.navJan)}</td>
        <td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px">${bv(d.ytdDiv||0)}</td>
        <td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px">${bp(ytdYldPct,d.navJan)}</td>
        <td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px">${bv(d.cumDist||0)}</td>`) +
      `</tr>`;

      htmlR += rowBase + (isWIP
        ? `<td colspan="6" style="text-align:center;color:var(--ink-muted);font-style:italic;font-size:10px;letter-spacing:0.05em">Work In Progress &mdash; held at cost, return not applicable</td>`
        : `<td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px">${glv(mtd)}</td>
        <td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px">${glp(mtdPct,d.navDec)}</td>
        <td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px">${glv(ytdRet)}</td>
        <td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px">${glp(ytdRetPct,d.navDec)}</td>
        <td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px">${glv(at)}</td>
        <td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px">${glp(atPct,d.prin)}</td>
`) +
      `</tr>`;
    });
  });

  const tyY = document.getElementById('returnTbodyYield');
  const tyR = document.getElementById('returnTbodyReturn');
  if (tyY) tyY.innerHTML = htmlY;
  if (tyR) tyR.innerHTML = htmlR;

  // All Time = sum of fund-level (navJan - prin) + cumDist, excl GGRP (consistent with table)
  const tAtFinal = tAt;
  const footMtdPct    = tNavDec > 0 ? tMtd/tNavDec      : 0;
  const footYtdRetPct = tNavDec > 0 ? tYtdRet/tNavDec   : 0;
  const footAtPct     = tNavJan > 0 ? tAtFinal/tNavJan   : 0;
  const footYldPct    = tNavJan > 0 ? tMthDiv/tNavJan    : 0;
  const footYtdYldPct = tNavJan > 0 ? tYtdDiv/tNavJan    : 0;
  const gl2  = v => v>=0 ? `<span class="up">+${fmt(v)}</span>` : `<span class="down">-${fmt(Math.abs(v))}</span>`;
  const glp2 = (v,z) => z>0 ? (v>=0?`<span class="up">+${(v*100).toFixed(2)}%</span>`:`<span class="down">${(v*100).toFixed(2)}%</span>`) : '&#8212;';
  const bv2  = v => v>0 ? `<span style="color:${blue}">+${fmt(v)}</span>` : '&#8212;';
  const bp2  = (v,z) => z>0 ? `<span style="color:${blue}">${(v*100).toFixed(2)}%</span>` : '&#8212;';
  const set  = (id,val) => { const el=document.getElementById(id); if(el) el.innerHTML=val; };

  // ── GGRP data ──────────────────────────────────────────────────────
  const ggrpData  = data.filter(d => d.group === 'Long Term - GGRP');
  // ── Odin Hills (KIL/WIP) data — shown in footer, excluded from return calcs ──
  const odinData  = data.filter(d => d.group === 'Real Estate');
  const odinPrin  = odinData.reduce((a,d)=>a+d.prin,0);
  const odinNav   = odinData.reduce((a,d)=>a+d.navJan,0);
  const grpGPrin  = ggrpData.reduce((a,d)=>a+d.prin,0);
  const grpGNav   = ggrpData.reduce((a,d)=>a+d.navJan,0);
  const grpGNavD  = ggrpData.reduce((a,d)=>a+d.navDec,0);
  const grpGMthD  = ggrpData.reduce((a,d)=>a+d.mthDiv,0);
  const grpGCumD  = ggrpData.reduce((a,d)=>a+(d.cumDist||0),0);
  const grpGYtdD  = ggrpData.reduce((a,d)=>a+(d.ytdDiv||0),0);
  const grpGMtd   = (grpGNav - grpGNavD) + grpGMthD;
  const grpGAt    = (grpGNav - grpGPrin) + grpGCumD;
  const grpGJanR  = ggrpData.reduce((a,d)=>a+(d.janRet||0),0);
  const grpGYtdR  = grpGJanR + grpGMtd;
  const grpGMtdPct= grpGNavD > 0 ? grpGMtd/grpGNavD   : 0;
  const grpGYtdPct= grpGNavD > 0 ? grpGYtdR/grpGNavD  : 0;
  const grpGAtPct = grpGPrin > 0 ? grpGAt/grpGPrin    : 0;
  const grpGYldPct= grpGNav  > 0 ? grpGMthD/grpGNav   : 0;
  const grpGYtdYP = grpGNav  > 0 ? grpGYtdD/grpGNav   : 0;

  // ── Row 1: TOTAL PORTFOLIO (KPI) — t* already excludes GGRP (not in groups[]) ─
  const kpiPrin   = tPrin;
  const kpiNavJan = tNavJan;
  const kpiNavDec = tNavDec;
  const kpiMtd    = tMtd;
  const kpiYtdRet = tYtdRet;
  const kpiAt     = tAtFinal;
  const kpiCumDist= tCumDist;
  const kpiMthDiv = tMthDiv;
  const kpiYtdDiv = tYtdDiv;
  const kpiMtdPct = kpiNavDec > 0 ? kpiMtd/kpiNavDec    : 0;
  const kpiYtdPct = kpiNavDec > 0 ? kpiYtdRet/kpiNavDec : 0;
  const kpiAtPct  = kpiPrin   > 0 ? kpiAt/kpiPrin       : 0;
  const kpiYldPct = kpiNavJan > 0 ? kpiMthDiv/kpiNavJan : 0;
  const kpiYtdYPct= kpiNavJan > 0 ? kpiYtdDiv/kpiNavJan : 0;
  // Yield row 1
  set('retFootYPrin',      fmt(kpiPrin));
  set('retFootYNav',       fmt(kpiNavJan));
  set('retFootMthYld',     bv2(kpiMthDiv));   set('retFootMthYldP',  bp2(kpiYldPct,kpiNavJan));
  set('retFootYtdYld',     bv2(kpiYtdDiv));   set('retFootYtdYldP',  bp2(kpiYtdYPct,kpiNavJan));
  set('retFootAllTimeYld', bv2(kpiCumDist));
  // Return row 1
  set('retFootRPrin',  fmt(kpiPrin));
  set('retFootRNav',   fmt(kpiNavJan));
  set('retFootMtd',    gl2(kpiMtd));    set('retFootMtdP',  glp2(kpiMtdPct,kpiNavDec));
  set('retFootYtd',    gl2(kpiYtdRet)); set('retFootYtdP',  glp2(kpiYtdPct,kpiNavDec));
  set('retFootAt',     gl2(kpiAt));     set('retFootAtP',   glp2(kpiAtPct,kpiPrin));

  // ── Odin Hills footer rows (Yield + Return — WIP, no return figures) ──
  set('retFootYOdinPrin', fmt(odinPrin));
  set('retFootYOdinNav',  fmt(odinNav));
  set('retFootROdinPrin', fmt(odinPrin));
  set('retFootROdinNav',  fmt(odinNav));

  // ── Row 2: Long Term – GGRP ──────────────────────────────────────
  // Yield row 2
  set('retFootYGrpPrin',    fmt(grpGPrin));
  set('retFootYGrpNav',     fmt(grpGNav));
  set('retFootYGrpMthYld',  bv2(grpGMthD));  set('retFootYGrpMthYldP', bp2(grpGYldPct,grpGNav));
  set('retFootYGrpYtdYld',  bv2(grpGYtdD));  set('retFootYGrpYtdYldP', bp2(grpGYtdYP,grpGNav));
  set('retFootYGrpAllTime', bv2(grpGCumD));
  // Return row 2
  set('retFootRGrpPrin',  fmt(grpGPrin));
  set('retFootRGrpNav',   fmt(grpGNav));
  set('retFootRGrpMtd',   gl2(grpGMtd));    set('retFootRGrpMtdP',  glp2(grpGMtdPct,grpGNavD));
  set('retFootRGrpYtd',   gl2(grpGYtdR)); set('retFootRGrpYtdP',  glp2(grpGYtdPct,grpGNavD));
  set('retFootRGrpAt',    gl2(grpGAt));     set('retFootRGrpAtP',   glp2(grpGAtPct,grpGPrin));

  // ── Row 3: TOTAL PORTFOLIO — all incl. GGRP = t* + g* ───────────
  const allPrin   = tPrin    + grpGPrin + odinPrin;
  const allNavJan = tNavJan  + grpGNav  + odinNav;
  const allNavDec = tNavDec  + grpGNavD;
  const allMtd    = tMtd     + grpGMtd;
  const allYtdRet = tYtdRet  + grpGYtdR;
  const allAt     = tAtFinal + grpGAt;
  const allCumDist= tCumDist + grpGCumD;
  const allMthDiv = tMthDiv  + grpGMthD;
  const allYtdDiv = tYtdDiv  + grpGYtdD;
  const allMtdPct = allNavDec > 0 ? allMtd/allNavDec    : 0;
  const allYtdPct = allNavDec > 0 ? allYtdRet/allNavDec : 0;
  const allAtPct  = allPrin   > 0 ? allAt/allPrin       : 0;
  const allYldPct = allNavJan > 0 ? allMthDiv/allNavJan : 0;
  const allYtdYPct= allNavJan > 0 ? allYtdDiv/allNavJan : 0;
  // Yield row 3
  set('retFootYAllPrin',    fmt(allPrin));
  set('retFootYAllNav',     fmt(allNavJan));
  set('retFootYAllMthYld',  bv2(allMthDiv));   set('retFootYAllMthYldP',  bp2(allYldPct,allNavJan));
  set('retFootYAllYtdYld',  bv2(allYtdDiv));   set('retFootYAllYtdYldP',  bp2(allYtdYPct,allNavJan));
  set('retFootYAllAllTime', bv2(allCumDist));
  // Return row 3
  set('retFootRAllPrin',  fmt(allPrin));
  set('retFootRAllNav',   fmt(allNavJan));
  set('retFootRAllMtd',   gl2(allMtd));    set('retFootRAllMtdP',  glp2(allMtdPct,allNavDec));
  set('retFootRAllYtd',   gl2(allYtdRet)); set('retFootRAllYtdP',  glp2(allYtdPct,allNavDec));
  set('retFootRAllAt',    gl2(allAt));     set('retFootRAllAtP',   glp2(allAtPct,allPrin));


  // Yield footer — GGRP row (reference only — already included in Total Portfolio above)
  set('retFootYGrpPrin',    fmt(grpGPrin));
  set('retFootYGrpNav',     fmt(grpGNav));
  set('retFootYGrpMthYld',  bv2(grpGMthD));
  set('retFootYGrpMthYldP', bp2(grpGYldPct,grpGNav));
  set('retFootYGrpYtdYld',  bv2(grpGYtdD));
  set('retFootYGrpYtdYldP', bp2(grpGYtdYP,grpGNav));
  set('retFootYGrpAllTime', bv2(grpGCumD));

  // Return footer — GGRP row (reference only — already included in Total Portfolio above)
  set('retFootRGrpPrin',  fmt(grpGPrin));
  set('retFootRGrpNav',   fmt(grpGNav));
  set('retFootRGrpMtd',   gl2(grpGMtd)); set('retFootRGrpMtdP',  glp2(grpGMtdPct,grpGNavD));
  set('retFootRGrpYtd',   gl2(grpGYtdR));set('retFootRGrpYtdP',  glp2(grpGYtdPct,grpGNavD));
  set('retFootRGrpAt',    gl2(grpGAt));  set('retFootRGrpAtP',   glp2(grpGAtPct,grpGPrin));

  const mtdEl=document.getElementById('kpiMTD'), ytdEl=document.getElementById('kpiYTD'), atEl=document.getElementById('kpiAllTime');
  const mthYldEl=document.getElementById('kpiMthYield'), ytdYldEl=document.getElementById('kpiYtdYield');
  const fmtKpi = (abs,pct) => {
    const sign=abs>=0?'&#8593;':'&#8595;', cls=abs>=0?'up':'down';
    return {val:`<span class="currency">${abs>=0?'+':'-'}$</span>${fmtM(Math.abs(abs))}`,
            sub:`<span class="${cls}">${sign} ${(Math.abs(pct)*100).toFixed(2)}%</span>`};
  };
  if(mtdEl){const rM=fmtKpi(kpiMtd,kpiMtdPct);mtdEl.querySelector('.kpi-value').innerHTML=rM.val;mtdEl.querySelector('.kpi-sub').innerHTML=rM.sub+' &nbsp;&middot;&nbsp; '+periodSnapshots[activePeriod].caption;}
  if(ytdEl){const rY=fmtKpi(kpiYtdRet,kpiYtdPct);ytdEl.querySelector('.kpi-value').innerHTML=rY.val;ytdEl.querySelector('.kpi-sub').innerHTML=rY.sub+' &nbsp;&middot;&nbsp; YTD '+periodSnapshots[activePeriod].caption;}
  if(atEl) {const rA=fmtKpi(kpiAt,kpiAtPct);atEl.querySelector('.kpi-value').innerHTML=rA.val;atEl.querySelector('.kpi-sub').innerHTML=rA.sub+' &nbsp;&middot;&nbsp; NAV vs principal + distributions';}
  if(mthYldEl){mthYldEl.querySelector('.kpi-value').innerHTML=`<span class="currency" style="color:${blue}">+$</span><span style="color:${blue}">${fmtM(kpiMthDiv)}</span>`;mthYldEl.querySelector('.kpi-sub').innerHTML=`<span style="color:${blue}">${(kpiYldPct*100).toFixed(2)}% of NAV</span> &nbsp;&middot;&nbsp; Feb 2026`;}
  if(ytdYldEl){ytdYldEl.querySelector('.kpi-value').innerHTML=`<span class="currency" style="color:${blue}">+$</span><span style="color:${blue}">${fmtM(kpiYtdDiv)}</span>`;ytdYldEl.querySelector('.kpi-sub').innerHTML=`<span style="color:${blue}">${(kpiYtdYPct*100).toFixed(2)}% of NAV</span> &nbsp;&middot;&nbsp; Jan + Feb 2026`;}

  // Render breakdown panel
  renderReturnBreakdown(ent);
}

// ── DUE AMOUNT FORECAST DATA ──
// ── CAPITAL CALL FORECAST DATA (from 06a. Capital Call Forecast) ──
const capCallData = [
  // 5E — months: [Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec]
  {fund:'MSA Venture III',      ent:'5E',  m:[0,0,0,6685,0,0,6685,0,0,6685,0,0]},
  {fund:'NB Credit Opp. II',    ent:'5E',  m:[0,0,0,0,0,0,0,0,0,0,0,0]},
  {fund:'Lexington Cap. X',     ent:'5E',  m:[0,0,0,219340,0,0,219340,0,0,219340,0,0]},
  {fund:'Colbeck Strat. III',   ent:'5E',  m:[0,0,0,285757,0,0,285757,0,0,285757,0,0]},
  {fund:'PSG Equity VI',        ent:'5E',  m:[0,0,0,307178,0,0,307178,0,0,307178,0,0]},
  // ATH
  {fund:'Bonaccord Cap. II',    ent:'ATH', m:[0,0,0,260100,0,0,260100,0,0,260100,0,0]},
  {fund:'CF PE Co-Inv. V',      ent:'ATH', m:[0,0,0,118942,0,0,79295,0,0,79295,0,0]},
  // LPE
  {fund:'Clearlake Cap. VIII',  ent:'LPE', m:[0,0,0,399212,0,0,399212,0,0,399212,0,0]},
  {fund:'Galvanize Innov. I',   ent:'LPE', m:[0,0,18000,47852,0,0,47852,0,0,47852,0,0]},
  {fund:'Thoma Bravo XVI-A',    ent:'LPE', m:[0,0,0,436490,0,0,436490,0,0,436490,0,0]},
  {fund:'CA Select Co-Inv.',    ent:'LPE', m:[0,0,0,80000,0,0,80000,0,0,80000,0,0]},
];

// ── Feb 2026 snapshot — link live arrays ──────────────────────
periodSnapshots['2026-02'].returnData  = returnData.slice();
periodSnapshots['2026-02'].investments = investments.slice();
periodSnapshots['2026-02'].standbyFunds = [
  {name:'INVESCO Sr Loan',   ent:'5E',  strat:'Public – Fixed Inc.',  group:'Short Term', val:2924583.56},
  {name:'KKR Income Trust',  ent:'5E',  strat:'Private – Dir. Lend.', group:'Short Term', val:4327982.45},
  {name:'AMH_FD',            ent:'ATH', strat:'Liquid Fund',           group:'Short Term', val:3455903.38},
  {name:'PIMCO GIS Income',  ent:'LPE', strat:'Public – Fixed Inc.',  group:'Short Term', val:2621739.72},
  {name:'JPM Income Fund',   ent:'LPE', strat:'Public – Fixed Inc.',  group:'Short Term', val:2565726.22},
  {name:'M&G Float Rate HY', ent:'LPE', strat:'Public – Fixed Inc.',  group:'Short Term', val:1242370.33},
  {name:'Invesco Sr Loan',   ent:'LPE', strat:'Public – Fixed Inc.',  group:'Short Term', val:1911308.35},
  {name:'KKR Income Trust',  ent:'LPE', strat:'Private – Dir. Lend.', group:'Short Term', val:2964099.91},
  {name:'Blackstone BCRED',  ent:'LPE', strat:'Private – Dir. Lend.', group:'Short Term', val:1954641.57},
  {name:'OTIC iCap',         ent:'LPE', strat:'Private – Dir. Lend.', group:'Short Term', val:1980331.27},
];
periodSnapshots['2026-02'].cashVals = [126557,126557,3238552,3238552,4086017,3888071,3884653,3883022,3338239,3329930,3329634,3203477,2825972];
periodSnapshots['2026-02'].cashMap     = {ALL:6020184,'5E':2825972,ATH:1511696,LPE:1682516,KIL:0};
periodSnapshots['2026-02'].fcMap       = {ALL:6540914,'5E':215733,ATH:229574,LPE:6095608,KIL:0};
periodSnapshots['2026-02'].sbMap       = {ALL:25948686,'5E':7252566,ATH:3455903,LPE:15240217,KIL:0};
periodSnapshots['2026-02'].totalAUM    = 56872987;
periodSnapshots['2026-02'].fcCards     = {
    fc5e:[{label:'Cash/FD',sign:'+',val:2825972},{label:'Standby Funds',sign:'+',val:7252566},{label:'Unfunded Commitments',sign:'−',val:9703883},{label:'Expenses Forecast',sign:'−',val:158922},{label:'Free Cash',sign:'=',val:215733}],
    fcAth:[{label:'Cash/FD',sign:'+',val:1511696},{label:'Standby Funds',sign:'+',val:3455903},{label:'Unfunded (KT portion)',sign:'−',val:4225899},{label:'Expenses Forecast',sign:'−',val:12126},{label:'Settlement to 5E',sign:'−',val:500000},{label:'Free Cash',sign:'=',val:229574}],
    fcLpe:[{label:'Cash/FD',sign:'+',val:1682516},{label:'Standby Funds',sign:'+',val:15240217},{label:'Unfunded Commitments',sign:'−',val:10186402},{label:'Expenses Forecast',sign:'−',val:640724},{label:'Free Cash',sign:'=',val:6095608}]
};


// ── EXPENSE FORECAST DATA (from 06. Expenses Forecast) ──
const expForecastData = [
  // 5E — [Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec]
  {ent:'5E',  type:'Management Fee',   m:[0,0,34091,0,0,34091,0,0,34091,0,0,34091]},
  {ent:'5E',  type:'Professional Fee', m:[0,0,1742,0,0,0,16801,0,0,0,0,3106]},
  {ent:'5E',  type:'Membership',       m:[0,0,0,0,0,0,0,0,0,0,0,909]},
  // ATH
  {ent:'ATH', type:'Professional Fee', m:[0,0,6465,0,0,1330,0,0,0,0,0,0]},
  {ent:'ATH', type:'Legal Fee',        m:[0,0,0,4331,0,0,0,0,0,0,0,0]},
  // LPE
  {ent:'LPE', type:'Management Fee',   m:[0,0,34091,0,0,34091,0,0,34091,0,0,34092]},
  {ent:'LPE', type:'Legal Fee',        m:[3712,0,0,44924,0,0,0,17045,14394,5758,0,0]},
  {ent:'LPE', type:'Professional Fee', m:[0,2500,227,0,0,227,0,0,227,0,0,2803]},
  {ent:'LPE', type:'Insurance',        m:[0,0,0,0,0,0,411633,0,0,0,0,0]},
  {ent:'LPE', type:'Membership',       m:[0,0,0,0,0,0,0,0,0,0,0,909]},
];

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function fmtDue(v) {
  return v > 0
    ? `<span style="font-family:'DM Mono',monospace;font-size:10px;color:var(--ink)">${fmt(v)}</span>`
    : `<span style="color:var(--border)">—</span>`;
}

let activeDueView = 'all';

function setDueView(view) {
  activeDueView = view;
  const ink = 'var(--ink)', red = C.red, gold = C.gold;
  const pAll  = document.getElementById('duePillAll');
  const pCall = document.getElementById('duePillCall');
  const pExp  = document.getElementById('duePillExp');
  const vCall = document.getElementById('dueViewCall');
  const vExp  = document.getElementById('dueViewExp');
  const title = document.getElementById('dueCardTitle');

  // Reset all pills
  [pAll, pCall, pExp].forEach(p => {
    if (!p) return;
    p.style.background = 'transparent';
    p.style.color = 'var(--ink-muted)';
    p.style.borderColor = 'var(--border)';
  });

  if (view === 'all') {
    pAll.style.background = ink; pAll.style.color = '#fff'; pAll.style.borderColor = ink;
    vCall.style.display = ''; vExp.style.display = '';
    if (title) title.textContent = 'Due Amount Forecast 2026';
  } else if (view === 'call') {
    pCall.style.background = red; pCall.style.color = '#fff'; pCall.style.borderColor = red;
    vCall.style.display = ''; vExp.style.display = 'none';
    if (title) title.textContent = 'Capital Call Forecast 2026';
  } else {
    pExp.style.background = gold; pExp.style.color = '#fff'; pExp.style.borderColor = gold;
    vCall.style.display = 'none'; vExp.style.display = '';
    if (title) title.textContent = 'Expense Forecast 2026';
  }
}

function renderDueAmountFiltered(ent) {
  const blue = '#2a4a7f';

  // ── Capital Calls ──
  const ccData = ent === 'ALL' ? capCallData : capCallData.filter(d => d.ent === ent);
  const ccTbody   = document.getElementById('capCallTbody');
  const ccFooter  = document.getElementById('capCallFooter');

  if (ccTbody && ccData.length) {
    // Group by entity
    const ents = ent === 'ALL' ? ['5E','ATH','LPE'] : [ent];
    let html = '';
    const colTotals = Array(12).fill(0);
    let grandTotal = 0;

    ents.forEach(e => {
      const rows = ccData.filter(d => d.ent === e);
      if (!rows.length) return;
      const ec = e==='5E'?C.navy:e==='ATH'?C.gold:C.green;
      const grpTotals = Array(12).fill(0);
      rows.forEach(d => d.m.forEach((v,i) => grpTotals[i] += v));
      const grpTotal = grpTotals.reduce((a,v)=>a+v,0);

      // Entity header row
      html += `<tr style="background:var(--cream)">
        <td colspan="2" style="font-family:'Jost',sans-serif;font-size:10px;font-weight:700;
          letter-spacing:0.1em;text-transform:uppercase;color:${ec};padding:8px 16px 6px">${e}</td>
        ${grpTotals.map(v=>`<td style="text-align:right;font-family:'DM Mono',monospace;font-size:10px;font-weight:600;color:${ec};padding:8px 16px 6px">${v>0?fmt(v):'—'}</td>`).join('')}
        <td style="text-align:right;font-family:'DM Mono',monospace;font-size:10px;font-weight:600;color:${ec};padding:8px 16px 6px">${grpTotal>0?fmt(grpTotal):'—'}</td>
      </tr>`;

      rows.forEach(d => {
        const rowTotal = d.m.reduce((a,v)=>a+v,0);
        d.m.forEach((v,i) => colTotals[i] += v);
        grandTotal += rowTotal;
        html += `<tr data-ent="${e}">
          <td><span style="font-family:'DM Mono';font-size:9px;padding:2px 7px;border-radius:2px;background:${ec}20;color:${ec};font-weight:500;letter-spacing:0.1em">${e}</span></td>
          <td style="padding-left:12px;font-size:11px">${d.fund}</td>
          ${d.m.map(v=>`<td style="text-align:right">${fmtDue(v)}</td>`).join('')}
          <td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px;font-weight:600;color:${C.red}">${rowTotal>0?fmt(rowTotal):'—'}</td>
        </tr>`;
      });
    });

    ccTbody.innerHTML = html;
    if (ccFooter) {
      ccFooter.innerHTML = `<td colspan="2" style="font-weight:600;font-family:'Jost',sans-serif">Total</td>
        ${colTotals.map(v=>`<td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px;font-weight:600;color:${C.red}">${v>0?fmt(v):'—'}</td>`).join('')}
        <td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px;font-weight:700;color:${C.red}">${grandTotal>0?fmt(grandTotal):'—'}</td>`;
    }
  }

  // ── Expenses ──
  const exData = ent === 'ALL' ? expForecastData : expForecastData.filter(d => d.ent === ent);
  const exTbody  = document.getElementById('expForecastTbody');
  const exFooter = document.getElementById('expForecastFooter');

  if (exTbody && exData.length) {
    const ents = ent === 'ALL' ? ['5E','ATH','LPE'] : [ent];
    let html = '';
    const colTotals = Array(12).fill(0);
    let grandTotal = 0;

    ents.forEach(e => {
      const rows = exData.filter(d => d.ent === e);
      if (!rows.length) return;
      const ec = e==='5E'?C.navy:e==='ATH'?C.gold:C.green;
      const grpTotals = Array(12).fill(0);
      rows.forEach(d => d.m.forEach((v,i) => grpTotals[i] += v));
      const grpTotal = grpTotals.reduce((a,v)=>a+v,0);

      // Entity header row
      html += `<tr style="background:var(--cream)">
        <td style="font-family:'Jost',sans-serif;font-size:10px;font-weight:700;
          letter-spacing:0.1em;text-transform:uppercase;color:${ec};padding:8px 16px 6px">${e}</td>
        <td style="padding:8px 16px 6px;color:var(--ink-muted);font-size:10px">All types</td>
        ${grpTotals.map(v=>`<td style="text-align:right;font-family:'DM Mono',monospace;font-size:10px;font-weight:600;color:${ec};padding:8px 16px 6px">${v>0?fmt(v):'—'}</td>`).join('')}
        <td style="text-align:right;font-family:'DM Mono',monospace;font-size:10px;font-weight:600;color:${ec};padding:8px 16px 6px">${grpTotal>0?fmt(grpTotal):'—'}</td>
      </tr>`;

      rows.forEach(d => {
        const rowTotal = d.m.reduce((a,v)=>a+v,0);
        if (rowTotal === 0) return;
        d.m.forEach((v,i) => colTotals[i] += v);
        grandTotal += rowTotal;
        html += `<tr data-ent="${e}">
          <td><span style="font-family:'DM Mono';font-size:9px;padding:2px 7px;border-radius:2px;background:${ec}20;color:${ec};font-weight:500;letter-spacing:0.1em">${e}</span></td>
          <td style="padding-left:12px;font-size:11px;color:var(--ink-muted)">${d.type}</td>
          ${d.m.map(v=>`<td style="text-align:right">${fmtDue(v)}</td>`).join('')}
          <td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px;font-weight:600;color:${C.gold}">${rowTotal>0?fmt(rowTotal):'—'}</td>
        </tr>`;
      });
    });

    exTbody.innerHTML = html;
    if (exFooter) {
      exFooter.innerHTML = `<td colspan="2" style="font-weight:600;font-family:'Jost',sans-serif">Total</td>
        ${colTotals.map(v=>`<td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px;font-weight:600;color:${C.gold}">${v>0?fmt(v):'—'}</td>`).join('')}
        <td style="text-align:right;font-family:'DM Mono',monospace;font-size:11px;font-weight:700;color:${C.gold}">${grandTotal>0?fmt(grandTotal):'—'}</td>`;
    }
  }
}