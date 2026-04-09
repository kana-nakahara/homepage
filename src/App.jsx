import { useState, useEffect, useRef } from 'react'
import './App.css'
import excelLimitImg from './assets/ExcelやAccessでの管理に限界がきている.png'
import speedCostImg from './assets/開発スピード・コストが気になる.png'
import workflowImg from './assets/業務が効率的でない.png'
import dataMgmtImg from './assets/情報を一元管理できていない.png'
import dxAiImg from './assets/DX化・AI活用を進めたい.png'
import systemDissatisfyImg from './assets/現在のシステムや開発体制に不満がある.png'
import logoImg from './assets/会社ロゴのみ.png'
import zeroCoderIntroImg from './assets/ZeroCoderご紹介.png'
import topImg from './assets/top.jpg'
import philosophyImg from './assets/philosophy.jpg'
import zeroCoderBgImg from './assets/zerocoder.jpg'
import arrowOutline from './assets/arrow-outline.svg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Animation refs and effect
  const bgRef = useRef(null)
  const titleBarRef = useRef(null)
  const navRef = useRef(null)
  const philosophyRef = useRef(null)
  const [philosophyInView, setPhilosophyInView] = useState(false)
  const serviceLabelRef = useRef(null)
  const serviceZeroRef = useRef(null)
  const serviceDxRef = useRef(null)
  const serviceAiRef = useRef(null)
  const [serviceLabelInView, setServiceLabelInView] = useState(false)
  const [serviceZeroInView, setServiceZeroInView] = useState(false)
  const [serviceDxInView, setServiceDxInView] = useState(false)
  const [serviceAiInView, setServiceAiInView] = useState(false)

  useEffect(() => {
    // Animate background image
    if (bgRef.current) {
      setTimeout(() => {
        bgRef.current.classList.add('is-visible')
      }, 120)
    }
    // Animate title bar and nav together, after DOM is painted
    setTimeout(() => {
      requestAnimationFrame(() => {
        if (titleBarRef.current) titleBarRef.current.classList.add('is-visible')
        if (navRef.current) navRef.current.classList.add('is-visible')
      })
    }, 500)

    // Scroll trigger for philosophy section
    const handleScroll = () => {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight
      const checkInView = (ref, setter) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        if (rect.top < windowHeight * 0.85) setter(true)
      }
      checkInView(philosophyRef, setPhilosophyInView)
      checkInView(serviceLabelRef, setServiceLabelInView)
      checkInView(serviceZeroRef, setServiceZeroInView)
      checkInView(serviceDxRef, setServiceDxInView)
      checkInView(serviceAiRef, setServiceAiInView)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    // Initial check in case already in view
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="page" id="top">
      <div className="site-nav" ref={navRef}>
        <div className="site-nav__inner">
          <a className="site-nav__brand" href="#top">
            <img className="site-nav__logo" src={logoImg} alt="UNITARY" />
            UNITARY
          </a>
          <div className="site-nav__links">
            <a href="#philosophy">企業理念</a>
            <a href="#business">事業内容</a>
            <a href="#company">会社概要</a>
            <a href="#profile">代表プロフィール</a>
            <a href="#contact">お問い合わせ</a>
          </div>
          <button
            className="site-nav__toggle"
            type="button"
            aria-label="メニューを開く"
            aria-expanded={isMenuOpen}
            aria-controls="site-nav-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <nav
          id="site-nav-menu"
          className={`site-nav__menu ${isMenuOpen ? 'site-nav__menu--open' : ''}`}
        >
          <a href="#philosophy" onClick={() => setIsMenuOpen(false)}>
            企業理念
          </a>
          <a href="#business" onClick={() => setIsMenuOpen(false)}>
            事業内容
          </a>
          <a href="#company" onClick={() => setIsMenuOpen(false)}>
            会社概要
          </a>
          <a href="#profile" onClick={() => setIsMenuOpen(false)}>
            代表プロフィール
          </a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            お問い合わせ
          </a>
        </nav>
      </div>
      <header className="hero hero--with-bg">
        <img
          src={topImg}
          alt="あるべき姿を実現する 背景"
          className="hero__bg-image"
          ref={bgRef}
        />
        <div className="hero__content hero__content--center">
          <div className="hero__title-bar" ref={titleBarRef}>
            <h1 className="hero__title" style={{margin: 0}}>あるべき姿を実現する</h1>
          </div>
        </div>
      </header>
      
      <section
        className={`philosophy-visual philosophy-visual--full${philosophyInView ? ' philosophy-visual--inview' : ''}`}
        id="philosophy"
        ref={philosophyRef}
      >
        <div className="philosophy-visual__content">
          <div className="philosophy-label">- ABOUT -</div>
          <div className="philosophy-main-texts">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.3em', marginTop: '1.5em' }}>
              <span className="philosophy-main-text philosophy-main-text--bold">UNITARYは</span>
              <span className="philosophy-main-text philosophy-main-text--bold">情報系・AI分野の学術的な専門知識と豊富な経験を持つメンバーで</span>
              <span className="philosophy-main-text philosophy-main-text--bold">開発チームを構成しております</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.3em' , marginTop: '1.5em'}}>
              <span className="philosophy-main-text philosophy-main-text--small">各メンバーが常にあるべき姿を考え</span>
              <span className="philosophy-main-text philosophy-main-text--small">確かな技術力でそれを実現することで</span>
              <span className="philosophy-main-text philosophy-main-text--small">お客様の可能性を最大限に引き出せるようサポートいたします</span>
            </div>
          </div>
        </div>
        <div className="philosophy-visual__img-shadow"></div>
        <img src={philosophyImg} alt="philosophy" className="philosophy-visual__img" />
      </section>


      <div ref={serviceLabelRef} className={`business-label philosophy-label slide-up${serviceLabelInView ? ' slide-up--inview' : ''}`} style={{ textAlign: 'center', marginTop: '4rem' }}>- SERVICE -</div>
      <section className="business-visual" id="business">
        <div ref={serviceZeroRef} className={`business-visual__content slide-up${serviceZeroInView ? ' slide-up--inview' : ''}`} style={{position: 'relative'}}>
          <div className="philosophy-main-texts business-main-vertical">
            <div className="business-block--zerocoder">
              <span className="philosophy-main-text philosophy-main-text--bold business-title-blue">自社製ノーコードフレームワーク『ZeroCoder』によるシステム開発</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.3em' }}>
              <span className="philosophy-main-text">20 年以上に渡って蓄積されたノウハウと、実績に裏付けられた確かな技術力・提案力により</span>
              <span className="philosophy-main-text">多種多様な業務システム・Webシステム・Webサイト・スマホアプリを</span>
              <span className="philosophy-main-text">安価かつスピーディに企画・開発いたします</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.3em' }}>
              <span className="philosophy-main-text philosophy-main-text--small">散在した社内データの一元管理や集計・分析機能、プロセス管理はもちろん</span>
              <span className="philosophy-main-text philosophy-main-text--small">複雑なビジネスロジックの実現も強みとしております</span>
            </div>
          </div>
          <button className="business-arrow-btn" aria-label="詳細へ">
            <img src={arrowOutline} alt="arrow" />
          </button>
        </div>
      </section>

      <section className="business-visual" id="business-dx">
        <div ref={serviceDxRef} className={`business-visual__content--dx slide-up${serviceDxInView ? ' slide-up--inview' : ''}`} style={{position: 'relative'}}>
          <div className="philosophy-main-texts business-main-vertical business-main-vertical--right">
            <div className="business-block--zerocoder">
              <span className="philosophy-main-text philosophy-main-text--bold business-title-blue">DX推進のご支援</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3em' }}>
              <span className="philosophy-main-text">企業内に散在するデータや業務プロセスを整理・可視化することで</span>
              <span className="philosophy-main-text">一元管理されたデータ基盤の構築をご支援いたします</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3em' }}>
              <span className="philosophy-main-text philosophy-main-text--small">蓄積されたデータを活用し、経営状況や事業活動を多角的に分析できる環境を整備することで</span>
              <span className="philosophy-main-text philosophy-main-text--small">データに基づいた経営戦略・意思決定を可能にします</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3em' }}>
              <span className="philosophy-main-text philosophy-main-text--small">AI活用を見据えたデータ設計・システム構造の整備まで一貫してサポートいたします</span>
            </div>
          </div>
          <button className="business-arrow-btn" aria-label="詳細へ">
            <img src={arrowOutline} alt="arrow" />
          </button>
        </div>
      </section>

      <section className="business-visual" id="business-ai">
        <div ref={serviceAiRef} className={`business-visual__content--ai slide-up${serviceAiInView ? ' slide-up--inview' : ''}`} style={{position: 'relative'}}>
          <div className="philosophy-main-texts business-main-vertical">
            <div>
              <span className="philosophy-main-text philosophy-main-text--bold business-title-blue">AIを活用した業務改善</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.3em' }}>
              <span className="philosophy-main-text">業務効率化・自動化を推進し、生産性の向上を実現します</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.3em' }}>
              <span className="philosophy-main-text philosophy-main-text--small">一元管理されたデータを活用したAIによるデータ分析・業務支援を通じて</span>
              <span className="philosophy-main-text philosophy-main-text--small">経験などに依存していた業務判断を最適化し、業務品質の向上を支援いたします</span>
            </div>
            <div>
              <span className="philosophy-main-text philosophy-main-text--small">既存システムや業務フローと連携した実践的なAI導入により</span>
              <span className="philosophy-main-text philosophy-main-text--small">現場で継続的に活用できる仕組みを構築します</span>
            </div>
          </div>
          <button className="business-arrow-btn" aria-label="詳細へ">
            <img src={arrowOutline} alt="arrow" />
          </button>
        </div>
      </section>

      <section id="worries">
        <div className="worries">
          <h3 className="worries__title">こんなお悩みはありませんか？</h3>
          <div className="worries__grid">
            <article className="worry-card">
              <h4>ExcelやAccessでの管理に限界がきている</h4>
              <ul>
                <li>データが多すぎて動作が遅い</li>
                <li>同時編集がやりづらい</li>
                <li>権限管理が弱い</li>
                <li>変更履歴を追えない</li>
                <li>Webや他システムと連携できない</li>
                <li>Excelマクロが多く属人化している</li>
              </ul>
              <img
                className="worry-card__image"
                src={excelLimitImg}
                alt="ExcelやAccessでの管理に限界がきている"
              />
            </article>
            <article className="worry-card">
              <h4>開発スピード・コストが気になる</h4>
              <ul>
                <li>開発期間が長すぎる</li>
                <li>運用検証までに時間がかかる</li>
                <li>バグが収束せず開発、改修が終わらない</li>
                <li>開発費用が高すぎる</li>
                <li>小さな改修でも数十万円かかる</li>
                <li>保守費用が高い</li>
              </ul>
              <img
                className="worry-card__image"
                src={speedCostImg}
                alt="開発スピード・コストが気になる"
              />
            </article>
            <article className="worry-card">
              <h4>業務が効率的でない</h4>
              <ul>
                <li>同じ情報を何度も入力している</li>
                <li>手作業で情報を転記している</li>
                <li>業務が属人化している</li>
                <li>紙、FAX、メールがまだ残っている</li>
                <li>進捗管理がブラックボックス化している</li>
                <li>承認フローがアナログ</li>
                <li>プロセス管理ができていない</li>
              </ul>
              <img
                className="worry-card__image"
                src={workflowImg}
                alt="業務が効率的でない"
              />
            </article>
            <article className="worry-card">
              <h4>情報を一元管理できていない</h4>
              <ul>
                <li>情報が社内に散らばっている</li>
                <li>最新データがどれか分からない</li>
                <li>同じ情報が異なるシステムに存在する</li>
                <li>データは沢山あるのに活用できていない</li>
                <li>名刺がバラバラで顧客を一元管理できていない</li>
                <li>商談履歴が個人のメールにしか残っていない</li>
                <li>データに基づく経営ができていない</li>
              </ul>
              <img
                className="worry-card__image"
                src={dataMgmtImg}
                alt="情報を一元管理できていない"
              />
            </article>
            <article className="worry-card">
              <h4>DX化・AI活用を進めたい</h4>
              <ul>
                <li>DX化、AI活用を進めたいがどうすれば良いか分からない</li>
                <li>事業拡大にシステムが追い付かなくなってしまった</li>
                <li>売上を分析してビジネス戦略を立てたい</li>
                <li>AIを活用するためにデータ管理体制を整えたい</li>
                <li>自動化を進めて業務を効率化したい</li>
              </ul>
              <img
                className="worry-card__image"
                src={dxAiImg}
                alt="DX化・AI活用を進めたい"
              />
            </article>
            <article className="worry-card">
              <h4>現在のシステムや開発体制に不満がある</h4>
              <ul>
                <li>システムが使いづらい</li>
                <li>仕様変更に弱く自由度が低い</li>
                <li>複雑な機能だと実現できない or 追加コストがかかる</li>
                <li>データ分析、集計機能が弱い</li>
                <li>他システムとの連携やAPI連携が弱い</li>
                <li>スマホ対応していない</li>
              </ul>
              <img
                className="worry-card__image"
                src={systemDissatisfyImg}
                alt="現在のシステムや開発体制に不満がある"
              />
            </article>
          </div>
          <h3 className="worries__title" style={{ marginTop: "6rem" }}>UNITARYならすべて解消できます！</h3>
          <div className="zero-coder-intro">
            <img src={zeroCoderIntroImg} alt="ZeroCoderご紹介" />
          </div>
        </div>
      </section>

      <section className="section section--center" id="company">
        <div className="section__header">
          <h2>会社概要</h2>
          <hr className="section__divider" />
        </div>
        <div className="company-card">
          <dl>
            <div>
              <dt>会社名</dt>
              <dd>株式会社 UNITARY</dd>
            </div>
            <div>
              <dt>所在地</dt>
              <dd>〒1500021 東京都渋谷区恵比寿西 2 丁目 4 番 8 号ウィンド恵比寿ビル 8F</dd>
            </div>
            <div>
              <dt>代表取締役</dt>
              <dd>中原 華奈</dd>
            </div>
            <div>
              <dt>資本金</dt>
              <dd>3,000,000円</dd>
            </div>
            <div>
              <dt>事業内容</dt>
              <dd>IT ソフトウェアの企画・開発・運用・保守、DX推進支援、AIを活用した業務改善支援</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section section--center" id="profile">
        <div className="section__header">
          <h2>代表プロフィール</h2>
          <hr className="section__divider" />
        </div>
        <div className="company-card">
          <dl>
            <div>
              <dt>1996 年</dt>
              <dd>神奈川県鎌倉市にて生まれる</dd>
            </div>
            <div>
              <dt>2018 年</dt>
              <dd>東京工業大学（現東京科学大学）理学部物理学科　卒業</dd>
            </div>
            <div>
              <dt>2020 年</dt>
              <dd>東京工業大学大学院（現東京科学大学大学院）情報理工学院情報工学系知能情報コース　卒業</dd>
            </div>
            <div>
              <dt>2020 年</dt>
              <dd>日本アイ・ビー・エム株式会社に入社、エンジニアとして多くのプロダクトの開発に携わる</dd>
            </div>
            <div>
              <dt>2023 年</dt>
              <dd>コンシューマーゲーム会社に入社、ゲームプログラマーとしてタイトル開発に従事</dd>
            </div>
            <div>
              <dt>2024 年</dt>
              <dd>30歳未満の若手MVP賞を受賞</dd>
            </div>
            <div>
              <dt>2024 年</dt>
              <dd>株式会社 UNITARY を立ち上げる</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section section--cta section--center" id="contact">
        <div className="section__header">
          <h2>お問い合わせ</h2>
          <p>お気軽にご相談ください</p>
        </div>
        <a className="section__cta" href="mailto:info@unitary.jp">
          info@unitary.jp
        </a>
      </section>
    </div>
  )
}

export default App
