/* ============================================================
   Sinyaller ve Sistemler — Final çalışma aracı
   Veri + etkileşim. Tüm matematik MathJax ($...$) ile render edilir.
   ============================================================ */

/* ---------- ÇÖZÜMLÜ ÖRNEKLER ---------- */
const ORNEKLER = [
{
  id:'o1', tag:'ayrik', pill:'fou', pillTxt:'Fark Denklemi',
  title:'Fark denkleminden H(e^{jω}), h[n] ve çıkış',
  problem:`Ayrık-zamanlı LTI sistem: $y[n]-0.2\\,y[n-1]=x[n]-0.5\\,x[n-1]+0.1\\,x[n-2]$.<br>
  (a) $H(e^{j\\omega})$, (b) $h[n]$, (c) $x[n]=\\left(\\tfrac12\\right)^n u[n]$ için $y[n]$ bulun.`,
  solution:`
  <div class="step"><b>(a) DTFT al.</b> Her $y[n-k]\\to e^{-jk\\omega}Y$, her $x[n-k]\\to e^{-jk\\omega}X$:
  $$Y(1-0.2e^{-j\\omega})=X(1-0.5e^{-j\\omega}+0.1e^{-2j\\omega})$$
  $$H(e^{j\\omega})=\\frac{1-0.5e^{-j\\omega}+0.1e^{-2j\\omega}}{1-0.2e^{-j\\omega}}$$
  Payı paydaya bölünebilir terimlere ayır:
  $$H=\\frac{1}{1-0.2e^{-j\\omega}}+\\frac{-0.5e^{-j\\omega}}{1-0.2e^{-j\\omega}}+\\frac{0.1e^{-2j\\omega}}{1-0.2e^{-j\\omega}}$$</div>
  <div class="step"><b>(b) Ters DTFT.</b> $a^n u[n]\\leftrightarrow\\frac{1}{1-ae^{-j\\omega}}$ ve zaman kayması ile:
  $$h[n]=(0.2)^n u[n]-0.5(0.2)^{n-1}u[n-1]+0.1(0.2)^{n-2}u[n-2]$$</div>
  <div class="step"><b>(c) Çıkış.</b> $X=\\frac{1}{1-0.5e^{-j\\omega}}$, $Y=HX$. Kısmi kesir sonrası:
  $$y[n]=(0.2)^n u[n]-\\tfrac{5}{3}(0.2)^n u[n-2]+\\tfrac{2}{3}(0.5)^n u[n-2]$$
  (Konvolüsyonla da aynı sonuç çıkar.)</div>`
},
{
  id:'o2', tag:'ayrik', pill:'fou', pillTxt:'Fark Denklemi',
  title:'İkinci mertebe fark denklemi → h[n]',
  problem:`$y[n]-\\tfrac34 y[n-1]+\\tfrac18 y[n-2]=x[n]$.<br>(a) $H(e^{j\\omega})$, (b) $h[n]$ bulun.`,
  solution:`
  <div class="step"><b>(a)</b> DTFT:
  $$\\left(1-\\tfrac34 e^{-j\\omega}+\\tfrac18 e^{-2j\\omega}\\right)Y=X$$
  $$H=\\frac{1}{1-\\tfrac34 e^{-j\\omega}+\\tfrac18 e^{-2j\\omega}}=\\frac{1}{\\left(1-\\tfrac12 e^{-j\\omega}\\right)\\left(1-\\tfrac14 e^{-j\\omega}\\right)}$$</div>
  <div class="step"><b>(b)</b> Kısmi kesir:
  $$H=\\frac{2}{1-\\tfrac12 e^{-j\\omega}}-\\frac{1}{1-\\tfrac14 e^{-j\\omega}}$$
  Ters DTFT:
  $$h[n]=\\left[2\\left(\\tfrac12\\right)^n-\\left(\\tfrac14\\right)^n\\right]u[n]$$</div>
  <div class="note small">Paydayı çarpanlara ayırma ipucu: $1-\\tfrac34 r+\\tfrac18 r^2=(1-\\tfrac12 r)(1-\\tfrac14 r)$, $r=e^{-j\\omega}$.</div>`
},
{
  id:'o3', tag:'lap', pill:'lap', pillTxt:'Ters Laplace',
  title:'Ters Laplace: çift kutuplu, ROC bağımlı',
  problem:`$X(s)=\\dfrac{1}{s(s+1)^2}$ için $x(t)$ bulun. ROC: $\\mathrm{Re}(s)>-1$ (ve diğer ROC'larda nasıl değişir?).`,
  solution:`
  <div class="step"><b>Kısmi kesir.</b> $\\dfrac{1}{s(s+1)^2}=\\dfrac{A}{s}+\\dfrac{B}{s+1}+\\dfrac{C}{(s+1)^2}$.<br>
  $A=1,\\ C=-1,\\ B=-1$:
  $$X(s)=\\frac{1}{s}-\\frac{1}{s+1}-\\frac{1}{(s+1)^2}$$</div>
  <div class="step"><b>ROC $\\mathrm{Re}(s)>-1$ (sağ taraflı, nedensel):</b>
  $$x(t)=(1-e^{-t}-t e^{-t})u(t)$$</div>
  <div class="step"><b>Diğer ROC'lar:</b>
  <ul class="small">
   <li>$-1<\\mathrm{Re}(s)<0$: $\\ x(t)=-u(-t)-(1+t)e^{-t}u(t)$</li>
   <li>$\\mathrm{Re}(s)<-1$ (sol taraflı): $\\ x(t)=(-1+e^{-t}+te^{-t})u(-t)$</li>
  </ul>
  Kutbun sağındaki terim → $u(t)$, solundaki → $-u(-t)$.</div>
  <div class="note small">$\\dfrac{1}{(s+1)^2}\\leftrightarrow te^{-t}u(t)$ (sağ taraflı). Tablo: $t e^{at}\\leftrightarrow \\frac{1}{(s-a)^2}$.</div>`
},
{
  id:'o4', tag:'z', pill:'z', pillTxt:'Z + Kutup-Sıfır',
  title:'Z-dönüşümü, ROC ve kutup-sıfır diyagramı',
  problem:`$x[n]=\\left(\\tfrac12\\right)^n u[n]+\\left(\\tfrac13\\right)^n u[n]$ için $X(z)$, ROC ve kutup-sıfırları bulun.`,
  solution:`
  <div class="step"><b>Tablodan.</b> $\\left(\\tfrac12\\right)^n u[n]\\leftrightarrow\\dfrac{z}{z-\\tfrac12},\\ |z|>\\tfrac12$ ve $\\left(\\tfrac13\\right)^n u[n]\\leftrightarrow\\dfrac{z}{z-\\tfrac13},\\ |z|>\\tfrac13$.</div>
  <div class="step"><b>Topla (ROC = kesişim $|z|>\\tfrac12$):</b>
  $$X(z)=\\frac{z}{z-\\tfrac12}+\\frac{z}{z-\\tfrac13}=\\frac{2z\\left(z-\\tfrac{5}{12}\\right)}{\\left(z-\\tfrac12\\right)\\left(z-\\tfrac13\\right)}$$</div>
  <div class="step"><b>Kutup-sıfır.</b> Sıfırlar: $z=0$ ve $z=\\tfrac{5}{12}$. Kutuplar: $z=\\tfrac12,\\ z=\\tfrac13$. ROC: $|z|>\\tfrac12$ (en büyük kutbun dışı → sağ taraflı, nedensel).</div>
  <div class="note small"><b>Çizim:</b> birim çember çiz; kutupları ×, sıfırları ○ ile işaretle; ROC'u (en dış kutbun dışındaki bölge) tara.</div>`
},
{
  id:'o5', tag:'lap', pill:'lap', pillTxt:'Laplace Sistem',
  title:'Giriş-çıkıştan sistem fonksiyonu ve yeni çıkış',
  problem:`Bir CT LTI sistemde $x(t)=u(t)$ iken $y(t)=2e^{-3t}u(t)$.<br>(a) $h(t)$, (b) $x(t)=e^{-t}u(t)$ için $y(t)$.`,
  solution:`
  <div class="step"><b>(a)</b> $X(s)=\\frac1s,\\ Y(s)=\\frac{2}{s+3}$.
  $$H(s)=\\frac{Y}{X}=\\frac{2s}{s+3}=2-\\frac{6}{s+3}$$
  Ters Laplace: $\\;h(t)=2\\delta(t)-6e^{-3t}u(t)$.</div>
  <div class="step"><b>(b)</b> $X(s)=\\frac{1}{s+1}$:
  $$Y=XH=\\frac{2s}{(s+1)(s+3)}=-\\frac{1}{s+1}+\\frac{3}{s+3}$$
  $$y(t)=(-e^{-t}+3e^{-3t})u(t)$$</div>`
},
{
  id:'o6', tag:'lap', pill:'lap', pillTxt:'Ters Laplace',
  title:'Ters Laplace: karmaşık kutuplar (kareye tamamlama)',
  problem:`$X(s)=\\dfrac{5s+13}{s(s^2+4s+13)},\\ \\mathrm{Re}(s)>0$ için $x(t)$ bulun.`,
  solution:`
  <div class="step"><b>Kısmi kesir.</b> $X=\\dfrac{c_1}{s}+\\dfrac{c_2 s+c_3}{s^2+4s+13}$. $c_1=sX|_{s=0}=\\frac{13}{13}=1$.
  $$\\frac{c_2 s+c_3}{s^2+4s+13}=\\frac{5s+13}{s(s^2+4s+13)}-\\frac1s=\\frac{-s+1}{s^2+4s+13}$$</div>
  <div class="step"><b>Kareye tamamla.</b> $s^2+4s+13=(s+2)^2+3^2$:
  $$X=\\frac1s-\\frac{s+2}{(s+2)^2+3^2}+\\frac{3}{(s+2)^2+3^2}$$</div>
  <div class="step"><b>Tablodan.</b> $\\frac{s+2}{(s+2)^2+3^2}\\to e^{-2t}\\cos3t$, $\\frac{3}{(s+2)^2+3^2}\\to e^{-2t}\\sin3t$:
  $$x(t)=\\big[1-e^{-2t}(\\cos3t-\\sin3t)\\big]u(t)$$</div>`
},
{
  id:'o7', tag:'z', pill:'z', pillTxt:'Ters Z',
  title:'Ters Z-dönüşümü (zaman kayması ile)',
  problem:`$X(z)=\\dfrac{3}{z-2},\\ |z|>2$ için $x[n]$ bulun.`,
  solution:`
  <div class="step"><b>Düzenle.</b> $X(z)=3z^{-1}\\dfrac{z}{z-2}$.</div>
  <div class="step"><b>Temel çift.</b> $|z|>2$ sağ taraflı: $2^n u[n]\\leftrightarrow\\dfrac{z}{z-2}$.</div>
  <div class="step"><b>Kayma özelliği</b> ($z^{-1}\\to n-1$):
  $$x[n]=3\\cdot 2^{\\,n-1}u[n-1]$$</div>`
},
{
  id:'o8', tag:'z', pill:'z', pillTxt:'Z İleri',
  title:'Sol taraflı dizinin Z-dönüşümü',
  problem:`$x[n]=-a^n u[-n-1]$ için $X(z)$ ve ROC bulun.`,
  solution:`
  <div class="step"><b>Tanım.</b> $X(z)=-\\sum_{n=-\\infty}^{-1}a^n z^{-n}=-\\sum_{n=1}^{\\infty}(a^{-1}z)^n$.</div>
  <div class="step"><b>Geometrik seri</b> ($|a^{-1}z|<1\\Rightarrow|z|<|a|$):
  $$X(z)=1-\\frac{1}{1-a^{-1}z}=\\frac{z}{z-a}=\\frac{1}{1-az^{-1}},\\quad |z|<|a|$$</div>
  <div class="note small">İlginç: $a^n u[n]$ ve $-a^n u[-n-1]$ <b>aynı</b> $X(z)$'yi verir, ROC farklıdır. Bu yüzden ROC şart.</div>`
},
{
  id:'o9', tag:'lap', pill:'lap', pillTxt:'Diferansiyel Denklem',
  title:'Diferansiyel denklem → H(s) ve 3 ROC durumu',
  problem:`$y''(t)+y'(t)-2y(t)=x(t)$.<br>(a) $H(s)$, (b) nedensel / kararlı / hiçbiri durumları için $h(t)$.`,
  solution:`
  <div class="step"><b>(a)</b> Laplace: $(s^2+s-2)Y=X$:
  $$H(s)=\\frac{1}{s^2+s-2}=\\frac{1}{(s+2)(s-1)}=-\\frac13\\frac{1}{s+2}+\\frac13\\frac{1}{s-1}$$
  Kutuplar: $s=-2$ ve $s=1$.</div>
  <div class="step"><b>(b-i) Nedensel</b> (ROC $\\mathrm{Re}(s)>1$, her iki kutbun sağı):
  $$h(t)=\\tfrac13(e^{t}-e^{-2t})u(t)$$ (kararsız: $e^t$ patlar)</div>
  <div class="step"><b>(b-ii) Kararlı</b> (ROC $-2<\\mathrm{Re}(s)<1$, $j\\omega$ eksenini içerir):
  $$h(t)=-\\tfrac13 e^{-2t}u(t)-\\tfrac13 e^{t}u(-t)$$ (iki taraflı, nedensel değil)</div>
  <div class="step"><b>(b-iii) Hiçbiri</b> (ROC $\\mathrm{Re}(s)<-2$, sol taraflı):
  $$h(t)=\\tfrac13(e^{-2t}-e^{t})u(-t)$$</div>`
},
{
  id:'o10', tag:'conv', pill:'conv', pillTxt:'Konvolüsyon',
  title:'CT konvolüsyon: e^{-at}u(t) ∗ u(t)',
  problem:`$x(t)=e^{-at}u(t),\\ h(t)=u(t)$ için $y(t)=x*h$ bulun.`,
  solution:`
  <div class="step"><b>İntegral.</b> $y(t)=\\int_{-\\infty}^{\\infty}e^{-a\\tau}u(\\tau)\\,u(t-\\tau)d\\tau$. Sınırlar: $0\\le\\tau\\le t$ (yani $t>0$):
  $$y(t)=\\int_0^{t}e^{-a\\tau}d\\tau=\\left[-\\tfrac1a e^{-a\\tau}\\right]_0^t=\\frac1a(1-e^{-at})$$</div>
  <div class="step"><b>Sonuç:</b> $\\;y(t)=\\dfrac1a(1-e^{-at})u(t)$.</div>
  <div class="note small">İpucu: $u(\\tau)$ alt sınırı $0$, $u(t-\\tau)$ üst sınırı $t$ yapar. Bu yüzden $t>0$ için integral $0\\to t$.</div>`
}
];

