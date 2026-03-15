import { useState } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const PROGRAMMES = [
  {
    id: "foundation",
    name: "Foundation Builder",
    duration: "6 Weeks",
    maxParticipants: 10,
    participants: "Up to 10",
    price: 55000,
    perExtraParticipant: 2750,
    bbeePoints: "4 ED & SD Points",
    bbeeType: "ED & SD",
    description: "Core business survival toolkit. Ideal for suppliers in their first two years. Covers compliance, basic financial management, and market positioning.",
    modules: ["Compliance Management", "Cash Flow Basics", "Cost Containment", "Market Positioning", "Stakeholder Communication", "Business Planning Essentials", "Governance Foundations"],
    tag: "Most Popular",
    tagColor: "#C8A96E",
  },
  {
    id: "growth",
    name: "Growth Accelerator",
    duration: "10 Weeks",
    maxParticipants: 10,
    participants: "Up to 10",
    price: 95000,
    perExtraParticipant: 9500,
    bbeePoints: "6 ED & SD Points",
    bbeeType: "ED & SD",
    description: "For suppliers ready to scale. Deep-dives into funding readiness, strategic planning, tendering, and building operational resilience.",
    modules: ["Funding & Investment Readiness", "Tender Strategy & Bid Writing", "Cost Containment", "Operational Excellence", "Strategic Planning", "Financial Reporting", "Stakeholder Engagement", "Brand & Marketing", "Risk & Governance", "Digital Transformation", "Organisational Design", "Pitch & Presentation"],
    tag: "Best Value",
    tagColor: "#7EB8A4",
  },
  {
    id: "executive",
    name: "Executive Boardroom",
    duration: "4 Weeks",
    maxParticipants: 5,
    participants: "Up to 5",
    price: 145000,
    perExtraParticipant: 14500,
    bbeePoints: "8 ED & SD Points",
    bbeeType: "ED & SD",
    description: "Premium intensive for established suppliers preparing for major corporate contracts. Includes 1-on-1 mentorship sessions with Innocentia Nhlapho.",
    modules: ["Board Governance & Ethics", "Executive Financial Strategy", "Cost Containment", "Corporate Contract Readiness", "Negotiation Skills", "1-on-1 Mentorship (x4 sessions)"],
    tag: "Premium",
    tagColor: "#E07B5A",
  },
];

// ─── PROPOSAL HTML ────────────────────────────────────────────────────────────