/* ---------- TEST SORULARI ---------- */
const QUIZ = [
{cat:'fou', q:`$f(t)=3,\\ -2\\le t\\le2$ (diğer yerde 0). Fourier dönüşümü?`,
 opts:[`$\\frac{6}{\\omega}\\sin2\\omega$`,`$-\\frac{6}{\\omega}\\sin2\\omega$`,`$\\frac{6}{\\omega}\\sin4\\omega$`,`$\\frac{6}{\\omega}\\cos2\\omega$`],
 correct:0, explain:`Dikdörtgen darbe: $\\int_{-2}^{2}3e^{-j\\omega t}dt=\\frac{6}{\\omega}\\sin2\\omega$.`},

{cat:'fou', q:`$x(t)=e^{-at^2}$ (Gauss). Fourier dönüşümü?`,
 opts:[`$\\sqrt{\\frac{\\pi}{a}}\\,e^{-\\omega^2/4a}$`,`$-\\sqrt{\\frac{\\pi}{a}}\\,e^{-\\omega^2/4a}$`,`$\\sqrt{\\frac{\\pi}{a}}\\,e^{-\\omega^4/4a}$`,`$\\sqrt{\\frac{\\pi}{a}}\\,e^{-\\omega^2/4}$`],
 correct:0, explain:`Gauss'un dönüşümü yine Gauss: $\\sqrt{\\pi/a}\\,e^{-\\omega^2/4a}$.`},

{cat:'fou', q:`$x(t)=1,\\ -a\\le t\\le a$ (diğer 0). $X(j\\omega)=?$`,
 opts:[`$2a\\,\\mathrm{sinc}(\\omega a)$`,`$2a\\,\\mathrm{sinc}(\\omega)$`,`$2\\,\\mathrm{sinc}(\\omega a)$`,`$4a\\,\\mathrm{sinc}(\\omega a)$`],
 correct:0, explain:`Genişlik $2a$ dikdörtgen → $2a\\,\\mathrm{sinc}(\\omega a)$.`},

{cat:'fou', q:`$x(t)=e^{-a|t|}$ (çift üstel, $a>0$). $X(j\\omega)=?$`,
 opts:[`$\\frac{2a}{a^2+\\omega^2}$`,`$\\frac{2a}{a^2-\\omega^2}$`,`$\\frac{a}{a^2+\\omega^2}$`,`$\\frac{1}{a+j\\omega}$`],
 correct:0, explain:`İkiye böl: $\\int_{-\\infty}^{0}e^{at}e^{-j\\omega t}dt+\\int_{0}^{\\infty}e^{-at}e^{-j\\omega t}dt=\\frac{1}{a-j\\omega}+\\frac{1}{a+j\\omega}=\\frac{2a}{a^2+\\omega^2}$.`},

{cat:'fou', q:`$x[n]=\\delta[n+2]-\\delta[n-2]$. DTFT $X(e^{j\\omega})=?$`,
 opts:[`$2j\\sin(2\\omega)$`,`$2j\\cos(2\\omega)$`,`$2j\\sin(4\\omega)$`,`$2\\sin(2\\omega)$`],
 correct:0, explain:`$e^{j2\\omega}-e^{-j2\\omega}=2j\\sin(2\\omega)$.`},

{cat:'fou', q:`Periyot $T=3$, $x(t)=3\\ (0\\le t<1.5),\\ -3\\ (1.5\\le t<3)$. Fourier seri katsayısı $a_k=?$`,
 opts:[`$\\frac{6}{k\\pi}\\sin\\!\\big(\\frac{k\\pi}{2}\\big)e^{-jk\\pi/2}$`,`$-\\frac{6}{k\\pi}\\sin\\!\\big(\\frac{k\\pi}{2}\\big)e^{-jk\\pi/2}$`,`$\\frac{6}{k}\\sin\\!\\big(\\frac{k\\pi}{2}\\big)e^{-jk\\pi/2}$`,`$\\frac{6}{k\\pi}\\cos\\!\\big(\\frac{k\\pi}{2}\\big)e^{-jk\\pi/2}$`],
 correct:0, explain:`$a_k=\\frac1T\\int_T x e^{-jk\\omega_0 t}dt$ ile $\\frac{6}{k\\pi}\\sin(\\frac{k\\pi}{2})e^{-jk\\pi/2}$.`},

{cat:'fou', q:`$x(t)=e^{-at}u(t),\\ a>0$. Sürekli Fourier dönüşümü?`,
 opts:[`$\\frac{1}{a+j\\omega}$`,`$\\frac{1}{a-j\\omega}$`,`$\\frac{1}{2a+j\\omega}$`,`$\\frac{1}{a^2+j\\omega^2}$`],
 correct:0, explain:`Temel çift: $e^{-at}u(t)\\leftrightarrow\\frac{1}{a+j\\omega}$.`},

{cat:'sys', q:`LTI sistem: $ay[n-1]+y[n]=x[n]$. Frekans yanıtı $H(e^{j\\omega})=?$`,
 opts:[`$\\frac{1}{1+ae^{-j\\omega}}$`,`$\\frac{1}{1-ae^{-j\\omega}}$`,`$\\frac{1}{2+ae^{-j\\omega}}$`,`$\\frac{1}{1+ae^{j\\omega}}$`],
 correct:0, explain:`DTFT: $(1+ae^{-j\\omega})Y=X\\Rightarrow H=\\frac{1}{1+ae^{-j\\omega}}$.`},

{cat:'sys', q:`Frekans bölgesi $X(e^{j\\omega})=\\frac{1-\\frac13 e^{-j\\omega}}{1-\\frac14 e^{-j\\omega}-\\frac18 e^{-2j\\omega}}$. $x[n]=?$`,
 opts:[`$\\frac79(-\\frac14)^n u[n]+\\frac29(\\frac12)^n u[n]$`,`$\\frac79(-\\frac14)^n u[n]-\\frac29(\\frac12)^n u[n]$`,`$\\frac79(\\frac14)^n u[n]+\\frac29(\\frac12)^n u[n]$`,`$\\frac76(-\\frac14)^n u[n]+\\frac29(\\frac12)^n u[n]$`],
 correct:0, explain:`Payda $(1-\\frac12 e^{-j\\omega})(1+\\frac14 e^{-j\\omega})$; kısmi kesir → $\\frac79(-\\frac14)^n u[n]+\\frac29(\\frac12)^n u[n]$.`},

{cat:'sys', q:`Paralel: $H(e^{j\\omega})=\\frac{-12+5e^{-j\\omega}}{12-7e^{-j\\omega}+e^{-2j\\omega}}$, $h_1[n]=(\\frac13)^n u[n]$. $h_2[n]=?$`,
 opts:[`$-2(\\frac14)^n u[n]$`,`$2(\\frac14)^n u[n]$`,`$-2(\\frac12)^n u[n]$`,`$2(\\frac12)^n u[n]$`],
 correct:0, explain:`$H=h_1+h_2$; $h_2=H-H_1$ kısmi kesirden $-2(\\frac14)^n u[n]$.`},

{cat:'conv', q:`$y(t)=\\frac{d}{dt}\\big(e^{-2(t-1)}u(t-1)\\big)=?$`,
 opts:[`$\\delta(t-1)-2e^{-2(t-1)}u(t-1)$`,`$\\delta(t-1)+2e^{-2(t-1)}u(t-1)$`,`$\\delta(t+1)-2e^{-2(t-1)}u(t-1)$`,`$\\delta(t-1)-2e^{-(t-1)}u(t-1)$`],
 correct:0, explain:`Çarpım türevi: $u$ türevi $\\delta(t-1)$ (üstel orada 1), artı üstelin türevi $-2e^{-2(t-1)}u(t-1)$.`},

{cat:'conv', q:`$x(t)=u(t),\\ h(t)=2e^{-(t-4)}u(t-4)$. Konvolüsyon $y(t)=?$`,
 opts:[`$2(1-e^{-(t-4)})$`,`$2(1+e^{-(t-4)})$`,`$4(1-e^{-(t-4)})$`,`$2(1-e^{-2(t-4)})$`],
 correct:0, explain:`Basamak yanıtı: $\\int 2e^{-(\\tau-4)}d\\tau$ ($4\\to t$) $=2(1-e^{-(t-4)})$, $t>4$.`},

{cat:'conv', q:`$x(t)=1\\ (-1\\le t\\le5),\\ h(t)=(t-1)u(t-1)$. $0\\le t\\le6$ için $y(t)=?$`,
 opts:[`$\\frac12 t^2$`,`$-\\frac12 t^2$`,`$\\frac12 t$`,`$\\frac14 t^2$`],
 correct:0, explain:`Bindirme alanı bir üçgen → $\\frac12 t^2$ (bu aralıkta).`},

{cat:'conv', q:`Aynı sinyaller, $t>6$ için $y(t)=?$`,
 opts:[`$(6t-18)u(t-6)$`,`$(6t-9)u(t+6)$`,`$(3t+18)u(t-6)$`,`$(3t-18)u(t-6)$`],
 correct:0, explain:`Sınır geçişinden sonra doğrusal kuyruk: $(6t-18)u(t-6)$.`},

{cat:'conv', q:`$x(t)=2\\delta(t-1)-2\\delta(t-2)+5\\delta(t-4)$, $h(t)=3\\delta(t-3)+2\\delta(t-5)$. $y(t)=?$`,
 opts:[`$6\\delta(t-4)-6\\delta(t-5)+4\\delta(t-6)+11\\delta(t-7)+10\\delta(t-9)$`,
       `$\\delta(t-4)-6\\delta(t-5)+4\\delta(t-6)+11\\delta(t-7)+10\\delta(t-9)$`,
       `$6\\delta(t-4)+6\\delta(t-5)+4\\delta(t-6)+11\\delta(t-7)+10\\delta(t-9)$`,
       `$6\\delta(t-4)-6\\delta(t-5)+4\\delta(t-6)-11\\delta(t-7)+10\\delta(t-9)$`],
 correct:0, explain:`Her $\\delta$ çiftini kaydırıp topla: gecikmeler eklenir, katsayılar çarpılır.`},

{cat:'conv', q:`$x(t)=2\\sin2\\pi t\\cdot\\delta(t-\\tfrac14),\\ h(t)=2[u(t-2)-u(t-4)]$. $y(t)=?$`,
 opts:[`$4[u(t-2{,}25)-u(t-4{,}25)]$`,`$4[u(t-2{,}25)+u(t-4{,}25)]$`,`$[u(t-2{,}25)-u(t-4{,}25)]$`,`$2[u(t-2{,}25)-u(t-4{,}25)]$`],
 correct:0, explain:`$\\delta$ ağırlığı $2\\sin(\\pi/2)=2$; $x=2\\delta(t-0{,}25)$, $h$ ile konvolüsyon $0{,}25$ kaydırır → genlik 4.`},

{cat:'conv', q:`LTI sistem $h(t)=e^{-t}u(t)$, girdi $x(t)=3\\cos(t-\\pi)$. Çıkış $y(t)$ genliği nedir?`,
 opts:[`$\\frac{3}{\\sqrt2}$`,`$3$`,`$\\frac{3}{2}$`,`$\\frac{\\sqrt3}{2}$`],
 correct:0, explain:`$H(j1)=\\frac{1}{1+j}=\\frac{1}{\\sqrt2}e^{-j\\pi/4}$. Genlik $=3\\cdot\\frac{1}{\\sqrt2}=\\frac{3}{\\sqrt2}\\approx2.12$, faz $-\\frac{\\pi}{4}$.`},

{cat:'sys', q:`$x(t)=e^{-at}u(t)*u(t)=?$`,
 opts:[`$\\frac1a(1-e^{-at})u(t)$`,`$\\frac1a(1+e^{-at})u(t)$`,`$\\frac1a(1-e^{-at})u(t-1)$`,`$\\frac1a(1-e^{at})u(t)$`],
 correct:0, explain:`$\\int_0^t e^{-a\\tau}d\\tau=\\frac1a(1-e^{-at})$.`},

{cat:'conv', q:`$x[n]=(\\frac12)^n u[n],\\ h[n]=\\delta[n]-\\frac12\\delta[n-1]$. $y[n]=x*h=?$`,
 opts:[`$\\delta[n]$`,`$\\delta[n-1]$`,`$\\delta[n+1]$`,`$\\delta[n-2]$`],
 correct:0, explain:`$(\\frac12)^n u[n]-\\frac12(\\frac12)^{n-1}u[n-1]=(\\frac12)^n(u[n]-u[n-1])=\\delta[n]$.`},

{cat:'sys', q:`$x[n]=(\\frac12)^{n+1}u[n-2],\\ h[n]=u[n+3]$. $y[n]=?$`,
 opts:[`$(\\frac14-\\frac{1}{2^{n+4}})u[n+1]$`,`$(\\frac12-\\frac{1}{2^{n+4}})u[n+1]$`,`$(\\frac18-\\frac{1}{2^{n+4}})u[n+1]$`,`$(\\frac14-\\frac{1}{2^{n+4}})u[n-1]$`],
 correct:0, explain:`Geometrik toplam ile $(\\frac14-\\frac{1}{2^{n+4}})u[n+1]$.`},

{cat:'conv', q:`$x(t)=u(t-1)-u(t-2),\\ h(t)=e^{-t}u(t)$. $1\\le t\\le2$ için $x*h=?$`,
 opts:[`$1-e^{-(t-1)}$`,`$1+e^{-(t-1)}$`,`$1-e^{(t-1)}$`,`$1-e^{-(t-2)}$`],
 correct:0, explain:`$\\int_1^t e^{-(t-\\tau)}d\\tau=1-e^{-(t-1)}$, $1\\le t\\le2$.`},

{cat:'lap', q:`$X(s)=\\frac{1}{s(s+1)^2},\\ \\mathrm{Re}(s)>-1$. $x(t)=?$`,
 opts:[`$(1-e^{-t}-te^{-t})u(t)$`,`$(1+e^{-t}+te^{-t})u(t)$`,`$(1-e^{-t}+te^{-t})u(t)$`,`$(1-e^{t}-te^{t})u(t)$`],
 correct:0, explain:`Kısmi kesir $\\frac1s-\\frac{1}{s+1}-\\frac{1}{(s+1)^2}$; sağ taraflı.`},

{cat:'z', q:`$X(z)=\\frac{3}{z-2},\\ |z|>2$. $x[n]=?$`,
 opts:[`$3\\cdot2^{n-1}u[n-1]$`,`$3\\cdot2^{n}u[n]$`,`$3\\cdot2^{n+1}u[n+1]$`,`$-3\\cdot2^{n-1}u[-n-1]$`],
 correct:0, explain:`$X=3z^{-1}\\frac{z}{z-2}$; kayma ile $3\\cdot2^{n-1}u[n-1]$.`},

{cat:'lap', q:`CT LTI: $x(t)=u(t)\\Rightarrow y(t)=2e^{-3t}u(t)$. Dürtü yanıtı $h(t)=?$`,
 opts:[`$2\\delta(t)-6e^{-3t}u(t)$`,`$2e^{-3t}u(t)$`,`$6e^{-3t}u(t)-2\\delta(t)$`,`$2\\delta(t)+6e^{-3t}u(t)$`],
 correct:0, explain:`$H=\\frac{2s}{s+3}=2-\\frac{6}{s+3}\\Rightarrow h=2\\delta(t)-6e^{-3t}u(t)$.`}
];

/* ---------- FINAL SİMÜLASYONU ---------- */
const SIM = [
{n:1, pill:'fou', title:'Problem 1 — Ayrık-zamanlı sistem (25p)',
 q:`$y[n]-0.2\\,y[n-1]=x[n]-0.5\\,x[n-1]+0.1\\,x[n-2]$.<br>
 (a) Frekans yanıtı $H(e^{j\\omega})$, (b) dürtü yanıtı $h[n]$, (c) $x[n]=(\\tfrac12)^n u[n]$ için çıkış $y[n]$.`,
 ans:`(a) $H=\\frac{1-0.5e^{-j\\omega}+0.1e^{-2j\\omega}}{1-0.2e^{-j\\omega}}$ &nbsp;
 (b) $h[n]=(0.2)^n u[n]-0.5(0.2)^{n-1}u[n-1]+0.1(0.2)^{n-2}u[n-2]$ &nbsp;
 (c) $y[n]=(0.2)^n u[n]-\\frac53(0.2)^n u[n-2]+\\frac23(0.5)^n u[n-2]$. <br>(Detay: Çözümlü Örnekler → o1)`},
{n:2, pill:'fou', title:'Problem 2 — İkinci mertebe fark denklemi (25p)',
 q:`$y[n]-\\tfrac34 y[n-1]+\\tfrac18 y[n-2]=x[n]$.<br>(a) $H(e^{j\\omega})$, (b) $h[n]$.`,
 ans:`(a) $H=\\frac{1}{(1-\\frac12 e^{-j\\omega})(1-\\frac14 e^{-j\\omega})}$ &nbsp; (b) $h[n]=[2(\\frac12)^n-(\\frac14)^n]u[n]$. <br>(Detay: o2)`},
{n:3, pill:'lap', title:'Problem 3 — Ters Laplace (25p)',
 q:`$X(s)=\\dfrac{1}{s(s+1)^2},\\ -1<\\mathrm{Re}(s)<0$. $x(t)=?$`,
 ans:`Kısmi kesir $\\frac1s-\\frac{1}{s+1}-\\frac{1}{(s+1)^2}$. Bu ROC'ta ($s=0$ kutbunun solu, $s=-1$ sağı):
 $x(t)=-u(-t)-(1+t)e^{-t}u(t)$. <br>(Detay: o3 — farklı ROC karşılaştırması)`},
{n:4, pill:'z', title:'Problem 4 — Z-dönüşümü + kutup-sıfır (25p)',
 q:`(a) $x[n]=(\\tfrac12)^n u[n]+(\\tfrac13)^n u[n]$ &nbsp; (b) $x[n]=(\\tfrac13)^n u[n]+(\\tfrac12)^n u[-n-1]$<br>
 Her biri için $X(z)$, ROC ve kutup-sıfır bölgesini çizin.`,
 ans:`(a) $X=\\frac{z}{z-\\frac12}+\\frac{z}{z-\\frac13}$, ROC $|z|>\\frac12$, sıfırlar $0,\\frac{5}{12}$, kutuplar $\\frac12,\\frac13$.<br>
 (b) $X=\\frac{z}{z-\\frac13}-\\frac{z}{z-\\frac12}$, ROC halka $\\frac13<|z|<\\frac12$ (biri sağ, biri sol taraflı), kutuplar $\\frac12,\\frac13$. <br>(Detay: o4)`}
];