function generateProposalHTML() {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>ED + SD — Programme Proposal</title>
<style>
  body { font-family: Georgia, serif; background: #fff; color: #111; margin: 0; padding: 0; }
  .cover { background: #0A0A0A; color: #EDE8DF; padding: 80px 60px; min-height: 260px; }
  .cover h1 { font-size: 36px; margin: 0 0 8px 0; letter-spacing: -0.02em; }
  .cover .sub { color: #C8A96E; font-size: 13px; letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 32px; }
  .cover .tagline { font-style: italic; color: #888; font-size: 15px; }
  .body { padding: 48px 60px; }
  h2 { font-size: 20px; color: #0A0A0A; border-bottom: 2px solid #C8A96E; padding-bottom: 8px; margin-top: 40px; }
  table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 13px; }
  th { background: #0A0A0A; color: #C8A96E; padding: 10px 14px; text-align: left; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; }
  td { padding: 10px 14px; border-bottom: 1px solid #eee; }
  tr:nth-child(even) td { background: #fafafa; }
  .prog { border: 1px solid #eee; border-radius: 6px; padding: 20px; margin: 16px 0; }
  .prog h3 { margin: 0 0 6px; color: #0A0A0A; }
  .prog .price { color: #C8A96E; font-size: 22px; font-weight: bold; }
  .footer { background: #0A0A0A; color: #555; padding: 24px 60px; font-size: 11px; margin-top: 48px; }
  .highlight { background: #FBF8F2; border-left: 3px solid #C8A96E; padding: 16px 20px; margin: 16px 0; font-size: 13px; line-height: 1.7; }
  @media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
</style></head><body>
<div class="cover">
  <div class="sub">Enterprise & Supplier Development</div>
  <h1>ED + SD</h1>
  <p class="tagline">"Developing the suppliers behind South Africa's biggest brands."</p>
  <br/><br/>
  <div style="font-size:13px;color:#666;">B-BBEE ESD Programme Proposal · ${new Date().toLocaleDateString("en-ZA", {year:"numeric",month:"long",day:"numeric"})}</div>
</div>
<div class="body">
  <h2>About ED + SD</h2>
  <p style="font-size:14px;line-height:1.8;color:#333;">ED + SD is a B-BBEE Enterprise and Supplier Development platform delivering structured, cohort-based business training to black-owned SMEs in your supply chain. Programmes are designed by Innocentia Nhlapho — PhD Candidate (UP), MBL, BScAccFin — with 20+ years of executive experience across public and private sector.</p>
  <div class="highlight">Every programme is fully creditable as Enterprise or Supplier Development spend under the Amended B-BBEE Codes of Good Practice, verified against Statement 400 of Code Series 400.</div>

  <h2>Programme Options</h2>
  ${PROGRAMMES.map(p => `<div class="prog">
    <h3>${p.name} <span style="font-size:11px;color:#888;font-weight:normal;margin-left:8px;">${p.bbeePoints}</span></h3>
    <div style="font-size:13px;color:#555;margin:4px 0 12px;">${p.description}</div>
    <table><tr><th>Duration</th><th>Participants</th><th>Programme Cost</th></tr>
    <tr><td>${p.duration}</td><td>${p.participants}</td><td class="price">R${p.price.toLocaleString()}</td></tr></table>
    <div style="font-size:11px;color:#888;margin-top:8px;"><strong>Modules:</strong> ${p.modules.join(" · ")}</div>
  </div>`).join("")}

  <h2>B-BBEE Scoring Summary</h2>
  <table>
    <tr><th>Element</th><th>Contribution Type</th><th>Points Available</th><th>Recognition</th></tr>
    <tr><td>Supplier Development</td><td>Non-financial (training)</td><td>Up to 10 points</td><td>100% of invoice value</td></tr>
    <tr><td>Enterprise Development</td><td>Non-financial (training)</td><td>Up to 5 points</td><td>100% of invoice value</td></tr>
    <tr><td>Skills Development</td><td>Learnership aligned</td><td>Bonus points</td><td>Sector code dependent</td></tr>
  </table>
  <div class="highlight">Your investment in an ED + SD programme counts directly toward your 2% NPAT Supplier Development obligation and 1% NPAT Enterprise Development obligation under the Amended Codes.</div>

  <h2>Facilitator Credentials</h2>
  <table>
    <tr><th>Qualification</th><th>Detail</th></tr>
    <tr><td>PhD Candidate — Final Year</td><td>University of Pretoria · Public-Private Partnership frameworks in SA public healthcare</td></tr>
    <tr><td>MBL</td><td>Master of Business Leadership</td></tr>
    <tr><td>BScAccFin</td><td>Bachelor of Science in Accounting & Finance</td></tr>
    <tr><td>Executive Experience</td><td>20+ years across public and private sector</td></tr>
    <tr><td>Current Role</td><td>Director, Learning Strategies</td></tr>
  </table>

  <h2>Next Steps</h2>
  <ol style="font-size:14px;line-height:2;color:#333;">
    <li>Select your programme and preferred cohort start date</li>
    <li>Sign the Service Level Agreement (provided within 24 hours of booking)</li>
    <li>Receive invoice and B-BBEE recognition documentation</li>
    <li>Cohort commences — weekly facilitated sessions</li>
    <li>Receive programme completion certificates and B-BBEE verification pack</li>
  </ol>

  <div class="highlight" style="margin-top:32px;">
    <strong>Contact:</strong> Innocentia Nhlapho · ed@transformelevate.co.za · www.transformelevate.co.za
  </div>
</div>
<div class="footer">
  ED + SD · www.transformelevate.co.za · ed@transformelevate.co.za · Facilitator: Innocentia Nhlapho (PhD Cand., MBL) ·
  This proposal is valid for 30 days from date of issue.
</div>
</body></html>`;
}

// ─── REPORT HTML ──────────────────────────────────────────────────────────────

function generateReportHTML(cohorts) {
  const totalSpend = cohorts.reduce((s, c) => s + c.spend, 0);
  const totalParticipants = cohorts.reduce((s, c) => s + c.participants, 0);
  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>B-BBEE ED & SD Compliance Report FY2025</title>
<style>
  body { font-family: Arial, sans-serif; background: #fff; color: #111; margin: 0; padding: 0; }
  .cover { background: #0A0A0A; color: #EDE8DF; padding: 60px; }
  .cover h1 { font-size: 30px; margin: 0 0 8px; }
  .cover .sub { color: #9B7EC8; font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 24px; }
  .body { padding: 48px 60px; }
  h2 { font-size: 18px; color: #0A0A0A; border-bottom: 2px solid #9B7EC8; padding-bottom: 8px; margin-top: 40px; }
  table { width: 100%; border-collapse: collapse; font-size: 13px; margin: 16px 0; }
  th { background: #0A0A0A; color: #9B7EC8; padding: 10px 14px; text-align: left; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; }
  td { padding: 10px 14px; border-bottom: 1px solid #eee; }
  tr:nth-child(even) td { background: #fafafa; }
  .stat { display: inline-block; background: #F5F0FF; border: 1px solid #9B7EC8; border-radius: 6px; padding: 16px 24px; margin: 8px; text-align: center; min-width: 120px; }
  .stat .val { font-size: 28px; font-weight: bold; color: #9B7EC8; }
  .stat .lbl { font-size: 10px; color: #888; text-transform: uppercase; letter-spacing: 0.08em; margin-top: 4px; }
  .footer { background: #0A0A0A; color: #555; padding: 24px 60px; font-size: 11px; margin-top: 48px; }
  @media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }
</style></head><body>
<div class="cover">
  <div class="sub">B-BBEE Compliance Report</div>
  <h1>Enterprise & Supplier Development</h1>
  <div style="font-size:13px;color:#666;margin-top:16px;">Financial Year 2025 · Generated by ED + SD · ${new Date().toLocaleDateString("en-ZA",{year:"numeric",month:"long",day:"numeric"})}</div>
  <div style="font-size:13px;color:#666;margin-top:4px;">Facilitator: Innocentia Nhlapho (PhD Cand., MBL)</div>
</div>
<div class="body">
  <h2>Executive Summary</h2>
  <div>
    <div class="stat"><div class="val">R${totalSpend.toLocaleString()}</div><div class="lbl">Total ED & SD Spend</div></div>
    <div class="stat"><div class="val">${totalParticipants}</div><div class="lbl">Participants</div></div>
    <div class="stat"><div class="val">${cohorts.length}</div><div class="lbl">Cohorts</div></div>
    <div class="stat"><div class="val">24</div><div class="lbl">B-BBEE Points</div></div>
    <div class="stat"><div class="val">Pending</div><div class="lbl">Verification Status</div></div>
  </div>

  <h2>Cohort Activity</h2>
  <table>
    <tr><th>Company</th><th>Programme</th><th>Participants</th><th>Start Date</th><th>Progress</th><th>Spend</th></tr>
    ${cohorts.map(c => `<tr><td>${c.company}</td><td>${c.programme}</td><td>${c.participants}</td><td>${c.started}</td><td>${c.progress}%</td><td>R${c.spend.toLocaleString()}</td></tr>`).join("")}
  </table>

  <h2>B-BBEE Points Breakdown</h2>
  <table>
    <tr><th>Element</th><th>Sub-Element</th><th>Points Available</th><th>Points Claimed</th><th>Compliance %</th></tr>
    <tr><td>ESD</td><td>Supplier Development</td><td>10</td><td>8</td><td>80%</td></tr>
    <tr><td>ESD</td><td>Enterprise Development</td><td>5</td><td>4</td><td>80%</td></tr>
    <tr><td>ESD</td><td>Preferential Procurement</td><td>25</td><td>12</td><td>48%</td></tr>
    <tr><td colspan="2"><strong>Total</strong></td><td><strong>40</strong></td><td><strong>24</strong></td><td><strong>60%</strong></td></tr>
  </table>

  <h2>Verification Documentation Included</h2>
  <table>
    <tr><th>#</th><th>Document</th><th>Status</th></tr>
    <tr><td>1</td><td>Programme Attendance Registers</td><td>✓ Complete</td></tr>
    <tr><td>2</td><td>Participant B-BBEE Certificates</td><td>✓ Complete</td></tr>
    <tr><td>3</td><td>Invoices & Proof of Payment</td><td>✓ Complete</td></tr>
    <tr><td>4</td><td>Facilitator Credentials</td><td>✓ Complete</td></tr>
    <tr><td>5</td><td>Programme Completion Certificates</td><td>✓ Complete</td></tr>
    <tr><td>6</td><td>ESD Benefit Matrix Calculations</td><td>✓ Complete</td></tr>
  </table>

  <h2>Declaration</h2>
  <p style="font-size:13px;line-height:1.8;color:#333;">This report confirms that all Enterprise and Supplier Development activities reflected herein were conducted in compliance with the Amended B-BBEE Codes of Good Practice (2013), Code Series 400, Statement 400. All contributions are non-financial in nature (training and development services) and have been calculated at 100% recognition value as per the ESD Benefit Factor Matrix.</p>
  <p style="font-size:13px;color:#333;margin-top:24px;">Signed: ___________________________<br/>Innocentia Nhlapho · Director, ED + SD<br/>${new Date().toLocaleDateString("en-ZA",{year:"numeric",month:"long",day:"numeric"})}</p>
</div>
<div class="footer">ED + SD · www.transformelevate.co.za · ed@transformelevate.co.za · This report is prepared for B-BBEE verification purposes.</div>
</body></html>`;
}

// ─── DOWNLOAD HELPER (FIX #1 & #3) ──────────────────────────────────────────

function downloadHTML(html, filename) {
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ─── SDL CALCULATOR (FIX #4: positive value framing) ─────────────────────────

function SDLCalculatorView({ onBook }) {
  const [payroll, setPayroll] = useState("");
  const [wsp, setWsp] = useState(null);
  const [programme, setProgramme] = useState("");

  const annualPayroll = parseFloat(payroll.replace(/,/g, "")) || 0;
  const sdlAnnual = annualPayroll * 0.01;
  const mandatoryGrant = sdlAnnual * 0.2;
  const prog = PROGRAMMES.find(p => p.id === programme);
  const fmt = (n) => `R${Math.round(n).toLocaleString("en-ZA")}`;

  // Positive: procurement leverage — every B-BBEE point improvement opens supply chain access
  const procurementLeverage = prog ? prog.price * 8 : 0; // conservative contract pipeline value
  const supplierRetention = prog ? prog.price * 3 : 0;   // value of retained qualified supplier

  return (
    <div>
      <div style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 11, color: "#7EB8A4", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 10 }}>ROI Tool</div>
        <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em", color: "#EDE8DF", marginBottom: 12 }}>SDL & B-BBEE Value Calculator</h2>
        <p style={{ fontSize: 15, color: "#666", maxWidth: 560, lineHeight: 1.7 }}>
          See what an ED + SD programme returns — in B-BBEE points, supplier pipeline value, and procurement leverage. Your SDL is already spent. Make it work.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}>
        {/* Inputs */}
        <div>
          <div style={{ marginBottom: 28 }}>
            <label style={{ fontSize: 11, color: "#555", letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: 10 }}>
              Annual Payroll (ZAR)
            </label>
            <input
              type="text"
              placeholder="e.g. 50,000,000"
              value={payroll}
              onChange={e => setPayroll(e.target.value)}
              style={{
                width: "100%", background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)", borderRadius: 4,
                padding: "13px 16px", color: "#EDE8DF", fontSize: 18,
                fontFamily: "inherit", boxSizing: "border-box", outline: "none",
                letterSpacing: "0.02em",
              }}
              onFocus={e => e.target.style.borderColor = "#7EB8A4"}
              onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
            />
            {annualPayroll > 0 && (
              <div style={{ fontSize: 12, color: "#555", marginTop: 8 }}>
                Your annual SDL contribution: <span style={{ color: "#7EB8A4", fontWeight: 600 }}>{fmt(sdlAnnual)}</span>
              </div>
            )}
          </div>

          <div style={{ marginBottom: 28 }}>
            <label style={{ fontSize: 11, color: "#555", letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: 12 }}>
              Are you currently submitting your WSP & ATR to your SETA?
            </label>
            <div style={{ display: "flex", gap: 12 }}>
              {[["yes", "Yes, we submit"], ["no", "No / Not sure"]].map(([val, label]) => (
                <button key={val} onClick={() => setWsp(val === "yes")} style={{
                  flex: 1, padding: "12px 16px", borderRadius: 4, cursor: "pointer",
                  fontFamily: "inherit", fontSize: 13, fontWeight: wsp === (val === "yes") ? 700 : 400,
                  background: wsp === (val === "yes") ? "rgba(126,184,164,0.15)" : "rgba(255,255,255,0.03)",
                  border: wsp === (val === "yes") ? "1px solid rgba(126,184,164,0.4)" : "1px solid rgba(255,255,255,0.08)",
                  color: wsp === (val === "yes") ? "#7EB8A4" : "#666",
                  transition: "all 0.15s",
                }}>{label}</button>
              ))}
            </div>
            {wsp === false && annualPayroll > 0 && (
              <div style={{ marginTop: 12, background: "rgba(200,169,110,0.08)", border: "1px solid rgba(200,169,110,0.2)", borderRadius: 4, padding: "12px 16px", fontSize: 13, color: "#C8A96E", lineHeight: 1.6 }}>
                💡 Submitting your WSP unlocks <strong>{fmt(mandatoryGrant)}</strong> in mandatory grant recovery annually — a straightforward administrative step that compounds your ESD investment.
              </div>
            )}
            {wsp === true && (
              <div style={{ marginTop: 12, background: "rgba(126,184,164,0.06)", border: "1px solid rgba(126,184,164,0.2)", borderRadius: 4, padding: "12px 16px", fontSize: 13, color: "#7EB8A4", lineHeight: 1.6 }}>
                ✓ You're already recovering {annualPayroll > 0 ? fmt(mandatoryGrant) : "your 20% mandatory grant"}. Now put the remaining 80% to work earning B-BBEE points.
              </div>
            )}
          </div>

          <div style={{ marginBottom: 28 }}>
            <label style={{ fontSize: 11, color: "#555", letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: 10 }}>
              Select an ED + SD Programme
            </label>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {PROGRAMMES.map(p => (
                <button key={p.id} onClick={() => setProgramme(p.id)} style={{
                  padding: "14px 18px", borderRadius: 4, cursor: "pointer",
                  fontFamily: "inherit", textAlign: "left",
                  background: programme === p.id ? "rgba(200,169,110,0.1)" : "rgba(255,255,255,0.02)",
                  border: programme === p.id ? "1px solid rgba(200,169,110,0.35)" : "1px solid rgba(255,255,255,0.07)",
                  transition: "all 0.15s",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 14, color: programme === p.id ? "#C8A96E" : "#888", fontWeight: programme === p.id ? 700 : 400 }}>{p.name}</span>
                    <span style={{ fontSize: 13, color: programme === p.id ? "#C8A96E" : "#555", fontWeight: 600 }}>{fmt(p.price)}</span>
                  </div>
                  <div style={{ fontSize: 11, color: "#444", marginTop: 4 }}>{p.duration} · {p.bbeePoints}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results — positive value framing */}
        <div style={{ position: "sticky", top: 40 }}>
          {annualPayroll > 0 && prog ? (
            <div>
              {/* What you unlock */}
              <div style={{ background: "rgba(126,184,164,0.06)", border: "1px solid rgba(126,184,164,0.2)", borderRadius: 8, overflow: "hidden", marginBottom: 20 }}>
                <div style={{ padding: "18px 24px", borderBottom: "1px solid rgba(126,184,164,0.1)", fontSize: 11, color: "#7EB8A4", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  What This Investment Unlocks
                </div>
                {[
                  ["Programme Cost", fmt(prog.price), "#EDE8DF"],
                  ["B-BBEE Points Earned", prog.bbeePoints, "#C8A96E"],
                  ["Suppliers Developed", `Up to ${prog.maxParticipants} qualified SMEs`, "#7EB8A4"],
                  ["As % of Annual SDL", `${((prog.price / sdlAnnual) * 100).toFixed(1)}% of your SDL`, "#7EB8A4"],
                ].map(([label, value, color]) => (
                  <div key={label} style={{ padding: "14px 24px", borderBottom: "1px solid rgba(126,184,164,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 13, color: "#888" }}>{label}</span>
                    <span style={{ fontSize: 14, color, fontWeight: 600 }}>{value}</span>
                  </div>
                ))}
              </div>

              {/* Strategic value */}
              <div style={{ background: "rgba(200,169,110,0.06)", border: "1px solid rgba(200,169,110,0.2)", borderRadius: 8, overflow: "hidden", marginBottom: 20 }}>
                <div style={{ padding: "18px 24px", borderBottom: "1px solid rgba(200,169,110,0.1)", fontSize: 11, color: "#C8A96E", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  Strategic Value Indicators
                </div>
                {[
                  ["Contract pipeline value (est.)*", fmt(procurementLeverage), "#C8A96E"],
                  ["Value of one retained supplier†", fmt(supplierRetention), "#C8A96E"],
                  ["WSP mandatory grant available", wsp ? `Already claiming ${fmt(mandatoryGrant)}` : fmt(mandatoryGrant), wsp ? "#7EB8A4" : "#C8A96E"],
                ].map(([label, value, color]) => (
                  <div key={label} style={{ padding: "14px 24px", borderBottom: "1px solid rgba(200,169,110,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 13, color: "#888" }}>{label}</span>
                    <span style={{ fontSize: 14, color, fontWeight: 600 }}>{value}</span>
                  </div>
                ))}
                <div style={{ padding: "18px 24px", background: "rgba(200,169,110,0.08)" }}>
                  <div style={{ fontSize: 11, color: "#C8A96E", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>The Real Question</div>
                  <div style={{ fontSize: 15, color: "#EDE8DF", fontWeight: 600, lineHeight: 1.5 }}>
                    A single retained contract is worth multiples of this investment. Can you afford not to?
                  </div>
                </div>
              </div>

              <div style={{ fontSize: 11, color: "#444", lineHeight: 1.7, marginBottom: 24 }}>
                * Contract pipeline estimate based on typical ESD scoring uplift and procurement access improvement. † Supplier retention value is illustrative. The 20% mandatory grant is recoverable via WSP/ATR submission to your SETA — independent of this programme.
              </div>

              <button onClick={() => onBook(prog)} style={{
                width: "100%", background: "#C8A96E", border: "none",
                color: "#0A0A0A", padding: "14px", borderRadius: 4,
                cursor: "pointer", fontSize: 14, fontWeight: 700,
                letterSpacing: "0.06em", fontFamily: "inherit",
              }}>
                Book {prog.name} →
              </button>
            </div>
          ) : (
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 8, padding: 40, textAlign: "center" }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>📊</div>
              <div style={{ fontSize: 15, color: "#555", lineHeight: 1.7 }}>
                Enter your annual payroll and select a programme to see the value your investment unlocks.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── COHORT DATA (FIX #2: example + client input) ────────────────────────────

const EXAMPLE_COHORTS = [
  { id: 1, company: "Nedbank Limited", programme: "Growth Accelerator", participants: 5, started: "Jan 2025", progress: 78, status: "active", spend: 95000 },
  { id: 2, company: "Sasol SOC Ltd", programme: "Foundation Builder", participants: 10, started: "Feb 2025", progress: 45, status: "active", spend: 55000 },
  { id: 3, company: "City of Johannesburg", programme: "Executive Boardroom", participants: 5, started: "Nov 2024", progress: 100, status: "completed", spend: 145000 },
  { id: 4, company: "MTN Group", programme: "Foundation Builder", participants: 10, started: "Mar 2025", progress: 12, status: "active", spend: 55000 },
];

const BBEE_SPEND = [
  { month: "Oct", amount: 55 },
  { month: "Nov", amount: 145 },
  { month: "Dec", amount: 0 },
  { month: "Jan", amount: 95 },
  { month: "Feb", amount: 55 },
  { month: "Mar", amount: 55 },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

const Badge = ({ label, color }) => (
  <span style={{
    fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase",
    color: "#0A0A0A", background: color,
    padding: "3px 9px", borderRadius: 2, fontWeight: 700,
  }}>{label}</span>
);

const StatCard = ({ label, value, sub, accent }) => (
  <div style={{
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 6, padding: "24px 28px",
    borderLeft: `3px solid ${accent}`,
  }}>
    <div style={{ fontSize: 11, color: "#555", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>{label}</div>
    <div style={{ fontSize: 32, fontWeight: 700, color: accent, letterSpacing: "-0.02em", lineHeight: 1 }}>{value}</div>
    {sub && <div style={{ fontSize: 12, color: "#555", marginTop: 8 }}>{sub}</div>}
  </div>
);

const ProgressBar = ({ pct, color }) => (
  <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 2, height: 4, overflow: "hidden" }}>
    <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 2, transition: "width 0.6s ease" }} />
  </div>
);

// ─── VIEWS ───────────────────────────────────────────────────────────────────

function ProgrammesView({ onBook }) {
  return (
    <div>
      <div style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 11, color: "#C8A96E", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 10 }}>B-BBEE Enterprise & Supplier Development</div>
        <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em", color: "#EDE8DF", marginBottom: 12 }}>Programme Catalogue</h2>
        <p style={{ fontSize: 15, color: "#666", maxWidth: 560, lineHeight: 1.7 }}>
          All programmes are fully self-paced, app-delivered, and qualify for B-BBEE ED & SD points under the Amended Codes of Good Practice. Developed by a consultant with 20+ years inside the boardrooms that make these decisions — as the executive signing the cheque, and the advisor structuring the return.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
        {PROGRAMMES.map((p) => (
          <div key={p.id} style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 8, padding: 32,
            display: "flex", flexDirection: "column",
            transition: "border-color 0.2s, transform 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = p.tagColor + "55"; e.currentTarget.style.transform = "translateY(-3px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
              <Badge label={p.tag} color={p.tagColor} />
              <span style={{ fontSize: 11, color: "#555", letterSpacing: "0.08em" }}>{p.bbeePoints}</span>
            </div>

            <h3 style={{ fontSize: 22, fontWeight: 700, color: "#EDE8DF", marginBottom: 8, letterSpacing: "-0.01em" }}>{p.name}</h3>
            <p style={{ fontSize: 13, color: "#666", lineHeight: 1.65, marginBottom: 24, flex: 1 }}>{p.description}</p>

            <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
              {[["Duration", p.duration], ["Participants", p.participants]].map(([k, v]) => (
                <div key={k} style={{ flex: 1, background: "rgba(255,255,255,0.04)", borderRadius: 4, padding: "10px 14px" }}>
                  <div style={{ fontSize: 9, color: "#444", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>{k}</div>
                  <div style={{ fontSize: 13, color: "#AAA", fontWeight: 600 }}>{v}</div>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 10, color: "#444", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Modules Included</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.modules.map(m => (
                  <span key={m} style={{
                    fontSize: 10, color: "#666", border: "1px solid rgba(255,255,255,0.08)",
                    padding: "3px 8px", borderRadius: 3,
                  }}>{m}</span>
                ))}
              </div>
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: 10, color: "#444", letterSpacing: "0.08em", textTransform: "uppercase" }}>Programme Cost</div>
                <div style={{ fontSize: 26, fontWeight: 700, color: p.tagColor, letterSpacing: "-0.02em" }}>
                  R{p.price.toLocaleString()}
                </div>
              </div>
              <button onClick={() => onBook(p)} style={{
                background: p.tagColor, border: "none",
                color: "#0A0A0A", padding: "10px 22px",
                borderRadius: 4, cursor: "pointer",
                fontSize: 12, fontWeight: 700,
                letterSpacing: "0.06em", fontFamily: "inherit",
              }}>
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Proposal Generator — FIX #1: working download */}
      <div style={{
        marginTop: 48, background: "rgba(200,169,110,0.06)",
        border: "1px solid rgba(200,169,110,0.2)",
        borderRadius: 8, padding: 36,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 20,
      }}>
        <div>
          <div style={{ fontSize: 11, color: "#C8A96E", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 8 }}>Procurement Ready</div>
          <h3 style={{ fontSize: 22, fontWeight: 700, color: "#EDE8DF", marginBottom: 8 }}>Generate a Custom B-BBEE Proposal</h3>
          <p style={{ fontSize: 14, color: "#666", maxWidth: 480 }}>
            Branded proposal for your procurement or CSI team — includes programme details, B-BBEE scoring breakdown, and facilitator credentials.
          </p>
        </div>
        <button
          onClick={() => downloadHTML(generateProposalHTML(), "ED_SD_Proposal.html")}
          style={{
            background: "transparent", border: "1px solid #C8A96E",
            color: "#C8A96E", padding: "12px 28px",
            borderRadius: 4, cursor: "pointer",
            fontSize: 12, fontWeight: 700,
            letterSpacing: "0.08em", fontFamily: "inherit",
            whiteSpace: "nowrap",
          }}
        >
          ↓ Generate Proposal
        </button>
      </div>
    </div>
  );
}

// ─── DASHBOARD (FIX #2: example data + add cohort form) ──────────────────────

function DashboardView() {
  const [cohorts, setCohorts] = useState(EXAMPLE_COHORTS);
  const [showForm, setShowForm] = useState(false);
  const [newCohort, setNewCohort] = useState({
    company: "", programme: "Foundation Builder", participants: "", started: "", progress: 0, status: "active", spend: 55000,
  });

  const totalSpend = cohorts.reduce((s, c) => s + c.spend, 0);
  const active = cohorts.filter(c => c.status === "active").length;
  const totalParticipants = cohorts.reduce((s, c) => s + c.participants, 0);

  const addCohort = () => {
    if (!newCohort.company) return;
    setCohorts(prev => [...prev, {
      ...newCohort,
      id: prev.length + 1,
      participants: parseInt(newCohort.participants) || 0,
    }]);
    setNewCohort({ company: "", programme: "Foundation Builder", participants: "", started: "", progress: 0, status: "active", spend: 55000 });
    setShowForm(false);
  };

  const inputStyle = {
    width: "100%", background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)", borderRadius: 4,
    padding: "9px 12px", color: "#CCC", fontSize: 13,
    fontFamily: "inherit", boxSizing: "border-box", outline: "none",
  };

  return (
    <div>
      <div style={{ marginBottom: 36, display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
        <div>
          <div style={{ fontSize: 11, color: "#7EB8A4", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 10 }}>Live Overview</div>
          <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em", color: "#EDE8DF" }}>Cohort Dashboard</h2>
        </div>
        <button
          onClick={() => setShowForm(f => !f)}
          style={{
            background: showForm ? "rgba(126,184,164,0.15)" : "rgba(255,255,255,0.04)",
            border: "1px solid rgba(126,184,164,0.3)", color: "#7EB8A4",
            padding: "10px 22px", borderRadius: 4, cursor: "pointer",
            fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", fontFamily: "inherit",
          }}
        >
          {showForm ? "✕ Cancel" : "+ Add Cohort"}
        </button>
      </div>

      {/* Add Cohort Form */}
      {showForm && (
        <div style={{
          background: "rgba(126,184,164,0.05)", border: "1px solid rgba(126,184,164,0.2)",
          borderRadius: 8, padding: 28, marginBottom: 32,
        }}>
          <div style={{ fontSize: 11, color: "#7EB8A4", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 20 }}>New Cohort</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 16, marginBottom: 20 }}>
            <div>
              <label style={{ fontSize: 10, color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Company Name</label>
              <input style={inputStyle} placeholder="e.g. Absa Group" value={newCohort.company}
                onChange={e => setNewCohort(p => ({ ...p, company: e.target.value }))}
                onFocus={e => e.target.style.borderColor = "#7EB8A4"} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
            </div>
            <div>
              <label style={{ fontSize: 10, color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Programme</label>
              <select style={{ ...inputStyle, appearance: "none" }} value={newCohort.programme}
                onChange={e => {
                  const p = PROGRAMMES.find(pr => pr.name === e.target.value);
                  setNewCohort(prev => ({ ...prev, programme: e.target.value, spend: p?.price || 55000 }));
                }}
                onFocus={e => e.target.style.borderColor = "#7EB8A4"} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}>
                {PROGRAMMES.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
              </select>
            </div>
            <div>
              <label style={{ fontSize: 10, color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>No. of Participants</label>
              <input style={inputStyle} type="number" placeholder="e.g. 8" value={newCohort.participants}
                onChange={e => setNewCohort(p => ({ ...p, participants: e.target.value }))}
                onFocus={e => e.target.style.borderColor = "#7EB8A4"} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
            </div>
            <div>
              <label style={{ fontSize: 10, color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Start Month</label>
              <input style={inputStyle} placeholder="e.g. Apr 2025" value={newCohort.started}
                onChange={e => setNewCohort(p => ({ ...p, started: e.target.value }))}
                onFocus={e => e.target.style.borderColor = "#7EB8A4"} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
            </div>
            <div>
              <label style={{ fontSize: 10, color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Progress %</label>
              <input style={inputStyle} type="number" min="0" max="100" placeholder="0–100" value={newCohort.progress}
                onChange={e => setNewCohort(p => ({ ...p, progress: parseInt(e.target.value) || 0 }))}
                onFocus={e => e.target.style.borderColor = "#7EB8A4"} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
            </div>
            <div>
              <label style={{ fontSize: 10, color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 6 }}>Status</label>
              <select style={{ ...inputStyle, appearance: "none" }} value={newCohort.status}
                onChange={e => setNewCohort(p => ({ ...p, status: e.target.value }))}
                onFocus={e => e.target.style.borderColor = "#7EB8A4"} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
          <button onClick={addCohort} style={{
            background: "#7EB8A4", border: "none", color: "#0A0A0A",
            padding: "10px 28px", borderRadius: 4, cursor: "pointer",
            fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", fontFamily: "inherit",
          }}>Add to Dashboard</button>
        </div>
      )}

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16, marginBottom: 40 }}>
        <StatCard label="Total ED & SD Spend" value={`R${(totalSpend / 1000).toFixed(0)}k`} sub="Across all cohorts" accent="#C8A96E" />
        <StatCard label="Active Cohorts" value={active} sub="Currently running" accent="#7EB8A4" />
        <StatCard label="Total Suppliers" value={totalParticipants} sub="Suppliers enrolled" accent="#E07B5A" />
        <StatCard label="B-BBEE Points" value="24" sub="Estimated this cycle" accent="#9B7EC8" />
      </div>

      {/* Spend Bar Chart */}
      <div style={{
        background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 8, padding: 28, marginBottom: 32,
      }}>
        <div style={{ fontSize: 11, color: "#555", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>Monthly ED & SD Spend (R'000)</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 12, height: 100 }}>
          {BBEE_SPEND.map(({ month, amount }) => {
            const max = 145;
            const h = (amount / max) * 100;
            return (
              <div key={month} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <div style={{ fontSize: 10, color: "#666" }}>{amount > 0 ? `R${amount}k` : "—"}</div>
                <div style={{
                  width: "100%", height: `${h}%`, minHeight: amount > 0 ? 4 : 0,
                  background: amount > 0 ? "linear-gradient(180deg, #C8A96E, #A07840)" : "transparent",
                  borderRadius: "3px 3px 0 0", transition: "height 0.5s ease",
                }} />
                <div style={{ fontSize: 10, color: "#444" }}>{month}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cohort Table */}
      <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8, overflow: "hidden" }}>
        <div style={{ padding: "20px 28px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 11, color: "#555", letterSpacing: "0.12em", textTransform: "uppercase" }}>Active & Completed Cohorts</div>
          <div style={{ fontSize: 11, color: "#444", fontStyle: "italic" }}>Example data shown — add your own cohorts above</div>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              {["Corporate Client", "Programme", "Suppliers", "Progress", "ED & SD Spend", "Status"].map(h => (
                <th key={h} style={{ padding: "12px 20px", textAlign: "left", fontSize: 10, color: "#444", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cohorts.map((c, i) => (
              <tr key={c.id} style={{
                borderBottom: i < cohorts.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                transition: "background 0.15s",
              }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.02)"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                <td style={{ padding: "16px 20px", fontSize: 14, color: "#CCC", fontWeight: 600 }}>{c.company}</td>
                <td style={{ padding: "16px 20px", fontSize: 13, color: "#777" }}>{c.programme}</td>
                <td style={{ padding: "16px 20px", fontSize: 13, color: "#777" }}>{c.participants}</td>
                <td style={{ padding: "16px 20px", minWidth: 140 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ flex: 1 }}>
                      <ProgressBar pct={c.progress} color={c.progress === 100 ? "#7EB8A4" : "#C8A96E"} />
                    </div>
                    <span style={{ fontSize: 11, color: "#555", minWidth: 32 }}>{c.progress}%</span>
                  </div>
                </td>
                <td style={{ padding: "16px 20px", fontSize: 13, color: "#C8A96E", fontWeight: 600 }}>R{c.spend.toLocaleString()}</td>
                <td style={{ padding: "16px 20px" }}>
                  <span style={{
                    fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase",
                    padding: "3px 10px", borderRadius: 3, fontWeight: 700,
                    background: c.status === "completed" ? "rgba(126,184,164,0.15)" : "rgba(200,169,110,0.15)",
                    color: c.status === "completed" ? "#7EB8A4" : "#C8A96E",
                    border: `1px solid ${c.status === "completed" ? "rgba(126,184,164,0.3)" : "rgba(200,169,110,0.3)"}`,
                  }}>
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── REPORTING (FIX #3: working download) ────────────────────────────────────

function ReportingView() {
  const [generated, setGenerated] = useState(false);

  return (
    <div>
      <div style={{ marginBottom: 36 }}>
        <div style={{ fontSize: 11, color: "#9B7EC8", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 10 }}>Compliance Documentation</div>
        <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em", color: "#EDE8DF", marginBottom: 12 }}>B-BBEE ED & SD Reporting</h2>
        <p style={{ fontSize: 15, color: "#666", maxWidth: 560, lineHeight: 1.7 }}>
          Generate verifiable compliance reports for your B-BBEE verification agency. All reports are aligned to the Amended Codes of Good Practice, Element 3: Enterprise & Supplier Development.
        </p>
      </div>

      {/* Report Builder */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 32 }}>
        {[
          { label: "Company Name", placeholder: "e.g. Nedbank Limited", type: "text" },
          { label: "Financial Year End", placeholder: "e.g. December 2025", type: "text" },
          { label: "B-BBEE Level", placeholder: "e.g. Level 2", type: "text" },
          { label: "Sector Code", placeholder: "e.g. Financial Sector Charter", type: "text" },
        ].map(f => (
          <div key={f.label}>
            <label style={{ fontSize: 11, color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>{f.label}</label>
            <input type={f.type} placeholder={f.placeholder} style={{
              width: "100%", background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 4, padding: "11px 16px",
              color: "#CCC", fontSize: 14, fontFamily: "inherit",
              boxSizing: "border-box", outline: "none",
            }}
              onFocus={e => e.target.style.borderColor = "#9B7EC8"}
              onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
            />
          </div>
        ))}
      </div>

      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 11, color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Include in Report</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {[
            "Participant Attendance Register",
            "Module Completion Certificates",
            "Facilitator Credentials & CV",
            "Programme Outcomes Summary",
            "B-BBEE Spend Breakdown",
            "Signed Attendance Declarations",
          ].map(item => (
            <label key={item} style={{
              display: "flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 4, padding: "8px 14px", cursor: "pointer",
              fontSize: 13, color: "#888",
            }}>
              <input type="checkbox" defaultChecked style={{ accentColor: "#9B7EC8" }} />
              {item}
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={() => setGenerated(true)}
        style={{
          background: "#9B7EC8", border: "none",
          color: "#0A0A0A", padding: "13px 32px",
          borderRadius: 4, cursor: "pointer",
          fontSize: 13, fontWeight: 700,
          letterSpacing: "0.08em", fontFamily: "inherit",
          marginBottom: 28,
        }}>
        Generate Compliance Report
      </button>

      {generated && (
        <div style={{
          background: "rgba(155,126,200,0.08)", border: "1px solid rgba(155,126,200,0.25)",
          borderRadius: 8, padding: 28,
          animation: "fadeIn 0.4s ease",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ fontSize: 12, color: "#9B7EC8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>✓ Report Ready</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#EDE8DF", marginBottom: 4 }}>B-BBEE ED & SD Compliance Report — FY2025</div>
              <div style={{ fontSize: 13, color: "#666" }}>Generated by ED + SD · Facilitator: Innocentia Nhlapho · 6 attachments included</div>
            </div>
            <button
              style={{
                background: "transparent", border: "1px solid #9B7EC8",
                color: "#9B7EC8", padding: "10px 22px",
                borderRadius: 4, cursor: "pointer",
                fontSize: 12, fontWeight: 700,
                letterSpacing: "0.06em", fontFamily: "inherit",
              }}
              onClick={() => downloadHTML(generateReportHTML(EXAMPLE_COHORTS), "ED_SD_BBBEE_Report_FY2025.html")}
            >
              ↓ Download Report
            </button>
          </div>
          <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12 }}>
            {[["Total ED & SD Spend", "R350,000"], ["Participants", "70"], ["Programmes", "4"], ["Points Claimed", "24"], ["Verification Status", "Pending"]].map(([k, v]) => (
              <div key={k} style={{ background: "rgba(255,255,255,0.03)", borderRadius: 4, padding: "12px 16px" }}>
                <div style={{ fontSize: 9, color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>{k}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#9B7EC8" }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      <style>{`@keyframes fadeIn { from { opacity:0; transform: translateY(8px); } to { opacity:1; transform: translateY(0); } }`}</style>
    </div>
  );
}

// ─── BOOKING ─────────────────────────────────────────────────────────────────

function BookingView({ selectedProgramme, onClose }) {
  const [step, setStep] = useState(1);
  const [confirmed, setConfirmed] = useState(false);
  const [form, setForm] = useState({
    company: "", contact: "", email: "", phone: "",
    programme: selectedProgramme?.id || "",
    participants: "", startDate: "", po: "",
  });

  const update = (key, val) => setForm(f => ({ ...f, [key]: val }));
  const prog = PROGRAMMES.find(p => p.id === form.programme) || selectedProgramme;

  const calcTotal = () => {
    if (!prog) return 0;
    const n = parseInt(form.participants) || 0;
    if (n <= prog.maxParticipants) return prog.price;
    return prog.price + (n - prog.maxParticipants) * prog.perExtraParticipant;
  };
  const total = calcTotal();
  const extraParticipants = Math.max(0, (parseInt(form.participants) || 0) - (prog?.maxParticipants || 0));

  const inputStyle = {
    width: "100%", background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 4, padding: "11px 16px",
    color: "#CCC", fontSize: 14, fontFamily: "inherit",
    boxSizing: "border-box", outline: "none",
  };
  const labelStyle = {
    fontSize: 11, color: "#555", letterSpacing: "0.1em",
    textTransform: "uppercase", display: "block", marginBottom: 8,
  };

  return (
    <div>
      <div style={{ marginBottom: 36 }}>
        <div style={{ fontSize: 11, color: "#E07B5A", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 10 }}>Corporate Enrolment</div>
        <h2 style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-0.02em", color: "#EDE8DF" }}>Book a Programme</h2>
      </div>

      {!confirmed && (
        <div style={{ display: "flex", gap: 0, marginBottom: 40, borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 0 }}>
          {["Company Details", "Programme & Dates", "Payment"].map((s, i) => (
            <button key={s} onClick={() => step > i + 1 && setStep(i + 1)} style={{
              background: "none", border: "none", cursor: step > i + 1 ? "pointer" : "default",
              padding: "0 0 16px 0", marginRight: 40,
              borderBottom: step === i + 1 ? "2px solid #E07B5A" : "2px solid transparent",
              color: step === i + 1 ? "#E07B5A" : step > i + 1 ? "#888" : "#444",
              fontSize: 13, fontWeight: step === i + 1 ? 700 : 400,
              letterSpacing: "0.04em", fontFamily: "inherit", transition: "color 0.2s",
            }}>
              <span style={{ marginRight: 8, fontSize: 11 }}>{i + 1}.</span>{s}
            </button>
          ))}
        </div>
      )}

      {!confirmed && step === 1 && (
        <div style={{ maxWidth: 560 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
            <div style={{ gridColumn: "1/-1" }}>
              <label style={labelStyle}>Company / Organisation Name</label>
              <input style={inputStyle} placeholder="e.g. Sasol SOC Limited" value={form.company} onChange={e => update("company", e.target.value)}
                onFocus={e => e.target.style.borderColor = "#E07B5A"} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
            </div>
            <div>
              <label style={labelStyle}>Contact Person</label>
              <input style={inputStyle} placeholder="Full name" value={form.contact} onChange={e => update("contact", e.target.value)}
                onFocus={e => e.target.style.borderColor = "#E07B5A"} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
            </div>
            <div>
              <label style={labelStyle}>Email Address</label>
              <input style={inputStyle} placeholder="ed@company.co.za" value={form.email} onChange={e => update("email", e.target.value)}
                onFocus={e => e.target.style.borderColor = "#E07B5A"} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
            </div>
            <div>
              <label style={labelStyle}>Phone Number</label>
              <input style={inputStyle} placeholder="+27 11 000 0000" value={form.phone} onChange={e => update("phone", e.target.value)}
                onFocus={e => e.target.style.borderColor = "#E07B5A"} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
            </div>
          </div>
          <button onClick={() => setStep(2)} style={{
            background: "#E07B5A", border: "none", color: "#0A0A0A",
            padding: "12px 32px", borderRadius: 4, cursor: "pointer",
            fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", fontFamily: "inherit",
          }}>Continue →</button>
        </div>
      )}

      {!confirmed && step === 2 && (
        <div style={{ maxWidth: 560 }}>
          <div style={{ display: "grid", gap: 20, marginBottom: 20 }}>
            <div>
              <label style={labelStyle}>Select Programme</label>
              <select style={{ ...inputStyle, appearance: "none" }} value={form.programme} onChange={e => update("programme", e.target.value)}
                onFocus={e => e.target.style.borderColor = "#E07B5A"} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}>
                <option value="">Choose a programme...</option>
                {PROGRAMMES.map(p => <option key={p.id} value={p.id}>{p.name} — R{p.price.toLocaleString()}</option>)}
              </select>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <div>
                <label style={labelStyle}>Number of Participants</label>
                <input style={inputStyle} type="number" placeholder="e.g. 8" value={form.participants} onChange={e => update("participants", e.target.value)}
                  onFocus={e => e.target.style.borderColor = "#E07B5A"} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
              </div>
              <div>
                <label style={labelStyle}>Preferred Start Date</label>
                <input style={inputStyle} type="date" value={form.startDate} onChange={e => update("startDate", e.target.value)}
                  onFocus={e => e.target.style.borderColor = "#E07B5A"} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
              </div>
            </div>
          </div>
          {prog && (
            <div style={{ background: "rgba(224,123,90,0.08)", border: "1px solid rgba(224,123,90,0.2)", borderRadius: 6, padding: 20, marginBottom: 24 }}>
              <div style={{ fontSize: 12, color: "#E07B5A", marginBottom: 6, fontWeight: 700 }}>{prog.name}</div>
              <div style={{ fontSize: 13, color: "#777", marginBottom: 8 }}>{prog.duration} · {prog.participants} · {prog.bbeePoints}</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 13, color: "#888" }}>Estimated Total</span>
                <span style={{ fontSize: 18, color: "#E07B5A", fontWeight: 700 }}>R{total.toLocaleString()}</span>
              </div>
              {extraParticipants > 0 && (
                <div style={{ fontSize: 12, color: "#C8A96E", marginTop: 4 }}>
                  Includes {extraParticipants} additional participant{extraParticipants > 1 ? "s" : ""} × R{prog.perExtraParticipant.toLocaleString()}
                </div>
              )}
            </div>
          )}
          <div style={{ display: "flex", gap: 12 }}>
            <button onClick={() => setStep(1)} style={{
              background: "transparent", border: "1px solid rgba(255,255,255,0.1)", color: "#666",
              padding: "12px 24px", borderRadius: 4, cursor: "pointer", fontSize: 13, fontFamily: "inherit",
            }}>← Back</button>
            <button onClick={() => setStep(3)} style={{
              background: "#E07B5A", border: "none", color: "#0A0A0A",
              padding: "12px 32px", borderRadius: 4, cursor: "pointer",
              fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", fontFamily: "inherit",
            }}>Continue →</button>
          </div>
        </div>
      )}

      {!confirmed && step === 3 && (
        <div style={{ maxWidth: 560 }}>
          <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 8, padding: 28, marginBottom: 24 }}>
            <div style={{ fontSize: 11, color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Order Summary</div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ fontSize: 14, color: "#888" }}>{prog?.name} (up to {prog?.maxParticipants} participants)</span>
              <span style={{ fontSize: 14, color: "#CCC", fontWeight: 600 }}>R{prog?.price.toLocaleString()}</span>
            </div>
            {extraParticipants > 0 && (
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                <span style={{ fontSize: 14, color: "#E07B5A" }}>{extraParticipants} additional × R{prog?.perExtraParticipant.toLocaleString()}</span>
                <span style={{ fontSize: 14, color: "#E07B5A", fontWeight: 600 }}>R{(extraParticipants * prog?.perExtraParticipant).toLocaleString()}</span>
              </div>
            )}
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ fontSize: 14, color: "#888" }}>Company</span>
              <span style={{ fontSize: 14, color: "#CCC" }}>{form.company || "—"}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ fontSize: 14, color: "#888" }}>Participants</span>
              <span style={{ fontSize: 14, color: "#CCC" }}>{form.participants || "—"}</span>
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 16, display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 16, color: "#EDE8DF", fontWeight: 700 }}>Total</span>
              <span style={{ fontSize: 24, color: "#E07B5A", fontWeight: 700 }}>R{total.toLocaleString()}</span>
            </div>
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={labelStyle}>Purchase Order Number (Optional)</label>
            <input style={inputStyle} placeholder="PO-2025-XXXX" value={form.po} onChange={e => update("po", e.target.value)}
              onFocus={e => e.target.style.borderColor = "#E07B5A"} onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"} />
          </div>
          <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
            {["EFT / Bank Transfer", "Credit Card", "Invoice (30 days)"].map(m => (
              <label key={m} style={{
                display: "flex", alignItems: "center", gap: 8,
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 4, padding: "10px 16px", cursor: "pointer", fontSize: 13, color: "#888",
              }}>
                <input type="radio" name="payment" style={{ accentColor: "#E07B5A" }} />
                {m}
              </label>
            ))}
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <button onClick={() => setStep(2)} style={{
              background: "transparent", border: "1px solid rgba(255,255,255,0.1)", color: "#666",
              padding: "12px 24px", borderRadius: 4, cursor: "pointer", fontSize: 13, fontFamily: "inherit",
            }}>← Back</button>
            <button onClick={() => setConfirmed(true)} style={{
              background: "#E07B5A", border: "none", color: "#0A0A0A",
              padding: "12px 32px", borderRadius: 4, cursor: "pointer",
              fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", fontFamily: "inherit",
            }}>Confirm Booking</button>
          </div>
          <p style={{ fontSize: 11, color: "#444", marginTop: 16 }}>
            All bookings are subject to a signed Service Level Agreement. Invoice issued within 24 hours. B-BBEE compliance documentation provided on programme completion.
          </p>
        </div>
      )}

      {confirmed && (
        <div style={{ maxWidth: 560, textAlign: "center", padding: "40px 20px" }}>
          <div style={{ fontSize: 48, marginBottom: 20 }}>✅</div>
          <div style={{ fontSize: 22, color: "#E07B5A", fontWeight: 700, marginBottom: 12 }}>Booking Confirmed</div>
          <div style={{ fontSize: 15, color: "#CCC", marginBottom: 8 }}>
            Thank you, <strong style={{ color: "#EDE8DF" }}>{form.company || "your company"}</strong>.
          </div>
          <div style={{ fontSize: 14, color: "#888", lineHeight: 1.7, marginBottom: 28 }}>
            Your booking for the <strong style={{ color: "#C8A96E" }}>{prog?.name}</strong> programme has been received.<br />
            An invoice will be emailed to <strong style={{ color: "#EDE8DF" }}>{form.email || "your email address"}</strong>.<br />
            An ED + SD coordinator will be in touch within 24 hours.
          </div>
          <div style={{
            background: "rgba(200,169,110,0.08)", border: "1px solid rgba(200,169,110,0.2)",
            borderRadius: 8, padding: "20px 24px", marginBottom: 28, textAlign: "left",
          }}>
            <div style={{ fontSize: 11, color: "#C8A96E", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Booking Summary</div>
            {[
              ["Programme", prog?.name],
              ["Duration", prog?.duration],
              ["Participants", form.participants || "—"],
              ["Contact", form.contact || "—"],
              ["Email", form.email || "—"],
              ["Amount", `R${total.toLocaleString()}`],
              ["B-BBEE Points", prog?.bbeePoints],
            ].map(([label, value]) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: 13, color: "#666" }}>{label}</span>
                <span style={{ fontSize: 13, color: "#CCC", fontWeight: 600 }}>{value}</span>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 12, color: "#444", marginBottom: 28 }}>
            Reference: TE-{new Date().getFullYear()}-{Math.floor(Math.random() * 9000) + 1000}
          </div>
          <button onClick={() => { setConfirmed(false); setStep(1); }} style={{
            background: "transparent", border: "1px solid rgba(255,255,255,0.15)", color: "#888",
            padding: "10px 28px", borderRadius: 4, cursor: "pointer", fontSize: 13, fontFamily: "inherit",
          }}>Make Another Booking</button>
        </div>
      )}
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────

export default function TransformElevateCorporate() {
  const [view, setView] = useState("programmes");
  const [bookingProg, setBookingProg] = useState(null);

  const handleBook = (prog) => {
    setBookingProg(prog);
    setView("booking");
  };

  const NAV = [
    { id: "programmes", label: "Programmes", dot: "#C8A96E" },
    { id: "calculator", label: "SDL Value Calculator", dot: "#7EB8A4" },
    { id: "dashboard", label: "Cohort Dashboard", dot: "#7EB8A4" },
    { id: "reporting", label: "B-BBEE Reporting", dot: "#9B7EC8" },
    { id: "booking", label: "Book a Programme", dot: "#E07B5A" },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0A0A0A",
      fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif",
      color: "#EDE8DF",
    }}>
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse at 10% 30%, rgba(200,169,110,0.04) 0%, transparent 55%), radial-gradient(ellipse at 90% 70%, rgba(155,126,200,0.03) 0%, transparent 50%)",
      }} />

      {/* Sidebar */}
      <div style={{
        position: "fixed", left: 0, top: 0, bottom: 0, width: 240,
        background: "rgba(10,10,10,0.98)",
        borderRight: "1px solid rgba(255,255,255,0.06)",
        display: "flex", flexDirection: "column",
        padding: "32px 0", zIndex: 10,
      }}>
        <div style={{ padding: "0 28px 32px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#C8A96E", letterSpacing: "-0.01em", marginBottom: 4 }}>ED + SD</div>
          <div style={{ fontSize: 10, color: "#444", letterSpacing: "0.12em", textTransform: "uppercase" }}>Corporate Platform</div>
        </div>

        <nav style={{ flex: 1, padding: "24px 0" }}>
          {NAV.map(n => (
            <button key={n.id} onClick={() => setView(n.id)} style={{
              width: "100%", background: view === n.id ? "rgba(255,255,255,0.05)" : "none",
              border: "none", borderLeft: view === n.id ? `2px solid ${n.dot}` : "2px solid transparent",
              color: view === n.id ? "#EDE8DF" : "#555",
              padding: "12px 28px", cursor: "pointer", textAlign: "left",
              fontSize: 13, fontFamily: "inherit",
              letterSpacing: "0.02em", fontWeight: view === n.id ? 600 : 400,
              transition: "all 0.15s", display: "flex", alignItems: "center", gap: 12,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: view === n.id ? n.dot : "#333", flexShrink: 0 }} />
              {n.label}
            </button>
          ))}
        </nav>

        <div style={{ padding: "24px 28px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ fontSize: 11, color: "#C8A96E", marginBottom: 4, fontWeight: 600 }}>Innocentia Nhlapho</div>
          <div style={{ fontSize: 10, color: "#444", lineHeight: 1.6 }}>PhD Candidate · MBL · BScAccFin<br />20+ years executive experience</div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ marginLeft: 240, padding: "48px 56px", position: "relative", zIndex: 1, minHeight: "100vh" }}>
        {view === "programmes" && <ProgrammesView onBook={handleBook} />}
        {view === "calculator" && <SDLCalculatorView onBook={handleBook} />}
        {view === "dashboard" && <DashboardView />}
        {view === "reporting" && <ReportingView />}
        {view === "booking" && <BookingView selectedProgramme={bookingProg} />}
      </div>
    </div>
  );
}