/* ============================================================
   RENDER + ETKİLEŞİM
   ============================================================ */
function typeset(el){ if(window.MathJax&&MathJax.typesetPromise) MathJax.typesetPromise(el?[el]:undefined); }

/* --- Navigasyon --- */
const nav=document.getElementById('nav');
nav.addEventListener('click',e=>{
  const b=e.target.closest('button'); if(!b)return;
  document.querySelectorAll('#nav button').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById(b.dataset.view).classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
});

/* --- Çözümlü örnekler --- */
function renderOrnek(filter='all'){
  const box=document.getElementById('ornekList'); box.innerHTML='';
  ORNEKLER.filter(o=>filter==='all'||o.tag===filter).forEach(o=>{
    const d=document.createElement('div'); d.className='card'; d.style.marginBottom='16px';
    d.innerHTML=`
      <div class="tag-row"><span class="pill ${o.pill}">${o.pillTxt}</span></div>
      <h3>${o.title}</h3>
      <p>${o.problem}</p>
      <details><summary>Çözümü Göster</summary><div class="body">${o.solution}</div></details>`;
    box.appendChild(d);
  });
  typeset(box);
}
document.getElementById('ornekFilter').addEventListener('click',e=>{
  const b=e.target.closest('button'); if(!b)return;
  document.querySelectorAll('#ornekFilter button').forEach(x=>x.classList.remove('active'));
  b.classList.add('active'); renderOrnek(b.dataset.f);
});

/* --- Test --- */
let answered={};
function renderQuiz(filter='all'){
  const box=document.getElementById('quizList'); box.innerHTML='';
  const list=QUIZ.map((q,i)=>({q,i})).filter(o=>filter==='all'||o.q.cat===filter);
  document.getElementById('scoreTotal').textContent=QUIZ.length;
  list.forEach(({q,i})=>{
    const d=document.createElement('div'); d.className='q'; d.dataset.idx=i;
    let opts=q.opts.map((o,j)=>`<button class="opt" data-i="${i}" data-j="${j}">${o}</button>`).join('');
    d.innerHTML=`
      <div class="qhead"><span class="qnum">Soru ${i+1}</span><span class="pill ${q.cat}">${catName(q.cat)}</span></div>
      <div class="qtext">${q.q}</div>
      <div class="opts">${opts}</div>
      <div class="feedback" id="fb${i}"></div>`;
    box.appendChild(d);
    if(answered[i]!==undefined){                 // kayıtlı cevabı göster
      d.querySelectorAll('.opt').forEach((o,k)=>{
        o.classList.add('disabled');
        if(k===q.correct) o.classList.add('correct');
      });
      const fb=d.querySelector('#fb'+i);
      fb.className='feedback show '+(answered[i]?'ok':'no');
      fb.innerHTML=(answered[i]?'✓ Doğru. ':'✗ Yanlış. ')+q.explain;
    }
  });
  typeset(box);
  updateScore();
}
function catName(c){return {fou:'Fourier',conv:'Konvolüsyon',sys:'Sistem/H',lap:'Laplace',z:'Z'}[c]||c;}

document.getElementById('quizList').addEventListener('click',e=>{
  const b=e.target.closest('.opt'); if(!b)return;
  const i=+b.dataset.i, j=+b.dataset.j;
  if(answered[i]!==undefined) return;            // tek deneme
  const q=QUIZ[i];
  answered[i]=(j===q.correct);
  const card=b.closest('.q');
  card.querySelectorAll('.opt').forEach((o,k)=>{
    o.classList.add('disabled');
    if(k===q.correct) o.classList.add('correct');
    if(k===j && j!==q.correct) o.classList.add('wrong');
  });
  const fb=document.getElementById('fb'+i);
  fb.className='feedback show '+(answered[i]?'ok':'no');
  fb.innerHTML=(answered[i]?'✓ Doğru. ':'✗ Yanlış. ')+q.explain;
  typeset(fb);
  updateScore();
  saveProgress();
});
function updateScore(){
  const keys=Object.keys(answered);
  const right=keys.filter(k=>answered[k]).length;
  const wrong=keys.length-right;
  document.getElementById('scoreNow').textContent=keys.length;
  document.getElementById('scoreRight').textContent=right;
  document.getElementById('scoreWrong').textContent=wrong;
}
document.getElementById('quizFilter').addEventListener('click',e=>{
  const b=e.target.closest('button'); if(!b)return;
  document.querySelectorAll('#quizFilter button').forEach(x=>x.classList.remove('active'));
  b.classList.add('active'); renderQuiz(b.dataset.f);
});
document.getElementById('resetQuiz').addEventListener('click',()=>{
  answered={}; localStorage.removeItem('ssQuiz');
  const af=document.querySelector('#quizFilter button.active');
  renderQuiz(af?af.dataset.f:'all');
});
function saveProgress(){ localStorage.setItem('ssQuiz',JSON.stringify(answered)); }
function loadProgress(){ try{answered=JSON.parse(localStorage.getItem('ssQuiz'))||{};}catch(e){answered={};} }

/* --- Soru Bankası --- */
const BANK_NAMES={fourier:'Fourier',fseries:'Fourier Serisi',dtft:'DTFT / Sistem',
  laplace:'Laplace',z:'Z-Dönüşümü',conv:'Konvolüsyon',sys:'Sistem / Sinyal',sampling:'Örnekleme'};
const BANK_PILL={fourier:'fou',fseries:'fou',dtft:'sys',laplace:'lap',z:'z',conv:'conv',sys:'sys',sampling:'fou'};
let bankFilter='all', bankSearch='';
function renderBank(){
  const box=document.getElementById('bankList'); box.innerHTML='';
  const s=bankSearch.trim().toLowerCase();
  let shown=0;
  QBANK.forEach((item,idx)=>{
    if(bankFilter!=='all' && item.topic!==bankFilter) return;
    if(s){
      const hay=(item.q+' '+(item.a||'')+' '+(item.fig||'')+' '+BANK_NAMES[item.topic]).toLowerCase();
      if(!hay.includes(s)) return;
    }
    shown++;
    const d=document.createElement('div'); d.className='card'; d.style.marginBottom='14px';
    let opts='';
    if(item.opts && item.opts.length){
      opts='<div style="margin:10px 0">'+item.opts.map((o,j)=>
        `<div class="opt disabled${j===item.correct?' correct':''}" style="cursor:default">${o}</div>`).join('')+'</div>';
    }
    const fig=item.fig?`<div class="note small" style="margin:8px 0"><b>Şekil:</b> ${item.fig}</div>`:'';
    d.innerHTML=`
      <div class="tag-row"><span class="pill ${BANK_PILL[item.topic]}">${BANK_NAMES[item.topic]}</span>
        <span class="muted small">#${idx+1}</span></div>
      <p style="margin:10px 0">${item.q}</p>
      ${fig}
      <details><summary>Cevabı Göster</summary><div class="body">${opts}<p>${item.a||''}</p></div></details>`;
    box.appendChild(d);
  });
  if(shown===0) box.innerHTML='<div class="card muted">Eşleşen soru yok.</div>';
  const sh=document.getElementById('bankShown'); if(sh) sh.textContent=shown+' soru';
  typeset(box);
}
document.getElementById('bankFilter').addEventListener('click',e=>{
  const b=e.target.closest('button'); if(!b)return;
  document.querySelectorAll('#bankFilter button').forEach(x=>x.classList.remove('active'));
  b.classList.add('active'); bankFilter=b.dataset.f; renderBank();
});
document.getElementById('bankSearch').addEventListener('input',e=>{
  bankSearch=e.target.value; renderBank();
});

/* --- Simülasyon --- */
function renderSim(){
  const box=document.getElementById('simList'); box.innerHTML='';
  SIM.forEach(s=>{
    const d=document.createElement('div'); d.className='card'; d.style.marginBottom='16px';
    d.innerHTML=`
      <div class="tag-row"><span class="pill ${s.pill}">${s.title}</span></div>
      <p style="margin-top:12px">${s.q}</p>
      <details><summary>Cevabı Göster</summary><div class="body">${s.ans}</div></details>`;
    box.appendChild(d);
  });
  typeset(box);
}

/* --- Başlat --- */
const bc=document.getElementById('bankCount'); if(bc) bc.textContent=QBANK.length;
const tq=document.getElementById('totalQ'); if(tq) tq.textContent=(QBANK.length+QUIZ.length+ORNEKLER.length);
loadProgress();
renderOrnek();
renderBank();
renderQuiz();
renderSim();
